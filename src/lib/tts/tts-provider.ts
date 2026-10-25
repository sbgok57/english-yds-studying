import dns from "dns";
import {
  VoiceProfile,
  getVoiceProfile,
  VoiceLocale,
  ContentLanguage,
  VoiceGender,
  VoiceSource,
} from "./voice-registry";
import { isValidAudioBuffer } from "./audio-cache";
import { findExactElevenLabsVoice, getElevenLabsVoiceCatalog } from "./elevenlabs-voice-catalog";
import { ALL_VOICE_REGISTRY } from "./voice-registry";

// PERF & SAFETY: Prevent Node.js undici/WebSocket IPv6 blackhole 8s timeouts on dual-stack networks
try {
  if (typeof dns.setDefaultResultOrder === "function") {
    dns.setDefaultResultOrder("ipv4first");
  }
} catch {
  /* ignore if unsupported */
}

export type TtsErrorCode =
  | "VOICE_NOT_AVAILABLE"
  | "PROVIDER_UNAVAILABLE"
  | "RATE_LIMITED"
  | "INVALID_TEXT"
  | "TEXT_TOO_LONG"
  | "SYNTHESIS_FAILED"
  | "AUDIO_EMPTY"
  | "TIMEOUT";

export interface TtsRequest {
  text: string;
  voiceId: string;
  locale?: VoiceLocale;
  contentLanguage?: ContentLanguage;
  gender?: VoiceGender;
  speakingRate?: number; // 0.75 - 1.25 (default 1.0)
  contentType?: "word" | "sentence" | "long-form";
  requestId?: string;
}

export interface TtsResult {
  ok: true;
  audio: Buffer;
  mimeType: string;
  durationMs?: number;
  provider: string;
  voiceId: string;
  providerVoiceId: string;
  locale: VoiceLocale;
  contentLanguage: ContentLanguage;
  distinctSpeakerVerified: boolean;
  source: VoiceSource;
}

export interface TtsHealth {
  provider: string;
  available: boolean;
  latencyMs: number;
  error?: string;
}

export interface TtsProvider {
  id: string;
  synthesize(request: TtsRequest): Promise<TtsResult>;
  healthCheck(voice?: VoiceProfile): Promise<TtsHealth>;
  supportsVoice(voice: VoiceProfile): boolean;
}

/**
 * Güvenli SSML XML kaçış fonksiyonu
 * Metindeki ampersand, küçüktür/büyüktür ve tırnak işaretlerini SSML uyumlu hale getirir.
 */
export function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Sayısal hızı (0.75 - 1.25) SSML yüzde formatına dönüştürür
 * Örnek: 1.0 -> "+0%", 0.85 -> "-15%", 1.15 -> "+15%"
 */
export function formatSpeakingRate(rate: number = 1.0): string {
  const clamped = Math.max(0.5, Math.min(1.5, rate));
  const percent = Math.round((clamped - 1.0) * 100);
  if (percent > 0) return `+${percent}%`;
  if (percent < 0) return `${percent}%`;
  return "+0%";
}

/**
 * Returns a dedicated ElevenLabs narrator only when a speaker-specific voice ID
 * is configured. A shared ELEVENLABS_VOICE_ID cannot distinguish Emel from Ahmet.
 */
export function getDedicatedTurkishElevenLabsVoiceId(
  voiceId: string,
  env: Record<string, string | undefined> = process.env
): string | undefined {
  const emelVoiceId = env.ELEVENLABS_TR_EMEL_VOICE_ID?.trim();
  const ahmetVoiceId = env.ELEVENLABS_TR_AHMET_VOICE_ID?.trim();

  if (emelVoiceId && ahmetVoiceId && emelVoiceId === ahmetVoiceId) {
    return undefined;
  }

  if (voiceId === "tr-TR-female-emel") {
    return emelVoiceId || undefined;
  }
  if (voiceId === "tr-TR-male-ahmet") {
    return ahmetVoiceId || undefined;
  }
  return undefined;
}

/**
 * Uzun metinleri önce cümle ve anlamlı noktalama sınırlarından,
 * gerekiyorsa kelime sınırlarından böler. Asla bir kelimenin ortasından kesmez.
 */
