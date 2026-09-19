// Centralized Mistake Notebook (Yanlış Defteri)
// Records mistakes from exams, grammar tests, level tests, and reading modules
// and feeds them into spaced repetition review cycles.

export type ErrorCategory =
  | "vocabulary"
  | "grammar"
  | "tense_harmony"
  | "conjunction"
  | "distractor"
  | "carelessness"
  | "reading_inference"
  | "translation_shift"
  | "time_pressure";

export const ERROR_CATEGORY_LABELS: Record<ErrorCategory, { tr: string; icon: string; hint: string }> = {
  vocabulary: { tr: "Kelime Eksikliği", icon: "📖", hint: "Akademik kelime anlamı veya collocation bilinmiyordu." },
  grammar: { tr: "Gramer Kuralı", icon: "📐", hint: "Formül, kısaltma veya yapı kuralı hatırda değildi." },
  tense_harmony: { tr: "Zaman Uyumu", icon: "⏳", hint: "Bağlaç ve ana cümle zaman uyumu gözden kaçtı." },
  conjunction: { tr: "Bağlaç / Edat", icon: "🔗", hint: "Zıtlık, sebep-sonuç veya paralel bağlaç anlamı karıştı." },
  distractor: { tr: "Güçlü Çeldirici", icon: "🪤", hint: "Cazip görünen ama soru köküyle uyuşmayan şıkka düşüldü." },
  carelessness: { tr: "Dikkatsizlik", icon: "⚠️", hint: "Soru kökündeki 'NOT / EXCEPT' veya özne tekil/çoğul atlandı." },
  reading_inference: { tr: "Paragraf Yorumu", icon: "🧐", hint: "Yazarın ana fikri yerine aşırı genellemeye gidildi." },
  translation_shift: { tr: "Çeviri Kayması", icon: "🔄", hint: "Etken/edilgen veya niteleyici sıfat kayması fark edilmedi." },
  time_pressure: { tr: "Zaman Baskısı", icon: "⏱️", hint: "Süre yetersizliğinden dolayı aceleyle işaretlendi." },
};

export interface MistakeEntry {
  id: string;
  questionId: string;
  sourceModule: "exams" | "level-test" | "topic-test" | "reading" | "tactics";
  stem: string;
  userAnswer: string | number;
  correctAnswer: string | number;
  explanation: string;
  errorCategory: ErrorCategory;
  notes?: string;
  resolved: boolean;
  reviewCount: number;
  createdAt: number;
  lastReviewedAt?: number;
  nextReviewAt?: number;
}

export const MISTAKE_NOTEBOOK_STORAGE_KEY = "yds-master-mistake-notebook-v1";

export function loadMistakes(): MistakeEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(MISTAKE_NOTEBOOK_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // SAFETY: storage read failover
    return [];
  }
}

export function saveMistakes(mistakes: MistakeEntry[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(MISTAKE_NOTEBOOK_STORAGE_KEY, JSON.stringify(mistakes));
  } catch {
    // SAFETY: storage write failover
  }
}

/**
 * Records a new mistake idempotently (or updates timestamp if already recorded)
 */
export function recordMistake(
  input: Omit<MistakeEntry, "id" | "resolved" | "reviewCount" | "createdAt">
): MistakeEntry {
  const list = loadMistakes();
  const existingIdx = list.findIndex(
    (m) => m.questionId === input.questionId && m.sourceModule === input.sourceModule
  );

  const now = Date.now();
  // Next review scheduled in 24 hours (1 day)
  const nextReviewAt = now + 24 * 60 * 60 * 1000;

  if (existingIdx >= 0) {
    const updated: MistakeEntry = {
      ...list[existingIdx],
      ...input,
      resolved: false,
      lastReviewedAt: now,
      nextReviewAt,
    };
    list[existingIdx] = updated;
    saveMistakes(list);
    return updated;
  }

  const newEntry: MistakeEntry = {
    ...input,
    id: `mistake_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    resolved: false,
    reviewCount: 0,
    createdAt: now,
    nextReviewAt,
  };

  list.unshift(newEntry);
  saveMistakes(list);
  return newEntry;
}

/**
 * Marks a mistake as resolved or increments review count
 */
export function markMistakeReviewed(id: string, successfullySolved: boolean): void {
  const list = loadMistakes();
  const idx = list.findIndex((m) => m.id === id);
  if (idx < 0) return;

  const now = Date.now();
  const current = list[idx];
  const newCount = current.reviewCount + 1;

  if (successfullySolved) {
    // If solved 2 times consecutively, mark as resolved
    const resolved = newCount >= 2;
    list[idx] = {
      ...current,
      resolved,
      reviewCount: newCount,
      lastReviewedAt: now,
      // Spaced repetition interval: 3 days after first pass, 7 days after second
      nextReviewAt: now + (newCount === 1 ? 3 : 7) * 24 * 60 * 60 * 1000,
    };
  } else {
    // Failed: keep unresolved, schedule review tomorrow
    list[idx] = {
      ...current,
      resolved: false,
      lastReviewedAt: now,
      nextReviewAt: now + 24 * 60 * 60 * 1000,
    };
  }

  saveMistakes(list);
}

/**
 * Retrieves mistakes that are due for review
 */
export function getPendingMistakeReviews(now: number = Date.now()): MistakeEntry[] {
  const list = loadMistakes();
  return list.filter((m) => !m.resolved && (m.nextReviewAt ?? 0) <= now);
}

/**
 * Categorical statistics for the user profile and dashboard
 */
export function getMistakeStats(): {
  total: number;
  resolved: number;
  pending: number;
  byCategory: Record<ErrorCategory, number>;
} {
  const list = loadMistakes();
  const byCategory: Record<ErrorCategory, number> = {
    vocabulary: 0,
    grammar: 0,
    tense_harmony: 0,
    conjunction: 0,
    distractor: 0,
    carelessness: 0,
    reading_inference: 0,
    translation_shift: 0,
    time_pressure: 0,
  };

  let resolved = 0;
  for (const item of list) {
    if (item.resolved) resolved++;
    if (byCategory[item.errorCategory] !== undefined) {
      byCategory[item.errorCategory]++;
    }
  }

  return {
    total: list.length,
    resolved,
    pending: list.length - resolved,
    byCategory,
  };
}
