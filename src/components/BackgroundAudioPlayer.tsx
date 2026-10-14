"use client";

import { useEffect, useId, useRef, useState } from "react";

export type AudioVoiceProfile = {
  id: string;
  label: string;
  /** BCP-47 tag, e.g. en-US, en-GB, tr-TR. */
  language: string;
};

export type PreparedSpeechTrack = {
  /** Same-origin authenticated audio URL or short-lived signed URL; never put provider secrets in the browser. */
  src: string;
  title: string;
  artist?: string;
  album?: string;
};

type Props = {
  text: string;
  language: string;
  title: string;
  voiceProfiles: readonly AudioVoiceProfile[];
  selectedVoiceProfileId?: string;
  onVoiceProfileChange?: (voiceProfileId: string) => void;
  /** Host must return actual playable audio; browser SpeechSynthesis is not a reliable locked-screen source. */
  onPrepareAudio?: (
    text: string,
    voiceProfileId: string,
    language: string,
    signal: AbortSignal,
  ) => Promise<PreparedSpeechTrack>;
};

function supportedMediaSession(): MediaSession | undefined {
  if (typeof navigator === "undefined") return undefined;
  return (navigator as Navigator & { mediaSession?: MediaSession }).mediaSession;
}

function safeAudioSource(source: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const url = new URL(source, window.location.href);
    const localDevelopment = ["localhost", "127.0.0.1"].includes(url.hostname);
    if (url.protocol === "https:" || url.protocol === "blob:" || (url.protocol === "http:" && localDevelopment)) return url.href;
    return null;
  } catch {
    return null;
  }
}

/**
 * Uses a real HTMLAudioElement plus Media Session metadata/actions.
 * Background playback depends on browser, OS policy, audio provider and user gesture;
 * this component deliberately does not claim support for every device.
 */
