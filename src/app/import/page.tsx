"use client";

import { useState } from "react";
import WordManualEnricher from "@/components/import/WordManualEnricher";
import QuizletImporter from "@/components/import/QuizletImporter";
import PdfImporter from "@/components/import/PdfImporter";
import { UploadCloud, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImportPage() {
  const [activeTab, setActiveTab] = useState<"pdf" | "ai-single" | "quizlet">("pdf");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Başlık - Gökkuşağı Gradient Vurgulu */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 shadow-2xl space-y-3 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-gradient-to-br from-pink-500/20 via-yellow-400/20 to-cyan-500/20 blur-2xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-cyan-400/40 text-xs font-bold text-cyan-300">
          <UploadCloud className="w-4 h-4 text-pink-400" />
          <span>Sıfır Hata • Akıllı PDF & Claude AI Otomatik Zenginleştirme</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
          Akıllı Kelime Ekleme & PDF Tarama Merkezi
        </h1>
        <p className="text-xs md:text-sm text-white/70 max-w-3xl leading-relaxed">
          İster herhangi bir PDF (kitap, deneme, makale, Akın Dil, Modadil, Cambridge vb.) yükleyin; ister tek bir kelime girin. Sistemimiz tüm akademik kelimeleri ayıklar, CEFR seviyesini (A1–C2), türünü ve doğal örnek cümlelerini otomatik olarak hazırlar.
        </p>
      </div>

      {/* Sekmeler */}
      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab("pdf")}
          className={cn(
            "flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "pdf"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-300 shadow-lg shadow-cyan-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>📄 Akıllı PDF Tarayıcı (Kitap & Sınavlar)</span>
        </button>

        <button
          onClick={() => setActiveTab("ai-single")}
          className={cn(
            "flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "ai-single"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-lg shadow-pink-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>🧠 Tek Kelime / Kalıp (Claude AI)</span>
        </button>

        <button
          onClick={() => setActiveTab("quizlet")}
          className={cn(
            "flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-black transition-all border",
            activeTab === "quizlet"
              ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400 shadow-lg shadow-amber-500/30 scale-105"
              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
          )}
        >
          <span>🃏 Quizlet (Dışa Aktarımı Yapıştır)</span>
        </button>
      </div>

      {/* Aktif İçe Aktarma Bileşeni */}
      {activeTab === "ai-single" && <WordManualEnricher />}
      {activeTab === "quizlet" && <QuizletImporter />}
      {activeTab === "pdf" && <PdfImporter />}
    </div>
  );
}
