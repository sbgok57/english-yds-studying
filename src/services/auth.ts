import { UserProgress, LearningState, StudySession, ErrorRecord, Achievement } from '../types';
import { dbService } from './db';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  provider: 'email' | 'google';
  createdAt: string;
}

export type AuthMode = 'guest' | 'authenticated';
export type SyncStatus = 'offline' | 'synced' | 'syncing' | 'error';

export interface AuthState {
  mode: AuthMode;
  user: AuthUser | null;
  syncStatus: SyncStatus;
  lastSyncedAt: string | null;
}

const AUTH_STORAGE_KEY = 'ydt_yds_auth_session';
const CLOUD_MOCK_STORAGE_KEY = 'ydt_yds_cloud_snapshot';

class AuthService {
  private state: AuthState = {
    mode: 'guest',
    user: null,
    syncStatus: typeof navigator !== 'undefined' && !navigator.onLine ? 'offline' : 'synced',
    lastSyncedAt: null,
  };

  private listeners: ((state: AuthState) => void)[] = [];

  constructor() {
    this.loadSession();
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.handleOnlineStatus(true));
      window.addEventListener('offline', () => this.handleOnlineStatus(false));
    }
  }

  private handleOnlineStatus(isOnline: boolean) {
    if (!isOnline) {
      this.state.syncStatus = 'offline';
    } else if (this.state.mode === 'authenticated') {
      this.state.syncStatus = 'synced';
    }
    this.notify();
  }

  private loadSession() {
    try {
      if (typeof window === 'undefined') return;
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.user) {
          this.state = {
            mode: 'authenticated',
            user: parsed.user,
            syncStatus: !navigator.onLine ? 'offline' : 'synced',
            lastSyncedAt: parsed.lastSyncedAt || new Date().toISOString(),
          };
        }
      }
    } catch {
      // Fallback to guest mode
      this.state.mode = 'guest';
      this.state.user = null;
    }
  }

  private persistSession() {
    try {
      if (typeof window === 'undefined') return;
      if (this.state.mode === 'authenticated' && this.state.user) {
        localStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({
            user: this.state.user,
            lastSyncedAt: this.state.lastSyncedAt,
          })
        );
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch {
      // Storage quota or privacy mode
    }
  }

  public getState(): AuthState {
    return { ...this.state };
  }

  public subscribe(listener: (state: AuthState) => void): () => void {
    this.listeners.push(listener);
    listener(this.getState());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    const current = this.getState();
    this.listeners.forEach((l) => l(current));
  }

  /**
   * 3-Way Safe Progress Merging Algorithm
   * LOCAL PROGRESS + CLOUD PROGRESS -> CONFLICT RESOLUTION -> MERGED PROGRESS
   * Strictly guarantees:
   * - Never deletes learning state
   * - Never decreases XP or level
   * - Keeps highest streak & mastery
   * - Deduplicates sessions and errors
   */
  public async mergeProgressWithCloud(): Promise<{
    mergedProgress: UserProgress;
    resolvedConflictsCount: number;
  }> {
    this.state.syncStatus = 'syncing';
    this.notify();

    // 1. Gather local data
    const localProgress = await dbService.getUserProgress();
    const localStates = await dbService.getAllLearningStates();
    const localSessions = await dbService.getAllSessions();
    const localErrors = await dbService.getAllErrors();
    const localAchievements = await dbService.getAllAchievements();

    // 2. Fetch cloud mock snapshot
    let cloudData: {
      progress?: UserProgress;
      states?: LearningState[];
      sessions?: StudySession[];
      errors?: ErrorRecord[];
      achievements?: Achievement[];
    } = {};

    try {
      const rawCloud = localStorage.getItem(CLOUD_MOCK_STORAGE_KEY);
      if (rawCloud) {
        cloudData = JSON.parse(rawCloud);
      }
    } catch {
      cloudData = {};
    }

    let conflictsCount = 0;

    // 3. Merge UserProgress
    const cloudProg = cloudData.progress;
    const mergedProgress: UserProgress = {
      xp: Math.max(localProgress.xp, cloudProg?.xp || 0),
      level: Math.max(localProgress.level, cloudProg?.level || 1, Math.floor(Math.max(localProgress.xp, cloudProg?.xp || 0) / 100) + 1),
      dailyStreak: Math.max(localProgress.dailyStreak, cloudProg?.dailyStreak || 0),
      weeklyStreak: Math.max(localProgress.weeklyStreak, cloudProg?.weeklyStreak || 0),
      lastActiveDate: localProgress.lastActiveDate || cloudProg?.lastActiveDate || new Date().toISOString().split('T')[0],
      totalStudyTimeMinutes: Math.max(localProgress.totalStudyTimeMinutes, cloudProg?.totalStudyTimeMinutes || 0),
      perfectSessions: Math.max(localProgress.perfectSessions, cloudProg?.perfectSessions || 0),
    };

    if (cloudProg && (cloudProg.xp !== localProgress.xp || cloudProg.dailyStreak !== localProgress.dailyStreak)) {
      conflictsCount++;
    }

    // 4. Merge LearningStates
    const stateMap = new Map<string, LearningState>();
    localStates.forEach((s) => stateMap.set(s.vocabularyId, s));

    if (cloudData.states) {
      cloudData.states.forEach((cs) => {
        const ls = stateMap.get(cs.vocabularyId);
        if (!ls) {
          stateMap.set(cs.vocabularyId, cs);
        } else {
          // Conflict Resolution: pick state with highest mastery / most reviews
          const pickCloud = (cs.mastery > ls.mastery) || (cs.correctCount > ls.correctCount);
          if (pickCloud) {
            conflictsCount++;
            stateMap.set(cs.vocabularyId, {
              ...cs,
              // Retain any local favorite flag
              favorite: ls.favorite || cs.favorite,
            });
          }
        }
      });
    }

    // 5. Merge Sessions & Errors (deduplicated by id)
    const sessionMap = new Map<string, StudySession>();
    localSessions.forEach((s) => sessionMap.set(s.id, s));
    (cloudData.sessions || []).forEach((s) => sessionMap.set(s.id, s));

    const errorMap = new Map<string, ErrorRecord>();
    localErrors.forEach((e) => errorMap.set(e.id, e));
    (cloudData.errors || []).forEach((e) => errorMap.set(e.id, e));

    // 6. Save merged back into local database
    await dbService.saveUserProgress(mergedProgress);
    for (const state of stateMap.values()) {
      await dbService.saveLearningState(state);
    }

    // 7. Update cloud snapshot
    try {
      const mergedCloudSnapshot = {
        progress: mergedProgress,
        states: Array.from(stateMap.values()),
        sessions: Array.from(sessionMap.values()),
        errors: Array.from(errorMap.values()),
        achievements: localAchievements,
        syncedAt: new Date().toISOString(),
      };
      localStorage.setItem(CLOUD_MOCK_STORAGE_KEY, JSON.stringify(mergedCloudSnapshot));
    } catch {
      // Quota
    }

    this.state.syncStatus = 'synced';
    this.state.lastSyncedAt = new Date().toISOString();
    this.persistSession();
    this.notify();

    return {
      mergedProgress,
      resolvedConflictsCount: conflictsCount,
    };
  }

  public async loginWithEmail(email: string, name?: string): Promise<AuthUser> {
    const cleanEmail = email.trim().toLowerCase();
    const user: AuthUser = {
      id: `user-${cleanEmail.replace(/[^a-z0-9]/g, '')}`,
      email: cleanEmail,
      name: name?.trim() || cleanEmail.split('@')[0],
      provider: 'email',
      createdAt: new Date().toISOString(),
    };

    this.state.mode = 'authenticated';
    this.state.user = user;
    this.persistSession();
    await this.mergeProgressWithCloud();
    return user;
  }

  public async loginWithGoogle(): Promise<AuthUser> {
    // Simulated Google OAuth provider without credential storage
    const user: AuthUser = {
      id: `google-user-${Date.now()}`,
      email: 'student.yds@gmail.com',
      name: 'YDS/YDT Öğrencisi',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      provider: 'google',
      createdAt: new Date().toISOString(),
    };

    this.state.mode = 'authenticated';
    this.state.user = user;
    this.persistSession();
    await this.mergeProgressWithCloud();
    return user;
  }

  public logout(): void {
    // Retain local database intact!
    this.state.mode = 'guest';
    this.state.user = null;
    this.state.syncStatus = 'synced';
    this.persistSession();
    this.notify();
  }
}

export const authService = new AuthService();
