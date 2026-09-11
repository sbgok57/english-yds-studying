import {
  YdsQuestion,
  YdsQuestionCategory,
  OFFICIAL_YDS_SECTIONS,
  ALL_PRACTICE_CATEGORIES,
} from '../types/yds';
import { COMPREHENSIVE_YDS_QUESTION_BANK } from '../data/ydsQuestionBank';

/**
 * High-yield, authentic academic question pool for all 15 YDS/YDT modules.
 * Populated from the comprehensive deduplicated question bank.
 */
export const MODULE_PRACTICE_BANK: Record<YdsQuestionCategory, YdsQuestion[]> = {
  vocabulary: [],
  grammar: [],
  cloze: [],
  sentence_completion: [],
  translation: [],
  reading: [],
  dialogue: [],
  restatement: [],
  paragraph_completion: [],
  irrelevant_sentence: [],
  connector: [],
  preposition: [],
  tense: [],
  relative_clause: [],
  modal: [],
};

// Populate 580+ questions into their respective categories
COMPREHENSIVE_YDS_QUESTION_BANK.forEach((q) => {
  if (MODULE_PRACTICE_BANK[q.category]) {
    MODULE_PRACTICE_BANK[q.category].push(q);
  }
});

/**
 * Returns practice questions for a given module category.
 */
export function getQuestionsForModule(category: YdsQuestionCategory): YdsQuestion[] {
  return MODULE_PRACTICE_BANK[category] || [];
}

/**
 * Returns section configuration for UI rendering.
 * Checks ALL_PRACTICE_CATEGORIES first (supporting all 15 categories),
 * and falls back to OFFICIAL_YDS_SECTIONS.
 */
export function getModuleConfig(category: YdsQuestionCategory) {
  const practiceConfig = ALL_PRACTICE_CATEGORIES.find((s) => s.category === category);
  if (practiceConfig) {
    return {
      category: practiceConfig.category,
      nameTr: practiceConfig.nameTr,
      nameEn: practiceConfig.nameEn,
      questionCount: practiceConfig.targetCount,
      questionRange: [1, practiceConfig.targetCount] as [number, number],
      descriptionTr: practiceConfig.descriptionTr,
    };
  }
  return OFFICIAL_YDS_SECTIONS.find((s) => s.category === category) || OFFICIAL_YDS_SECTIONS[0];
}
