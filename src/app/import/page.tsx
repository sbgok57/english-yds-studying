"use client";

import { useState } from "react";
import QuizletImporter from "@/components/import/QuizletImporter";
import PdfImporter from "@/components/import/PdfImporter";
import { UploadCloud, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImportPage() {
  const [activeTab, setActiveTab] = useState<"quizlet" | "pdf">("quizlet");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Başlık */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-pink-950 via-purple-950 to-slate-950 border-2 border-pink-500/30 shadow-2xl space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-xs font-bold text-pink-300">
          <UploadCloud className="w-4 h-4" />
          <span>Sıfır Hata • Önizleme & Doğrulama Garantisi</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Quizlet & PDF Kelime İçe Aktarma Merkezi
        </h1>
        <p className="text-xs md:text-sm text-white/70">
          Kullanıcı onaylı Quizlet metinlerini veya PDF kelime listelerini önizleyin, şüpheli karakterleri denetleyin ve veritabanına güvenle kaydedin.
        </p>
      </div>

      {/* Sekmeler */}
      <div className="flex gap-3 border-b border-white/10 pb-4">
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
      {activeTab === "quizlet" ? <QuizletImporter /> : <PdfImporter />}
    </div>
  );
}
