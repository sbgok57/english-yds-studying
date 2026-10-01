// Game Progress & Mastery Tracker
// Automatically records word mastery (correct/wrong) and awards gamified XP
import { recordWord, UsageData } from "@/lib/store";

export interface GameWordResultParams {
  update: (fn: (u: UsageData) => UsageData) => void;
  addXp?: (points: number, reason: string, sourceId?: string) => void;
  wordId?: number | string;
  word?: string;
  isCorrect: boolean;
  gameName: string;
  xpPoints?: number;
}

/**
 * Records a game word result into the user's mastery store and awards XP.
 */
export function recordGameWordResult({
  update,
  addXp,
  wordId,
  word,
  isCorrect,
  gameName,
  xpPoints = 10,
}: GameWordResultParams): void {
  // SAFETY: Null/undefined guard
  if (!update) return;

  const numericId = typeof wordId === "number" ? wordId : Number(wordId);
  if (!isNaN(numericId) && numericId > 0) {
    recordWord(update, numericId, isCorrect);
  }

  // Award XP if correct and addXp function is provided
  if (isCorrect && addXp) {
    const reason = `${gameName}: ${word ? `"${word}"` : "Doğru Yanıt"} (+${xpPoints} XP)`;
    const sourceId = `game-${gameName.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${numericId || Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    addXp(xpPoints, reason, sourceId);
  }
}
