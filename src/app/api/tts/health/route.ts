import { NextResponse } from "next/server";
import {
  ALL_VOICE_REGISTRY,
  VOICE_REGISTRY,
  validateVoiceMatrix,
} from "@/lib/tts/voice-registry";
import { defaultTtsProvider } from "@/lib/tts/tts-provider";
import { audioCache } from "@/lib/tts/audio-cache";
import {
  findExactElevenLabsVoice,
  getConfiguredElevenLabsVoiceId,
  getElevenLabsVoiceCatalog,
} from "@/lib/tts/elevenlabs-voice-catalog";
import { getAzureVoiceCatalog, isExactAzureVoice } from "@/lib/tts/azure-voice-catalog";
import { getNarakeetVoiceCatalog, resolveNarakeetVoice } from "@/lib/tts/narakeet-voice-catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const matrix = validateVoiceMatrix();
  const cacheStats = audioCache.getStats();

  // Inventory calls are read-only and cost no synthesis credits. Do not create
  // sample audio from a health endpoint: provider-generated characters are billed.
  let elevenLabsCatalogAvailable = false;
  let elevenLabsCatalogVoiceCount = 0;
  const elevenLabsCredentialsConfigured = Boolean(process.env.ELEVENLABS_API_KEY?.trim());
  let narakeetCatalogVoiceCount = 0;
  const narakeetCredentialsConfigured = Boolean(process.env.NARAKEET_API_KEY?.trim());
  let catalogCheckError: string | undefined;
  let elevenLabsCatalog: Awaited<ReturnType<typeof getElevenLabsVoiceCatalog>> = [];
  let narakeetCatalog: Awaited<ReturnType<typeof getNarakeetVoiceCatalog>> = [];
  let azureCatalog: Awaited<ReturnType<typeof getAzureVoiceCatalog>> = [];
  let azureCatalogVoiceCount = 0;
  const azureCredentialsConfigured = Boolean(process.env.AZURE_SPEECH_KEY?.trim());
  try {
    [elevenLabsCatalog, narakeetCatalog, azureCatalog] = await Promise.all([
      getElevenLabsVoiceCatalog(),
      getNarakeetVoiceCatalog(),
      getAzureVoiceCatalog(),
    ]);
    elevenLabsCatalogVoiceCount = elevenLabsCatalog.length;
    narakeetCatalogVoiceCount = narakeetCatalog.length;
    azureCatalogVoiceCount = azureCatalog.length;
    elevenLabsCatalogAvailable = elevenLabsCatalog.length > 0;
  } catch (error) {
    catalogCheckError = error instanceof Error ? error.message : "Ses kataloğu okunamadı.";
  }

  const profileAvailability = await Promise.all(
    ALL_VOICE_REGISTRY.map(async (voice) => {
      const exactNarakeetMatch = Boolean(resolveNarakeetVoice(voice, narakeetCatalog));
      const exactElevenLabsMatch = elevenLabsCatalogAvailable && Boolean(
        findExactElevenLabsVoice(voice, elevenLabsCatalog, getConfiguredElevenLabsVoiceId(voice.id))
      );
      const exactAzureMatch = azureCredentialsConfigured && isExactAzureVoice(voice, azureCatalog);
      const canRequest = voice.enabled && (exactNarakeetMatch || exactElevenLabsMatch || exactAzureMatch);
      return {
        id: voice.id,
        enabled: voice.enabled,
        available: canRequest,
        provider: exactNarakeetMatch ? "narakeet" : exactAzureMatch ? "azure" : exactElevenLabsMatch ? "elevenlabs" : null,
        accent: voice.accentLabelTr,
        gender: voice.gender,
      };
    })
  );
  const providerHealth = await defaultTtsProvider.healthCheck();

  const enabledCount = VOICE_REGISTRY.filter((v) => v.enabled).length;
  // Keep health reporting tied to the registry: the project now has a
  // variable number of accent and narrator profiles.
  // Disabled catalog entries are expected when a provider cannot verify an
  // accent. They should be reported, not make the entire service unhealthy.
  const enabledProfileCount = profileAvailability.filter((voice) => voice.enabled).length;
  const availableProfileCount = profileAvailability.filter((voice) => voice.available).length;
  const isHealthy =
    matrix.valid && enabledProfileCount > 0 && availableProfileCount === enabledProfileCount;

  return NextResponse.json({
    status: isHealthy ? "ok" : "degraded",
    totalVoices: VOICE_REGISTRY.length,
    enabledVoices: enabledCount,
    enabledProfiles: enabledProfileCount,
    availableProfiles: availableProfileCount,
    elevenLabsCredentialsConfigured,
    elevenLabsCatalogVoiceCount,
    azureCredentialsConfigured,
    azureCatalogVoiceCount,
    narakeetCredentialsConfigured,
    narakeetCatalogVoiceCount,
    catalogError: catalogCheckError,
    matrixValid: matrix.valid,
    matrixErrors: matrix.errors,
    provider: providerHealth,
    cache: cacheStats,
    profileAvailability,
    voices: VOICE_REGISTRY.map((v) => ({
      id: v.id,
      displayName: v.displayName,
      locale: v.locale,
      accent: v.accentLabelTr,
      flag: v.flag,
      gender: v.gender,
      source: v.source,
      sampleRateHz: v.sampleRateHz,
      format: v.outputFormat,
      enabled: v.enabled,
    })),
  });
}
