import {
  AccentCode,
  VoiceGender,
  VoiceProfile,
  getVoiceProfile,
  findVoice,
  STANDARD_PREVIEW_TEXT,
} from "./voice-registry";

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

class ClientAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
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
      }
      if (prefs.preferredVoiceGender) {
        window.localStorage.setItem(STORAGE_KEYS.GENDER, prefs.preferredVoiceGender);
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
      this.currentUtterance = null;
    }
  }

  // Web Speech API Fallback (doğal pitch ile)
  private playBrowserSpeech(text: string, locale: string, options?: PlaybackOptions): void {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      options?.onError?.(new Error("Tarayıcınız ses çalmayı desteklemiyor."));
      return;
    }

    this.stopAll();

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;
    utterance.lang = locale;
    utterance.rate = options?.rate || 1.0;
    utterance.pitch = 1.0; // SAFETY: Asla robotikleştirici pitch modifikasyonu yapma

    // Tarayıcı seslerini eşleştirmeyi dene
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v) => v.lang.replace("_", "-").toLowerCase() === locale.toLowerCase());
    if (match) utterance.voice = match;

    utterance.onstart = () => {
      options?.onStart?.();
      options?.onInfo?.("Geçici Tarayıcı Sesi devrede.");
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      options?.onEnd?.();
    };

    utterance.onerror = (err) => {
      this.currentUtterance = null;
      options?.onError?.(err);
    };

    window.speechSynthesis.speak(utterance);
  }

  // Sunucu API üzerinden ses çal
  async play(text: string, options?: PlaybackOptions): Promise<void> {
    const prefs = this.getPreferences();
    const voice = options?.voiceId
      ? getVoiceProfile(options.voiceId)
      : options?.accent && options?.gender
      ? findVoice(options.accent, options.gender)
      : getVoiceProfile(prefs.preferredVoiceId) || findVoice(prefs.preferredAccent, prefs.preferredVoiceGender);

    if (!voice) {
      this.playBrowserSpeech(text, options?.accent || prefs.preferredAccent, options);
      return;
    }

    this.stopAll();

    const rate = options?.rate ?? prefs.speakingRate;
    const contentType = options?.contentType || (text.length > 200 ? "sentence" : "word");

    try {
      options?.onStart?.();

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          voiceId: voice.id,
          speakingRate: rate,
          contentType,
        }),
      });

      const contentTypeHeader = res.headers.get("content-type") || "";

      if (!res.ok || contentTypeHeader.includes("application/json")) {
        const data = await res.json().catch(() => ({}));
        if (data?.fallbackWebSpeech) {
          this.playBrowserSpeech(text, voice.locale, options);
          return;
        }
        throw new Error(`TTS API Hatası: ${res.status}`);
      }

      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      this.currentBlobUrl = audioUrl;

      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      audio.onplay = () => {
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
        this.playBrowserSpeech(text, voice.locale, options);
      };

      await audio.play();
    } catch {
      this.playBrowserSpeech(text, voice.locale, options);
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
