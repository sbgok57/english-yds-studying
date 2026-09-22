import crypto from "crypto";

export interface AudioCacheEntry {
  buffer: Buffer;
  mimeType: string;
  voiceId: string;
  locale: string;
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

class AudioCacheManager {
  private cache = new Map<string, AudioCacheEntry>();
  private readonly maxEntries = 500;
  private readonly maxTotalBytes = 50 * 1024 * 1024; // 50 MB
  private currentBytes = 0;
  private hits = 0;
  private misses = 0;

  /**
   * Deterministik ve benzersiz cache anahtarı oluşturur
   * Format: tts:v2:{provider}:{voiceId}:{locale}:{rate}:{contentType}:{textHash}
   */
  generateKey(
    provider: string,
    voiceId: string,
    locale: string,
    rate: number,
    contentType: string,
    text: string
  ): string {
    const cleanText = text.trim().toLowerCase();
    const textHash = crypto.createHash("sha256").update(cleanText).digest("hex").slice(0, 16);
    const safeRate = rate.toFixed(2);
    return `tts:v2:${provider}:${voiceId}:${locale}:${safeRate}:${contentType}:${textHash}`;
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

  set(key: string, entry: AudioCacheEntry): void {
    // Zaten varsa eski boyutu çıkar
    if (this.cache.has(key)) {
      const old = this.cache.get(key)!;
      this.currentBytes -= old.sizeBytes;
      this.cache.delete(key);
    }

    // Limit kontrolü ve tahliye (LRU Eviction)
    while (
      (this.cache.size >= this.maxEntries || this.currentBytes + entry.sizeBytes > this.maxTotalBytes) &&
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

    this.cache.set(key, entry);
    this.currentBytes += entry.sizeBytes;
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
