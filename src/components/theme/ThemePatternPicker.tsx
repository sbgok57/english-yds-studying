"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  PATTERN_REGISTRY,
  PATTERN_CATEGORY_LABELS,
  PatternCategory,
  ThemePatternItem,
  getSavedPatternPreference,
  applyPatternToDocument,
} from "@/lib/themes/pattern-registry";
import PatternPreview from "./PatternPreview";
import { Search, RotateCcw, Sparkles, Sliders, Sun, Moon } from "lucide-react";

export default function ThemePatternPicker() {
  const [selectedPatternId, setSelectedPatternId] = useState<string | null>(null);
  const [opacity, setOpacity] = useState<number>(0.24);
  const [scale, setScale] = useState<number>(1.0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<PatternCategory | "all">("all");
  const [previewMode, setPreviewMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = getSavedPatternPreference();
    setSelectedPatternId(saved.patternId);
    setOpacity(saved.opacity);
    setScale(saved.scale);
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(PATTERN_REGISTRY.map((p) => p.category)));
    return unique;
  }, []);

  const filteredPatterns = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PATTERN_REGISTRY.filter((p) => {
      const matchesCat = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.nameTr.toLowerCase().includes(q) ||
        p.categoryLabelTr.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleSelectPattern = (pattern: ThemePatternItem) => {
    setSelectedPatternId(pattern.id);
    applyPatternToDocument(pattern.id, opacity, scale);
  };

  const handleOpacityChange = (val: number) => {
    setOpacity(val);
    if (selectedPatternId) {
      applyPatternToDocument(selectedPatternId, val, scale);
    }
  };

  const handleScaleChange = (val: number) => {
    setScale(val);
    if (selectedPatternId) {
      applyPatternToDocument(selectedPatternId, opacity, val);
    }
  };

  const handleResetPattern = () => {
    setSelectedPatternId(null);
    setOpacity(0.24);
    setScale(1.0);
    applyPatternToDocument(null);
  };

  return (
    <section
      id="theme-pattern-picker"
      data-testid="theme-pattern-picker"
      aria-labelledby="pattern-gallery-heading"
      className="rounded-3xl border border-white/15 bg-slate-950/90 p-5 sm:p-8 space-y-6 shadow-2xl light:border-slate-200 light:bg-white/95 light:shadow-slate-900/10"
    >
      {/* Üst Başlık ve Gerçek Desen Sayısı */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 light:border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-2 light:bg-cyan-50 light:text-cyan-800 light:border-cyan-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span data-testid="pattern-registry-exact-count">
              {PATTERN_REGISTRY.length} Özgün Vektörel SVG Desen ({categories.length} Kategori)
            </span>
          </div>
          <h2 id="pattern-gallery-heading" className="text-xl sm:text-2xl font-black text-white light:text-slate-900">
            Vektörel SVG Arka Plan Desen Galerisi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 light:text-slate-600">
            Noktalı, milimetrik ızgara, topografik kontur, altıgen, blueprint, molekül ağı, takımyıldız, devre ve terrazzo dahil{" "}
            <strong className="text-slate-200 light:text-slate-800">tam {PATTERN_REGISTRY.length} gerçek SVG deseni</strong> arasından seçim yapın.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode((m) => (m === "dark" ? "light" : "dark"))}
            className="px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 flex items-center gap-1.5 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
          >
            {previewMode === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Açık Zemin Önizleme</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-300" />
                <span>Koyu Zemin Önizleme</span>
              </>
            )}
          </button>

          <button
            type="button"
            data-testid="pattern-reset-button"
            onClick={handleResetPattern}
            className="px-3.5 py-2 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-bold text-rose-200 flex items-center gap-1.5 light:border-rose-200 light:bg-rose-50 light:text-rose-700 light:hover:bg-rose-100"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Deseni Kaldır (Sıfırla)</span>
          </button>
        </div>
      </div>

      {/* Opaklık, Ölçek ve Arama Kontrolleri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/[0.03] p-4 rounded-2xl border border-white/10 light:bg-slate-50 light:border-slate-200">
        {/* Arama */}
        <div className="relative">
          <label htmlFor="pattern-search-input" className="block text-[11px] font-bold text-slate-300 mb-1 light:text-slate-700">
            Desen Ara
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="pattern-search-input"
              data-testid="pattern-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Blueprint, molekül, ızgara, dalga..."
              className="w-full rounded-xl bg-slate-900 border border-white/15 pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 light:bg-white light:border-slate-300 light:text-slate-900 light:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Opaklık Ayarı */}
        <div>
          <label
            htmlFor="pattern-opacity-slider"
            className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1 light:text-slate-700"
          >
            <span className="flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              Desen Yoğunluğu (Opaklık)
            </span>
            <span className="font-mono text-cyan-300">%{Math.round(opacity * 100)}</span>
          </label>
          <input
            id="pattern-opacity-slider"
            data-testid="pattern-opacity-slider"
            type="range"
            min={0.08}
            max={0.5}
            step={0.02}
            value={opacity}
            onChange={(e) => handleOpacityChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-2"
          />
        </div>

        {/* Ölçek Ayarı */}
        <div>
          <label
            htmlFor="pattern-scale-slider"
            className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1 light:text-slate-700"
          >
            <span>Desen Ölçeği (Boyut)</span>
            <span className="font-mono text-cyan-300">{scale.toFixed(2)}x</span>
          </label>
          <input
            id="pattern-scale-slider"
            data-testid="pattern-scale-slider"
            type="range"
            min={0.6}
            max={1.8}
            step={0.1}
            value={scale}
            onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-2"
          />
        </div>
      </div>

      {/* Kategori Filtre Şeridi */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeCategory === "all"
              ? "bg-cyan-500 text-slate-950 shadow"
              : "bg-white/5 text-slate-300 hover:bg-white/10 light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200"
          }`}
        >
          Tümü ({PATTERN_REGISTRY.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeCategory === cat
                ? "bg-cyan-500 text-slate-950 shadow"
                : "bg-white/5 text-slate-300 hover:bg-white/10 light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200"
            }`}
          >
            {PATTERN_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Desen Kartları Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {filteredPatterns.map((pattern) => (
          <PatternPreview
            key={pattern.id}
            pattern={pattern}
            isSelected={selectedPatternId === pattern.id}
            opacity={opacity}
            scale={scale}
            previewMode={previewMode}
            onSelect={handleSelectPattern}
          />
        ))}
      </div>
    </section>
  );
}
