export const ACCENTS = [
  { id: "en-GB", label: "British English", locale: "en-GB" },
  { id: "en-US", label: "American English", locale: "en-US" },
  { id: "en-CA", label: "Canadian English", locale: "en-CA" },
  { id: "en-AU", label: "Australian English", locale: "en-AU" },
  { id: "en-NZ", label: "New Zealand English", locale: "en-NZ" },
  {
    id: "en-GB-scotland",
    label: "Scottish English",
    locale: "en-GB",
  },
  { id: "en-IN", label: "Indian English", locale: "en-IN" },
] as const;

export type AccentId = (typeof ACCENTS)[number]["id"];

export type SpeechResult = {
  ok: boolean;
  message: string;
  actualVoice?: string;
  actualLocale?: string;
};

function normalizeLocale(locale: string): string {
  return locale.toLowerCase().replaceAll("_", "-");
}

export function getAvailableEnglishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return [];
  }

  return window.speechSynthesis
    .getVoices()
    .filter((voice) =>
      normalizeLocale(voice.lang).startsWith("en-"),
    );
}

export function chooseVoice(
  accentOrVoices: AccentId | SpeechSynthesisVoice[],
  voicesOrAccent?: SpeechSynthesisVoice[] | AccentId,
): SpeechSynthesisVoice | undefined {
  const accent: AccentId = Array.isArray(accentOrVoices)
    ? (voicesOrAccent as AccentId)
    : accentOrVoices;
  const voices: SpeechSynthesisVoice[] = Array.isArray(accentOrVoices)
    ? accentOrVoices
    : Array.isArray(voicesOrAccent)
      ? voicesOrAccent
      : getAvailableEnglishVoices();

  if (accent === "en-GB-scotland") {
    const exactScottish = voices.find((voice) =>
      /scotland|scottish|fiona|alba/i.test(
        `${voice.name} ${voice.lang}`,
      ),
    );

    // Never claim a generic British voice is a verified Scottish accent.
    return exactScottish;
  }

  const exact = voices.find(
    (voice) =>
      normalizeLocale(voice.lang) ===
      normalizeLocale(accent),
  );

  if (exact) return exact;

  // Never substitute another English region when the requested accent is absent.
  return undefined;
}

export function speakWithBrowser(
  text: string,
  accent: AccentId,
  rate = 0.9,
): Promise<SpeechResult> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" ||
        !("speechSynthesis" in window)) {
      resolve({
        ok: false,
        message: "This browser does not support speech synthesis.",
      });
      return;
    }

    const cleanText = text.trim();

    if (!cleanText) {
      resolve({
        ok: false,
        message: "Enter a word or sentence first.",
      });
      return;
    }

    const voice = chooseVoice(accent);

    if (!voice) {
      resolve({
        ok: false,
        message:
          `No verified compatible browser voice was found for ${accent}. ` +
          "Try a configured cloud voice provider.",
      });
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = Math.min(1.5, Math.max(0.5, rate));

    utterance.onend = () => {
      resolve({
        ok: true,
        message: "Speech playback completed.",
        actualVoice: voice.name,
        actualLocale: voice.lang,
      });
    };

    utterance.onerror = (event) => {
      resolve({
        ok: false,
        message: `Speech playback failed: ${event.error}`,
        actualVoice: voice.name,
        actualLocale: voice.lang,
      });
    };

    window.speechSynthesis.speak(utterance);
  });
}

export function stopBrowserSpeech(): void {
  if (
    typeof window !== "undefined" &&
    "speechSynthesis" in window
  ) {
    window.speechSynthesis.cancel();
  }
}

export function watchBrowserVoices(
  callback: (voices: SpeechSynthesisVoice[]) => void,
): () => void {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    callback([]);
    return () => {};
  }

  const synthesis = window.speechSynthesis;

  const update = () => callback(getAvailableEnglishVoices());

  if (typeof synthesis.addEventListener === "function") {
    synthesis.addEventListener("voiceschanged", update);
  }
  update();

  return () => {
    if (typeof synthesis.removeEventListener === "function") {
      synthesis.removeEventListener("voiceschanged", update);
    }
  };
}
