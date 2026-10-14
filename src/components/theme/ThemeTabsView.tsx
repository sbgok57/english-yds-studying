"use client";

import React, { useState } from "react";
import ThemeStudio from "@/components/theme/ThemeStudio";
import CustomThemeStudio from "@/components/theme/CustomThemeStudio";
import { Palette, Image as ImageIcon, Sparkles } from "lucide-react";

export default function ThemeTabsView() {
  const [activeTab, setActiveTab] = useState<"algorithmic" | "custom">("algorithmic");

  return (
    <div className="space-y-6">
      {/* Sekme Seçici */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 max-w-xl">
        <button
          type="button"
          onClick={() => setActiveTab("algorithmic")}
          className={`flex-1 min-w-[200px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === "algorithmic"
              ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-950/40"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>1.000+ Tema & Desenler</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("custom")}
          className={`flex-1 min-w-[200px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === "custom"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950/40"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Fotoğraf & Özel Palet</span>
        </button>
      </div>

      {/* Sekme İçerikleri */}
      {activeTab === "algorithmic" ? (
        <ThemeStudio />
      ) : (
        <div className="card-vibrant p-6 sm:p-8 space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gelişmiş Renk Analizi</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Fotoğrafından Renk Paleti Çıkar 🖼️
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Cihazından bir fotoğraf veya duvar kağıdı yükle; kontrastı garanti edilmiş 5 renkli uyumlu palet otomatik çıkarılsın ve siteye uygulansın.
            </p>
          </div>
          <CustomThemeStudio />
        </div>
      )}
    </div>
  );
}
