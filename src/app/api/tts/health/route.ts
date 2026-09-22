import { NextResponse } from "next/server";
import {
  VOICE_REGISTRY,
  validateVoiceMatrix,
} from "@/lib/tts/voice-registry";
import { defaultTtsProvider } from "@/lib/tts/tts-provider";
import { audioCache } from "@/lib/tts/audio-cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const matrix = validateVoiceMatrix();
  const cacheStats = audioCache.getStats();

  // Test default synthesis provider
  const providerHealth = await defaultTtsProvider.healthCheck();

  const enabledCount = VOICE_REGISTRY.filter((v) => v.enabled).length;
  const isHealthy = matrix.valid && enabledCount === 12 && providerHealth.available;

  return NextResponse.json({
    status: isHealthy ? "ok" : "degraded",
    totalVoices: VOICE_REGISTRY.length,
    enabledVoices: enabledCount,
    matrixValid: matrix.valid,
    matrixErrors: matrix.errors,
    provider: providerHealth,
    cache: cacheStats,
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
