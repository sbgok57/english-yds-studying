/**
 * Resolve human-recorded, openly licensed single-word pronunciations from
 * English Wiktionary and Wikimedia Commons. This is intentionally not a TTS
 * service: it only returns recordings that contributors uploaded for a word.
 */

export type HumanRecordingAccent = "en-GB" | "en-US" | "en-AU";

export interface HumanWordRecording {
  audioUrl: string;
  filePageUrl: string;
  accent: HumanRecordingAccent;
  speakerGender: "unknown";
  creator: string;
  licenseName: string;
  licenseUrl: string;
}

type WiktionaryPage = { images?: Array<{ title?: string }> };
type CommonsPage = {
  title?: string;
  imageinfo?: Array<{
    url?: string;
    descriptionurl?: string;
    extmetadata?: Record<string, { value?: string }>;
  }>;
};

const WIKTIONARY_API = "https://en.wiktionary.org/w/api.php";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const ACCEPTED_AUDIO_EXTENSIONS = /\.(?:ogg|oga|mp3|wav|flac)$/i;
const ACCEPTED_FREE_LICENSES = /^(?:CC BY(?:-SA)?(?:\s|$)|Public domain|CC0)/i;
const MAX_WORD_LENGTH = 80;

const ACCENT_FILE_PREFIXES: Record<HumanRecordingAccent, readonly string[]> = {
  "en-GB": ["en-gb", "en-uk", "en-rp"],
  "en-US": ["en-us"],
  "en-AU": ["en-au"],
};

export function isSingleEnglishWord(input: string): boolean {
  const word = input.trim();
  return (
    word.length > 0 &&
    word.length <= MAX_WORD_LENGTH &&
    /^[\p{L}]+(?:['’-][\p{L}]+)*$/u.test(word)
  );
}

function canonicalWordPart(value: string): string {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Exact word-and-accent match only; never falls back to a different accent. */
export function findWiktionaryAudioTitle(
  word: string,
  accent: HumanRecordingAccent,
  titles: string[],
): string | null {
  if (!isSingleEnglishWord(word)) return null;
  const expected = canonicalWordPart(word);
  for (const title of titles) {
    if (!/^File:/i.test(title) || !ACCEPTED_AUDIO_EXTENSIONS.test(title)) continue;
    const filename = title.replace(/^File:/i, "");
    const lower = filename.toLowerCase();
    for (const prefix of ACCENT_FILE_PREFIXES[accent]) {
      const start = `${prefix}-`;
      if (!lower.startsWith(start)) continue;
      const remainder = filename.slice(start.length).replace(/\.(?:ogg|oga|mp3|wav|flac)$/i, "");
      const candidate = canonicalWordPart(remainder);
      if (candidate === expected) return title;
    }
  }
  return null;
}

function apiUrl(base: string, params: Record<string, string>): string {
  const url = new URL(base);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  return url.toString();
}

function metadataValue(metadata: Record<string, { value?: string }> | undefined, key: string): string {
  const value = metadata?.[key]?.value || "";
  // extmetadata values may contain HTML markup. Strip markup before display.
  return value.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function safeCommonsMediaUrl(value: string | undefined): value is string {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "upload.wikimedia.org" && ACCEPTED_AUDIO_EXTENSIONS.test(url.pathname);
  } catch {
    return false;
  }
}

/**
 * Fetches only Wikimedia's public metadata APIs. Audio is served from Commons
 * after the caller receives the verified URL. No user URL or credential is
 * accepted, preventing arbitrary-fetch/SSRF behavior.
 */
export async function findHumanWordRecording(
  rawWord: string,
  accent: HumanRecordingAccent,
  fetcher: typeof fetch = fetch,
): Promise<HumanWordRecording | null> {
  const word = rawWord.trim();
  if (!isSingleEnglishWord(word)) return null;
  const requestHeaders = {
    "User-Agent": "DilMaster/1.0 (https://dil-master.vercel.app; educational pronunciation lookup)",
    Accept: "application/json",
  };
  const timeout = AbortSignal.timeout(7000);

  const wordResponse = await fetcher(apiUrl(WIKTIONARY_API, {
    action: "query", format: "json", formatversion: "2", prop: "images",
    titles: word, imlimit: "100",
  }), { headers: requestHeaders, signal: timeout, next: { revalidate: 3600 } } as RequestInit);
  if (!wordResponse.ok) throw new Error(`WIKTIONARY_HTTP_${wordResponse.status}`);
  const wordData = await wordResponse.json() as { query?: { pages?: WiktionaryPage[] } };
  const titles = (wordData.query?.pages || []).flatMap((page) => (page.images || []).map((image) => image.title || ""));
  const matchTitle = findWiktionaryAudioTitle(word, accent, titles);
  if (!matchTitle) return null;

  const commonsResponse = await fetcher(apiUrl(COMMONS_API, {
    action: "query", format: "json", formatversion: "2", prop: "imageinfo",
    titles: matchTitle, iiprop: "url|extmetadata",
  }), { headers: requestHeaders, signal: timeout, next: { revalidate: 3600 } } as RequestInit);
  if (!commonsResponse.ok) throw new Error(`COMMONS_HTTP_${commonsResponse.status}`);
  const commonsData = await commonsResponse.json() as { query?: { pages?: CommonsPage[] } };
  const page = commonsData.query?.pages?.[0];
  const info = page?.imageinfo?.[0];
  if (!info || !safeCommonsMediaUrl(info.url)) return null;

  const licenseName = metadataValue(info.extmetadata, "LicenseShortName");
  const rawLicenseUrl = metadataValue(info.extmetadata, "LicenseUrl");
  let licenseUrl = "";
  try {
    const parsedLicenseUrl = new URL(rawLicenseUrl);
    if (parsedLicenseUrl.hostname === "creativecommons.org" && parsedLicenseUrl.protocol === "http:") {
      parsedLicenseUrl.protocol = "https:";
    }
    if (parsedLicenseUrl.protocol === "https:") licenseUrl = parsedLicenseUrl.toString();
  } catch {
    licenseUrl = "";
  }
  // Do not serve files without a recognized free reuse license.
  if (!licenseName || !ACCEPTED_FREE_LICENSES.test(licenseName) || !licenseUrl || !/^https:\/\//.test(licenseUrl)) return null;

  const creator = metadataValue(info.extmetadata, "Artist") || metadataValue(info.extmetadata, "Credit") || "Wikimedia Commons contributor";
  const filePageUrl = info.descriptionurl;
  if (!filePageUrl || !filePageUrl.startsWith("https://commons.wikimedia.org/wiki/File:")) return null;

  return {
    audioUrl: info.url,
    filePageUrl,
    accent,
    speakerGender: "unknown",
    creator,
    licenseName,
    licenseUrl,
  };
}
