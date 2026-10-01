// Comprehensive Master Vocabulary Database (2,500 items)
// Graded across CEFR A1, A2, B1, B2, C1, C2 for personalized YDS/YDT prep.

import { CefrLevel, MasterVocabWord } from "./types";
import { A1_WORDS } from "./levels/a1";
import { A2_WORDS } from "./levels/a2";
import { B1_WORDS } from "./levels/b1";
import { B2_WORDS } from "./levels/b2";
import { C1_WORDS } from "./levels/c1";
import { C2_WORDS } from "./levels/c2";

export { A1_WORDS, A2_WORDS, B1_WORDS, B2_WORDS, C1_WORDS, C2_WORDS };

// Total 2,500 Master Vocabulary
export const MASTER_VOCABULARY: MasterVocabWord[] = [
  ...A1_WORDS,
  ...A2_WORDS,
  ...B1_WORDS,
  ...B2_WORDS,
  ...C1_WORDS,
  ...C2_WORDS,
];

export const TOTAL_VOCAB_COUNT = MASTER_VOCABULARY.length;

export const VOCAB_COUNTS_BY_LEVEL: Record<CefrLevel, number> = {
  A1: A1_WORDS.length,
  A2: A2_WORDS.length,
  B1: B1_WORDS.length,
  B2: B2_WORDS.length,
  C1: C1_WORDS.length,
  C2: C2_WORDS.length,
};

// Helper: Get words by CEFR level
export function getMasterWordsByLevel(level: CefrLevel): MasterVocabWord[] {
  switch (level) {
    case "A1":
      return A1_WORDS;
    case "A2":
      return A2_WORDS;
    case "B1":
      return B1_WORDS;
    case "B2":
      return B2_WORDS;
    case "C1":
      return C1_WORDS;
    case "C2":
      return C2_WORDS;
    default:
      return MASTER_VOCABULARY;
  }
}

// Helper: Get personalized starter words for a given level
export function getStarterWordsForLevel(level: CefrLevel, count = 20): MasterVocabWord[] {
  const levelWords = getMasterWordsByLevel(level);
  return levelWords.slice(0, count);
}

// Helper: Search words across the master vocabulary
export function searchMasterWords(query: string, level?: CefrLevel): MasterVocabWord[] {
  const q = query.trim().toLowerCase();
  const pool = level ? getMasterWordsByLevel(level) : MASTER_VOCABULARY;
  if (!q) return pool;
  return pool.filter(
    (w) =>
      w.word.toLowerCase().includes(q) ||
      w.tr.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.synonyms.some((s) => s.toLowerCase().includes(q))
  );
}

// Helper: Get word by ID
export function getMasterWordById(id: number): MasterVocabWord | undefined {
  return MASTER_VOCABULARY.find((w) => w.id === id);
}
