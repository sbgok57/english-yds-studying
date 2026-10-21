import dns from "dns";
import https from "https";
import {
  VoiceProfile,
  getVoiceProfile,
  VoiceLocale,
  ContentLanguage,
  VoiceGender,
  VoiceSource,
} from "./voice-registry";
import { isValidAudioBuffer } from "./audio-cache";

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
  if (voiceId === "tr-TR-female-emel") {
    return env.ELEVENLABS_TR_EMEL_VOICE_ID?.trim() || undefined;
  }
  if (voiceId === "tr-TR-male-ahmet") {
    return env.ELEVENLABS_TR_AHMET_VOICE_ID?.trim() || undefined;
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

    // A single shared ElevenLabs voice ID cannot satisfy the Emel/Ahmet
    // distinction. Only use explicitly configured IDs for each narrator.
    const elevenLabsVoiceId = getDedicatedTurkishElevenLabsVoiceId(voiceProfile.id);
    const elevenLabsKey = process.env.ELEVENLABS_API_KEY;
    if (voiceProfile.locale === "tr-TR" && elevenLabsKey && elevenLabsVoiceId) {
      try {
        const elevenLabsBuffer = await this.synthesizeViaElevenLabs(
          elevenLabsKey,
          elevenLabsVoiceId,
          cleanText,
          request.speakingRate || 1.0
        );
        if (elevenLabsBuffer && isValidAudioBuffer(elevenLabsBuffer, "audio/mpeg")) {
          const bothNarratorsConfigured = Boolean(
            process.env.ELEVENLABS_TR_EMEL_VOICE_ID?.trim() &&
              process.env.ELEVENLABS_TR_AHMET_VOICE_ID?.trim() &&
              process.env.ELEVENLABS_TR_EMEL_VOICE_ID.trim() !==
                process.env.ELEVENLABS_TR_AHMET_VOICE_ID.trim()
          );
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
            distinctSpeakerVerified: bothNarratorsConfigured,
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

    // Translation TTS accepts only a locale, not a speaker/voice ID. For Turkish
    // narration, returning it made Emel and Ahmet sound identical. Fail over to
    // the client's real device voices instead of returning mislabeled audio.
    if (voiceProfile.locale === "tr-TR") {
      throw new Error(
        `VOICE_NOT_AVAILABLE: Farklı Türkçe anlatıcı sesi yapılandırılmamış veya erişilemiyor (${lastError?.message || "sağlayıcı yanıt vermedi"}).`
      );
    }

    // KATMAN 4: English locale-only HTTP MP3 fallback
    try {
      const fallbackBuffer = await this.synthesizeViaCloudHttpMp3(
        cleanText,
        voiceProfile.locale,
        request.speakingRate || 1.0
      );

      if (fallbackBuffer && isValidAudioBuffer(fallbackBuffer, "audio/mpeg")) {
        return {
          ok: true,
          audio: fallbackBuffer,
          mimeType: "audio/mpeg",
          durationMs: Date.now() - startTime,
          provider: "cloud-http-mp3",
          voiceId: voiceProfile.id,
          providerVoiceId: voiceProfile.providerVoiceId,
          locale: voiceProfile.locale,
          contentLanguage: voiceProfile.contentLanguage,
          // SAFETY: Cloud HTTP fallback tek konuşmacı motoru kullandığından dürüstçe false döner
          distinctSpeakerVerified: false,
          source: voiceProfile.source,
        };
      }
    } catch (fallbackErr: any) {
      lastError = fallbackErr;
    }

    throw new Error(`SYNTHESIS_FAILED: ${lastError?.message || "Bilinmeyen TTS hatası"}`);
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

  private fetchMp3Ipv4(urlStr: string, timeoutMs: number = 6000): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const req = https.get(
        urlStr,
        {
          family: 4,
          timeout: timeoutMs,
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            Accept: "audio/mpeg,audio/*;q=0.9,*/*;q=0.8",
          },
        },
        (res) => {
          if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            res.resume();
            this.fetchMp3Ipv4(res.headers.location, timeoutMs).then(resolve).catch(reject);
            return;
          }
          if (res.statusCode !== 200) {
            res.resume();
            reject(new Error(`HTTP MP3 stream status ${res.statusCode}`));
            return;
          }
          const chunks: Buffer[] = [];
          res.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
          res.on("end", () => resolve(Buffer.concat(chunks)));
          res.on("error", reject);
        }
      );
      req.on("timeout", () => {
        req.destroy(new Error(`HTTP MP3 stream timeout (${timeoutMs}ms)`));
      });
      req.on("error", reject);
    });
  }

  private async synthesizeViaCloudHttpMp3(
    text: string,
    locale: VoiceLocale,
    speakingRate: number
  ): Promise<Buffer> {
    const tl =
      locale === "tr-TR"
        ? "tr"
        : locale === "en-GB-scotland"
        ? "en-gb"
        : locale.toLowerCase();
    const ttsSpeed = speakingRate < 0.85 ? "0.3" : "1";
    const chunks = splitTextIntoChunks(text, 180);
    const buffers: Buffer[] = [];

    for (const chunk of chunks) {
      const endpoints = [
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          chunk
        )}&tl=${encodeURIComponent(tl)}&ttsspeed=${ttsSpeed}&client=tw-ob`,
        `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          chunk
        )}&tl=${encodeURIComponent(tl)}&ttsspeed=${ttsSpeed}&client=gtx`,
      ];

      let chunkBuf: Buffer | null = null;
      let lastChunkErr: Error | null = null;

      for (let i = 0; i < endpoints.length; i++) {
        try {
          const buf = await this.fetchMp3Ipv4(endpoints[i], 6000);
          if (!isValidAudioBuffer(buf, "audio/mpeg")) {
            throw new Error("HTTP MP3 stream returned invalid or empty audio buffer");
          }
          chunkBuf = buf;
          break;
        } catch (err: any) {
          lastChunkErr = err;
          if (i < endpoints.length - 1) {
            await new Promise((r) => setTimeout(r, 150));
          }
        }
      }

      if (!chunkBuf) {
        throw lastChunkErr || new Error("Cloud HTTP MP3 synthesis failed");
      }
      buffers.push(chunkBuf);
    }

    return Buffer.concat(buffers);
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
      const targetVoice = voice || getVoiceProfile("en-US-female-jenny");
      if (!targetVoice) throw new Error("Varsayılan ses profili bulunamadı.");

      await this.synthesize({
        text: "Test.",
        voiceId: targetVoice.id,
        speakingRate: 1.0,
        contentType: "word",
      });

      return {
        provider: this.id,
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
