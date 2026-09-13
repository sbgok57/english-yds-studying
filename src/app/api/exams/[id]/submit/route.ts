import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const { answers, correct, wrong, empty, net, score, timeSpent } = body;

    // Varsayılan kullanıcıyı al veya bağla
    const user = await prisma.user.findFirst({
      orderBy: { createdAt: "asc" },
    });

    const attempt = await prisma.examAttempt.create({
      data: {
        examId: id,
        userId: user?.id || null,
        answers: JSON.stringify(answers || {}),
        correct: correct || 0,
        wrong: wrong || 0,
        empty: empty || 0,
        net: net || 0,
        score: score || 0,
        timeSpent: timeSpent || 0,
      },
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          totalPoints: { increment: Math.round(score * 10) },
        },
      });
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
