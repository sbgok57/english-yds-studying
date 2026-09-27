"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AudioTrack, AUDIO_TRACKS, saveTrackProgress, getTrackProgress } from "@/lib/audio/tracks";

interface AudioGrammarPlayerProps {
  initialTrackId?: string;
  onTrackChange?: (track: AudioTrack) => void;
}

export default function AudioGrammarPlayer({
  initialTrackId,
  onTrackChange,
}: AudioGrammarPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(() => {
    if (!initialTrackId) return 0;
    const idx = AUDIO_TRACKS.findIndex((t) => t.id === initialTrackId);
    return idx !== -1 ? idx : 0;
  });

  const track = AUDIO_TRACKS[currentTrackIndex] || AUDIO_TRACKS[0];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(track.duration || 300);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [usingSpeechFallback, setUsingSpeechFallback] = useState<boolean>(false);
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(null);
  const sleepTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Parça Değiştiğinde
  useEffect(() => {
    onTrackChange?.(track);
    const saved = getTrackProgress(track.id);
    if (saved?.currentSeconds && saved.currentSeconds > 5 && !saved.completed) {
      setCurrentTime(saved.currentSeconds);
      if (audioRef.current) {
        audioRef.current.currentTime = saved.currentSeconds;
      }
    } else {
      setCurrentTime(0);
    }
  }, [track, onTrackChange]);

  // 2. Media Session API (Kilit Ekranı & Arka Planda Çalma)
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: "YDS Master — Hafıza Kodları",
      album: "Sesli Gramer Serisi",
      artwork: [
        { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    });

    navigator.mediaSession.setActionHandler("play", () => {
      handlePlay();
    });

    navigator.mediaSession.setActionHandler("pause", () => {
      handlePause();
    });

    navigator.mediaSession.setActionHandler("previoustrack", () => {
      handlePrev();
    });

    navigator.mediaSession.setActionHandler("nexttrack", () => {
      handleNext();
    });

    navigator.mediaSession.setActionHandler("seekbackward", (details) => {
      const skip = details.seekOffset || 10;
      if (audioRef.current) {
        audioRef.current.currentTime = Math.max(audioRef.current.currentTime - skip, 0);
      }
    });

    navigator.mediaSession.setActionHandler("seekforward", (details) => {
      const skip = details.seekOffset || 10;
      if (audioRef.current) {
        audioRef.current.currentTime = Math.min(
          audioRef.current.currentTime + skip,
          audioRef.current.duration || duration
        );
      }
    });

    return () => {
      // // SAFETY: Temizleme
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
        navigator.mediaSession.setActionHandler("nexttrack", null);
      }
    };
  }, [track, duration]);

  // 3. Uyku Zamanlayıcısı (Sleep Timer)
  useEffect(() => {
    if (sleepTimeoutRef.current) {
      clearTimeout(sleepTimeoutRef.current);
      sleepTimeoutRef.current = null;
    }

    if (sleepTimerMinutes && sleepTimerMinutes > 0 && isPlaying) {
      sleepTimeoutRef.current = setTimeout(() => {
        handlePause();
        setSleepTimerMinutes(null);
      }, sleepTimerMinutes * 60 * 1000);
    }

    return () => {
      if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current);
    };
  }, [sleepTimerMinutes, isPlaying]);

  // 4. Oynat / Durdur / Fallback
  const handlePlay = useCallback(() => {
    if (usingSpeechFallback) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(track.script);
        utterance.lang = "tr-TR";
        utterance.rate = playbackRate;
        utterance.onend = () => {
          setIsPlaying(false);
          saveTrackProgress(track.id, duration, true);
        };
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
      return;
    }

    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // // SAFETY: Ses dosyası yoksa Web Speech API ile devam et
            setUsingSpeechFallback(true);
            if ("speechSynthesis" in window) {
              window.speechSynthesis.cancel();
              const utterance = new SpeechSynthesisUtterance(track.script);
              utterance.lang = "tr-TR";
              utterance.rate = playbackRate;
              utterance.onend = () => {
                setIsPlaying(false);
                saveTrackProgress(track.id, duration, true);
              };
              window.speechSynthesis.speak(utterance);
              setIsPlaying(true);
            }
          });
      }
    }
  }, [usingSpeechFallback, track, playbackRate, duration]);

  const handlePause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleNext = () => {
    handlePause();
    setUsingSpeechFallback(false);
    setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length);
  };

  const handlePrev = () => {
    handlePause();
    setUsingSpeechFallback(false);
    setCurrentTrackIndex((prev) => (prev - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
    saveTrackProgress(track.id, val, false);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  // Zaman formatı (MM:SS)
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-950/60 via-slate-950/90 to-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-2xl">
      {/* Gizli HTML5 Audio */}
      <audio
        ref={audioRef}
        src={track.audioUrl}
        preload="metadata"
        onTimeUpdate={() => {
          if (audioRef.current) {
            const cur = audioRef.current.currentTime;
            setCurrentTime(cur);
            if (Math.floor(cur) % 5 === 0) {
              saveTrackProgress(track.id, cur, false);
            }
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && !isNaN(audioRef.current.duration)) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          saveTrackProgress(track.id, duration, true);
          handleNext();
        }}
      />

      {/* Üst Kart Bilgisi */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
              🎧 Sesli Gramer & Hafıza Kodu
            </span>
            {usingSpeechFallback && (
              <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Canlı Ses Motoru
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">{track.title}</h2>
          <p className="text-xs text-purple-200/80 mt-1 font-mono">{track.subtitle}</p>
        </div>

        {/* Hafıza Kodu Rozeti */}
        <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-center shrink-0">
          <p className="text-[10px] uppercase tracking-wider font-bold text-amber-300">Hafıza Şifresi</p>
          <p className="text-xs font-black text-amber-100 mt-0.5">{track.memoryCode}</p>
        </div>
      </div>

      {/* İlerleme Çubuğu (Scrubber) */}
      <div className="space-y-1.5">
        <input
          type="range"
          min={0}
          max={duration || 300}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between text-[11px] font-mono text-white/50">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Ana Oynatma Kontrolleri */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {/* Hız Seçimi */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          {[0.75, 1, 1.25, 1.5].map((speed) => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                playbackRate === speed
                  ? "bg-purple-500 text-white shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>

        {/* Oynatıcı Butonları */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-sm"
            aria-label="Önceki Konu"
          >
            ⏮️
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 text-white text-xl flex items-center justify-center shadow-lg shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all"
            aria-label={isPlaying ? "Durdur" : "Oynat"}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-sm"
            aria-label="Sonraki Konu"
          >
            ⏭️
          </button>
        </div>

        {/* Uyku Zamanlayıcısı & Metin Butonu */}
        <div className="flex items-center gap-2">
          {/* Uyku Menüsü */}
          <select
            value={sleepTimerMinutes || ""}
            onChange={(e) => setSleepTimerMinutes(e.target.value ? parseInt(e.target.value, 10) : null)}
            className="bg-white/5 border border-white/10 text-white text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-purple-400 font-medium"
          >
            <option value="" className="bg-slate-900">⏰ Uyku Zamanlayıcı</option>
            <option value="5" className="bg-slate-900">5 Dakika</option>
            <option value="15" className="bg-slate-900">15 Dakika</option>
            <option value="30" className="bg-slate-900">30 Dakika</option>
          </select>

          {/* Transkript Göster/Gizle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              showTranscript
                ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            📜 {showTranscript ? "Metni Gizle" : "Transkript"}
          </button>
        </div>
      </div>

      {/* Önemli Taktik Maddeleri */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
        <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300">
          💡 Sınav İpuçları & Taktikler
        </h4>
        <ul className="space-y-1.5">
          {track.keyPoints.map((pt, i) => (
            <li key={i} className="text-xs text-white/80 flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ses Transkripti & Okuma Metni */}
      {showTranscript && (
        <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider">
              📖 Sesli Anlatım Metni
            </h4>
            <span className="text-[10px] text-white/40">Dinlerken takip et</span>
          </div>
          <p className="text-xs text-white/80 leading-relaxed whitespace-pre-line font-serif">
            {track.script}
          </p>
        </div>
      )}

      {/* Parça Listesi (Playlist) */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
          📚 Sesli Gramer Serisi ({AUDIO_TRACKS.length} Konu)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AUDIO_TRACKS.map((t, index) => {
            const isCurrent = index === currentTrackIndex;
            return (
              <button
                key={t.id}
                onClick={() => {
                  handlePause();
                  setUsingSpeechFallback(false);
                  setCurrentTrackIndex(index);
                }}
                className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  isCurrent
                    ? "bg-purple-500/20 border-purple-500/50 shadow-md"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06]"
                }`}
              >
                <div>
                  <p className={`text-xs font-bold ${isCurrent ? "text-white" : "text-white/80"}`}>
                    {index + 1}. {t.title}
                  </p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-mono">{t.memoryCode}</p>
                </div>
                <div className="text-xs font-mono text-white/40">
                  {isCurrent && isPlaying ? "🔊" : formatTime(t.duration)}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
