"use client";

import { useUsage } from "@/lib/store";

export type ExamType = "YDS" | "YDT" | "YÖKDİL";

const EXAM_OPTIONS: { id: ExamType; label: string; emoji: string; color: string; desc: string }[] = [
  {
    id: "YDS",
    label: "YDS",
    emoji: "🎯",
    color: "from-cyan-500 to-blue-600 border-cyan-400 text-cyan-200",
    desc: "180 dk • 80 Soru • Kamu & Lisansüstü",
  },
  {
    id: "YDT",
    label: "YDT (LYS-5)",
    emoji: "🎓",
    color: "from-amber-500 to-orange-600 border-amber-400 text-amber-200",
    desc: "120 dk • 80 Soru • Üniversite YKS-Dil",
  },
  {
    id: "YÖKDİL",
    label: "YÖKDİL",
    emoji: "🔬",
    color: "from-purple-500 to-pink-600 border-pink-400 text-pink-200",
    desc: "180 dk • Sağlık, Fen, Sosyal Alanları",
  },
];

interface ExamModeSwitcherProps {
  compact?: boolean;
}

export default function ExamModeSwitcher({ compact = false }: ExamModeSwitcherProps) {
  const { usage, update } = useUsage();
  const currentModes: ExamType[] = usage.activeExams && usage.activeExams.length > 0
    ? usage.activeExams
    : ["YDS", "YDT", "YÖKDİL"];

  const isAll = currentModes.length === 3;

  const toggleMode = (mode: ExamType) => {
    update((u) => {
      let next: ExamType[];
      const active = u.activeExams || ["YDS", "YDT", "YÖKDİL"];
      if (active.includes(mode)) {
        // En az 1 tanesi aktif kalmalı
        if (active.length === 1) return u;
        next = active.filter((m) => m !== mode);
      } else {
        next = [...active, mode];
      }
      return { ...u, activeExams: next };
    });
  };

  const selectAll = () => {
    update((u) => ({ ...u, activeExams: ["YDS", "YDT", "YÖKDİL"] }));
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10">
        <button
          type="button"
          onClick={selectAll}
          className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all ${
            isAll
              ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
              : "text-white/60 hover:text-white"
          }`}
          title="Tüm Sınavlar (YDS, YDT, YÖKDİL)"
        >
          🌟 Hepsi
        </button>
        {EXAM_OPTIONS.map((opt) => {
          const isActive = currentModes.includes(opt.id) && !isAll;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggleMode(opt.id)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all flex items-center gap-1 ${
                isActive
                  ? `bg-gradient-to-r ${opt.color} text-white shadow-sm`
                  : "text-white/60 hover:text-white"
              }`}
              title={opt.desc}
            >
              <span>{opt.emoji}</span>
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-4 sm:p-5 bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
            <span>🎯</span> Sınav Hedefi & Çalışma Modu Seçimi
          </span>
          <p className="text-[11px] text-white/60 mt-0.5">
            Çalışmak istediğin sınavları seç; denemeler, taktikler ve kelimeler hedefine göre filtrelensin.
          </p>
        </div>
        <button
          type="button"
          onClick={selectAll}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
            isAll
              ? "bg-white/20 border-white/30 text-white shadow"
              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
          }`}
        >
          🌟 Tüm Sınavları Birlikte Çalış ({currentModes.length}/3)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {EXAM_OPTIONS.map((opt) => {
          const isSelected = currentModes.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggleMode(opt.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? `bg-white/[0.08] border-cyan-400/60 shadow-lg shadow-cyan-500/10 scale-[1.02]`
                  : "bg-white/[0.02] border-white/10 hover:border-white/30 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{opt.emoji}</span>
                <span
                  className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {isSelected ? "✓ Aktif" : "+ Ekle"}
                </span>
              </div>
              <p className="font-black text-sm text-white mt-2 group-hover:text-cyan-300 transition-colors">
                {opt.label}
              </p>
              <p className="text-[10px] text-white/50 mt-0.5">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
