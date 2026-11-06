"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { clientAudio } from "@/lib/tts/audio-client";
import type { PlaybackMetadata } from "@/lib/tts/audio-client";
import type { AccentCode as RegistryAccentCode } from "@/lib/tts/voice-registry";

export const ACCENT_OPTIONS = [
  { code: "en-GB", label: "İngiliz", flag: "🇬🇧" },
  { code: "en-US", label: "Amerikan", flag: "🇺🇸" },
  { code: "en-AU", label: "Avustralya", flag: "🇦🇺" },
 ] as const satisfies ReadonlyArray<{ code: RegistryAccentCode; label: string; flag: string }>;

export type AccentCode = RegistryAccentCode;
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
  const [playbackMeta, setPlaybackMeta] = useState<PlaybackMetadata | null>(null);
  const [playbackError, setPlaybackError] = useState("");

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
    setPlaybackMeta(null);
    setPlaybackError("");

    await clientAudio.play(text, {
      accent: currentAccent,
      gender: currentGender,
      rate: speed,
      contentType,
      // If the configured cloud service is unavailable, use a matching
      // device voice when the browser can verify both locale and speaker.
      // The audio manager labels this as a local fallback and never invents
      // an accent or gender match.
      allowBrowserFallback: true,
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
      onMetadata: setPlaybackMeta,
      onError: () => {
        setLoading(false);
        updatePlaying(false);
      },
    });
  };

  const playHumanRecording = async () => {
    if (loading || isPlaying) return;
    setLoading(true);
    setPlaybackMeta(null);
    setPlaybackError("");
    await clientAudio.play(text, {
      accent: currentAccent,
      gender: currentGender,
      rate: speed,
      contentType: "word",
      humanRecordingOnly: true,
      allowBrowserFallback: false,
      onMetadata: setPlaybackMeta,
      onStart: () => {
        setLoading(false);
        updatePlaying(true);
      },
      onEnd: () => {
        setLoading(false);
        updatePlaying(false);
      },
      onError: (error) => {
        setLoading(false);
        updatePlaying(false);
        setPlaybackError(error.message);
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

          {/* Desteklenen üç aksan */}
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
        title={`${currentAccent} (${currentGender === "female" ? "Kadın" : "Erkek"}) telaffuzunu dinle`}
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
      {contentType === "word" && (
        <button
          type="button"
          onClick={playHumanRecording}
          disabled={loading || isPlaying}
          className="rounded-full border border-emerald-300/50 bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold text-emerald-100 hover:bg-emerald-500/30 disabled:opacity-50"
          title="Yalnızca kaynak ve lisansı doğrulanmış insan kaydı aranır; bulunmazsa yapay sesle değiştirilmez. Kayıtta konuşmacı cinsiyeti belirtilmemiş olabilir."
          aria-label="Gerçek insan kaydını dinle"
        >
          İnsan kaydı
        </button>
      )}
      {playbackError && <span role="status" className="basis-full text-[10px] leading-tight text-amber-100">{playbackError}</span>}
      {playbackMeta?.humanRecordingAttribution && (
        <a
          className="basis-full text-[10px] leading-tight text-white/70 underline decoration-dotted underline-offset-2"
          href={playbackMeta.humanRecordingAttribution.filePageUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`İnsan kaydı: ${playbackMeta.humanRecordingAttribution.creator}; lisans ${playbackMeta.humanRecordingAttribution.licenseName}`}
        >
          İnsan kaydı: {playbackMeta.humanRecordingAttribution.creator} · {playbackMeta.humanRecordingAttribution.licenseName}
        </a>
      )}
    </div>
  );
}