export function splitTextIntoChunks(text: string, maxLen: number = 180): string[] {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  if (cleaned.length <= maxLen) return [cleaned];

  // Önce cümle sonlarından (. ! ? ; :) böl
  const sentences = cleaned.split(/(?<=[.!?;:])\s+/);
  const chunks: string[] = [];
  let current = "";

  const pushWords = (segment: string) => {
    const words = segment.split(/\s+/).filter(Boolean);
    for (const word of words) {
      if (!current) {
        current = word.slice(0, maxLen);
      } else if (current.length + 1 + word.length <= maxLen) {
        current += " " + word;
      } else {
        chunks.push(current);
        current = word.slice(0, maxLen);
      }
    }
  };

  for (const sentence of sentences) {
    if (!sentence) continue;
    if (sentence.length > maxLen) {
      // Cümle tek başına sınırı aşıyorsa virgül/kelime sınırlarından böl
      const clauses = sentence.split(/(?<=[,])\s+/);
      for (const clause of clauses) {
        if (clause.length > maxLen) {
          pushWords(clause);
        } else if (!current) {
          current = clause;
        } else if (current.length + 1 + clause.length <= maxLen) {
          current += " " + clause;
        } else {
          chunks.push(current);
          current = clause;
        }
      }
    } else if (!current) {
      current = sentence;
    } else if (current.length + 1 + sentence.length <= maxLen) {
      current += " " + sentence;
    } else {
      chunks.push(current);
      current = sentence;
    }
  }

  if (current) {
    chunks.push(current);
  }
  return chunks;
}

/**
 * Çok Katmanlı Neural TTS Sağlayıcısı:
 * 1. Azure Cognitive Services Speech REST API (if configured)
 * 2. Dedicated ElevenLabs Turkish narrator (if its speaker-specific voice ID is configured)
 * 3. Microsoft Edge Neural TTS WebSocket (msedge-tts)
 * 4. Locale-only HTTP fallback for English. Turkish never uses this shared-voice fallback.
 */
export class EdgeTtsProvider implements TtsProvider {
  public readonly id = "msedge-neural";

  supportsVoice(voice: VoiceProfile): boolean {
    return voice.provider === this.id && voice.enabled;
  }

