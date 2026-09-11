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

export type WordLevel = 1 | 2 | 3 | 4 | 5;

export interface WordLevelInfo {
  level: WordLevel;
  nameTr: string;
  badge: string;
  descriptionTr: string;
  colorClass: string;
}

export const WORD_LEVEL_CONFIG: Record<WordLevel, WordLevelInfo> = {
  1: {
    level: 1,
    nameTr: 'TEMEL (A1-A2)',
    badge: 'Seviye 1: Temel',
    descriptionTr: 'Olmazsa olmaz temel kelimeler',
    colorClass: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
  },
  2: {
    level: 2,
    nameTr: 'ORTA (B1)',
    badge: 'Seviye 2: Orta',
    descriptionTr: 'Sık kullanılan bağlaçlar, yaygın fiiller',
    colorClass: 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800',
  },
  3: {
    level: 3,
    nameTr: 'ORTA-İLERİ (B2)',
    badge: 'Seviye 3: Orta-İleri',
    descriptionTr: 'Akademik metinlerde sık geçenler',
    colorClass: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
  },
  4: {
    level: 4,
    nameTr: 'İLERİ (C1)',
    badge: 'Seviye 4: İleri',
    descriptionTr: 'YDS/YDT belirleyici akademik kelimeler',
    colorClass: 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800',
  },
  5: {
    level: 5,
    nameTr: 'YDS/YDT KRİTİK (C2)',
    badge: 'Seviye 5: YDS Kritik',
    descriptionTr: 'Sınavda en sık sorulan, çeldiricisi bol kritik kelimeler',
    colorClass: 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800',
  },
};

export type WordImportance = 'must_know' | 'high_priority' | 'important' | 'normal';

export interface WordImportanceInfo {
  id: WordImportance;
  labelTr: string;
  badgeText: string;
  dotColor: string;
  badgeClass: string;
}

export const WORD_IMPORTANCE_CONFIG: Record<WordImportance, WordImportanceInfo> = {
  must_know: {
    id: 'must_know',
    labelTr: 'MUST KNOW (Sınavda Kesin Çıkar)',
    badgeText: '🔴 MUST KNOW',
    dotColor: '#ef4444',
    badgeClass: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800',
  },
  high_priority: {
    id: 'high_priority',
    labelTr: 'HIGH PRIORITY (Çok Sık Çıkar)',
    badgeText: '🟠 HIGH PRIORITY',
    dotColor: '#f97316',
    badgeClass: 'bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-800',
  },
  important: {
    id: 'important',
    labelTr: 'IMPORTANT (Metinlerde ve Şıklarda Geçer)',
    badgeText: '🟡 IMPORTANT',
    dotColor: '#eab308',
    badgeClass: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800',
  },
  normal: {
    id: 'normal',
    labelTr: 'NORMAL (Genel Kelime Dağarcığı)',
    badgeText: '⚪ NORMAL',
    dotColor: '#94a3b8',
    badgeClass: 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700',
  },
};

export type WordLearningStatus = 'new' | 'learning' | 'review_needed' | 'learned' | 'mastered';

export interface WordLearningStatusInfo {
  id: WordLearningStatus;
  labelTr: string;
  colorClass: string;
}

export const WORD_LEARNING_STATUS_CONFIG: Record<WordLearningStatus, WordLearningStatusInfo> = {
  new: {
    id: 'new',
    labelTr: 'Yeni',
    colorClass: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
  },
  learning: {
    id: 'learning',
    labelTr: 'Öğreniliyor',
    colorClass: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300',
  },
  review_needed: {
    id: 'review_needed',
    labelTr: 'Tekrar Gerekiyor',
    colorClass: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  },
  learned: {
    id: 'learned',
    labelTr: 'Öğrenildi',
    colorClass: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300',
  },
  mastered: {
    id: 'mastered',
    labelTr: 'Ustalaşıldı',
    colorClass: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
  },
};

export interface WordFamily {
  verb?: string;
  noun?: string;
  adjective?: string;
  adverb?: string;
}

export interface YdsTrap {
  confusingWord: string;
  differenceTr: string;
  examTrapTip: string;
}

export interface MediaContext {
  sceneQuote: string;
  sourceTitle: string;
  explanationTr: string;
}

export interface LogicMnemonic {
  breakdown: string;
  logicConnection: string;
  mentalImage: string;
}

export interface SourceReference {
  sourceId: string;
  sourceType: 'quizlet' | 'pdf' | 'csv' | 'manual' | 'seed';
  sourceUrl?: string;
  fileName?: string;
  sourceName?: string;
  folderName?: string;
  setName?: string;
  sourcePage?: number;
  sourceText?: string;
  rawSourceText?: string;
  sourceTermIndex?: number;
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
  displayWord?: string;
  sourceText?: string;
  rawSourceText?: string;
  canonicalWord?: string;
  meaningsTr: string[];
  partOfSpeech: PartOfSpeech;
  example: string;
  exampleTr?: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  visualMnemonic: string;
  visualConcept?: string;
  visualPrompt?: string;
  visualSearchQuery?: string;
  visualStyle?: 'photo' | 'cartoon' | 'illustration' | 'visual-mnemonic' | 'scientific-photo';
  visualImage?: string;
  imageUrl?: string;
  imageSource?: string;
  altText?: string;
  memoryTip?: { en: string; tr: string };
  pronunciation: string;
  difficulty: WordDifficulty;
  source: string;
  sourceRefs?: SourceReference[];
  missingFields?: string[];
  requiresManualReview?: boolean;
  rawOCRText?: string;
  ocrConfidence?: number;
  boundingBox?: { x: number; y: number; width: number; height: number };
  reviewStatus?: 'pending' | 'approved' | 'rejected';
  verifiedYDSOccurrence?: boolean;

  // New pedagogical extensions
  level?: WordLevel;
  importance?: WordImportance;
  wordFamily?: WordFamily;
  ydsTrap?: YdsTrap;
  mediaContext?: MediaContext;
  logicMnemonic?: LogicMnemonic;
  ydsNote?: string;
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

  // New mutable learning fields
  status?: WordLearningStatus;
  favorite?: boolean;
  lastResponse?: 'know' | 'unsure' | 'forgot';
  errorRate?: number;
}
