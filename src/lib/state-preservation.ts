// Continuous State Preservation & Auto-Recovery Engine
// Ensures students never lose their work during phone screen locks, tab unloads, crashes, or refreshes.

export type SessionType = "exam" | "optik" | "level_test" | "flashcards" | "grammar";

export interface BaseCheckpoint {
  type: SessionType;
  title: string;
  url: string;
  updatedAt?: number;
  completed?: boolean;
}

export interface ExamCheckpoint extends BaseCheckpoint {
  type: "exam";
  examId: string;
  currentQuestion: number;
  answers: Record<number, number>;
  flags: Record<number, boolean>;
  startedAt: number;
  durationMinutes: number;
}

export interface OptikCheckpoint extends BaseCheckpoint {
  type: "optik";
  examId: string;
  answers: Record<number, string>;
  startedAt: number;
  durationMinutes: number;
  finished: boolean;
}

export interface LevelTestCheckpoint extends BaseCheckpoint {
  type: "level_test";
  currentIndex: number;
  answers: Record<string, number>;
  startedAt: number;
}

export interface FlashcardsCheckpoint extends BaseCheckpoint {
  type: "flashcards";
  currentIndex: number;
  category?: string;
}

export interface GrammarCheckpoint extends BaseCheckpoint {
  type: "grammar";
  slug: string;
  level: string;
  currentIndex: number;
}

export type AnySessionCheckpoint =
  | ExamCheckpoint
  | OptikCheckpoint
  | LevelTestCheckpoint
  | FlashcardsCheckpoint
  | GrammarCheckpoint;

const CHECKPOINT_PREFIX = "yds_checkpoint_v2_";
const IN_MEMORY_STORAGE = new Map<string, string>();
const SESSION_EXPIRY_MS = 48 * 60 * 60 * 1000; // 48 hours

// Subscribers for recovery alerts
const recoveryListeners = new Set<(checkpoint: AnySessionCheckpoint | null) => void>();

/**
 * Resilient multi-tier storage writer (LocalStorage -> SessionStorage -> Memory Map)
 */
function resilientWrite(key: string, value: string): boolean {
  // Tier 1: LocalStorage
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      // Quota exceeded or private browsing restriction
    }
  }

  // Tier 2: SessionStorage
  if (typeof window !== "undefined" && window.sessionStorage) {
    try {
      window.sessionStorage.setItem(key, value);
      return true;
    } catch {
      // SessionStorage restricted
    }
  }

  // Tier 3: In-Memory
  IN_MEMORY_STORAGE.set(key, value);
  return true;
}

/**
 * Resilient multi-tier storage reader
 */
function resilientRead(key: string): string | null {
  if (typeof window !== "undefined") {
    try {
      const fromLocal = window.localStorage?.getItem(key);
      if (fromLocal) return fromLocal;
    } catch {
      /* noop */
    }

    try {
      const fromSession = window.sessionStorage?.getItem(key);
      if (fromSession) return fromSession;
    } catch {
      /* noop */
    }
  }

  return IN_MEMORY_STORAGE.get(key) || null;
}

/**
 * Resilient multi-tier storage remover
 */
function resilientRemove(key: string): void {
  if (typeof window !== "undefined") {
    try {
      window.localStorage?.removeItem(key);
    } catch {
      /* noop */
    }
    try {
      window.sessionStorage?.removeItem(key);
    } catch {
      /* noop */
    }
  }
  IN_MEMORY_STORAGE.delete(key);
}

/**
 * Saves an active session checkpoint with timestamp
 */
export function saveSessionCheckpoint(checkpoint: AnySessionCheckpoint): void {
  const key = `${CHECKPOINT_PREFIX}${checkpoint.type}`;
  const payload = {
    ...checkpoint,
    updatedAt: Date.now(),
  };

  resilientWrite(key, JSON.stringify(payload));
}

/**
 * Loads a specific session checkpoint if not expired
 */
export function loadSessionCheckpoint<T extends AnySessionCheckpoint>(type: SessionType): T | null {
  const key = `${CHECKPOINT_PREFIX}${type}`;
  const raw = resilientRead(key);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as T;
    // Discard expired sessions
    if (Date.now() - (parsed.updatedAt || 0) > SESSION_EXPIRY_MS) {
      resilientRemove(key);
      return null;
    }
    return parsed;
  } catch {
    resilientRemove(key);
    return null;
  }
}

/**
 * Clears a finished or dismissed checkpoint
 */
export function clearSessionCheckpoint(type: SessionType): void {
  const key = `${CHECKPOINT_PREFIX}${type}`;
  resilientRemove(key);
  notifyRecoverySubscribers();
}

/**
 * Checks all session types and returns the latest interrupted session (if any)
 */
export function getInterruptedSession(): AnySessionCheckpoint | null {
  const types: SessionType[] = ["exam", "optik", "level_test", "flashcards", "grammar"];
  let latest: AnySessionCheckpoint | null = null;

  for (const t of types) {
    const cp = loadSessionCheckpoint(t);
    if (cp && !cp.completed) {
      if (!latest || (cp.updatedAt || 0) > (latest.updatedAt || 0)) {
        latest = cp;
      }
    }
  }

  return latest;
}

/**
 * Subscribes to changes in recoverable sessions
 */
export function subscribeToRecovery(callback: (checkpoint: AnySessionCheckpoint | null) => void): () => void {
  recoveryListeners.add(callback);
  callback(getInterruptedSession());
  return () => {
    recoveryListeners.delete(callback);
  };
}

function notifyRecoverySubscribers(): void {
  const latest = getInterruptedSession();
  recoveryListeners.forEach((fn) => fn(latest));
}

/**
 * Automatic background listeners for tab visibility and app closing
 */
if (typeof window !== "undefined") {
  // Mobile / Tab switch flush
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      // Immediate dirty flush marker
      resilientWrite("yds_last_visibility_hidden", String(Date.now()));
    }
  });

  window.addEventListener("pagehide", () => {
    resilientWrite("yds_last_pagehide", String(Date.now()));
  });
}
