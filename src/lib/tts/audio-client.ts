import {
  AccentCode,
  VoiceLocale,
  ContentLanguage,
  VoiceGender,
  VoiceProfile,
  getVoiceProfile,
  findTurkishNarratorVoice,
  findEnabledVoice,
  STANDARD_PREVIEW_TEXT,
  STANDARD_TURKISH_PREVIEW_TEXT,
} from "./voice-registry";
import { trace } from "@/lib/debug/tracer";
import { chooseExactBrowserVoice } from "./browser-voice-matcher";

export interface PlaybackMetadata {
  provider: string;
  providerVoiceId: string;
  voiceId: string;
  displayName: string;
  locale: VoiceLocale;
  contentLanguage: ContentLanguage;
  gender: VoiceGender;
  distinctSpeakerVerified: boolean;
  usingBrowserFallback: boolean;
  latencyMs: number;
}

export interface PlaybackOptions {
  voiceId?: string;
  accent?: AccentCode;
  locale?: VoiceLocale;
  contentLanguage?: ContentLanguage;
  speaker?: "emel" | "ahmet";
  gender?: VoiceGender;
  rate?: number;
  contentType?: "word" | "sentence" | "long-form";
  /** Resume a generated audio file at a saved position after its metadata loads. */
  startAtSeconds?: number;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  onInfo?: (msg: string) => void;
  onMetadata?: (meta: PlaybackMetadata) => void;
  /** Set false to disable a clearly labeled, exact-match device voice fallback. */
  allowBrowserFallback?: boolean;
}

export interface UserVoicePreferences {
  preferredAccent: AccentCode;
  preferredVoiceGender: VoiceGender;
  preferredVoiceId: string;
  preferredTurkishNarratorId?: "tr-TR-female-emel" | "tr-TR-male-ahmet";
  speakingRate: number;
}

const STORAGE_KEYS = {
  ACCENT: "yds-preferred-accent",
  GENDER: "yds-preferred-gender",
  VOICE_ID: "yds-preferred-voice-id",
  TR_NARRATOR_ID: "yds-preferred-tr-narrator-id",
  RATE: "yds-preferred-rate",
};

// Neural TTS cold starts and provider retries can exceed 1.5 seconds.
// Keep a bounded wait, but do not abort normal requests before audio can arrive.
const TTS_REQUEST_TIMEOUT_MS = 8_000;
const BROWSER_VOICE_WAIT_MS = 1_500;

function waitForExactBrowserVoice(
  locale: VoiceLocale,
  gender: VoiceGender,
): Promise<SpeechSynthesisVoice | undefined> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return Promise.resolve(undefined);
  }

  const synthesis = window.speechSynthesis;
  const findVoice = () =>
    chooseExactBrowserVoice(synthesis.getVoices(), locale, gender);
  const immediatelyAvailable = findVoice();
  if (immediatelyAvailable) return Promise.resolve(immediatelyAvailable);

  // Chrome/Safari can return an empty voice list on the first call and fill it
  // asynchronously. Wait briefly for voiceschanged instead of reporting a
  // false "voice not found" immediately after the cloud provider fails.
  return new Promise((resolve) => {
    let settled = false;
    const finish = (voice?: SpeechSynthesisVoice) => {
      if (settled) return;
      settled = true;
      window.clearInterval(pollId);
      window.clearTimeout(timeoutId);
      synthesis.removeEventListener?.("voiceschanged", onVoicesChanged);
      resolve(voice);
    };
    const check = () => {
      const voice = findVoice();
      if (voice) finish(voice);
    };
    const onVoicesChanged = () => check();
    synthesis.addEventListener?.("voiceschanged", onVoicesChanged);
    const pollId = window.setInterval(check, 100);
    const timeoutId = window.setTimeout(() => finish(findVoice()), BROWSER_VOICE_WAIT_MS);
    check();
  });
}

class ClientAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentBlobUrl: string | null = null;
  private activeAbortController: AbortController | null = null;
  private lastMetadata: PlaybackMetadata | null = null;
  private currentPlaybackKey: string | null = null;
  private currentPlaybackOptions: PlaybackOptions | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private playbackGeneration = 0;

  constructor() {
    if (typeof window !== "undefined") {
      // SAFETY: Stop playing audio on browser history navigation
      window.addEventListener("popstate", () => this.stopAll());
    }
  }

  getLastPlaybackMetadata(): PlaybackMetadata | null {
    return this.lastMetadata;
  }

  getPlaybackPosition(): { currentTime: number; duration: number; paused: boolean } | null {
    const audio = this.currentAudio;
    if (!audio) return null;
    return {
      currentTime: Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
      duration: Number.isFinite(audio.duration) ? audio.duration : 0,
      paused: audio.paused,
    };
  }

  isNativeSpeechPlayback(): boolean {
    return Boolean(this.currentUtterance);
  }

  hasPlayback(text: string, voiceId: string): boolean {
    return this.currentPlaybackKey === this.playbackKey(text, voiceId) && Boolean(this.currentAudio || this.currentUtterance);
  }

  pauseCurrent(): number | null {
    const audio = this.currentAudio;
    if (!audio) {
      if (!this.currentUtterance || typeof window === "undefined" || !("speechSynthesis" in window)) return null;
      window.speechSynthesis.pause();
      return 0; // Native speech provides pause/resume but no reliable time or seek API.
    }
    const position = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    audio.pause();
    this.currentPlaybackOptions?.onTimeUpdate?.(position, Number.isFinite(audio.duration) ? audio.duration : 0);
    return position;
  }

  async resumeCurrent(options?: PlaybackOptions): Promise<boolean> {
    if (!this.currentAudio && !this.currentUtterance) return false;
    if (options) this.currentPlaybackOptions = options;
    if (!this.currentAudio && this.currentUtterance && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.resume();
      return true;
    }
    const audio = this.currentAudio;
    if (!audio) return false;
    try {
      await audio.play();
      return true;
    } catch {
      return false;
    }
  }

  seekCurrent(seconds: number): boolean {
    const audio = this.currentAudio;
    if (!audio || !Number.isFinite(seconds) || seconds < 0) return false;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return false;
    audio.currentTime = Math.max(0, Math.min(seconds, Math.max(0, audio.duration - 0.1)));
    return true;
  }

  private playbackKey(text: string, voiceId: string): string {
    return `${voiceId}:${text.trim()}`;
  }

  // Tercihleri yükle
  getPreferences(): UserVoicePreferences {
    if (typeof window === "undefined") {
      return {
        preferredAccent: "en-US",
        preferredVoiceGender: "female",
        preferredVoiceId: "en-US-female-jenny",
        preferredTurkishNarratorId: "tr-TR-female-emel",
        speakingRate: 1.0,
      };
    }

    try {
      const savedAccent = window.localStorage.getItem(STORAGE_KEYS.ACCENT) as AccentCode | null;
      const savedGender = window.localStorage.getItem(STORAGE_KEYS.GENDER);
      const gender: VoiceGender = savedGender === "male" ? "male" : "female";
      const selectableAccents: AccentCode[] = ["en-GB", "en-US", "en-AU"];
      const accent = savedAccent && selectableAccents.includes(savedAccent) ? savedAccent : "en-US";
      const savedVoiceId = window.localStorage.getItem(STORAGE_KEYS.VOICE_ID) || "";
      const savedVoice = getVoiceProfile(savedVoiceId);
      const accentVoice = findEnabledVoice(accent, gender);
      const voiceId = savedVoice?.enabled && savedVoice.locale === accent && savedVoice.gender === gender
        ? savedVoice.id
        : accentVoice?.id || "en-US-female-jenny";
      const trNarrator =
        (window.localStorage.getItem(STORAGE_KEYS.TR_NARRATOR_ID) as
          | "tr-TR-female-emel"
          | "tr-TR-male-ahmet") || "tr-TR-female-emel";
      const rateStr = window.localStorage.getItem(STORAGE_KEYS.RATE);
      const rate = rateStr ? parseFloat(rateStr) || 1.0 : 1.0;

      return {
        preferredAccent: getVoiceProfile(voiceId)?.locale as AccentCode || accent,
        preferredVoiceGender: gender,
        preferredVoiceId: voiceId,
        preferredTurkishNarratorId: trNarrator,
        speakingRate: Math.max(0.75, Math.min(1.25, rate)),
      };
    } catch {
      return {
        preferredAccent: "en-US",
        preferredVoiceGender: "female",
        preferredVoiceId: "en-US-female-jenny",
        preferredTurkishNarratorId: "tr-TR-female-emel",
        speakingRate: 1.0,
      };
    }
  }

  // Tercihleri kaydet
  savePreferences(prefs: Partial<UserVoicePreferences>): void {
    if (typeof window === "undefined") return;
    try {
      if (prefs.preferredAccent) {
        window.localStorage.setItem(STORAGE_KEYS.ACCENT, prefs.preferredAccent);
        // PERF & SYNC: Keep legacy 2-letter accent code in sync
        const accMap: Record<string, string> = {
          "en-GB": "uk",
          "en-US": "us",
          "en-CA": "ca",
          "en-AU": "au",
          "en-NZ": "nz",
          "en-GB-scotland": "sc",
          "en-IN": "in",
        };
        const shortId = accMap[prefs.preferredAccent];
        if (shortId) {
          window.localStorage.setItem("yds-accent", shortId);
        }
      }
      if (prefs.preferredVoiceGender) {
        window.localStorage.setItem(STORAGE_KEYS.GENDER, prefs.preferredVoiceGender);
        window.localStorage.setItem("yds-accent-gender", prefs.preferredVoiceGender);
      }
      if (prefs.preferredVoiceId) {
        window.localStorage.setItem(STORAGE_KEYS.VOICE_ID, prefs.preferredVoiceId);
      }
      if (prefs.preferredTurkishNarratorId) {
        window.localStorage.setItem(STORAGE_KEYS.TR_NARRATOR_ID, prefs.preferredTurkishNarratorId);
      }
      if (typeof prefs.speakingRate === "number") {
        window.localStorage.setItem(STORAGE_KEYS.RATE, prefs.speakingRate.toString());
      }
      window.dispatchEvent(new CustomEvent("yds:voice-prefs-changed", { detail: prefs }));
    } catch {
      /* noop */
    }
  }

  // Çalmakta olan tüm sesleri ve bekleyen ağ isteklerini anında durdur
  stopAll(): void {
    this.playbackGeneration += 1;
    if (this.activeAbortController) {
      try {
        this.activeAbortController.abort();
      } catch {
        /* noop */
      }
      this.activeAbortController = null;
    }

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {
        /* noop */
      }
      this.currentAudio = null;
    }
    this.currentUtterance = null;
    this.currentPlaybackKey = null;
    this.currentPlaybackOptions = null;

    if (this.currentBlobUrl) {
      try {
        URL.revokeObjectURL(this.currentBlobUrl);
      } catch {
        /* noop */
      }
      this.currentBlobUrl = null;
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        /* noop */
      }
    }
  }

  private resolveTargetVoice(
    prefs: UserVoicePreferences,
    options?: PlaybackOptions
  ): VoiceProfile | undefined {
    if (options?.voiceId) {
      const requestedVoice = getVoiceProfile(options.voiceId);
      if (!requestedVoice?.enabled) return undefined;
      if (options.accent && requestedVoice.locale !== options.accent) return undefined;
      if (options.gender && requestedVoice.gender !== options.gender) return undefined;
      return requestedVoice;
    }
    if (options?.speaker) {
      return findTurkishNarratorVoice(options.speaker === "ahmet" ? "male" : "female");
    }
    if (options?.contentLanguage === "tr" || options?.locale === "tr-TR") {
      const g =
        options?.gender ||
        (prefs.preferredTurkishNarratorId?.includes("male") ? "male" : "female");
      return findTurkishNarratorVoice(g);
    }
    if (options?.accent && options?.gender) {
      return findEnabledVoice(options.accent, options.gender);
    }
    if (options?.accent) {
      return findEnabledVoice(options.accent, prefs.preferredVoiceGender);
    }
    const savedVoice = getVoiceProfile(prefs.preferredVoiceId);
    if (
      savedVoice?.locale === prefs.preferredAccent &&
      savedVoice.gender === prefs.preferredVoiceGender
    ) {
      return savedVoice;
    }
    return findEnabledVoice(prefs.preferredAccent, prefs.preferredVoiceGender);
  }

  // Sunucu API üzerinden doğal neural ses çal; gecikirse Web Speech API'ye güvenli geçiş yap.
  async play(text: string, options?: PlaybackOptions): Promise<void> {
    // Do not expose metadata from the previous speaker while this request is
    // unresolved or when the requested profile cannot be played.
    this.lastMetadata = null;
    const prefs = this.getPreferences();
    const voice = this.resolveTargetVoice(prefs, options);

    if (!voice) {
      const err = new Error("Seçilen dil veya aksan için ses profili bulunamadı.");
      options?.onError?.(err);
      options?.onInfo?.("Ses profili bulunamadı.");
      return;
    }

    this.stopAll();
    const playbackGeneration = this.playbackGeneration;

    const rate = options?.rate ?? prefs.speakingRate;
    const contentType =
      options?.contentType ||
      (text.length > 500 ? "long-form" : text.length > 140 ? "sentence" : "word");
    const t0 = Date.now();

    // SAFETY: Helper for browser speech synthesis fallback (never uses fake pitch shifting)
    const playWithBrowserSpeech = async (): Promise<boolean> => {
      // Cloud failures must not silently change the requested accent/speaker or
      // label an unverified device voice as the selected cloud voice.
      if (options?.allowBrowserFallback === false) return false;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          this.currentUtterance = utterance;
          this.currentPlaybackKey = this.playbackKey(text, voice.id);
          this.currentPlaybackOptions = options || null;
          const langLocale =
            voice.locale === "en-GB-scotland" ? "en-GB" : voice.locale || "en-US";
          utterance.lang = langLocale;
          utterance.rate = rate;
          // YASAK KURALI: Yapay pitch (1.08 / 0.88) ile sahte konuşmacı türetilmez; doğal pitch=1.0 korunur
          utterance.pitch = 1.0;

          const selectedBrowserVoice = await waitForExactBrowserVoice(
            voice.locale,
            voice.gender,
          );

          // Ignore a late voice-list result if the user stopped playback or
          // started a different word/lesson while the browser was loading it.
          if (playbackGeneration !== this.playbackGeneration) return true;

          if (!selectedBrowserVoice) {
            const requestedGender = voice.gender === "female" ? "kadın" : "erkek";
            const error = new Error(
              `Bu cihazda doğrulanmış ${voice.contentLanguage === "tr" ? "Türkçe" : voice.accentLabelTr} ${requestedGender} konuşmacısı bulunamadı ve sunucu ses üretimi de şu anda kullanılamıyor. Yanlış aksan veya konuşmacı seçilmedi. Site yöneticisinin lisanslı bir ses sağlayıcısını etkinleştirmesi ya da bu cihaz için uygun bir sistem sesi kurması gerekiyor.`,
            );
            options?.onInfo?.(error.message);
            options?.onError?.(error);
            return true;
          }

          utterance.voice = selectedBrowserVoice;

          const meta: PlaybackMetadata = {
            provider: "browser-speech-fallback",
            providerVoiceId: selectedBrowserVoice?.name || langLocale,
            voiceId: voice.id,
            displayName: voice.displayName,
            locale: voice.locale,
            contentLanguage: voice.contentLanguage,
            gender: voice.gender,
            // A browser voice's name/locale is not proof that its speaker
            // identity or gender is accurate. Keep this explicitly unverified.
            distinctSpeakerVerified: false,
            usingBrowserFallback: true,
            latencyMs: Date.now() - t0,
          };
          this.lastMetadata = meta;
          options?.onMetadata?.(meta);

          utterance.onstart = () => {
            this.currentPlaybackOptions?.onStart?.();
            if (voice.contentLanguage === "tr") {
              this.currentPlaybackOptions?.onInfo?.(
                `Cihaz sesi: ${selectedBrowserVoice.name} (${voice.gender === "female" ? "Kadın" : "Erkek"} · Türkçe)`
              );
            } else {
              this.currentPlaybackOptions?.onInfo?.(
                `Cihaz Yerel Sesi: ${voice.accentLabelTr} (${
                  voice.gender === "female" ? "Kadın" : "Erkek"
                })`
              );
            }
          };
          utterance.onend = () => {
            const callbacks = this.currentPlaybackOptions;
            if (this.currentUtterance === utterance) {
              this.currentUtterance = null;
              this.currentPlaybackKey = null;
              this.currentPlaybackOptions = null;
            }
            callbacks?.onEnd?.();
          };
          utterance.onerror = () => {
            const callbacks = this.currentPlaybackOptions;
            if (this.currentUtterance === utterance) {
              this.currentUtterance = null;
              this.currentPlaybackKey = null;
              this.currentPlaybackOptions = null;
            }
            callbacks?.onError?.(new Error("Cihaz sesi oynatılamadı."));
          };

          window.speechSynthesis.speak(utterance);
          return true;
        } catch (speechErr) {
          console.warn("[TTS Browser Speech Error]:", speechErr);
        }
      }
      return false;
    };

    try {
      trace("AUDIO", `playText started for "${text.slice(0, 30)}..." with voice ${voice.id}`);

      const controller = new AbortController();
      this.activeAbortController = controller;
      const timeoutId = setTimeout(() => controller.abort(), TTS_REQUEST_TIMEOUT_MS);

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          voiceId: voice.id,
          locale: voice.locale,
          contentLanguage: voice.contentLanguage,
          gender: voice.gender,
          speakingRate: rate,
          contentType,
        }),
        signal: controller.signal,
      }).catch((fetchErr) => {
        clearTimeout(timeoutId);
        throw fetchErr;
      });

      clearTimeout(timeoutId);
      this.activeAbortController = null;

      const contentTypeHeader = res.headers.get("content-type") || "";

      if (!res.ok) {
        const errorPayload: unknown = await res.json().catch(() => null);
        const message =
          typeof errorPayload === "object" && errorPayload !== null && "message" in errorPayload &&
          typeof errorPayload.message === "string"
            ? errorPayload.message
            : `TTS API isteği başarısız oldu (HTTP ${res.status}).`;
        throw new Error(message);
      }

      if (!contentTypeHeader.toLowerCase().startsWith("audio/")) {
        throw new Error(
          `TTS API ses yerine "${contentTypeHeader || "bilinmeyen içerik"}" döndürdü.`
        );
      }

      const distinctHeader = res.headers.get("x-tts-distinct-speaker") === "true";
      if (!distinctHeader) {
        throw new Error("Ses sağlayıcısı seçilen konuşmacıdan farklı bir sesi doğrulamadı.");
      }

      const audioBlob = await res.blob();
      if (audioBlob.size === 0) {
        throw new Error("TTS API boş ses verisi döndürdü.");
      }

      const providerHeader = res.headers.get("x-tts-provider") || voice.provider;
      const providerVoiceHeader = res.headers.get("x-tts-provider-voice") || voice.providerVoiceId;
      const meta: PlaybackMetadata = {
        provider: providerHeader,
        providerVoiceId: providerVoiceHeader,
        voiceId: voice.id,
        displayName: voice.displayName,
        locale: voice.locale,
        contentLanguage: voice.contentLanguage,
        gender: voice.gender,
        distinctSpeakerVerified: distinctHeader,
        usingBrowserFallback: false,
        latencyMs: Date.now() - t0,
      };
      this.lastMetadata = meta;
      options?.onMetadata?.(meta);

      const audioUrl = URL.createObjectURL(audioBlob);
      this.currentBlobUrl = audioUrl;

      const audio = new Audio(audioUrl);
      audio.playbackRate = 1.0; // Hız zaten sunucu tarafında prosody/stream ile uygulandı
      this.currentAudio = audio;
      this.currentPlaybackKey = this.playbackKey(text, voice.id);
      this.currentPlaybackOptions = options || null;

      audio.ontimeupdate = () => {
        this.currentPlaybackOptions?.onTimeUpdate?.(
          Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
          Number.isFinite(audio.duration) ? audio.duration : 0,
        );
      };

      const requestedStart = options?.startAtSeconds;
      if (typeof requestedStart === "number" && Number.isFinite(requestedStart) && requestedStart > 0) {
        const restorePosition = () => {
          if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
          audio.currentTime = Math.max(0, Math.min(requestedStart, Math.max(0, audio.duration - 0.1)));
        };
        if (audio.readyState >= HTMLMediaElement.HAVE_METADATA) {
          restorePosition();
        } else {
          await new Promise<void>((resolve) => {
            const onMetadata = () => {
              audio.removeEventListener("loadedmetadata", onMetadata);
              restorePosition();
              resolve();
            };
            audio.addEventListener("loadedmetadata", onMetadata, { once: true });
            audio.load();
            // Some browsers don't emit loadedmetadata for a rejected/unsupported blob.
            window.setTimeout(() => {
              audio.removeEventListener("loadedmetadata", onMetadata);
              resolve();
            }, 1500);
          });
        }
      }

      // stopAll may be called while waiting for audio metadata to restore a
      // saved position. Do not start this stale audio after a lesson/voice change.
      if (this.currentAudio !== audio) return;

      audio.onplay = () => {
        this.currentPlaybackOptions?.onStart?.();
        if (distinctHeader) {
          this.currentPlaybackOptions?.onInfo?.(
            `Doğal Neural Ses: ${voice.displayName} (${voice.accentLabelTr} · ${
              voice.gender === "female" ? "Kadın" : "Erkek"
            })`
          );
        } else {
          this.currentPlaybackOptions?.onInfo?.(
            `Bulut Ses Motoru (${voice.accentLabelTr}): Standart yedek ses aktif`
          );
        }
      };

      audio.onended = () => {
        if (this.currentBlobUrl) {
          URL.revokeObjectURL(this.currentBlobUrl);
          this.currentBlobUrl = null;
        }
        this.currentAudio = null;
        this.currentPlaybackOptions?.onEnd?.();
      };

      audio.onerror = async () => {
        if (this.currentBlobUrl) {
          URL.revokeObjectURL(this.currentBlobUrl);
          this.currentBlobUrl = null;
        }
        this.currentAudio = null;

        if (!(await playWithBrowserSpeech())) {
          const err = new Error("Ses oynatılamadı.");
          options?.onError?.(err);
          options?.onInfo?.("Ses dosyası oynatılamadı.");
        }
      };

      await audio.play().catch(async (playErr) => {
        if (!(await playWithBrowserSpeech())) {
          throw playErr;
        }
      });
    } catch (err: any) {
      if (err?.name === "AbortError" && !this.activeAbortController) {
        // Kullanıcı stopAll() çağırdıysa sessizce çık
        return;
      }
      // A system voice is opt-in: an unavailable cloud voice must remain an
      // honest playback error instead of silently changing speaker identity.
      const fallbackSuccess = await playWithBrowserSpeech();
      if (!fallbackSuccess) {
        options?.onError?.(err instanceof Error ? err : new Error(String(err)));
        options?.onInfo?.("Ses bağlantısı kurulamadı. Lütfen tekrar deneyin.");
      }
    }
  }

  // Standart Önizleme Cümlesini Çal (Türkçe sesler Türkçe, İngilizce sesler İngilizce cümle okur)
  async playPreview(voiceId: string, options?: PlaybackOptions): Promise<void> {
    const profile = getVoiceProfile(voiceId);
    const previewText =
      profile?.contentLanguage === "tr"
        ? STANDARD_TURKISH_PREVIEW_TEXT
        : STANDARD_PREVIEW_TEXT;
    return this.play(previewText, {
      ...options,
      voiceId,
      contentLanguage: profile?.contentLanguage || "en",
      contentType: "sentence",
      rate: options?.rate ?? 1.0,
    });
  }
}

export const clientAudio = new ClientAudioManager();
