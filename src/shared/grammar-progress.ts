import { GRAMMAR_LESSONS } from "../components/grammar/grammar-curriculum";

export const GRAMMAR_PROGRESS_VERSION = 1 as const;
export const DEFAULT_GRAMMAR_PROGRESS_KEY = "dil-master:grammar-progress:v1";

export type GrammarProgress = {
  version: typeof GRAMMAR_PROGRESS_VERSION;
  currentLessonId: string;
  /** Completed means the learner selected the correct quiz answer, not merely opened the lesson. */
  completedLessonIds: string[];
  /** Preserve an unanswered or wrong answer so an interrupted quiz resumes in place. */
  answerIndex: number | null;
  updatedAt: string | null;
};

export type GrammarProgressStorage = Pick<Storage, "getItem" | "setItem">;

export const EMPTY_GRAMMAR_PROGRESS: GrammarProgress = {
  version: GRAMMAR_PROGRESS_VERSION,
  currentLessonId: GRAMMAR_LESSONS[0]?.id ?? "",
  completedLessonIds: [],
  answerIndex: null,
  updatedAt: null,
};

function availableStorage(): GrammarProgressStorage | undefined {
  try {
    if (typeof window === "undefined") return undefined;
    return window.localStorage;
  } catch {
    // Safari private mode, sandboxed preview, or browser storage policy can deny access.
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Strictly validate persisted JSON; corrupt local data never crashes the lesson UI. */
export function normalizeGrammarProgress(value: unknown): GrammarProgress {
  if (!isRecord(value) || value.version !== GRAMMAR_PROGRESS_VERSION) return { ...EMPTY_GRAMMAR_PROGRESS };
  const currentLessonId = typeof value.currentLessonId === "string"
    && GRAMMAR_LESSONS.some((lesson) => lesson.id === value.currentLessonId)
    ? value.currentLessonId
    : EMPTY_GRAMMAR_PROGRESS.currentLessonId;
  const currentLesson = GRAMMAR_LESSONS.find((lesson) => lesson.id === currentLessonId);
  const completedLessonIds = Array.isArray(value.completedLessonIds)
    ? [...new Set(value.completedLessonIds.filter((id): id is string =>
      typeof id === "string" && GRAMMAR_LESSONS.some((lesson) => lesson.id === id),
    ))]
    : [];
  const rawAnswerIndex = value.answerIndex;
  const answerIndex = Number.isInteger(rawAnswerIndex)
    && currentLesson
    && (rawAnswerIndex as number) >= 0
    && (rawAnswerIndex as number) < currentLesson.quiz.choices.length
    ? (rawAnswerIndex as number)
    : null;
  const updatedAt = typeof value.updatedAt === "string" && Number.isFinite(Date.parse(value.updatedAt))
    ? new Date(value.updatedAt).toISOString()
    : null;
  return { version: GRAMMAR_PROGRESS_VERSION, currentLessonId, completedLessonIds, answerIndex, updatedAt };
}

export function loadGrammarProgress(
  key = DEFAULT_GRAMMAR_PROGRESS_KEY,
  storage: GrammarProgressStorage | undefined = availableStorage(),
): GrammarProgress {
  if (!storage) return { ...EMPTY_GRAMMAR_PROGRESS };
  try {
    const raw = storage.getItem(key);
    return raw ? normalizeGrammarProgress(JSON.parse(raw) as unknown) : { ...EMPTY_GRAMMAR_PROGRESS };
  } catch {
    return { ...EMPTY_GRAMMAR_PROGRESS };
  }
}

export function saveGrammarProgress(
  progress: GrammarProgress,
  key = DEFAULT_GRAMMAR_PROGRESS_KEY,
  storage: GrammarProgressStorage | undefined = availableStorage(),
): boolean {
  if (!storage) return false;
  try {
    storage.setItem(key, JSON.stringify(normalizeGrammarProgress(progress)));
    return true;
  } catch {
    // Quota/security errors are handled gracefully
    return false;
  }
}

export function currentLessonIndex(progress: GrammarProgress): number {
  const index = GRAMMAR_LESSONS.findIndex((lesson) => lesson.id === progress.currentLessonId);
  return index >= 0 ? index : 0;
}
