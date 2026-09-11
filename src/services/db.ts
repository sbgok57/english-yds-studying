import {
  VocabularyItem,
  LearningState,
  UserProgress,
  StudySession,
  ErrorRecord,
  GrammarProgress,
  YdsAttempt,
  Achievement,
  DailyMission,
  AppSettings,
  DEFAULT_SETTINGS,
  VocabularySource,
} from '../types';

const DB_NAME = 'YdtYdsEnglishMasterDB';
const DB_VERSION = 2;

export const STORES = {
  VOCABULARY: 'vocabulary',
  VOCABULARY_SOURCES: 'vocabulary_sources',
  LEARNING_STATES: 'learning_states',
  ATTEMPTS: 'attempts',
  STUDY_SESSIONS: 'study_sessions',
  ERROR_RECORDS: 'error_records',
  GRAMMAR_PROGRESS: 'grammar_progress',
  YDS_ATTEMPTS: 'yds_attempts',
  USER_PROGRESS: 'user_progress',
  ACHIEVEMENTS: 'achievements',
  DAILY_MISSIONS: 'daily_missions',
  WEEKLY_MISSIONS: 'weekly_missions',
} as const;

// Safe In-Memory Fallback if IndexedDB fails or is unavailable
class FallbackStore {
  private memoryMap = new Map<string, Map<string, unknown>>();

  constructor() {
    Object.values(STORES).forEach((storeName) => {
      this.memoryMap.set(storeName, new Map());
    });
  }

  get<T>(storeName: string, key: string): T | undefined {
    return this.memoryMap.get(storeName)?.get(key) as T | undefined;
  }

  getAll<T>(storeName: string): T[] {
    const store = this.memoryMap.get(storeName);
    return store ? (Array.from(store.values()) as T[]) : [];
  }

  put<T extends { id?: string; vocabularyId?: string; topicId?: string; date?: string; weekStart?: string }>(
    storeName: string,
    value: T
  ): void {
    const store = this.memoryMap.get(storeName);
    if (!store) return;
    const key = value.id ?? value.vocabularyId ?? value.topicId ?? value.date ?? value.weekStart;
    if (key) {
      store.set(key, value);
    }
  }

  delete(storeName: string, key: string): void {
    this.memoryMap.get(storeName)?.delete(key);
  }

  clear(storeName: string): void {
    this.memoryMap.get(storeName)?.clear();
  }
}

class DatabaseService {
  private db: IDBDatabase | null = null;
  private isFallbackMode = false;
  private fallbackStore = new FallbackStore();
  private initPromise: Promise<void> | null = null;

