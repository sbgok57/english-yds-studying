// Çoklu aksan desteği — Web Speech API üzerinden 5 ayrı aksan.
// Cihazda o aksanın sesi yoksa en yakın İngilizce sese düşer ve
// "gerçek aksan" için Youglish linki sunulur (garantili ayrı telaffuz).
export type AccentId = "uk" | "us" | "au" | "nz" | "in";

export interface Accent {
  id: AccentId;
  label: string;
  flag: string;
  lang: string;
  youglish: string;
  keywords: string[];
}

export const ACCENTS: Accent[] = [
  { id: "uk", label: "İngiliz", flag: "🇬🇧", lang: "en-GB", youglish: "uk", keywords: ["en-gb", "en_gb", "british", "daniel", "google uk english", "libby", "sonia"] },
  { id: "us", label: "Amerikan", flag: "🇺🇸", lang: "en-US", youglish: "us", keywords: ["en-us", "en_us", "samantha", "google us english", "alex", "zira"] },
  { id: "au", label: "Avustralya", flag: "🇦🇺", lang: "en-AU", youglish: "au", keywords: ["en-au", "en_au", "australian", "google au", "karen"] },
  { id: "nz", label: "Yeni Zelanda", flag: "🇳🇿", lang: "en-NZ", youglish: "nz", keywords: ["en-nz", "en_nz", "new zealand"] },
  { id: "in", label: "Hint", flag: "🇮🇳", lang: "en-IN", youglish: "in", keywords: ["en-in", "en_in", "indian", "hindi", "google in", "rishi", "veena"] },
];

let voicesCache: SpeechSynthesisVoice[] = [];

function loadVoices() {
  try {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const v = window.speechSynthesis.getVoices?.();
      if (v && v.length > 0) voicesCache = v;
    }
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

/** Cihazdaki en uygun sesi bul; dönüş olarak kullanılan sesin adını verir. */
function findVoice(a: Accent): SpeechSynthesisVoice | undefined {
  if (voicesCache.length === 0) loadVoices();
  const langPrefix = a.lang.toLowerCase().slice(0, 5); // en-gb, en-us...
  const norm = (l: string) => l.toLowerCase().replace("_", "-");
  let v = voicesCache.find((x) => norm(x.lang).startsWith(langPrefix));
  if (!v) v = voicesCache.find((x) => a.keywords.some((k) => x.name.toLowerCase().includes(k)));
  if (!v) v = voicesCache.find((x) => norm(x.lang).startsWith("en"));
  return v;
}

export function speakWithAccent(
  text: string,
  id: AccentId,
  onInfo?: (msg: string) => void
): boolean {
  const a = ACCENTS.find((x) => x.id === id) || ACCENTS[1];
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onInfo?.("Tarayıcın sesli okumayı desteklemiyor kanka.");
    return false;
  }
  const voice = findVoice(a);
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = a.lang;
  u.rate = 0.85;
  u.pitch = 1;
  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    onInfo?.("Ses çalınamadı kanka.");
    return false;
  }
  const name = voice ? voice.name : `varsayılan (${a.lang})`;
  onInfo?.(`Ses: ${name}${voice ? "" : " — cihazda bu aksan yok, en yakın ses kullanıldı"}`);
  return true;
}

export function youglishUrl(word: string, id: AccentId): string {
  const a = ACCENTS.find((x) => x.id === id) || ACCENTS[1];
  return `https://youglish.com/pronounce/${encodeURIComponent(word)}/english/${a.youglish}`;
}

export function getStoredAccent(): AccentId {
  try {
    if (typeof window !== "undefined") {
      const s = window.localStorage.getItem("yds-accent") as AccentId | null;
      if (s && ACCENTS.some((a) => a.id === s)) return s;
    }
  } catch {
    /* boş */
  }
  return "us";
}

export function setStoredAccent(id: AccentId) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("yds-accent", id);
    }
  } catch {
    /* boş */
  }
}

export { MEDIA_SOURCE_TIP } from "./media-source";
