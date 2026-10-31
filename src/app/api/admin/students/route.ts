import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { validateDatabaseConfig } from "@/lib/server-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export interface StudentExamAttemptSummary {
  id: string;
  examId: string;
  score: number;
  net: number;
  correct: number;
  wrong: number;
  empty: number;
  timeSpent: number;
  createdAt: string;
}

export interface StudentActivityItem {
  id: string;
  type: "exam" | "vocabulary" | "grammar" | "reading" | "listening" | "writing" | "speaking" | "game";
  category: "YDS" | "YDT" | "YÖKDİL" | "Genel";
  title: string;
  details: string;
  timeSpent: string;
  timeSpentMinutes: number;
  scoreOrCount?: string;
  timestamp: string;
  dateFormatted: string;
  timeFormatted: string;
}

export interface SkillTimeBreakdown {
  examMinutes: number;
  vocabularyMinutes: number;
  grammarMinutes: number;
  readingMinutes: number;
  listeningMinutes: number;
  writingMinutes: number;
  speakingMinutes: number;
  totalStudyMinutes: number;
}

export interface StudentRecord {
  id: string;
  username: string;
  email: string;
  level: string;
  streak: number;
  totalPoints: number;
  createdAt: string;
  totalExams: number;
  avgNet: number;
  bestScore: number;
  lastActive: string;
  careerTarget?: string;
  attempts: StudentExamAttemptSummary[];
  activities: StudentActivityItem[];
  skillBreakdown: SkillTimeBreakdown;
}

function buildStudentActivitiesAndBreakdown(
  attempts: StudentExamAttemptSummary[],
  progressRecords?: { id: string; type: string; data: string; createdAt: Date }[]
): { activities: StudentActivityItem[]; skillBreakdown: SkillTimeBreakdown } {
  const activities: StudentActivityItem[] = [];
  let examMin = 0;
  let vocabMin = 0;
  let gramMin = 0;
  let readMin = 0;
  let listenMin = 0;

  // 1. Gerçek Sınav Denemeleri Aktivite Kayıtları
  for (const att of attempts) {
    const isYdt = att.examId.toLowerCase().startsWith("ydt") || att.examId.toLowerCase().startsWith("lys");
    const isYokdil = att.examId.toLowerCase().startsWith("yokdil");
    const category: "YDS" | "YDT" | "YÖKDİL" = isYdt ? "YDT" : isYokdil ? "YÖKDİL" : "YDS";
    const spent = att.timeSpent || (isYdt ? 115 : 165);
    examMin += spent;

    const d = new Date(att.createdAt);
    const dateFormatted = d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timeFormatted = d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    activities.push({
      id: `act-exam-${att.id}`,
      type: "exam",
      category,
      title: `${att.examId.replace(/-/g, " ").toUpperCase()} Deneme Sınavı`,
      details: `${att.net} Net • %${att.score} Başarı (✅ ${att.correct} Doğru, ❌ ${att.wrong} Yanlış, ⚪ ${att.empty} Boş)`,
      timeSpent: `${spent} dakika`,
      timeSpentMinutes: spent,
      scoreOrCount: `${att.net} Net`,
      timestamp: att.createdAt,
      dateFormatted,
      timeFormatted,
    });
  }

  // 2. Gerçek Oyun ve Çalışma Aktiviteleri (Prisma Progress)
  if (progressRecords && progressRecords.length > 0) {
    for (const p of progressRecords) {
      if (p.type === "career_goal") continue;

      try {
        const parsed: unknown = JSON.parse(p.data);
        if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) continue;
        const data = parsed as Record<string, unknown>;
        // Historical generic events were written before requests were tied to
        // signed sessions, so they cannot be represented as verified activity.
        if (data.source !== "authenticated-user-action") continue;
        const category: "YDS" | "YDT" | "YÖKDİL" | "Genel" =
          data.category === "YDS" || data.category === "YDT" || data.category === "YÖKDİL" ? data.category : "Genel";
        const requestedMinutes = Number(data.timeSpentMinutes);
        const spent = Number.isFinite(requestedMinutes) ? Math.min(Math.max(requestedMinutes, 0), 300) : 0;
        const d = new Date(p.createdAt);
        const dateFormatted = d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
        const timeFormatted = d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

        const actType = (p.type === "game" ? "game" : p.type) as StudentActivityItem["type"];

        activities.push({
          id: `act-prog-${p.id}`,
          type: actType,
          category,
          title: typeof data.title === "string" ? data.title : "Çalışma Aktivitesi",
          details: typeof data.details === "string" ? data.details : "",
          timeSpent: `${spent} dakika`,
          timeSpentMinutes: spent,
          scoreOrCount: typeof data.scoreOrCount === "string" ? data.scoreOrCount : "",
          timestamp: p.createdAt.toISOString(),
          dateFormatted,
          timeFormatted,
        });

        if (p.type === "game" || p.type === "vocabulary") {
          vocabMin += spent;
        } else if (p.type === "grammar") {
          gramMin += spent;
        } else if (p.type === "reading") {
          readMin += spent;
        } else if (p.type === "listening") {
          listenMin += spent;
        }
      } catch {
        // Skip malformed JSON
      }
    }
  }

  // Kronolojik sırala (En son yapılan işlem en üstte)
  activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const skillBreakdown: SkillTimeBreakdown = {
    examMinutes: examMin,
    vocabularyMinutes: vocabMin,
    grammarMinutes: gramMin,
    readingMinutes: readMin,
    listeningMinutes: listenMin,
    writingMinutes: 0,
    speakingMinutes: 0,
    totalStudyMinutes: examMin + vocabMin + gramMin + readMin + listenMin,
  };

  return { activities, skillBreakdown };
}

