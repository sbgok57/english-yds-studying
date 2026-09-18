"use client";

import React, { useState, useEffect } from "react";
import { pickMotivation, MotivationContext, DEFAULT_MOTIVATION } from "@/lib/motivation-rotator";
import { MotivationItem } from "@/lib/data-motivations";

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

  useEffect(() => {
    setMounted(true);
    setMotivation(pickMotivation(context));
  }, [context]);

  const refresh = () => {
    setMotivation(pickMotivation(context));
  };

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
  const videoId = motivation.video?.videoId || (motivation as any).youtubeVideoId || "ZXsQAXx_ao0";

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
            onClick={() => setVideoOpen(true)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
          >
            <span>🎬</span> İlham Klibi
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

      {/* Safe YouTube Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎬</span>
                <h4 className="text-sm font-bold text-white">YDS Master İlham Molası</h4>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="relative pt-[56.25%] w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Motivational Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <div className="p-4 bg-slate-950/60 text-xs text-center text-white/50">
              Derin bir nefes al kanka. Hedeflediğin 80+ puan seni bekliyor! 🚀
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
