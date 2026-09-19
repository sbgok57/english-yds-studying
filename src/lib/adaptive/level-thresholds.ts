// Centralized, testable CEFR Level Threshold Configuration and Evaluation Engine

import { CefrLevel, SkillType } from "../data-level-test";

export interface LevelThreshold {
  level: CefrLevel;
  prerequisiteAccuracy: number;
  ownLevelAccuracy: number;
  requiredSkillCount: number;
  minimumSkillAccuracy: number;
  minReadingAccuracy?: number;
  minGrammarAccuracy?: number;
}

export const LEVEL_THRESHOLDS: Record<CefrLevel, LevelThreshold> = {
  A1: {
    level: "A1",
    prerequisiteAccuracy: 0,
    ownLevelAccuracy: 55,
    requiredSkillCount: 1,
    minimumSkillAccuracy: 40,
  },
  A2: {
    level: "A2",
    prerequisiteAccuracy: 70, // A1 prerequisite
    ownLevelAccuracy: 55,
    requiredSkillCount: 2,
    minimumSkillAccuracy: 45,
  },
  B1: {
    level: "B1",
    prerequisiteAccuracy: 70, // A1/A2 prerequisite
    ownLevelAccuracy: 60,
    requiredSkillCount: 2,
    minimumSkillAccuracy: 50,
    minGrammarAccuracy: 50,
  },
  B2: {
    level: "B2",
    prerequisiteAccuracy: 70, // B1 prerequisite
    ownLevelAccuracy: 60,
    requiredSkillCount: 2,
    minimumSkillAccuracy: 55,
    minReadingAccuracy: 50,
  },
  C1: {
    level: "C1",
    prerequisiteAccuracy: 70, // B2 prerequisite
    ownLevelAccuracy: 65,
    requiredSkillCount: 3,
    minimumSkillAccuracy: 60,
    minReadingAccuracy: 60,
    minGrammarAccuracy: 60,
  },
  C2: {
    level: "C2",
    prerequisiteAccuracy: 75, // C1 prerequisite
    ownLevelAccuracy: 70,
    requiredSkillCount: 3,
    minimumSkillAccuracy: 65,
    minReadingAccuracy: 65,
  },
};

export interface LevelEvaluationInput {
  levelAccuracy: Record<CefrLevel, number>; // Percentage (0-100) per level
  skillAccuracy: Record<SkillType, number>; // Percentage (0-100) per skill
  emptyCount: number;
  totalQuestions: number;
}

export interface EvaluatedCefrLevel {
  level: CefrLevel;
  levelBand: string;
  confidence: "high" | "medium" | "low";
  borderNote?: string;
  suggestValidation: boolean;
}

/**
 * Determines estimated CEFR level using structured threshold criteria,
 * avoiding naive correct-count formulas and checking prerequisite foundations.
 */
