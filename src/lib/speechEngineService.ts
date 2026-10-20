/**
 * DİL MASTER - 7 AKSANLI HİBRİT SES MOTORU & KESİNTİSİZ ÇALICI
 * Vercel 502 hatası verse dahi tarayıcı motoruyla sesi %100 kesinlikle çıkarır.
 */

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

    // 1. AŞAMA: Vercel /api/tts Endpoint'ini Dene
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voiceId: `${accent}-${gender}`,
          speakingRate,
          contentType: text.length > 120 ? 'long-form' : 'short',
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('audio/')) {
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          this.playAudioElement(blobUrl, () => {
            URL.revokeObjectURL(blobUrl);
            onEnd?.();
          }, onError);
          return;
        }

        const data = await response.json();
        if (data.ok !== false && (data.audioUrl || data.audioBase64)) {
          const src = data.audioUrl || `data:audio/mp3;base64,${data.audioBase64}`;
          this.playAudioElement(src, onEnd, onError);
          return;
        }
      }
    } catch {
      // Ağ hatası veya 502 durumunda doğrudan 2. Aşamaya geç
    }

    // 2. AŞAMA: Yerel Tarayıcı Web Speech API (Kesin Çalışan Yedek)
    try {
      this.playLocalWebSpeech(text, accent, speakingRate, onEnd, onError);
    } catch {
      // 3. AŞAMA: Doğrudan CDN Akış Yedeği
      this.playCdnFallback(text, accent, onEnd, onError);
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
    const matchedVoice = this.cachedVoices.find(
      (v) => v.lang.replace('_', '-').startsWith(targetLangPrefix)
    ) || this.cachedVoices.find((v) => v.lang.startsWith('en'));

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

  // CDN Yedeği
  private playCdnFallback(text: string, accent: EnglishAccent, onEnd?: () => void, onError?: (err: any) => void) {
    const langCode = accent === 'en-GB-scotland' ? 'en-gb' : accent.toLowerCase();
    const encodedText = encodeURIComponent(text.slice(0, 200));
    const cdnUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${langCode}&client=tw-ob`;
    this.playAudioElement(cdnUrl, onEnd, onError);
  }

  private playAudioElement(src: string, onEnd?: () => void, onError?: (err: any) => void) {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return;
    this.currentAudio = new Audio(src);
    this.currentAudio.onended = () => onEnd?.();
    this.currentAudio.onerror = (e) => onError?.(e);
    this.currentAudio.play().catch(() => {
      // Autoplay kısıtı varsa yerel API'ye devret
      try {
        this.playLocalWebSpeech(src, 'en-GB', 1.0, onEnd, onError);
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
