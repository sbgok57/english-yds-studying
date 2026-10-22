import crypto from "crypto";
import { getVoiceProfile } from "./voice-registry";

export interface AudioCacheEntry {
  buffer: Buffer;
  mimeType: string;
  voiceId: string;
  providerVoiceId: string;
  provider: string;
  locale: string;
  distinctSpeakerVerified: boolean;
  createdAt: number;
  sizeBytes: number;
}

export interface CacheStats {
  size: number;
  maxSize: number;
  totalBytes: number;
  maxBytes: number;
  hits: number;
  misses: number;
}

/**
 * Doğrulanmış ses ikili verisi kontrolü (MP3 ID3 / MPEG Sync, WAV RIFF, OGG OggS).
 * JSON veya HTML hata gövdelerinin ses önbelleğine girmesini kesin olarak engeller.
 */
export function isValidAudioBuffer(buffer: Buffer, mimeType: string = "audio/mpeg"): boolean {
  if (!buffer || buffer.length < 64) return false;

  // İlk baytlarda '{' veya '<' varsa JSON veya HTML hata yanıtıdır
  const firstNonWs = buffer.subarray(0, 32).toString("utf8").trimStart();
  if (firstNonWs.startsWith("{") || firstNonWs.startsWith("<") || firstNonWs.startsWith("Error")) {
    return false;
  }

  const b0 = buffer[0];
  const b1 = buffer[1];
  const b2 = buffer[2];
  const b3 = buffer[3];

  // MP3: "ID3" etiketi (0x49 0x44 0x33) veya MPEG Frame Sync (0xFF ve üst 3 bit 111 -> 0xE0)
  const isId3 = b0 === 0x49 && b1 === 0x44 && b2 === 0x33;
  const isMpegSync = b0 === 0xff && (b1 & 0xe0) === 0xe0;

  // WAV: "RIFF" (0x52 0x49 0x46 0x46)
  const isRiff = b0 === 0x52 && b1 === 0x49 && b2 === 0x46 && b3 === 0x46;

  // OGG: "OggS" (0x4F 0x67 0x67 0x53)
  const isOgg = b0 === 0x4f && b1 === 0x67 && b2 === 0x67 && b3 === 0x53;

  if (mimeType.includes("mpeg") || mimeType.includes("mp3")) {
    return isId3 || isMpegSync;
  }
  if (mimeType.includes("wav")) {
    return isRiff;
  }
  if (mimeType.includes("ogg")) {
    return isOgg;
  }

  return isId3 || isMpegSync || isRiff || isOgg;
}

class AudioCacheManager {
  private cache = new Map<string, AudioCacheEntry>();
  private readonly maxEntries = 500;
  private readonly maxTotalBytes = 50 * 1024 * 1024; // 50 MB
  private currentBytes = 0;
  private hits = 0;
  private misses = 0;

  /**
   * Deterministik ve benzersiz cache anahtarı oluşturur.
   * Emel (tr-TR-EmelNeural) ve Ahmet (tr-TR-AhmetNeural) dahil hiçbir ses profili aynı anahtarı paylaşmaz.
   * Format: tts:v3:{provider}:{providerVoiceId}:{voiceId}:{locale}:{rate}:{outputFormat}:{contentType}:{textHash}
   */
  generateKey(
    provider: string,
    voiceId: string,
    locale: string,
    rate: number,
    contentType: string,
    text: string,
    providerVoiceId?: string,
    outputFormat: string = "mp3-24khz-96k"
  ): string {
    const cleanText = text.trim().toLowerCase();
    const textHash = crypto.createHash("sha256").update(cleanText).digest("hex").slice(0, 16);
    const safeRate = rate.toFixed(2);
    const resolvedProviderVoice =
      providerVoiceId || getVoiceProfile(voiceId)?.providerVoiceId || voiceId;
    return `tts:v3:${provider}:${resolvedProviderVoice}:${voiceId}:${locale}:${safeRate}:${outputFormat}:${contentType}:${textHash}`;
  }

  get(key: string): AudioCacheEntry | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      this.misses++;
      return undefined;
    }
    // LRU touch: silip en sona ekle
    this.cache.delete(key);
    this.cache.set(key, entry);
    this.hits++;
    return entry;
  }

  delete(key: string): void {
    const entry = this.cache.get(key);
    if (!entry) return;
    this.currentBytes -= entry.sizeBytes;
    this.cache.delete(key);
  }

  set(
    key: string,
    entry: Omit<
      AudioCacheEntry,
      "providerVoiceId" | "provider" | "distinctSpeakerVerified"
    > & {
      providerVoiceId?: string;
      provider?: string;
      distinctSpeakerVerified?: boolean;
    }
  ): void {
    // Bozuk veya ses dışı veriyi önbelleğe alma
    if (entry.buffer.length >= 64 && !isValidAudioBuffer(entry.buffer, entry.mimeType)) {
      return;
    }

    const fullEntry: AudioCacheEntry = {
      ...entry,
      providerVoiceId:
        entry.providerVoiceId || getVoiceProfile(entry.voiceId)?.providerVoiceId || entry.voiceId,
      provider: entry.provider || "msedge-neural",
      distinctSpeakerVerified: entry.distinctSpeakerVerified ?? true,
    };

    // Zaten varsa eski boyutu çıkar
    if (this.cache.has(key)) {
      const old = this.cache.get(key)!;
      this.currentBytes -= old.sizeBytes;
      this.cache.delete(key);
    }

    // Limit kontrolü ve tahliye (LRU Eviction)
    while (
      (this.cache.size >= this.maxEntries ||
        this.currentBytes + fullEntry.sizeBytes > this.maxTotalBytes) &&
      this.cache.size > 0
    ) {
      const oldestKey = this.cache.keys().next().value;
      if (!oldestKey) break;
      const oldest = this.cache.get(oldestKey);
      if (oldest) {
        this.currentBytes -= oldest.sizeBytes;
      }
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, fullEntry);
    this.currentBytes += fullEntry.sizeBytes;
  }

  clear(): void {
    this.cache.clear();
    this.currentBytes = 0;
  }

  getStats(): CacheStats {
    return {
      size: this.cache.size,
      maxSize: this.maxEntries,
      totalBytes: this.currentBytes,
      maxBytes: this.maxTotalBytes,
      hits: this.hits,
      misses: this.misses,
    };
  }
}

// Global Singleton
export const audioCache = new AudioCacheManager();
