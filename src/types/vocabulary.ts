export interface VocabularyItem {
  id: string;
  word: string;
  meaningsTr: string[];
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'phrase';
  definitionEn: string;
  example: string;
  exampleTr: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  relatedWords: string[];
  pronunciation?: string;
  visualMnemonic: {
    description: string;
    clue: string;
    iconName?: string;
    badgeCategory?: string;
  };
  difficulty: 'A2' | 'B1' | 'B2' | 'YDS_CORE' | 'YDS_ADVANCED';
  source: string;
  day?: string;
}

export type RetrievalDirection =
  | 'en-to-tr'
  | 'tr-to-en'
  | 'image-to-word'
  | 'word-to-image'
  | 'def-to-word'
  | 'word-to-def'
  | 'sentence-missing-word'
  | 'synonym-to-word'
  | 'antonym-to-word'
  | 'collocation-completion'
  | 'audio-to-word'
  | 'context-meaning';
