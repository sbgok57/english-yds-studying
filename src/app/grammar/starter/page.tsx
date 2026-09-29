"use client";

import Link from "next/link";
import GrammarStarter from "@/components/grammar/GrammarStarter";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";

export default function GrammarStarterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Navigasyon */}
      <div className="flex items-center justify-between">
        <Link
          href="/grammar"
          className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Gramer Merkezine Dön</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A1/A2 Sıfırdan Temel Modu</span>
        </div>
      </div>

      {/* Ana Bileşen */}
      <GrammarStarter />

      {/* Alt Bilgi */}
      <div className="text-center text-xs text-white/40 space-y-1">
        <p>🧠 YDS Master Sıfırdan Gramer Kılavuzu — Cümle yapısından stative verb ve zamanlara adım adım.</p>
        <p>Aksan tercihinizi üstteki açılır menüden değiştirebilir, her cümlenin doğal telaffuzunu dinleyebilirsiniz.</p>
      </div>
    </div>
  );
}
