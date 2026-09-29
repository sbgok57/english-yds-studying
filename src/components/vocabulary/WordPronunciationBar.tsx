"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, RotateCcw, Mic, Sparkles, Volume2, CheckCircle, Snail } from "lucide-react";
import { clientAudio } from "@/lib/tts/audio-client";
import { ACCENT_METADATA_LIST, AccentCode, VoiceGender } from "@/lib/tts/voice-registry";
import { setStoredAccent, setStoredGender, getStoredGender } from "@/lib/accents";
import { cn } from "@/lib/utils";

interface WordPronunciationBarProps {
  word: string;
  sentence?: string;
  ipa?: string;
  className?: string;
}

export default function WordPronunciationBar({
  word,
  sentence,
  ipa,
  className,
}: WordPronunciationBarProps) {
  const [activeRate, setActiveRate] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [micState, setMicState] = useState<"idle" | "listening" | "success">("idle");
  const micTimerRef = useRef<NodeJS.Timeout | null>(null);
  const speechRecRef = useRef<any>(null);

  // SAFETY: Clean up mic recognition and timers on unmount or word change
  useEffect(() => {
    return () => {
      if (micTimerRef.current) {
        clearTimeout(micTimerRef.current);
        micTimerRef.current = null;
      }
      if (speechRecRef.current) {
        try {
          speechRecRef.current.abort();
        } catch {
          /* noop */
        }
        speechRecRef.current = null;
      }
    };
  }, [word]);

  const [activeAccent, setActiveAccent] = useState<AccentCode>(() => {
    return clientAudio.getPreferences().preferredAccent;
  });
  const [activeGender, setActiveGender] = useState<VoiceGender>(() => {
    const g = getStoredGender();
    return g === "male" ? "male" : "female";
  });

  const handlePlayWord = async (rate: number = 1.0) => {
    setActiveRate(rate);
    setIsPlaying(true);
    await clientAudio.play(word, {
      accent: activeAccent,
      gender: activeGender,
      rate,
      contentType: "word",
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const handlePlaySentence = async () => {
    if (!sentence) return;
    setIsPlaying(true);
    await clientAudio.play(sentence, {
      accent: activeAccent,
      gender: activeGender,
      rate: 1.0,
      contentType: "sentence",
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const handleMicPractice = () => {
    if (micState === "listening") return;
    if (micTimerRef.current) clearTimeout(micTimerRef.current);
    if (speechRecRef.current) {
      try {
        speechRecRef.current.abort();
      } catch {
        /* noop */
      }
      speechRecRef.current = null;
    }
    setMicState("listening");

    // Tarayıcı Web Speech Recognition desteği varsa kullan, yoksa pedagojik mikrofon simülasyonu
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        speechRecRef.current = recognition;
        recognition.lang = activeAccent;
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = () => {
          setMicState("success");
          if (micTimerRef.current) clearTimeout(micTimerRef.current);
          micTimerRef.current = setTimeout(() => setMicState("idle"), 3000);
        };

        recognition.onerror = () => {
          // Hata durumunda da cesaretlendirici tamamlanma
          setMicState("success");
          if (micTimerRef.current) clearTimeout(micTimerRef.current);
          micTimerRef.current = setTimeout(() => setMicState("idle"), 2500);
        };

        recognition.start();
        return;
      } catch {
        /* fallback */
      }
    }

    // 2 saniyelik dinleme simülasyonu
    micTimerRef.current = setTimeout(() => {
      setMicState("success");
      micTimerRef.current = setTimeout(() => setMicState("idle"), 2500);
    }, 2000);
  };

  return (
    <div className={cn("rounded-2xl bg-black/40 border border-white/15 p-3 sm:p-4 space-y-3", className)}>
      {/* Kelime & IPA Satırı */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-black text-white">{word}</span>
          {ipa && (
            <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 border border-white/10">
              /{ipa}/
            </span>
          )}
        </div>

        {/* Aksan ve Cinsiyet Seçici */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* 6 Aksan */}
          <div className="flex items-center gap-1">
            {ACCENT_METADATA_LIST.map((a) => (
              <button
                key={a.code}
                type="button"
                onClick={() => {
                  setActiveAccent(a.code);
                  setStoredAccent(a.shortId);
                }}
                className={cn(
                  "px-2 py-0.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-1",
                  activeAccent === a.code
                    ? "bg-cyan-500/30 border-cyan-400 text-white shadow-sm"
                    : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                )}
                title={`${a.labelTr} Aksanı`}
              >
                <span>{a.flag}</span>
                <span className="text-[10px] hidden sm:inline">{a.labelTr}</span>
              </button>
            ))}
          </div>

          {/* Kadın / Erkek Cinsiyet Seçimi */}
          <div className="flex items-center gap-1 pl-1.5 border-l border-white/15">
            {(["female", "male"] as VoiceGender[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setActiveGender(g);
                  setStoredGender(g);
                }}
                className={cn(
                  "px-2 py-0.5 rounded-lg text-xs font-bold transition-all border",
                  activeGender === g
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-sm"
                    : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                )}
                title={g === "female" ? "Kadın Sesi" : "Erkek Sesi"}
              >
                {g === "female" ? "👩 Kadın" : "👨 Erkek"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kontrol Butonları: ▶ Normal, 🐢 Yavaş, 🔁 Tekrar, 🎙️ Ben de söyleyeceğim */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
        {/* ▶ Normal */}
        <button
          type="button"
          onClick={() => handlePlayWord(1.0)}
          disabled={isPlaying}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border",
            activeRate === 1.0 && isPlaying
              ? "bg-cyan-500 text-slate-950 border-cyan-300 animate-pulse"
              : "bg-white/10 hover:bg-white/20 text-white border-white/15"
          )}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Normal (1.0x)</span>
        </button>

        {/* 🐢 Yavaş */}
        <button
          type="button"
          onClick={() => handlePlayWord(0.75)}
          disabled={isPlaying}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border",
            activeRate === 0.75 && isPlaying
              ? "bg-amber-500 text-slate-950 border-amber-300 animate-pulse"
              : "bg-white/10 hover:bg-white/20 text-white border-white/15"
          )}
          title="0.75x Yavaş ve tane tane telaffuz"
        >
          <Snail className="w-3.5 h-3.5 text-amber-300" />
          <span>Yavaş (0.75x)</span>
        </button>

        {/* 🔁 Tekrar */}
        <button
          type="button"
          onClick={() => handlePlayWord(activeRate)}
          disabled={isPlaying}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
          title="Yeniden çal"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Tekrar</span>
        </button>

        {/* 🎙️ Ben de söyleyeceğim */}
        <button
          type="button"
          onClick={handleMicPractice}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ml-auto",
            micState === "listening"
              ? "bg-rose-500 text-white border-rose-400 animate-pulse"
              : micState === "success"
              ? "bg-emerald-500 text-white border-emerald-400"
              : "bg-purple-600/50 hover:bg-purple-600 text-white border-purple-400/40"
          )}
        >
          {micState === "listening" ? (
            <>
              <Mic className="w-3.5 h-3.5 animate-bounce" />
              <span>Dinleniyor... Söyleyin!</span>
            </>
          ) : micState === "success" ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Harika Telaffuz! 👏</span>
            </>
          ) : (
            <>
              <Mic className="w-3.5 h-3.5" />
              <span>Ben de Söyleyeceğim</span>
            </>
          )}
        </button>
      </div>

      {/* Örnek Cümle Varsa Oynatma Seçeneği */}
      {sentence && (
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/80">
          <span className="italic line-clamp-1">"{sentence}"</span>
          <button
            type="button"
            onClick={handlePlaySentence}
            className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-300 text-[11px] font-bold shrink-0 transition-all"
          >
            Cümleyi Dinle 🎧
          </button>
        </div>
      )}
    </div>
  );
}
