"use client";

import React, { useRef } from "react";
import { UserCertificate } from "@/lib/certificates/types";
import { CERTIFICATE_DEFINITIONS } from "@/lib/certificates/data";

interface CertificateViewProps {
  cert: UserCertificate;
  onClose?: () => void;
  showPrintButton?: boolean;
}

export function CertificateView({ cert, onClose, showPrintButton = true }: CertificateViewProps) {
  const printRef = useRef<HTMLDivElement>(null);
  const def = CERTIFICATE_DEFINITIONS[cert.level];

  const handlePrint = () => {
    // SAFETY: Triggers native browser print dialog configured for A4 landscape
    window.print();
  };

  const formattedDate = new Date(cert.issueDate).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto my-4 text-slate-800">
      {/* Print & Action Controls (hidden in print) */}
      {showPrintButton && (
        <div className="no-print mb-4 flex items-center justify-between gap-3 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-cyan-500/30 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <div className="font-bold text-sm sm:text-base text-cyan-300">
                {cert.level} Seviye Başarı Sertifikası
              </div>
              <div className="text-xs text-slate-400">
                Doğrulama Kodu: <span className="font-mono text-cyan-200">{cert.verificationCode}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>📄</span> PDF İndir / Yazdır
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

      {/* Actual Certificate Document (A4 Landscape Ready) */}
      <div
        ref={printRef}
        className="certificate-print-area relative bg-gradient-to-br from-amber-50/95 via-white to-amber-50/90 rounded-3xl p-6 sm:p-10 shadow-2xl border-8 border-double border-amber-600/60 overflow-hidden font-serif"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 100px rgba(217, 119, 6, 0.08)",
        }}
      >
        {/* Luxury Background Watermark Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center font-sans font-black text-9xl select-none"
          style={{ letterSpacing: "0.2em" }}
        >
          YDS MASTER
        </div>

        {/* Outer Corner Ornaments */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

        {/* Header */}
        <div className="text-center relative z-10 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl">🏛️</span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-sans font-bold text-amber-900/80">
              YDS Master Uluslararası Dil ve Sınav Akademisi
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-wide uppercase font-serif py-1">
            Üstün Başarı Sertifikası
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 italic">
            Certificate of English Proficiency & Achievement — CEFR {cert.level} Standard
          </p>

          <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent my-3"></div>
        </div>

        {/* Recipient */}
        <div className="text-center my-6 relative z-10">
          <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-slate-500">
            Bu belge, başarı kriterlerini tamamlayarak hak kazanan
          </p>
          <div className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 my-2 tracking-wide underline decoration-amber-500/50 decoration-wavy underline-offset-8">
            {cert.recipientName}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed mt-2">
            adına düzenlenmiş olup, CEFR (Avrupa Dilleri Ortak Çerçeve Programı) standartlarında{" "}
            <strong className="text-amber-900 font-bold">{cert.level} ({def?.subtitle || "İleri"})</strong> düzeyindeki akademik İngilizce, gramer ve sınav analizi modüllerini{" "}
            <span className="font-semibold text-emerald-700">%{cert.scorePercent} Başarı Skoru</span> ile tamamladığını belgeler.
          </p>
        </div>

        {/* Skills Covered Pills */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="my-4 relative z-10">
            <div className="text-center text-[11px] font-sans font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Kazanılan Temel Yetkinlikler
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white/80 border border-amber-300/80 rounded-full text-[10px] sm:text-xs font-sans text-slate-700 shadow-sm"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Section: Seal & Signatures */}
        <div className="mt-8 pt-4 border-t border-amber-200/80 grid grid-cols-3 items-end text-center relative z-10 gap-2">
          {/* Left: Date & Verification */}
          <div className="text-left font-sans">
            <div className="text-[11px] text-slate-500">Düzenleme Tarihi:</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">{formattedDate}</div>
            <div className="text-[10px] text-slate-500 mt-2">Sertifika Kodu:</div>
            <div className="text-[10px] sm:text-xs font-mono font-bold text-amber-900 bg-amber-100/60 px-2 py-0.5 rounded inline-block">
              {cert.verificationCode}
            </div>
          </div>

          {/* Center: Gold Official Seal */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-600 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl">🏅</span>
              <span className="text-[9px] font-black uppercase font-sans tracking-tight text-amber-950">
                {cert.level} CEFR
              </span>
              <span className="text-[8px] font-sans font-bold text-amber-900">RESMİ ONAY</span>
            </div>
          </div>

          {/* Right: Academic Signature */}
          <div className="text-right font-sans">
            <div className="h-8 flex items-center justify-end">
              <span className="font-serif italic text-lg sm:text-xl text-amber-900/80 font-bold">
                YDS Master Board
              </span>
            </div>
            <div className="w-28 sm:w-36 h-0.5 bg-slate-400 ml-auto my-1"></div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Akademik Değerlendirme</div>
            <div className="text-[10px] text-slate-500">YDS Master Eğitim Kurulu</div>
          </div>
        </div>
      </div>

      {/* Global CSS for Printing A4 Landscape */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .no-print,
          nav,
          header,
          footer {
            display: none !important;
          }
          .certificate-print-area,
          .certificate-print-area * {
            visibility: visible;
          }
          .certificate-print-area {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 2.5cm;
            box-shadow: none !important;
            border: 8px double #d97706 !important;
            background: white !important;
            page-break-inside: avoid;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
