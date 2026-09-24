// Çoklu aksan + cinsiyet desteği (Doğal Edge Neural TTS).
import { clientAudio } from "./tts/audio-client";

export type AccentId = "uk" | "us" | "ca" | "au" | "nz" | "in";
export type Gender = "female" | "male";

export interface Accent {
  id: AccentId;
  label: string;
  flag: string;
  lang: string;
  langPrefixes: string[];
  youglish: string;
  keywords: string[];
  /** Cihaz sesleri için cinsiyete göre güçlü ses-adı ipuçları. */
  names: Record<Gender, string[]>;
  /** Garantili Microsoft Edge neural sesleri (kadın/erkek). */
  edgeVoice: Record<Gender, string>;
}

export const ACCENTS: Accent[] = [
  {
    id: "uk",
    label: "İngiliz",
    flag: "🇬🇧",
    lang: "en-GB",
    langPrefixes: ["en-gb", "en_gb"],
    youglish: "uk",
    keywords: ["british", "google uk english", "daniel", "sonia", "libby", "hazel", "susan", "serena", "kate", "ryan", "george", "oliver"],
    names: {
      female: ["uk english female", "sonia", "hazel", "susan", "serena", "kate", "victoria", "british female"],
      male: ["uk english male", "daniel", "ryan", "george", "oliver", "british male"],
    },
    edgeVoice: { female: "en-GB-SoniaNeural", male: "en-GB-RyanNeural" },
  },
  {
    id: "us",
    label: "Amerikan",
    flag: "🇺🇸",
    lang: "en-US",
    langPrefixes: ["en-us", "en_us"],
    youglish: "us",
    keywords: ["samantha", "google us english", "alex", "zira", "aria", "jenny", "david", "mark"],
    names: {
      female: ["us english female", "samantha", "zira", "aria", "jenny", "allison", "michelle", "ava"],
      male: ["us english male", "alex", "david", "mark", "guy", "fred"],
    },
    edgeVoice: { female: "en-US-JennyNeural", male: "en-US-GuyNeural" },
  },
  {
    id: "ca",
    label: "Kanada",
    flag: "🇨🇦",
    lang: "en-CA",
    langPrefixes: ["en-ca", "en_ca"],
    youglish: "us",
    keywords: ["canadian", "google ca", "clara", "liam"],
    names: {
      female: ["canadian female", "clara", "linda", "heather"],
      male: ["canadian male", "liam"],
    },
    edgeVoice: { female: "en-CA-ClaraNeural", male: "en-CA-LiamNeural" },
  },
  {
    id: "au",
    label: "Avustralya",
    flag: "🇦🇺",
    lang: "en-AU",
    langPrefixes: ["en-au", "en_au"],
    youglish: "au",
    keywords: ["australian", "google au", "karen", "natasha", "catherine", "hayley", "james", "william"],
    names: {
      female: ["australian female", "natasha", "karen", "catherine", "hayley"],
      male: ["australian male", "james", "william"],
    },
    edgeVoice: { female: "en-AU-NatashaNeural", male: "en-AU-WilliamMultilingualNeural" },
  },
  {
    id: "nz",
    label: "Yeni Zelanda",
    flag: "🇳🇿",
    lang: "en-NZ",
    langPrefixes: ["en-nz", "en_nz"],
    youglish: "nz",
    keywords: ["new zealand", "molly", "mitchell"],
    names: {
      female: ["new zealand female", "molly"],
      male: ["new zealand male", "mitchell"],
    },
    edgeVoice: { female: "en-NZ-MollyNeural", male: "en-NZ-MitchellNeural" },
  },
  {
    id: "in",
    label: "Hint",
    flag: "🇮🇳",
    lang: "en-IN",
    langPrefixes: ["en-in", "en_in"],
    youglish: "in",
    keywords: ["indian", "hindi", "google in", "rishi", "veena", "heera", "neerja", "ravi", "prabhat"],
    names: {
      female: ["indian female", "veena", "heera", "neerja", "hindi female"],
      male: ["indian male", "rishi", "ravi", "prabhat", "hindi male"],
    },
    edgeVoice: { female: "en-IN-NeerjaNeural", male: "en-IN-PrabhatNeural" },
  },
];

// ---------- Oynatma katmanı ----------
export function stopSpeaking() {
  clientAudio.stopAll();
}

export interface SpeakResult {
  ok: boolean;
  info: string;
  exactMatch: boolean;
  voiceName: string;
}

