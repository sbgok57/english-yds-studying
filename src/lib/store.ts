"use client";

import { useCallback, useEffect, useState } from "react";

export interface WordStat {
  c: number; // doğru
  w: number; // yanlış
  last: number;
}
export interface UsageData {
  words: Record<string, WordStat>;
  grammar: Record<string, { a: number; ok: number }>;
  tactics: Record<string, number>;
  exams: { taken: number; totalCorrect: number; totalQuestions: number; bestNet: number };
  avatar: number | null;
  ambient: boolean;
  sessions: number;
  lastVisit: number;
}

const KEY = "yds-master-usage-v1";

export function defaultUsage(): UsageData {
  return {
    words: {},
    grammar: {},
    tactics: {},
    exams: { taken: 0, totalCorrect: 0, totalQuestions: 0, bestNet: 0 },
    avatar: null,
    ambient: true,
    sessions: 1,
    lastVisit: 0,
  };
}

let cache: UsageData | null = null;

export function loadUsage(): UsageData {
  if (typeof window === "undefined") return defaultUsage();
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      cache = {
        ...defaultUsage(),
        ...parsed,
        exams: { ...defaultUsage().exams, ...(parsed.exams || {}) },
      };
    } else {
      cache = defaultUsage();
    }
  } catch {
    cache = defaultUsage();
  }
  return cache!;
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
  return JSON.parse(JSON.stringify(o));
}

export function useUsage() {
  const [usage, setUsage] = useState<UsageData>(() =>
    typeof window === "undefined" ? defaultUsage() : loadUsage()
  );

  useEffect(() => {
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
      const next = fn(clone(prev));
      saveUsage(next);
      return next;
    });
  }, []);

  return { usage, update };
}

// ---- kolaylaştırıcı kayıt fonksiyonları ----
export function recordWord(
  update: (fn: (u: UsageData) => UsageData) => void,
  id: number,
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
  total: number
) {
  update((u) => {
    u.exams.taken += 1;
    u.exams.totalCorrect += correct;
    u.exams.totalQuestions += total;
    if (correct > u.exams.bestNet) u.exams.bestNet = correct;
    return u;
  });
}
