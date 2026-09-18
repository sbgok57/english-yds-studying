import { z } from "zod";
import type { BankQ, QType } from "./data-bank-core";
import type { ExamQuestion } from "./data-exams";
import type { UsageData } from "./store";

// ============ Zod Schemas ============

export const BankQuestionSchema = z.object({
  id: z.string().min(1, "Question ID cannot be empty"),
  t: z.enum([
    "vocab",
    "grammar",
    "cloze",
    "sentence",
    "en-tr",
    "tr-en",
    "restate",
    "irrel",
    "dialogue",
    "reading",
  ]),
  s: z.string().min(3, "Question stem must be at least 3 characters"),
  o: z
    .array(z.string().min(1, "Option text cannot be empty"))
    .length(5, "Must have exactly 5 options")
    .refine(
      (opts) => new Set(opts).size === 5,
      "All 5 options must be distinct"
    ),
  a: z.number().int().min(0).max(4, "Answer index must be between 0 and 4"),
  ex: z.string().min(1, "Explanation cannot be empty"),
  p: z.string().optional(),
  pt: z.string().optional(),
  level: z.string().optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).optional(),
  sourceType: z.literal("original-yds-style").optional(),
  isOfficial: z.boolean().optional(),
});

export const ExamQuestionSchema = z.object({
  n: z.number().int().positive("Question number n must be positive"),
  type: z.string().min(1, "Type label cannot be empty"),
  stem: z.string().min(3, "Question stem must be at least 3 characters"),
  options: z
    .array(z.string().min(1, "Option text cannot be empty"))
    .length(5, "Must have exactly 5 options")
    .refine(
      (opts) => new Set(opts).size === 5,
      "All 5 options must be distinct"
    ),
  answer: z.number().int().min(0).max(4, "Answer index must be between 0 and 4"),
  explanation: z.string().optional(),
  passage: z.string().optional(),
  passageTitle: z.string().optional(),
  id: z.string().optional(),
});

export const ExamQuestionsArraySchema = z
  .array(ExamQuestionSchema)
  .length(80, "Exam must contain exactly 80 questions")
  .refine((questions) => {
    const numbers = questions.map((q) => q.n);
    const unique = new Set(numbers);
    if (unique.size !== 80) return false;
    for (let i = 1; i <= 80; i++) {
      if (!unique.has(i)) return false;
    }
    return true;
  }, "Exam question numbers must be 1 to 80 sequentially and uniquely");

// ============ Validation Functions ============