  async synthesize(request: TtsRequest): Promise<TtsResult> {
    const voiceProfile = getVoiceProfile(request.voiceId);
    if (!voiceProfile || !voiceProfile.enabled) {
      throw new Error(`VOICE_NOT_AVAILABLE: ${request.voiceId}`);
    }

    const cleanText = request.text.replace(/\s+/g, " ").trim();
    if (!cleanText) {
      throw new Error("INVALID_TEXT: Metin boş olamaz.");
    }

    if (cleanText.length > voiceProfile.maxCharacters) {
      throw new Error(
        `TEXT_TOO_LONG: Metin azami ${voiceProfile.maxCharacters} karakter sınırını aşıyor.`
      );
    }

    const escapedText = escapeXml(cleanText);
    const rateOption = formatSpeakingRate(request.speakingRate || 1.0);
    const startTime = Date.now();
    let lastError: Error | null = null;

    // KATMAN 1: Resmi Azure Speech REST API (Sunucu ortamında anahtar tanımlıysa gerçek EmelNeural/AhmetNeural/14 Aksan)
    const azureKey = process.env.AZURE_SPEECH_KEY;
    const azureRegion = process.env.AZURE_SPEECH_REGION || "westeurope";
    if (azureKey) {
      try {
        const azureBuffer = await this.synthesizeViaAzureRest(
          azureKey,
          azureRegion,
          voiceProfile.locale === "en-GB-scotland" ? "en-GB" : voiceProfile.locale,
          voiceProfile.providerVoiceId,
          escapedText,
          rateOption
        );
        if (azureBuffer && isValidAudioBuffer(azureBuffer, "audio/mpeg")) {
          return {
            ok: true,
            audio: azureBuffer,
            mimeType: "audio/mpeg",
            durationMs: Date.now() - startTime,
            provider: "azure-neural",
            voiceId: voiceProfile.id,
            providerVoiceId: voiceProfile.providerVoiceId,
            locale: voiceProfile.locale,
            contentLanguage: voiceProfile.contentLanguage,
            distinctSpeakerVerified: true,
            source: voiceProfile.source,
          };
        }
      } catch (azureErr: any) {
        lastError = azureErr;
      }
    }

    const elevenLabsKey = process.env.ELEVENLABS_API_KEY;
    if (elevenLabsKey) {
      try {
        const catalog = await getElevenLabsVoiceCatalog(elevenLabsKey);
        const pairedProfile = ALL_VOICE_REGISTRY.find(
          (candidate) =>
            candidate.enabled &&
            candidate.contentLanguage === voiceProfile.contentLanguage &&
            candidate.locale === voiceProfile.locale &&
            candidate.gender !== voiceProfile.gender
        );
        const explicitlyConfiguredTurkishVoice =
          voiceProfile.locale === "tr-TR"
            ? getDedicatedTurkishElevenLabsVoiceId(voiceProfile.id)
            : undefined;
        const resolvedVoice = findExactElevenLabsVoice(
          voiceProfile,
          catalog,
          explicitlyConfiguredTurkishVoice
        );
        const pairedVoice = pairedProfile
          ? findExactElevenLabsVoice(pairedProfile, catalog)
          : null;
        const hasDistinctPair = Boolean(
          resolvedVoice && pairedVoice && resolvedVoice.id !== pairedVoice.id
        );
        const elevenLabsVoiceId = resolvedVoice?.id;

        if (!elevenLabsVoiceId) {
          throw new Error(
            `No exact ElevenLabs voice found for ${voiceProfile.locale}/${voiceProfile.gender}`
          );
        }
        const elevenLabsBuffer = await this.synthesizeViaElevenLabs(
          elevenLabsKey,
          elevenLabsVoiceId,
          cleanText,
          request.speakingRate || 1.0
        );
        if (elevenLabsBuffer && isValidAudioBuffer(elevenLabsBuffer, "audio/mpeg")) {
          return {
            ok: true,
            audio: elevenLabsBuffer,
            mimeType: "audio/mpeg",
            durationMs: Date.now() - startTime,
            provider: "elevenlabs",
            voiceId: voiceProfile.id,
            providerVoiceId: elevenLabsVoiceId,
            locale: voiceProfile.locale,
            contentLanguage: voiceProfile.contentLanguage,
            distinctSpeakerVerified: hasDistinctPair,
            source: voiceProfile.source,
          };
        }
      } catch (elevenLabsErr: any) {
        lastError = elevenLabsErr;
      }
    }

    // KATMAN 2: Microsoft Edge Neural WebSocket
    try {
      const { MsEdgeTTS, OUTPUT_FORMAT } = await import("msedge-tts");
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const audioBuffer = await this.synthesizeWithTimeout(
            MsEdgeTTS,
            OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3,
            voiceProfile.providerVoiceId,
            escapedText,
            rateOption,
            3500
          );

          if (audioBuffer && isValidAudioBuffer(audioBuffer, "audio/mpeg")) {
            return {
              ok: true,
              audio: audioBuffer,
              mimeType: "audio/mpeg",
              durationMs: Date.now() - startTime,
              provider: this.id,
              voiceId: voiceProfile.id,
              providerVoiceId: voiceProfile.providerVoiceId,
              locale: voiceProfile.locale,
              contentLanguage: voiceProfile.contentLanguage,
              distinctSpeakerVerified: true,
              source: voiceProfile.source,
            };
          }
        } catch (err: any) {
          lastError = err;
          if (String(err?.message || "").includes("403")) {
            break;
          }
          if (attempt < 2) {
            await new Promise((res) => setTimeout(res, 200));
          }
        }
      }
    } catch (importErr: any) {
      lastError = importErr;
    }

    const localeName = voiceProfile.locale === "tr-TR" ? "Türkçe" : voiceProfile.accentLabelTr;
    const providerReason = lastError?.message || "ayrı bir konuşmacı sağlayıcısı yapılandırılmamış";
    throw new Error(
      `VOICE_NOT_AVAILABLE: ${localeName} ${voiceProfile.gender === "female" ? "kadın" : "erkek"} sesi doğrulanamadı (${providerReason}). Cihazdaki uygun sistem sesine güvenli geçiş yapılmalı.`,
    );
  }

  private async synthesizeViaAzureRest(
    apiKey: string,
    region: string,
    xmlLang: string,
    providerVoiceId: string,
    escapedText: string,
    rateOption: string
  ): Promise<Buffer> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const ssml = `<speak version="1.0" xml:lang="${xmlLang}"><voice xml:lang="${xmlLang}" name="${providerVoiceId}"><prosody rate="${rateOption}">${escapedText}</prosody></voice></speak>`;
      const res = await fetch(
        `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
            "Content-Type": "application/ssml+xml",
            "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
            "User-Agent": "DilMaster-TTS/1.0",
          },
          body: ssml,
          signal: controller.signal,
        }
      );
      if (!res.ok) {
        throw new Error(`Azure TTS HTTP ${res.status}`);
      }
      const arrayBuf = await res.arrayBuffer();
      return Buffer.from(arrayBuf);
    } finally {
      clearTimeout(timer);
    }
  }

  private async synthesizeViaElevenLabs(
    apiKey: string,
    providerVoiceId: string,
    text: string,
    speakingRate: number
  ): Promise<Buffer> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const speed = Math.max(0.7, Math.min(1.2, speakingRate));
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(providerVoiceId)}?output_format=mp3_44100_128`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "xi-api-key": apiKey,
            "Content-Type": "application/json",
            Accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: { stability: 0.5, similarity_boost: 0.75, speed },
          }),
          signal: controller.signal,
        }
      );
      if (!response.ok) {
        throw new Error(`ElevenLabs TTS HTTP ${response.status}`);
      }
      return Buffer.from(await response.arrayBuffer());
    } finally {
      clearTimeout(timer);
    }
  }

  private synthesizeWithTimeout(
    MsEdgeTTS: any,
    format: string,
    providerVoiceId: string,
    text: string,
    rateOption: string,
    timeoutMs: number
  ): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      let isDone = false;
      const timer = setTimeout(() => {
        if (!isDone) {
          isDone = true;
          reject(new Error(`TIMEOUT: TTS işlemi ${timeoutMs}ms içinde yanıt vermedi.`));
        }
      }, timeoutMs);

      (async () => {
        try {
          const tts = new MsEdgeTTS();
          await tts.setMetadata(providerVoiceId, format);
          const { audioStream } = tts.toStream(text, { rate: rateOption });
          const chunks: Buffer[] = [];
          for await (const chunk of audioStream) {
            chunks.push(Buffer.from(chunk));
          }
          if (!isDone) {
            isDone = true;
            clearTimeout(timer);
            resolve(Buffer.concat(chunks));
          }
        } catch (err) {
          if (!isDone) {
            isDone = true;
            clearTimeout(timer);
            reject(err);
          }
        }
      })();
    });
  }

  async healthCheck(voice?: VoiceProfile): Promise<TtsHealth> {
    const t0 = Date.now();
    try {
      const apiKey = process.env.ELEVENLABS_API_KEY;
      if (apiKey) {
        const catalog = await getElevenLabsVoiceCatalog(apiKey);
        const candidates = voice
          ? [voice]
          : ALL_VOICE_REGISTRY.filter((profile) => profile.enabled);
        const matched = candidates.some((profile) => findExactElevenLabsVoice(profile, catalog));
        if (matched) {
          return { provider: "elevenlabs-catalog", available: true, latencyMs: Date.now() - t0 };
        }
      }

      // A health check must not synthesize a sample: ElevenLabs bills generated
      // characters. Validate configured credentials/catalog only, then report
      // the blocked provider instead of spending credits or claiming success.
      const azureConfigured = Boolean(process.env.AZURE_SPEECH_KEY?.trim());
      if (!azureConfigured) {
        throw new Error("No exact configured cloud voice is available; no audio was generated.");
      }

      return {
        provider: "azure-neural-configured",
        available: true,
        latencyMs: Date.now() - t0,
      };
    } catch (err: any) {
      return {
        provider: this.id,
        available: false,
        latencyMs: Date.now() - t0,
        error: err?.message || String(err),
      };
    }
  }
}

// Global Varsayılan Sağlayıcı
export const defaultTtsProvider = new EdgeTtsProvider();
