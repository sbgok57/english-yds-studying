import type { VoiceProfile } from "./voice-registry";

type ElevenLabsVoice = {
  voice_id?: unknown;
  name?: unknown;
  labels?: unknown;
  verified_languages?: unknown;
};

type VoiceCatalog = { voices: ElevenLabsVoice[]; expiresAt: number };

const CACHE_TTL_MS = 5 * 60 * 1000;
let cachedCatalog: VoiceCatalog | null = null;
let pendingCatalog: Promise<ElevenLabsVoice[]> | null = null;

function record(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function voiceLocales(voice: ElevenLabsVoice): string[] {
  const languages = Array.isArray(voice.verified_languages) ? voice.verified_languages : [];
  return languages
    .map((item) => text(record(item)?.locale))
    .filter(Boolean);
}

function voiceGender(voice: ElevenLabsVoice): string {
  const labels = record(voice.labels);
  return text(labels?.gender).toLocaleLowerCase("en-US");
}

async function fetchCatalog(apiKey: string): Promise<ElevenLabsVoice[]> {
  const voices: ElevenLabsVoice[] = [];
  let nextPageToken: string | null = null;

  // Keep this read-only inventory request bounded. It does not synthesize audio
  // or consume TTS characters; generation happens only after a user presses play.
  for (let page = 0; page < 5; page += 1) {
    const url = new URL("https://api.elevenlabs.io/v2/voices");
    url.searchParams.set("page_size", "100");
    url.searchParams.set("include_total_count", "false");
    if (nextPageToken) url.searchParams.set("next_page_token", nextPageToken);

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: { "xi-api-key": apiKey, Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      // Do not include provider response bodies or credentials in surfaced errors.
      throw new Error(`ElevenLabs voice catalog HTTP ${response.status}`);
    }
    const payload = record(await response.json());
    if (!payload || !Array.isArray(payload.voices)) {
      throw new Error("ElevenLabs voice catalog returned an invalid response.");
    }
    voices.push(...(payload.voices as ElevenLabsVoice[]));
    nextPageToken = text(payload.next_page_token) || null;
    if (payload.has_more !== true || !nextPageToken) break;
  }

  // Some accounts return an empty filtered v2 catalog despite having a
  // configured voice. Fall back to the provider's account voice list (read-only)
  // and then fetch only the already-configured voice metadata if necessary.
  if (voices.length === 0) {
    try {
      const response = await fetch("https://api.elevenlabs.io/v1/voices?show_legacy=true", {
        method: "GET",
        cache: "no-store",
        headers: { "xi-api-key": apiKey, Accept: "application/json" },
        signal: AbortSignal.timeout(5000),
      });
      if (response.ok) {
        const payload = record(await response.json());
        if (payload && Array.isArray(payload.voices)) {
          voices.push(...(payload.voices as ElevenLabsVoice[]));
        }
      }
    } catch {
      // The account may not expose the deprecated listing endpoint. Try the
      // exact configured voice ID below without leaking provider details.
    }
  }

  const configuredVoiceId = process.env.ELEVENLABS_VOICE_ID?.trim();
  if (configuredVoiceId && !voices.some((voice) => voice.voice_id === configuredVoiceId)) {
    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/voices/${encodeURIComponent(configuredVoiceId)}`,
        {
          method: "GET",
          cache: "no-store",
          headers: { "xi-api-key": apiKey, Accept: "application/json" },
          signal: AbortSignal.timeout(5000),
        }
      );
      if (response.ok) voices.push((await response.json()) as ElevenLabsVoice);
    } catch {
      // Metadata is optional for catalog discovery; synthesis still requires an
      // exact locale and gender match before this voice can be selected.
    }
  }

  return voices;
}

export async function getElevenLabsVoiceCatalog(
  apiKey = process.env.ELEVENLABS_API_KEY
): Promise<ElevenLabsVoice[]> {
  if (!apiKey?.trim()) return [];
  if (cachedCatalog && cachedCatalog.expiresAt > Date.now()) return cachedCatalog.voices;
  if (pendingCatalog) return pendingCatalog;

  pendingCatalog = fetchCatalog(apiKey.trim())
    .then((voices) => {
      cachedCatalog = { voices, expiresAt: Date.now() + CACHE_TTL_MS };
      return voices;
    })
    .finally(() => {
      pendingCatalog = null;
    });

  return pendingCatalog;
}

/**
 * A catalog voice is eligible only when the provider reports both the exact
 * verified locale and a matching gender label. Display names and list order are
 * never used as identity signals. Turkish narrators must resolve to different IDs.
 */
export function findExactElevenLabsVoice(
  profile: VoiceProfile,
  catalog: readonly ElevenLabsVoice[],
  preferredVoiceId?: string
): { id: string; name: string } | null {
  const candidates = catalog
    .filter((voice) => {
      const id = text(voice.voice_id);
      return (
        Boolean(id) &&
        voiceLocales(voice).includes(profile.locale === "en-GB-scotland" ? "en-GB" : profile.locale) &&
        voiceGender(voice) === profile.gender
      );
    })
    .map((voice) => ({ id: text(voice.voice_id), name: text(voice.name) }))
    .sort((a, b) => {
      if (a.id === preferredVoiceId) return -1;
      if (b.id === preferredVoiceId) return 1;
      return a.id.localeCompare(b.id);
    });

  const selected = candidates[0];
  return selected ? { id: selected.id, name: selected.name } : null;
}

export function resetElevenLabsVoiceCatalogForTests(): void {
  cachedCatalog = null;
  pendingCatalog = null;
}
