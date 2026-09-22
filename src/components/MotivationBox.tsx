"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { pickMotivation, MotivationContext, DEFAULT_MOTIVATION } from "@/lib/motivation-rotator";
import { MotivationItem } from "@/lib/data-motivations";
import {
  MOTIVATION_VIDEOS,
  MOTIVATION_VIDEOS_COUNT,
  MOTIVATION_VIDEO_CATEGORIES,
  CuratedMotivationVideo,
  MotivationVideoCategory,
} from "@/lib/data-motivation-videos";

interface MotivationBoxProps {
  context?: MotivationContext;
  className?: string;
  showRefresh?: boolean;
}

export default function MotivationBox({
  context = "home",
  className = "",
  showRefresh = true,
}: MotivationBoxProps) {
  const [motivation, setMotivation] = useState<MotivationItem>(DEFAULT_MOTIVATION);
  const [mounted, setMounted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MotivationVideoCategory | "all">("all");
  const [currentClipIndex, setCurrentClipIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    setMotivation(pickMotivation(context));
  }, [context]);

  // Handle ESC key to safely close video modal
  // SAFETY: ensure ESC key closes modal and releases audio/video iframe
  useEffect(() => {
    if (!videoOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoOpen]);

  const refresh = () => {
    setMotivation(pickMotivation(context));
  };

  // Filtered video list based on selected category tab
  const filteredVideos: CuratedMotivationVideo[] = useMemo(() => {
    if (selectedCategory === "all") return MOTIVATION_VIDEOS;
    return MOTIVATION_VIDEOS.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  // Safe active video calculation
  const currentVideo: CuratedMotivationVideo = useMemo(() => {
    if (filteredVideos.length === 0) return MOTIVATION_VIDEOS[0];
    const safeIndex = ((currentClipIndex % filteredVideos.length) + filteredVideos.length) % filteredVideos.length;
    return filteredVideos[safeIndex];
  }, [filteredVideos, currentClipIndex]);

  const handleOpenVideo = useCallback(() => {
    // Pick a random clip initially when opened
    const randomIdx = Math.floor(Math.random() * MOTIVATION_VIDEOS.length);
    setSelectedCategory("all");
    setCurrentClipIndex(randomIdx);
    setVideoOpen(true);
  }, []);

  const handleNextClip = useCallback(() => {
    setCurrentClipIndex((prev) => prev + 1);
  }, []);

  const handlePrevClip = useCallback(() => {
    setCurrentClipIndex((prev) => prev - 1);
  }, []);

  const handleRandomClip = useCallback(() => {
    if (filteredVideos.length <= 1) return;
    const nextRandom = Math.floor(Math.random() * filteredVideos.length);
    setCurrentClipIndex(nextRandom);
  }, [filteredVideos.length]);

  if (!mounted) {
    return (
      <div className={`p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl ${className}`}>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-3 bg-white/5 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  // Safe fallbacks for schema fields
  const quoteTr = motivation.turkish || (motivation as any).quoteTr || "";
  const quoteEn = motivation.english || (motivation as any).quoteEn || "";
  const author = motivation.source?.attribution || (motivation as any).author || "Anonim";
  const kankaNote = motivation.friendlyNote || (motivation as any).kankaNote || "";

  return (
    <div
      className={`relative overflow-hidden p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/90 via-purple-950/20 to-slate-950/90 backdrop-blur-xl shadow-xl shadow-purple-950/30 ${className}`}
    >
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Günün Motivasyonu &bull; {motivation.category.toUpperCase().replace("_", " ")}
          </span>
        </div>
        {showRefresh && (
          <button
            onClick={refresh}
            title="Başka bir motivasyon sözü göster"
            className="text-xs text-white/50 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1"
          >
            <span>🔄</span>
            <span className="hidden sm:inline">Değiştir</span>
          </button>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
          &ldquo;{quoteTr}&rdquo;
        </p>
        <p className="text-sm font-medium italic text-purple-200/70">
          &ldquo;{quoteEn}&rdquo;
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-semibold text-white/40">
            — {author}
          </span>
          <button
            onClick={handleOpenVideo}
            title="100'den fazla motivasyon klibini izlemek için tıkla"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all shadow-sm"
          >
            <span>🎬</span> İlham Klibi ({MOTIVATION_VIDEOS_COUNT}+ Video)
          </button>
        </div>

        {/* Kanka Notu */}
        <div className="mt-4 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-2">
          <span className="text-base shrink-0">🤝</span>
          <div>
            <strong className="font-bold text-white">Kanka Notu:</strong> {kankaNote}
          </div>
        </div>
      </div>

      {/* Safe YouTube Modal with 100+ Curated Clips & Crystal-Clear Close Buttons */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={(e) => {
            // SAFETY: Close modal if backdrop overlay is clicked
            if (e.target === e.currentTarget) setVideoOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="YDS Master Motivasyon ve İlham Klibi Modalı"
        >
          <div className="relative w-full max-w-3xl my-auto bg-slate-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/60 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-950/90 gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xl shrink-0">🎬</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm sm:text-base font-bold text-white truncate">
                      YDS Master İlham Molası
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {MOTIVATION_VIDEOS_COUNT} Klip Kütüphanesi
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50 truncate">
                    Seçili Klip: {((currentClipIndex % filteredVideos.length) + filteredVideos.length) % filteredVideos.length + 1} / {filteredVideos.length} &bull; {currentVideo.categoryEmoji} {currentVideo.categoryLabelTr}
                  </p>
                </div>
              </div>

              {/* Prominent Header Close Button ("✕ Kapat") */}
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white border border-red-500/40 transition-all text-xs sm:text-sm font-bold shadow-md hover:shadow-red-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 group"
                aria-label="Videoyu Kapat (ESC)"
                title="Pencereyi Kapat (ESC tuşu veya tıkla)"
              >
                <span className="text-base font-black transition-transform group-hover:rotate-90">✕</span>
                <span className="font-semibold">Kapat</span>
                <span className="text-[10px] opacity-70 hidden sm:inline">(ESC)</span>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-950/60 border-b border-white/5 overflow-x-auto no-scrollbar text-xs">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentClipIndex(0);
                }}
                className={`px-3 py-1 rounded-lg font-medium shrink-0 transition-colors ${
                  selectedCategory === "all"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                Tümü ({MOTIVATION_VIDEOS_COUNT})
              </button>
              {MOTIVATION_VIDEO_CATEGORIES.map((cat) => {
                const count = MOTIVATION_VIDEOS.filter((v) => v.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentClipIndex(0);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-medium shrink-0 flex items-center gap-1 transition-colors ${
                      isSelected
                        ? "bg-purple-600 text-white shadow-sm"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.labelTr}</span>
                    <span className="opacity-60 text-[10px]">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* YouTube Embed Player (Safe 16:9, nocookie) */}
            <div className="relative pt-[56.25%] w-full bg-black shadow-inner">
              <iframe
                key={currentVideo.videoId}
                src={`https://www.youtube-nocookie.com/embed/${currentVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Video Info & Quote */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900 to-slate-950 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    {currentVideo.title}
                  </h3>
                  <p className="text-xs text-purple-300/80 font-medium">
                    🎙️ {currentVideo.creator} &bull; ⏱️ {currentVideo.durationApprox}
                  </p>
                </div>

                {/* Switch Clip Buttons */}
                <div className="flex items-center gap-1.5 shrink-0 pt-1 sm:pt-0">
                  <button
                    type="button"
                    onClick={handlePrevClip}
                    title="Önceki Klip"
                    className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>◀</span>
                    <span className="hidden sm:inline">Önceki</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRandomClip}
                    title="Rastgele Başka Klip İzle"
                    className="px-3 py-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                  >
                    <span>🔀</span>
                    <span>Rastgele Klip</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextClip}
                    title="Sonraki Klip"
                    className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <span className="hidden sm:inline">Sonraki</span>
                    <span>▶</span>
                  </button>
                </div>
              </div>

              {/* Turkish Quote Badge */}
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-100 flex items-start gap-2.5">
                <span className="text-base shrink-0">💡</span>
                <div className="leading-relaxed">
                  <strong className="text-amber-300 font-bold">Önemli Çıkarım:</strong> &ldquo;{currentVideo.keyQuoteTr}&rdquo;
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar with explicit "✕ Kapat ve Çalışmaya Dön" button */}
            <div className="px-4 sm:px-6 py-3 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-white/60 text-center sm:text-left">
                🚀 Derin bir nefes al kanka. Hedeflediğin 80+ puan seni bekliyor!
              </div>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-white hover:text-red-200 border border-white/20 hover:border-red-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <span className="text-sm font-black text-red-400">✕</span>
                <span>Kapat ve Çalışmaya Dön</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
