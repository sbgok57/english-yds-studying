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
  private readonly defaultTimeoutMs = 12000; // 12 sn

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
    // Transient ağ hataları için 2 deneme (1 yeniden deneme)
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const audioBuffer = await this.synthesizeWithTimeout(
          MsEdgeTTS,
          OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3,
          voiceProfile.providerVoiceId,
          escapedText,
          rateOption,
          this.defaultTimeoutMs
        );

        if (!audioBuffer || audioBuffer.length === 0) {
          throw new Error("AUDIO_EMPTY: Sağlayıcı boş ses verisi döndürdü.");
        }

        return {
          ok: true,
          audio: audioBuffer,
          mimeType: "audio/mpeg",
          durationMs: Date.now() - startTime,
          provider: this.id,
          voiceId: voiceProfile.id,
          source: voiceProfile.source,
        };
      } catch (err: any) {
        lastError = err;
        if (attempt < 2) {
          // 200ms bekle ve tekrar dene
          await new Promise((res) => setTimeout(res, 200));
        }
      }
    }

    throw new Error(`SYNTHESIS_FAILED: ${lastError?.message || "Bilinmeyen TTS hatası"}`);
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
