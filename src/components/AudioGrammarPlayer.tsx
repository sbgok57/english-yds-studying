"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AudioTrack, AUDIO_TRACKS, saveTrackProgress, getTrackProgress } from "@/lib/audio/tracks";
import { trackEvent, POINTS } from "@/lib/progress/tracker";
import { createClient } from "@/lib/supabase/client";
import { clientAudio, PlaybackMetadata } from "@/lib/tts/audio-client";

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

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(track.duration || 180);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<"female" | "male">("female");
  const selectedVoiceProfileId = voiceGender === "female" ? "tr-TR-female-emel" : "tr-TR-male-ahmet";
  const selectedProviderVoiceId = voiceGender === "female" ? "tr-TR-EmelNeural" : "tr-TR-AhmetNeural";
  const [speakerStatusMessage, setSpeakerStatusMessage] = useState<string | null>(null);
  const [playbackMeta, setPlaybackMeta] = useState<PlaybackMetadata | null>(null);
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(null);

  const sleepTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncedSecondRef = useRef<number>(0);
  const lastProgressSavedSecondRef = useRef<number>(-1);

  // Tercih edilen Türkçe eğitmen sesini yükle
  useEffect(() => {
    const prefs = clientAudio.getPreferences();
    setPlaybackMeta(clientAudio.getLastPlaybackMetadata());
    if (prefs.preferredTurkishNarratorId === "tr-TR-male-ahmet") {
      setVoiceGender("male");
    } else {
      setVoiceGender("female");
    }
  }, []);

  // Bileşen unmount olduğunda aktif sesi ve zamanlayıcıları temizle
  useEffect(() => {
    return () => {
      // SAFETY: Unmount cleanup
      const position = clientAudio.pauseCurrent();
      if (position !== null) {
        saveTrackProgress(track.id, position, false, selectedVoiceProfileId, track.script);
      } else {
        clientAudio.stopAll();
      }
      if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current);
    };
  }, [track.id, track.script, selectedVoiceProfileId]);

  // 1. Dinleme İlerlemesini Sunucuya Senkronla
  const syncListeningProgress = useCallback(
    async (seconds: number, completed: boolean) => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;

        await supabase.from("listening_progress").upsert(
          {
            user_id: user.id,
            topic_slug: track.slug,
            position_seconds: Math.floor(seconds),
            completed,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,topic_slug" }
        );

        if (Math.floor(seconds) - lastSyncedSecondRef.current >= 60 || completed) {
          const elapsed = Math.floor(seconds) - lastSyncedSecondRef.current;
          lastSyncedSecondRef.current = Math.floor(seconds);
          await trackEvent("listen", {
            topic: track.slug,
            points: POINTS.listenMinute,
            seconds: elapsed > 0 ? elapsed : 60,
          });
        }
      } catch {
        // SAFETY: Offline failover
      }
    },
    [track.slug]
  );

  // 2. Parça Değiştiğinde
  useEffect(() => {
    onTrackChange?.(track);
    lastSyncedSecondRef.current = 0;
    setDuration(track.duration || 180);
    const saved = getTrackProgress(track.id, selectedVoiceProfileId, track.script);
    if (saved?.currentSeconds && saved.currentSeconds > 5 && !saved.completed) {
      setCurrentTime(saved.currentSeconds);
    } else {
      setCurrentTime(0);
    }
  }, [track, onTrackChange, selectedVoiceProfileId]);

  const handlePause = useCallback(() => {
    const position = clientAudio.pauseCurrent();
    if (position !== null) {
      setCurrentTime(position);
      saveTrackProgress(track.id, position, false, selectedVoiceProfileId, track.script);
    } else if (isLoadingAudio) {
      clientAudio.stopAll();
    }
    setIsPlaying(false);
    setIsLoadingAudio(false);
  }, [isLoadingAudio, track.id, track.script, selectedVoiceProfileId]);

  const startPlaybackWithGender = useCallback(
    async (targetGender: "female" | "male", targetRate: number = playbackRate) => {
      const targetVoiceId =
        targetGender === "female" ? "tr-TR-female-emel" : "tr-TR-male-ahmet";
      const speakerCode = targetGender === "female" ? "emel" as const : "ahmet" as const;

      setIsLoadingAudio(true);
      // Never leave a previous speaker's provider badge visible while a new
      // speaker request is loading (or if that request fails).
      setPlaybackMeta(null);
      setSpeakerStatusMessage(
        `${targetGender === "female" ? "Emel" : "Ahmet"} (${targetVoiceId}) sesi hazırlanıyor...`
      );

      const saved = getTrackProgress(track.id, targetVoiceId, track.script);
      const options = {
        voiceId: targetVoiceId,
        speaker: speakerCode,
        locale: "tr-TR" as const,
        contentLanguage: "tr" as const,
        gender: targetGender,
        rate: targetRate,
        contentType: "long-form" as const,
        startAtSeconds: saved && !saved.completed ? saved.currentSeconds : 0,
        onTimeUpdate: (seconds: number, actualDuration: number) => {
          setCurrentTime(seconds);
          if (actualDuration > 0) setDuration(actualDuration);
          if (Math.floor(seconds) % 5 === 0 && Math.floor(seconds) !== lastProgressSavedSecondRef.current) {
            lastProgressSavedSecondRef.current = Math.floor(seconds);
            saveTrackProgress(track.id, seconds, false, targetVoiceId, track.script);
          }
          if (Math.floor(seconds) > 0 && Math.floor(seconds) % 60 === 0 && Math.floor(seconds) !== lastSyncedSecondRef.current) {
            lastSyncedSecondRef.current = Math.floor(seconds);
            void syncListeningProgress(seconds, false);
          }
        },
        onMetadata: (meta: PlaybackMetadata) => {
          setPlaybackMeta(meta);
        },
        onStart: () => {
          setIsLoadingAudio(false);
          setIsPlaying(true);
        },
        onInfo: (msg: string) => {
          setSpeakerStatusMessage(msg);
        },
        onEnd: () => {
          setIsPlaying(false);
          setIsLoadingAudio(false);
          saveTrackProgress(track.id, duration, true, targetVoiceId, track.script);
          syncListeningProgress(duration, true);
        },
        onError: (error: Error) => {
          setIsPlaying(false);
          setIsLoadingAudio(false);
          setPlaybackMeta(null);
          setSpeakerStatusMessage(error.message || "Ses oynatılamadı. Lütfen tekrar deneyin.");
        },
      };

      if (clientAudio.hasPlayback(track.script, targetVoiceId)) {
        const resumed = await clientAudio.resumeCurrent(options);
        if (resumed) {
          setIsLoadingAudio(false);
          setIsPlaying(true);
          return;
        }
      }

      await clientAudio.play(track.script, {
        ...options,
      });
    },
    [track.script, track.id, playbackRate, duration, syncListeningProgress]
  );

  const handlePlay = useCallback(() => {
    void startPlaybackWithGender(voiceGender, playbackRate);
  }, [startPlaybackWithGender, voiceGender, playbackRate]);

  const handleNext = useCallback(() => {
    handlePause();
    setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length);
  }, [handlePause]);

  const handlePrev = useCallback(() => {
    handlePause();
    setCurrentTrackIndex((prev) => (prev - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length);
  }, [handlePause]);

  const togglePlay = () => {
    if (isPlaying || isLoadingAudio) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleSelectNarrator = (gender: "female" | "male") => {
    const wasPlaying = isPlaying;
    handlePause();
    setVoiceGender(gender);
    clientAudio.savePreferences({
      preferredTurkishNarratorId:
        gender === "female" ? "tr-TR-female-emel" : "tr-TR-male-ahmet",
    });
    if (wasPlaying) {
      void startPlaybackWithGender(gender, playbackRate);
    }
  };

  // 3. Media Session API (Kilit Ekranı & Arka Planda Çalma)
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: `DİL MASTER — ${voiceGender === "female" ? "Emel (Kadın Eğitmen)" : "Ahmet (Erkek Eğitmen)"}`,
      album: "Sesli Gramer Serisi",
      artwork: [
        { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    });

    navigator.mediaSession.setActionHandler("play", () => handlePlay());
    navigator.mediaSession.setActionHandler("pause", () => handlePause());
    navigator.mediaSession.setActionHandler("previoustrack", () => handlePrev());
    navigator.mediaSession.setActionHandler("nexttrack", () => handleNext());

    return () => {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
        navigator.mediaSession.setActionHandler("nexttrack", null);
      }
    };
  }, [track, voiceGender, handlePlay, handlePause, handlePrev, handleNext]);

  // 4. Uyku Zamanlayıcısı (Sleep Timer)
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
  }, [sleepTimerMinutes, isPlaying, handlePause]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    clientAudio.seekCurrent(val);
    setCurrentTime(val);
    saveTrackProgress(track.id, val, false, selectedVoiceProfileId, track.script);
  };

  const handleSpeedChange = (speed: number) => {
    const safeSpeed = Math.max(0.75, Math.min(1.25, speed));
    setPlaybackRate(safeSpeed);
    if (isPlaying) {
      void startPlaybackWithGender(voiceGender, safeSpeed);
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
      {/* Üst Kart Bilgisi */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
              🎧 Sesli Gramer & Hafıza Kodu
            </span>
            {track.examTarget &&
              track.examTarget.map((ex) => (
                <span
                  key={ex}
                  className="px-2 py-0.5 rounded text-[10px] font-black bg-pink-500/20 text-pink-300 border border-pink-500/30"
                >
                  {ex}
                </span>
              ))}
            <span
              data-testid="grammar-active-speaker-badge"
              className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
            >
              Anlatıcı: {voiceGender === "female" ? "Emel" : "Ahmet"} ({selectedProviderVoiceId})
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">{track.title}</h2>
          <p className="text-xs text-purple-200/80 mt-1 font-mono">{track.subtitle}</p>
        </div>

        {/* Hafıza Kodu Rozeti */}
        <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-center shrink-0">
          <p className="text-[10px] uppercase tracking-wider font-bold text-amber-300">
            Hafıza Şifresi
          </p>
          <p className="text-xs font-black text-amber-100 mt-0.5">{track.memoryCode}</p>
        </div>
      </div>

      {/* Dürüst Ses Motoru / Konuşmacı Durum Bandı */}
      {speakerStatusMessage && (
        <div
          data-testid="grammar-speaker-status"
          role="status"
          aria-live="polite"
          className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200"
        >
          <span>{speakerStatusMessage}</span>
          {playbackMeta && (
            <span className="text-[11px] font-mono text-slate-400">
              Sağlayıcı: {playbackMeta.provider} · Ses ID: {playbackMeta.voiceId} ·{" "}
              {playbackMeta.distinctSpeakerVerified
                ? "Ayrı konuşmacı profili doğrulandı"
                : playbackMeta.usingBrowserFallback
                  ? "Cihazın yerel konuşma sesi · sağlayıcı doğrulaması yok"
                  : "Konuşmacı ayrımı doğrulanmadı"}
            </span>
          )}
        </div>
      )}

      {/* İlerleme Çubuğu (Scrubber) */}
      {playbackMeta?.usingBrowserFallback ? (
        <p className="text-xs text-amber-200/80" role="status">
          Cihazın konuşma motoru kullanılıyor. Bu motor süre/arama konumu bildirmediği için kesin ilerleme çubuğu gösterilmiyor; aynı anlatım duraklatılıp devam ettirilebilir.
        </p>
      ) : <div className="space-y-1.5">
        <input
          type="range"
          min={0}
          max={duration || 180}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Ses ilerleme çubuğu"
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between text-[11px] font-mono text-white/50">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>}

      {/* Ana Oynatma Kontrolleri */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {/* Hız Seçimi & Eğitmen Ses Seçimi */}
        <div className="flex flex-wrap items-center gap-2">
          <div
            className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10"
            role="group"
            aria-label="Okuma hızı seçimi"
          >
            {[0.75, 0.9, 1, 1.15, 1.25].map((speed) => (
              <button
                key={speed}
                type="button"
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

          {/* Eğitmen Ses Seçimi (Kadın: Emel / Erkek: Ahmet) */}
          <div
            className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10"
            role="group"
            aria-label="Türkçe anlatıcı seçimi"
          >
            <button
              type="button"
              data-testid="narrator-btn-emel"
              data-voice-id="tr-TR-female-emel"
              aria-pressed={voiceGender === "female"}
              onClick={() => handleSelectNarrator("female")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                voiceGender === "female"
                  ? "bg-pink-500/80 text-white shadow"
                  : "text-white/60 hover:text-white"
              }`}
              title="Kadın Eğitmen Sesi (Emel — tr-TR-EmelNeural)"
            >
              <span>👩</span> Emel (Kadın)
            </button>
            <button
              type="button"
              data-testid="narrator-btn-ahmet"
              data-voice-id="tr-TR-male-ahmet"
              aria-pressed={voiceGender === "male"}
              onClick={() => handleSelectNarrator("male")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                voiceGender === "male"
                  ? "bg-cyan-600/80 text-white shadow"
                  : "text-white/60 hover:text-white"
              }`}
              title="Erkek Eğitmen Sesi (Ahmet — tr-TR-AhmetNeural)"
            >
              <span>👨</span> Ahmet (Erkek)
            </button>
          </div>
        </div>

        {/* Oynatıcı Butonları */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-sm"
            aria-label="Önceki Konu"
          >
            ⏮️
          </button>

          <button
            type="button"
            data-testid="grammar-audio-play-toggle"
            data-active-voice={selectedVoiceProfileId}
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 text-white text-xl flex items-center justify-center shadow-lg shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all"
            aria-label={isPlaying || isLoadingAudio ? "Durdur" : "Oynat"}
          >
            {isLoadingAudio ? "⏳" : isPlaying ? "⏸️" : "▶️"}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-sm"
            aria-label="Sonraki Konu"
          >
            ⏭️
          </button>
        </div>

        {/* Uyku Zamanlayıcısı & Metin Butonu */}
        <div className="flex items-center gap-2">
          <select
            aria-label="Uyku zamanlayıcısı"
            value={sleepTimerMinutes || ""}
            onChange={(e) =>
              setSleepTimerMinutes(e.target.value ? parseInt(e.target.value, 10) : null)
            }
            className="bg-white/5 border border-white/10 text-white text-xs rounded-xl px-2.5 py-2 focus:outline-none focus:border-purple-400 font-medium"
          >
            <option value="" className="bg-slate-900">
              ⏰ Uyku Zamanlayıcı
            </option>
            <option value="5" className="bg-slate-900">
              5 Dakika
            </option>
            <option value="15" className="bg-slate-900">
              15 Dakika
            </option>
            <option value="30" className="bg-slate-900">
              30 Dakika
            </option>
          </select>

          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
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
                type="button"
                onClick={() => {
                  handlePause();
                  setCurrentTrackIndex(index);
                }}
                className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  isCurrent
                    ? "bg-purple-500/20 border-purple-500/50 shadow-md"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className={`text-xs font-bold ${isCurrent ? "text-white" : "text-white/80"}`}>
                      {index + 1}. {t.title}
                    </p>
                    {t.examTarget?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
