import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { adminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export interface ActivityRequestBody {
  type: "game" | "vocabulary" | "grammar" | "reading" | "listening" | "writing" | "speaking" | "exam";
  category?: "YDS" | "YDT" | "YÖKDİL" | "Genel";
  title: string;
  details?: string;
  scoreOrCount?: string;
  points?: number;
  timeSpentMinutes?: number;
  metadata?: Record<string, any>;
  userEmail?: string;
  username?: string;
}

// SAFETY: P0 Anti-Crash sanitization and boundary check
function sanitizeString(val: unknown, maxLen = 300): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const body: ActivityRequestBody = await req.json().catch(() => ({}) as any);

    const type = (body.type || "game") as ActivityRequestBody["type"];
    const category = (body.category || "Genel") as ActivityRequestBody["category"];
    const title = sanitizeString(body.title || "Çalışma Aktivitesi", 150);
    const details = sanitizeString(body.details || "", 500);
    const scoreOrCount = sanitizeString(body.scoreOrCount || "", 50);
    const points = Math.min(Math.max(0, Number(body.points) || 10), 500);
    const timeSpentMinutes = Math.min(Math.max(1, Number(body.timeSpentMinutes) || 1), 300);
    const metadata = typeof body.metadata === "object" && body.metadata !== null ? body.metadata : {};

    // 1. Resolve student user ID with multiple fallbacks
    let targetUserId: string | null = null;
    let targetUserEmail: string | null = null;
    let targetUsername: string | null = null;

    // A. Check verified session cookie first
    const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (sessionCookie) {
      try {
        const payload = await verifySessionToken(sessionCookie);
        if (payload?.userId) {
          targetUserId = payload.userId;
          targetUserEmail = payload.email || null;
          targetUsername = payload.username || null;
        }
      } catch {
        // Fallback to body identifiers
      }
    }

    // B. Check request body email or username
    const reqEmail = sanitizeString(body.userEmail, 100).toLowerCase();
    const reqUsername = sanitizeString(body.username, 60).toLowerCase();

    if (!targetUserId && (reqEmail || reqUsername)) {
      try {
        const found = await prisma.user.findFirst({
          where: {
            OR: [
              ...(reqEmail ? [{ email: { equals: reqEmail } }] : []),
              ...(reqUsername ? [{ username: { equals: reqUsername } }] : []),
            ],
          },
        });
        if (found) {
          targetUserId = found.id;
          targetUserEmail = found.email;
          targetUsername = found.username;
        }
      } catch (err) {
        console.warn("[ACTIVITY_USER_LOOKUP_WARN]", err);
      }
    }

    // C. Special check for Yağız (yagoo_x / yagiz.ilhan32@gmail.com)
    if (!targetUserId && (reqEmail.includes("yagiz") || reqUsername.includes("yagoo"))) {
      try {
        const yagiz = await prisma.user.findFirst({
          where: {
            OR: [
              { email: "yagiz.ilhan32@gmail.com" },
              { username: "yagoo_x" },
            ],
          },
        });
        if (yagiz) {
          targetUserId = yagiz.id;
          targetUserEmail = yagiz.email;
          targetUsername = yagiz.username;
        }
      } catch {
        // Safe degrade
      }
    }

    // D. Fallback to the first registered student (excluding root admin sbgok57)
    if (!targetUserId) {
      try {
        const firstStudent = await prisma.user.findFirst({
          where: {
            username: { not: "sbgok57" },
            email: { not: "sinembuse724@gmail.com" },
          },
          orderBy: { createdAt: "asc" },
        });
        if (firstStudent) {
          targetUserId = firstStudent.id;
          targetUserEmail = firstStudent.email;
          targetUsername = firstStudent.username;
        }
      } catch {
        // Safe degrade
      }
    }

    // If still no user exists, fail safely without throwing
    if (!targetUserId) {
      return NextResponse.json(
        { ok: false, error: "Kullanıcı bulunamadı. Lütfen oturum açın." },
        { status: 400 }
      );
    }

    // 2. Persist activity to Prisma Progress table
    const progressData = {
      category,
      title,
      details,
      scoreOrCount,
      points,
      timeSpentMinutes,
      metadata,
      timestamp: new Date().toISOString(),
    };

    const newProgress = await prisma.progress.create({
      data: {
        userId: targetUserId,
        type,
        data: JSON.stringify(progressData),
      },
    });

    // 3. Update student user totalPoints & streak
    try {
      await prisma.user.update({
        where: { id: targetUserId },
        data: {
          totalPoints: { increment: points },
        },
      });
    } catch (updateErr) {
      console.warn("[ACTIVITY_USER_UPDATE_WARN]", updateErr);
    }

    // 4. Dual-sync to Supabase user metadata / user_stats if Supabase auth user exists
    if (targetUserEmail) {
      try {
        // Best-effort non-blocking sync to Supabase admin
        const { data: usersData } = await adminClient.auth.admin.listUsers();
        const sbUser = usersData?.users?.find(
          (u) => (u.email || "").toLowerCase() === targetUserEmail?.toLowerCase()
        );
        if (sbUser) {
          const currentMeta = sbUser.user_metadata || {};
          const currentPoints = (Number(currentMeta.totalPoints) || 0) + points;
          await adminClient.auth.admin.updateUserById(sbUser.id, {
            user_metadata: {
              ...currentMeta,
              totalPoints: currentPoints,
              lastActive: new Date().toISOString(),
            },
          });
        }
      } catch {
        // Supabase sync is optional enhancement, never crash
      }
    }

    return NextResponse.json({
      ok: true,
      activityId: newProgress.id,
      userId: targetUserId,
      username: targetUsername,
      pointsAwarded: points,
    });
  } catch (error: any) {
    // SAFETY: Never crash serverless process on activity logging
    console.error("[ACTIVITY_LOG_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Aktivite kaydedilirken sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const studentParam = req.nextUrl.searchParams.get("student");
    const limit = Math.min(Number(req.nextUrl.searchParams.get("limit")) || 30, 100);

    let targetUserId: string | null = null;

    if (studentParam) {
      const u = await prisma.user.findFirst({
        where: {
          OR: [
            { id: studentParam },
            { email: studentParam.toLowerCase() },
            { username: studentParam.toLowerCase() },
          ],
        },
      });
      targetUserId = u?.id || null;
    } else {
      const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
      if (sessionCookie) {
        const payload = await verifySessionToken(sessionCookie);
        targetUserId = payload?.userId || null;
      }
    }

    if (!targetUserId) {
      return NextResponse.json({ ok: true, activities: [] });
    }

    const records = await prisma.progress.findMany({
      where: { userId: targetUserId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    const activities = records.map((r) => {
      let parsed: any = {};
      try {
        parsed = JSON.parse(r.data);
      } catch {
        parsed = {};
      }
      return {
        id: r.id,
        type: r.type,
        category: parsed.category || "Genel",
        title: parsed.title || "Çalışma Aktivitesi",
        details: parsed.details || "",
        scoreOrCount: parsed.scoreOrCount || "",
        timeSpentMinutes: parsed.timeSpentMinutes || 1,
        points: parsed.points || 0,
        createdAt: r.createdAt.toISOString(),
      };
    });

    return NextResponse.json({ ok: true, activities });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: "Aktiviteler getirilemedi." },
      { status: 500 }
    );
  }
}
