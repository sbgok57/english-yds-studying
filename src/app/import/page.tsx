"use client";

import { useState } from "react";
import WordManualEnricher from "@/components/import/WordManualEnricher";
import QuizletImporter from "@/components/import/QuizletImporter";
import PdfImporter from "@/components/import/PdfImporter";
import { UploadCloud, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImportPage() {
  const [activeTab, setActiveTab] = useState<"ai-single" | "quizlet" | "pdf">("ai-single");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Başlık */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-pink-950 via-purple-950 to-slate-950 border-2 border-pink-500/30 shadow-2xl space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-xs font-bold text-pink-300">
          <UploadCloud className="w-4 h-4" />
          <span>Sıfır Hata • Claude AI Otomatik Zenginleştirme</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Akıllı Kelime Ekleme & İçe Aktarma Merkezi
        </h1>
        <p className="text-xs md:text-sm text-white/70">
          Kelime eklediğinizde CEFR seviyesi (A1–C2), kelime türü (isim, fiil, sıfat, zarf) ve doğal örnek cümleler otomatik olarak taranır, zenginleştirilir ve veritabanına eklenir.
        </p>
      </div>

      {/* Sekmeler */}
      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab("ai-single")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "ai-single"
              ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>🧠 Tek Kelime / Kalıp (Claude AI)</span>
        </button>

        <button
          onClick={() => setActiveTab("quizlet")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "quizlet"
              ? "bg-violet-600 text-white border-violet-400 shadow-lg shadow-violet-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>🃏 Quizlet (Dışa Aktarımı Yapıştır)</span>
        </button>

        <button
          onClick={() => setActiveTab("pdf")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "pdf"
              ? "bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>📄 PDF Tarayıcı (Metin Katmanı + OCR)</span>
        </button>
      </div>

      {/* Aktif İçe Aktarma Bileşeni */}
      {activeTab === "ai-single" && <WordManualEnricher />}
      {activeTab === "quizlet" && <QuizletImporter />}
      {activeTab === "pdf" && <PdfImporter />}
    </div>
  );
}
