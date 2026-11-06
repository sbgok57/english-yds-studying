import type { VoiceProfile } from "./voice-registry";

type NarakeetVoice = {
  name?: unknown;
  languageCode?: unknown;
};

// Narakeet recommends no more than one catalog request per day. The catalog
// changes infrequently, so keep each warm server instance within that cadence.
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const EXPECTED_VOICES: Record<string, { name: string; languageCode: string; gender: "female" | "male" }> = {
  "en-GB-female-sonia": { name: "Beatrice", languageCode: "en-GB", gender: "female" },
  "en-GB-male-ryan": { name: "Nelson", languageCode: "en-GB", gender: "male" },
  "en-US-female-jenny": { name: "Jessica", languageCode: "en-US", gender: "female" },
  "en-US-male-guy": { name: "Matt", languageCode: "en-US", gender: "male" },
  "en-AU-female-natasha": { name: "Gail", languageCode: "en-AU", gender: "female" },
  "en-AU-male-william": { name: "Graham", languageCode: "en-AU", gender: "male" },
  "tr-TR-female-emel": { name: "Sibel", languageCode: "tr-TR", gender: "female" },
  "tr-TR-male-ahmet": { name: "Murat", languageCode: "tr-TR", gender: "male" },
};

let cached: { voices: NarakeetVoice[]; expiresAt: number } | null = null;
let pending: Promise<NarakeetVoice[]> | null = null;

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function normalized(value: unknown): string {
  return typeof value === "string" ? value.trim().toLocaleLowerCase("en-US") : "";
}

export function getExpectedNarakeetVoice(profileId: string) {
  return EXPECTED_VOICES[profileId] ?? null;
}

export function resolveNarakeetVoice(
  profile: VoiceProfile,
  voices: readonly NarakeetVoice[]
): { name: string; languageCode: string } | null {
  const expected = EXPECTED_VOICES[profile.id];
  if (!expected || expected.gender !== profile.gender) return null;

  const match = voices.find((voice) =>
    normalized(voice.name) === normalized(expected.name) &&
    normalized(voice.languageCode) === normalized(expected.languageCode)
  );

  return match ? { name: expected.name, languageCode: expected.languageCode } : null;
}

export async function getNarakeetVoiceCatalog(
  apiKey = process.env.NARAKEET_API_KEY,
  fetchImpl: typeof fetch = fetch
): Promise<NarakeetVoice[]> {
  if (!apiKey?.trim()) return [];
  if (cached && cached.expiresAt > Date.now()) return cached.voices;
  if (pending) return pending;

  pending = fetchImpl("https://api.narakeet.com/voices", {
    method: "GET",
    cache: "no-store",
    headers: { "x-api-key": apiKey.trim(), Accept: "application/json" },
    signal: AbortSignal.timeout(5000),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`Narakeet voice catalog HTTP ${response.status}`);
      const payload: unknown = await response.json();
      if (!Array.isArray(payload)) throw new Error("Narakeet voice catalog returned an invalid response.");
      const voices = payload.map((voice) => asRecord(voice)).filter((voice): voice is Record<string, unknown> => Boolean(voice)) as NarakeetVoice[];
      cached = { voices, expiresAt: Date.now() + CACHE_TTL_MS };
      return voices;
    })
    .finally(() => {
      pending = null;
    });

  return pending;
}

export function resetNarakeetVoiceCatalogForTests(): void {
  cached = null;
  pending = null;
}
