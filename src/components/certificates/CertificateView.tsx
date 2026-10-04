"use client";

import React, { useRef, useState, useCallback } from "react";
import { UserCertificate } from "@/lib/certificates/types";
import { CERTIFICATE_DEFINITIONS } from "@/lib/certificates/data";
import { Download, Printer, X, ShieldCheck, CheckCircle2, Sparkles, Award } from "lucide-react";

interface CertificateViewProps {
  cert: UserCertificate;
  onClose?: () => void;
  showPrintButton?: boolean;
}

// Canlı, zengin ve göz alıcı CEFR renk paleti & tasarım konfigürasyonu
const CEFR_PALETTE: Record<
  string,
  {
    label: string;
    bandTr: string;
    bandEn: string;
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
    borderGradient: string;
    sealGradient: string;
    watermarkColor: string;
  }
> = {
  A1: {
    label: "A1 — Breakthrough",
    bandTr: "Başlangıç Seviyesi (Elementary)",
    bandEn: "Foundations & Core Vocabulary",
    primary: "#059669",
    secondary: "#0d9488",
    accent: "#34d399",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)",
    borderGradient: "linear-gradient(135deg, #059669, #34d399, #10b981, #059669)",
    sealGradient: "conic-gradient(#059669, #34d399, #fbbf24, #059669)",
    watermarkColor: "#10b981",
  },
  A2: {
    label: "A2 — Waystage",
    bandTr: "Temel Seviye (Pre-Intermediate)",
    bandEn: "Grammar Framework & Reading Basics",
    primary: "#65a30d",
    secondary: "#16a34a",
    accent: "#a3e635",
    bgGradient: "linear-gradient(135deg, #f7fee7 0%, #ffffff 50%, #f0fdf4 100%)",
    borderGradient: "linear-gradient(135deg, #65a30d, #a3e635, #84cc16, #65a30d)",
    sealGradient: "conic-gradient(#65a30d, #a3e635, #f59e0b, #65a30d)",
    watermarkColor: "#84cc16",
  },
  B1: {
    label: "B1 — Threshold",
    bandTr: "Orta Düzey (Intermediate)",
    bandEn: "Academic English & Paragraph Analysis",
    primary: "#0284c7",
    secondary: "#2563eb",
    accent: "#38bdf8",
    bgGradient: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #eff6ff 100%)",
    borderGradient: "linear-gradient(135deg, #0284c7, #38bdf8, #3b82f6, #0284c7)",
    sealGradient: "conic-gradient(#0284c7, #38bdf8, #f59e0b, #0284c7)",
    watermarkColor: "#0284c7",
  },
  B2: {
    label: "B2 — Vantage",
    bandTr: "Üst-Orta Seviye (Upper-Intermediate)",
    bandEn: "YDS / YDT Core Competence & Inversions",
    primary: "#7c3aed",
    secondary: "#9333ea",
    accent: "#c084fc",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #fdf4ff 100%)",
    borderGradient: "linear-gradient(135deg, #7c3aed, #c084fc, #a855f7, #7c3aed)",
    sealGradient: "conic-gradient(#7c3aed, #c084fc, #fbbf24, #7c3aed)",
    watermarkColor: "#7c3aed",
  },
  C1: {
    label: "C1 — Effective Operational Proficiency",
    bandTr: "İleri Akademik Düzey (Advanced)",
    bandEn: "Advanced Collocations & Complex Reading",
    primary: "#d97706",
    secondary: "#ea580c",
    accent: "#fbbf24",
    bgGradient: "linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fefce8 100%)",
    borderGradient: "linear-gradient(135deg, #d97706, #fbbf24, #f59e0b, #d97706)",
    sealGradient: "conic-gradient(#d97706, #fbbf24, #ea580c, #d97706)",
    watermarkColor: "#d97706",
  },
  C2: {
    label: "C2 — Mastery",
    bandTr: "Ustalık Seviyesi (Mastery / Proficiency)",
    bandEn: "Near-Native Mastery & Full Exam Fluency",
    primary: "#e11d48",
    secondary: "#be123c",
    accent: "#fda4af",
    bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffffff 50%, #fdf2f8 100%)",
    borderGradient: "linear-gradient(135deg, #e11d48, #fda4af, #f43f5e, #e11d48)",
    sealGradient: "conic-gradient(#e11d48, #fda4af, #f59e0b, #e11d48)",
    watermarkColor: "#e11d48",
  },
};

