"use client";

import { useState } from "react";
import { useUsage, CareerGoal } from "@/lib/store";
import { PROFESSIONS } from "@/lib/avatars";

interface CareerGoalCardProps {
  className?: string;
  compact?: boolean;
}

const POPULAR_TARGETS = [
  "Akademisyenlik & Araştırma Görevliliği",
  "Tıp & Sağlıkta Uzmanlık (TUS)",
  "Dışişleri Bakanlığı & Diplomatlık",
  "Uluslararası Hukuk & Avukatlık",
  "Pilotluk & Havacılık Kariyeri",
  "Yazılım Mühendisliği & Yurt Dışı",
  "Mühendislik & Yüksek Lisans / Doktora",
  "Öğretmenlik & MEB / Üniversite",
  "Bakanlık & Kamu Uzman Yardımcılığı",
  "Finans, Bankacılık & Uluslararası Denetim",
];

const TARGET_SCORES = ["70+", "75+", "80+", "85+", "90+", "95+", "100 (Tam Puan)"];

export default function CareerGoalCard({ className = "", compact = false }: CareerGoalCardProps) {
  const { usage, update } = useUsage();
  const [isEditing, setIsEditing] = useState(false);

  const goal: CareerGoal = usage.careerGoal || {
    profession: "Akademisyenlik & Yurt Dışı Uzmanlığı",
    targetScore: "85+",
    motto: "Zirveye odaklan, başarı kaçınılmazdır! ✨",
  };

  const [profession, setProfession] = useState(goal.profession);
  const [targetScore, setTargetScore] = useState(goal.targetScore);
  const [motto, setMotto] = useState(goal.motto);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    const updatedGoal: CareerGoal = {
      profession: profession.trim() || "Akademik & Mesleki Zirve",
      targetScore: targetScore || "85+",
      motto: motto.trim() || "Kendine inan, pes etme!",
      updatedAt: Date.now(),
    };

    update((u) => ({
      ...u,
      careerGoal: updatedGoal,
    }));

    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (compact) {
    return (
      <div className={`p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-cyan-500/10 border border-amber-400/30 flex items-center justify-between gap-3 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-xl shrink-0">
            🎯
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Mesleki Hedef</div>
            <div className="text-sm font-black text-white">{goal.profession} &bull; <span className="text-cyan-300 font-mono">{goal.targetScore}</span></div>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all shrink-0"
        >
          ✏️ Hedefi Değiştir
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900/95 via-purple-950/30 to-amber-950/20 border-2 border-amber-400/30 shadow-xl shadow-amber-950/20 backdrop-blur-xl transition-all ${className}`}
    >
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-36 h-36 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center text-2xl shrink-0">
            🎯
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <span>🌟</span>
              <span>Kişisel Vizyon & Mesleki Hedefim</span>
            </span>
            <h3 className="text-lg font-black text-white">YDS Başarı Pusulan</h3>
          </div>
        </div>

        {!isEditing ? (
          <button
            onClick={() => {
              setProfession(goal.profession);
              setTargetScore(goal.targetScore);
              setMotto(goal.motto);
              setIsEditing(true);
            }}
            className="px-3.5 py-1.5 rounded-xl border border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span>✏️</span>
            <span>Hedefimi Güncelle</span>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold transition-all"
          >
            Vazgeç
          </button>
        )}
      </div>

      {savedSuccess && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
          <span>✅</span>
          <span>Harika! Mesleki hedefin ve motivasyon motton başarıyla kaydedildi.</span>
        </div>
      )}

      {/* View Mode */}
      {!isEditing ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/50 mb-1">Hedeflenen Meslek / Alan</div>
              <div className="text-base font-black text-white flex items-center gap-2">
                <span>💼</span>
                <span className="truncate">{goal.profession}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/50 mb-1">Hedef YDS / YDT Puanı</div>
              <div className="text-base font-black text-cyan-300 font-mono flex items-center gap-2">
                <span>🏆</span>
                <span>{goal.targetScore} Puan</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/50 mb-1">Durum</div>
              <div className="text-base font-black text-emerald-400 flex items-center gap-2">
                <span>🔥</span>
                <span>Azimle Yolda</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-400/20 flex items-start gap-3">
            <span className="text-2xl shrink-0">✨</span>
            <div>
              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Kişisel Başarı Mottosu</div>
              <p className="text-sm font-semibold text-white/90 italic mt-0.5">&ldquo;{goal.motto}&rdquo;</p>
            </div>
          </div>
        </div>
      ) : (
        /* Edit Mode */
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5">
              Hedeflediğin Meslek veya Pozisyon:
            </label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Örn: Akademisyenlik, Dışişleri Uzmanı, Pilot, Doktor, Yazılım Mimarı..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
            />
            {/* Quick Suggestions */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="text-[10px] text-white/40 self-center">Hazır Seçenekler:</span>
              {POPULAR_TARGETS.slice(0, 5).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProfession(p)}
                  className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white/70 mb-1.5">
                Hedeflediğin Puan:
              </label>
              <select
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-sm font-bold text-cyan-300 focus:outline-none focus:border-amber-400 transition-colors"
              >
                {TARGET_SCORES.map((s) => (
                  <option key={s} value={s} className="bg-slate-900 text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 mb-1.5">
                Seni Ateşleyen Kişisel Mottan:
              </label>
              <input
                type="text"
                value={motto}
                onChange={(e) => setMotto(e.target.value)}
                placeholder="Örn: Masadaki her dakika geleceğimi inşa ediyor!"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-xl border border-white/15 text-white/60 hover:text-white text-xs font-bold transition-colors"
            >
              İptal
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              💾 Hedefimi Kaydet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
