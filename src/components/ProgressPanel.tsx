"use client";

import { useUsage } from "@/lib/store";
import { Sparkles, Trophy, CheckCircle2, Target, BookOpen, Clock } from "lucide-react";

export default function ProgressPanel() {
  const { usage } = useUsage();

  const wordsSeen = Object.keys(usage.words || {}).length;
  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;
  const examsTaken = usage.exams?.taken || 0;
  const bestNet = usage.exams?.bestNet || 0;

  return (
    <section className="my-12">
      <div className="card-vibrant p-6 sm:p-8 bg-gradient-to-br from-purple-950/40 via-slate-900/60 to-cyan-950/40 border border-white/20">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📊</span>
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <span>Kişisel İlerleme Tablon</span>
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </h3>
              <p className="text-xs text-white/60">
                {usage.sessions || 1}. oturumdasın · Yerel cihazında anlık kaydediliyor
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-300/30 px-3 py-1.5 rounded-full">
            <Trophy className="w-3.5 h-3.5" />
            <span>En İyi Net: {Number(bestNet).toFixed(1)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">🃏</div>
            <div className="text-2xl font-black text-pink-400">
              {wordsLearned} <span className="text-xs text-white/50 font-normal">/ {wordsSeen}</span>
            </div>
            <div className="text-xs text-white/60 mt-1 font-semibold">Öğrenilen Kelime</div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">📖</div>
            <div className="text-2xl font-black text-purple-400">
              {grammarCount} <span className="text-xs text-white/50 font-normal">/ 15</span>
            </div>
            <div className="text-xs text-white/60 mt-1 font-semibold">Çalışılan Konu</div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-2xl font-black text-emerald-400">
              {tacticsCount} <span className="text-xs text-white/50 font-normal">/ 11</span>
            </div>
            <div className="text-xs text-white/60 mt-1 font-semibold">İncelenen Taktik</div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">⏱️</div>
            <div className="text-2xl font-black text-cyan-400">
              {examsTaken}
            </div>
            <div className="text-xs text-white/60 mt-1 font-semibold">Çözülen Deneme</div>
          </div>
        </div>
      </div>
    </section>
  );
}
