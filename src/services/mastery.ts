export interface MasteryEvidence {
  recognitionAccuracy: number; // 0 to 1
  recallAccuracy: number; // 0 to 1
  reverseRecallAccuracy: number; // 0 to 1
  contextualAccuracy: number; // 0 to 1
  synonymKnowledge: number; // 0 to 1
  antonymKnowledge: number; // 0 to 1
  collocationKnowledge: number; // 0 to 1
  spellingAccuracy: number; // 0 to 1
  recentAccuracy: number; // 0 to 1 (last 5 attempts)
  historicalAccuracy: number; // 0 to 1 (all attempts)
  consecutiveCorrect: number; // integer count
  delayedRecallPassed: boolean; // reviewed after >= 3 days
}

export interface MasteryLevelInfo {
  score: number;
  labelEn: string;
  labelTr: string;
  colorClass: string;
  descriptionEn: string;
  descriptionTr: string;
}

/**
 * Calculates deterministic multi-evidence mastery score clamped strictly between 0 and 100.
 * Eliminates NaN, Infinity, and negative values.
 */
export function calculateMastery(evidence: Partial<MasteryEvidence>): number {
  const safeNumber = (val: number | undefined, defaultVal = 0): number => {
    if (val === undefined || isNaN(val) || !isFinite(val)) return defaultVal;
    return Math.max(0, Math.min(1, val));
  };

  const recognition = safeNumber(evidence.recognitionAccuracy, 0) * 15;
  const recall = safeNumber(evidence.recallAccuracy, 0) * 20;
  const reverseRecall = safeNumber(evidence.reverseRecallAccuracy, 0) * 10;
  const context = safeNumber(evidence.contextualAccuracy, 0) * 15;
  const synonyms = safeNumber(evidence.synonymKnowledge, 0) * 5;
  const collocations = safeNumber(evidence.collocationKnowledge, 0) * 5;
  const spelling = safeNumber(evidence.spellingAccuracy, 0) * 5;
  const recent = safeNumber(evidence.recentAccuracy, 0) * 10;
  const historical = safeNumber(evidence.historicalAccuracy, 0) * 5;

  const streak = Math.min(5, Math.max(0, evidence.consecutiveCorrect || 0)) * 1.5; // up to 7.5
  const delayedBonus = evidence.delayedRecallPassed ? 2.5 : 0;

  const rawTotal =
    recognition +
    recall +
    reverseRecall +
    context +
    synonyms +
    collocations +
    spelling +
    recent +
    historical +
    streak +
    delayedBonus;

  if (isNaN(rawTotal) || !isFinite(rawTotal)) {
    return 0;
  }

  return Math.round(Math.max(0, Math.min(100, rawTotal)));
}

export function getMasteryLevelInfo(mastery: number): MasteryLevelInfo {
  const score = Math.max(0, Math.min(100, isNaN(mastery) ? 0 : mastery));

  if (score < 20) {
    return {
      score,
      labelEn: 'New',
      labelTr: 'Yeni Başlanan',
      colorClass: 'text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-300',
      descriptionEn: 'First encounter with this vocabulary item.',
      descriptionTr: 'Kelime henüz hafıza sürecinin başında.',
    };
  }

  if (score < 40) {
    return {
      score,
      labelEn: 'Familiar',
      labelTr: 'Aşina',
      colorClass: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300',
      descriptionEn: 'Recognized in simple matching and prompts.',
      descriptionTr: 'Temel seçeneklerde tanınabiliyor.',
    };
  }

  if (score < 60) {
    return {
      score,
      labelEn: 'Learning',
      labelTr: 'Öğrenilmekte',
      colorClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300',
      descriptionEn: 'Active recall developing across standard questions.',
      descriptionTr: 'Aktif hatırlama ve soru çözümü gelişiyor.',
    };
  }

  if (score < 80) {
    return {
      score,
      labelEn: 'Strong',
      labelTr: 'Güçlü Hafıza',
      colorClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300',
      descriptionEn: 'Reliable recall in context and sentence completion.',
      descriptionTr: 'Cümle ve bağlam içerisinde güvenilir hatırlama.',
    };
  }

  if (score < 95) {
    return {
      score,
      labelEn: 'Very Strong',
      labelTr: 'Çok Güçlü',
      colorClass: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300',
      descriptionEn: 'Consistent across synonyms, spelling, and reverse recall.',
      descriptionTr: 'Eşanlam, yazım ve ters hatırlamada yüksek başarı.',
    };
  }

  return {
    score,
    labelEn: 'Mastered for now',
    labelTr: 'Şimdilik Ustalaşıldı',
    colorClass: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-300',
    descriptionEn: 'Retained over extended intervals and complex exam contexts.',
    descriptionTr: 'Uzun aralıklarla ve sınav bağlamında başarıyla korundu.',
  };
}
