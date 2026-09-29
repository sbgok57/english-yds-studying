"use client";

import { useUsage } from "@/lib/store";
import { calculateStudentProgress } from "@/lib/progress/calculator";
import { Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

export default function ProgressPanel() {
  const { usage } = useUsage();

  const wordsSeen = Object.keys(usage.words || {}).length;
  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;
  const examsTaken = usage.exams?.taken || 0;
  const bestNet = usage.exams?.bestNet || 0;

  // PERF: Calculate real weighted overall progress percentage
  const progress = calculateStudentProgress({
    wordsLearned,
    grammarCompleted: grammarCount,
    tacticsCompleted: tacticsCount,
    questionsSolved: usage.exams?.totalQuestions || 0,
    examsTaken,
  });

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
                {usage.sessions || 1}. oturumdasın · İlerlemen hesabında güvenle saklanır
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/40 shadow-sm">
              <span className="text-sm font-black text-cyan-300">%{progress.overallPercent}</span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">İlerleme</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-300/30 px-3 py-1.5 rounded-full">
              <Trophy className="w-3.5 h-3.5" />
              <span>En İyi Net: {Number(bestNet).toFixed(1)}</span>
            </div>
            <Link
              href="/ilerleme"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 ml-1"
            >
              Detaylı Rapor &rarr;
            </Link>
          </div>
        </div>

        {/* Ana İlerleme Çubuğu */}
        <div className="space-y-1.5 mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex justify-between items-center text-xs font-semibold text-white/80">
            <span className="flex items-center gap-1.5">
              <span>{progress.milestoneEmoji}</span>
              <span className="font-bold text-white">{progress.milestoneTitle}</span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="text-[11px] text-white/60 hidden sm:inline">{progress.milestoneMessage}</span>
            </span>
            <span className="font-mono font-black text-cyan-300">%{progress.overallPercent} / %100</span>
          </div>
          <div className="h-2.5 rounded-full bg-black/40 border border-white/10 overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-md shadow-cyan-500/20 transition-all duration-700"
              style={{ width: `${Math.max(2, progress.overallPercent)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">🃏</div>
            <div className="text-2xl font-black text-pink-400">
              %{progress.vocabulary.percent}
            </div>
            <div className="text-xs text-white/80 mt-1 font-semibold">Öğrenilen Kelime</div>
            <div className="text-[10px] text-white/50 mt-0.5 font-mono">
              {wordsLearned} / 485 kelime
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">📖</div>
            <div className="text-2xl font-black text-purple-400">
              %{progress.grammar.percent}
            </div>
            <div className="text-xs text-white/80 mt-1 font-semibold">Çalışılan Konu</div>
            <div className="text-[10px] text-white/50 mt-0.5 font-mono">
              {grammarCount} / 20 konu
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-2xl font-black text-emerald-400">
              %{progress.tactics.percent}
            </div>
            <div className="text-xs text-white/80 mt-1 font-semibold">İncelenen Taktik</div>
            <div className="text-[10px] text-white/50 mt-0.5 font-mono">
              {tacticsCount} / 11 taktik
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
            <div className="text-2xl mb-1">⏱️</div>
            <div className="text-2xl font-black text-cyan-400">
              %{progress.practice.percent}
            </div>
            <div className="text-xs text-white/80 mt-1 font-semibold">Soru & Deneme</div>
            <div className="text-[10px] text-white/50 mt-0.5 font-mono">
              {examsTaken} deneme çözüldü
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
