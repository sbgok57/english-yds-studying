// Central feature flags configuration with safe fallback defaults

export interface FeatureFlags {
  levelTestV1: boolean;
  adaptivePlansV1: boolean;
  mistakeNotebookV1: boolean;
  aiCoachV1: boolean;
}

export const FEATURE_FLAGS: FeatureFlags = {
  levelTestV1: true,
  adaptivePlansV1: true,
  mistakeNotebookV1: true,
  aiCoachV1: true,
};

export function isFeatureEnabled(flag: keyof FeatureFlags): boolean {
  if (typeof window !== "undefined") {
    try {
      const override = window.localStorage.getItem(`ff_${flag}`);
      if (override === "true") return true;
      if (override === "false") return false;
    } catch {
      // SAFETY: storage read failover
    }
  }
  return FEATURE_FLAGS[flag] ?? false;
}
