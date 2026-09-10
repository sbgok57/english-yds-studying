export type GrammarLevel =
  | 'FOUNDATION'
  | 'CORE'
  | 'INTERMEDIATE'
  | 'YDS_GRAMMAR';

export interface GrammarTopic {
  id: string;
  slug: string;
  title: string;
  titleTr: string;
  level: GrammarLevel;
  order: number;
  description: string;
  descriptionTr: string;
  prerequisites: string[];
  icon: string;
}

export interface FormulaBlock {
  role: string;
  text: string;
  note?: string;
  highlight?: boolean;
}

export interface GrammarExample {
  en: string;
  tr: string;
  context?: string;
  highlightedWords?: string[];
}

export interface SignalWord {
  word: string;
  meaningTr: string;
  noteEn: string;
  noteTr: string;
}

export interface CommonMistake {
  wrong: string;
  right: string;
  explanationEn: string;
  explanationTr: string;
}

export interface VisualStep {
  title: string;
  descEn: string;
  descTr: string;
  label?: string;
}

export interface VisualExplanation {
  type:
    | 'timeline'
    | 'blocks'
    | 'comparison'
    | 'cause_result'
    | 'active_passive'
    | 'clause'
    | 'diagram';
  titleEn: string;
  titleTr: string;
  steps: VisualStep[];
}

export interface GrammarVocabRef {
  wordId?: string;
  word: string;
  meaningTr: string;
  context: string;
}

export interface MemoryTrick {
  title: string;
  mnemonicEn: string;
  mnemonicTr: string;
  icon?: string;
}

export interface MicroPractice {
  id: string;
  question: string;
  questionTr: string;
  options: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
}

export interface YdsExamplePair {
  en: string;
  tr: string;
  explanation: string;
}

export interface YdsConnection {
  descriptionEn: string;
  descriptionTr: string;
  a2Example: YdsExamplePair;
  b1Example: YdsExamplePair;
  ydsExample: YdsExamplePair;
}

export interface GrammarLesson {
  topicId: string;
  introduction: { en: string; tr: string };
  whyItMatters: { en: string; tr: string };
  basicStructure: {
    pattern: string;
    explanationEn: string;
    explanationTr: string;
    formulaBlocks: FormulaBlock[];
  };
  positive: {
    structure: string;
    explanationEn: string;
    explanationTr: string;
    examples: GrammarExample[];
  };
  negative: {
    structure: string;
    explanationEn: string;
    explanationTr: string;
    examples: GrammarExample[];
  };
  questions: {
    structure: string;
    explanationEn: string;
    explanationTr: string;
    examples: GrammarExample[];
  };
  shortAnswers: {
    structure: string;
    explanationEn: string;
    explanationTr: string;
    examples: GrammarExample[];
  };
  signalWords: SignalWord[];
  commonMistakes: CommonMistake[];
  visualExplanation: VisualExplanation;
  examples: GrammarExample[];
  vocabulary: GrammarVocabRef[];
  memoryTricks: MemoryTrick[];
  microPractices: MicroPractice[];
  ydsConnection: YdsConnection;
  finalCheck: MicroPractice[];
  masteryRules: {
    minScoreToPass: number;
    activitiesRequired: number;
    keyConcepts: string[];
  };
}

export type GrammarActivityType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'sentence_completion'
  | 'error_correction'
  | 'transformation'
  | 'sentence_ordering'
  | 'word_ordering'
  | 'matching'
  | 'true_false'
  | 'contextual_grammar'
  | 'yds_question'
  | 'rule_application'
  | 'active_passive'
  | 'tense_identification'
  | 'connector_selection';

export interface GrammarActivity {
  id: string;
  grammarTopicId: string;
  type: GrammarActivityType;
  question: string;
  options: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
  difficulty: 'A2' | 'B1' | 'B2' | 'YDS';
  whereOthersAreWrong?: Record<string, string>;
}

export interface GrammarProgress {
  topicId: string;
  mastery: number; // 0-100 clamped
  completedActivitiesCount: number;
  correctCount: number;
  incorrectCount: number;
  lessonCompleted: boolean;
  lastStudiedAt: string | null;
}
