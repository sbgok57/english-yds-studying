import type { BankQ, QType } from "./data-bank-core";
import { VOCABULARY_QUESTIONS } from "./data-exam-vocabulary";
import { GRAMMAR_QUESTIONS } from "./data-exam-grammar";
import { CLOZE_QUESTIONS } from "./data-exam-cloze";
import { SENTENCE_QUESTIONS } from "./data-exam-sentence";
import { TRANSLATION_QUESTIONS } from "./data-exam-translation";
import { DIALOGUE_QUESTIONS } from "./data-exam-dialogue";
import { PARAGRAPH_QUESTIONS } from "./data-exam-paragraph";
import { READING_QUESTIONS } from "./data-exam-reading";

/**
 * Tam 1,000 Özgün YDS Tarzı Soru Bankası.
 * 8 bağımsız modülden derlenir, isim/şehir değiştirmeli sahte varyant içermez.
 * Tüm sorular akademik İngilizce ve zengin Türkçe açıklamalarla hazırlanmıştır.
 * sourceType: "original-yds-style", isOfficial: false
 */
export const BANK: BankQ[] = [
  ...VOCABULARY_QUESTIONS,
  ...GRAMMAR_QUESTIONS,
  ...CLOZE_QUESTIONS,
  ...SENTENCE_QUESTIONS,
  ...TRANSLATION_QUESTIONS,
  ...DIALOGUE_QUESTIONS,
  ...PARAGRAPH_QUESTIONS,
  ...READING_QUESTIONS,
];

export const BANK_SIZE = BANK.length;

export type { BankQ, QType } from "./data-bank-core";
export * from "./data-bank-core";
export { VOCABULARY_QUESTIONS } from "./data-exam-vocabulary";
export { GRAMMAR_QUESTIONS } from "./data-exam-grammar";
export { CLOZE_QUESTIONS } from "./data-exam-cloze";
export { SENTENCE_QUESTIONS } from "./data-exam-sentence";
export { TRANSLATION_QUESTIONS } from "./data-exam-translation";
export { DIALOGUE_QUESTIONS } from "./data-exam-dialogue";
export { PARAGRAPH_QUESTIONS } from "./data-exam-paragraph";
export { READING_QUESTIONS } from "./data-exam-reading";

// Geriye dönük uyumluluk
export { PASSAGES, PASSAGES as PASSAGE_BANK_QUESTIONS } from "./data-bank-passages";
