"use client";

import { useCallback, useEffect, useState } from "react";
import type { CefrLevel, LevelAssessmentResult } from "./data-level-test";
import {
  PointsState,
  PointEvent,
  PointEventType,
  defaultPointsState,
  awardPointsIdempotent,
} from "./gamification/points-config";
import {
  BadgeState,
  BadgeDefinition,
  defaultBadgeState,
  BADGES,
} from "./gamification/badges-data";
import {
  evaluateAllBadges,
  UserStatsContext,
} from "./gamification/badges-engine";

export interface WordStat {
  c: number; // doğru
  w: number; // yanlış
  last: number;
}

export interface LevelTestAttempt {
  id: string;
  date: number;
  level: CefrLevel;
  confidence: "low" | "medium" | "high";
  scorePercent: number;
  totalCorrect: number;
  totalWrong: number;
  totalEmpty: number;
  skillScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
    usage: number;
  };
}

export interface LevelAssessmentState {
  currentLevel: CefrLevel | null;
  confidence: "low" | "medium" | "high" | null;
  lastTestAt: number | null;
  attempts: LevelTestAttempt[];
  skillScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
    usage: number;
  };
}

export interface GamificationState {
  points: PointsState;
  badges: BadgeState;
  showcaseBadgeIds: string[];
}

export interface CareerGoal {
  profession: string;
  targetScore: string;
  motto: string;
  updatedAt?: number;
}

export interface UsageData {
  words: Record<string, WordStat>;
  grammar: Record<string, { a: number; ok: number }>;
  tactics: Record<string, number>;
  exams: { taken: number; totalCorrect: number; totalQuestions: number; bestNet: number };
  avatar: number | null;
  customAvatar?: string | null;
  careerGoal?: CareerGoal;
  ambient: boolean;
  sessions: number;
  lastVisit: number;
  bookmarks?: string[];
  wrongQuestions?: Record<string, { id: string; chosen: number; answer: number; date: number; topic?: string; type?: string }>;
  solvedQuestions?: Record<string, { correct: boolean; date: number }>;
  levelAssessment?: LevelAssessmentState;
  gamification?: GamificationState;
  activeExams?: ("YDS" | "YDT" | "YÖKDİL")[];
}

const KEY = "yds-master-usage-v1";

export function defaultLevelAssessment(): LevelAssessmentState {
  return {
    currentLevel: null,
    confidence: null,
    lastTestAt: null,
    attempts: [],
    skillScores: {
      grammar: 0,
      vocabulary: 0,
      reading: 0,
      usage: 0,
    },
  };
}

export function defaultGamification(): GamificationState {
  return {
    points: defaultPointsState(),
    badges: defaultBadgeState(),
    showcaseBadgeIds: [],
  };
}

export function defaultUsage(): UsageData {
  return {
    words: {},
    grammar: {},
    tactics: {},
    exams: { taken: 0, totalCorrect: 0, totalQuestions: 0, bestNet: 0 },
    avatar: null,
    customAvatar: null,
    ambient: true,
    sessions: 1,
    lastVisit: 0,
    bookmarks: [],
    wrongQuestions: {},
    solvedQuestions: {},
    levelAssessment: defaultLevelAssessment(),
    gamification: defaultGamification(),
    activeExams: ["YDS", "YDT", "YÖKDİL"],
    careerGoal: {
      profession: "Akademisyenlik & Yurt Dışı Uzmanlığı",
      targetScore: "85+",
      motto: "Zirveye odaklan, başarı kaçınılmazdır! ✨",
    },
  };
}

import { migrateUsageData, calculateYdsNet } from "./exam-validator";
let cache: UsageData | null = null;

export function loadUsage(): UsageData {
  if (typeof window === "undefined") return defaultUsage();
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      cache = migrateUsageData(parsed, defaultUsage());
    } else {
      cache = defaultUsage();
    }
  } catch {
    cache = defaultUsage();
  }
  return cache;
}

export function saveUsage(u: UsageData) {
  cache = u;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(u));
    } catch {
      /* boş */
    }
  }
}

/** Kelime ustalık puanı: düşük = zayıf (önce gösterilir). */
export function wordScore(s?: WordStat): number {
  return s ? s.c - s.w : -999;
}

function clone<T>(o: T): T {
  if (typeof structuredClone === "function") {
    try {
      return structuredClone(o);
    } catch {
      /* fallback */
    }
  }
  try {
    return JSON.parse(JSON.stringify(o));
  } catch {
    return o;
  }
}

