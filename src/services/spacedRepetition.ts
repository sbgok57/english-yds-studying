import { LearningStage, WordRepetitionState } from '../types/spacedRepetition';

const INTERVAL_LADDER_DAYS = [1, 3, 7, 14, 30, 60, 120];

export class SpacedRepetitionService {
  public static calculateInitialState(wordId: string): WordRepetitionState {
    return {
      wordId,
      masteryScore: 0,
      learningStage: 'new',
      correctCount: 0,
      incorrectCount: 0,
      consecutiveCorrect: 0,
      consecutiveIncorrect: 0,
      easeFactor: 2.5,
      intervalDays: 0,
      lastReviewedAt: null,
      nextReviewAt: Date.now(),
      history: []
    };
  }

  public static recordReview(
    currentState: WordRepetitionState,
    wasCorrect: boolean,
    durationMs?: number,
    activityType?: string
  ): WordRepetitionState {
    const now = Date.now();
    const updated: WordRepetitionState = {
      ...currentState,
      lastReviewedAt: now,
      history: [
        ...currentState.history,
        { timestamp: now, wasCorrect, durationMs, activityType }
      ]
    };

    if (wasCorrect) {
      updated.correctCount += 1;
      updated.consecutiveCorrect += 1;
      updated.consecutiveIncorrect = 0;

      // Adjust ease factor (SM-2 standard adjustment)
      updated.easeFactor = Math.max(1.3, updated.easeFactor + 0.1);

      // Advance interval
      const stepIndex = Math.min(updated.consecutiveCorrect - 1, INTERVAL_LADDER_DAYS.length - 1);
      updated.intervalDays = INTERVAL_LADDER_DAYS[stepIndex];

      // Update mastery score
      // Increments dynamically up to 100 based on consecutive retrievals
      const scoreGain = Math.round(15 * (updated.easeFactor / 2.5));
      updated.masteryScore = Math.min(100, updated.masteryScore + scoreGain);
    } else {
      updated.incorrectCount += 1;
      updated.consecutiveIncorrect += 1;
      updated.consecutiveCorrect = 0;

      // Penalize ease factor slightly
      updated.easeFactor = Math.max(1.3, updated.easeFactor - 0.2);

      // Reset interval to immediate 1-day or same-day review
      updated.intervalDays = 1;

      // Reduce mastery score
      updated.masteryScore = Math.max(0, updated.masteryScore - 20);
    }

    // Determine Stage
    updated.learningStage = this.getLearningStage(updated.masteryScore);

    // Calculate next review timestamp
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    updated.nextReviewAt = now + (updated.intervalDays * millisecondsInDay);

    return updated;
  }

  public static getLearningStage(score: number): LearningStage {
    if (score < 20) return 'new';
    if (score < 40) return 'familiar';
    if (score < 60) return 'learning';
    if (score < 80) return 'strong';
    if (score < 95) return 'very_strong';
    return 'mastered';
  }

  public static getStageLabelTr(stage: LearningStage): string {
    switch (stage) {
      case 'new': return 'Yeni Başlanan (0-19)';
      case 'familiar': return 'Aşina Olunan (20-39)';
      case 'learning': return 'Öğrenilmekte (40-59)';
      case 'strong': return 'Güçlü Hafıza (60-79)';
      case 'very_strong': return 'Çok Güçlü (80-94)';
      case 'mastered': return 'Şimdilik Ustalaşıldı (95-100)';
    }
  }

  public static isDueForReview(state: WordRepetitionState): boolean {
    return Date.now() >= state.nextReviewAt;
  }
}