export function BackgroundAudioPlayer({
  text,
  language,
  title,
  voiceProfiles,
  selectedVoiceProfileId,
  onVoiceProfileChange,
  onPrepareAudio,
}: Props) {
  const id = useId();
  const audioRef = useRef<HTMLAudioElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [localProfileId, setLocalProfileId] = useState("");
  const [track, setTrack] = useState<PreparedSpeechTrack | null>(null);
  const [preparing, setPreparing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const baseLanguage = language.toLowerCase().split("-")[0];
  const matchingProfiles = voiceProfiles.filter((profile) => profile.language.toLowerCase().split("-")[0] === baseLanguage);
  const currentProfileId = selectedVoiceProfileId || localProfileId || matchingProfiles[0]?.id || "";

  useEffect(() => () => {
    abortRef.current?.abort();
    audioRef.current?.pause();
    const session = supportedMediaSession();
    if (session) {
      session.playbackState = "none";
      for (const action of ["play", "pause", "seekbackward", "seekforward", "seekto"] as MediaSessionAction[]) {
        try { session.setActionHandler(action, null); } catch { /* Browser does not support this action. */ }
      }
    }
  }, []);

  useEffect(() => {
    // Do not continue speaking stale text after a lesson or voice profile changes.
    abortRef.current?.abort();
    const audio = audioRef.current;
    audio?.pause();
    audio?.removeAttribute("src");
    audio?.load();
    setTrack(null);
    setPlaying(false);
    setError("");
  }, [text, language, currentProfileId]);

  useEffect(() => {
    const session = supportedMediaSession();
    if (!session || !track) return;
    if (typeof MediaMetadata !== "undefined") {
      session.metadata = new MediaMetadata({
        title: track.title || title,
        artist: track.artist || "DilPusulası · öğrenme sesi",
        album: track.album || "Gramer ve listening",
      });
    }

    const player = audioRef.current;
    const actions: Array<[MediaSessionAction, MediaSessionActionHandler | null]> = [
      ["play", () => { void player?.play().catch(() => setError("Kilit ekranından oynatma başlatılamadı; sayfaya dönüp oynat düğmesine dokun.")); }],
      ["pause", () => player?.pause()],
      ["seekbackward", (details) => { if (player) player.currentTime = Math.max(0, player.currentTime - (details.seekOffset ?? 10)); }],
      ["seekforward", (details) => { if (player && Number.isFinite(player.duration)) player.currentTime = Math.min(player.duration, player.currentTime + (details.seekOffset ?? 10)); }],
      ["seekto", (details) => { if (player && details.seekTime !== undefined && Number.isFinite(details.seekTime)) player.currentTime = Math.max(0, Math.min(player.duration || details.seekTime, details.seekTime)); }],
    ];
    for (const [action, handler] of actions) {
      try { session.setActionHandler(action, handler); } catch { /* Progressive enhancement for unsupported browsers. */ }
    }
    return () => {
      for (const [action] of actions) {
        try { session.setActionHandler(action, null); } catch { /* Ignore unsupported Media Session actions. */ }
      }
    };
  }, [track, title]);

  useEffect(() => {
    if (track?.src.startsWith("blob:")) {
      return () => URL.revokeObjectURL(track.src);
    }
    return undefined;
  }, [track?.src]);

  function chooseVoiceProfile(nextId: string) {
    setLocalProfileId(nextId);
    onVoiceProfileChange?.(nextId);
    setTrack(null);
    setStatus("Ses profili değişti. Yeni aksan seçimi için sesi yeniden hazırla.");
  }

  async function prepareAndPlay() {
    if (!onPrepareAudio) {
      setError("Ses sağlayıcısı bağlı değil. Host uygulama, seçilen aksan profiliyle gerçek bir ses dosyası/akışı sağlamalı.");
      return;
    }
    if (!currentProfileId) {
      setError("Bu dil için kullanılabilir ses profili seçilmemiş.");
      return;
    }
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setPreparing(true);
    setError("");
    setStatus("Ses hazırlanıyor…");
    try {
      const prepared = await onPrepareAudio(text, currentProfileId, language, controller.signal);
      if (controller.signal.aborted) return;
      const safeSrc = safeAudioSource(prepared.src);
      if (!safeSrc) throw new Error("Ses URL'si güvenli HTTPS/yerel ses adresi olmalı.");
      const safePrepared = { ...prepared, src: safeSrc };
      const audio = audioRef.current;
      if (!audio) {
        setTrack(safePrepared);
        setStatus("Ses hazır. Oynat düğmesine bas.");
        return;
      }
      audio.src = safePrepared.src;
      audio.load();
      setTrack(safePrepared);
      try {
        await audio.play();
        setStatus("Ses oynatılıyor. Kilit ekranı kontrolleri destekleniyorsa kullanılabilir.");
      } catch {
        setStatus("Ses hazır. Tarayıcı yeni ses için yeniden dokunma isteyebilir; oynat düğmesine bas.");
      }
    } catch (reason) {
      if (!controller.signal.aborted) {
        setError(reason instanceof Error ? reason.message : "Ses hazırlanamadı. Sağlayıcı bağlantısını kontrol et.");
        setStatus("");
      }
    } finally {
      if (!controller.signal.aborted) setPreparing(false);
    }
  }

  async function play() {
    const audio = audioRef.current;
    if (!audio || !track) return;
    try {
      await audio.play();
      setError("");
      setStatus("Ses oynatılıyor.");
    } catch {
      setError("Oynatma engellendi. Sayfa açıkken oynat düğmesine yeniden bas.");
    }
  }

  return (
    <section className="yds-audio-player" aria-label={`${title} ses oynatıcısı`}>
      <div className="yds-audio-player-topline">
        <div>
          <p className="yds-eyebrow">Arka plan uyumlu ses</p>
          <h3>{title}</h3>
        </div>
        <label className="yds-audio-voice-label" htmlFor={`${id}-voice`}>
          Aksan / ses profili
          <select
            id={`${id}-voice`}
            value={currentProfileId}
            onChange={(event) => chooseVoiceProfile(event.target.value)}
            disabled={preparing || matchingProfiles.length === 0}
          >
            {matchingProfiles.length === 0 && <option value="">Bu dil için kayıtlı profil yok</option>}
            {matchingProfiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.label} · {profile.language}</option>)}
          </select>
        </label>
      </div>

      <div className="yds-audio-player-actions">
        <button className="yds-button" type="button" onClick={() => void prepareAndPlay()} disabled={preparing || !text.trim() || matchingProfiles.length === 0}>
          {preparing ? "Ses hazırlanıyor…" : track ? "Seçili aksanla yeniden hazırla" : "Seçili aksanla sesi hazırla"}
        </button>
        {track && (
          <button className="yds-button yds-button-secondary" type="button" onClick={() => void play()} disabled={playing}>
            Ekran okuyucu / kilit ekranı için oynat
          </button>
        )}
      </div>

      <audio
        ref={audioRef}
        className="yds-audio-element"
        src={track?.src}
        controls
        preload="metadata"
        playsInline
        onPlay={() => {
          setPlaying(true);
          const session = supportedMediaSession();
          if (session) session.playbackState = "playing";
        }}
        onPause={() => {
          setPlaying(false);
          const session = supportedMediaSession();
          if (session) session.playbackState = "paused";
        }}
        onEnded={() => {
          setPlaying(false);
          const session = supportedMediaSession();
          if (session) session.playbackState = "none";
          setStatus("Ses tamamlandı.");
        }}
        onError={() => setError("Ses akışı açılamadı. URL, oturum yetkisi ve tarayıcı biçim desteğini kontrol et.")}
      />
      <p className="yds-audio-disclaimer">Kilit ekranında sürdürme, işletim sistemi ve tarayıcı desteğine bağlıdır. Web Speech/TTS konuşması tek başına arka plan ses garantisi vermez; uygulama gerçek bir ses akışı sunmalıdır.</p>
      {error && <p className="yds-exam-error" role="alert">{error}</p>}
      {status && <p className="yds-exam-status" role="status" aria-live="polite">{status}</p>}
    </section>
  );
}
