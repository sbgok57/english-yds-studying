import {
  ALL_VOICE_REGISTRY,
  VOICE_REGISTRY,
  TURKISH_NARRATOR_VOICES,
  VoiceProfile,
  validateVoiceMatrix,
  STANDARD_PREVIEW_TEXT,
  STANDARD_TURKISH_PREVIEW_TEXT,
} from "./voice-registry";
import { audioCache, isValidAudioBuffer } from "./audio-cache";
import { defaultTtsProvider, splitTextIntoChunks } from "./tts-provider";

export interface VoiceProbeRecord {
  voiceId: string;
  providerVoiceId: string;
  displayName: string;
  locale: string;
  contentLanguage: "en" | "tr";
  gender: "female" | "male";
  technicalProbePassed: boolean;
  providerUsed: string;
  mimeType: string;
  audioBytes: number;
  latencyMs: number;
  distinctSpeakerVerified: boolean;
  cacheKeyIsolated: boolean;
  /**
   * DÜRÜSTLÜK KURALI: Teknik probe başarısı ile gerçek insan kulağıyla dinleme
   * doğrulaması birbirinden ayrı tutulur. Otomatik testlerde asla true yapılmaz.
   */
  manualListeningConfirmed: boolean;
  error?: string;
}

export interface VoiceAuditSummary {
  timestamp: string;
  totalVoices: number;
  englishVoicesCount: number;
  turkishVoicesCount: number;
  matrixValid: boolean;
  matrixErrors: string[];
  allCacheKeysUnique: boolean;
  emelAhmetCacheIsolated: boolean;
  records: VoiceProbeRecord[];
}

/**
 * Aynı metin için tüm 16 ses profilinin (14 İngilizce + 2 Türkçe)
 * tamamen benzersiz önbellek anahtarları ürettiğini doğrular.
 */
export function auditCacheKeyIsolation(sampleText: string = "Test metni"): {
  allUnique: boolean;
  emelAhmetIsolated: boolean;
  keysByVoiceId: Record<string, string>;
} {
  const keysByVoiceId: Record<string, string> = {};
  const seenKeys = new Set<string>();
  let allUnique = true;

  for (const voice of ALL_VOICE_REGISTRY) {
    const key = audioCache.generateKey(
      voice.provider,
      voice.id,
      voice.locale,
      1.0,
      "sentence",
      sampleText,
      voice.providerVoiceId,
      "mp3-24khz-96k"
    );
    if (seenKeys.has(key)) {
      allUnique = false;
    }
    seenKeys.add(key);
    keysByVoiceId[voice.id] = key;
  }

  const emelKey = keysByVoiceId["tr-TR-female-emel"];
  const ahmetKey = keysByVoiceId["tr-TR-male-ahmet"];
  const emelAhmetIsolated = Boolean(emelKey && ahmetKey && emelKey !== ahmetKey);

  return {
    allUnique,
    emelAhmetIsolated,
    keysByVoiceId,
  };
}

/**
 * Tüm etkin ses profillerini (14 İngilizce + 2 Türkçe) teknik olarak test eder.
 */
export async function probeAllEnabledVoices(options?: {
  liveNetworkProbe?: boolean;
}): Promise<VoiceAuditSummary> {
  const matrix = validateVoiceMatrix();
  const cacheAudit = auditCacheKeyIsolation("Gramer ve telaffuz ses testi.");
  const records: VoiceProbeRecord[] = [];

  for (const voice of ALL_VOICE_REGISTRY) {
    const t0 = Date.now();
    const previewText =
      voice.contentLanguage === "tr" ? STANDARD_TURKISH_PREVIEW_TEXT : STANDARD_PREVIEW_TEXT;

    if (options?.liveNetworkProbe === false) {
      records.push({
        voiceId: voice.id,
        providerVoiceId: voice.providerVoiceId,
        displayName: voice.displayName,
        locale: voice.locale,
        contentLanguage: voice.contentLanguage,
        gender: voice.gender,
        technicalProbePassed: voice.enabled && Boolean(voice.providerVoiceId),
        providerUsed: "static-catalog-check",
        mimeType: "audio/mpeg",
        audioBytes: 0,
        latencyMs: 0,
        distinctSpeakerVerified: false,
        cacheKeyIsolated: cacheAudit.allUnique,
        manualListeningConfirmed: false,
      });
      continue;
    }

    try {
      const res = await defaultTtsProvider.synthesize({
        text: previewText,
        voiceId: voice.id,
        locale: voice.locale,
        contentLanguage: voice.contentLanguage,
        gender: voice.gender,
        speakingRate: 1.0,
        contentType: "sentence",
      });

      const validBinary = isValidAudioBuffer(res.audio, res.mimeType);
      records.push({
        voiceId: voice.id,
        providerVoiceId: res.providerVoiceId,
        displayName: voice.displayName,
        locale: voice.locale,
        contentLanguage: voice.contentLanguage,
        gender: voice.gender,
        technicalProbePassed: res.ok && validBinary && res.audio.length > 512,
        providerUsed: res.provider,
        mimeType: res.mimeType,
        audioBytes: res.audio.length,
        latencyMs: Date.now() - t0,
        distinctSpeakerVerified: res.distinctSpeakerVerified,
        cacheKeyIsolated: cacheAudit.allUnique,
        manualListeningConfirmed: false,
      });
    } catch (err: any) {
      records.push({
        voiceId: voice.id,
        providerVoiceId: voice.providerVoiceId,
        displayName: voice.displayName,
        locale: voice.locale,
        contentLanguage: voice.contentLanguage,
        gender: voice.gender,
        technicalProbePassed: false,
        providerUsed: "none",
        mimeType: "none",
        audioBytes: 0,
        latencyMs: Date.now() - t0,
        distinctSpeakerVerified: false,
        cacheKeyIsolated: cacheAudit.allUnique,
        manualListeningConfirmed: false,
        error: err?.message || String(err),
      });
    }
  }

  return {
    timestamp: new Date().toISOString(),
    totalVoices: ALL_VOICE_REGISTRY.length,
    englishVoicesCount: VOICE_REGISTRY.length,
    turkishVoicesCount: TURKISH_NARRATOR_VOICES.length,
    matrixValid: matrix.valid,
    matrixErrors: matrix.errors,
    allCacheKeysUnique: cacheAudit.allUnique,
    emelAhmetCacheIsolated: cacheAudit.emelAhmetIsolated,
    records,
  };
}

export { splitTextIntoChunks };