export function useUsage() {
  const [usage, setUsage] = useState<UsageData>(defaultUsage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = loadUsage();
    const today = new Date().toDateString();
    if (!u.lastVisit || new Date(u.lastVisit).toDateString() !== today) {
      u.sessions = (u.sessions || 0) + 1;
    }
    u.lastVisit = Date.now();
    saveUsage(u);
    setUsage({ ...u });
  }, []);

  const update = useCallback((fn: (u: UsageData) => UsageData) => {
    setUsage((prev) => {
      const base = typeof window !== "undefined" ? loadUsage() : prev;
      const next = fn(clone(base));
      saveUsage(next);
      return next;
    });
  }, []);

  const addXp = useCallback(
    (points: number, sourceId: string = `xp-${Date.now()}`, type: PointEventType = "custom") => {
      awardUserPoints(update, {
        id: `xp-evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        type,
        points,
        sourceId,
      });
      checkAndAwardBadges(update);
    },
    [update]
  );

  return { usage, update, addXp, mounted };
}

// ---- kolaylaştırıcı kayıt fonksiyonları ----
export function recordWord(
  update: (fn: (u: UsageData) => UsageData) => void,
  id: number | string,
  correct: boolean
) {
  update((u) => {
    const key = String(id);
    const rec = u.words[key] || { c: 0, w: 0, last: 0 };
    if (correct) rec.c += 1;
    else rec.w += 1;
    rec.last = Date.now();
    u.words[key] = rec;
    return u;
  });
}

export function recordGrammar(
  update: (fn: (u: UsageData) => UsageData) => void,
  slug: string,
  correct: boolean
) {
  update((u) => {
    const rec = u.grammar[slug] || { a: 0, ok: 0 };
    rec.a += 1;
    if (correct) rec.ok += 1;
    u.grammar[slug] = rec;
    return u;
  });
}

export function recordTacticView(
  update: (fn: (u: UsageData) => UsageData) => void,
  slug: string
) {
  update((u) => {
    u.tactics[slug] = (u.tactics[slug] || 0) + 1;
    return u;
  });
}

export function recordExam(
  update: (fn: (u: UsageData) => UsageData) => void,
  correct: number,
  total: number,
  wrong: number = 0,
  net?: number
) {
  const finalNet = typeof net === "number" ? net : calculateYdsNet(correct, wrong);
  update((u) => {
    if (!u.exams || typeof u.exams !== "object") {
      u.exams = { taken: 0, totalCorrect: 0, totalQuestions: 0, bestNet: 0 };
    }
    u.exams.taken = (Number(u.exams.taken) || 0) + 1;
    u.exams.totalCorrect = (Number(u.exams.totalCorrect) || 0) + Math.max(0, correct);
    u.exams.totalQuestions = (Number(u.exams.totalQuestions) || 0) + Math.max(0, total);
    const currentBest = Number(u.exams.bestNet) || 0;
    if (finalNet > currentBest) {
      u.exams.bestNet = finalNet;
    }
    return u;
  });
}

export function toggleBookmark(
  update: (fn: (u: UsageData) => UsageData) => void,
  questionId: string
) {
  update((u) => {
    const list = u.bookmarks || [];
    if (list.includes(questionId)) {
      u.bookmarks = list.filter((id) => id !== questionId);
    } else {
      u.bookmarks = [...list, questionId];
    }
    return u;
  });
}

export function recordQuestionResult(
  update: (fn: (u: UsageData) => UsageData) => void,
  questionId: string,
  correct: boolean,
  chosen: number,
  answer: number,
  meta?: { topic?: string; type?: string }
) {
  update((u) => {
    if (!u.solvedQuestions) u.solvedQuestions = {};
    if (!u.wrongQuestions) u.wrongQuestions = {};

    u.solvedQuestions[questionId] = { correct, date: Date.now() };

    if (correct) {
      delete u.wrongQuestions[questionId];
    } else {
      u.wrongQuestions[questionId] = {
        id: questionId,
        chosen,
        answer,
        date: Date.now(),
        topic: meta?.topic,
        type: meta?.type,
      };
    }
    return u;
  });
}

export function removeWrongQuestion(
  update: (fn: (u: UsageData) => UsageData) => void,
  questionId: string
) {
  update((u) => {
    if (u.wrongQuestions) {
      delete u.wrongQuestions[questionId];
    }
    return u;
  });
}

// ==================== GAMIFICATION & LEVEL HELPERS ====================

export function awardUserPoints(
  update: (fn: (u: UsageData) => UsageData) => void,
  event: Omit<PointEvent, "createdAt"> & { createdAt?: number }
): boolean {
  let wasAwarded = false;
  update((u) => {
    const currentPoints = u.gamification?.points || defaultPointsState();
    const { updatedState, awarded } = awardPointsIdempotent(currentPoints, event);
    wasAwarded = awarded;

    if (!u.gamification) u.gamification = defaultGamification();
    u.gamification.points = updatedState;
    return u;
  });
  return wasAwarded;
}

export function recordLevelAssessment(
  update: (fn: (u: UsageData) => UsageData) => void,
  result: LevelAssessmentResult
): void {
  update((u) => {
    if (!u.levelAssessment) u.levelAssessment = defaultLevelAssessment();

    const attempt: LevelTestAttempt = {
      id: `attempt-${Date.now()}`,
      date: Date.now(),
      level: result.estimatedLevel,
      confidence: result.confidence,
      scorePercent: result.scorePercent,
      totalCorrect: result.totalCorrect,
      totalWrong: result.totalWrong,
      totalEmpty: result.totalEmpty,
      skillScores: {
        grammar: result.skillScores.grammar,
        vocabulary: result.skillScores.vocabulary,
        reading: result.skillScores.reading,
        usage: Math.round((result.skillScores.sentence + result.skillScores.translation) / 2),
      },
    };

    u.levelAssessment.currentLevel = result.estimatedLevel;
    u.levelAssessment.confidence = result.confidence;
    u.levelAssessment.lastTestAt = Date.now();
    u.levelAssessment.attempts = [attempt, ...(u.levelAssessment.attempts || []).slice(0, 9)];
    u.levelAssessment.skillScores = attempt.skillScores;

    return u;
  });
}

export function setShowcaseBadges(
  update: (fn: (u: UsageData) => UsageData) => void,
  badgeIds: string[]
): void {
  update((u) => {
    if (!u.gamification) u.gamification = defaultGamification();
    // Bounded max 5 showcase badges
    u.gamification.showcaseBadgeIds = badgeIds.slice(0, 5);
    return u;
  });
}

export function checkAndAwardBadges(
  update: (fn: (u: UsageData) => UsageData) => void
): BadgeDefinition[] {
  let newlyEarned: BadgeDefinition[] = [];

  update((u) => {
    if (!u.gamification) u.gamification = defaultGamification();

    const wordsSolved = Object.values(u.words || {}).reduce((acc, w) => acc + (w.c + w.w), 0);
    const grammarSolved = Object.values(u.grammar || {}).reduce((acc, g) => acc + g.a, 0);
    const errorsFixed = Object.keys(u.solvedQuestions || {}).filter(
      (k) => u.solvedQuestions?.[k]?.correct && !u.wrongQuestions?.[k]
    ).length;

    const statsContext: UserStatsContext = {
      wordsSolved,
      grammarQuestionsSolved: grammarSolved,
      examsTaken: u.exams?.taken || 0,
      bestNet: u.exams?.bestNet || 0,
      errorsCorrected: errorsFixed,
      currentLevel: u.levelAssessment?.currentLevel || undefined,
      levelConfidence: u.levelAssessment?.confidence || undefined,
      streakDays: Math.min(30, u.sessions || 1),
      activeDays: Math.min(180, u.sessions || 1),
      totalStudyMinutes: Math.round((wordsSolved * 1 + grammarSolved * 1.5 + (u.exams?.taken || 0) * 80)),
    };

    const { updatedState, newBadges } = evaluateAllBadges(
      u.gamification.badges || defaultBadgeState(),
      statsContext
    );

    newlyEarned = newBadges;
    u.gamification.badges = updatedState;

    // Award XP for each new badge
    for (const b of newBadges) {
      if (b.rewardXp > 0) {
        const { updatedState: ptState } = awardPointsIdempotent(u.gamification.points, {
          id: `badge-reward:${b.id}`,
          type: "custom",
          points: b.rewardXp,
          sourceId: b.id,
          metadata: { badgeTitle: b.title },
        });
        u.gamification.points = ptState;
      }
    }

    return u;
  });

  return newlyEarned;
}
