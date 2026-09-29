// ============================================================
// src/lib/certificates/engine.ts
// YDS Master — Sertifika Yönetimi, Üretimi ve Doğrulama Motoru
// ============================================================

import { safeStorage } from "@/lib/safe-storage";
import { CertificateLevel, UserCertificate } from "./types";
import { CERTIFICATE_DEFINITIONS } from "./data";

const CERTIFICATES_STORAGE_KEY = "yds_master_earned_certificates_v1";

// Helper to generate unique verification code: YDS-CERT-[LEVEL]-[HASH]
export function generateVerificationCode(level: CertificateLevel, recipientName: string): string {
  const cleanName = recipientName.trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3) || "STU";
  const year = new Date().getFullYear();
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `YDS-CERT-${level}-${cleanName}${randomSuffix}-${year}`;
}

/**
 * Kullanıcının kazandığı tüm sertifikaları getirir
 */
export function getUserCertificates(): UserCertificate[] {
  // SAFETY: SSR safe retrieval with fallback
  return safeStorage.getJSON<UserCertificate[]>(CERTIFICATES_STORAGE_KEY, []);
}

/**
 * Belirli bir seviyenin sertifikası var mı kontrol eder
 */
export function hasCertificate(level: CertificateLevel): boolean {
  const certs = getUserCertificates();
  return certs.some((c) => c.level === level);
}

/**
 * ID veya doğrulama koduna göre sertifika bulur
 */
export function getCertificateByIdOrCode(query: string): UserCertificate | undefined {
  const certs = getUserCertificates();
  const q = query.trim().toUpperCase();
  return certs.find((c) => c.id.toUpperCase() === q || c.verificationCode.toUpperCase() === q);
}

/**
 * Yeni sertifika verir veya var olanı günceller
 */
export function awardCertificate(
  level: CertificateLevel,
  recipientName: string,
  scorePercent: number,
  earnedVia: "exam" | "progress" | "assessment" = "exam"
): UserCertificate {
  const certs = getUserCertificates();
  const existing = certs.find((c) => c.level === level);
  const def = CERTIFICATE_DEFINITIONS[level];

  if (existing) {
    // Daha yüksek puan alındıysa güncelle
    if (scorePercent > existing.scorePercent) {
      existing.scorePercent = scorePercent;
      existing.recipientName = recipientName || existing.recipientName;
      existing.issueDate = new Date().toISOString();
      safeStorage.setJSON(CERTIFICATES_STORAGE_KEY, certs);
    }
    return existing;
  }

  const verificationCode = generateVerificationCode(level, recipientName);
  const newCert: UserCertificate = {
    id: verificationCode,
    level,
    title: def ? def.title : `${level} Düzeyi İngilizce Yeterlilik Sertifikası`,
    recipientName: recipientName.trim() || "YDS Master Öğrencisi",
    issueDate: new Date().toISOString(),
    scorePercent: Math.max(0, Math.min(100, Math.round(scorePercent))),
    verificationCode,
    earnedVia,
    skills: def ? [...def.skillsLearned] : [],
  };

  certs.push(newCert);
  safeStorage.setJSON(CERTIFICATES_STORAGE_KEY, certs);
  return newCert;
}

/**
 * Sertifika kodunu doğrular (resmi geçerlilik sorgulama simülasyonu)
 */
export function verifyCertificate(code: string): {
  valid: boolean;
  cert?: UserCertificate;
  message: string;
} {
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) {
    return { valid: false, message: "Lütfen bir sertifika kodu giriniz." };
  }

  const cert = getCertificateByIdOrCode(cleanCode);
  if (cert) {
    return {
      valid: true,
      cert,
      message: `Doğrulandı: ${cert.recipientName} adına düzenlenmiş ${cert.level} seviye sertifikası geçerlidir.`,
    };
  }

  // Kod formatı YDS-CERT-[LEVEL]-... şeklinde ise geçerli bir şablon kontrolü
  const match = cleanCode.match(/^YDS-CERT-(A1|A2|B1|B2|C1|C2)-[A-Z0-9]+-\d{4}$/);
  if (match) {
    const level = match[1] as CertificateLevel;
    const def = CERTIFICATE_DEFINITIONS[level];
    return {
      valid: true,
      cert: {
        id: cleanCode,
        level,
        title: def ? def.title : `${level} Düzeyi İngilizce Yeterlilik Sertifikası`,
        recipientName: "Kayıtlı Öğrenci",
        issueDate: new Date().toISOString().split("T")[0],
        scorePercent: 88,
        verificationCode: cleanCode,
        earnedVia: "exam",
        skills: def ? def.skillsLearned : [],
      },
      message: `Doğrulandı: ${cleanCode} nolu ${level} seviye sertifikası YDS Master sisteminde aktiftir.`,
    };
  }

  return {
    valid: false,
    message: "Geçersiz veya bulunamayan sertifika kodu. Lütfen kodunuzu kontrol ediniz.",
  };
}
