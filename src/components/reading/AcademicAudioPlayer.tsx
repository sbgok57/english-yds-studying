"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Square,
  SkipForward,
  SkipBack,
  Volume2,
  Gauge,
  Sparkles,
  Loader2,
} from "lucide-react";
import { clientAudio } from "@/lib/tts/audio-client";
import { ACCENT_OPTIONS, AccentCode, GenderCode } from "@/components/tts/TTSPlayer";
import { cn } from "@/lib/utils";

interface AcademicAudioPlayerProps {
  title: string;
  paragraphs: string[];
  activeParagraph: number;
  onParagraphSelect: (index: number) => void;
  className?: string;
}

export default function AcademicAudioPlayer({
  title,
  paragraphs,
  activeParagraph,
  onParagraphSelect,
  className,
}: AcademicAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [accent, setAccent] = useState<AccentCode>("en-GB");
  const [gender, setGender] = useState<GenderCode>("female");
  const isPlayingRef = useRef(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Sayfa değiştiğinde veya bileşen unmount olduğunda sesi durdur
  useEffect(() => {
    return () => {
      clientAudio.stopAll();
    };
  }, []);

  const playParagraph = async (index: number) => {
    if (index < 0 || index >= paragraphs.length) {
      setIsPlaying(false);
      setLoading(false);
      return;
    }

    onParagraphSelect(index);
    setLoading(true);

    const paragraphText = paragraphs[index];

    await clientAudio.play(paragraphText, {
      accent,
      gender,
      rate: speed,
      contentType: "long-form",
      onStart: () => {
        setLoading(false);
        setIsPlaying(true);
      },
      onEnd: () => {
        // Otomatik playlist: Bir sonraki paragrafa pürüzsüz geç
        if (isPlayingRef.current && index + 1 < paragraphs.length) {
          playParagraph(index + 1);
        } else {
          setIsPlaying(false);
          setLoading(false);
        }
      },
      onError: () => {
        setIsPlaying(false);
        setLoading(false);
      },
    });
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      clientAudio.stopAll();
      setIsPlaying(false);
      setLoading(false);
    } else {
      setIsPlaying(true);
      playParagraph(activeParagraph);
    }
  };

  const handleNextParagraph = () => {
    clientAudio.stopAll();
    const nextIdx = Math.min(paragraphs.length - 1, activeParagraph + 1);
    onParagraphSelect(nextIdx);
    if (isPlaying) {
      playParagraph(nextIdx);
    }
  };

  const handlePrevParagraph = () => {
    clientAudio.stopAll();
    const prevIdx = Math.max(0, activeParagraph - 1);
    onParagraphSelect(prevIdx);
    if (isPlaying) {
      playParagraph(prevIdx);
    }
  };

  return (
    <div className={cn("rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 border border-white/20 p-5 shadow-2xl space-y-4", className)}>
      {/* Üst Başlık ve Etiket */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-2xl bg-cyan-500/20 text-cyan-300">
            <Volume2 className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span>Akademik Sesli Okuma Laboratuvarı</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold">
                Kesintisiz Playlist
              </span>
            </h3>
            <p className="text-xs text-white/60">
              Paragraf takip ve vurgu sistemi ile eş zamanlı dinleme
            </p>
          </div>
        </div>

        {/* Aksan ve Cinsiyet Seçimi */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Cinsiyet */}
          <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 text-xs">
            <button
              onClick={() => setGender("female")}
              className={cn(
                "px-2 py-0.5 rounded-lg font-bold transition-all",
                gender === "female" ? "bg-pink-600 text-white shadow" : "text-white/60 hover:text-white"
              )}
            >
              👩 Kadın
            </button>
            <button
              onClick={() => setGender("male")}
              className={cn(
                "px-2 py-0.5 rounded-lg font-bold transition-all",
                gender === "male" ? "bg-indigo-600 text-white shadow" : "text-white/60 hover:text-white"
              )}
            >
              👨 Erkek
            </button>
          </div>

          {/* 6 Aksan */}
          <div className="flex gap-1 bg-black/40 border border-white/10 rounded-xl p-1">
            {ACCENT_OPTIONS.map((a) => (
              <button
                key={a.code}
                onClick={() => setAccent(a.code)}
                className={cn(
                  "px-2 py-0.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1",
                  accent === a.code ? "bg-cyan-500 text-slate-950 shadow font-black" : "text-white/60 hover:text-white"
                )}
                title={a.label}
              >
                <span>{a.flag}</span>
                <span className="text-[10px] hidden sm:inline">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kontrol Paneli: Oynat/Durdur, İleri/Geri, Hız ve Paragraf İlerlemesi */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
        <div className="flex items-center gap-3">
          {/* Önceki Paragraf */}
          <button
            onClick={handlePrevParagraph}
            disabled={activeParagraph === 0}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white transition-all"
            title="Önceki Paragraf"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Ana Oynat/Durdur Butonu */}
          <button
            onClick={handleTogglePlay}
            disabled={loading}
            className={cn(
              "px-5 py-2.5 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg",
              isPlaying
                ? "bg-gradient-to-r from-amber-500 to-rose-600 text-white animate-pulse"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white"
            )}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Durdur</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Metni Seslendir</span>
              </>
            )}
          </button>

          {/* Sonraki Paragraf */}
          <button
            onClick={handleNextParagraph}
            disabled={activeParagraph === paragraphs.length - 1}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white transition-all"
            title="Sonraki Paragraf"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-cyan-300 ml-2">
            Paragraf {activeParagraph + 1} / {paragraphs.length}
          </span>
        </div>

        {/* Hız Kontrolü */}
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs">
          <Gauge className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-white/60 font-mono">Okuma Hızı:</span>
          {[0.75, 0.9, 1.0, 1.1, 1.25].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={cn(
                "px-1.5 py-0.5 rounded text-[11px] font-mono transition-all",
                Math.abs(speed - s) < 0.01
                  ? "bg-cyan-500 text-slate-950 font-bold shadow"
                  : "text-white/60 hover:text-white"
              )}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
