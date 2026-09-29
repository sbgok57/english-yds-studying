// ============================================================
// src/lib/progress/calculator.ts
// YDS Master — Öğrenci İlerleme & Yüzdelik Hesaplama Motoru
// ============================================================

export const PROGRESS_TARGETS = {
  TOTAL_WORDS: 485,
  TOTAL_GRAMMAR_TOPICS: 20,
  TOTAL_TACTICS: 11,
  TARGET_QUESTIONS: 500,
  TARGET_EXAMS: 5,
} as const;

export interface ProgressBreakdown {
  overallPercent: number; // 0 to 100
  milestoneTitle: string;
  milestoneEmoji: string;
  milestoneMessage: string;
  vocabulary: {
    learned: number;
    total: number;
    percent: number;
  };
  grammar: {
    completed: number;
    total: number;
    percent: number;
  };
  tactics: {
    completed: number;
    total: number;
    percent: number;
  };
  practice: {
    questionsSolved: number;
    examsTaken: number;
    percent: number;
  };
}

export function getProgressMilestone(percent: number): { title: string; emoji: string; message: string } {
  if (percent >= 100) {
    return {
      title: "YDS Efsanesi",
      emoji: "👑",
      message: "Tüm müfredatı başarıyla tamamladın! Artık sınava tam hazır durumdasın.",
    };
  }
  if (percent >= 75) {
    return {
      title: "Hedefe Çeyrek Kaldı",
      emoji: "🚀",
      message: "Harika bir ilerleme! Son düzlükte netlerini zirveye taşıyorsun.",
    };
  }
  if (percent >= 50) {
    return {
      title: "Yarı Maraton Aşıldı",
      emoji: "⚡",
      message: "Yolun yarısını geride bıraktın! Temel çok sağlam, hız kesmeden devam.",
    };
  }
  if (percent >= 25) {
    return {
      title: "İvme Yakalandı",
      emoji: "🔥",
      message: "Çalışma ritmini yakaladın! Düzenli tekrarla başarı kaçınılmaz.",
    };
  }
  if (percent >= 10) {
    return {
      title: "Temel Atılıyor",
      emoji: "🌱",
      message: "İlk adımlar başarıyla atıldı! Her gün biraz daha ileriye.",
    };
  }
  return {
    title: "Yolculuk Başlıyor",
    emoji: "🧭",
    message: "İlk kelimelerini öğren, gramer konularını keşfet ve yüzdeliğini artır!",
  };
}

/**
 * Öğrencinin kelime, gramer, taktik ve soru çözme verilerinden
 * genel YDS hazırlık ilerleme yüzdesini (%0 - %100) hesaplar.
 */
export function calculateStudentProgress(input: {
  wordsLearned?: number;
  grammarCompleted?: number;
  tacticsCompleted?: number;
  questionsSolved?: number;
  examsTaken?: number;
}): ProgressBreakdown {
  const wordsLearned = Math.max(0, input.wordsLearned || 0);
  const grammarCompleted = Math.max(0, input.grammarCompleted || 0);
  const tacticsCompleted = Math.max(0, input.tacticsCompleted || 0);
  const questionsSolved = Math.max(0, input.questionsSolved || 0);
  const examsTaken = Math.max(0, input.examsTaken || 0);

  // 1. Kelime Ustalığı (%): 485 akademik kelime hedefi
  const vocabPct = Math.min(100, Math.round((wordsLearned / PROGRESS_TARGETS.TOTAL_WORDS) * 100));

  // 2. Gramer Konuları (%): 20 YDS konusu
  const grammarPct = Math.min(100, Math.round((grammarCompleted / PROGRESS_TARGETS.TOTAL_GRAMMAR_TOPICS) * 100));

  // 3. Soru Çözüm Taktikleri (%): 11 YDS taktiği
  const tacticsPct = Math.min(100, Math.round((tacticsCompleted / PROGRESS_TARGETS.TOTAL_TACTICS) * 100));

  // 4. Pratik & Soru Çözümü (%): 500 soru (%70) + 5 deneme (%30)
  const qRatio = Math.min(1, questionsSolved / PROGRESS_TARGETS.TARGET_QUESTIONS);
  const examRatio = Math.min(1, examsTaken / PROGRESS_TARGETS.TARGET_EXAMS);
  const practicePct = Math.min(100, Math.round((qRatio * 0.7 + examRatio * 0.3) * 100));

  // 5. Genel YDS Hazırlık Yüzdesi: Ağırlıklı birleşim
  // Kelime: %35, Gramer: %30, Taktik: %15, Pratik: %20
  const weighted = (vocabPct * 0.35) + (grammarPct * 0.30) + (tacticsPct * 0.15) + (practicePct * 0.20);
  const overallPercent = Math.min(100, Math.round(weighted));

  const milestone = getProgressMilestone(overallPercent);

  return {
    overallPercent,
    milestoneTitle: milestone.title,
    milestoneEmoji: milestone.emoji,
    milestoneMessage: milestone.message,
    vocabulary: {
      learned: wordsLearned,
      total: PROGRESS_TARGETS.TOTAL_WORDS,
      percent: vocabPct,
    },
    grammar: {
      completed: grammarCompleted,
      total: PROGRESS_TARGETS.TOTAL_GRAMMAR_TOPICS,
      percent: grammarPct,
    },
    tactics: {
      completed: tacticsCompleted,
      total: PROGRESS_TARGETS.TOTAL_TACTICS,
      percent: tacticsPct,
    },
    practice: {
      questionsSolved,
      examsTaken,
      percent: practicePct,
    },
  };
}