export function validateBankQuestion(q: unknown): { valid: boolean; error?: string } {
  const result = BankQuestionSchema.safeParse(q);
  if (!result.success) {
    return { valid: false, error: result.error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ") };
  }
  return { valid: true };
}

export function validateExamQuestion(q: unknown): { valid: boolean; error?: string } {
  const result = ExamQuestionSchema.safeParse(q);
  if (!result.success) {
    return { valid: false, error: result.error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ") };
  }
  return { valid: true };
}

export function validateExam(questions: ExamQuestion[]): { valid: boolean; error?: string } {
  const result = ExamQuestionsArraySchema.safeParse(questions);
  if (!result.success) {
    return { valid: false, error: result.error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ") };
  }
  return { valid: true };
}

// ============ Safe Immutable Utilities ============

export function deepCloneQuestion(q: BankQ): BankQ {
  return {
    ...q,
    o: [...q.o],
  };
}

export function shuffleOptionsSafely(
  options: string[],
  correctIndex: number,
  rng: () => number
): { options: string[]; answer: number } {
  // SAFETY: Never mutate incoming array
  const indices = [0, 1, 2, 3, 4];
  // Seeded Fisher-Yates
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const temp = indices[i];
    indices[i] = indices[j];
    indices[j] = temp;
  }
  const newOptions = indices.map((idx) => options[idx]);
  const newAnswer = indices.indexOf(correctIndex);
  return { options: newOptions, answer: newAnswer };
}

// ============ Net Score Formula ============
// Single unified YDS net formula across the entire application: net = correct - wrong / 4
export function calculateYdsNet(correct: number, wrong: number): number {
  const rawNet = correct - wrong / 4;
  return Math.max(0, rawNet);
}

// ============ UsageData Safe Migration ============

export function migrateUsageData(raw: unknown, defaultUsage: UsageData): UsageData {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ...defaultUsage };
  }

  const src = raw as Record<string, unknown>;

  // Validate words
  const words: Record<string, { c: number; w: number; last: number }> = {};
  if (src.words && typeof src.words === "object" && !Array.isArray(src.words)) {
    for (const [k, v] of Object.entries(src.words as Record<string, unknown>)) {
      if (v && typeof v === "object") {
        const item = v as Record<string, unknown>;
        const c = typeof item.c === "number" && !isNaN(item.c) ? item.c : 0;
        const w = typeof item.w === "number" && !isNaN(item.w) ? item.w : 0;
        const last = typeof item.last === "number" && !isNaN(item.last) ? item.last : 0;
        words[k] = { c, w, last };
      }
    }
  }

  // Validate grammar
  const grammar: Record<string, { a: number; ok: number }> = {};
  if (src.grammar && typeof src.grammar === "object" && !Array.isArray(src.grammar)) {
    for (const [k, v] of Object.entries(src.grammar as Record<string, unknown>)) {
      if (v && typeof v === "object") {
        const item = v as Record<string, unknown>;
        const a = typeof item.a === "number" && !isNaN(item.a) ? item.a : 0;
        const ok = typeof item.ok === "number" && !isNaN(item.ok) ? item.ok : 0;
        grammar[k] = { a, ok };
      }
    }
  }

  // Validate tactics
  const tactics: Record<string, number> = {};
  if (src.tactics && typeof src.tactics === "object" && !Array.isArray(src.tactics)) {
    for (const [k, v] of Object.entries(src.tactics as Record<string, unknown>)) {
      if (typeof v === "number" && !isNaN(v)) {
        tactics[k] = v;
      }
    }
  }

  // Validate exams
  const exams = {
    taken: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    bestNet: 0,
  };
  if (src.exams && typeof src.exams === "object" && !Array.isArray(src.exams)) {
    const e = src.exams as Record<string, unknown>;
    exams.taken = typeof e.taken === "number" && !isNaN(e.taken) && e.taken >= 0 ? e.taken : 0;
    exams.totalCorrect = typeof e.totalCorrect === "number" && !isNaN(e.totalCorrect) && e.totalCorrect >= 0 ? e.totalCorrect : 0;
    exams.totalQuestions = typeof e.totalQuestions === "number" && !isNaN(e.totalQuestions) && e.totalQuestions >= 0 ? e.totalQuestions : 0;
    exams.bestNet = typeof e.bestNet === "number" && !isNaN(e.bestNet) && e.bestNet >= 0 ? e.bestNet : 0;
  }

  // Validate scalar fields
  const avatar = typeof src.avatar === "number" && !isNaN(src.avatar) ? src.avatar : null;
  const customAvatar = typeof src.customAvatar === "string" && src.customAvatar.length < 500000 ? src.customAvatar : null;
  const ambient = typeof src.ambient === "boolean" ? src.ambient : true;
  const sessions = typeof src.sessions === "number" && !isNaN(src.sessions) && src.sessions >= 1 ? src.sessions : 1;
  const lastVisit = typeof src.lastVisit === "number" && !isNaN(src.lastVisit) ? src.lastVisit : 0;

  // Bookmarks
  const bookmarks = Array.isArray(src.bookmarks)
    ? src.bookmarks.filter((b): b is string => typeof b === "string")
    : [];

  // Validate Level Assessment
  let levelAssessment: UsageData["levelAssessment"] = undefined;
  if (src.levelAssessment && typeof src.levelAssessment === "object" && !Array.isArray(src.levelAssessment)) {
    const la = src.levelAssessment as Record<string, unknown>;
    const currentLevel = (typeof la.currentLevel === "string" && ["A1", "A2", "B1", "B2", "C1", "C2"].includes(la.currentLevel))
      ? (la.currentLevel as any)
      : null;
    const confidence = (typeof la.confidence === "string" && ["low", "medium", "high"].includes(la.confidence))
      ? (la.confidence as any)
      : null;
    const lastTestAt = typeof la.lastTestAt === "number" && !isNaN(la.lastTestAt) ? la.lastTestAt : null;
    const attempts = Array.isArray(la.attempts) ? la.attempts.slice(0, 10) : [];
    const skillScores = (typeof la.skillScores === "object" && la.skillScores !== null)
      ? la.skillScores as any
      : { grammar: 0, vocabulary: 0, reading: 0, usage: 0 };

    levelAssessment = {
      currentLevel,
      confidence,
      lastTestAt,
      attempts,
      skillScores,
    };
  }

  // Validate Gamification (Points & Badges)
  let gamification: UsageData["gamification"] = undefined;
  if (src.gamification && typeof src.gamification === "object" && !Array.isArray(src.gamification)) {
    const g = src.gamification as Record<string, unknown>;
    const pts = (typeof g.points === "object" && g.points !== null) ? (g.points as any) : {};
    const total = typeof pts.total === "number" && !isNaN(pts.total) && pts.total >= 0 ? pts.total : 0;
    const events = Array.isArray(pts.events) ? pts.events.slice(0, 500) : [];
    const awardedSourceKeys = (typeof pts.awardedSourceKeys === "object" && pts.awardedSourceKeys !== null)
      ? pts.awardedSourceKeys
      : {};

    const b = (typeof g.badges === "object" && g.badges !== null) ? (g.badges as any) : {};
    const earned = Array.isArray(b.earned) ? b.earned : [];
    const progress = (typeof b.progress === "object" && b.progress !== null) ? b.progress : {};
    const showcaseBadgeIds = Array.isArray(g.showcaseBadgeIds)
      ? (g.showcaseBadgeIds.filter((id: unknown): id is string => typeof id === "string")).slice(0, 5)
      : [];

    gamification = {
      points: { version: 1, total, events, awardedSourceKeys },
      badges: { version: 1, earned, progress },
      showcaseBadgeIds,
    };
  }

  return {
    words,
    grammar,
    tactics,
    exams,
    avatar,
    customAvatar,
    ambient,
    sessions,
    lastVisit,
    bookmarks,
    wrongQuestions: (typeof src.wrongQuestions === "object" && src.wrongQuestions !== null && !Array.isArray(src.wrongQuestions))
      ? src.wrongQuestions as UsageData["wrongQuestions"]
      : {},
    solvedQuestions: (typeof src.solvedQuestions === "object" && src.solvedQuestions !== null && !Array.isArray(src.solvedQuestions))
      ? src.solvedQuestions as UsageData["solvedQuestions"]
      : {},
    levelAssessment,
    gamification,
  };
}
