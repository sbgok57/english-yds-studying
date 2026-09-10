export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'phrase'
  | 'phrasal_verb';

export type WordDifficulty = 'A2' | 'B1' | 'B2' | 'C1' | 'YDS';

export type LearningStage =
  | 'new'
  | 'familiar'
  | 'learning'
  | 'strong'
  | 'very_strong'
  | 'mastered';

/**
 * Immutable vocabulary dictionary entry.
 * Updating metadata must NEVER reset mutable learning progress.
 */
export interface VocabularyItem {
  id: string;
  word: string;
  meaningsTr: string[];
  partOfSpeech: PartOfSpeech;
  example: string;
  exampleTr?: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  visualMnemonic: string;
  pronunciation: string;
  difficulty: WordDifficulty;
  source: string;
}

/**
 * Mutable user learning state for a specific vocabulary word.
 * Keyed by vocabularyId.
 */
export interface LearningState {
  vocabularyId: string;
  mastery: number; // 0-100 clamped
  correctCount: number;
  incorrectCount: number;
  consecutiveCorrect: number;
  consecutiveIncorrect: number;
  easeFactor: number; // default 2.5
  intervalDays: number; // current review interval in days
  lastReviewedAt: string | null; // ISO timestamp
  nextReviewAt: string; // ISO timestamp
  learningStage: LearningStage;
}
