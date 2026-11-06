import type { CefrLevel } from "../data-level-test";

export const CEFR_LEVEL_ORDER: readonly CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * The current level is taken from a completed diagnostic assessment. Until a
 * student completes it, only A1 learning material is opened.
 */
export function getHighestUnlockedCefrLevel(currentLevel: CefrLevel | null | undefined): CefrLevel {
  return currentLevel && CEFR_LEVEL_ORDER.includes(currentLevel) ? currentLevel : "A1";
}

export function isCefrLevelUnlocked(
  currentLevel: CefrLevel | null | undefined,
  requiredLevel: CefrLevel,
): boolean {
  return CEFR_LEVEL_ORDER.indexOf(requiredLevel) <= CEFR_LEVEL_ORDER.indexOf(getHighestUnlockedCefrLevel(currentLevel));
}

/** YDS-tagged academic words are treated as C1 material for progressive study. */
export function normalizeVocabularyLevel(level: string): CefrLevel | null {
  const normalized = level.trim().toUpperCase();
  if (CEFR_LEVEL_ORDER.includes(normalized as CefrLevel)) return normalized as CefrLevel;
  if (normalized === "YDS" || normalized === "YDT" || normalized === "YÖKDİL" || normalized === "YOKDIL") {
    return "C1";
  }
  return null;
}

export function isVocabularyLevelUnlocked(
  currentLevel: CefrLevel | null | undefined,
  contentLevel: string,
): boolean {
  const requiredLevel = normalizeVocabularyLevel(contentLevel);
  // Unknown legacy tags remain visible to avoid silently losing custom/imported words.
  return requiredLevel === null || isCefrLevelUnlocked(currentLevel, requiredLevel);
}

export function isGrammarLevelUnlocked(
  currentLevel: CefrLevel | null | undefined,
  contentLevel: CefrLevel | "YDS",
): boolean {
  return contentLevel === "YDS"
    ? getHighestUnlockedCefrLevel(currentLevel) === "C2"
    : isCefrLevelUnlocked(currentLevel, contentLevel);
}
