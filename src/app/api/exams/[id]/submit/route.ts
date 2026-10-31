import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { validateDatabaseConfig } from "@/lib/server-config";
import { getExamQuestions } from "@/lib/data-exams";
import { calculateYdsNet } from "@/lib/exam-validator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Choice = number | string;

function parseChoice(value: unknown): number | null {
  if (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 4) {
    return value;
  }
  if (typeof value === "string" && /^[A-E]$/i.test(value.trim())) {
    return value.trim().toUpperCase().charCodeAt(0) - 65;
  }
  return null;
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const database = validateDatabaseConfig();
    if (!database.valid) {
      return NextResponse.json({ ok: false, error: "Kalıcı veritabanı yapılandırılmadı." }, { status: 503 });
    }

    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ ok: false, error: "Sınav sonucunu kaydetmek için oturum açın." }, { status: 401 });
    }

    const session = await verifySessionToken(token);
    if (!session?.userId) {
      return NextResponse.json({ ok: false, error: "Oturum geçersiz veya süresi dolmuş." }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.userId }, select: { id: true } });
    if (!user) {
      return NextResponse.json({ ok: false, error: "Oturumdaki kullanıcı bulunamadı." }, { status: 401 });
    }

    const { id } = await params;
    const examId = id.trim();
    if (!/^[a-z0-9_-]{1,80}$/i.test(examId)) {
      return NextResponse.json({ ok: false, error: "Sınav kimliği geçersiz." }, { status: 400 });
    }

    let body: { answers?: unknown; timeSpent?: unknown };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "İstek gövdesi geçerli JSON değil." }, { status: 400 });
    }

    const incoming = body.answers;
    if (typeof incoming !== "object" || incoming === null || Array.isArray(incoming)) {
      return NextResponse.json({ ok: false, error: "Yanıtlar geçersiz." }, { status: 400 });
    }

    const questions = getExamQuestions(examId);
    if (questions.length !== 80) {
      return NextResponse.json({ ok: false, error: "Sınav soru kaynağı doğrulanamadı." }, { status: 503 });
    }

    const rawAnswers = incoming as Record<string, unknown>;
    const normalizedAnswers: Record<string, number> = {};
    for (const [questionKey, value] of Object.entries(rawAnswers)) {
      const questionNumber = Number(questionKey);
      if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > questions.length) {
        return NextResponse.json({ ok: false, error: "Yanıtlar arasında geçersiz soru numarası var." }, { status: 400 });
      }
      const choice = parseChoice(value);
      if (choice === null) {
        return NextResponse.json({ ok: false, error: "Yanıt seçeneği geçersiz." }, { status: 400 });
      }
      normalizedAnswers[String(questionNumber)] = choice;
    }

    let correct = 0;
    let wrong = 0;
    for (const question of questions) {
      const choice: Choice | undefined = normalizedAnswers[String(question.n)];
      if (choice === undefined) continue;
      if (choice === question.answer) correct++;
      else wrong++;
    }

    const empty = questions.length - correct - wrong;
    const net = calculateYdsNet(correct, wrong);
    const score = Math.round((correct / questions.length) * 100);
    const requestedSeconds = Number(body.timeSpent);
    const timeSpent = Number.isFinite(requestedSeconds)
      ? Math.min(Math.max(Math.floor(requestedSeconds), 0), 180 * 60)
      : 0;

    const attempt = await prisma.examAttempt.create({
      data: {
        examId,
        userId: user.id,
        answers: JSON.stringify({ verification: "server-graded-v1", values: normalizedAnswers }),
        correct,
        wrong,
        empty,
        net,
        score,
        timeSpent,
      },
    });

    return NextResponse.json({
      ok: true,
      success: true,
      attemptId: attempt.id,
      correct,
      wrong,
      empty,
      net,
      score,
    });
  } catch (error) {
    console.error("[EXAM_SUBMIT_ERROR]", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ ok: false, error: "Sonuç kaydedilemedi." }, { status: 500 });
  }
}