  public async init(): Promise<void> {
    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = new Promise<void>((resolve) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        console.warn('IndexedDB not supported. Falling back to safe memory store.');
        this.isFallbackMode = true;
        resolve();
        return;
      }

      try {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
          console.warn('IndexedDB open error. Falling back to safe memory store.', event);
          this.isFallbackMode = true;
          resolve();
        };

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          if (!db.objectStoreNames.contains(STORES.VOCABULARY)) {
            db.createObjectStore(STORES.VOCABULARY, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.VOCABULARY_SOURCES)) {
            db.createObjectStore(STORES.VOCABULARY_SOURCES, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.LEARNING_STATES)) {
            db.createObjectStore(STORES.LEARNING_STATES, { keyPath: 'vocabularyId' });
          }
          if (!db.objectStoreNames.contains(STORES.ATTEMPTS)) {
            db.createObjectStore(STORES.ATTEMPTS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.STUDY_SESSIONS)) {
            db.createObjectStore(STORES.STUDY_SESSIONS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.ERROR_RECORDS)) {
            db.createObjectStore(STORES.ERROR_RECORDS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.GRAMMAR_PROGRESS)) {
            db.createObjectStore(STORES.GRAMMAR_PROGRESS, { keyPath: 'topicId' });
          }
          if (!db.objectStoreNames.contains(STORES.YDS_ATTEMPTS)) {
            db.createObjectStore(STORES.YDS_ATTEMPTS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.USER_PROGRESS)) {
            db.createObjectStore(STORES.USER_PROGRESS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.ACHIEVEMENTS)) {
            db.createObjectStore(STORES.ACHIEVEMENTS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORES.DAILY_MISSIONS)) {
            db.createObjectStore(STORES.DAILY_MISSIONS, { keyPath: 'date' });
          }
          if (!db.objectStoreNames.contains(STORES.WEEKLY_MISSIONS)) {
            db.createObjectStore(STORES.WEEKLY_MISSIONS, { keyPath: 'weekStart' });
          }
        };

        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result;
          resolve();
        };
      } catch (err) {
        console.warn('Exception during IndexedDB initialization:', err);
        this.isFallbackMode = true;
        resolve();
      }
    });

    return this.initPromise;
  }

  // Generic Transaction Handler
  private async getStore(
    storeName: string,
    mode: IDBTransactionMode = 'readonly'
  ): Promise<IDBObjectStore | null> {
    await this.init();
    if (this.isFallbackMode || !this.db) {
      return null;
    }
    try {
      const transaction = this.db.transaction(storeName, mode);
      return transaction.objectStore(storeName);
    } catch (err) {
      console.warn(`Failed to open store ${storeName}:`, err);
      return null;
    }
  }

  // --- Vocabulary Operations ---
  public async getAllVocabulary(): Promise<VocabularyItem[]> {
    const store = await this.getStore(STORES.VOCABULARY, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<VocabularyItem>(STORES.VOCABULARY);
    }

    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve(this.fallbackStore.getAll<VocabularyItem>(STORES.VOCABULARY));
    });
  }

  public async getVocabularyById(id: string): Promise<VocabularyItem | undefined> {
    const store = await this.getStore(STORES.VOCABULARY, 'readonly');
    if (!store) {
      return this.fallbackStore.get<VocabularyItem>(STORES.VOCABULARY, id);
    }

    return new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(this.fallbackStore.get<VocabularyItem>(STORES.VOCABULARY, id));
    });
  }

  public async saveVocabularyItem(item: VocabularyItem): Promise<void> {
    this.fallbackStore.put(STORES.VOCABULARY, item);
    const store = await this.getStore(STORES.VOCABULARY, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(item);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  public async saveVocabularyBatch(items: VocabularyItem[]): Promise<void> {
    items.forEach((item) => this.fallbackStore.put(STORES.VOCABULARY, item));
    const store = await this.getStore(STORES.VOCABULARY, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      items.forEach((item) => store.put(item));
      resolve();
    });
  }

  /**
   * Safely adds new seed vocabulary items into IndexedDB without overwriting
   * existing user-imported items or resetting mutable learning progress.
   */
  public async syncSeedVocabulary(seedItems: VocabularyItem[]): Promise<VocabularyItem[]> {
    const existing = await this.getAllVocabulary();
    if (existing.length === 0) {
      await this.saveVocabularyBatch(seedItems);
      return seedItems;
    }

    const existingMap = new Map<string, VocabularyItem>();
    existing.forEach((item) => {
      existingMap.set(item.word.trim().toLowerCase(), item);
      existingMap.set(item.id, item);
    });

    const newSeedsToInsert: VocabularyItem[] = [];
    seedItems.forEach((seed) => {
      const normWord = seed.word.trim().toLowerCase();
      if (!existingMap.has(normWord) && !existingMap.has(seed.id)) {
        newSeedsToInsert.push(seed);
        existingMap.set(normWord, seed);
        existingMap.set(seed.id, seed);
      }
    });

    if (newSeedsToInsert.length > 0) {
      await this.saveVocabularyBatch(newSeedsToInsert);
      return await this.getAllVocabulary();
    }

    return existing;
  }

  // --- Vocabulary Source Operations ---
  public async getAllSources(): Promise<VocabularySource[]> {
    const store = await this.getStore(STORES.VOCABULARY_SOURCES, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<VocabularySource>(STORES.VOCABULARY_SOURCES);
    }

    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve(this.fallbackStore.getAll<VocabularySource>(STORES.VOCABULARY_SOURCES));
    });
  }

  public async getSourceById(id: string): Promise<VocabularySource | undefined> {
    const store = await this.getStore(STORES.VOCABULARY_SOURCES, 'readonly');
    if (!store) {
      return this.fallbackStore.get<VocabularySource>(STORES.VOCABULARY_SOURCES, id);
    }

    return new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(this.fallbackStore.get<VocabularySource>(STORES.VOCABULARY_SOURCES, id));
    });
  }

  public async saveSource(source: VocabularySource): Promise<void> {
    this.fallbackStore.put(STORES.VOCABULARY_SOURCES, source);
    const store = await this.getStore(STORES.VOCABULARY_SOURCES, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(source);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  public async saveSourcesBatch(sources: VocabularySource[]): Promise<void> {
    sources.forEach((s) => this.fallbackStore.put(STORES.VOCABULARY_SOURCES, s));
    const store = await this.getStore(STORES.VOCABULARY_SOURCES, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      sources.forEach((s) => store.put(s));
      resolve();
    });
  }

  // --- Learning State Operations ---
  public async getLearningState(vocabularyId: string): Promise<LearningState | undefined> {
    const store = await this.getStore(STORES.LEARNING_STATES, 'readonly');
    if (!store) {
      return this.fallbackStore.get<LearningState>(STORES.LEARNING_STATES, vocabularyId);
    }

    return new Promise((resolve) => {
      const request = store.get(vocabularyId);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(this.fallbackStore.get<LearningState>(STORES.LEARNING_STATES, vocabularyId));
    });
  }

  public async getAllLearningStates(): Promise<LearningState[]> {
    const store = await this.getStore(STORES.LEARNING_STATES, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<LearningState>(STORES.LEARNING_STATES);
    }

    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve(this.fallbackStore.getAll<LearningState>(STORES.LEARNING_STATES));
    });
  }

  public async saveLearningState(state: LearningState): Promise<void> {
    this.fallbackStore.put(STORES.LEARNING_STATES, state);
    const store = await this.getStore(STORES.LEARNING_STATES, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(state);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- User Progress ---
  public async getUserProgress(): Promise<UserProgress> {
    const defaultProgress: UserProgress = {
      xp: 0,
      level: 1,
      dailyStreak: 0,
      weeklyStreak: 0,
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalStudyTimeMinutes: 0,
      perfectSessions: 0,
    };

    const store = await this.getStore(STORES.USER_PROGRESS, 'readonly');
    if (!store) {
      const cached = this.fallbackStore.get<UserProgress & { id: string }>(STORES.USER_PROGRESS, 'user_progress_singleton');
      return cached || defaultProgress;
    }

    return new Promise((resolve) => {
      const req = store.get('user_progress_singleton');
      req.onsuccess = () => resolve(req.result ? req.result : defaultProgress);
      req.onerror = () => resolve(defaultProgress);
    });
  }

  public async saveUserProgress(progress: UserProgress): Promise<void> {
    const payload = { ...progress, id: 'user_progress_singleton' };
    this.fallbackStore.put(STORES.USER_PROGRESS, payload);
    const store = await this.getStore(STORES.USER_PROGRESS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(payload);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- Study Sessions ---
  public async getAllSessions(): Promise<StudySession[]> {
    const store = await this.getStore(STORES.STUDY_SESSIONS, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<StudySession>(STORES.STUDY_SESSIONS);
    }

    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(this.fallbackStore.getAll<StudySession>(STORES.STUDY_SESSIONS));
    });
  }

  public async saveSession(session: StudySession): Promise<void> {
    this.fallbackStore.put(STORES.STUDY_SESSIONS, session);
    const store = await this.getStore(STORES.STUDY_SESSIONS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(session);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- Error Records (Error Notebook) ---
  public async getAllErrors(): Promise<ErrorRecord[]> {
    const store = await this.getStore(STORES.ERROR_RECORDS, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<ErrorRecord>(STORES.ERROR_RECORDS);
    }

    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(this.fallbackStore.getAll<ErrorRecord>(STORES.ERROR_RECORDS));
    });
  }

  public async saveError(error: ErrorRecord): Promise<void> {
    this.fallbackStore.put(STORES.ERROR_RECORDS, error);
    const store = await this.getStore(STORES.ERROR_RECORDS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(error);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  public async saveErrorRecord(error: ErrorRecord): Promise<void> {
    return this.saveError(error);
  }

  // --- Grammar Progress ---
  public async getAllGrammarProgress(): Promise<GrammarProgress[]> {
    const store = await this.getStore(STORES.GRAMMAR_PROGRESS, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<GrammarProgress>(STORES.GRAMMAR_PROGRESS);
    }

    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(this.fallbackStore.getAll<GrammarProgress>(STORES.GRAMMAR_PROGRESS));
    });
  }

  public async getGrammarProgress(topicId: string): Promise<GrammarProgress | undefined> {
    const store = await this.getStore(STORES.GRAMMAR_PROGRESS, 'readonly');
    if (!store) {
      return this.fallbackStore.get<GrammarProgress>(STORES.GRAMMAR_PROGRESS, topicId);
    }

    return new Promise((resolve) => {
      const req = store.get(topicId);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(this.fallbackStore.get<GrammarProgress>(STORES.GRAMMAR_PROGRESS, topicId));
    });
  }

  public async saveGrammarProgress(progress: GrammarProgress): Promise<void> {
    this.fallbackStore.put(STORES.GRAMMAR_PROGRESS, progress);
    const store = await this.getStore(STORES.GRAMMAR_PROGRESS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(progress);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- YDS Attempts ---
  public async getAllYdsAttempts(): Promise<YdsAttempt[]> {
    const store = await this.getStore(STORES.YDS_ATTEMPTS, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<YdsAttempt>(STORES.YDS_ATTEMPTS);
    }

    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(this.fallbackStore.getAll<YdsAttempt>(STORES.YDS_ATTEMPTS));
    });
  }

  public async saveYdsAttempt(attempt: YdsAttempt): Promise<void> {
    this.fallbackStore.put(STORES.YDS_ATTEMPTS, attempt);
    const store = await this.getStore(STORES.YDS_ATTEMPTS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(attempt);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- Achievements ---
  public async getAllAchievements(): Promise<Achievement[]> {
    const store = await this.getStore(STORES.ACHIEVEMENTS, 'readonly');
    if (!store) {
      return this.fallbackStore.getAll<Achievement>(STORES.ACHIEVEMENTS);
    }

    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(this.fallbackStore.getAll<Achievement>(STORES.ACHIEVEMENTS));
    });
  }

  public async saveAchievement(achievement: Achievement): Promise<void> {
    this.fallbackStore.put(STORES.ACHIEVEMENTS, achievement);
    const store = await this.getStore(STORES.ACHIEVEMENTS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(achievement);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }

  // --- Daily Mission ---
  public async getDailyMission(date: string): Promise<DailyMission | undefined> {
    const store = await this.getStore(STORES.DAILY_MISSIONS, 'readonly');
    if (!store) {
      return this.fallbackStore.get<DailyMission>(STORES.DAILY_MISSIONS, date);
    }

    return new Promise((resolve) => {
      const req = store.get(date);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(this.fallbackStore.get<DailyMission>(STORES.DAILY_MISSIONS, date));
    });
  }

  public async saveDailyMission(mission: DailyMission): Promise<void> {
    this.fallbackStore.put(STORES.DAILY_MISSIONS, mission);
    const store = await this.getStore(STORES.DAILY_MISSIONS, 'readwrite');
    if (!store) return;

    return new Promise((resolve) => {
      const req = store.put(mission);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  }
}

export const dbService = new DatabaseService();

// LocalStorage Settings Storage with Safe Fallback
const SETTINGS_KEY = 'ydt_yds_app_settings';
let memorySettingsFallback: AppSettings = DEFAULT_SETTINGS;

export const storageService = {
  getSettings(): AppSettings {
    if (typeof window === 'undefined' || !window.localStorage) {
      return memorySettingsFallback;
    }
    try {
      const raw = window.localStorage.getItem(SETTINGS_KEY);
      if (!raw) return DEFAULT_SETTINGS;
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
      };
    } catch (e) {
      console.warn('Failed to parse settings from localStorage:', e);
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: AppSettings): void {
    memorySettingsFallback = settings;
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings to localStorage:', e);
    }
  },
};
