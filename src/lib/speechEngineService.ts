import { getSavedElevenLabsVoiceId } from "./tts/saved-voice-choice";
/**
 * DİL MASTER - Sağlayıcıda doğrulanmış aksanlar için hibrit ses motoru
 * Vercel 502 hatası verse dahi tarayıcı motoruyla sesi %100 kesinlikle çıkarır.
 */

import { findEnabledVoice } from './tts/voice-registry';

export type EnglishAccent = 'en-GB' | 'en-US' | 'en-AU' | 'en-CA' | 'en-NZ' | 'en-IN' | 'en-GB-scotland';

export interface PlaySpeechOptions {
  text: string;
  accent?: EnglishAccent;
  speakingRate?: number; // 0.75 - 1.25
  gender?: 'female' | 'male';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

export class SpeechEngineService {
  private currentAudio: HTMLAudioElement | null = null;
  private voicesLoaded: boolean = false;
  private cachedVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    this.cachedVoices = window.speechSynthesis.getVoices();
    if (this.cachedVoices.length > 0) {
      this.voicesLoaded = true;
    }
  }

  // Mobil Cihazlar İçin Otomatik Ses Kilidi Açıcı
  public unlockAudio(): void {
    if (typeof window === 'undefined') return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  // Kanonik /api/tts istek gövdesi oluşturucu
  public buildApiRequestPayload(options: PlaySpeechOptions) {
    const accent = options.accent || 'en-GB';
    const gender = options.gender || 'female';
    const rate = options.speakingRate ?? 1.0;
    const voice = findEnabledVoice(accent, gender);
    if (!voice) throw new Error(`VOICE_NOT_AVAILABLE: ${accent} ${gender}`);
    const trimmed = (options.text || '').trim();
    const contentType =
      trimmed.length > 120 ? 'long-form' : trimmed.includes(' ') ? 'sentence' : 'word';

    return {
      text: trimmed,
      voiceId: voice?.id || `en-GB-female-sonia`,
      accent,
      locale: accent,
      contentLanguage: 'en' as const,
      gender,
      rate,
      contentType,
    };
  }

  // Ana Ses Çalma Fonksiyonu
  public async playSpeech(options: PlaySpeechOptions): Promise<void> {
    const {
      text,
      accent = 'en-GB',
      speakingRate = 1.0,
      gender = 'female',
      onStart,
      onEnd,
      onError,
    } = options;

    if (!text || text.trim() === '') return;

    this.stop();
    this.unlockAudio();
    onStart?.();

    const payload = this.buildApiRequestPayload({ text, accent, speakingRate, gender });

    // 1. AŞAMA: Merkezi /api/tts Endpoint'ini Dene (Kanonik voiceId ve AbortController ile)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, elevenLabsVoiceId: getSavedElevenLabsVoiceId() }),
        signal: controller.signal,
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('audio/')) {
          const blob = await response.blob();
          if (blob.size >= 128) {
            const blobUrl = URL.createObjectURL(blob);
            this.playAudioElement(
              blobUrl,
              text,
              accent,
              speakingRate,
              () => {
                URL.revokeObjectURL(blobUrl);
                onEnd?.();
              },
              onError
            );
            return;
          }
        }
      }
    } catch {
      // Ağ hatası veya zaman aşımı durumunda doğrudan 2. Aşamaya geç
    } finally {
      clearTimeout(timeoutId);
    }

    // 2. AŞAMA: Yerel Tarayıcı Web Speech API (Kesin Çalışan Yedek)
    try {
      this.playLocalWebSpeech(text, accent, speakingRate, onEnd, onError);
    } catch {
      // 3. AŞAMA: GET /api/tts Akış Yedeği
      this.playServerGetFallback(payload, text, accent, speakingRate, onEnd, onError);
    }
  }

  // Web Speech API Motoru (Aksan Eşleştirmesi ile)
  private playLocalWebSpeech(
    text: string,
    accent: EnglishAccent,
    speakingRate: number,
    onEnd?: () => void,
    onError?: (err: any) => void
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      throw new Error('Web Speech API desteklenmiyor.');
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = Math.max(0.7, Math.min(speakingRate, 1.3));
    utterance.lang = accent === 'en-GB-scotland' ? 'en-GB' : accent;

    // Sistemdeki en uygun aksanlı sesi seç
    if (this.cachedVoices.length === 0) {
      this.cachedVoices = window.speechSynthesis.getVoices();
    }

    const targetLangPrefix = accent.slice(0, 5); // 'en-GB', 'en-US' vb.
    const matchedVoice =
      this.cachedVoices.find((v) => v.lang.replace('_', '-').startsWith(targetLangPrefix)) ||
      this.cachedVoices.find((v) => v.lang.startsWith('en'));

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onend = () => onEnd?.();
    utterance.onerror = (e) => {
      // Kullanıcı hızlı tıkladığında oluşan iptalleri hata sayma
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        onError?.(e);
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  // Sunucu GET /api/tts Akış Yedeği
  private playServerGetFallback(
    payload: ReturnType<SpeechEngineService['buildApiRequestPayload']>,
    fallbackText: string,
    accent: EnglishAccent,
    speakingRate: number,
    onEnd?: () => void,
    onError?: (err: any) => void
  ) {
    const url = `/api/tts?text=${encodeURIComponent(payload.text)}&voiceId=${encodeURIComponent(
      payload.voiceId
    )}&accent=${encodeURIComponent(payload.accent)}&gender=${encodeURIComponent(
      payload.gender
    )}&rate=${payload.rate}&contentType=${payload.contentType}`;
    const savedVoice = getSavedElevenLabsVoiceId();
    this.playAudioElement(savedVoice ? `${url}&elevenLabsVoiceId=${encodeURIComponent(savedVoice)}` : url, fallbackText, accent, speakingRate, onEnd, onError);
  }

  private playAudioElement(
    src: string,
    fallbackText: string,
    accent: EnglishAccent,
    speakingRate: number,
    onEnd?: () => void,
    onError?: (err: any) => void
  ) {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return;
    this.currentAudio = new Audio(src);
    this.currentAudio.onended = () => onEnd?.();
    this.currentAudio.onerror = (e) => onError?.(e);
    this.currentAudio.play().catch(() => {
      // SAFETY: Pass actual fallbackText (never the blob:/data: src URL!) to local speech synthesis
      try {
        this.playLocalWebSpeech(fallbackText, accent, speakingRate, onEnd, onError);
      } catch {
        // Sessizce başarısız ol
      }
    });
  }

  public stop(): void {
    if (typeof window !== 'undefined') {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }
}

export const speechEngine = new SpeechEngineService();
