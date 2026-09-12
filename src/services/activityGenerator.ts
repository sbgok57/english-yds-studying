import { sanitizeWord, sanitizeMeanings, isIdOrTechnicalCode } from './wordSanitizer';
import { VocabularyItem } from '../types';

export type VocabActivityType =
  | 'en_to_tr'
  | 'tr_to_en'
  | 'sentence_completion'
  | 'synonym'
  | 'antonym'
  | 'collocation'
  | 'spelling'
  | 'yds_vocabulary'
  | 'listening'
  | 'true_false'
  | 'reverse_recall';

export interface GeneratedVocabActivity {
  id: string;
  vocabularyId: string;
  type: VocabActivityType;
  promptEn: string;
  promptTr: string;
  contextSentence?: string;
  options: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
  audioPrompt?: string;
  targetWord: string;
}

/**
 * Shuffles array deterministically/randomly without mutating original
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generates an educational vocabulary challenge dynamically adapting to activity types.
 */
export function generateVocabActivity(
  target: VocabularyItem,
  allVocabulary: VocabularyItem[],
  preferredType?: VocabActivityType
): GeneratedVocabActivity {
  const cleanTargetWord = sanitizeWord(target.displayWord || target.word);
  const cleanMeanings = sanitizeMeanings(target.meaningsTr);

  const others = allVocabulary
    .filter((v) => v.id !== target.id)
    .map((v) => ({
      ...v,
      word: sanitizeWord(v.displayWord || v.word),
      meaningsTr: sanitizeMeanings(v.meaningsTr),
    }))
    .filter((v) => Boolean(v.word) && !isIdOrTechnicalCode(v.word));

  // Available types
  const candidateTypes: VocabActivityType[] = [
    'en_to_tr',
    'tr_to_en',
    'sentence_completion',
    'yds_vocabulary',
    'reverse_recall',
    'listening',
  ];

  if (target.synonyms && target.synonyms.length > 0) {
    candidateTypes.push('synonym');
  }
  if (target.antonyms && target.antonyms.length > 0) {
    candidateTypes.push('antonym');
  }
  if (target.collocations && target.collocations.length > 0) {
    candidateTypes.push('collocation');
  }

  const selectedType =
    preferredType && candidateTypes.includes(preferredType)
      ? preferredType
      : candidateTypes[Math.floor(Math.random() * candidateTypes.length)];

  const actId = `vact-${target.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  switch (selectedType) {
    case 'tr_to_en': {
      const promptTr = cleanMeanings.join(', ');
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([cleanTargetWord, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'tr_to_en',
        promptEn: `Select the English word that corresponds to: "${promptTr}"`,
        promptTr: `Türkçe karşılığı "${promptTr}" olan İngilizce kelimeyi seçiniz:`,
        options,
        correctAnswer: cleanTargetWord,
        explanationEn: `"${cleanTargetWord}" means "${promptTr}".`,
        explanationTr: `"${cleanTargetWord}" kelimesinin Türkçe karşılığı "${promptTr}"dir.`,
        targetWord: cleanTargetWord,
      };
    }

    case 'sentence_completion': {
      const sentenceWithBlank = target.example.replace(
        new RegExp(cleanTargetWord, 'gi'),
        '____'
      );
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([cleanTargetWord, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'sentence_completion',
        promptEn: `Complete the sentence with the most appropriate academic term:`,
        promptTr: `Cümleyi en uygun akademik kelimeyle tamamlayınız:`,
        contextSentence: sentenceWithBlank,
        options,
        correctAnswer: cleanTargetWord,
        explanationEn: `In this context, "${cleanTargetWord}" fits both grammatically and semantically: "${target.example}"`,
        explanationTr: `Bu bağlamda anlam ve dilbilgisi açısından en uygun kelime "${cleanTargetWord}"dir: "${target.exampleTr || target.example}"`,
        targetWord: cleanTargetWord,
      };
    }

    case 'synonym': {
      const correctSynonym = target.synonyms[0];
      const otherSynonyms = others
        .flatMap((o) => o.synonyms)
        .filter((s) => s && s !== correctSynonym);
      const distractors = shuffleArray(otherSynonyms).slice(0, 3);
      // Fallback if not enough other synonyms
      while (distractors.length < 3) {
        distractors.push(others[distractors.length % others.length].word);
      }
      const options = shuffleArray([correctSynonym, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'synonym',
        promptEn: `Which of the following is the closest SYNONYM for "${cleanTargetWord}"?`,
        promptTr: `Aşağıdakilerden hangisi "${cleanTargetWord}" kelimesinin en yakın EŞ ANLAMLISIDIR?`,
        options,
        correctAnswer: correctSynonym,
        explanationEn: `"${correctSynonym}" is a direct synonym for "${cleanTargetWord}".`,
        explanationTr: `"${correctSynonym}", "${cleanTargetWord}" kelimesinin doğrudan eşanlamlısıdır.`,
        targetWord: cleanTargetWord,
      };
    }

    case 'antonym': {
      const correctAntonym = target.antonyms[0];
      const otherAntonyms = others
        .flatMap((o) => o.antonyms)
        .filter((a) => a && a !== correctAntonym);
      const distractors = shuffleArray(otherAntonyms).slice(0, 3);
      while (distractors.length < 3) {
        distractors.push(others[distractors.length % others.length].word);
      }
      const options = shuffleArray([correctAntonym, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'antonym',
        promptEn: `Which of the following is the exact ANTONYM (opposite) of "${cleanTargetWord}"?`,
        promptTr: `Aşağıdakilerden hangisi "${cleanTargetWord}" kelimesinin ZIT ANLAMLISIDIR?`,
        options,
        correctAnswer: correctAntonym,
        explanationEn: `"${correctAntonym}" expresses the opposite meaning of "${cleanTargetWord}".`,
        explanationTr: `"${correctAntonym}", "${cleanTargetWord}" kelimesinin zıt anlamlısıdır.`,
        targetWord: cleanTargetWord,
      };
    }

    case 'collocation': {
      const correctCollocation = target.collocations[0];
      // Create prompt by blanking target word in collocation
      const colBlank = correctCollocation.replace(new RegExp(cleanTargetWord, 'gi'), '____');
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([cleanTargetWord, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'collocation',
        promptEn: `Select the word that naturally completes the academic collocation:`,
        promptTr: `Akademik eşdizimi (collocation) doğal olarak tamamlayan kelimeyi seçiniz:`,
        contextSentence: colBlank,
        options,
        correctAnswer: cleanTargetWord,
        explanationEn: `The natural collocation tested in academic exams is "${correctCollocation}".`,
        explanationTr: `Akademik sınavlarda sıkça kullanılan doğal eşdizim "${correctCollocation}"dir.`,
        targetWord: cleanTargetWord,
      };
    }

    case 'listening': {
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([cleanTargetWord, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'listening',
        promptEn: `Listen to the audio pronunciation and identify the correct word:`,
        promptTr: `Sesli telaffuzu dinleyin ve doğru kelimeyi seçiniz:`,
        audioPrompt: cleanTargetWord,
        options,
        correctAnswer: cleanTargetWord,
        explanationEn: `The pronounced word is "${cleanTargetWord}" (${target.pronunciation}), meaning ${cleanMeanings.join(', ')}.`,
        explanationTr: `Telaffuz edilen kelime "${cleanTargetWord}" (${target.pronunciation}) olup anlamı "${cleanMeanings.join(', ')}"dir.`,
        targetWord: cleanTargetWord,
      };
    }

    case 'yds_vocabulary': {
      const sentenceWithBlank = target.example.replace(
        new RegExp(cleanTargetWord, 'gi'),
        '____'
      );
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 4); // 5 options for YDS
      const options = shuffleArray([cleanTargetWord, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'yds_vocabulary',
        promptEn: `YDS Exam Question: Select the word that best completes the sentence:`,
        promptTr: `YDS Soru Formatı: Cümlede boş bırakılan yere en uygun kelimeyi seçiniz:`,
        contextSentence: sentenceWithBlank,
        options,
        correctAnswer: cleanTargetWord,
        explanationEn: `The key context leads directly to "${cleanTargetWord}" (${target.partOfSpeech}). Full sentence: "${target.example}"`,
        explanationTr: `Cümlenin bağlamı ve anlam bütünlüğü doğrudan "${cleanTargetWord}" kelimesini gerektirir: "${target.exampleTr || target.example}"`,
        targetWord: cleanTargetWord,
      };
    }

    case 'en_to_tr':
    default: {
      const correctMeaning = cleanMeanings.slice(0, 2).join(', ');
      const distractors = shuffleArray(
        others.map((o) => o.meaningsTr.slice(0, 2).join(', '))
      ).slice(0, 3);
      const options = shuffleArray([correctMeaning, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'en_to_tr',
        promptEn: `What is the Turkish meaning of "${cleanTargetWord}"?`,
        promptTr: `"${cleanTargetWord}" kelimesinin Türkçe karşılığı nedir?`,
        options,
        correctAnswer: correctMeaning,
        explanationEn: `"${cleanTargetWord}" translates to "${correctMeaning}". Example: "${target.example}"`,
        explanationTr: `"${cleanTargetWord}" kelimesi "${correctMeaning}" anlamına gelir. Örnek: "${target.exampleTr || target.example}"`,
        targetWord: cleanTargetWord,
      };
    }
  }
}
