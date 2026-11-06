/** Small, explainable spaced-repetition schedule for vocabulary recall. */
export interface WordLearningState {
  /** 0 = needs relearning, 1 = one successful recall, 2–4 = established. */
  box: 0 | 1 | 2 | 3 | 4;
  dueAt: number;
  correctStreak: number;
  lastReviewedAt: number;
}

const REVIEW_INTERVALS_MS = [
  10 * 60 * 1000,
  24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000,
] as const;

export function scheduleWordReview(
  previous: WordLearningState | undefined,
  remembered: boolean,
  now: number,
): WordLearningState {
  const validPrevious = previous && Number.isInteger(previous.box) && previous.box >= 0 && previous.box <= 4
    ? previous
    : undefined;
  const box = remembered
    ? Math.min(4, (validPrevious?.box ?? 0) + 1) as WordLearningState["box"]
    : 0;

  return {
    box,
    dueAt: now + REVIEW_INTERVALS_MS[box],
    correctStreak: remembered ? (validPrevious?.correctStreak ?? 0) + 1 : 0,
    lastReviewedAt: now,
  };
}

export function isWordStillLearning(state: WordLearningState | undefined): boolean {
  return Boolean(state && state.box < 2);
}

export function isWordReviewDue(state: WordLearningState | undefined, now: number): boolean {
  return Boolean(state && state.dueAt <= now);
}
