"use client";

import { useEffect } from "react";

export interface VideoOption {
  label: string;
  emoji: string;
  query: string;
  tip: string;
}

interface VideoModalProps {
  title: string;
  options: VideoOption[];
  active: VideoOption | null;
  onClose: () => void;
  onSelect: (o: VideoOption) => void;
}

export default function VideoModal({
  title,
  options,
  active,
  onClose,
  onSelect,
}: VideoModalProps) {
  const current = active || options[0];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(current?.query || "")}`;
  const giphyUrl = `https://giphy.com/search/${encodeURIComponent(current?.query || "")}`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="card-vibrant w-full max-w-2xl bg-slate-900/95 border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative anim-pop">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎬</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">{title}</h2>
              <p className="text-xs text-white/50">Görsel & İşitsel Hafıza Destek Modülü</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all text-sm font-bold"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        {/* Sekmeler */}
        <div className="flex flex-wrap gap-2 mb-6">
          {options.map((opt) => {
            const isSel = current?.label === opt.label;
            return (
              <button
                key={opt.label}
                onClick={() => onSelect(opt)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                  isSel
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
                }`}
              >
                <span>{opt.emoji}</span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* İçerik */}
        {current && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-xs text-white/40 font-mono mb-1">Arama Konusu:</div>
              <div className="text-base font-bold text-cyan-300">"{current.query}"</div>
              <div className="text-xs text-white/60 mt-2">{current.tip}</div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <a
                href={ytUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 flex items-center gap-3 text-red-200 hover:text-white transition-all group font-bold text-sm"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">📺</span>
                <div>
                  <p className="leading-tight">YouTube'da İzle</p>
                  <p className="text-[11px] text-red-200/60 font-normal">Video & telaffuz anlatımları</p>
                </div>
              </a>

              <a
                href={giphyUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 flex items-center gap-3 text-cyan-200 hover:text-white transition-all group font-bold text-sm"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">🎞️</span>
                <div>
                  <p className="leading-tight">Giphy Sahneleri</p>
                  <p className="text-[11px] text-cyan-200/60 font-normal">Dizi & film alıntıları</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="text-xs text-white/50 hover:text-white underline underline-offset-4"
              >
                Pencereyi Kapat ve Çalışmaya Devam Et
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
