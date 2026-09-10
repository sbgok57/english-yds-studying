import { WordRepetitionState, UserProgressState } from '../types/spacedRepetition';

const PROGRESS_KEY = 'yds_user_progress_v1';
const WORDS_STATE_KEY = 'yds_words_repetition_v1';
const ERRORS_KEY = 'yds_error_notebook_v1';

export interface RecordedError {
  id: string;
  itemType: 'vocabulary' | 'grammar' | 'yds_question';
  title: string;
  userAnswer: string;
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
  timestamp: number;
  resolved: boolean;
  category: string;
}

const DEFAULT_PROGRESS: UserProgressState = {
  xp: 150,
  level: 1,
  streakDays: 3,
  lastStudyDate: new Date().toISOString().split('T')[0],
  weeklyStreak: [true, true, true, false, false, false, false],
  totalStudyTimeMinutes: 45,
  wordsStudiedCount: 24,
  grammarTopicsCompleted: [],
  ydsMockScores: [],
  soundEnabled: true,
  speechVolume: 0.85,
  theme: 'dark'
};

export class StorageService {
  public static getProgress(): UserProgressState {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      if (data) return { ...DEFAULT_PROGRESS, ...JSON.parse(data) };
    } catch (e) {
      console.warn('Storage read error:', e);
    }
    return { ...DEFAULT_PROGRESS };
  }

  public static saveProgress(progress: Partial<UserProgressState>): void {
    try {
      const current = this.getProgress();
      const merged = { ...current, ...progress };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(merged));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  public static addXp(amount: number): UserProgressState {
    const prog = this.getProgress();
    const newXp = prog.xp + amount;
    const newLevel = Math.floor(newXp / 500) + 1;
    const updated = { ...prog, xp: newXp, level: newLevel };
    this.saveProgress(updated);
    return updated;
  }

  public static getWordStates(): Record<string, WordRepetitionState> {
    try {
      const data = localStorage.getItem(WORDS_STATE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Word states read error:', e);
    }
    return {};
  }

  public static saveWordState(state: WordRepetitionState): void {
    try {
      const all = this.getWordStates();
      all[state.wordId] = state;
      localStorage.setItem(WORDS_STATE_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('Word states write error:', e);
    }
  }

  public static getErrors(): RecordedError[] {
    try {
      const data = localStorage.getItem(ERRORS_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Errors read error:', e);
    }
    return [];
  }

  public static recordError(error: Omit<RecordedError, 'id' | 'timestamp' | 'resolved'>): void {
    try {
      const errors = this.getErrors();
      const newEntry: RecordedError = {
        ...error,
        id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        timestamp: Date.now(),
        resolved: false
      };
      // Keep recent 200 errors
      const updated = [newEntry, ...errors.slice(0, 199)];
      localStorage.setItem(ERRORS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Errors write error:', e);
    }
  }

  public static resolveError(errorId: string): void {
    try {
      const errors = this.getErrors();
      const updated = errors.map(e => e.id === errorId ? { ...e, resolved: true } : e);
      localStorage.setItem(ERRORS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Errors write error:', e);
    }
  }

  public static exportAllData(): string {
    return JSON.stringify({
      progress: this.getProgress(),
      wordStates: this.getWordStates(),
      errors: this.getErrors(),
      exportedAt: new Date().toISOString()
    }, null, 2);
  }

  public static importData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.progress) localStorage.setItem(PROGRESS_KEY, JSON.stringify(parsed.progress));
      if (parsed.wordStates) localStorage.setItem(WORDS_STATE_KEY, JSON.stringify(parsed.wordStates));
      if (parsed.errors) localStorage.setItem(ERRORS_KEY, JSON.stringify(parsed.errors));
      return true;
    } catch (e) {
      console.error('Failed to import user data:', e);
      return false;
    }
  }
}
