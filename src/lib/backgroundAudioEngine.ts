import { clientAudio } from "./tts/audio-client";

/**
 * DİL MASTER - Ders sesi oynatımı ve cihazın desteklediği medya kontrolleri.
 * Gerçek arka plan/ekran kilidi oynatımı ses kaynağına ve işletim sistemine bağlıdır.
 */

export interface LessonTrack {
  id: string;
  title: string;
  topic: string;
  level: string; // YDS, YDT, YÖKDİL
  audioUrl?: string;
  textScript: string;
  speaker?: 'emel' | 'ahmet';
}

export interface NarrationPlaybackOptions {
  voiceId: string;
  locale: "tr-TR";
  contentLanguage: "tr";
  gender: "female" | "male";
  speaker: "emel" | "ahmet";
  rate: number;
  contentType: "long-form";
}

export class BackgroundAudioEngine {
  private audioElement: HTMLAudioElement | null = null;
  private currentTrack: LessonTrack | null = null;
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (this.audioElement || typeof window === 'undefined' || typeof Audio === 'undefined') return;

    this.audioElement = new Audio();
    this.audioElement.preload = 'auto';

    // Medya Oturum Yönetimi (Kilit Ekranı Kumandası)
    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => this.play());
      navigator.mediaSession.setActionHandler('pause', () => this.pause());
      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        if (this.audioElement) {
          this.audioElement.currentTime = Math.max(this.audioElement.currentTime - (details.seekOffset || 10), 0);
        }
      });
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        if (this.audioElement) {
          this.audioElement.currentTime = Math.min(this.audioElement.currentTime + (details.seekOffset || 10), this.audioElement.duration || 0);
        }
      });
    }

    this.isInitialized = true;
  }

  public buildLessonPlaybackOptions(track: LessonTrack): NarrationPlaybackOptions {
    const speaker = track.speaker === 'ahmet' ? 'ahmet' : 'emel';
    const gender = speaker === 'ahmet' ? 'male' : 'female';
    const voiceId = speaker === 'ahmet' ? 'tr-TR-male-ahmet' : 'tr-TR-female-emel';
    return { voiceId, locale: "tr-TR", contentLanguage: "tr", gender, speaker, rate: 0.95, contentType: "long-form" };
  }

  // Tane Tane, Doğal İnsan Sesiyle Gramer Çalma Fonksiyonu
  public async playGrammarLesson(track: LessonTrack): Promise<void> {
    this.initAudioElement();
    if (!this.audioElement) return;

    this.currentTrack = track;

    // Kilit ekranı başlık ve bilgilerini güncelle
    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title,
        artist: track.speaker === 'ahmet' ? 'DİL MASTER (Ahmet — Erkek Hoca)' : 'DİL MASTER (Emel — Kadın Hoca)',
        album: `${track.level} Gramer Akademisi`,
        artwork: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }
        ]
      });
      navigator.mediaSession.playbackState = 'playing';
    }

    try {
      clientAudio.stopAll();
      if (track.audioUrl) {
        this.audioElement.src = track.audioUrl;
        this.audioElement.playbackRate = 0.95;
        await this.audioElement.play();
      } else {
        await clientAudio.play(track.textScript, {
          ...this.buildLessonPlaybackOptions(track),
          contentType: "long-form",
          onEnd: () => {
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
          },
        });
      }
    } catch {
      // Mobil cihaz kilitliyse kullanıcı dokunuşuyla başlatılması gerekir
      if (typeof document !== 'undefined') {
        document.addEventListener('click', () => this.audioElement?.play(), { once: true });
      }
    }
  }

  public play() {
    if (this.currentTrack && !this.currentTrack.audioUrl) {
      void this.playGrammarLesson(this.currentTrack);
      return;
    }
    if (this.audioElement && this.audioElement.paused) {
      this.audioElement.play().catch(() => {});
      if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    }
  }

  public pause() {
    if (this.audioElement && !this.audioElement.paused) {
      this.audioElement.pause();
      if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
      }
    }
    clientAudio.stopAll();
  }

  public stop() {
    clientAudio.stopAll();
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'none';
      }
    }
  }

  public getCurrentTrack(): LessonTrack | null {
    return this.currentTrack;
  }
}

export const backgroundAudio = new BackgroundAudioEngine();
