// ============================================================
// src/lib/certificates/types.ts
// YDS Master — Seviye Atlama & Bitirme Sertifikası Tipleri
// ============================================================

export type CertificateLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface LevelRequirement {
  minXp: number;
  minWords: number;
  minGrammar: number;
  examPassingScore: number; // Yüzde olarak (örn. 70)
}

export interface CertificateDefinition {
  level: CertificateLevel;
  title: string;
  subtitle: string;
  cefrRank: string;
  badgeEmoji: string;
  theme: {
    border: string;
    accent: string;
    badgeBg: string;
    textGradient: string;
    sealColor: string;
  };
  skillsLearned: string[];
  requirements: LevelRequirement;
  descriptionTr: string;
}

export interface UserCertificate {
  id: string; // örn: YDS-CERT-A1-7X92-2026
  level: CertificateLevel;
  title: string;
  recipientName: string;
  issueDate: string; // ISO string
  scorePercent: number;
  verificationCode: string;
  earnedVia: "exam" | "progress" | "assessment";
  skills: string[];
}

export interface LevelUpQuizQuestion {
  id: string;
  stem: string;
  options: string[];
  answer: number;
  explanation: string;
}
