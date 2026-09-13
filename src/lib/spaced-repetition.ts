export interface CardState {
  easeFactor: number; // default 2.5, min 1.3
  interval: number;   // days until next review
  repetitions: number;
  nextReview: Date;
}

/**
 * SuperMemo SM-2 Spaced Repetition Algorithm
 * @param quality 0 (tamamen bilinmedi) to 5 (mükemmel hatırlandı)
 * @param prev önceki kart durumu
 */
export function calculateSM2(quality: number, prev?: Partial<CardState>): CardState {
  let easeFactor = prev?.easeFactor ?? 2.5;
  let interval = prev?.interval ?? 1;
  let repetitions = prev?.repetitions ?? 0;

  // Kalite 3'ten küçükse tekrar sıfırlanır
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Ease factor güncelleme formülü: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    repetitions,
    nextReview,
  };
}
