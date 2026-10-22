import {
  AccentCode,
  VoiceLocale,
  ContentLanguage,
  VoiceGender,
  VoiceProfile,
  getVoiceProfile,
  findVoice,
  findTurkishNarratorVoice,
  STANDARD_PREVIEW_TEXT,
  STANDARD_TURKISH_PREVIEW_TEXT,
} from "./voice-registry";
import { trace } from "@/lib/debug/tracer";

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
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  onInfo?: (msg: string) => void;
  onMetadata?: (meta: PlaybackMetadata) => void;
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

class ClientAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentBlobUrl: string | null = null;
  private activeAbortController: AbortController | null = null;
  private lastMetadata: PlaybackMetadata | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      // SAFETY: Stop playing audio on browser history navigation
      window.addEventListener("popstate", () => this.stopAll());
    }
  }

  getLastPlaybackMetadata(): PlaybackMetadata | null {
    return this.lastMetadata;
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
      const accent = (window.localStorage.getItem(STORAGE_KEYS.ACCENT) as AccentCode) || "en-US";
      const gender = (window.localStorage.getItem(STORAGE_KEYS.GENDER) as VoiceGender) || "female";
      const voiceId = window.localStorage.getItem(STORAGE_KEYS.VOICE_ID) || "en-US-female-jenny";
      const trNarrator =
        (window.localStorage.getItem(STORAGE_KEYS.TR_NARRATOR_ID) as
          | "tr-TR-female-emel"
          | "tr-TR-male-ahmet") || "tr-TR-female-emel";
      const rateStr = window.localStorage.getItem(STORAGE_KEYS.RATE);
      const rate = rateStr ? parseFloat(rateStr) || 1.0 : 1.0;

      return {
        preferredAccent: accent,
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
      return getVoiceProfile(options.voiceId);
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
      return findVoice(options.accent, options.gender);
    }
    if (options?.accent) {
      return findVoice(options.accent, prefs.preferredVoiceGender);
    }
    return (
      getVoiceProfile(prefs.preferredVoiceId) ||
      findVoice(prefs.preferredAccent, prefs.preferredVoiceGender)
    );
  }

  // Sunucu API üzerinden doğal neural ses çal; gecikirse Web Speech API'ye güvenli geçiş yap.
  async play(text: string, options?: PlaybackOptions): Promise<void> {
    const prefs = this.getPreferences();
    const voice = this.resolveTargetVoice(prefs, options);

    if (!voice) {
      const err = new Error("Seçilen dil veya aksan için ses profili bulunamadı.");
      options?.onError?.(err);
      options?.onInfo?.("Ses profili bulunamadı.");
      return;
    }

    this.stopAll();

    const rate = options?.rate ?? prefs.speakingRate;
    const contentType =
      options?.contentType ||
      (text.length > 500 ? "long-form" : text.length > 140 ? "sentence" : "word");
    const t0 = Date.now();

    // SAFETY: Helper for browser speech synthesis fallback (never uses fake pitch shifting)
    const playWithBrowserSpeech = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          const langLocale =
            voice.locale === "en-GB-scotland" ? "en-GB" : voice.locale || "en-US";
          utterance.lang = langLocale;
          utterance.rate = rate;
          // YASAK KURALI: Yapay pitch (1.08 / 0.88) ile sahte konuşmacı türetilmez; doğal pitch=1.0 korunur
          utterance.pitch = 1.0;

          const voices = window.speechSynthesis.getVoices();
          const localePrefix = langLocale.toLowerCase().slice(0, 2);
          const matchingLangVoices = voices.filter((v) =>
            v.lang.toLowerCase().replace(/_/g, "-").startsWith(localePrefix)
          );
          const femaleVoice = matchingLangVoices.find((candidate) =>
            /female|emel|yelda|filiz|seda|sonia|jenny|clara|natasha|molly|neerja|samantha|victoria|karen|moira|tessa|fiona|veena/i.test(
              candidate.name,
            ),
          );
          const maleVoice = matchingLangVoices.find((candidate) =>
            /male|ahmet|cem|tolga|kerem|mert|ryan|guy|liam|william|mitchell|prabhat|daniel|alex|fred|ralph|albert|reed/i.test(
              candidate.name,
            ),
          );
          const selectedBrowserVoice = voice.gender === "female" ? femaleVoice : maleVoice;

          if (!selectedBrowserVoice) {
            const requestedGender = voice.gender === "female" ? "kadın" : "erkek";
            const error = new Error(
              `Bu cihazda ${voice.contentLanguage === "tr" ? "Türkçe" : voice.accentLabelTr} için doğrulanabilir ${requestedGender} sesi bulunamadı. Ses ayarlarından uygun bir sistem sesi yükleyin veya ayrı konuşmacı sesleri tanımlı bulut sağlayıcısını kullanın.`,
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
            distinctSpeakerVerified: true,
            usingBrowserFallback: true,
            latencyMs: Date.now() - t0,
          };
          this.lastMetadata = meta;
          options?.onMetadata?.(meta);

          utterance.onstart = () => {
            options?.onStart?.();
            if (voice.contentLanguage === "tr") {
              options?.onInfo?.(
                `Cihaz sesi: ${selectedBrowserVoice.name} (${voice.gender === "female" ? "Kadın" : "Erkek"} · Türkçe)`
              );
            } else {
              options?.onInfo?.(
                `Cihaz Yerel Sesi: ${voice.accentLabelTr} (${
                  voice.gender === "female" ? "Kadın" : "Erkek"
                })`
              );
            }
          };
          utterance.onend = () => {
            options?.onEnd?.();
          };
          utterance.onerror = () => {
            options?.onError?.(new Error("Cihaz sesi oynatılamadı."));
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
        throw new Error(`TTS API Hatası: HTTP ${res.status}`);
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

      audio.onplay = () => {
        options?.onStart?.();
        if (distinctHeader) {
          options?.onInfo?.(
            `Doğal Neural Ses: ${voice.displayName} (${voice.accentLabelTr} · ${
              voice.gender === "female" ? "Kadın" : "Erkek"
            })`
          );
        } else {
          options?.onInfo?.(
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
        options?.onEnd?.();
      };

      audio.onerror = () => {
        if (this.currentBlobUrl) {
          URL.revokeObjectURL(this.currentBlobUrl);
          this.currentBlobUrl = null;
        }
        this.currentAudio = null;

        if (!playWithBrowserSpeech()) {
          const err = new Error("Ses oynatılamadı.");
          options?.onError?.(err);
          options?.onInfo?.("Ses dosyası oynatılamadı.");
        }
      };

      await audio.play().catch((playErr) => {
        if (!playWithBrowserSpeech()) {
          throw playErr;
        }
      });
    } catch (err: any) {
      if (err?.name === "AbortError" && !this.activeAbortController) {
        // Kullanıcı stopAll() çağırdıysa sessizce çık
        return;
      }
      // PERF & SAFETY: Automatic Web Speech API Fallback ensures sounds NEVER fail
      const fallbackSuccess = playWithBrowserSpeech();
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
