"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { NewsArticle, NewsCategory, NewsLevel } from "@/lib/news/types";
import { NEWS_CATEGORIES } from "@/lib/news/categories";
import { getNewsArticles, TOTAL_NEWS_COUNT } from "@/lib/news/engine";
import { NewspaperClippingCard } from "@/components/news/NewspaperClippingCard";
import { NewsReaderModal } from "@/components/news/NewsReaderModal";

export default function NewsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<NewsLevel | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  // Paginated data retrieval from engine
  const pagedData = useMemo(() => {
    return getNewsArticles({
      page: currentPage,
      limit: 24, // 24 articles per page for smooth 3/4 column grid
      category: selectedCategory,
      level: selectedLevel,
      searchQuery,
    });
  }, [currentPage, selectedCategory, selectedLevel, searchQuery]);

  const handleOpenArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsReaderOpen(true);
  };

  const handleCategoryChange = (cat: NewsCategory | "all") => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleLevelChange = (lvl: NewsLevel | "all") => {
    setSelectedLevel(lvl);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-cyan-300 font-semibold">Gündem Haberleri</span>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <span>📰</span> {TOTAL_NEWS_COUNT}+ Kategorize Edilmiş Güncel & Akademik Haber
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
              YDS Master İngilizce Haber & Basın Arşivi
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Dünya basınından derlenen güncel haberleri gazete küpürleri eşliğinde oku, Amerikan/İngiliz aksanıyla sesli dinle,
              tıklandığında Türkçe çevirisini gör ve YDS için kritik eş anlamlı kelimeleri örnek cümleleriyle öğren!
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-300 font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                🔊 Sesli Okuma Destekli
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                🇹🇷 Çift Dilli Çeviri
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                🔤 Eş Anlamlı Kelime Bankası
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                📰 Gazete Küpürü Düzeni
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Live Search Controls */}
        <div className="space-y-4 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl shadow-xl">
          {/* Search Box */}
          <div className="relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Haber başlığı, konu veya kelime ara (Örn: quantum, climate, policy)..."
              className="w-full px-4 py-3 rounded-2xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-700"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Kategoriler ({pagedData.totalCount} Haber):
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === "all"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                }`}
              >
                Tümü ({TOTAL_NEWS_COUNT})
              </button>
              {NEWS_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.labelTr.split("&")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-xs">
            <span className="text-slate-400 font-semibold">CEFR Seviyesi:</span>
            {(["all", "A2", "B1", "B2", "C1", "C2"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => handleLevelChange(lvl)}
                className={`px-2.5 py-1 rounded-lg font-mono transition-all ${
                  selectedLevel === lvl
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {lvl === "all" ? "Tüm Düzeyler" : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Görüntülenen: Sayfa <strong className="text-white">{pagedData.currentPage}</strong> / {pagedData.totalPages} &bull; Toplam{" "}
              <strong className="text-cyan-400">{pagedData.totalCount}</strong> Haber
            </span>
          </div>

          {pagedData.articles.length === 0 ? (
            <div className="p-12 text-center bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
              <span className="text-4xl">🔍</span>
              <h3 className="text-base font-bold text-white">Aradığınız kriterlere uygun haber bulunamadı.</h3>
              <p className="text-xs text-slate-400">Farklı bir arama terimi deneyebilir veya filtreleri sıfırlayabilirsiniz.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagedData.articles.map((article) => (
                <NewspaperClippingCard
                  key={article.id}
                  article={article}
                  onRead={handleOpenArticle}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {pagedData.totalPages > 1 && (
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={!pagedData.hasPrevPage}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all flex items-center gap-1"
              >
                ← Önceki Sayfa
              </button>

              <div className="text-xs text-slate-400 font-mono">
                Sayfa {pagedData.currentPage} / {pagedData.totalPages}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(pagedData.totalPages, p + 1))}
                disabled={!pagedData.hasNextPage}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all flex items-center gap-1"
              >
                Sonraki Sayfa →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reader Modal */}
      <NewsReaderModal
        article={selectedArticle}
        isOpen={isReaderOpen}
        onClose={() => {
          setIsReaderOpen(false);
          setSelectedArticle(null);
        }}
      />
    </div>
  );
}
