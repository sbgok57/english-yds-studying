import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { validateDatabaseConfig } from "@/lib/server-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ACTIVITY_TYPES = [
  "game",
  "vocabulary",
  "grammar",
  "reading",
  "listening",
  "writing",
  "speaking",
  "exam",
] as const;
type ActivityType = (typeof ACTIVITY_TYPES)[number];

const CATEGORIES = ["YDS", "YDT", "YÖKDİL", "Genel"] as const;
type ActivityCategory = (typeof CATEGORIES)[number];

interface ActivityRequestBody {
  type?: unknown;
  category?: unknown;
  title?: unknown;
  details?: unknown;
  scoreOrCount?: unknown;
  timeSpentMinutes?: unknown;
  metadata?: unknown;
  // userEmail, username, and points from older clients are intentionally ignored.
}

function isActivityType(value: unknown): value is ActivityType {
  return typeof value === "string" && ACTIVITY_TYPES.some((type) => type === value);
}

function isActivityCategory(value: unknown): value is ActivityCategory {
  return typeof value === "string" && CATEGORIES.some((category) => category === value);
}

function sanitizeString(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

async function getSessionUser(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifySessionToken(token);
  if (!payload?.userId) return null;

  return prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, username: true },
  });
}

export async function POST(req: NextRequest) {
  try {
    const database = validateDatabaseConfig();
    if (!database.valid) return jsonError("Kalıcı veritabanı yapılandırılmadı.", 503);

    // Never identify the owner from client-supplied email/name or choose a default student.
    const user = await getSessionUser(req);
    if (!user) return jsonError("Aktivite kaydetmek için geçerli bir oturum açın.", 401);

    let body: ActivityRequestBody;
    try {
      body = await req.json();
    } catch {
      return jsonError("İstek gövdesi geçerli JSON değil.", 400);
    }

    if (!isActivityType(body.type)) return jsonError("Aktivite türü geçersiz.", 400);
    if (body.category !== undefined && !isActivityCategory(body.category)) {
      return jsonError("Aktivite kategorisi geçersiz.", 400);
    }

    const title = sanitizeString(body.title, 150);
    if (!title) return jsonError("Aktivite başlığı zorunludur.", 400);

    const details = sanitizeString(body.details, 500);
    const scoreOrCount = sanitizeString(body.scoreOrCount, 50);
    const requestedMinutes = Number(body.timeSpentMinutes);
    const timeSpentMinutes = Number.isFinite(requestedMinutes)
      ? Math.min(Math.max(Math.round(requestedMinutes), 1), 300)
      : 1;
    const metadata =
      typeof body.metadata === "object" && body.metadata !== null && !Array.isArray(body.metadata)
        ? body.metadata
        : {};

    // Generic activity records do not award points. Score-bearing rewards must be
    // calculated by a server-side completion endpoint, never trusted from a client.
    const points = 0;
    const newProgress = await prisma.progress.create({
      data: {
        userId: user.id,
        type: body.type,
        data: JSON.stringify({
          category: body.category ?? "Genel",
          title,
          details,
          scoreOrCount,
          points,
          timeSpentMinutes,
          metadata,
          timestamp: new Date().toISOString(),
          source: "authenticated-user-action",
        }),
      },
    });

    return NextResponse.json({
      ok: true,
      activityId: newProgress.id,
      userId: user.id,
      username: user.username,
      pointsAwarded: points,
    });
  } catch (error) {
    console.error("[ACTIVITY_LOG_ERROR]", error instanceof Error ? error.name : "unknown");
    return jsonError("Aktivite kaydedilirken sunucu hatası oluştu.", 500);
  }
}

export async function GET(req: NextRequest) {
  try {
    const database = validateDatabaseConfig();
    if (!database.valid) return jsonError("Kalıcı veritabanı yapılandırılmadı.", 503);

    const requester = await getSessionUser(req);
    if (!requester) return jsonError("Aktiviteleri görmek için geçerli bir oturum açın.", 401);

    const requestedStudent = req.nextUrl.searchParams.get("student")?.trim();
    const limitValue = Number(req.nextUrl.searchParams.get("limit"));
    const limit = Number.isFinite(limitValue) && limitValue > 0
      ? Math.min(Math.floor(limitValue), 100)
      : 30;
    const requesterIsAdmin = requester.email.toLowerCase() === "sinembuse724@gmail.com";

    let targetUserId = requester.id;
    if (requestedStudent) {
      if (!requesterIsAdmin) {
        const matchesRequester = [requester.id, requester.email.toLowerCase(), requester.username.toLowerCase()]
          .includes(requestedStudent.toLowerCase());
        if (!matchesRequester) return jsonError("Başka bir kullanıcının etkinliklerine erişemezsiniz.", 403);
      } else {
        const target = await prisma.user.findFirst({
          where: {
            OR: [
              { id: requestedStudent },
              { email: requestedStudent.toLowerCase() },
              { username: requestedStudent.toLowerCase() },
            ],
          },
          select: { id: true },
        });
        if (!target) return jsonError("Kullanıcı bulunamadı.", 404);
        targetUserId = target.id;
      }
    }

    const records = await prisma.progress.findMany({
      where: { userId: targetUserId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    const activities = records.map((record) => {
      let data: Record<string, unknown> = {};
      try {
        const parsed: unknown = JSON.parse(record.data);
        if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
          data = parsed as Record<string, unknown>;
        }
      } catch {
        // Preserve the record while returning safe defaults for malformed historical JSON.
      }

      return {
        id: record.id,
        type: record.type,
        category: typeof data.category === "string" ? data.category : "Genel",
        title: typeof data.title === "string" ? data.title : "Çalışma Aktivitesi",
        details: typeof data.details === "string" ? data.details : "",
        scoreOrCount: typeof data.scoreOrCount === "string" ? data.scoreOrCount : "",
        timeSpentMinutes:
          typeof data.timeSpentMinutes === "number" && Number.isFinite(data.timeSpentMinutes)
            ? data.timeSpentMinutes
            : 1,
        points: typeof data.points === "number" && Number.isFinite(data.points) ? data.points : 0,
        createdAt: record.createdAt.toISOString(),
      };
    });

    return NextResponse.json({ ok: true, activities });
  } catch (error) {
    console.error("[ACTIVITY_READ_ERROR]", error instanceof Error ? error.name : "unknown");
    return jsonError("Aktiviteler getirilemedi.", 500);
  }
}