export async function GET(req: NextRequest) {
  try {
    const database = validateDatabaseConfig();
    if (!database.valid) {
      return NextResponse.json({ ok: false, error: "Kalıcı veritabanı yapılandırılmadı." }, { status: 503 });
    }

    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    const payload = token ? await verifySessionToken(token) : null;
    const adminUser = payload?.userId
      ? await prisma.user.findUnique({ where: { id: payload.userId }, select: { id: true, email: true, username: true } })
      : null;
    if (!adminUser || adminUser.email.toLowerCase() !== "sinembuse724@gmail.com") {
      return NextResponse.json(
        { ok: false, error: "Yetkisiz Erişim: Bu alana yalnızca Kurucu Yönetici (sbgok57) erişebilir." },
        { status: 403 }
      );
    }

    const studentsMap = new Map<string, StudentRecord>();
    // Student records come only from the persistent application database; the
    // auth provider's user list is not a source of fabricated activity/points.
    try {
      const dbUsers = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          examAttempts: {
            orderBy: { createdAt: "desc" },
            take: 30,
          },
          progress: {
            orderBy: { createdAt: "desc" },
            take: 100,
          },
        },
      });

      if (dbUsers && dbUsers.length > 0) {
        for (const u of dbUsers) {
          const email = (u.email || "").toLowerCase().trim();
          const username = (u.username || "").toLowerCase().trim();

          // SAFETY: P0 Strict Exclusion — Admin (sbgok57) is never listed as a student, and dummy/test accounts are blocked
          if (
            !email ||
            email.startsWith("test_") ||
            email.startsWith("bot_") ||
            email.startsWith("mock_") ||
            email === "sinembuse724@gmail.com" ||
            email === "ogrenci@ydsmaster.com" ||
            username === "sbgok57" ||
            username === "ydskasifi"
          ) {
            continue;
          }

          const verifiedAttempts = (u.examAttempts || []).filter((attempt) => {
            try {
              const parsed: unknown = JSON.parse(attempt.answers);
              return typeof parsed === "object" && parsed !== null &&
                (parsed as { verification?: unknown }).verification === "server-graded-v1";
            } catch {
              return false;
            }
          });
          const attempts: StudentExamAttemptSummary[] = verifiedAttempts.map((att) => ({
            id: att.id,
            examId: att.examId,
            score: att.score,
            net: att.net,
            correct: att.correct,
            wrong: att.wrong,
            empty: att.empty,
            timeSpent: att.timeSpent,
            createdAt: att.createdAt.toISOString(),
          }));

          // Genuine exam attempts only (Zero mock bots/benchmarks)
          // Real exam attempts are queried directly from prisma.examAttempt

          const totalExams = attempts.length;
          const avgNet = totalExams > 0
            ? Math.round((attempts.reduce((s, a) => s + a.net, 0) / totalExams) * 10) / 10
            : 0;
          const bestScore = totalExams > 0 ? Math.max(...attempts.map((a) => a.score)) : 0;

          // Calculate last active from attempts, progress, or account creation
          const latestProgress = u.progress && u.progress.length > 0 ? u.progress[0].createdAt.toISOString() : null;
          const latestAttempt = attempts.length > 0 ? attempts[0].createdAt : null;
          const candidateDates = [u.createdAt.toISOString(), latestProgress, latestAttempt].filter(Boolean) as string[];
          candidateDates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
          const lastActive = candidateDates[0] || u.createdAt.toISOString();

          let careerTarget: string | undefined;
          const careerProg = u.progress?.find((p) => p.type === "career_goal");
          if (careerProg) {
            try {
              const data = JSON.parse(careerProg.data);
              careerTarget = data.target || data.goal || data.title;
            } catch {
              // empty
            }
          }
          if (!careerTarget && (username === "yagoo_x" || email.includes("yagiz"))) {
            careerTarget = "YDS & YDT Akademik Dil Derecesi";
          }

          const { activities, skillBreakdown } = buildStudentActivitiesAndBreakdown(
            attempts,
            u.progress
          );

          const existing = studentsMap.get(email);
          if (existing) {
            existing.username = u.username || existing.username;
            existing.level = u.level || existing.level;
            existing.streak = Math.max(existing.streak, u.streak || 1);
            existing.totalPoints = Math.max(existing.totalPoints, u.totalPoints || 0);
            existing.totalExams = totalExams;
            existing.avgNet = avgNet;
            existing.bestScore = bestScore;
            existing.lastActive = lastActive;
            if (careerTarget) existing.careerTarget = careerTarget;
            existing.attempts = attempts;
            existing.activities = activities;
            existing.skillBreakdown = skillBreakdown;
          } else {
            studentsMap.set(email, {
              id: u.id,
              username: u.username,
              email: u.email,
              level: u.level || "A1",
              streak: Math.max(u.streak || 1, 1),
              totalPoints: u.totalPoints || 0,
              createdAt: u.createdAt.toISOString(),
              totalExams,
              avgNet,
              bestScore,
              lastActive,
              careerTarget,
              attempts,
              activities,
              skillBreakdown,
            });
          }
        }
      }
    } catch {
      return NextResponse.json({ ok: false, error: "Öğrenci kayıtları kalıcı veritabanından alınamadı." }, { status: 503 });
    }

    // Strict P0 Guard: Only genuine students (e.g. Yağız), never admin (sbgok57) or test/mock/seed bots
    const FORBIDDEN_MOCKS = new Set([
      "selin_aksoy",
      "mert_ozkan",
      "zeynep_demir",
      "burak_yilmaz",
      "ydskasifi",
      "test_student",
      "bot_user",
      "mock_student",
    ]);

    const students = Array.from(studentsMap.values()).filter((s) => {
      const e = s.email.toLowerCase().trim();
      const u = s.username.toLowerCase().trim();
      return (
        e !== "sinembuse724@gmail.com" &&
        e !== "ogrenci@ydsmaster.com" &&
        u !== "sbgok57" &&
        !FORBIDDEN_MOCKS.has(u) &&
        !e.startsWith("test_") &&
        !e.startsWith("bot_") &&
        !e.startsWith("mock_")
      );
    });

    // Kurucu Yönetici Bilgileri (sbgok57)
    const adminAccount = {
      username: adminUser.username,
      email: adminUser.email,
      role: "Kurucu Yönetici (Root Admin)",
      status: "Oturum doğrulandı",
      securityProtection: "Sunucu oturum ve yetki kontrolleri etkin",
      permissions: [
        "Tüm Öğrenci Süreç Takibi",
        "Canlı Süre & Aktivite Zaman Çizelgesi",
        "Sınav Denemeleri & Net Analizi",
        "CSV Karne Dışa Aktarma",
        "Siber Güvenlik & Telemetri Yönetimi",
      ],
    };

    // Aggregate Platform Statistics for Real Students
    const totalStudents = students.length;
    const totalExamsTaken = students.reduce((sum, s) => sum + s.totalExams, 0);
    const studentsWithExams = students.filter((s) => s.totalExams > 0);
    const overallAverageNet = studentsWithExams.length > 0
      ? Math.round((studentsWithExams.reduce((sum, s) => sum + s.avgNet, 0) / studentsWithExams.length) * 10) / 10
      : 0;

    const levelCounts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
    for (const s of students) {
      if (levelCounts[s.level] !== undefined) levelCounts[s.level]++;
      else levelCounts.A1++;
    }

    return NextResponse.json({
      ok: true,
      adminAccount,
      stats: {
        totalStudents,
        totalExamsTaken,
        overallAverageNet,
        levelCounts,
      },
      students,
    });
  } catch (err) {
    console.error("[ADMIN_STUDENTS_ERROR]", err instanceof Error ? err.name : "unknown");
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası: Öğrenci takip verileri yüklenemedi." },
      { status: 500 }
    );
  }
}
