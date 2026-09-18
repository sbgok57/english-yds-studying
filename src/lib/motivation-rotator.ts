// Context-sensitive, Hydration-Safe Motivation Rotator with 25-item Exclusion Memory

import { MOTIVATIONS, MotivationItem, MotivationCategory } from "./data-motivations";

const RECENT_SHOWN_KEY = "yds-master-recent-motivations-v1";
const MAX_HISTORY = 25;

export type MotivationContext =
  | "home"
  | "login"
  | "exam_finish"
  | "badge_earn"
  | "streak"
  | "level_up"
  | "morning"
  | "night"
  | "low_mood";

const CONTEXT_CATEGORY_MAP: Record<MotivationContext, MotivationCategory[]> = {
  home: ["baslangic", "disiplin", "hedef_puan", "uzun_maraton", "kelime", "gramer", "reading"],
  login: ["baslangic", "disiplin", "seri", "yeniden_baslama"],
  exam_finish: ["sinav_sonrasi", "yanlis_yapma", "moral_dusuklugu"],
  badge_earn: ["rozet", "seviye", "hedef_puan"],
  streak: ["seri", "disiplin", "uzun_maraton"],
  level_up: ["seviye", "c1", "c2", "b2"],
  morning: ["sabah", "disiplin", "baslangic"],
  night: ["gece", "uzun_maraton", "disiplin"],
  low_mood: ["moral_dusuklugu", "yanlis_yapma", "yeniden_baslama"],
};

export function getRecentShownIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RECENT_SHOWN_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveShownId(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const history = getRecentShownIds();
    const filtered = history.filter((item) => item !== id);
    const updated = [id, ...filtered].slice(0, MAX_HISTORY);
    window.localStorage.setItem(RECENT_SHOWN_KEY, JSON.stringify(updated));
  } catch {
    /* safety */
  }
}

export function pickMotivation(
  context: MotivationContext = "home",
  preferredCategory?: MotivationCategory
): MotivationItem {
  const recentIds = new Set(getRecentShownIds());
  const allowedCategories = preferredCategory
    ? [preferredCategory]
    : CONTEXT_CATEGORY_MAP[context] || CONTEXT_CATEGORY_MAP.home;

  // 1. Filter candidates in target categories that are NOT in recent 25
  const freshCandidates = MOTIVATIONS.filter(
    (m) => allowedCategories.includes(m.category) && !recentIds.has(m.id)
  );

  let selected: MotivationItem;

  if (freshCandidates.length > 0) {
    const randomIndex = Math.floor(Math.random() * freshCandidates.length);
    selected = freshCandidates[randomIndex];
  } else {
    // If all target category items were recently shown, fallback to any category not in recent
    const anyFresh = MOTIVATIONS.filter((m) => !recentIds.has(m.id));
    if (anyFresh.length > 0) {
      const randomIndex = Math.floor(Math.random() * anyFresh.length);
      selected = anyFresh[randomIndex];
    } else {
      // Fallback: pick purely randomly from target categories
      const pool = MOTIVATIONS.filter((m) => allowedCategories.includes(m.category));
      selected = pool[Math.floor(Math.random() * pool.length)] || MOTIVATIONS[0];
    }
  }

  saveShownId(selected.id);
  return selected;
}

// Deterministic default for initial SSR render to prevent hydration mismatch
export const DEFAULT_MOTIVATION: MotivationItem = MOTIVATIONS[0];
