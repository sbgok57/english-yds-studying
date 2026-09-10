/**
 * Phonics Galaxy & Jungle Adventure - Pure Phonics & Procedural Sound Engine
 * Synthesizes pure phonemes (e.g. /s/, /æ/, /t/) NEVER letter names ('ay', 'bee', 'cee'),
 * plus game SFX (bubble pops, chimes, machinery, fanfares) and voiceover assistant.
 */

export class PhonicsAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.voiceEnabled = true;
    this.speechSynth = window.speechSynthesis || null;
    this.selectedVoice = null;
    this.initVoices();
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if (!this.speechSynth) return;
    const loadVoices = () => {
      const voices = this.speechSynth.getVoices();
      // Look for a clear, friendly English voice (UK or US, preferably female/natural for early childhood)
      this.selectedVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Victoria') || v.name.includes('Zira') || v.name.includes('Google US English') || v.name.includes('Natural'))) 
        || voices.find(v => v.lang.startsWith('en')) 
        || voices[0];
    };
    loadVoices();
    if (this.speechSynth.onvoiceschanged !== undefined) {
      this.speechSynth.onvoiceschanged = loadVoices;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.speechSynth) {
      this.speechSynth.cancel();
    }
    return this.isMuted;
  }

  // ==========================================
  // PURE PHONETIC SOUND SYNTHESIS (/æ/, /b/, /k/, /s/, etc.)
  // Never pronounces alphabet names!
  // ==========================================

  playLetterPhoneme(letterChar) {
    this.initContext();
    if (this.isMuted || !this.ctx) return;

    const char = letterChar.toLowerCase();

    // Procedural phonetic acoustic generator
    switch (char) {
      case 'a': // /æ/ short 'a' (apple)
        this.synthVowel(800, 1650, 0.28, 145);
        break;
      case 'b': // /b/ voiced stop
        this.synthVoicedStop(120, 300, 0.15);
        break;
      case 'c':
      case 'k': // /k/ unvoiced velar stop
        this.synthUnvoicedBurst(1800, 0.12, 0.8);
        break;
      case 'd': // /d/ voiced alveolar stop
        this.synthVoicedStop(160, 450, 0.16);
        break;
      case 'e': // /e/ short 'e' (egg)
        this.synthVowel(550, 1850, 0.26, 150);
        break;
      case 'f': // /f/ unvoiced fricative
        this.synthFricative(2600, 0.32, 0.4);
        break;
      case 'g': // /g/ voiced velar stop
        this.synthVoicedStop(110, 220, 0.16);
        break;
      case 'h': // /h/ breathy aspiration
        this.synthFricative(1200, 0.22, 0.25);
        break;
      case 'i': // /ɪ/ short 'i' (igloo)
        this.synthVowel(400, 2000, 0.24, 160);
        break;
      case 'j': // /dʒ/
        this.synthUnvoicedBurst(1400, 0.18, 0.7);
        break;
      case 'l': // /l/ lateral liquid
        this.synthVowel(380, 1100, 0.35, 140);
        break;
      case 'm': // /m/ bilabial nasal murmur
        this.synthNasal(220, 1000, 0.38, 130);
        break;
      case 'n': // /n/ alveolar nasal murmur
        this.synthNasal(280, 1400, 0.35, 145);
        break;
      case 'o': // /ɒ/ short 'o' (octopus / orange)
        this.synthVowel(580, 920, 0.28, 135);
        break;
      case 'p': // /p/ unvoiced bilabial stop puff
        this.synthUnvoicedBurst(700, 0.14, 0.9);
        break;
      case 'q':
      case 'kw':
        this.synthUnvoicedBurst(1500, 0.15, 0.7);
        break;
      case 'r': // /r/ retroflex liquid
        this.synthVowel(320, 1250, 0.35, 130);
        break;
      case 's': // /s/ sharp sibilant hiss
        this.synthSibilant(5200, 0.32, 0.85);
        break;
      case 't': // /t/ crisp unvoiced alveolar stop
        this.synthUnvoicedBurst(3800, 0.12, 1.0);
        break;
      case 'u': // /ʌ/ short 'u' (umbrella / up)
        this.synthVowel(650, 1200, 0.28, 140);
        break;
      case 'v': // /v/ voiced labiodental
        this.synthVoicedFricative(2200, 0.3, 140);
        break;
      case 'w': // /w/
        this.synthVowel(320, 750, 0.32, 135);
        break;
      case 'x': // /ks/
        this.synthUnvoicedBurst(2200, 0.08, 0.7);
        setTimeout(() => this.synthSibilant(5000, 0.2, 0.7), 60);
        break;
      case 'y': // /j/
        this.synthVowel(300, 2100, 0.3, 150);
        break;
      case 'z': // /z/ voiced sibilant
        this.synthVoicedFricative(4800, 0.3, 150);
        break;
      default:
        this.synthVowel(500, 1500, 0.25, 140);
    }
  }

  // Synthesize acoustic vowel formants F1 and F2
  synthVowel(f1, f2, duration = 0.3, fundamental = 140) {
    const t = this.ctx.currentTime;

    // Glottal pulse oscillator (sawtooth with rich harmonics)
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(fundamental, t);
    osc.frequency.exponentialRampToValueAtTime(fundamental * 0.92, t + duration);

    // Formant 1 bandpass filter
    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(f1, t);
    filter1.Q.setValueAtTime(7.5, t);

    // Formant 2 bandpass filter
    const filter2 = this.ctx.createBiquadFilter();
    filter2.type = 'bandpass';
    filter2.frequency.setValueAtTime(f2, t);
    filter2.Q.setValueAtTime(8.5, t);

    // Gain Envelopes
    const gain1 = this.ctx.createGain();
    const gain2 = this.ctx.createGain();
    const masterGain = this.ctx.createGain();

    gain1.gain.setValueAtTime(0.7, t);
    gain2.gain.setValueAtTime(0.5, t);

    masterGain.gain.setValueAtTime(0.001, t);
    masterGain.gain.linearRampToValueAtTime(0.4, t + 0.04);
    masterGain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    // Connect graph
    osc.connect(filter1);
    osc.connect(filter2);
    filter1.connect(gain1);
    filter2.connect(gain2);
    gain1.connect(masterGain);
    gain2.connect(masterGain);
    masterGain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + duration);
  }

  // Synthesize sharp sibilant hiss (/s/, /z/)
  synthSibilant(freq = 5200, duration = 0.3, intensity = 0.8) {
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(freq, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.35 * intensity, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + duration);
  }

  // Synthesize unvoiced plosive burst (/t/, /k/, /p/)
  synthUnvoicedBurst(freq = 3200, duration = 0.12, intensity = 0.9) {
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.setValueAtTime(4.0, t);

    // Add tiny pop pulse
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 0.3, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.05);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.3, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.45 * intensity, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    noise.start(t);
    osc.start(t);
    noise.stop(t + duration);
    osc.stop(t + 0.06);
  }

  // Voiced stop (/b/, /d/, /g/)
  synthVoicedStop(freqStart, f2, duration = 0.15) {
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + duration);

    // Burst pop
    this.synthUnvoicedBurst(f2, 0.07, 0.4);
  }

  // Fricative (/f/, /h/)
  synthFricative(freq, duration = 0.3, intensity = 0.4) {
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.setValueAtTime(2.0, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.3 * intensity, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + duration);
  }

  // Voiced Fricative (/v/, /z/)
  synthVoicedFricative(freq, duration = 0.3, fundamental = 140) {
    this.synthSibilant(freq, duration, 0.5);
    this.synthVowel(250, 800, duration, fundamental);
  }

  // Nasal murmur (/m/, /n/)
  synthNasal(f1, f2, duration = 0.35, fundamental = 135) {
    this.synthVowel(f1, f2, duration, fundamental);
  }

  // ==========================================
  // VOICE INSTRUCTIONS & PHONETIC ASSISTANT
  // ==========================================

  speak(text, rate = 0.95, pitch = 1.1) {
    if (this.isMuted || !this.speechSynth) return;
    try {
      this.speechSynth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 0.95;
      this.speechSynth.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis error:', e);
    }
  }

  speakPhonicsReinforcement(letter, word) {
    // Play pure acoustic phoneme, then speak friendly reinforcement
    this.playLetterPhoneme(letter);
    setTimeout(() => {
      this.speak(`${letter.toLowerCase()} is for ${word}! Awesome!`);
    }, 450);
  }

  speakBlendedWord(word) {
    this.playCelebration();
    setTimeout(() => {
      this.speak(word.toUpperCase() + "! You blended it!", 0.9, 1.2);
    }, 300);
  }

  speakSightWordPrompt(targetWord) {
    this.speak(`Find the sight word: ${targetWord.toUpperCase()}!`, 0.9, 1.15);
  }

  // ==========================================
  // PROCEDURAL SOUND EFFECTS (SFX)
  // ==========================================

  playBubblePop() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(1100, t + 0.12);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.12);
  }

  playSparkle() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const pitches = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
    pitches.forEach((freq, idx) => {
      const t = this.ctx.currentTime + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    });
  }

  playStarCollect() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, i) => {
      const t = this.ctx.currentTime + i * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.35);
    });
  }

  playCelebration() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    // Cheerful Brass Fanfare arpeggio (C - G - C - E - G - C)
    const melody = [
      { f: 523.25, d: 0.12, t: 0.0 },
      { f: 659.25, d: 0.12, t: 0.12 },
      { f: 783.99, d: 0.14, t: 0.24 },
      { f: 1046.5, d: 0.4, t: 0.38 }
    ];

    melody.forEach(note => {
      const t = this.ctx.currentTime + note.t;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + note.d);
    });
  }

  playConveyorTick() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.04);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.04);
  }

  playBlenderZap() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.linearRampToValueAtTime(880, t + 0.4);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.7);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.7);
  }

  playAlienBoing() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(650, t + 0.18);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.35);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.35);
  }

  playAlienGiggle() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const chirps = [600, 800, 750, 950, 1100];
    chirps.forEach((freq, idx) => {
      const t = this.ctx.currentTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.06);
    });
  }

  playJump() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.15);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  playGentleBounce() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.2);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.2);
  }

  playClick() {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(680, t);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.05);
  }
}

export const soundEngine = new PhonicsAudioEngine();
