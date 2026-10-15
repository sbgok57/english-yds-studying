export type VoiceGender = "female" | "male" | "neutral";

export type SpeechVoiceProfile = {
  id: string;
  label: string;
  /** BCP-47 language tag: en-GB, en-US, tr-TR, etc. */
  language: string;
  /** Provider/browser voice URI when the host has a verified mapping. */
  voiceURI?: string;
  /** Display-only provider voice name; never guess identity from a voice's sound. */
  voiceName?: string;
  gender?: VoiceGender;
  accent?: string;
};

export type BrowserVoiceLike = {
  name: string;
  lang: string;
  voiceURI: string;
  default?: boolean;
  localService?: boolean;
};

export function baseLanguage(language: string): string {
  return language.trim().toLocaleLowerCase("en-US").split(/[-_]/)[0] ?? "";
}

export function browserVoicesForLanguage<T extends BrowserVoiceLike>(voices: readonly T[], language: string): T[] {
  const base = baseLanguage(language);
  return voices.filter((voice) => baseLanguage(voice.lang) === base);
}

export function nativeVoiceOptionId(voiceURI: string): string {
  return `native:${encodeURIComponent(voiceURI)}`;
}

export function nativeVoiceUriFromOption(id: string): string | null {
  if (!id.startsWith("native:")) return null;
  try {
    return decodeURIComponent(id.slice("native:".length));
  } catch {
    return null;
  }
}

export function formatVoiceProfileLabel(profile: SpeechVoiceProfile): string {
  const details = [
    profile.voiceName,
    profile.gender === "female" ? "kadın" : profile.gender === "male" ? "erkek" : profile.gender === "neutral" ? "nötr" : "",
    profile.accent,
    profile.language,
  ].filter((value): value is string => Boolean(value?.trim()));
  return `${profile.label}${details.length ? ` · ${details.join(" · ")}` : ""}`;
}

export function formatBrowserVoiceLabel(voice: BrowserVoiceLike): string {
  const service = voice.localService === false ? "çevrim içi cihaz sesi" : "cihaz sesi";
  return `${voice.name} · ${voice.lang || "dil belirtilmemiş"} · ${service}`;
}

/**
 * Select an exact configured voice when available, otherwise a same-language
 * device voice. If two language selectors accidentally point at one multilingual
 * device voice, prefer a different voice for the second utterance.
 */
export function chooseBrowserVoice<T extends BrowserVoiceLike>(
  voices: readonly T[],
  language: string,
  preferredVoiceURI?: string,
  excludedVoiceURI?: string,
): T | undefined {
  const sameLanguage = browserVoicesForLanguage(voices, language);
  const preferred = preferredVoiceURI ? sameLanguage.find((voice) => voice.voiceURI === preferredVoiceURI) : undefined;
  if (preferred && preferred.voiceURI !== excludedVoiceURI) return preferred;
  return sameLanguage.find((voice) => voice.voiceURI !== excludedVoiceURI && voice.default)
    ?? sameLanguage.find((voice) => voice.voiceURI !== excludedVoiceURI)
    ?? preferred
    ?? sameLanguage[0];
}

export function getProfileById(profiles: readonly SpeechVoiceProfile[], id: string): SpeechVoiceProfile | undefined {
  return profiles.find((profile) => profile.id === id);
}
