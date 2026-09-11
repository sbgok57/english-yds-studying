import { PartOfSpeech } from './vocabulary';

export type YdsQuestionCategory =
  | 'vocabulary'            // 1. Kelime Bilgisi (6 questions)
  | 'grammar'               // 2. Dil Bilgisi (10 questions)
  | 'cloze'                 // 3. Cloze Test (10 questions: 2 passages x 5)
  | 'sentence_completion'   // 4. Cümle Tamamlama (10 questions)
  | 'translation'           // 5. Çeviri (6 questions: 3 EN->TR, 3 TR->EN)
  | 'reading'               // 6. Okuma Parçaları (20 questions: 5 passages x 4)
  | 'dialogue'              // 7. Diyalog Tamamlama (5 questions)
  | 'restatement'           // 8. Yakın Anlamlı Cümle (4 questions)
  | 'paragraph_completion'  // 9. Paragraf Tamamlama (4 questions)
  | 'irrelevant_sentence';  // 10. Anlam Bütünlüğünü Bozan Cümle (5 questions)

export type YdsOptionLabel = 'A' | 'B' | 'C' | 'D' | 'E';

export interface YdsOption {
  label: YdsOptionLabel;
  text: string;
}

export interface YdsQuestion {
  id: string;
  examId?: string;
  questionNumber: number; // 1 to 80 in a mock exam, or 1 to N in module practice
  category: YdsQuestionCategory;
  level: 'B1' | 'B2' | 'B2+' | 'C1_YDS';
  stemEn: string;
  passage?: string; // Cloze text or reading passage
  dialogueSpeakers?: { speaker: string; text: string }[];
  translationDirection?: 'en_to_tr' | 'tr_to_en';
  options: YdsOption[];
  correctAnswer: YdsOptionLabel;
  explanationEn: string;
  explanationTr: string;
  whyCorrect: string;
  whyDistractorsFail: Record<YdsOptionLabel, string>;
  strategyTip?: string;
  relatedVocabulary?: string[];
  relatedGrammarTopicId?: string;
  verifiedYDSOccurrence?: boolean;
}

export interface YdsSectionConfig {
  category: YdsQuestionCategory;
  nameTr: string;
  nameEn: string;
  questionCount: number;
  questionRange: [number, number]; // e.g. [1, 6], [7, 16], ...
  descriptionTr: string;
}

export const OFFICIAL_YDS_SECTIONS: YdsSectionConfig[] = [
  {
    category: 'vocabulary',
    nameTr: 'Kelime Bilgisi',
    nameEn: 'Vocabulary',
    questionCount: 6,
    questionRange: [1, 6],
    descriptionTr: 'İsim, fiil, sıfat, zarf, phrasal verb ve edat tamlamaları ölçülür.',
  },
  {
    category: 'grammar',
    nameTr: 'Dil Bilgisi',
    nameEn: 'Grammar',
    questionCount: 10,
    questionRange: [7, 16],
    descriptionTr: 'Zamanlar, modallar, edilgen çatı, bağlaçlar, edatlar ve yan cümleler ölçülür.',
  },
  {
    category: 'cloze',
    nameTr: 'Cloze Test',
    nameEn: 'Cloze Test',
    questionCount: 10,
    questionRange: [17, 26],
    descriptionTr: '2 ayrı akademik paragrafta 5\'er boşluk doldurma (gramer ve kelime).',
  },
  {
    category: 'sentence_completion',
    nameTr: 'Cümle Tamamlama',
    nameEn: 'Sentence Completion',
    questionCount: 10,
    questionRange: [27, 36],
    descriptionTr: 'Yan cümle ile ana cümlenin anlamsal ve yapısal uyumu (zıtlık, sebep, zaman).',
  },
  {
    category: 'translation',
    nameTr: 'Çeviri (İngilizce - Türkçe / Türkçe - İngilizce)',
    nameEn: 'Translation',
    questionCount: 6,
    questionRange: [37, 42],
    descriptionTr: '3 soru İngilizce → Türkçe, 3 soru Türkçe → İngilizce birebir yüklem ve özne uyumu.',
  },
  {
    category: 'reading',
    nameTr: 'Okuma Parçaları',
    nameEn: 'Reading Comprehension',
    questionCount: 20,
    questionRange: [43, 62],
    descriptionTr: '5 akademik metin (bilim, tarih, sağlık, teknoloji, çevre) ve her metne ait 4 soru.',
  },
  {
    category: 'dialogue',
    nameTr: 'Diyalog Tamamlama',
    nameEn: 'Dialogue Completion',
    questionCount: 5,
    questionRange: [63, 67],
    descriptionTr: 'İki kişi arasındaki konuşmada bağlama en uygun karşılığı bulma.',
  },
  {
    category: 'restatement',
    nameTr: 'Yakın Anlamlı Cümle',
    nameEn: 'Restatement',
    questionCount: 4,
    questionRange: [68, 71],
    descriptionTr: 'Verilen cümlenin anlamını bozmadan farklı kelime ve yapılarla ifade edilmesi.',
  },
  {
    category: 'paragraph_completion',
    nameTr: 'Paragraf Tamamlama',
    nameEn: 'Paragraph Completion',
    questionCount: 4,
    questionRange: [72, 75],
    descriptionTr: 'Paragrafın akışını tamamlayan en mantıklı cümlenin seçilmesi.',
  },
  {
    category: 'irrelevant_sentence',
    nameTr: 'Anlam Bütünlüğünü Bozan Cümle',
    nameEn: 'Irrelevant Sentence',
    questionCount: 5,
    questionRange: [76, 80],
    descriptionTr: 'Paragrafta akışı ve ana düşünceyi bozan cümlenin tespiti.',
  },
];

