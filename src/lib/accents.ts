// Çoklu aksan + cinsiyet desteği.
import { clientAudio } from "./tts/audio-client";
// ÖNCE garantili ses: Microsoft Edge neural TTS (sunucu /api/tts üzerinden)
//   → her aksan için hem kadın hem erkek GERÇEK ve FARKLI 10 ses.
// YEDEK: cihazın kendi Web Speech sesleri (çevrimdışı). Cihazda tam o
//   aksan/cinsiyet sesi yoksa en yakın sese düşer ve kullanıcıya bildirilir.
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

const GENDER_WORDS: Record<Gender, string[]> = {
  female: [
    "female", "woman", "girl", "samantha", "zira", "aria", "jenny",
    "allison", "michelle", "ava", "emma", "olivia", "victoria", "natasha",
    "karen", "catherine", "hayley", "veena", "heera", "neerja", "sonia",
    "libby", "hazel", "susan", "serena", "kate", "fiona", "molly", "tessa",
    "clara",
  ],
  male: [
    "male", "man", "boy", "daniel", "alex", "fred", "david", "mark",
    "guy", "ryan", "george", "james", "thomas", "rishi", "ravi", "prabhat",
    "william", "mitchell", "oliver", "harry", "eric", "lee", "liam",
  ],
};

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

// ---------- Cihaz (Web Speech) sesleri — yedek katman ----------
let voicesCache: SpeechSynthesisVoice[] = [];

function loadVoices() {
  try {
    const v = window.speechSynthesis?.getVoices?.();
    if (v && v.length > 0) voicesCache = v;
  } catch {
    /* boş */
  }
}

if (typeof window !== "undefined") {
  loadVoices();
  try {
    window.speechSynthesis?.addEventListener?.("voiceschanged", loadVoices);
  } catch {
    /* boş */
  }
}

const norm = (l: string) => l.toLowerCase().replace(/_/g, "-");

function langMatches(voiceLang: string, a: Accent): boolean {
  const n = norm(voiceLang);
  return a.langPrefixes.some((p) => n.startsWith(p));
}

function nameMatches(name: string, words: string[]): boolean {
  const n = name.toLowerCase();
  return words.some((w) => n.includes(w));
}

function findLocalVoice(a: Accent, gender: Gender): SpeechSynthesisVoice | undefined {
  if (voicesCache.length === 0) loadVoices();
  if (voicesCache.length === 0) return undefined;
  const en = voicesCache.filter((x) => norm(x.lang).startsWith("en"));
  const pool = en.length > 0 ? en : voicesCache;

  const gWords = GENDER_WORDS[gender];
  const accentGenderNames = a.names[gender];

  let v = pool.find(
    (x) => langMatches(x.lang, a) && nameMatches(x.name, [...accentGenderNames, ...gWords])
  );
  if (!v) v = pool.find((x) => nameMatches(x.name, accentGenderNames));
  if (!v) v = pool.find((x) => langMatches(x.lang, a));
  if (!v) v = pool.find((x) => nameMatches(x.name, gWords));
  if (!v) v = pool.find((x) => norm(x.lang).startsWith("en"));
  if (!v) v = pool[0];
  return v;
}

// ---------- Oynatma katmanı ----------
let currentAudio: HTMLAudioElement | null = null;

export function stopSpeaking() {
  clientAudio.stopAll();
  try {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  } catch {
    /* boş */
  }
}

let activeSpeechUtterance: SpeechSynthesisUtterance | null = null;

function speakLocal(text: string, a: Accent, gender: Gender, onInfo?: (m: string) => void) {
  const genderLabel = gender === "female" ? "Kadın" : "Erkek";
  if (!("speechSynthesis" in window)) {
    const info = "Tarayıcın sesli okumayı desteklemiyor kanka. 🎧 linkinden dinleyebilirsin.";
    onInfo?.(info);
    return;
  }
  const voice = findLocalVoice(a, gender);
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = a.lang;
  u.rate = 1.0; // Doğal konuşma hızı
  u.pitch = 1.0; // SAFETY: Asla robotikleştirici pitch modifikasyonu yapma

  activeSpeechUtterance = u;
  u.onend = () => {
    activeSpeechUtterance = null;
  };
  u.onerror = () => {
    activeSpeechUtterance = null;
  };

  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    activeSpeechUtterance = null;
    onInfo?.("Ses çalınamadı kanka.");
    return;
  }
  const exactMatch = !!voice && langMatches(voice.lang, a) && nameMatches(voice.name, GENDER_WORDS[gender]);
  const voiceName = voice ? voice.name : `varsayılan (${a.lang})`;
  onInfo?.(
    exactMatch
      ? `Geçici Tarayıcı Sesi: ${voiceName} (${a.label} · ${genderLabel})`
      : `Cihazında ${a.label} ${genderLabel.toLowerCase()} sesi yok; en yakın ses: ${voiceName}. Gerçek aksan için 🎧 linki.`
  );
}

export interface SpeakResult {
  ok: boolean;
  info: string;
  exactMatch: boolean;
  voiceName: string;
}

/**
 * (aksan, cinsiyet) için konuşmayı başlat.
 * Önce sunucudaki garantili Edge neural sesi dener (her aksanda kadın+erkek),
 * başarısız olursa (çevrimdışı/önizleme kısıtı) cihaz seslerine düşer.
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
      onError: () => {
        speakLocal(text, a, gender, onInfo);
      },
    })
    .catch(() => {
      speakLocal(text, a, gender, onInfo);
    });

  return { ok: true, info: `Doğal Neural Ses: ${voice} (${a.label} · ${genderLabel})`, exactMatch: true, voiceName: voice };
}

export function youglishUrl(word: string, id: AccentId): string {
  const a = ACCENTS.find((x) => x.id === id) || ACCENTS[0];
  return `https://youglish.com/pronounce/${encodeURIComponent(word)}/english/${a.youglish}`;
}

export function getStoredAccent(): AccentId {
  try {
    const s = window.localStorage.getItem("yds-accent") as AccentId | null;
    if (s && ACCENTS.some((a) => a.id === s)) return s;
  } catch {
    /* boş */
  }
  return "us";
}

export function setStoredAccent(id: AccentId) {
  try {
    window.localStorage.setItem("yds-accent", id);
  } catch {
    /* boş */
  }
}

export function getStoredGender(): Gender {
  try {
    const s = window.localStorage.getItem("yds-accent-gender") as Gender | null;
    if (s === "female" || s === "male") return s;
  } catch {
    /* boş */
  }
  return "female";
}

export function setStoredGender(g: Gender) {
  try {
    window.localStorage.setItem("yds-accent-gender", g);
  } catch {
    /* boş */
  }
}
