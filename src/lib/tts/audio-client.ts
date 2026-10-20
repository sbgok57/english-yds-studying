import {
  AccentCode,
  VoiceGender,
  VoiceProfile,
  getVoiceProfile,
  findVoice,
  STANDARD_PREVIEW_TEXT,
} from "./voice-registry";
import { trace } from "@/lib/debug/tracer";

export interface PlaybackOptions {
  voiceId?: string;
  accent?: AccentCode;
  gender?: VoiceGender;
  rate?: number;
  contentType?: "word" | "sentence" | "long-form";
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  onInfo?: (msg: string) => void;
}

export interface UserVoicePreferences {
  preferredAccent: AccentCode;
  preferredVoiceGender: VoiceGender;
  preferredVoiceId: string;
  speakingRate: number;
}

const STORAGE_KEYS = {
  ACCENT: "yds-preferred-accent",
  GENDER: "yds-preferred-gender",
  VOICE_ID: "yds-preferred-voice-id",
  RATE: "yds-preferred-rate",
};

// Neural TTS cold starts and provider retries can exceed 1.5 seconds.
// Keep a bounded wait, but do not abort normal requests before audio can arrive.
const TTS_REQUEST_TIMEOUT_MS = 8_000;

class ClientAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentBlobUrl: string | null = null;

  // Tercihleri yükle
  getPreferences(): UserVoicePreferences {
    if (typeof window === "undefined") {
      return {
        preferredAccent: "en-US",
        preferredVoiceGender: "female",
        preferredVoiceId: "en-US-female-jenny",
        speakingRate: 1.0,
      };
    }

    try {
      const accent = (window.localStorage.getItem(STORAGE_KEYS.ACCENT) as AccentCode) || "en-US";
      const gender = (window.localStorage.getItem(STORAGE_KEYS.GENDER) as VoiceGender) || "female";
      const voiceId = window.localStorage.getItem(STORAGE_KEYS.VOICE_ID) || "en-US-female-jenny";
      const rateStr = window.localStorage.getItem(STORAGE_KEYS.RATE);
      const rate = rateStr ? parseFloat(rateStr) || 1.0 : 1.0;

      return {
        preferredAccent: accent,
        preferredVoiceGender: gender,
        preferredVoiceId: voiceId,
        speakingRate: Math.max(0.75, Math.min(1.25, rate)),
      };
    } catch {
      return {
        preferredAccent: "en-US",
        preferredVoiceGender: "female",
        preferredVoiceId: "en-US-female-jenny",
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
      if (typeof prefs.speakingRate === "number") {
        window.localStorage.setItem(STORAGE_KEYS.RATE, prefs.speakingRate.toString());
      }
      window.dispatchEvent(new CustomEvent("yds:voice-prefs-changed", { detail: prefs }));
    } catch {
      /* noop */
    }
  }

  // Çalmakta olan tüm sesleri anında durdur
  stopAll(): void {
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

  // Sunucu API üzerinden doğal neural ses çal; gecikirse Web Speech API'ye güvenli geçiş yap.
  async play(text: string, options?: PlaybackOptions): Promise<void> {
    const prefs = this.getPreferences();
    const voice = options?.voiceId
      ? getVoiceProfile(options.voiceId)
      : options?.accent && options?.gender
      ? findVoice(options.accent, options.gender)
      : getVoiceProfile(prefs.preferredVoiceId) || findVoice(prefs.preferredAccent, prefs.preferredVoiceGender);

    if (!voice) {
      const err = new Error("Seçilen aksan için ses profili bulunamadı.");
      options?.onError?.(err);
      options?.onInfo?.("Aksan profili bulunamadı.");
      return;
    }

    this.stopAll();

    const rate = options?.rate ?? prefs.speakingRate;
    const contentType = options?.contentType || (text.length > 200 ? "sentence" : "word");

    // SAFETY: Helper for browser speech synthesis fallback (never fails)
    const playWithBrowserSpeech = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          const langLocale = voice?.locale === "en-GB-scotland" ? "en-GB" : (voice?.locale || "en-US");
          utterance.lang = langLocale;
          utterance.rate = rate;

          const voices = window.speechSynthesis.getVoices();
          const match =
            voices.find((v) => v.lang.toLowerCase() === langLocale.toLowerCase()) ||
            voices.find((v) => v.lang.toLowerCase().replace(/_/g, "-").startsWith(langLocale.toLowerCase().slice(0, 2)));
          if (match) utterance.voice = match;

          utterance.onstart = () => {
            options?.onStart?.();
            options?.onInfo?.(`Doğal Aksan Sesi: ${voice.accentLabelTr} (${voice.gender === "female" ? "Kadın" : "Erkek"})`);
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

      // Bound the network wait without aborting normal neural TTS cold starts.
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TTS_REQUEST_TIMEOUT_MS);

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          voiceId: voice.id,
          speakingRate: rate,
          contentType,
        }),
        signal: controller.signal,
      }).catch((fetchErr) => {
        clearTimeout(timeoutId);
        throw fetchErr;
      });

      clearTimeout(timeoutId);

      const contentTypeHeader = res.headers.get("content-type") || "";

      if (!res.ok) {
        throw new Error(`TTS API Hatası: HTTP ${res.status}`);
      }

      // The API may return HTTP 200 with JSON when the cloud provider fails.
      // Never pass that JSON (or an HTML error page) to the audio decoder.
      if (!contentTypeHeader.toLowerCase().startsWith("audio/")) {
        throw new Error(
          `TTS API ses yerine "${contentTypeHeader || "bilinmeyen içerik"}" döndürdü.`
        );
      }

      const audioBlob = await res.blob();
      if (audioBlob.size === 0) {
        throw new Error("TTS API boş ses verisi döndürdü.");
      }

      const audioUrl = URL.createObjectURL(audioBlob);
      this.currentBlobUrl = audioUrl;

      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      audio.onplay = () => {
        options?.onStart?.();
        options?.onInfo?.(`Doğal Neural Ses: ${voice.displayName} (${voice.accentLabelTr} · ${voice.gender === "female" ? "Kadın" : "Erkek"})`);
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
        // Autoplay policy or format error -> immediately fall back to browser speech
        if (!playWithBrowserSpeech()) {
          throw playErr;
        }
      });
    } catch (err: any) {
      // PERF & SAFETY: Automatic Web Speech API Fallback ensures sounds NEVER fail
      const fallbackSuccess = playWithBrowserSpeech();
      if (!fallbackSuccess) {
        options?.onError?.(err instanceof Error ? err : new Error(String(err)));
        options?.onInfo?.("Ses bağlantısı kurulamadı. Lütfen tekrar deneyin.");
      }
    }
  }

  // Standart Önizleme Cümlesini Çal
  async playPreview(voiceId: string, options?: PlaybackOptions): Promise<void> {
    return this.play(STANDARD_PREVIEW_TEXT, {
      ...options,
      voiceId,
      contentType: "sentence",
      rate: 1.0,
    });
  }
}

export const clientAudio = new ClientAudioManager();
