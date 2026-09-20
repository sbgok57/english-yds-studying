// Autonomous Background Crash Guardian & Diagnostics Engine
// Catches, classifies, isolates, and self-repairs runtime errors without white-screen failure.

export type CrashCategory =
  | "CHUNK_LOAD_ERROR"
  | "STORAGE_QUOTA_EXCEEDED"
  | "WEBGL_CONTEXT_LOST"
  | "REACT_RENDER_ERROR"
  | "NETWORK_OFFLINE"
  | "UNHANDLED_EXCEPTION";

export interface CrashEvent {
  id: string;
  category: CrashCategory;
  message: string;
  stack?: string;
  timestamp: number;
  route: string;
  repaired: boolean;
  repairAction?: string;
}

const MAX_CRASH_LOGS = 20;
const CRASH_LOOP_WINDOW_MS = 10000; // 10 seconds
const CRASH_LOOP_THRESHOLD = 3; // 3 crashes within 10s triggers safe mode

let crashHistory: CrashEvent[] = [];
let isSafeMode = false;
let initialized = false;
const listeners = new Set<(event: CrashEvent) => void>();

/**
 * Classifies an error to determine automated self-healing strategy
 */
export function classifyError(error: any): CrashCategory {
  if (!error) return "UNHANDLED_EXCEPTION";

  const msg = String(error.message || error || "").toLowerCase();
  const name = String(error.name || "").toLowerCase();

  // Chunk loading failure (frequent when a new Vercel deployment occurs while user has tab open)
  if (
    msg.includes("loading chunk") ||
    msg.includes("failed to fetch dynamically imported module") ||
    msg.includes("dynamically imported module") ||
    name === "chunkloaderror"
  ) {
    return "CHUNK_LOAD_ERROR";
  }

  // Storage quota limit exceeded (Safari private mode or full storage)
  if (
    name === "quotaexceedederror" ||
    msg.includes("quota") ||
    msg.includes("storage limit") ||
    msg.includes("exceeded the quota")
  ) {
    return "STORAGE_QUOTA_EXCEEDED";
  }

  // WebGL GPU context loss
  if (
    msg.includes("webgl") ||
    msg.includes("context lost") ||
    msg.includes("webglcontextlost")
  ) {
    return "WEBGL_CONTEXT_LOST";
  }

  // Network offline or failed fetch
  if (
    msg.includes("failed to fetch") ||
    msg.includes("networkerror") ||
    msg.includes("offline")
  ) {
    return "NETWORK_OFFLINE";
  }

  // React component render failure
  if (msg.includes("react") || msg.includes("rendered") || msg.includes("hydrat")) {
    return "REACT_RENDER_ERROR";
  }

  return "UNHANDLED_EXCEPTION";
}

/**
 * Attempts self-healing actions based on the error classification
 */
function attemptSelfHealing(category: CrashCategory, error: any): { repaired: boolean; action: string } {
  if (typeof window === "undefined") {
    return { repaired: false, action: "ssr_noop" };
  }

  try {
    switch (category) {
      case "CHUNK_LOAD_ERROR": {
        // Prevent refresh storms with session flag
        const reloadKey = "yds_chunk_reload_lock";
        const lastReload = Number(sessionStorage.getItem(reloadKey) || 0);
        const now = Date.now();

        if (now - lastReload > 15000) {
          sessionStorage.setItem(reloadKey, String(now));
          console.warn("[CRASH_GUARDIAN] Stale deployment chunk detected. Self-healing via clean cache refresh...");
          // Slight delay to allow current state to finish dirty-save
          setTimeout(() => {
            window.location.reload();
          }, 300);
          return { repaired: true, action: "stale_chunk_reload" };
        }
        return { repaired: false, action: "reload_loop_suppressed" };
      }

      case "STORAGE_QUOTA_EXCEEDED": {
        // Evict non-essential caches from localStorage, preserving core progress
        console.warn("[CRASH_GUARDIAN] Storage quota exceeded. Evicting ephemeral caches...");
        const nonEssentialKeys = [
          "yds_recent_crashes",
          "yds_tts_cache",
          "yds_search_history",
          "yds_word_audio_cache",
        ];
        nonEssentialKeys.forEach((k) => {
          try {
            window.localStorage.removeItem(k);
          } catch {
            /* noop */
          }
        });
        return { repaired: true, action: "ephemeral_cache_eviction" };
      }

      case "WEBGL_CONTEXT_LOST": {
        console.warn("[CRASH_GUARDIAN] WebGL context lost. Fallback to CSS 3D requested.");
        // Notify any active 3D components to demote to CSS 3D
        window.dispatchEvent(new CustomEvent("yds:webgl-fallback"));
        return { repaired: true, action: "webgl_demote_to_css" };
      }

      default:
        return { repaired: false, action: "logged_only" };
    }
  } catch {
    return { repaired: false, action: "self_heal_failed" };
  }
}

/**
 * Reports and logs a crash with automatic self-repair evaluation
 */
export function reportCrash(error: any, contextDescription?: string): CrashEvent {
  const category = classifyError(error);
  const now = Date.now();
  const route = typeof window !== "undefined" ? window.location.pathname : "/";
  const message = String(error?.message || error || "Unknown runtime error").slice(0, 300);
  const stack = error?.stack ? String(error.stack).slice(0, 1000) : undefined;

  const { repaired, action } = attemptSelfHealing(category, error);

  const event: CrashEvent = {
    id: `crash_${now}_${Math.random().toString(36).slice(2, 6)}`,
    category,
    message: contextDescription ? `[${contextDescription}] ${message}` : message,
    stack,
    timestamp: now,
    route,
    repaired,
    repairAction: action,
  };

  // Keep bounded history
  crashHistory.push(event);
  if (crashHistory.length > MAX_CRASH_LOGS) {
    crashHistory.shift();
  }

  // Anti-loop circuit breaker: count recent crashes
  const recentCount = crashHistory.filter((c) => now - c.timestamp < CRASH_LOOP_WINDOW_MS).length;
  if (recentCount >= CRASH_LOOP_THRESHOLD && !isSafeMode) {
    isSafeMode = true;
    console.error("[CRASH_GUARDIAN] Circuit breaker activated: Entering Safe Mode to prevent crash loop.");
  }

  // Notify listeners
  listeners.forEach((fn) => {
    try {
      fn(event);
    } catch {
      /* prevent listener error from bubbling */
    }
  });

  return event;
}

/**
 * Initializes global browser error and unhandled rejection listeners
 */
export function initCrashGuardian(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  // Unhandled synchronous errors
  window.addEventListener("error", (event: ErrorEvent) => {
    // Ignore harmless cross-origin script errors or browser extension noise
    if (event.message === "Script error." && !event.filename) return;

    reportCrash(event.error || event.message, "window.onerror");
  });

  // Unhandled async promise rejections
  window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
    reportCrash(event.reason, "unhandledrejection");
  });

  // WebGL context loss listener
  window.addEventListener("webglcontextlost", (event: Event) => {
    event.preventDefault();
    reportCrash(new Error("WebGL context lost"), "webglcontextlost");
  });

  // Online / Offline transitions
  window.addEventListener("offline", () => {
    reportCrash(new Error("Device disconnected from network"), "navigator.offline");
  });
}

export function isSafeModeActive(): boolean {
  return isSafeMode;
}

export function resetSafeMode(): void {
  isSafeMode = false;
}

export function getRecentCrashes(): CrashEvent[] {
  return [...crashHistory];
}

export function subscribeToCrashEvents(listener: (event: CrashEvent) => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
