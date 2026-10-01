"use client";

import React, { useRef, useState, useCallback } from "react";
import { UserCertificate } from "@/lib/certificates/types";
import { CERTIFICATE_DEFINITIONS } from "@/lib/certificates/data";

interface CertificateViewProps {
  cert: UserCertificate;
  onClose?: () => void;
  showPrintButton?: boolean;
}

// CEFR level metadata
const CEFR_META: Record<string, { label: string; band: string; color: string; bg: string }> = {
  A1: { label: "A1 — Breakthrough", band: "Başlangıç (Elementary)", color: "#10b981", bg: "#d1fae5" },
  A2: { label: "A2 — Waystage", band: "Temel Seviye (Pre-Intermediate)", color: "#84cc16", bg: "#ecfccb" },
  B1: { label: "B1 — Threshold", band: "Orta Seviye (Intermediate)", color: "#3b82f6", bg: "#dbeafe" },
  B2: { label: "B2 — Vantage", band: "Üst-Orta Seviye (Upper-Intermediate)", color: "#8b5cf6", bg: "#ede9fe" },
  C1: { label: "C1 — Effective Operational Proficiency", band: "İleri Seviye (Advanced)", color: "#f59e0b", bg: "#fef3c7" },
  C2: { label: "C2 — Mastery", band: "Ustalık Seviyesi (Mastery / Proficiency)", color: "#ef4444", bg: "#fee2e2" },
};

