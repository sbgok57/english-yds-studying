"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { clientAudio } from "@/lib/tts/audio-client";

export const ACCENT_OPTIONS = [
  { code: "en-GB", label: "İngiliz", flag: "🇬🇧" },
  { code: "en-US", label: "Amerikan", flag: "🇺🇸" },
  { code: "en-CA", label: "Kanada", flag: "🇨🇦" },
  { code: "en-AU", label: "Avustralya", flag: "🇦🇺" },
  { code: "en-NZ", label: "Y. Zelanda", flag: "🇳🇿" },
  { code: "en-IN", label: "Hint", flag: "🇮🇳" },
] as const;

export type AccentCode = typeof ACCENT_OPTIONS[number]["code"];
export type GenderCode = "female" | "male";

interface TTSPlayerProps {
  text: string;
  accent?: AccentCode;
  gender?: GenderCode;
  speed?: number;
  contentType?: "word" | "sentence" | "long-form";
  size?: "sm" | "md" | "lg";
  className?: string;
  showControls?: boolean;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function TTSPlayer({
  text,
  accent,
  gender,
  speed,
  contentType = "word",
  size = "md",
  className,
  showControls = false,
  onPlayStateChange,
}: TTSPlayerProps) {
  const [currentAccent, setCurrentAccent] = useState<AccentCode>(() => {
    if (accent) return accent;
    const prefs = clientAudio.getPreferences();
    return (prefs.preferredAccent as AccentCode) || "en-US";
  });

  const [currentGender, setCurrentGender] = useState<GenderCode>(() => {
    if (gender) return gender;
    const prefs = clientAudio.getPreferences();
    return (prefs.preferredVoiceGender as GenderCode) || "female";
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // Dışarıdan prop değişirse senkronize et
  useEffect(() => {
    if (accent) setCurrentAccent(accent);
  }, [accent]);

  useEffect(() => {
    if (gender) setCurrentGender(gender);
  }, [gender]);

  const updatePlaying = (playing: boolean) => {
    setIsPlaying(playing);
    onPlayStateChange?.(playing);
  };

  const playAudio = async () => {
    if (isPlaying) {
      clientAudio.stopAll();
      updatePlaying(false);
      setLoading(false);
      return;
    }

    setLoading(true);

    await clientAudio.play(text, {
      accent: currentAccent,
      gender: currentGender,
      rate: speed,
      contentType,
      onStart: () => {
        setLoading(false);
        updatePlaying(true);
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          try {
            navigator.vibrate(20);
          } catch {
            /* noop */
          }
        }
      },
      onEnd: () => {
        setLoading(false);
        updatePlaying(false);
      },
      onError: () => {
        setLoading(false);
        updatePlaying(false);
      },
    });
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {showControls && (
        <div className="flex items-center gap-1 bg-black/40 border border-white/20 rounded-full px-2 py-1 text-xs">
          {/* Cinsiyet */}
          <button
            type="button"
            onClick={() => setCurrentGender(currentGender === "female" ? "male" : "female")}
            className="px-2 py-0.5 rounded-full hover:bg-white/20 transition-colors"
            title={currentGender === "female" ? "Kadın Sesi" : "Erkek Sesi"}
          >
            {currentGender === "female" ? "👩" : "👨"}
          </button>

          {/* 6 Aksan Butonları */}
          <div className="flex gap-0.5">
            {ACCENT_OPTIONS.map((a) => (
              <button
                type="button"
                key={a.code}
                onClick={() => setCurrentAccent(a.code)}
                className={cn(
                  "p-1 rounded-md text-sm transition-transform",
                  currentAccent === a.code ? "bg-white/30 scale-110 shadow" : "opacity-60 hover:opacity-100"
                )}
                title={a.label}
              >
                {a.flag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Ses Oynatıcı Buton */}
      <button
        type="button"
        onClick={playAudio}
        disabled={loading}
        className={cn(
          "rounded-full transition-all flex items-center justify-center border shadow-lg cursor-pointer",
          size === "sm" && "w-8 h-8 text-xs",
          size === "md" && "w-10 h-10 text-sm",
          size === "lg" && "w-12 h-12 text-base",
          isPlaying
            ? "bg-gradient-to-r from-pink-500 to-rose-600 border-pink-400 text-white animate-pulse"
            : "bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/30 text-white"
        )}
        title={`${currentAccent} (${currentGender === "female" ? "Kadın" : "Erkek"}) • Doğal Neural Ses ile dinle`}
        aria-label="Telaffuzu Dinle"
        aria-pressed={isPlaying}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : isPlaying ? (
          <VolumeX className="w-4 h-4 text-yellow-300" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
