"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const ACCENT_OPTIONS = [
  { code: "en-GB", label: "İngiliz", flag: "🇬🇧" },
  { code: "en-US", label: "Amerikan", flag: "🇺🇸" },
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
  size?: "sm" | "md" | "lg";
  className?: string;
  showControls?: boolean;
}

export default function TTSPlayer({
  text,
  accent = "en-GB",
  gender = "female",
  size = "md",
  className,
  showControls = false,
}: TTSPlayerProps) {
  const [currentAccent, setCurrentAccent] = useState<AccentCode>(accent);
  const [currentGender, setCurrentGender] = useState<GenderCode>(gender);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Web Speech API fallback
  const playWebSpeech = (speakText: string, langCode: string, speakGender: GenderCode) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.warn("Web Speech API bu tarayıcıda desteklenmiyor.");
      setIsPlaying(false);
      setLoading(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speakText);
    utteranceRef.current = utterance;
    utterance.lang = langCode;
    utterance.rate = 0.95;

    // Tarayıcıdaki sesleri tara ve eşleştirmeyi dene
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find((v) => {
      const matchLang = v.lang.replace("_", "-").toLowerCase() === langCode.toLowerCase();
      const matchGender = speakGender === "female" 
        ? /female|woman|samantha|zira|karen|sonia|jenny/i.test(v.name)
        : /male|man|david|guy|daniel|george|ryan/i.test(v.name);
      return matchLang && matchGender;
    }) || voices.find((v) => v.lang.replace("_", "-").toLowerCase().startsWith(langCode.slice(0, 2)));

    if (matchingVoice) utterance.voice = matchingVoice;

    utterance.onstart = () => {
      setIsPlaying(true);
      setLoading(false);
      if (navigator.vibrate) navigator.vibrate(25);
    };

    utterance.onend = () => {
      utteranceRef.current = null;
      setIsPlaying(false);
    };
    utterance.onerror = () => {
      utteranceRef.current = null;
      setIsPlaying(false);
      setLoading(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const playAudio = async () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    setLoading(true);
    try {
      const url = `/api/tts?text=${encodeURIComponent(text)}&accent=${currentAccent}&gender=${currentGender}`;
      const res = await fetch(url);

      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        if (data.fallbackWebSpeech) {
          playWebSpeech(text, currentAccent, currentGender);
          return;
        }
      }

      if (!res.ok) {
        throw new Error(`TTS API Hatası: ${res.status}`);
      }

      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onplay = () => {
        setIsPlaying(true);
        setLoading(false);
        if (navigator.vibrate) navigator.vibrate(25);
      };

      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        // Fallback to Web Speech on audio decoding error
        playWebSpeech(text, currentAccent, currentGender);
      };

      await audio.play();
    } catch {
      // Offline or network error -> Seamless Web Speech Fallback
      playWebSpeech(text, currentAccent, currentGender);
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {showControls && (
        <div className="flex items-center gap-1 bg-black/40 border border-white/20 rounded-full px-2 py-1 text-xs">
          {/* Cinsiyet */}
          <button
            onClick={() => setCurrentGender(currentGender === "female" ? "male" : "female")}
            className="px-2 py-0.5 rounded-full hover:bg-white/20 transition-colors"
            title={currentGender === "female" ? "Kadın Sesi" : "Erkek Sesi"}
          >
            {currentGender === "female" ? "👩" : "👨"}
          </button>

          {/* Aksanlar */}
          <div className="flex gap-0.5">
            {ACCENT_OPTIONS.map((a) => (
              <button
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
        onClick={playAudio}
        disabled={loading}
        className={cn(
          "rounded-full transition-all flex items-center justify-center border shadow-lg",
          size === "sm" && "w-8 h-8 text-xs",
          size === "md" && "w-10 h-10 text-sm",
          size === "lg" && "w-12 h-12 text-base",
          isPlaying
            ? "bg-gradient-to-r from-pink-500 to-rose-600 border-pink-400 text-white animate-pulse"
            : "bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/30 text-white"
        )}
        title={`${currentAccent} (${currentGender === "female" ? "Kadın" : "Erkek"}) ile dinle`}
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
