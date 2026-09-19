// Spaced Repetition and Cognitive Retention Engine
// Implements SM-2 inspired adaptive scheduling (10m, 1d, 3d, 7d, 14d, 30d, 60d)

export type ReviewQualityRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface SpacedReviewItem {
  id: string;
  repetitionCount: number;
  intervalDays: number;
  easeFactor: number;
  successStreak: number;
  lastReviewedAt: number;
  nextReviewAt: number;
  mastered: boolean;
}

// Canonical Spaced Repetition interval steps in days (0.007 ~ 10 minutes)
export const INTERVAL_STEPS_DAYS = [0.007, 1, 3, 7, 14, 30, 60];

/**
 * Calculates updated review schedule when an item is practiced.
 * Quality: 0-5 (0-2: Fail, 3-5: Pass)
 */
export function scheduleNextReview(
  current: Partial<SpacedReviewItem>,
  quality: ReviewQualityRating,
  now: number = Date.now()
): SpacedReviewItem {
  const repetitionCount = current.repetitionCount ?? 0;
  const oldEF = current.easeFactor ?? 2.5;
  const currentStreak = current.successStreak ?? 0;

  // Update Ease Factor (SM-2 formula clamped between 1.3 and 3.0)
  const newEF = Math.max(
    1.3,
    Math.min(3.0, oldEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
  );

  let newStreak = currentStreak;
  let newRepetition = repetitionCount;
  let nextIntervalDays = 1;

  if (quality >= 3) {
    // Correct recall
    newStreak += 1;
    newRepetition += 1;

    if (newRepetition === 1) {
      nextIntervalDays = 1;
    } else if (newRepetition === 2) {
      nextIntervalDays = 3;
    } else {
      const stepIndex = Math.min(newRepetition - 1, INTERVAL_STEPS_DAYS.length - 1);
      nextIntervalDays = Math.round(INTERVAL_STEPS_DAYS[stepIndex] * (newEF / 2.5));
    }
  } else {
    // Failed recall (lapse): reset streak, schedule rapid re-test (10 min or 1 day)
    newStreak = 0;
    newRepetition = Math.max(0, repetitionCount - 1);
    nextIntervalDays = 0.007; // ~10 minutes
  }

  const nextReviewAt = now + Math.round(nextIntervalDays * 24 * 60 * 60 * 1000);
  const mastered = newStreak >= 4 && newRepetition >= 4;

  return {
    id: current.id || "item",
    repetitionCount: newRepetition,
    intervalDays: nextIntervalDays,
    easeFactor: Math.round(newEF * 100) / 100,
    successStreak: newStreak,
    lastReviewedAt: now,
    nextReviewAt,
    mastered,
  };
}

/**
 * Checks if an item is ready for review based on current timestamp
 */
export function isDueForReview(item: SpacedReviewItem, now: number = Date.now()): boolean {
  if (item.mastered) return false;
  return item.nextReviewAt <= now;
}

/**
 * Returns review urgency category
 */
export function getReviewUrgency(
  item: SpacedReviewItem,
  now: number = Date.now()
): "overdue" | "due_today" | "upcoming" | "mastered" {
  if (item.mastered) return "mastered";
  const diffHours = (now - item.nextReviewAt) / (1000 * 60 * 60);
  if (diffHours > 24) return "overdue";
  if (diffHours >= 0) return "due_today";
  return "upcoming";
}
