export type LearningStage = 
  | 'new'            // 0-19
  | 'familiar'       // 20-39
  | 'learning'       // 40-59
  | 'strong'         // 60-79
  | 'very_strong'    // 80-94
  | 'mastered';      // 95-100

export interface WordRepetitionState {
  wordId: string;
  masteryScore: number; // 0 to 100
  learningStage: LearningStage;
  correctCount: number;
  incorrectCount: number;
  consecutiveCorrect: number;
  consecutiveIncorrect: number;
  easeFactor: number; // starts at 2.5 (SM-2)
  intervalDays: number; // 0, 1, 3, 7, 14, 30...
  lastReviewedAt: number | null;
  nextReviewAt: number;
  history: {
    timestamp: number;
    wasCorrect: boolean;
    durationMs?: number;
    activityType?: string;
  }[];
}

export interface UserProgressState {
  xp: number;
  level: number;
  streakDays: number;
  lastStudyDate: string; // YYYY-MM-DD
  weeklyStreak: boolean[]; // 7 days of current week
  totalStudyTimeMinutes: number;
  wordsStudiedCount: number;
  grammarTopicsCompleted: string[];
  ydsMockScores: { date: string; score: number; total: number }[];
  soundEnabled: boolean;
  speechVolume: number;
  theme: 'dark' | 'light';
}