export interface YdsMockExam {
  id: string;
  code: string; // e.g. "YDS-DENEME-01"
  title: string;
  difficulty: 'B1' | 'B2' | 'B2+' | 'C1_YDS';
  totalQuestions: 80;
  durationMinutes: 180; // 03:00:00
  questions: YdsQuestion[];
  completed?: boolean;
  bestScore?: number;
  bestCorrect?: number;
  lastAttemptAt?: string;
}

export interface OpticalSheetState {
  answers: Record<number, YdsOptionLabel | null>; // questionNumber (1..80) -> selected option
  flagged: Record<number, boolean>; // flagged questions
  currentQuestionNumber: number;
}

export interface ScientificReadingVocabulary {
  word: string;
  meaningTr: string;
  partOfSpeech: PartOfSpeech;
  pronunciation: string;
  exampleSentence: string;
  collocations: string[];
  visualMnemonic: string;
}

export interface OpenEndedReadingQuestion {
  id: string;
  questionText: string;
  expectedAnswer: string;
  keyConcepts: string[];
  minConceptsForFullCredit?: number;
  explanation: string;
}

export interface OpenEndedEvaluationResult {
  status: 'correct' | 'partially_correct' | 'incorrect';
  score: number; // 0, 50, 100
  matchedConcepts: string[];
  missingConcepts: string[];
  feedback: string;
  expectedAnswer: string;
}

export type ScientificReadingCategory =
  | 'Biology'
  | 'Medicine'
  | 'Neuroscience'
  | 'Psychology'
  | 'Climate & Oceans'
  | 'Astronomy'
  | 'Space'
  | 'Physics'
  | 'Chemistry'
  | 'Genetics'
  | 'Technology'
  | 'Artificial Intelligence'
  | 'Economics'
  | 'Sociology'
  | 'Education'
  | 'Archaeology'
  | 'History of Science'
  | 'Public Health'
  | 'Nutrition Science'
  | 'Ecology'
  | 'Geology'
  | 'Oceanography'
  | 'Materials Science'
  | 'Engineering'
  | 'Renewable Energy'
  | 'Animal Behavior'
  | 'Evolution'
  | 'Linguistics'
  | 'Cognitive Robotics'
  | string;

export interface ScientificReading {
  id: string;
  title: string;
  category: ScientificReadingCategory;
  readTimeMinutes: number;
  difficulty: 'B2' | 'C1';
  passageEn: string;
  summaryTr: string;
  visualConcept: string;
  keyVocabulary: ScientificReadingVocabulary[];
  questions: YdsQuestion[];
  openEndedQuestions?: OpenEndedReadingQuestion[];
}
