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

export interface SourceReference {
  sourceId: string;
  sourceType: 'quizlet' | 'pdf' | 'csv' | 'manual' | 'seed';
  sourceUrl?: string;
  fileName?: string;
  folderName?: string;
  setName?: string;
  sourcePage?: number;
  importedAt: string;
}

export interface VocabularySource {
  id: string;
  type: 'quizlet-folder' | 'quizlet-set' | 'pdf' | 'csv' | 'manual';
  url?: string;
  fileName?: string;
  title: string;
  status: 'not_scanned' | 'scanning' | 'completed' | 'partially_completed' | 'failed' | 'access_failed';
  lastImportedAt?: string;
  discoveredSetCount: number;
  processedSetCount: number;
  failedSetCount: number;
  importedItemCount: number;
  duplicateCount: number;
  incompleteCount: number;
  manualReviewCount: number;
  errorMessage?: string;
}

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
  sourceRefs?: SourceReference[];
  missingFields?: string[];
  requiresManualReview?: boolean;
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
