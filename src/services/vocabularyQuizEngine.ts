import {
  VocabularyItem,
  WordLevel,
  WordImportance,
  LearningState,
} from '../types';

export type VocabQuizQuestionType =
  | 'en_to_tr'
  | 'tr_to_en'
  | 'fill_blank'
  | 'context_based'
  | 'synonym'
  | 'antonym'
  | 'word_family'
  | 'yds_multiple_choice';

export const VOCAB_QUIZ_TYPE_LABELS: Record<VocabQuizQuestionType, string> = {
  en_to_tr: 'İngilizce → Türkçe Anlam',
  tr_to_en: 'Türkçe → İngilizce Anlam',
  fill_blank: 'Cümle İçi Boşluk Doldurma',
  context_based: 'Bağlam İçi Doğru Kelime',
  synonym: 'Eş Anlam (Synonym)',
  antonym: 'Zıt Anlam (Antonym)',
  word_family: 'Word Family (Kelime Ailesi)',
  yds_multiple_choice: 'YDS/YDT Çoktan Seçmeli (5 Şıklı)',
};

export interface VocabQuizOption {
  id: string; // 'A', 'B', 'C', 'D', 'E'
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface VocabQuizQuestion {
  id: string;
  vocabularyId: string;
  targetWord: string;
  type: VocabQuizQuestionType;
  typeLabelTr: string;
  stem: string;
  secondaryContext?: string;
  options: VocabQuizOption[];
  correctOptionId: string;
  whyCorrect: string;
  whyDistractorsFail: string;
  ydsTip: string;
}

export interface VocabQuizConfig {
  questionCount: number; // 10, 20, 50, or total
  selectedTypes: VocabQuizQuestionType[];
  level?: WordLevel | 'all';
  importance?: WordImportance | 'all';
  onlyFavorites?: boolean;
  onlyErrors?: boolean;
  timed?: boolean;
  secondsPerQuestion?: number;
}

export interface VocabQuizResult {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  scorePercentage: number;
  xpEarned: number;
  missedVocabIds: string[];
  learnedVocabIds: string[];
  durationSeconds: number;
}

/**
 * Fisher-Yates array shuffle.
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

/**
 * Replaces target word in sentence with blank (_____).
 */
function maskWordInSentence(sentence: string, word: string): string {
  if (!sentence || !word) return sentence;
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
  if (regex.test(sentence)) {
    return sentence.replace(regex, '_____');
  }
  // Fallback if inflected:
  const root = word.slice(0, Math.max(4, word.length - 2));
  const rootRegex = new RegExp(`\\b${root}\\w*\\b`, 'gi');
  return sentence.replace(rootRegex, '_____');
}

/**
 * Generates a single quiz question based on requested type and pool.
 */
function generateQuestion(
  item: VocabularyItem,
  type: VocabQuizQuestionType,
  allVocab: VocabularyItem[]
): VocabQuizQuestion {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const otherVocab = allVocab.filter((v) => v.id !== item.id);
  const shuffledOthers = shuffleArray(otherVocab);

  let stem = '';
  let secondaryContext: string | undefined = undefined;
  let correctText = '';
  const distractorTexts: string[] = [];
  let isFiveChoice = false;

  // 1. EN -> TR
  if (type === 'en_to_tr') {
    stem = `"${item.word}" kelimesinin Türkçe karşılığı hangisidir?`;
    secondaryContext = `Sözcük Türü: ${item.partOfSpeech.toUpperCase()} | Seviye: ${item.level ? `Seviye ${item.level}` : item.difficulty}`;
    correctText = item.meaningsTr[0];
    for (const other of shuffledOthers) {
      if (distractorTexts.length >= 3) break;
      const m = other.meaningsTr[0];
      if (m && m !== correctText && !distractorTexts.includes(m)) {
        distractorTexts.push(m);
      }
    }
  }

  // 2. TR -> EN
  else if (type === 'tr_to_en') {
    const trMeanings = item.meaningsTr.slice(0, 2).join(', ');
    stem = `"${trMeanings}" anlamına gelen İngilizce sözcük hangisidir?`;
    secondaryContext = `Sözcük Türü: ${item.partOfSpeech.toUpperCase()}`;
    correctText = item.word;
    for (const other of shuffledOthers) {
      if (distractorTexts.length >= 3) break;
      if (other.word !== correctText && !distractorTexts.includes(other.word)) {
        distractorTexts.push(other.word);
      }
    }
  }

  // 3. FILL IN THE BLANK
  else if (type === 'fill_blank') {
    const masked = maskWordInSentence(item.example, item.word);
    stem = 'Cümledeki boşluğa (_____) anlamca en uygun kelimeyi seçiniz:';
    secondaryContext = `"${masked}"`;
    correctText = item.word;

    // Prefer same part of speech for distractors
    const samePos = shuffledOthers.filter((v) => v.partOfSpeech === item.partOfSpeech);
    const pool = samePos.length >= 3 ? samePos : shuffledOthers;
    for (const other of pool) {
      if (distractorTexts.length >= 3) break;
      if (other.word !== correctText && !distractorTexts.includes(other.word)) {
        distractorTexts.push(other.word);
      }
    }
  }

  // 4. CONTEXT BASED
  else if (type === 'context_based') {
    stem = 'Aşağıdaki gerçek hayat bağlamında boşluğa hangi kelime gelmelidir?';
    const quote = item.mediaContext?.sceneQuote || item.example;
    const masked = maskWordInSentence(quote, item.word);
    const expl = item.mediaContext?.explanationTr || `Anlam: ${item.meaningsTr.join(', ')}`;
    secondaryContext = `${masked}\n\n💡 İpucu: ${expl}`;
    correctText = item.word;

    for (const other of shuffledOthers) {
      if (distractorTexts.length >= 3) break;
      if (other.word !== correctText && !distractorTexts.includes(other.word)) {
        distractorTexts.push(other.word);
      }
    }
  }

  // 5. SYNONYM
  else if (type === 'synonym') {
    if (item.synonyms && item.synonyms.length > 0) {
      stem = `"${item.word}" sözcüğünün en yakın eş anlamlısı (synonym) hangisidir?`;
      secondaryContext = `Anlamı: ${item.meaningsTr.join(', ')}`;
      correctText = item.synonyms[0];
      for (const other of shuffledOthers) {
        if (distractorTexts.length >= 3) break;
        const candidate = other.synonyms?.[0] || other.word;
        if (
          candidate !== correctText &&
          !item.synonyms.includes(candidate) &&
          !distractorTexts.includes(candidate)
        ) {
          distractorTexts.push(candidate);
        }
      }
    } else {
      // Fallback to fill blank
      return generateQuestion(item, 'fill_blank', allVocab);
    }
  }

  // 6. ANTONYM
  else if (type === 'antonym') {
    if (item.antonyms && item.antonyms.length > 0) {
      stem = `"${item.word}" sözcüğünün zıt anlamlısı (antonym) hangisidir?`;
      secondaryContext = `Anlamı: ${item.meaningsTr.join(', ')}`;
      correctText = item.antonyms[0];
      for (const other of shuffledOthers) {
        if (distractorTexts.length >= 3) break;
        const candidate = other.antonyms?.[0] || other.word;
        if (
          candidate !== correctText &&
          !item.antonyms.includes(candidate) &&
          !distractorTexts.includes(candidate)
        ) {
          distractorTexts.push(candidate);
        }
      }
    } else {
      // Fallback to en_to_tr
      return generateQuestion(item, 'en_to_tr', allVocab);
    }
  }

  // 7. WORD FAMILY
  else if (type === 'word_family') {
    const wf = item.wordFamily;
    if (wf && (wf.noun || wf.verb || wf.adjective || wf.adverb)) {
      // Create a derivative question
      const targetRole = wf.noun ? 'noun' : wf.adjective ? 'adjective' : 'verb';
      const roleLabel = targetRole === 'noun' ? 'isim (noun)' : targetRole === 'adjective' ? 'sıfat (adjective)' : 'fiil (verb)';
      stem = `"${item.word}" kelimesinin ${roleLabel} formu hangisidir?`;
      correctText = wf[targetRole] || item.word;

      const familyMembers = [wf.verb, wf.noun, wf.adjective, wf.adverb].filter(
        (m): m is string => Boolean(m && m !== correctText)
      );

      for (const m of familyMembers) {
        if (distractorTexts.length < 3 && !distractorTexts.includes(m)) {
          distractorTexts.push(m);
        }
      }

      // Fill remaining if needed
      for (const other of shuffledOthers) {
        if (distractorTexts.length >= 3) break;
        if (other.word !== correctText && !distractorTexts.includes(other.word)) {
          distractorTexts.push(other.word);
        }
      }
    } else {
      return generateQuestion(item, 'fill_blank', allVocab);
    }
  }

  // 8. YDS MULTIPLE CHOICE (5 choices A-E)
  else {
    isFiveChoice = true;
    const masked = maskWordInSentence(item.example, item.word);
    stem = 'Aşağıdaki cümlede boş bırakılan yere uygun düşen sözcüğü bulunuz:';
    secondaryContext = `"${masked}"`;
    correctText = item.word;

    // Distractor 1: YDS trap confusing word if present
    if (item.ydsTrap?.confusingWord && item.ydsTrap.confusingWord !== correctText) {
      distractorTexts.push(item.ydsTrap.confusingWord);
    }

    // Remaining distractors from academic pool
    const samePos = shuffledOthers.filter((v) => v.partOfSpeech === item.partOfSpeech);
    const pool = samePos.length >= 4 ? samePos : shuffledOthers;
    for (const other of pool) {
      if (distractorTexts.length >= 4) break;
      if (other.word !== correctText && !distractorTexts.includes(other.word)) {
        distractorTexts.push(other.word);
      }
    }
  }

  // Combine and shuffle options
  const targetOptionCount = isFiveChoice ? 5 : 4;
  const rawOptions = [
    { text: correctText, isCorrect: true },
    ...distractorTexts.slice(0, targetOptionCount - 1).map((t) => ({ text: t, isCorrect: false })),
  ];
  const shuffledRaw = shuffleArray(rawOptions);

  let correctLetter = 'A';
  const options: VocabQuizOption[] = shuffledRaw.map((opt, idx) => {
    const letter = letters[idx];
    if (opt.isCorrect) correctLetter = letter;
    return {
      id: letter,
      text: opt.text,
      isCorrect: opt.isCorrect,
    };
  });

  // Construct pedagogical explanations
  const whyCorrect = `"${correctText}" doğru cevaptır. Cümlenin anlamsal bağlamında "${item.meaningsTr.join(', ')}" anlamını eksiksiz karşılar. (${item.exampleTr || item.example})`;
  const trapDiff = item.ydsTrap ? ` Dikkat: ${item.ydsTrap.differenceTr}` : '';
  const whyDistractorsFail = `Diğer seçenekler cümlenin gerek anlamsal kurgusu gerekse edat uyumu ile örtüşmemektedir.${trapDiff}`;
  const ydsTip = item.ydsNote || `${item.word} sözcüğü sınavda sıkça "${item.collocations?.slice(0, 2).join(', ')}" kalıplarıyla ve ${item.partOfSpeech} türünde karşımıza çıkar.`;

  return {
    id: `quiz-q-${item.id}-${type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    vocabularyId: item.id,
    targetWord: item.word,
    type,
    typeLabelTr: VOCAB_QUIZ_TYPE_LABELS[type],
    stem,
    secondaryContext,
    options,
    correctOptionId: correctLetter,
    whyCorrect,
    whyDistractorsFail,
    ydsTip,
  };
}

/**
 * Builds a full customized quiz session based on user filters & configuration.
 */
export function buildVocabQuiz(
  vocabulary: VocabularyItem[],
  learningStates: Map<string, LearningState>,
  config: VocabQuizConfig
): VocabQuizQuestion[] {
  let eligibleItems = [...vocabulary];

  // 1. Level Filter
  if (config.level && config.level !== 'all') {
    eligibleItems = eligibleItems.filter((v) => v.level === config.level);
  }

  // 2. Importance Filter
  if (config.importance && config.importance !== 'all') {
    eligibleItems = eligibleItems.filter((v) => v.importance === config.importance);
  }

  // 3. Favorites Filter
  if (config.onlyFavorites) {
    eligibleItems = eligibleItems.filter((v) => learningStates.get(v.id)?.favorite);
  }

  // 4. Errors Filter
  if (config.onlyErrors) {
    eligibleItems = eligibleItems.filter((v) => {
      const st = learningStates.get(v.id);
      return st && (st.incorrectCount > 0 || st.status === 'review_needed');
    });
  }

  // If filtered set is too small, fallback gracefully to full vocabulary
  if (eligibleItems.length === 0) {
    eligibleItems = [...vocabulary];
  }

  const shuffledPool = shuffleArray(eligibleItems);
  const questionCount = Math.min(config.questionCount, shuffledPool.length);
  const selectedPool = shuffledPool.slice(0, questionCount);

  const selectedTypes =
    config.selectedTypes.length > 0
      ? config.selectedTypes
      : (Object.keys(VOCAB_QUIZ_TYPE_LABELS) as VocabQuizQuestionType[]);

  const questions: VocabQuizQuestion[] = [];
  selectedPool.forEach((item, idx) => {
    const qType = selectedTypes[idx % selectedTypes.length];
    const q = generateQuestion(item, qType, vocabulary);
    questions.push(q);
  });

  return questions;
}
