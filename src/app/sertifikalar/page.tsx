"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CertificateLevel, UserCertificate } from "@/lib/certificates/types";
import { ALL_LEVELS, CERTIFICATE_DEFINITIONS } from "@/lib/certificates/data";
import { getUserCertificates, verifyCertificate, awardCertificate } from "@/lib/certificates/engine";
import { CertificateModal } from "@/components/certificates/CertificateModal";
import { LevelUpQuizModal } from "@/components/certificates/LevelUpQuizModal";
import { useAccount } from "@/lib/auth";

export default function CertificatesPage() {
  const { account } = useAccount();
  const userName = account?.name || "Dil Master Öğrencisi";

  const [certificates, setCertificates] = useState<UserCertificate[]>([]);
  const [selectedCert, setSelectedCert] = useState<UserCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const [activeQuizLevel, setActiveQuizLevel] = useState<CertificateLevel | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Verification Input State
  const [verifyCodeInput, setVerifyCodeInput] = useState("");
  const [verifyResult, setVerifyResult] = useState<{
    valid: boolean;
    cert?: UserCertificate;
    message: string;
  } | null>(null);

  useEffect(() => {
    // Load earned certificates from local storage
    const loaded = getUserCertificates();
    setCertificates(loaded);
  }, []);

  const refreshCertificates = () => {
    const loaded = getUserCertificates();
    setCertificates(loaded);
  };

  const handleOpenCertificate = (cert: UserCertificate) => {
    setSelectedCert(cert);
    setIsCertModalOpen(true);
  };

  const handleStartQuiz = (level: CertificateLevel) => {
    setActiveQuizLevel(level);
    setIsQuizModalOpen(true);
  };

  const handleCertificateEarned = (newCert: UserCertificate) => {
    refreshCertificates();
    setSelectedCert(newCert);
    setIsCertModalOpen(true);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyCodeInput.trim()) return;
    const result = verifyCertificate(verifyCodeInput);
    setVerifyResult(result);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/ilerleme" className="hover:text-cyan-400 transition-colors">İlerleme</Link>
          <span>/</span>
          <span className="text-cyan-300 font-semibold">Resmi Başarı Sertifikaları</span>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-6 sm:p-10 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <span>🏅</span> Uluslararası CEFR Standartlarında Doğrulanabilir Belgeler
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              DİL MASTER Seviye & Bitirme Sertifikaları
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Her dil düzeyini (A1’den C2’ye) başarıyla tamamladığında veya seviye bitirme sınavını geçtiğinde,
              üzerinde sana özel doğrulama kodu, karekod ve akademik onay mührü bulunan renkli A4 diplomana anında sahip ol!
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-700/50">
                <span className="text-emerald-400">✓</span> Kalıcı Kayıtlı
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-700/50">
                <span className="text-cyan-400">✓</span> Yüksek Çözünürlüklü PDF
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-700/50">
                <span className="text-amber-400">✓</span> QR & Kod Doğrulama
              </div>
            </div>
          </div>
        </div>

        {/* Verification Check Section */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔍</span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">Sertifika Doğrulama Sistemi</h2>
              <p className="text-xs text-slate-400">
                Herhangi bir YDS Master sertifikasının geçerliliğini ve kime ait olduğunu sorgulayın.
              </p>
            </div>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Örn: YDS-CERT-A1-SIN7X9-2026"
              value={verifyCodeInput}
              onChange={(e) => setVerifyCodeInput(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono uppercase"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shrink-0"
            >
              Doğrula & Sorgula
            </button>
          </form>

          {verifyResult && (
            <div
              className={`p-4 rounded-2xl border text-sm transition-all ${
                verifyResult.valid
                  ? "bg-emerald-950/40 border-emerald-600/50 text-emerald-200"
                  : "bg-rose-950/40 border-rose-600/50 text-rose-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{verifyResult.valid ? "✅" : "⚠️"}</span>
                <div className="space-y-1">
                  <div className="font-bold">{verifyResult.message}</div>
                  {verifyResult.cert && (
                    <div className="text-xs text-slate-300 pt-1">
                      Öğrenci: <strong className="text-white">{verifyResult.cert.recipientName}</strong> | Seviye:{" "}
                      <strong className="text-amber-300">{verifyResult.cert.level}</strong> | Düzenleme:{" "}
                      {new Date(verifyResult.cert.issueDate).toLocaleDateString("tr-TR")}
                      <button
                        onClick={() => handleOpenCertificate(verifyResult.cert!)}
                        className="ml-3 text-cyan-400 hover:underline font-semibold"
                      >
                        Sertifikayı Aç →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Levels Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📚</span> Tüm Seviye Sertifikaları (A1 - C2)
            </h2>
            <span className="text-xs text-slate-400">
              Kazanılan: <strong className="text-cyan-400">{certificates.length}</strong> / 6 Sertifika
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_LEVELS.map((level) => {
              const def = CERTIFICATE_DEFINITIONS[level];
              const earnedCert = certificates.find((c) => c.level === level);

              return (
                <div
                  key={level}
                  className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    earnedCert
                      ? "bg-slate-900/90 border-amber-500/50 shadow-lg shadow-amber-500/10"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {/* Badge & Level Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{def.badgeEmoji}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          earnedCert
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {earnedCert ? "Kazanıldı 🎉" : "Kilitli 🔒"}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                        CEFR {level} • {def.subtitle}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {def.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                        {def.descriptionTr}
                      </p>
                    </div>

                    {/* Requirements or Score */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs space-y-1.5 text-slate-300">
                      {earnedCert ? (
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Başarı Puanı:</span>
                            <span className="font-bold text-emerald-400">%{earnedCert.scorePercent}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Düzenlenme:</span>
                            <span className="text-slate-200">
                              {new Date(earnedCert.issueDate).toLocaleDateString("tr-TR")}
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-cyan-300 truncate">
                            {earnedCert.verificationCode}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Gereken Kelime:</span>
                            <span>{def.requirements.minWords}+ Kelime</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Sınav Barajı:</span>
                            <span className="text-amber-400">%{def.requirements.examPassingScore} Doğru</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60">
                    {earnedCert ? (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleOpenCertificate(earnedCert)}
                          className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl transition-colors text-center"
                        >
                          👁️ Görüntüle
                        </button>
                        <button
                          onClick={() => handleOpenCertificate(earnedCert)}
                          className="px-3 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md text-center"
                        >
                          📄 PDF İndir
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStartQuiz(level)}
                        className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        <span>📝</span> Seviye Sınavına Gir & Kazan
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certificate Full Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      {/* Level-Up Challenge Quiz Modal */}
      {activeQuizLevel && (
        <LevelUpQuizModal
          level={activeQuizLevel}
          userName={userName}
          isOpen={isQuizModalOpen}
          onClose={() => {
            setIsQuizModalOpen(false);
            setActiveQuizLevel(null);
          }}
          onCertificateEarned={handleCertificateEarned}
        />
      )}
    </div>
  );
}
