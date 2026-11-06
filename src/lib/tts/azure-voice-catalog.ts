import type { VoiceProfile } from "./voice-registry";

type AzureVoice = {
  ShortName?: unknown;
  Locale?: unknown;
  Gender?: unknown;
};

const CACHE_TTL_MS = 5 * 60 * 1000;
let cached: { region: string; voices: AzureVoice[]; expiresAt: number } | null = null;
const pendingByRegion = new Map<string, Promise<AzureVoice[]>>();

function normalized(value: unknown): string {
  return typeof value === "string" ? value.trim().toLocaleLowerCase("en-US") : "";
}

function validRegion(region: string): boolean {
  return /^[a-z0-9-]{2,24}$/i.test(region);
}

/** Read-only Azure voice-list request; it does not synthesize audio. */
export async function getAzureVoiceCatalog(
  apiKey = process.env.AZURE_SPEECH_KEY,
  region = process.env.AZURE_SPEECH_REGION || "westeurope",
  fetchImpl: typeof fetch = fetch,
): Promise<AzureVoice[]> {
  const cleanKey = apiKey?.trim();
  const cleanRegion = region.trim();
  if (!cleanKey || !validRegion(cleanRegion)) return [];

  if (cached && cached.region === cleanRegion && cached.expiresAt > Date.now()) return cached.voices;
  const pending = pendingByRegion.get(cleanRegion);
  if (pending) return pending;

  const request = fetchImpl(`https://${cleanRegion}.tts.speech.microsoft.com/cognitiveservices/voices/list`, {
    method: "GET",
    cache: "no-store",
    headers: { "Ocp-Apim-Subscription-Key": cleanKey, Accept: "application/json" },
    signal: AbortSignal.timeout(5000),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`Azure voice catalog HTTP ${response.status}`);
      const payload: unknown = await response.json();
      if (!Array.isArray(payload)) throw new Error("Azure voice catalog returned an invalid response.");
      const voices = payload.filter((value): value is AzureVoice => typeof value === "object" && value !== null);
      cached = { region: cleanRegion, voices, expiresAt: Date.now() + CACHE_TTL_MS };
      return voices;
    })
    .finally(() => {
      pendingByRegion.delete(cleanRegion);
    });

  pendingByRegion.set(cleanRegion, request);
  return request;
}

export function isExactAzureVoice(profile: VoiceProfile, catalog: readonly AzureVoice[]): boolean {
  return catalog.some((voice) =>
    normalized(voice.ShortName) === normalized(profile.providerVoiceId) &&
    normalized(voice.Locale) === normalized(profile.locale) &&
    normalized(voice.Gender) === normalized(profile.gender)
  );
}

export function resetAzureVoiceCatalogForTests(): void {
  cached = null;
  pendingByRegion.clear();
}
