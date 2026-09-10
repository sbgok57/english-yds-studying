import { LearningState, LearningStage, VocabularyItem } from '../types';

const INTERVAL_STEPS = [1, 3, 7, 14, 30];

export function determineStage(mastery: number): LearningStage {
  const safe = Math.max(0, Math.min(100, isNaN(mastery) ? 0 : mastery));
  if (safe < 20) return 'new';
  if (safe < 40) return 'familiar';
  if (safe < 60) return 'learning';
  if (safe < 80) return 'strong';
  if (safe < 95) return 'very_strong';
  return 'mastered';
}

export function createInitialLearningState(vocabularyId: string): LearningState {
  const now = new Date().toISOString();
  return {
    vocabularyId,
    mastery: 0,
    correctCount: 0,
    incorrectCount: 0,
    consecutiveCorrect: 0,
    consecutiveIncorrect: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    lastReviewedAt: null,
    nextReviewAt: now,
    learningStage: 'new',
  };
}

/**
 * Calculates updated learning state following SM-2 inspired spaced repetition principles.
 * Ensures accumulated progress is preserved without harsh punishment on single errors.
 */
export function processReview(
  currentState: LearningState,
  isCorrect: boolean,
  evidenceWeight = 1.0
): LearningState {
  const now = new Date();

  let consecutiveCorrect = currentState.consecutiveCorrect;
  let consecutiveIncorrect = currentState.consecutiveIncorrect;
  let correctCount = currentState.correctCount;
  let incorrectCount = currentState.incorrectCount;
  let easeFactor = currentState.easeFactor;
  let intervalDays = currentState.intervalDays;

  if (isCorrect) {
    consecutiveCorrect += 1;
    consecutiveIncorrect = 0;
    correctCount += 1;

    // Minimum progression rule:
    // 1st: 1d, 2nd: 3d, 3rd: 7d, 4th: 14d, 5th: 30d
    if (consecutiveCorrect <= INTERVAL_STEPS.length) {
      intervalDays = INTERVAL_STEPS[consecutiveCorrect - 1];
    } else {
      intervalDays = Math.round(intervalDays * easeFactor);
    }

    // Adaptive ease factor: slight boost for continuous mastery
    easeFactor = Math.min(2.7, easeFactor + 0.05 * evidenceWeight);
  } else {
    consecutiveCorrect = 0;
    consecutiveIncorrect += 1;
    incorrectCount += 1;

    // Gentle reduction: does not destroy accumulated historical progress
    intervalDays = 1; // Schedule for near-term follow-up review
    easeFactor = Math.max(1.3, easeFactor - 0.15);
  }

  // Calculate next review timestamp
  const nextReviewDate = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);

  // Dynamic mastery computation
  const totalReviews = correctCount + incorrectCount;
  const rawRatio = totalReviews > 0 ? (correctCount / totalReviews) * 60 : 0;
  const streakBonus = Math.min(25, consecutiveCorrect * 5);
  const consistencyBonus = Math.min(15, Math.log10(totalReviews + 1) * 10);
  const penalty = Math.min(25, consecutiveIncorrect * 8);

  const rawMastery = rawRatio + streakBonus + consistencyBonus - penalty;
  const mastery = Math.round(Math.max(0, Math.min(100, rawMastery)));

  return {
    ...currentState,
    mastery,
    correctCount,
    incorrectCount,
    consecutiveCorrect,
    consecutiveIncorrect,
    easeFactor: Number(easeFactor.toFixed(2)),
    intervalDays,
    lastReviewedAt: now.toISOString(),
    nextReviewAt: nextReviewDate.toISOString(),
    learningStage: determineStage(mastery),
  };
}

export interface DueSelectionResult {
  dueItems: VocabularyItem[];
  weakItems: VocabularyItem[];
  newItems: VocabularyItem[];
  sessionQueue: VocabularyItem[];
}

/**
 * Prioritizes learning items for daily sessions:
 * 1. Overdue reviews
 * 2. Weak words
 * 3. Recent errors
 * 4. New words
 * 5. Stable words
 */
export function buildStudyQueue(
  allVocabulary: VocabularyItem[],
  statesMap: Map<string, LearningState>,
  targetCount = 20
): DueSelectionResult {
  const now = new Date();
  const dueItems: VocabularyItem[] = [];
  const weakItems: VocabularyItem[] = [];
  const newItems: VocabularyItem[] = [];
  const stableItems: VocabularyItem[] = [];

  for (const item of allVocabulary) {
    const state = statesMap.get(item.id);
    if (!state || state.learningStage === 'new') {
      newItems.push(item);
    } else {
      const isDue = new Date(state.nextReviewAt) <= now;
      if (isDue) {
        dueItems.push(item);
      } else if (state.mastery < 50 || state.consecutiveIncorrect > 0) {
        weakItems.push(item);
      } else {
        stableItems.push(item);
      }
    }
  }

  // Target distribution: ~20% new, ~30% weak, ~40% due, remainder stable
  const queue: VocabularyItem[] = [];
  const seenIds = new Set<string>();

  const addUnique = (item: VocabularyItem) => {
    if (!seenIds.has(item.id) && queue.length < targetCount) {
      seenIds.add(item.id);
      queue.push(item);
    }
  };

  // 1. Due items first
  dueItems.forEach(addUnique);
  // 2. Weak items
  weakItems.forEach(addUnique);
  // 3. New items
  newItems.slice(0, Math.max(3, Math.floor(targetCount * 0.25))).forEach(addUnique);
  // 4. Fill remaining with stable or whatever is available
  stableItems.forEach(addUnique);
  newItems.forEach(addUnique);

  return {
    dueItems,
    weakItems,
    newItems,
    sessionQueue: queue,
  };
}