export function evaluateCefrLevel(input: LevelEvaluationInput): EvaluatedCefrLevel {
  const { levelAccuracy, skillAccuracy, emptyCount, totalQuestions } = input;

  const a1Acc = levelAccuracy.A1 || 0;
  const a2Acc = levelAccuracy.A2 || 0;
  const b1Acc = levelAccuracy.B1 || 0;
  const b2Acc = levelAccuracy.B2 || 0;
  const c1Acc = levelAccuracy.C1 || 0;
  const c2Acc = levelAccuracy.C2 || 0;

  const grammarAcc = skillAccuracy.grammar || 0;
  const readingAcc = skillAccuracy.reading || 0;

  // Check C2
  const c2Criteria =
    c1Acc >= LEVEL_THRESHOLDS.C2.prerequisiteAccuracy &&
    c2Acc >= LEVEL_THRESHOLDS.C2.ownLevelAccuracy &&
    readingAcc >= (LEVEL_THRESHOLDS.C2.minReadingAccuracy || 0) &&
    b2Acc >= 65;

  if (c2Criteria) {
    const isHighConf = c2Acc >= 85 && c1Acc >= 85;
    return {
      level: "C2",
      levelBand: "C2 (Zirve Seviye)",
      confidence: isHighConf ? "high" : "medium",
      suggestValidation: !isHighConf,
    };
  }

  // Check C1
  const c1Criteria =
    b2Acc >= LEVEL_THRESHOLDS.C1.prerequisiteAccuracy &&
    c1Acc >= LEVEL_THRESHOLDS.C1.ownLevelAccuracy &&
    readingAcc >= (LEVEL_THRESHOLDS.C1.minReadingAccuracy || 0) &&
    grammarAcc >= (LEVEL_THRESHOLDS.C1.minGrammarAccuracy || 0);

  if (c1Criteria) {
    const isBorder = c2Acc >= 50;
    return {
      level: "C1",
      levelBand: isBorder ? "C1–C2" : "C1",
      confidence: c1Acc >= 80 ? "high" : "medium",
      borderNote: isBorder ? "C1–C2 sınırındasın! Akademik nüanslar ve süre optimizasyonu ile C2'ye ulaşabilirsin." : undefined,
      suggestValidation: isBorder,
    };
  }

  // Check B2
  const b2Criteria =
    b1Acc >= LEVEL_THRESHOLDS.B2.prerequisiteAccuracy &&
    b2Acc >= LEVEL_THRESHOLDS.B2.ownLevelAccuracy &&
    readingAcc >= (LEVEL_THRESHOLDS.B2.minReadingAccuracy || 0);

  if (b2Criteria) {
    const isBorder = c1Acc >= 50;
    return {
      level: "B2",
      levelBand: isBorder ? "B2–C1" : "B2",
      confidence: b2Acc >= 75 ? "high" : "medium",
      borderNote: isBorder ? "B2–C1 sınırındasın! İleri gramer ve akademik reading ile C1 seviyesine sıçrayabilirsin." : undefined,
      suggestValidation: isBorder,
    };
  }

  // Check B1
  const b1Criteria =
    ((a1Acc + a2Acc) / 2) >= LEVEL_THRESHOLDS.B1.prerequisiteAccuracy &&
    b1Acc >= LEVEL_THRESHOLDS.B1.ownLevelAccuracy &&
    grammarAcc >= (LEVEL_THRESHOLDS.B1.minGrammarAccuracy || 0);

  if (b1Criteria) {
    const isBorder = b2Acc >= 50;
    return {
      level: "B1",
      levelBand: isBorder ? "B1–B2" : "B1",
      confidence: b1Acc >= 75 ? "high" : "medium",
      borderNote: isBorder ? "B1–B2 sınırındasın! Perfect zamanlar ve bağlaç tekrarı ile B2 çok yakın." : undefined,
      suggestValidation: isBorder,
    };
  }

  // Check A2
  const a2Criteria =
    a1Acc >= LEVEL_THRESHOLDS.A2.prerequisiteAccuracy &&
    a2Acc >= LEVEL_THRESHOLDS.A2.ownLevelAccuracy;

  if (a2Criteria) {
    const isBorder = b1Acc >= 45;
    return {
      level: "A2",
      levelBand: isBorder ? "A2–B1" : "A2",
      confidence: a2Acc >= 75 ? "high" : "medium",
      borderNote: isBorder ? "A2–B1 sınırındasın! Düzenli kelime çalışması seni B1'e taşıyacaktır." : undefined,
      suggestValidation: isBorder,
    };
  }

  // Fallback A1
  const isA1Border = a2Acc >= 40;
  const isA1Conf = a1Acc >= LEVEL_THRESHOLDS.A1.ownLevelAccuracy;
  return {
    level: "A1",
    levelBand: isA1Border ? "A1–A2" : "A1",
    confidence: isA1Conf ? "medium" : "low",
    borderNote: isA1Border ? "A1–A2 sınırındasın! Temel gramer kalıplarını pekiştir." : undefined,
    suggestValidation: !isA1Conf,
  };
}
