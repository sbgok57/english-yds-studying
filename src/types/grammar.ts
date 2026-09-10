export interface SentenceBlock {
  role: 'SUBJECT' | 'AUXILIARY' | 'VERB' | 'OBJECT' | 'ADVERBIAL' | 'TIME_MARKER' | 'CONNECTOR';
  text: string;
  textTr: string;
  colorClass: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanationEn: string;
  explanationTr: string;
}

export interface MicroPractice {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  feedbackEn: string;
  feedbackTr: string;
}

export interface GrammarComparison {
  title: string;
  conceptA: {
    name: string;
    usage: string;
    example: string;
    exampleTr: string;
  };
  conceptB: {
    name: string;
    usage: string;
    example: string;
    exampleTr: string;
  };
  keyDifferenceEn: string;
  keyDifferenceTr: string;
}

export interface GrammarActivity {
  id: string;
  type: 
    | 'multiple-choice'
    | 'fill-in-blank'
    | 'sentence-completion'
    | 'error-correction'
    | 'sentence-transformation'
    | 'word-ordering'
    | 'sentence-ordering'
    | 'true-false'
    | 'rule-identification'
    | 'tense-identification'
    | 'translation-match'
    | 'connector-selection'
    | 'yds-cloze'
    | 'yds-style-question'
    | 'contextual-grammar'
    | 'timed-challenge'
    | 'clause-identification'
    | 'modal-meaning'
    | 'error-spotting'
    | 'visual-grammar-recall';
  prompt: string;
  promptTr?: string;
  options: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
  difficulty: 'A2' | 'B1' | 'B2' | 'YDS';
}

export interface GrammarTopic {
  id: string;
  title: string;
  titleTr: string;
  category: 'FOUNDATION' | 'CORE' | 'INTERMEDIATE' | 'YDS';
  order: number;
  
  // The 19 Required Structural Sections
  intro: {
    overview: string;
    overviewTr: string;
    whatIsIt: string;
    whatIsItTr: string;
    whyUseIt: string;
    whyUseItTr: string;
  };
  
  structure: {
    formulaPositive: string;
    formulaNegative: string;
    formulaQuestion: string;
    formulaShortAnswers: string;
    sentenceBlocksPositive: SentenceBlock[];
    sentenceBlocksNegative: SentenceBlock[];
    sentenceBlocksQuestion: SentenceBlock[];
  };
  
  signalWords: {
    words: string[];
    explanationEn: string;
    explanationTr: string;
  };
  
  examplesWithVocab: {
    sentence: string;
    sentenceTr: string;
    vocabulary: {
      word: string;
      meaningTr: string;
      partOfSpeech: string;
    }[];
  }[];
  
  visualExplanation: {
    diagramType: 'timeline' | 'cause-effect' | 'comparison' | 'hierarchy' | 'transformation';
    descriptionEn: string;
    descriptionTr: string;
    visualData: Record<string, any>;
  };
  
  commonMistakes: CommonMistake[];
  
  memoryTricks: {
    trickEn: string;
    trickTr: string;
    mnemonicPhrase?: string;
  }[];
  
  microPractices: MicroPractice[];
  
  comparison?: GrammarComparison;
  
  ydsConnection: {
    importance: string;
    examQuestionType: string;
    ydsStrategyEn: string;
    ydsStrategyTr: string;
    typicalTrapEn: string;
    typicalTrapTr: string;
  };
  
  finalReviewSummary: {
    keyRules: string[];
    keyRulesTr: string[];
  };
  
  // At least 20 activities per topic
  activities: GrammarActivity[];
}