export function CertificateView({ cert, onClose, showPrintButton = true }: CertificateViewProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const def = CERTIFICATE_DEFINITIONS[cert.level];
  const palette = CEFR_PALETTE[cert.level] || CEFR_PALETTE["B1"];

  const formattedDate = new Date(cert.issueDate).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const issueDateEn = new Date(cert.issueDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // // SAFETY: Sıfır hata ile retina kalitesinde PDF üretimi ve güvenli fallback
  const handleDownloadPDF = useCallback(async () => {
    if (!certRef.current || downloading) return;
    setDownloading(true);
    setErrorMsg(null);
    setDownloadSuccess(false);

    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      // Optimized scale: 2 for crisp vector-like output without GPU buffer crash
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 1123,
        windowHeight: 794,
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();

      const imgAspect = canvas.width / canvas.height;
      const pageAspect = pdfW / pdfH;
      let drawW = pdfW;
      let drawH = pdfH;
      if (imgAspect > pageAspect) {
        drawH = pdfW / imgAspect;
      } else {
        drawW = pdfH * imgAspect;
      }
      const offsetX = (pdfW - drawW) / 2;
      const offsetY = (pdfH - drawH) / 2;

      pdf.addImage(imgData, "PNG", offsetX, offsetY, drawW, drawH, undefined, "FAST");
      const fileName = `Dil-Master-${cert.level}-Sertifika-${cert.verificationCode}.pdf`;
      pdf.save(fileName);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err: any) {
      console.warn("Otomatik canvas indirme tarayıcı güvenliği sebebiyle print yönlendirmesi yapıyor:", err);
      // // SAFETY: Graceful degradation to lossless browser vector print
      setErrorMsg("PDF doğrudan yazdırıcı motoruna aktarıldı. 'PDF Olarak Kaydet'i seçebilirsiniz.");
      window.print();
    } finally {
      setDownloading(false);
    }
  }, [cert, downloading]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 text-slate-800">
      {/* ── Üst Eylem Kontrolleri (Baskıda Gizlenir) ─────────────────────────── */}
      {showPrintButton && (
        <div className="no-print mb-5 flex flex-wrap items-center justify-between gap-3 bg-slate-900/95 dark:bg-slate-950/95 light:bg-white backdrop-blur-xl p-4 rounded-2xl border border-amber-500/30 text-white light:text-slate-900 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏅</span>
            <div>
              <div className="font-black text-sm sm:text-base text-amber-300 light:text-amber-600 flex items-center gap-2">
                <span>DİL MASTER — {cert.level} CEFR Başarı Sertifikası</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-800 font-bold">
                  ✓ Uluslararası Geçerli
                </span>
              </div>
              <div className="text-xs text-slate-400 light:text-slate-600">
                Resmi Doğrulama Kodu:{" "}
                <span className="font-mono text-cyan-300 light:text-cyan-700 font-bold select-all">
                  {cert.verificationCode}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              title="Yüksek Çözünürlüklü A4 PDF İndir"
            >
              {downloading ? (
                <span className="animate-spin">⏳</span>
              ) : downloadSuccess ? (
                <span>✅</span>
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{downloading ? "PDF Hazırlanıyor..." : downloadSuccess ? "İndirildi!" : "PDF İndir (A4)"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-white light:text-slate-800 rounded-xl text-xs sm:text-sm font-bold transition-colors border border-white/10 light:border-slate-300 flex items-center gap-1.5"
              title="Baskı Önizleme ve Vektörel PDF Olarak Kaydet"
            >
              <Printer className="w-4 h-4 text-cyan-300 light:text-cyan-600" />
              <span>Vektörel Yazdır / PDF</span>
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="no-print mb-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 flex items-center gap-2">
          <span>ℹ️</span> {errorMsg}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          RESMİ A4 YATAY BAŞARI SERTİFİKASI (1123px × 794px Landscape)
          Her ekrana kusursuz oturur, baskıda ve PDF'te sıfır hata üretir
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex justify-center pb-4 rounded-3xl overflow-hidden shadow-2xl">
        <div
          ref={certRef}
          className="certificate-print-area w-full max-w-[1123px]"
          style={{
            width: "100%",
            maxWidth: "1123px",
            minHeight: "794px",
            margin: "0 auto",
            background: palette.bgGradient,
            fontFamily: "'Georgia', 'Times New Roman', serif",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            boxShadow: "0 32px 70px rgba(0,0,0,0.15), inset 0 0 140px rgba(217,119,6,0.05)",
          }}
        >
          {/* 1. Dış Altın Varak & Hologram Çerçeve */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              border: `4px solid ${palette.primary}`,
              borderRadius: "8px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "15px",
              border: `2px dashed ${palette.accent}`,
              borderRadius: "4px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "2px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* 2. Dört Köşe Kraliyet Rozetleri */}
          {[
            { top: "24px", left: "24px" },
            { top: "24px", right: "24px" },
            { bottom: "24px", left: "24px" },
            { bottom: "24px", right: "24px" },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...pos,
                width: "48px",
                height: "48px",
                background: `radial-gradient(circle, ${palette.primary}25 0%, transparent 70%)`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: `2.5px solid ${palette.primary}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                ✦
              </div>
            </div>
          ))}

          {/* 3. Filigran (Watermark) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Arial Black', sans-serif",
              fontWeight: 900,
              fontSize: "140px",
              color: palette.watermarkColor,
              opacity: 0.035,
              letterSpacing: "0.15em",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            CEFR {cert.level}
          </div>

          {/* 4. Ana Sertifika İçeriği */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              minHeight: "794px",
              padding: "clamp(24px, 4vw, 42px) clamp(24px, 5vw, 60px)",
              boxSizing: "border-box",
            }}
          >
            {/* ÜST BÖLÜM: Kurum Başlığı ve Amblemler */}
            <div style={{ textAlign: "center", paddingBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    boxShadow: `0 4px 15px ${palette.primary}40`,
                  }}
                >
                  🏛️
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
                      fontWeight: 900,
                      fontSize: "13px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: palette.primary,
                    }}
                  >
                    DİL MASTER AKADEMİK SINAV VE YETERLİLİK ENSTİTÜSÜ
                  </div>
                  <div
                    style={{
                      fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#78716c",
                      marginTop: "2px",
                      fontWeight: 600,
                    }}
                  >
                    Dil Master International Language & Exam Academy
                  </div>
                </div>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: `linear-gradient(135deg, ${palette.secondary}, ${palette.primary})`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    boxShadow: `0 4px 15px ${palette.secondary}40`,
                  }}
                >
                  🎓
                </div>
              </div>

              {/* Altın Çizgi Bölücü */}
              <div
                style={{
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${palette.primary}, ${palette.accent}, ${palette.primary}, transparent)`,
                  margin: "0 auto 12px",
                  width: "70%",
                  borderRadius: "2px",
                }}
              />

              {/* Sertifika Başlığı */}
              <h2
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontWeight: 900,
                  fontSize: "34px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#0f172a",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Uluslararası Başarı Sertifikası
              </h2>
              <div
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "#475569",
                  marginTop: "4px",
                  letterSpacing: "0.05em",
                }}
              >
                Certificate of Academic Excellence in English Language Proficiency
              </div>

              {/* CEFR Standart Rozeti */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "12px",
                  padding: "6px 20px",
                  background: "#ffffff",
                  border: `2px solid ${palette.primary}60`,
                  borderRadius: "30px",
                  boxShadow: `0 4px 15px ${palette.primary}20`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Arial', sans-serif",
                    fontWeight: 900,
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: palette.primary,
                  }}
                >
                  CEFR STANDARD:{" "}
                  <strong style={{ fontSize: "15px", color: palette.secondary }}>{cert.level}</strong>
                </span>
                <span style={{ color: "#94a3b8" }}>•</span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#334155",
                    fontWeight: 700,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {palette.bandTr}
                </span>
              </div>
            </div>

            {/* ORTA BÖLÜM: Sahip Bilgisi, Resmi Mühür ve Metrikler */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_160px_1fr] gap-6 items-center my-auto py-2">
              {/* Sol Sütun: Aday & Kazanım Beyanı */}
              <div>
                <p
                  style={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "#64748b",
                    textAlign: "center",
                    marginBottom: "6px",
                    fontWeight: 700,
                  }}
                >
                  Bu Sertifika Aşağıdaki Hak Sahibine Verilmiştir
                </p>
                <div
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 900,
                    fontSize: "28px",
                    color: "#0f172a",
                    textAlign: "center",
                    borderBottom: `2.5px solid ${palette.primary}`,
                    paddingBottom: "8px",
                    marginBottom: "12px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {cert.recipientName}
                </div>

                <p
                  style={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "11px",
                    color: "#334155",
                    lineHeight: 1.7,
                    textAlign: "center",
                  }}
                >
                  yukarıda adı geçen aday,{" "}
                  <strong style={{ color: palette.primary }}>
                    CEFR {cert.level} ({palette.bandTr})
                  </strong>{" "}
                  seviyesindeki yabancı dil yeterlilik, akademik kelime dağarcığı, gramer analizi ve sınav becerilerini
                  üstün başarı ile tamamlayarak bu uluslararası belgeyi almaya hak kazanmıştır.
                </p>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    fontSize: "10px",
                    color: "#64748b",
                    lineHeight: 1.6,
                    textAlign: "center",
                    marginTop: "6px",
                  }}
                >
                  The candidate has satisfied all curriculum requirements under the Common European Framework of
                  Reference for Languages at level {cert.level}.
                </p>

                {/* Yetkinlik Hapları */}
                {cert.skills && cert.skills.length > 0 && (
                  <div style={{ marginTop: "12px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center",
                      }}
                    >
                      {cert.skills.slice(0, 5).map((skill, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: "'Arial', sans-serif",
                            fontSize: "9px",
                            fontWeight: 700,
                            padding: "3px 10px",
                            background: "#ffffff",
                            border: `1px solid ${palette.primary}40`,
                            borderRadius: "12px",
                            color: "#1e293b",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                          }}
                        >
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Orta Sütun: Kabartmalı Resmi Mühür & Skor */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "135px",
                    height: "135px",
                    borderRadius: "50%",
                    background: palette.sealGradient,
                    padding: "5px",
                    boxShadow: `0 8px 30px ${palette.primary}45`,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, #fffbeb, #fefce8)`,
                      border: `3px solid ${palette.primary}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2px",
                      position: "relative",
                    }}
                  >
                    <span style={{ fontSize: "26px" }}>{def?.badgeEmoji || "🏅"}</span>
                    <span
                      style={{
                        fontFamily: "'Arial Black', sans-serif",
                        fontWeight: 900,
                        fontSize: "18px",
                        color: palette.primary,
                        letterSpacing: "0.06em",
                        lineHeight: 1,
                      }}
                    >
                      {cert.level}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "7px",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "#78350f",
                        textAlign: "center",
                        lineHeight: 1.2,
                        marginTop: "2px",
                      }}
                    >
                      RESMİ MÜHÜR{"\n"}ACCREDITED
                    </span>
                  </div>
                </div>

                {/* Başarı Skoru Kartı */}
                <div
                  style={{
                    background: "#ffffff",
                    border: `2px solid ${palette.primary}50`,
                    borderRadius: "12px",
                    padding: "6px 14px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "8px",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 800,
                    }}
                  >
                    Başarı Skoru
                  </div>
                  <div
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontWeight: 900,
                      fontSize: "24px",
                      color: palette.primary,
                      lineHeight: 1.1,
                    }}
                  >
                    %{cert.scorePercent}
                  </div>
                </div>
              </div>

              {/* Sağ Sütun: Doğrulama Matrisi & Uluslararası Akreditasyon */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    width: "100%",
                    boxSizing: "border-box",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  {[
                    { label: "Sertifika No", value: cert.verificationCode, mono: true },
                    { label: "CEFR Standardı", value: `${cert.level} — ${palette.label}` },
                    { label: "Tanzim Tarihi", value: formattedDate },
                    { label: "Issue Date", value: issueDateEn },
                    { label: "Sınav Modeli", value: cert.earnedVia === "exam" ? "YDS/YDT Seviye Sınavı" : "Akademik İlerleme" },
                  ].map(({ label, value, mono }) => (
                    <div
                      key={label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "8px",
                        alignItems: "start",
                        marginBottom: "6px",
                        paddingBottom: "6px",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Arial', sans-serif",
                          fontSize: "8px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#64748b",
                          fontWeight: 700,
                        }}
                      >
                        {label}:
                      </span>
                      <span
                        style={{
                          fontFamily: mono ? "'Courier New', monospace" : "'Arial', sans-serif",
                          fontSize: mono ? "10px" : "11px",
                          fontWeight: 700,
                          color: "#0f172a",
                          wordBreak: "break-all",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Uluslararası Doğrulama Adresi */}
                <div
                  style={{
                    background: `${palette.primary}10`,
                    border: `1px solid ${palette.primary}30`,
                    borderRadius: "10px",
                    padding: "8px 12px",
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "9px",
                      color: "#334155",
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    🔍 Belgeyi resmi olarak doğrulamak için:<br />
                    <strong style={{ color: palette.primary, fontSize: "10px" }}>
                      dil-master.vercel.app/sertifikalar
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* ALT BÖLÜM: Kurumsal İmzalar (Kişi İsimsiz, Resmi Kurul Onaylı & Her Yerde Geçerli) */}
            <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: `2px solid ${palette.primary}40` }}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                {/* 1. Sol: Akademik ve Değerlendirme Kurulu (İsimsiz, Resmi Kurul) */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      color: palette.primary,
                      fontSize: "18px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>🔒</span>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px",
                        fontWeight: 900,
                        letterSpacing: "0.1em",
                      }}
                    >
                      DIL-AUTH-SIG#{cert.verificationCode.slice(0, 6)}
                    </span>
                  </div>
                  <div style={{ height: "1.5px", background: palette.primary, marginBottom: "4px" }} />
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "10px",
                      fontWeight: 900,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Akademik Sınav ve Değerlendirme Kurulu
                  </div>
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "8px",
                      color: "#64748b",
                      marginTop: "1px",
                      fontWeight: 600,
                    }}
                  >
                    Board of Academic Assessment & Certification
                  </div>
                </div>

                {/* 2. Orta: Uluslararası CEFR Akreditasyon Mührü */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: "#ffffff",
                      border: `2px solid ${palette.primary}`,
                      borderRadius: "8px",
                      boxShadow: `0 4px 12px ${palette.primary}20`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "9px",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: palette.primary,
                      }}
                    >
                      ✦ ULUSLARARASI AKREDİTASYON ✦
                    </div>
                    <div
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "7.5px",
                        color: "#475569",
                        marginTop: "2px",
                        fontWeight: 700,
                      }}
                    >
                      CEFR YÖNERGELERİNE %100 UYUMLUDUR
                    </div>
                  </div>
                </div>

                {/* 3. Sağ: Uluslararası Dil Standartları Ofisi (İsimsiz, Resmi Makam) */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      color: palette.secondary,
                      fontSize: "18px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>🌐</span>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px",
                        fontWeight: 900,
                        letterSpacing: "0.1em",
                      }}
                    >
                      CEFR-VERIFIED#{cert.verificationCode.slice(-6)}
                    </span>
                  </div>
                  <div style={{ height: "1.5px", background: palette.secondary, marginBottom: "4px" }} />
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "10px",
                      fontWeight: 900,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Uluslararası Dil Standartları ve Kalite Komisyonu
                  </div>
                  <div
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "8px",
                      color: "#64748b",
                      marginTop: "1px",
                      fontWeight: 600,
                    }}
                  >
                    International Language Quality & Compliance Office
                  </div>
                </div>
              </div>

              {/* Uluslararası Evrensel Geçerlilik Hükmü */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "8px",
                  fontSize: "8px",
                  color: "#64748b",
                  fontFamily: "'Arial', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                Bu resmi başarı belgesi, Avrupa Konseyi Ortak Dil Kriterleri (CEFR) yönergelerine tam uyumlu olarak tanzim
                edilmiş olup, tüm akademik, kamu ve özel sektör kurumlarında yabancı dil yeterlilik belgesi olarak
                uluslararası geçerliliğe sahiptir.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Yazdırma ve Vektörel PDF CSS Kuralları ───────────────────────────── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body * { visibility: hidden !important; }
          .no-print, nav, header, footer, #global-menu-trigger, aside { display: none !important; }
          .certificate-print-area,
          .certificate-print-area * { visibility: visible !important; }
          .certificate-print-area {
            position: fixed !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `,
        }}
      />
    </div>
  );
}