export function CertificateView({ cert, onClose, showPrintButton = true }: CertificateViewProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const def = CERTIFICATE_DEFINITIONS[cert.level];
  const meta = CEFR_META[cert.level] || CEFR_META["B1"];

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

  // PERF: Lazy-load heavy PDF libs (jsPDF + html2canvas) only on demand to keep bundle lean
  const handleDownloadPDF = useCallback(async () => {
    if (!certRef.current || downloading) return;
    setDownloading(true);
    try {
      // Dynamically import to avoid including PDF libs in server/initial bundle
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      // PERF: scale:3 → retina-quality, no blur or pixelation
      const canvas = await html2canvas(certRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#fffbeb",
        logging: false,
        // SAFETY: Constrain to single-page to avoid oversized canvas memory leak
        windowWidth: 1123,
        windowHeight: 794,
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      // A4 landscape: 297mm × 210mm
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();

      // Scale image to fit exactly within page — no overflow, single page
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
      const fileName = `YDS-Master-${cert.level}-Sertifika-${cert.verificationCode}.pdf`;
      pdf.save(fileName);
    } catch (err) {
      console.error("PDF oluşturma hatası:", err);
      // Graceful degradation: fallback to browser print
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
      {/* ── Action Controls (hidden in print) ───────────────────────────── */}
      {showPrintButton && (
        <div className="no-print mb-5 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-amber-500/30 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <div className="font-bold text-sm sm:text-base text-amber-300">
                {cert.level} Seviye — CEFR Başarı Sertifikası
              </div>
              <div className="text-xs text-slate-400">
                Doğrulama Kodu:{" "}
                <span className="font-mono text-cyan-200 select-all">{cert.verificationCode}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 disabled:opacity-60 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-1.5"
            >
              {downloading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <span>📥</span>
              )}
              {downloading ? "Hazırlanıyor…" : "PDF İndir (Yüksek Çözünürlük)"}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs sm:text-sm transition-colors border border-slate-600"
            >
              🖨️ Yazdır
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs sm:text-sm transition-colors"
              >
                Kapat
              </button>
            )}
          </div>
        </div>
      )}

      {/* Responsive viewport wrapper: Fits on all screen widths perfectly */}
      <div className="w-full flex justify-center pb-4 rounded-3xl overflow-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            CERTIFICATE DOCUMENT — A4 Landscape (Aspect 1123 / 794)
            Fits screen width automatically while preserving PDF output sizing
            ═══════════════════════════════════════════════════════════════════ */}
        <div
          ref={certRef}
          className="certificate-print-area w-full max-w-[1123px]"
          style={{
            /* Responsive aspect ratio fitting: shrinks seamlessly on phone/tablet */
            width: "100%",
            maxWidth: "1123px",
            minHeight: "auto",
            margin: "0 auto",
            background: "linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fefce8 100%)",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            boxShadow: "0 32px 64px rgba(0,0,0,0.18), inset 0 0 120px rgba(217,119,6,0.06)",
          }}
        >
        {/* ── Decorative outer border frame ─────────────────────────── */}
        <div style={{
          position: "absolute", inset: "10px",
          border: "3px solid #d97706",
          borderRadius: "4px",
          pointerEvents: "none",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", inset: "16px",
          border: "1px solid #fbbf24",
          borderRadius: "2px",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* ── Corner ornaments ──────────────────────────────────────── */}
        {[
          { top: "20px", left: "20px" },
          { top: "20px", right: "20px" },
          { bottom: "20px", left: "20px" },
          { bottom: "20px", right: "20px" },
        ].map((pos, i) => (
          <div key={i} style={{
            position: "absolute", ...pos,
            width: "40px", height: "40px",
            background: `radial-gradient(circle, ${meta.color}20 0%, transparent 70%)`,
            borderRadius: "50%",
            zIndex: 1,
          }}>
            <div style={{
              width: "100%", height: "100%",
              border: `2px solid ${meta.color}`,
              borderRadius: "50%",
            }} />
          </div>
        ))}

        {/* ── Watermark ─────────────────────────────────────────────── */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Arial', sans-serif",
          fontWeight: 900,
          fontSize: "120px",
          color: meta.color,
          opacity: 0.03,
          letterSpacing: "0.15em",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}>
          CEFR {cert.level}
        </div>

        {/* ── Main content grid ─────────────────────────────────────── */}
        <div style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          height: "100%",
          minHeight: "auto",
          padding: "clamp(16px, 4vw, 36px) clamp(16px, 5vw, 52px) clamp(16px, 3.5vw, 32px)",
          boxSizing: "border-box",
          gap: "16px",
        }}>

          {/* ── ROW 1: Header ──────────────────────────────────────── */}
          <div style={{ textAlign: "center", paddingBottom: "18px" }}>
            {/* Institution row */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
              marginBottom: "12px",
            }}>
              <div style={{
                width: "36px", height: "36px",
                background: `linear-gradient(135deg, ${meta.color}, ${meta.color}80)`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px",
              }}>🏛️</div>
              <div>
                <div style={{
                  fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#78350f",
                }}>
                  YDS Master Uluslararası Dil ve Sınav Akademisi
                </div>
                <div style={{
                  fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#a16207",
                }}>
                  YDS Master International Language & Exam Academy
                </div>
              </div>
              <div style={{
                width: "36px", height: "36px",
                background: `linear-gradient(135deg, ${meta.color}, ${meta.color}80)`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px",
              }}>🎓</div>
            </div>

            {/* Divider */}
            <div style={{
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
              margin: "0 auto 14px",
              width: "60%",
            }} />

            {/* Main title */}
            <div style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "32px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1c1917",
              lineHeight: 1.1,
            }}>
              Üstün Başarı Sertifikası
            </div>
            <div style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "14px",
              color: "#57534e",
              marginTop: "4px",
              letterSpacing: "0.04em",
            }}>
              Certificate of Achievement in English Proficiency
            </div>

            {/* CEFR badge inline */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
              padding: "5px 16px",
              background: meta.bg,
              border: `1.5px solid ${meta.color}50`,
              borderRadius: "20px",
            }}>
              <span style={{
                fontFamily: "'Arial', sans-serif",
                fontWeight: 800,
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: meta.color,
              }}>
                CEFR (Common European Framework of Reference for Languages) —{" "}
                <strong style={{ fontSize: "13px" }}>{cert.level}</strong> Standard
              </span>
              <span style={{ fontSize: "10px", color: "#78350f", fontStyle: "italic", fontFamily: "Arial, sans-serif" }}>
                {meta.band}
              </span>
            </div>
          </div>

          {/* ── ROW 2: Body ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_140px_1fr] gap-6 items-center">

            {/* Left column: Recipient & Description */}
            <div>
              <p style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#78716c",
                textAlign: "center",
                marginBottom: "6px",
              }}>
                Bu Sertifikanın Sahibi / This Certificate is Awarded to
              </p>
              <div style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 700,
                fontSize: "28px",
                color: "#1c1917",
                textAlign: "center",
                borderBottom: `2px solid ${meta.color}60`,
                paddingBottom: "8px",
                marginBottom: "14px",
                letterSpacing: "0.03em",
              }}>
                {cert.recipientName}
              </div>

              <p style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "11px",
                color: "#44403c",
                lineHeight: 1.7,
                textAlign: "center",
              }}>
                yukarıda adı geçen kişi, <strong style={{ color: "#78350f" }}>CEFR {cert.level} ({def?.subtitle || meta.band})</strong> düzeyindeki
                İngilizce yeterlilik, akademik gramer, kelime bilgisi ve sınav analizi
                modüllerini başarıyla tamamlamıştır.
              </p>
              <p style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "10px",
                color: "#78716c",
                lineHeight: 1.6,
                textAlign: "center",
                marginTop: "6px",
              }}>
                The above-named candidate has successfully completed the {cert.level} level
                English proficiency, grammar, vocabulary and exam analysis modules in accordance
                with the Common European Framework of Reference for Languages.
              </p>

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div style={{ marginTop: "14px" }}>
                  <div style={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#78716c",
                    textAlign: "center",
                    marginBottom: "8px",
                  }}>
                    Kazanılan Yetkinlikler / Key Competencies
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                    {cert.skills.slice(0, 6).map((skill, i) => (
                      <span key={i} style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "9px",
                        padding: "3px 9px",
                        background: "#ffffff",
                        border: `1px solid ${meta.color}50`,
                        borderRadius: "10px",
                        color: "#44403c",
                      }}>
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Center column: Official seal */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              {/* Main seal */}
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: `conic-gradient(${meta.color} 0deg, #fbbf24 90deg, ${meta.color} 180deg, #fbbf24 270deg, ${meta.color} 360deg)`,
                padding: "4px",
                boxShadow: `0 4px 20px ${meta.color}50`,
              }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, #fffbeb, #fef9c3)`,
                  border: `3px solid ${meta.color}80`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                }}>
                  <span style={{ fontSize: "28px" }}>{def?.badgeEmoji || "🏅"}</span>
                  <span style={{
                    fontFamily: "'Arial', sans-serif",
                    fontWeight: 900,
                    fontSize: "16px",
                    color: meta.color,
                    letterSpacing: "0.06em",
                  }}>{cert.level}</span>
                  <span style={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "7px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#78350f",
                    textAlign: "center",
                  }}>CEFR{"\n"}RESMİ ONAY</span>
                </div>
              </div>

              {/* Score badge */}
              <div style={{
                background: `${meta.color}15`,
                border: `1.5px solid ${meta.color}40`,
                borderRadius: "8px",
                padding: "6px 12px",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "9px",
                  color: "#78716c",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>Başarı Skoru</div>
                <div style={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: meta.color,
                  lineHeight: 1,
                }}>%{cert.scorePercent}</div>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "8px",
                  color: "#78716c",
                }}>Achievement Score</div>
              </div>
            </div>

            {/* Right column: Metadata & QR placeholder */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-end",
            }}>
              {/* Certificate meta table */}
              <div style={{
                background: "#ffffff80",
                border: "1px solid #d6d3d1",
                borderRadius: "8px",
                padding: "12px 16px",
                width: "100%",
                boxSizing: "border-box",
              }}>
                {[
                  { label: "Sertifika Numarası", value: cert.verificationCode, mono: true },
                  { label: "CEFR Seviyesi", value: `${cert.level} — ${meta.label}` },
                  { label: "Düzenleme Tarihi (TR)", value: formattedDate },
                  { label: "Issue Date (EN)", value: issueDateEn },
                  { label: "Kazanım Yöntemi", value: cert.earnedVia === "exam" ? "Seviye Sınavı" : cert.earnedVia === "assessment" ? "Değerlendirme" : "İlerleme Tamamlama" },
                ].map(({ label, value, mono }) => (
                  <div key={label} style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "8px",
                    alignItems: "start",
                    marginBottom: "7px",
                    paddingBottom: "7px",
                    borderBottom: "1px solid #f5f5f4",
                  }}>
                    <span style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#78716c",
                      whiteSpace: "nowrap",
                      paddingTop: "1px",
                    }}>{label}:</span>
                    <span style={{
                      fontFamily: mono ? "'Courier New', monospace" : "'Arial', sans-serif",
                      fontSize: mono ? "9px" : "10px",
                      fontWeight: 600,
                      color: "#1c1917",
                      wordBreak: "break-all",
                    }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Verification instruction */}
              <div style={{
                background: `${meta.color}08`,
                border: `1px solid ${meta.color}25`,
                borderRadius: "6px",
                padding: "8px 12px",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "8px",
                  color: "#78716c",
                  lineHeight: 1.5,
                }}>
                  🔍 Bu sertifikayı doğrulamak için yukarıdaki kodu<br />
                  YDS Master platformunun Sertifikalar bölümüne girin.<br />
                  <em style={{ color: "#a16207" }}>Verify at: english-yds-studying.vercel.app/sertifikalar</em>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 3: Footer signatures ────────────────────────────── */}
          <div className="mt-4 pt-3 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 items-end" style={{ borderColor: `${meta.color}40` }}>
            {/* Signature 1: Academic Director */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "18px",
                color: `${meta.color}CC`,
                letterSpacing: "0.04em",
                marginBottom: "4px",
                height: "28px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}>
                Dr. Ayşe Kara
              </div>
              <div style={{ height: "1px", background: "#a8a29e", marginBottom: "5px" }} />
              <div style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                color: "#44403c",
                letterSpacing: "0.05em",
              }}>Akademik Direktör</div>
              <div style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "8px",
                color: "#78716c",
              }}>Academic Director</div>
            </div>

            {/* Center: Institution stamp */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                display: "inline-block",
                padding: "8px 16px",
                background: `${meta.color}12`,
                border: `1.5px solid ${meta.color}50`,
                borderRadius: "6px",
              }}>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#78350f",
                }}>YDS Master Eğitim Kurulu</div>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "7px",
                  color: "#a16207",
                  marginTop: "2px",
                }}>Board of Academic Assessment</div>
                <div style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "9px",
                  fontWeight: 800,
                  color: meta.color,
                  marginTop: "4px",
                  letterSpacing: "0.08em",
                }}>✦ RESMİ MÜHÜR ✦</div>
              </div>
            </div>

            {/* Signature 2: Exam Coordinator */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "18px",
                color: `${meta.color}CC`,
                letterSpacing: "0.04em",
                marginBottom: "4px",
                height: "28px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}>
                Prof. Mehmet Yılmaz
              </div>
              <div style={{ height: "1px", background: "#a8a29e", marginBottom: "5px" }} />
              <div style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                color: "#44403c",
                letterSpacing: "0.05em",
              }}>Sınav Koordinatörü</div>
              <div style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "8px",
                color: "#78716c",
              }}>Exam Coordinator</div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* ── Print CSS: A4 Landscape, zero margin ─────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body * { visibility: hidden !important; }
          .no-print, nav, header, footer { display: none !important; }
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
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}} />
    </div>
  );
}
