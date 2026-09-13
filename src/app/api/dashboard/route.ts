import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calcStreak, toLocalDay } from "@/lib/streak";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Toplam kelime sayısı
    const totalWords = await prisma.word.count();
    const totalExams = await prisma.exam.count();

    // Sınav denemeleri (en son 20 adet)
    const attempts = await prisma.examAttempt.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    // Gerçek aktivite günleri
    const activityDates = attempts.map((a) => a.createdAt);
    const streak = calcStreak(activityDates);

    const netHistory = attempts.reverse().map((a) => ({
      date: toLocalDay(a.createdAt).slice(5), // "09-13"
      net: a.net,
      score: a.score,
    }));

    const totalQuestionsSolved = attempts.reduce((acc, a) => acc + (a.correct + a.wrong), 0);
    const totalCorrect = attempts.reduce((acc, a) => acc + a.correct, 0);

    return NextResponse.json({
      streak,
      totalWords,
      totalExams,
      totalQuestions: totalQuestionsSolved,
      totalCorrect,
      todayGoal: 20,
      todayWords: 0,
      netHistory,
      weeklyActivity: [],
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    // Hata durumunda bile asla çökme, temiz başlangıç verisi dön
    return NextResponse.json({
      streak: 0,
      totalWords: 0,
      totalExams: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      todayGoal: 20,
      todayWords: 0,
      netHistory: [],
      weeklyActivity: [],
    });
  }
}
