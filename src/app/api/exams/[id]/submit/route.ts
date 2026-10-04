import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const { answers, correct, wrong, empty, net, score, timeSpent } = body;

    let targetUserId: string | null = null;
    const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (sessionCookie) {
      try {
        const payload = await verifySessionToken(sessionCookie);
        if (payload?.userId) {
          targetUserId = payload.userId;
        }
      } catch {
        // Fallback to default
      }
    }

    // Check body credentials
    if (!targetUserId && (body.userEmail || body.username)) {
      const reqEmail = (body.userEmail || "").toLowerCase().trim();
      const reqUsername = (body.username || "").toLowerCase().trim();
      try {
        const found = await prisma.user.findFirst({
          where: {
            OR: [
              ...(reqEmail ? [{ email: { equals: reqEmail } }] : []),
              ...(reqUsername ? [{ username: { equals: reqUsername } }] : []),
            ],
          },
        });
        if (found) targetUserId = found.id;
      } catch {
        // Safe degrade
      }
    }

    if (!targetUserId) {
      const studentUser = await prisma.user.findFirst({
        where: {
          username: { not: "sbgok57" },
          email: { not: "sinembuse724@gmail.com" },
        },
        orderBy: { createdAt: "asc" },
      });
      targetUserId = studentUser?.id || null;
    }

    const attempt = await prisma.examAttempt.create({
      data: {
        examId: id,
        userId: targetUserId,
        answers: JSON.stringify(answers || {}),
        correct: correct || 0,
        wrong: wrong || 0,
        empty: empty || 0,
        net: net || 0,
        score: score || 0,
        timeSpent: timeSpent || 0,
      },
    });

    if (targetUserId) {
      try {
        await prisma.user.update({
          where: { id: targetUserId },
          data: {
            totalPoints: { increment: Math.round(score * 10) },
          },
        });
      } catch {
        // Safe degrade
      }
    }

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      score,
      net,
    });
  } catch (error: any) {
    console.error("Exam submit error:", error);
    return NextResponse.json(
      { error: "Sonuç kaydedilemedi", details: error.message },
      { status: 500 }
    );
  }
}
