"use client";

import React, { useState } from "react";
import {
  BADGES,
  BadgeDefinition,
  BadgeCategory,
  RARITY_COLORS,
} from "@/lib/gamification/badges-data";
import { useUsage } from "@/lib/store";

const CATEGORY_NAMES: Record<BadgeCategory, string> = {
  starter: "Başlangıç & Keşif",
  vocabulary: "Kelime Dağarcığı",
  grammar: "Gramer & Taktik",
  reading: "Reading Lab",
  exam: "Optik & Deneme",
  level: "CEFR Seviye",
  streak: "Çalışma Serisi",
  program: "Çalışma Programı",
  secret: "Gizli Başarımlar 🕵️",
};

export default function BadgeShowcase() {
  const { usage } = useUsage();
  const [activeCategory, setActiveCategory] = useState<BadgeCategory | "ALL">("ALL");
  const [selectedBadge, setSelectedBadge] = useState<BadgeDefinition | null>(null);

  // Earned badge IDs from gamification state in store
  const earnedBadgeIds = new Set(usage.gamification?.badges?.earned?.map((b) => b.badgeId) || []);

  const filteredBadges = BADGES.filter((b) => {
    if (activeCategory === "ALL") return true;
    return b.category === activeCategory;
  });

  const totalEarned = BADGES.filter((b) => earnedBadgeIds.has(b.id)).length;

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <h3 className="text-lg font-black text-white">YDS Rozet Koleksiyonu</h3>
          </div>
          <p className="text-xs text-white/50 mt-0.5">
            Çalıştıkça, soru çözdükçe ve hedeflerine ulaştıkça yeni rozetlerin kilidi açılır.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-white/40 block">Kazanılan</span>
            <span className="text-lg font-black text-cyan-400">
              {totalEarned} / {BADGES.length}
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        <button
          onClick={() => setActiveCategory("ALL")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeCategory === "ALL"
              ? "bg-cyan-400 text-slate-950 font-black"
              : "bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          Tümü ({BADGES.length})
        </button>
        {(Object.keys(CATEGORY_NAMES) as BadgeCategory[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-cyan-400 text-slate-950 font-black"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {CATEGORY_NAMES[cat]}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredBadges.map((badge) => {
          const isEarned = earnedBadgeIds.has(badge.id);
          const rarity = RARITY_COLORS[badge.rarity] || RARITY_COLORS.common;
          const isSecretLocked = badge.hidden && !isEarned;

          return (
            <div
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer group relative ${
                isEarned
                  ? `${rarity.bg} ${rarity.border} ${rarity.glow} hover:scale-105 shadow-md`
                  : isSecretLocked
                  ? "bg-slate-950/40 border-dashed border-white/10 opacity-40 hover:opacity-70"
                  : "bg-white/[0.02] border-white/10 opacity-60 hover:opacity-90"
              }`}
            >
              {/* Badge Icon */}
              <div className="w-14 h-14 mx-auto mb-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {isSecretLocked ? "❓" : badge.icon}
              </div>

              {/* Title */}
              <h4 className="text-xs font-extrabold text-white truncate">
                {isSecretLocked ? "Gizli Rozet" : badge.title}
              </h4>

              {/* Rarity & Status */}
              <span className={`text-[10px] block mt-1 font-bold ${isEarned ? rarity.text : "text-white/40"}`}>
                {isEarned ? "✓ Açıldı" : isSecretLocked ? "Kilitli" : badge.progressLabel}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm p-6 rounded-3xl bg-slate-900 border border-white/15 text-center shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute right-4 top-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>

            <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-lg">
              {selectedBadge.hidden && !earnedBadgeIds.has(selectedBadge.id)
                ? "❓"
                : selectedBadge.icon}
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                {selectedBadge.rarity.toUpperCase()} &bull; +{selectedBadge.rewardXp} XP
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">
                {selectedBadge.hidden && !earnedBadgeIds.has(selectedBadge.id)
                  ? "Gizli Başarım"
                  : selectedBadge.title}
              </h3>
              <p className="text-xs text-white/60 mt-1 leading-relaxed">
                {selectedBadge.hidden && !earnedBadgeIds.has(selectedBadge.id)
                  ? "Bu başarıma ulaşmak için sürpriz bir kriteri tamamlamalısın!"
                  : selectedBadge.description}
              </p>
            </div>

            {/* Praise note */}
            {(!selectedBadge.hidden || earnedBadgeIds.has(selectedBadge.id)) && (
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-cyan-200 italic">
                &ldquo;{selectedBadge.wittyPraise}&rdquo;
              </div>
            )}

            <div className="pt-2">
              <span className="text-xs font-semibold text-white/50">
                {earnedBadgeIds.has(selectedBadge.id)
                  ? "🎉 Bu rozeti kazandın!"
                  : `Hedef: ${selectedBadge.targetCount} ${selectedBadge.progressLabel}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