/**
 * (aksan, cinsiyet) için doğal neural stüdyo kalitesinde konuşmayı başlatır.
 * 12 farklı Edge Neural sesi doğrudan sunucu üzerinden çalar.
 */
export function speakWithAccent(
  text: string,
  id: AccentId = getStoredAccent(),
  genderOrOnInfo?: Gender | ((msg: string) => void),
  onInfoParam?: (msg: string) => void
): SpeakResult {
  let gender: Gender = getStoredGender();
  let onInfo: ((msg: string) => void) | undefined = onInfoParam;

  if (typeof genderOrOnInfo === "function") {
    onInfo = genderOrOnInfo;
  } else if (genderOrOnInfo === "female" || genderOrOnInfo === "male") {
    gender = genderOrOnInfo;
  }

  const a = ACCENTS.find((x) => x.id === id) || ACCENTS[0];
  const genderLabel = gender === "female" ? "Kadın" : "Erkek";
  const voice = a.edgeVoice[gender];

  if (typeof window === "undefined") {
    return { ok: false, info: "Sunucu tarafında ses çalınmaz.", exactMatch: false, voiceName: "" };
  }

  stopSpeaking();

  clientAudio
    .play(text, {
      voiceId: voice,
      contentType: "word",
      onInfo: (info) => onInfo?.(info),
      onError: (err) => {
        onInfo?.(`Ses yüklenemedi: ${err?.message || "Ağ hatası"}`);
      },
    })
    .catch((err) => {
      onInfo?.(`Ses çalınamadı: ${err?.message || "Bağlantı hatası"}`);
    });

  return { ok: true, info: `Doğal Neural Ses: ${voice} (${a.label} · ${genderLabel})`, exactMatch: true, voiceName: voice };
}

export function youglishUrl(word: string, id: AccentId): string {
  const a = ACCENTS.find((x) => x.id === id) || ACCENTS[0];
  return `https://youglish.com/pronounce/${encodeURIComponent(word)}/english/${a.youglish}`;
}

const ACCENT_LOCALE_MAP: Record<AccentId, string> = {
  uk: "en-GB",
  us: "en-US",
  ca: "en-CA",
  au: "en-AU",
  nz: "en-NZ",
  in: "en-IN",
};

export function getStoredAccent(): AccentId {
  try {
    const s = window.localStorage.getItem("yds-accent") as AccentId | null;
    if (s && ACCENTS.some((a) => a.id === s)) return s;

    const p = window.localStorage.getItem("yds-preferred-accent");
    if (p) {
      if (p.includes("GB") || p === "uk") return "uk";
      if (p.includes("US") || p === "us") return "us";
      if (p.includes("CA") || p === "ca") return "ca";
      if (p.includes("AU") || p === "au") return "au";
      if (p.includes("NZ") || p === "nz") return "nz";
      if (p.includes("IN") || p === "in") return "in";
    }
  } catch {
    /* boş */
  }
  return "us";
}

export function setStoredAccent(id: AccentId) {
  try {
    window.localStorage.setItem("yds-accent", id);
    const locale = ACCENT_LOCALE_MAP[id] || "en-US";
    window.localStorage.setItem("yds-preferred-accent", locale);
    const a = ACCENTS.find((x) => x.id === id) || ACCENTS[0];
    const g = getStoredGender();
    const voice = a.edgeVoice[g];
    if (voice) {
      window.localStorage.setItem("yds-preferred-voice-id", voice);
    }
    window.dispatchEvent(new CustomEvent("yds:voice-prefs-changed"));
  } catch {
    /* boş */
  }
}

export function getStoredGender(): Gender {
  try {
    const s = (window.localStorage.getItem("yds-accent-gender") ||
      window.localStorage.getItem("yds-preferred-gender")) as Gender | null;
    if (s === "female" || s === "male") return s;
  } catch {
    /* boş */
  }
  return "female";
}

export function setStoredGender(g: Gender) {
  try {
    window.localStorage.setItem("yds-accent-gender", g);
    window.localStorage.setItem("yds-preferred-gender", g);
    const id = getStoredAccent();
    const a = ACCENTS.find((x) => x.id === id) || ACCENTS[0];
    const voice = a.edgeVoice[g];
    if (voice) {
      window.localStorage.setItem("yds-preferred-voice-id", voice);
    }
    window.dispatchEvent(new CustomEvent("yds:voice-prefs-changed"));
  } catch {
    /* boş */
  }
}
