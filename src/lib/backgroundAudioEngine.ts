/**
 * DİL MASTER - ARKA PLAN & KİLİT EKRANI DESTEKLİ DOĞAL SES MOTORU
 * Ekran kapandığında dahi çalmaya devam eder ve kilit ekranına kumanda paneli ekler.
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

  public buildLessonStreamUrl(track: LessonTrack): string {
    if (track.audioUrl) return track.audioUrl;
    const speaker = track.speaker === 'ahmet' ? 'ahmet' : 'emel';
    const gender = speaker === 'ahmet' ? 'male' : 'female';
    const voiceId = speaker === 'ahmet' ? 'tr-TR-male-ahmet' : 'tr-TR-female-emel';
    return `/api/tts?text=${encodeURIComponent(
      track.textScript
    )}&voiceId=${voiceId}&locale=tr-TR&contentLanguage=tr&speaker=${speaker}&gender=${gender}&rate=0.95&contentType=long-form`;
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
          { src: '/favicon.ico', sizes: '192x192', type: 'image/png' }
        ]
      });
      navigator.mediaSession.playbackState = 'playing';
    }

    // Merkezi /api/tts Doğal İnsan Sesi Stream Kaynağı (Emel / Ahmet)
    const sourceUrl = this.buildLessonStreamUrl(track);

    this.audioElement.src = sourceUrl;
    this.audioElement.playbackRate = 0.95; // Tane tane ve sindirerek anlatım

    try {
      await this.audioElement.play();
    } catch {
      // Mobil cihaz kilitliyse kullanıcı dokunuşuyla başlatılması gerekir
      if (typeof document !== 'undefined') {
        document.addEventListener('click', () => this.audioElement?.play(), { once: true });
      }
    }
  }

  public play() {
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
  }

  public stop() {
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
