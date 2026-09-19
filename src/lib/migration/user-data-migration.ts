import { UsageDataSchema, ValidatedUsageData, safeValidate } from "../validation/schemas";

export interface DataMigration {
  fromVersion: number;
  toVersion: number;
  migrate: (input: any) => any;
}

export const CURRENT_DATA_VERSION = 2;

// Migration 0 -> 1: Add versioning, point structures, level test history
const migrationV0ToV1: DataMigration = {
  fromVersion: 0,
  toVersion: 1,
  migrate: (oldData: any) => {
    const raw = typeof oldData === "object" && oldData !== null ? oldData : {};
    return {
      ...raw,
      version: 1,
      words: raw.words || {},
      exams: raw.exams || { taken: 0, bestNet: 0, history: [] },
      points: raw.points || { total: 0, awardedSourceKeys: {} },
      badges: raw.badges || { earned: {}, unlockedAt: {} },
      levelTest: raw.levelTest || { history: [], lastAssessment: null },
      activePlan: raw.activePlan || null,
      completedTasks: raw.completedTasks || {},
      avatar: raw.avatar ?? null,
      customAvatar: raw.customAvatar ?? null,
      username: raw.username ?? null,
      lastUpdated: raw.lastUpdated || Date.now(),
    };
  },
};

// Migration 1 -> 2: Add mistake notebook & adaptive planning fields
const migrationV1ToV2: DataMigration = {
  fromVersion: 1,
  toVersion: 2,
  migrate: (v1Data: any) => {
    return {
      ...v1Data,
      version: 2,
      mistakeNotebook: Array.isArray(v1Data.mistakeNotebook) ? v1Data.mistakeNotebook : [],
    };
  },
};

const MIGRATIONS: DataMigration[] = [migrationV0ToV1, migrationV1ToV2];

/**
 * Executes ordered migrations on user progress data safely.
 * Never throws; guarantees a valid ValidatedUsageData object.
 */
export function migrateUserData(rawInput: unknown): ValidatedUsageData {
  if (!rawInput || typeof rawInput !== "object") {
    return UsageDataSchema.parse({ version: CURRENT_DATA_VERSION });
  }

  let currentData: any = { ...rawInput };
  let currentVersion = typeof currentData.version === "number" ? currentData.version : 0;

  // Run sequential migrations
  for (const m of MIGRATIONS) {
    if (currentVersion === m.fromVersion) {
      try {
        currentData = m.migrate(currentData);
        currentVersion = m.toVersion;
        currentData.version = currentVersion;
      } catch (migrationErr) {
        console.warn(`[DATA_MIGRATION_WARN] Failed migrating v${m.fromVersion} -> v${m.toVersion}:`, migrationErr);
        break;
      }
    }
  }

  // Final schema validation & safe normalization
  const defaultState: ValidatedUsageData = {
    version: CURRENT_DATA_VERSION,
    words: {},
    exams: { taken: 0, bestNet: 0, history: [] },
    points: { total: 0, awardedSourceKeys: {} },
    badges: { earned: {}, unlockedAt: {} },
    levelTest: { history: [], lastAssessment: null },
    activePlan: null,
    completedTasks: {},
    avatar: null,
    customAvatar: null,
    username: null,
    mistakeNotebook: [],
    lastUpdated: Date.now(),
  };

  const validation = safeValidate(UsageDataSchema, currentData, defaultState);
  return validation.data;
}
