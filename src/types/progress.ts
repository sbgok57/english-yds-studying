export interface UserProgress {
  xp: number;
  level: number;
  dailyStreak: number;
  weeklyStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalStudyTimeMinutes: number;
  perfectSessions: number;
}

export type ItemType = 'vocabulary' | 'grammar' | 'yds';

export interface Attempt {
  id: string;
  itemId: string;
  itemType: ItemType;
  activityType: string;
  userAnswer: string;
  isCorrect: boolean;
  timestamp: string; // ISO
  responseTimeMs: number;
}

export type ErrorCategory =
  | 'meaning'
  | 'spelling'
  | 'pronunciation'
  | 'context'
  | 'synonym'
  | 'antonym'
  | 'collocation'
  | 'grammar_rule'
  | 'tense'
  | 'connector'
  | 'sentence_structure'
  | 'reading_comprehension';

export interface ErrorRecord {
  id: string;
  itemId: string;
  itemType: ItemType;
  title: string;
  targetWordOrRule: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  category: ErrorCategory;
  failedAt: string; // ISO
  reviewedCount: number;
  mastered: boolean;
  lastReviewedAt: string | null;
}

export type AchievementCategory =
  | 'streak'
  | 'vocabulary'
  | 'grammar'
  | 'yds'
  | 'mastery'
  | 'study_time';

export interface Achievement {
  id: string;
  title: string;
  titleTr: string;
  description: string;
  descriptionTr: string;
  icon: string;
  category: AchievementCategory;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  unlockedAt: string | null;
}

export interface DailyMission {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  titleTr: string;
  targetCount: number;
  completedCount: number;
  isCompleted: boolean;
  rewardXp: number;
}

export interface WeeklyMission {
  id: string;
  weekStart: string; // YYYY-MM-DD
  title: string;
  titleTr: string;
  targetCount: number;
  completedCount: number;
  isCompleted: boolean;
  rewardXp: number;
}

export type YdsTestType =
  | 'mini'
  | 'full'
  | 'module_practice'
  | 'grammar'
  | 'vocabulary'
  | 'cloze'
  | 'reading'
  | 'sentence_completion'
  | 'translation'
  | 'dialogue'
  | 'restatement'
  | 'paragraph_completion'
  | 'irrelevant_sentence';

export interface YdsQuestionDetail {
  questionId: string;
  questionNumber?: number;
  category: string;
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}

export interface YdsAttempt {
  id: string;
  examId?: string;
  examTitle?: string;
  testType: YdsTestType;
  score: number; // 0-100 scale
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  blankAnswers?: number;
  timeSpentSeconds?: number;
  sectionScores?: Record<string, { correct: number; total: number; percentage: number }>;
  flaggedQuestionIds?: string[];
  date: string; // ISO
  questionDetails: YdsQuestionDetail[];
}

export interface ImportRecord {
  id: string;
  source: 'csv' | 'quizlet' | 'system';
  date: string; // ISO
  count: number;
  duplicatesHandled: number;
  status: 'success' | 'partial' | 'failed';
  details?: string;
}
