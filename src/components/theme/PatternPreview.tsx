"use client";

import React from "react";
import { ThemePatternItem } from "@/lib/themes/pattern-registry";

export interface PatternPreviewProps {
  pattern: ThemePatternItem;
  isSelected?: boolean;
  opacity?: number;
  scale?: number;
  previewMode?: "dark" | "light";
  onSelect?: (pattern: ThemePatternItem) => void;
}

export default function PatternPreview({
  pattern,
  isSelected = false,
  opacity,
  scale = 1.0,
  previewMode = "dark",
  onSelect,
}: PatternPreviewProps) {
  const effectiveOpacity = opacity ?? pattern.defaultOpacity;
  const basePx = parseInt(pattern.backgroundSize, 10) || 40;
  const scaledPx = Math.round(basePx * scale);

  return (
    <button
      type="button"
      data-testid={`pattern-card-${pattern.id}`}
      data-pattern-category={pattern.category}
      aria-pressed={isSelected}
      onClick={() => onSelect?.(pattern)}
      className={`group relative rounded-2xl border p-3.5 text-left transition-all flex flex-col justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        isSelected
          ? "border-cyan-400 bg-cyan-950/30 ring-2 ring-cyan-400/50 shadow-lg"
          : "border-white/10 bg-slate-900/70 hover:border-white/25 hover:bg-slate-900"
      }`}
    >
      {/* Canlı SVG Desen Önizleme Kutusu */}
      <div
        className={`relative w-full h-24 rounded-xl overflow-hidden border ${
          previewMode === "light"
            ? "bg-slate-100 border-slate-300"
            : "bg-slate-950 border-white/10"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity"
          style={{
            backgroundImage: pattern.cssBackground,
            backgroundSize: `${scaledPx}px ${scaledPx}px`,
            backgroundRepeat: "repeat",
            opacity: Math.min(0.85, effectiveOpacity * 2.2),
          }}
        />
        <div className="relative z-10 p-2.5 flex items-center justify-between">
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
              previewMode === "light"
                ? "bg-white/90 text-slate-800 border border-slate-300"
                : "bg-slate-950/85 text-cyan-300 border border-white/15"
            }`}
          >
            {pattern.categoryLabelTr}
          </span>
          {isSelected && (
            <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-slate-950 text-[10px] font-black shadow">
              ✓ Aktif
            </span>
          )}
        </div>
      </div>

      {/* Desen Başlığı ve Teknik Etiketler */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
            {pattern.nameTr}
          </span>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
          <span>ID: {pattern.id}</span>
          <span>{pattern.backgroundSize}</span>
        </div>
      </div>
    </button>
  );
}
