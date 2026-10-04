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
import { X, Sun, Moon, Sparkles, Check, Search, Palette, RotateCcw } from "lucide-react";

interface ThemeQuickModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ThemeQuickModal({ open, onClose }: ThemeQuickModalProps) {
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

    const handleThemeChange = (e: any) => {
      if (e.detail?.theme) {
        setActiveTheme(e.detail.theme);
        setActiveMode(e.detail.mode);
      }
    };

    window.addEventListener("yds:theme-changed", handleThemeChange);
    return () => window.removeEventListener("yds:theme-changed", handleThemeChange);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

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

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Şeffaf Temiz Arkaplan Katmanı (Karanlık çamurlu değil, net cam) */}
      <div
        className="absolute inset-0 bg-slate-900/30 dark:bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Gövdesi */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-2xl border border-white/20 light:border-slate-300 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Üst Başlık & Kontroller */}
        <div className="p-4 sm:p-5 border-b border-white/10 light:border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center text-xl shadow-md shrink-0">
              🎨
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white light:text-slate-900 truncate">
                  1.000+ Algoritmik Tema Motoru
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 light:bg-cyan-100 light:text-cyan-800 font-bold shrink-0">
                  {THEME_COUNT} Tema
                </span>
              </div>
              <p className="text-xs text-white/60 light:text-slate-500 truncate">
                Tüm sitede anında canlı uygulanan kristal netliğinde renk paletleri
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Dark / Light Toggle */}
            <div className="flex items-center bg-white/5 light:bg-slate-100 p-1 rounded-xl border border-white/10 light:border-slate-300">
              <button
                onClick={() => handleToggleMode("dark")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                  activeMode === "dark"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-white/60 light:text-slate-600 hover:text-white"
                }`}
                title="Karanlık Mod"
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Koyu</span>
              </button>
              <button
                onClick={() => handleToggleMode("light")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                  activeMode === "light"
                    ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                    : "text-white/60 light:text-slate-600 hover:text-white"
                }`}
                title="Aydınlık Mod"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Açık</span>
              </button>
            </div>

            {/* Kapat Butonu */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-white/15 light:border-slate-300 bg-white/5 light:bg-slate-100 hover:bg-white/15 text-white/80 light:text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Arama ve Kategori Filtresi */}
        <div className="p-3 sm:p-4 border-b border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50/50 space-y-2.5 shrink-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 light:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tema veya renk ara (örn: Tokyo, Oxford, Neon, Altın)..."
                className="w-full bg-black/30 light:bg-white border border-white/15 light:border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs text-white light:text-slate-900 placeholder:text-white/40 light:placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl border border-white/15 light:border-slate-300 bg-white/5 light:bg-white hover:bg-white/10 text-white/70 light:text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0"
              title="Varsayılan Temaya Dön"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>

          {/* ⚡ HIZLI FİLTRE: 250+ DESENLİ & 750 DESENSİZ SEÇENEKLERİ (ÖNE ÇIKAN BÜYÜK BUTONLAR) */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(selectedCategory === "patterned" ? "all" : "patterned");
                setCurrentPage(1);
              }}
              className={`p-2.5 rounded-2xl border text-center transition-all flex items-center justify-center gap-2 font-black text-xs shadow-md ${
                selectedCategory === "patterned"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-300 ring-2 ring-pink-400 scale-[1.02]"
                  : "bg-purple-950/40 border-purple-500/30 text-purple-200 hover:bg-purple-900/50"
              }`}
            >
              <span className="text-base">📐</span>
              <span>Desenli (250 Tema)</span>
              {selectedCategory === "patterned" && <Check className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory(selectedCategory === "solid" ? "all" : "solid");
                setCurrentPage(1);
              }}
              className={`p-2.5 rounded-2xl border text-center transition-all flex items-center justify-center gap-2 font-black text-xs shadow-md ${
                selectedCategory === "solid"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-300 ring-2 ring-cyan-400 scale-[1.02]"
                  : "bg-cyan-950/40 border-cyan-500/30 text-cyan-200 hover:bg-cyan-900/50"
              }`}
            >
              <span className="text-base">✨</span>
              <span>Desensiz / Düz Renkli (750 Tema)</span>
              {selectedCategory === "solid" && <Check className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          </div>

          {/* Kategoriler Yatay Çubuk */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {THEME_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm font-black scale-105"
                    : "bg-white/5 light:bg-white border border-white/10 light:border-slate-300 text-white/70 light:text-slate-600 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Temalar Listesi Izgarası */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 scrollbar-thin">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {pagedThemes.themes.map((theme) => {
              const isSelected = activeTheme?.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme)}
                  className={`group relative p-3 rounded-2xl border text-left transition-all flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? "ring-2 ring-cyan-400 border-transparent shadow-lg shadow-cyan-500/20 scale-[1.02]"
                      : "border-white/10 light:border-slate-200 bg-white/5 light:bg-white hover:border-white/25 light:hover:border-slate-300 hover:bg-white/10"
                  }`}
                  style={{
                    backgroundColor: activeMode === "dark" ? theme.darkCard : theme.lightCard,
                  }}
                >
                  <div className="space-y-1.5 w-full">
                    {/* Renk Çemberleri */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full shadow-sm ring-1 ring-white/30"
                        style={{ backgroundColor: theme.primary }}
                        title="Ana Renk"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-sm ring-1 ring-white/30"
                        style={{ backgroundColor: theme.secondary }}
                        title="İkincil Renk"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-sm ring-1 ring-white/30"
                        style={{ backgroundColor: theme.accent }}
                        title="Vurgu Rengi"
                      />
                      {isSelected && (
                        <span className="ml-auto w-4 h-4 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 pt-1">
                      <span
                        className="text-xs font-black block truncate"
                        style={{ color: activeMode === "dark" ? theme.darkText : theme.lightText }}
                      >
                        {theme.categoryEmoji} {theme.name}
                      </span>
                      <span className="text-[10px] opacity-70 block font-mono" style={{ color: activeMode === "dark" ? theme.darkText : theme.lightText }}>
                        #{theme.id} · {theme.category}
                      </span>
                    </div>
                  </div>

                  {/* Alt Degrade Çizgi */}
                  <div
                    className="w-full h-1.5 rounded-full mt-2"
                    style={{ background: theme.gradient }}
                  />
                </button>
              );
            })}
          </div>

          {pagedThemes.themes.length === 0 && (
            <div className="text-center py-12 text-white/50 light:text-slate-500">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="text-xs">Aramanızla eşleşen tema bulunamadı.</p>
            </div>
          )}
        </div>

        {/* Alt Sayfalama */}
        <div className="p-3 sm:p-4 border-t border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex items-center justify-between gap-2 shrink-0">
          <span className="text-xs text-white/60 light:text-slate-600 font-mono">
            Sayfa {pagedThemes.currentPage} / {pagedThemes.totalPages} ({pagedThemes.totalCount} tema)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              disabled={pagedThemes.currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-xl border border-white/10 light:border-slate-300 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-800 transition-colors"
            >
              &larr; Önceki
            </button>
            <button
              disabled={pagedThemes.currentPage >= pagedThemes.totalPages}
              onClick={() => setCurrentPage((p) => Math.min(pagedThemes.totalPages, p + 1))}
              className="px-3 py-1.5 rounded-xl border border-white/10 light:border-slate-300 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-800 transition-colors"
            >
              Sonraki &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
