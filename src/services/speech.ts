export type VoiceGender = 'female' | 'male';

export interface SpeechOptions {
  lang?: 'en-US' | 'en-GB' | 'tr-TR';
  rate?: number; // 0.1 to 10 (normal is 1.0, slow is 0.7)
  pitch?: number; // 0 to 2
  volume?: number; // 0 to 1
  gender?: VoiceGender;
}

const FEMALE_VOICE_NAMES = [
  'samantha',
  'victoria',
  'karen',
  'zira',
  'jenny',
  'moira',
  'fiona',
  'tessa',
  'serena',
  'allison',
  'susan',
  'ava',
];

const MALE_VOICE_NAMES = [
  'alex',
  'daniel',
  'fred',
  'david',
  'guy',
  'oliver',
  'george',
  'rishi',
  'aaron',
  'tom',
  'james',
];

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private isMuted = false;
  private masterVolume = 1.0;
  private defaultSpeed: 'normal' | 'slow' = 'normal';
  private currentGender: VoiceGender = 'female';

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (!this.synth) return;
    try {
      this.voices = this.synth.getVoices();
    } catch {
      this.voices = [];
    }
  }

  public isAvailable(): boolean {
    return !!this.synth;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (muted) {
      this.stopSpeaking();
    }
  }

  public setVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  public setDefaultSpeed(speed: 'normal' | 'slow'): void {
    this.defaultSpeed = speed;
  }

  public setVoiceGender(gender: VoiceGender): void {
    this.currentGender = gender;
  }

  public getVoiceGender(): VoiceGender {
    return this.currentGender;
  }

  public stopSpeaking(): void {
    if (!this.synth) return;
    try {
      this.synth.cancel();
    } catch (err) {
      console.warn('Speech cancellation error:', err);
    }
  }

  private pickBestVoice(targetLang: string, gender: VoiceGender): SpeechSynthesisVoice | undefined {
    const langPrefix = targetLang.split('-')[0].toLowerCase();
    const langVoices = this.voices.filter(
      (v) => v.lang.toLowerCase().startsWith(langPrefix) || v.lang.toLowerCase().includes(langPrefix)
    );

    if (langVoices.length === 0) return undefined;

    const targetList = gender === 'female' ? FEMALE_VOICE_NAMES : MALE_VOICE_NAMES;

    // 1. Try finding a voice whose name matches preferred gender list
    const matched = langVoices.find((v) =>
      targetList.some((name) => v.name.toLowerCase().includes(name))
    );
    if (matched) return matched;

    // 2. Return the first matching language voice as fallback
    return langVoices[0];
  }

  public speak(text: string, options: SpeechOptions = {}): void {
    if (!this.synth || this.isMuted) return;

    // Sanitize and limit length to prevent reading large blocks of text
    const cleanText = text.replace(/<[^>]*>?/gm, '').slice(0, 300).trim();
    if (!cleanText) return;

    // Always cancel previous speech to prevent overlapping voices
    this.stopSpeaking();

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      const targetLang = options.lang || 'en-US';
      const effectiveGender = options.gender || this.currentGender;
      utterance.lang = targetLang;

      // Determine rate
      const baseRate = this.defaultSpeed === 'slow' ? 0.7 : 1.0;
      utterance.rate = options.rate ?? baseRate;

      // Apply acoustic pitch shaping based on gender
      const defaultPitch = effectiveGender === 'female' ? 1.15 : 0.85;
      utterance.pitch = options.pitch ?? defaultPitch;
      utterance.volume = (options.volume ?? 1.0) * this.masterVolume;

      const voice = this.pickBestVoice(targetLang, effectiveGender);
      if (voice) {
        utterance.voice = voice;
      }

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis utterance error:', err);
    }
  }

  public speakWoman(text: string): void {
    this.speak(text, { gender: 'female', lang: 'en-US' });
  }

  public speakMan(text: string): void {
    this.speak(text, { gender: 'male', lang: 'en-US' });
  }

  public speakCorrectAnswer(text = 'Excellent! That is correct.'): void {
    this.speak(text, { lang: 'en-US', rate: 1.0 });
  }

  public speakIncorrectAnswer(text = 'Not quite, keep practicing.'): void {
    this.speak(text, { lang: 'en-US', rate: 0.9 });
  }

  public speakMotivation(text: string): void {
    this.speak(text, { lang: 'en-US', rate: 0.95 });
  }

  public getUnavailableMessage(): { en: string; tr: string } {
    return {
      en: 'Audio is unavailable in this browser.',
      tr: 'Bu tarayıcıda ses özelliği kullanılamıyor.',
    };
  }
}

export const speechService = new SpeechService();
