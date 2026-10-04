"use client";

// Universal Client-Side Activity Persistence Logger
// Ensures every game played, vocabulary reviewed, and test taken is permanently recorded in the database.

export interface LogActivityParams {
  type: "game" | "vocabulary" | "grammar" | "reading" | "listening" | "writing" | "speaking" | "exam";
  category?: "YDS" | "YDT" | "YÖKDİL" | "Genel";
  title: string;
  details?: string;
  scoreOrCount?: string;
  points?: number;
  timeSpentMinutes?: number;
  metadata?: Record<string, any>;
}

export interface GameCompleteParams {
  gameId: string;
  gameTitle: string;
  score: number;
  streak?: number;
  timeSpentMinutes?: number;
  wordsPlayed?: number;
  details?: string;
  metadata?: Record<string, any>;
}

const SESSION_KEY = "yds-master-session";
const ACCOUNTS_KEY = "yds-master-accounts";
const PENDING_QUEUE_KEY = "yds-master-pending-activities-v1";

function getClientUserCredentials(): { userEmail?: string; username?: string } {
  if (typeof window === "undefined") return {};
  try {
    const email = window.localStorage.getItem(SESSION_KEY);
    if (email) {
      const rawAccounts = window.localStorage.getItem(ACCOUNTS_KEY);
      if (rawAccounts) {
        const accounts = JSON.parse(rawAccounts);
        const match = accounts.find((a: any) => a.email === email);
        if (match) {
          return { userEmail: match.email, username: match.name };
        }
      }
      return { userEmail: email };
    }
  } catch {
    // Ignore storage read errors
  }
  return {};
}

// Memory queue & debouncer
let activeQueue: LogActivityParams[] = [];
let queueTimeout: NodeJS.Timeout | null = null;

// Flush pending offline activities
export async function flushPendingQueue(): Promise<void> {
  if (typeof window === "undefined" || !navigator.onLine) return;

  try {
    const raw = window.localStorage.getItem(PENDING_QUEUE_KEY);
    if (!raw) return;

    const list: LogActivityParams[] = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return;

    window.localStorage.removeItem(PENDING_QUEUE_KEY);

    for (const item of list.slice(0, 10)) {
      await logStudentActivity(item);
    }
  } catch {
    // Best-effort flush
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    void flushPendingQueue();
  });
}

/**
 * Core function: Logs any student activity directly to /api/activity
 */
export async function logStudentActivity(params: LogActivityParams): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const credentials = getClientUserCredentials();
  const payload = {
    ...params,
    userEmail: credentials.userEmail,
    username: credentials.username,
  };

  try {
    // PERF: keepalive allows request to complete even if user navigates away or closes tab
    const res = await fetch("/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    if (res.ok) {
      return true;
    }
  } catch (err) {
    // SAFETY: Offline queueing fallback
    try {
      const raw = window.localStorage.getItem(PENDING_QUEUE_KEY);
      const queue: LogActivityParams[] = raw ? JSON.parse(raw) : [];
      queue.push(params);
      // Bound queue to max 25 items to avoid storage explosion
      window.localStorage.setItem(PENDING_QUEUE_KEY, JSON.stringify(queue.slice(-25)));
    } catch {
      // Storage full or unavailable
    }
  }

  return false;
}

/**
 * Specialized helper: Records a completed game session
 */
export async function logGameComplete({
  gameId,
  gameTitle,
  score,
  streak = 0,
  timeSpentMinutes = 2,
  wordsPlayed,
  details,
  metadata = {},
}: GameCompleteParams): Promise<boolean> {
  const streakText = streak > 1 ? ` (${streak} Seri)` : "";
  const wordsText = wordsPlayed ? ` • ${wordsPlayed} Kelime` : "";
  const fullDetails = details || `${score} Puan Kazanıldı${streakText}${wordsText}`;

  // Award proportional gamification XP
  const points = Math.max(10, Math.min(score, 200));

  return logStudentActivity({
    type: "game",
    category: "Genel",
    title: `🎮 ${gameTitle}`,
    details: fullDetails,
    scoreOrCount: `${score} Puan`,
    points,
    timeSpentMinutes: Math.max(1, timeSpentMinutes),
    metadata: {
      gameId,
      score,
      streak,
      wordsPlayed,
      ...metadata,
    },
  });
}

/**
 * Specialized helper: Records vocabulary flashcards study session
 */
export async function logVocabularySession({
  cardsReviewed,
  correctCount,
  examType = "Genel",
  timeSpentMinutes = 3,
}: {
  cardsReviewed: number;
  correctCount: number;
  examType?: "YDS" | "YDT" | "YÖKDİL" | "Genel";
  timeSpentMinutes?: number;
}): Promise<boolean> {
  if (cardsReviewed <= 0) return false;

  const points = Math.min(cardsReviewed * 5, 250);

  return logStudentActivity({
    type: "vocabulary",
    category: examType,
    title: `📚 ${examType} Kelime Kartları Tekrarı`,
    details: `${cardsReviewed} kelime çalışıldı (${correctCount} doğru hatırlandı).`,
    scoreOrCount: `${correctCount}/${cardsReviewed} Kelime`,
    points,
    timeSpentMinutes: Math.max(1, timeSpentMinutes),
    metadata: { cardsReviewed, correctCount, examType },
  });
}

/**
 * Specialized helper: Records grammar practice or quiz
 */
export async function logGrammarPracticeSession({
  topicTitle,
  correct,
  total,
  timeSpentMinutes = 5,
}: {
  topicTitle: string;
  correct: number;
  total: number;
  timeSpentMinutes?: number;
}): Promise<boolean> {
  const points = Math.max(correct * 10, 10);

  return logStudentActivity({
    type: "grammar",
    category: "Genel",
    title: `📖 ${topicTitle} Testi`,
    details: `${total} sorudan ${correct} doğru yanıtlandı (%${Math.round((correct / Math.max(1, total)) * 100)} başarı).`,
    scoreOrCount: `${correct}/${total} Doğru`,
    points,
    timeSpentMinutes: Math.max(1, timeSpentMinutes),
    metadata: { topicTitle, correct, total },
  });
}
