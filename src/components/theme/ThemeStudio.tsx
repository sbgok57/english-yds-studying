"use client";

import React, { useState, useEffect } from "react";
import {
  THEME_COUNT,
  THEME_CATEGORIES,
  ThemePalette,
  getThemesPage,
  applyTheme,
  getSavedTheme,
} from "@/lib/themes/engine";
import { Sun, Moon, Sparkles, Check, Search, Palette, RotateCcw } from "lucide-react";

export default function ThemeStudio() {
  const [activeTheme, setActiveTheme] = useState<ThemePalette | null>(null);
  const [activeMode, setActiveMode] = useState<"dark" | "light">("dark");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const { theme, mode } = getSavedTheme();
    setActiveTheme(theme);
    setActiveMode(mode);
    applyTheme(theme.id, mode);

    const handleThemeChange = (e: any) => {
      if (e.detail?.theme) {
        setActiveTheme(e.detail.theme);
        setActiveMode(e.detail.mode);
      }
    };

    window.addEventListener("yds:theme-changed", handleThemeChange);
    return () => window.removeEventListener("yds:theme-changed", handleThemeChange);
  }, []);

  const pagedThemes = getThemesPage({
    page: currentPage,
    limit: 24,
    category: selectedCategory,
    search: searchQuery,
  });

  const handleSelectTheme = (theme: ThemePalette) => {
    setActiveTheme(theme);
    applyTheme(theme.id, activeMode);
  };

  const handleToggleMode = (mode: "dark" | "light") => {
    setActiveMode(mode);
    if (activeTheme) {
      applyTheme(activeTheme.id, mode);
    }
  };

  const handleReset = () => {
    const defaultId = 1;
    setActiveMode("dark");
    applyTheme(defaultId, "dark");
    const { theme } = getSavedTheme();
    setActiveTheme(theme);
  };

  if (!mounted) {
    return (
      <div className="card-vibrant p-6 space-y-4 animate-pulse">
        <div className="h-6 bg-white/10 rounded w-1/3"></div>
        <div className="h-32 bg-white/5 rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div className="card-vibrant p-6 sm:p-8 space-y-6">
      {/* Başlık ve Mod Geçişi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono">
            <Palette className="w-3.5 h-3.5" />
            <span>2.000 Benzersiz Tema Stüdyosu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>🎨</span> Renk & Tema Kişiselleştirme
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            İster koyu (Dark) ister yüksek kontrastlı aydınlık (Light) modda 2.000 farklı tema arasından tarzını seç.
          </p>
        </div>

        {/* Karanlık / Aydınlık Mod Butonları */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700/80">
          <button
            onClick={() => handleToggleMode("dark")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeMode === "dark"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Karanlık Mod</span>
          </button>
          <button
            onClick={() => handleToggleMode("light")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeMode === "light"
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-md shadow-amber-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Aydınlık Mod</span>
          </button>
        </div>
      </div>

      {/* Aktif Tema Kartı Özeti */}
      {activeTheme && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-slate-700/80 flex flex-wrap items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl shadow-md border border-white/20 flex items-center justify-center text-xl shrink-0"
              style={{ background: activeTheme.gradient }}
            >
              <span>{activeTheme.categoryEmoji}</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Şu Anki Aktif Teman:</div>
              <h3 className="text-base font-bold text-white">{activeTheme.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 font-mono">
                  {activeMode === "dark" ? "🌙 Karanlık Mod" : "☀️ Aydınlık Mod"}
                </span>
                <span className="text-[10px] text-slate-400">
                  Tema No: #{activeTheme.id}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-mono">Palet:</span>
              <div
                className="w-5 h-5 rounded-full border border-white/30 shadow-sm"
                style={{ backgroundColor: activeTheme.primary }}
                title="Ana Vurgu"
              />
              <div
                className="w-5 h-5 rounded-full border border-white/30 shadow-sm"
                style={{ backgroundColor: activeTheme.secondary }}
                title="İkincil Renk"
              />
              <div
                className="w-5 h-5 rounded-full border border-white/30 shadow-sm"
                style={{ backgroundColor: activeTheme.accent }}
                title="Işıltı Vurgusu"
              />
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-colors"
              title="Varsayılan temaya dön"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>
      )}

      {/* Arama ve Kategori Filtreleri */}
      <div className="space-y-3">
        {/* Arama Kutusu */}
        <div className="relative max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Tema adı, no (#42) veya anahtar kelime ara..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-[11px] px-1.5 py-0.5 rounded bg-slate-700"
            >
              Temizle
            </button>
          )}
        </div>

        {/* Kategori Butonları */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {THEME_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-600/30"
                  : "bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tema Izgarası (Grid) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            Görüntülenen: Sayfa <strong className="text-white">{pagedThemes.currentPage}</strong> / {pagedThemes.totalPages} &bull; Toplam{" "}
            <strong className="text-cyan-400">{pagedThemes.totalCount}</strong> Tema
          </span>
        </div>

        {pagedThemes.themes.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-3xl">🔍</span>
            <p className="text-sm font-semibold text-white">Eşleşen tema bulunamadı.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-3 py-1.5 bg-cyan-600 text-white text-xs font-bold rounded-xl"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {pagedThemes.themes.map((theme) => {
              const isSelected = activeTheme?.id === theme.id;
              return (
                <div
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme)}
                  className={`relative p-3 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between gap-3 text-left ${
                    isSelected
                      ? "bg-slate-800/90 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/50"
                      : "bg-slate-900/70 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-2">
                    {/* Degrade Renk Şeridi & Önizleme */}
                    <div
                      className="h-14 rounded-xl shadow-inner border border-white/10 flex items-center justify-between p-2"
                      style={{ background: theme.gradient }}
                    >
                      <span className="text-lg drop-shadow">{theme.categoryEmoji}</span>
                      <div className="flex items-center gap-1">
                        <div
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <div
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: theme.secondary }}
                        />
                        <div
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: theme.accent }}
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate" title={theme.name}>
                        {theme.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {theme.category}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">
                      #{theme.id}
                    </span>
                    {isSelected ? (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Seçili</span>
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectTheme(theme);
                        }}
                        className="text-[10px] font-semibold text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
                      >
                        Uygula
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Sayfalama (Pagination) */}
        {pagedThemes.totalPages > 1 && (
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-800">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={pagedThemes.currentPage <= 1}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all"
            >
              ← Önceki
            </button>
            <div className="text-xs text-slate-400 font-mono">
              Sayfa {pagedThemes.currentPage} / {pagedThemes.totalPages}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(pagedThemes.totalPages, p + 1))}
              disabled={pagedThemes.currentPage >= pagedThemes.totalPages}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all"
            >
              Sonraki →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
