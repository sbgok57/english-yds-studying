// Positive Voice Feedback Service using Web Speech API

interface SpeechSettings {
  enabled: boolean;
  volume: number; // 0.0 to 1.0
  rate: number;   // 0.8 to 1.2
  pitch: number;
}

const STORAGE_KEY = 'yds_speech_settings';

const DEFAULT_SETTINGS: SpeechSettings = {
  enabled: true,
  volume: 0.85,
  rate: 0.95,
  pitch: 1.0
};

const CORRECT_PRAISES = [
  "Excellent!",
  "Great job!",
  "That's correct!",
  "You remembered it!",
  "Brilliant!",
  "Nice work!",
  "Perfect!",
  "Outstanding recall!",
  "Well done!"
];

const ENCOURAGING_FEEDBACK = [
  "Not quite. Let's try again.",
  "Good effort!",
  "Almost there!",
  "Keep going!",
  "That's okay. Learning takes practice.",
  "Let's look at the clue.",
  "You can get this one.",
  "Take your time; analyze the context."
];

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private settings: SpeechSettings;
  private lastSpokenText: string = '';

  constructor() {
    this.settings = this.loadSettings();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  private loadSettings(): SpeechSettings {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore localStorage errors
    }
    return { ...DEFAULT_SETTINGS };
  }

  public saveSettings(newSettings: Partial<SpeechSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch {
      // Ignore storage write errors
    }
  }

  public getSettings(): SpeechSettings {
    return { ...this.settings };
  }

  public isAvailable(): boolean {
    return this.synth !== null;
  }

  public stopSpeaking(): void {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn('Speech cancellation error:', e);
      }
    }
  }

  public speak(text: string, options?: { lang?: string; rate?: number; volume?: number; onEnd?: () => void }): void {
    if (!this.synth || !this.settings.enabled) return;

    // Prevent overlapping speech
    this.stopSpeaking();
    this.lastSpokenText = text;

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = options?.lang || 'en-US';
      utterance.volume = options?.volume ?? this.settings.volume;
      utterance.rate = options?.rate ?? this.settings.rate;
      utterance.pitch = this.settings.pitch;

      if (options?.onEnd) {
        utterance.onend = options.onEnd;
      }

      // Select natural English voice if available
      const voices = this.synth.getVoices();
      const enVoice = voices.find(v => (v.lang.includes('en-US') || v.lang.includes('en-GB')) && !v.name.includes('Bad'));
      if (enVoice) {
        utterance.voice = enVoice;
      }

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Web Speech API execution error:', err);
    }
  }

  public replayLast(): void {
    if (this.lastSpokenText) {
      this.speak(this.lastSpokenText);
    }
  }

  public speakCorrectAnswer(itemWord?: string): void {
    const praise = CORRECT_PRAISES[Math.floor(Math.random() * CORRECT_PRAISES.length)];
    const textToSpeak = itemWord ? `${praise} ${itemWord}.` : praise;
    this.speak(textToSpeak, { rate: 1.0 });
  }

  public speakIncorrectAnswer(hint?: string): void {
    const encouragement = ENCOURAGING_FEEDBACK[Math.floor(Math.random() * ENCOURAGING_FEEDBACK.length)];
    const textToSpeak = hint ? `${encouragement} ${hint}` : encouragement;
    this.speak(textToSpeak, { rate: 0.9 });
  }

  public speakMotivation(message?: string): void {
    const defaultMsg = "Step into this session with confidence and focus.";
    this.speak(message || defaultMsg, { rate: 0.95 });
  }
}

export const speechService = new SpeechService();
