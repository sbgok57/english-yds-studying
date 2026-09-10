export type SessionMode =
  | 'daily_mission'
  | 'quick_review'
  | 'standard'
  | 'deep_practice'
  | 'grammar'
  | 'yds'
  | 'weak_words';

export interface StudySession {
  id: string;
  startTime: string; // ISO
  endTime: string | null; // ISO
  mode: SessionMode;
  totalItems: number;
  completedItems: number;
  correctCount: number;
  incorrectCount: number;
  xpEarned: number;
  durationSeconds: number;
}
