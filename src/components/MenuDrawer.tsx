"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  PAGES,
  GRAMMAR_LINKS,
  TACTICS_LINKS,
  GAME_LINKS,
  REAL_EXAMS,
  DENEME_COUNT,
} from "@/lib/site-index";
import SearchBox from "@/components/SearchBox";
import { useUsage } from "@/lib/store";
import { calculateStudentProgress } from "@/lib/progress/calculator";

/** Üstteki ☰ (3 çizgi) — sitede yapılabilecek HER ŞEY burada. */
export default function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { usage } = useUsage();
  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;

  const progress = calculateStudentProgress({
    wordsLearned,
    grammarCompleted: grammarCount,
    tacticsCompleted: tacticsCount,
    questionsSolved: usage.exams?.totalQuestions || 0,
    examsTaken: usage.exams?.taken || 0,
  });
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const Group = ({ title, emoji }: { title: string; emoji: string }) => (
    <h3 className="text-[11px] font-black uppercase tracking-widest text-white/40 flex items-center gap-1.5 mt-6 mb-2 first:mt-0">
      <span>{emoji}</span> {title}
    </h3>
  );

  return (
    <div className="fixed inset-0 z-[80]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 px-5 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-black text-lg">
              🧭 <span className="gradient-text">Menü</span>
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-lg hover:bg-white/10"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
          <SearchBox />
          <button
            onClick={() => {
              onClose();
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("yds:open-install-modal"));
              }
            }}
            className="w-full mt-3 p-2.5 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-purple-500/40 hover:border-purple-400 text-left flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-cyan-400 flex items-center justify-center text-sm shadow">
                📲
              </div>
              <div>
                <div className="text-xs font-black text-white group-hover:text-cyan-300 transition-colors">
                  Telefona Yükle (iOS & Android)
                </div>
                <div className="text-[10px] text-white/50">Ana ekrana ekle, tam ekran çalış</div>
              </div>
            </div>
            <span className="text-xs text-white/40 group-hover:translate-x-0.5 transition-transform">➔</span>
          </button>

          {/* Kişisel İlerleme Yüzdesi Kartı */}
          <Link
            href="/ilerleme"
            onClick={onClose}
            className="w-full mt-2 p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-left flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-sm font-black shadow">
                📈
              </div>
              <div>
                <div className="text-xs font-black text-white group-hover:text-cyan-300 transition-colors">
                  Kişisel İlerlemem (%{progress.overallPercent})
                </div>
                <div className="text-[10px] text-white/50">{progress.milestoneTitle} · Detaylı analiz</div>
              </div>
            </div>
            <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-0.5 transition-transform">➔</span>
          </Link>
        </div>

        <div className="px-5 pb-10">
          <Group title="Sayfalar" emoji="🏠" />
          <div className="grid grid-cols-2 gap-1.5">
            {PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                <span>{p.emoji}</span> {p.label}
              </Link>
            ))}
          </div>

          <Group title="YDS 2013–2026 Gerçek Sınavlar" emoji="📝" />
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-2 grid grid-cols-2 gap-1">
            {REAL_EXAMS.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                onClick={onClose}
                className="px-3 py-2 rounded-lg text-[13px] font-bold text-amber-100/90 hover:bg-amber-400/10 transition-colors"
              >
                {e.emoji} {e.year} {e.session}
              </Link>
            ))}
          </div>
          <Link
            href="/exams"
            onClick={onClose}
            className="mt-2 flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-white/70 hover:bg-white/10 transition-colors"
          >
            <span>🎲 {DENEME_COUNT} Özgün Deneme</span>
            <span className="text-xs text-white/40">→</span>
          </Link>

          <Group title="Gramer Konuları (15)" emoji="📖" />
          <div className="grid grid-cols-1 gap-1">
            {GRAMMAR_LINKS.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
              >
                <span>{g.emoji}</span> {g.label}
              </Link>
            ))}
          </div>

          <Group title="Soru Taktikleri (11)" emoji="🎯" />
          <div className="grid grid-cols-1 gap-1">
            {TACTICS_LINKS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
              >
                <span>{t.emoji}</span> {t.label}
              </Link>
            ))}
          </div>

          <Group title="Oyunlar (6)" emoji="🎮" />
          <div className="grid grid-cols-2 gap-1.5">
            {GAME_LINKS.map((g) => (
              <Link
                key={g.label}
                href={g.href}
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
              >
                <span>{g.emoji}</span> {g.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/50 leading-relaxed">
            💡 Kanka, kaybolursan her zaman sağ üstteki ☰ burada. Aradığın kelimeyi üstteki
            aramaya yaz, Google gibi öneriler çıkar.
          </div>
        </div>
      </aside>
    </div>
  );
}
