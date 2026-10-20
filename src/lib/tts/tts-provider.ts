import { VoiceProfile, getVoiceProfile, AccentCode, VoiceSource } from "./voice-registry";

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
  locale?: AccentCode;
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
 * Microsoft Edge Neural TTS Sağlayıcısı
 * Yüksek kaliteli (24kHz / 96kbps Mono MP3) stüdyo sesi üretir.
 */
export class EdgeTtsProvider implements TtsProvider {
  public readonly id = "msedge-neural";
  private readonly defaultTimeoutMs = 20000; // 20 sn (cold start resilience)

  supportsVoice(voice: VoiceProfile): boolean {
    return voice.provider === this.id && voice.enabled;
  }

  async synthesize(request: TtsRequest): Promise<TtsResult> {
    const voiceProfile = getVoiceProfile(request.voiceId);
    if (!voiceProfile || !voiceProfile.enabled) {
      throw new Error(`VOICE_NOT_AVAILABLE: ${request.voiceId}`);
    }

    const cleanText = request.text.trim();
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

    // Dinamik import ile cold start ve bundle optimizasyonu
    const { MsEdgeTTS, OUTPUT_FORMAT } = await import("msedge-tts");

    let lastError: Error | null = null;
    // SAFETY: Try primary Edge Neural WebSocket first (up to 2 attempts unless 403)
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const audioBuffer = await this.synthesizeWithTimeout(
          MsEdgeTTS,
          OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3,
          voiceProfile.providerVoiceId,
          escapedText,
          rateOption,
          4000
        );

        if (audioBuffer && audioBuffer.length > 0) {
          return {
            ok: true,
            audio: audioBuffer,
            mimeType: "audio/mpeg",
            durationMs: Date.now() - startTime,
            provider: this.id,
            voiceId: voiceProfile.id,
            source: voiceProfile.source,
          };
        }
      } catch (err: any) {
        lastError = err;
        // If Microsoft WebSocket returns 403, immediately switch to secondary HTTPS MP3 provider
        if (String(err?.message || "").includes("403")) {
          break;
        }
        if (attempt < 2) {
          await new Promise((res) => setTimeout(res, 250));
        }
      }
    }

    // Secondary server-side cloud MP3 provider fallback (chunked HTTPS audio/mpeg stream)
    try {
      const fallbackBuffer = await this.synthesizeViaCloudHttpMp3(
        cleanText,
        voiceProfile.locale,
        request.speakingRate || 1.0
      );

      if (fallbackBuffer && fallbackBuffer.length > 0) {
        return {
          ok: true,
          audio: fallbackBuffer,
          mimeType: "audio/mpeg",
          durationMs: Date.now() - startTime,
          provider: "cloud-http-mp3",
          voiceId: voiceProfile.id,
          source: voiceProfile.source,
        };
      }
    } catch (fallbackErr: any) {
      lastError = fallbackErr;
    }

    throw new Error(`SYNTHESIS_FAILED: ${lastError?.message || "Bilinmeyen TTS hatası"}`);
  }

  private splitTextIntoChunks(text: string, maxLen: number = 180): string[] {
    if (text.length <= maxLen) return [text];
    const words = text.split(/\s+/);
    const chunks: string[] = [];
    let current = "";
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
    if (current) chunks.push(current);
    return chunks;
  }

  private async synthesizeViaCloudHttpMp3(
    text: string,
    locale: AccentCode,
    speakingRate: number
  ): Promise<Buffer> {
    const tl = locale === "en-GB-scotland" ? "en-gb" : locale.toLowerCase();
    const ttsSpeed = speakingRate < 0.85 ? "0.3" : "1";
    const chunks = this.splitTextIntoChunks(text, 180);
    const buffers: Buffer[] = [];

    for (const chunk of chunks) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);
      try {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          chunk
        )}&tl=${encodeURIComponent(tl)}&ttsspeed=${ttsSpeed}&client=tw-ob`;
        const res = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          },
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP MP3 stream status ${res.status}`);
        }
        const arrayBuf = await res.arrayBuffer();
        const buf = Buffer.from(arrayBuf);
        if (buf.length === 0) {
          throw new Error("HTTP MP3 stream returned empty buffer");
        }
        buffers.push(buf);
      } finally {
        clearTimeout(timer);
      }
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
