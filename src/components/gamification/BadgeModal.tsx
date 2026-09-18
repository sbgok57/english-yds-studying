"use client";

import React, { useEffect } from "react";
import { BadgeDefinition, RARITY_COLORS } from "@/lib/gamification/badges-data";

interface BadgeModalProps {
  badge: BadgeDefinition | null;
  onClose: () => void;
}

export default function BadgeModal({ badge, onClose }: BadgeModalProps) {
  useEffect(() => {
    if (!badge) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [badge, onClose]);

  if (!badge) return null;

  const rarity = RARITY_COLORS[badge.rarity] || RARITY_COLORS.common;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-md p-8 rounded-3xl border-2 text-center shadow-2xl overflow-hidden transition-all ${rarity.bg} ${rarity.border} ${rarity.glow}`}
      >
        {/* Particle / Shine effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Badge Icon Animation Container */}
        <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 animate-spin blur-md opacity-70" />
          <div className="relative w-20 h-20 rounded-2xl bg-slate-950 border border-white/20 flex items-center justify-center text-4xl shadow-xl">
            {badge.icon}
          </div>
        </div>

        {/* Category & Rarity */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className={`text-[11px] font-extrabold uppercase tracking-wider ${rarity.text}`}>
            {badge.rarity.toUpperCase()} ROZET
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="text-[11px] font-bold uppercase text-white/50">
            +{badge.rewardXp} XP
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-black text-white mb-2">{badge.title}</h3>
        <p className="text-xs text-white/70 max-w-xs mx-auto leading-relaxed mb-4">
          {badge.description}
        </p>

        {/* Witty Turkish Praise */}
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-cyan-200 mb-6 italic">
          &ldquo;{badge.wittyPraise}&rdquo;
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all"
        >
          Harika! Maraton Devam Ediyor 🚀
        </button>
      </div>
    </div>
  );
}
