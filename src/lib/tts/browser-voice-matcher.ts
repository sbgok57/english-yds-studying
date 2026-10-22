import { VoiceGender } from "./voice-registry";

export interface BrowserVoiceCandidate {
  name: string;
  lang: string;
}

const GENDER_NAME_PATTERNS: Record<string, Record<VoiceGender, RegExp>> = {
  "en-gb": {
    female: /\bfemale\b|sonia|hazel|serena|kate|martha|google uk english female/i,
    male: /\bmale\b|ryan|george|oliver|daniel|google uk english male/i,
  },
  "en-us": {
    female: /\bfemale\b|jenny|aria|michelle|samantha|zira|google us english female/i,
    male: /\bmale\b|guy|davis|tony|alex|fred|mark|google us english male/i,
  },
  "en-ca": {
    female: /\bfemale\b|clara|heather|google canadian english female/i,
    male: /\bmale\b|liam|chandler|google canadian english male/i,
  },
  "en-au": {
    female: /\bfemale\b|natasha|karen|lee|google australian english female/i,
    male: /\bmale\b|william|jack|google australian english male/i,
  },
  "en-nz": {
    female: /\bfemale\b|molly|jane|google new zealand english female/i,
    male: /\bmale\b|mitchell|blake|google new zealand english male/i,
  },
  "en-in": {
    female: /\bfemale\b|neerja|aanya|google indian english female/i,
    male: /\bmale\b|prabhat|aarav|google indian english male/i,
  },
  "tr-tr": {
    female: /\bfemale\b|emel|yelda|filiz|seda/i,
    male: /\bmale\b|ahmet|cem|tolga|kerem|mert/i,
  },
};

const SCOTTISH_NAME_PATTERNS: Record<VoiceGender, RegExp> = {
  female: /maisie|fiona|alba|scottish female/i,
  male: /thomas|angus|hamish|scottish male/i,
};

function normalizeLocale(locale: string): string {
  return locale.toLowerCase().replace(/_/g, "-");
}

/**
 * Select only a browser voice whose locale and name both support the requested
 * accent and speaker gender. Locale-only and pitch-shift fallbacks are unsafe:
 * browsers do not expose a standard gender field for SpeechSynthesisVoice.
 */
export function chooseExactBrowserVoice<T extends BrowserVoiceCandidate>(
  voices: readonly T[],
  locale: string,
  gender: VoiceGender,
): T | undefined {
  const isScottish = locale === "en-GB-scotland";
  const expectedLocale = normalizeLocale(isScottish ? "en-GB" : locale);
  const genderPattern = isScottish
    ? SCOTTISH_NAME_PATTERNS[gender]
    : GENDER_NAME_PATTERNS[expectedLocale]?.[gender];

  if (!genderPattern) return undefined;

  return voices.find((voice) => {
    if (normalizeLocale(voice.lang) !== expectedLocale) return false;
    const name = voice.name.trim();
    return genderPattern.test(name);
  });
}
