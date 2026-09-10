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
  const others = allVocabulary.filter((v) => v.id !== target.id);

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
      const promptTr = target.meaningsTr.join(', ');
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([target.word, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'tr_to_en',
        promptEn: `Select the English word that corresponds to: "${promptTr}"`,
        promptTr: `Türkçe karşılığı "${promptTr}" olan İngilizce kelimeyi seçiniz:`,
        options,
        correctAnswer: target.word,
        explanationEn: `"${target.word}" means "${promptTr}".`,
        explanationTr: `"${target.word}" kelimesinin Türkçe karşılığı "${promptTr}"dir.`,
        targetWord: target.word,
      };
    }

    case 'sentence_completion': {
      const sentenceWithBlank = target.example.replace(
        new RegExp(target.word, 'gi'),
        '____'
      );
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([target.word, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'sentence_completion',
        promptEn: `Complete the sentence with the most appropriate academic term:`,
        promptTr: `Cümleyi en uygun akademik kelimeyle tamamlayınız:`,
        contextSentence: sentenceWithBlank,
        options,
        correctAnswer: target.word,
        explanationEn: `In this context, "${target.word}" fits both grammatically and semantically: "${target.example}"`,
        explanationTr: `Bu bağlamda anlam ve dilbilgisi açısından en uygun kelime "${target.word}"dir: "${target.exampleTr || target.example}"`,
        targetWord: target.word,
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
        promptEn: `Which of the following is the closest SYNONYM for "${target.word}"?`,
        promptTr: `Aşağıdakilerden hangisi "${target.word}" kelimesinin en yakın EŞ ANLAMLISIDIR?`,
        options,
        correctAnswer: correctSynonym,
        explanationEn: `"${correctSynonym}" is a direct synonym for "${target.word}".`,
        explanationTr: `"${correctSynonym}", "${target.word}" kelimesinin doğrudan eşanlamlısıdır.`,
        targetWord: target.word,
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
        promptEn: `Which of the following is the exact ANTONYM (opposite) of "${target.word}"?`,
        promptTr: `Aşağıdakilerden hangisi "${target.word}" kelimesinin ZIT ANLAMLISIDIR?`,
        options,
        correctAnswer: correctAntonym,
        explanationEn: `"${correctAntonym}" expresses the opposite meaning of "${target.word}".`,
        explanationTr: `"${correctAntonym}", "${target.word}" kelimesinin zıt anlamlısıdır.`,
        targetWord: target.word,
      };
    }

    case 'collocation': {
      const correctCollocation = target.collocations[0];
      // Create prompt by blanking target word in collocation
      const colBlank = correctCollocation.replace(new RegExp(target.word, 'gi'), '____');
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([target.word, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'collocation',
        promptEn: `Select the word that naturally completes the academic collocation:`,
        promptTr: `Akademik eşdizimi (collocation) doğal olarak tamamlayan kelimeyi seçiniz:`,
        contextSentence: colBlank,
        options,
        correctAnswer: target.word,
        explanationEn: `The natural collocation tested in academic exams is "${correctCollocation}".`,
        explanationTr: `Akademik sınavlarda sıkça kullanılan doğal eşdizim "${correctCollocation}"dir.`,
        targetWord: target.word,
      };
    }

    case 'listening': {
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 3);
      const options = shuffleArray([target.word, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'listening',
        promptEn: `Listen to the audio pronunciation and identify the correct word:`,
        promptTr: `Sesli telaffuzu dinleyin ve doğru kelimeyi seçiniz:`,
        audioPrompt: target.word,
        options,
        correctAnswer: target.word,
        explanationEn: `The pronounced word is "${target.word}" (${target.pronunciation}), meaning ${target.meaningsTr.join(', ')}.`,
        explanationTr: `Telaffuz edilen kelime "${target.word}" (${target.pronunciation}) olup anlamı "${target.meaningsTr.join(', ')}"dir.`,
        targetWord: target.word,
      };
    }

    case 'yds_vocabulary': {
      const sentenceWithBlank = target.example.replace(
        new RegExp(target.word, 'gi'),
        '____'
      );
      const distractors = shuffleArray(others.map((o) => o.word)).slice(0, 4); // 5 options for YDS
      const options = shuffleArray([target.word, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'yds_vocabulary',
        promptEn: `YDS Exam Question: Select the word that best completes the sentence:`,
        promptTr: `YDS Soru Formatı: Cümlede boş bırakılan yere en uygun kelimeyi seçiniz:`,
        contextSentence: sentenceWithBlank,
        options,
        correctAnswer: target.word,
        explanationEn: `The key context leads directly to "${target.word}" (${target.partOfSpeech}). Full sentence: "${target.example}"`,
        explanationTr: `Cümlenin bağlamı ve anlam bütünlüğü doğrudan "${target.word}" kelimesini gerektirir: "${target.exampleTr || target.example}"`,
        targetWord: target.word,
      };
    }

    case 'en_to_tr':
    default: {
      const correctMeaning = target.meaningsTr.slice(0, 2).join(', ');
      const distractors = shuffleArray(
        others.map((o) => o.meaningsTr.slice(0, 2).join(', '))
      ).slice(0, 3);
      const options = shuffleArray([correctMeaning, ...distractors]);

      return {
        id: actId,
        vocabularyId: target.id,
        type: 'en_to_tr',
        promptEn: `What is the Turkish meaning of "${target.word}"?`,
        promptTr: `"${target.word}" kelimesinin Türkçe karşılığı nedir?`,
        options,
        correctAnswer: correctMeaning,
        explanationEn: `"${target.word}" translates to "${correctMeaning}". Example: "${target.example}"`,
        explanationTr: `"${target.word}" kelimesi "${correctMeaning}" anlamına gelir. Örnek: "${target.exampleTr || target.example}"`,
        targetWord: target.word,
      };
    }
  }
}
