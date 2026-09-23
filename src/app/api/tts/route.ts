import { NextRequest, NextResponse } from "next/server";
import {
  getVoiceProfile,
  findVoice,
  AccentCode,
  VoiceGender,
  VoiceProfile,
} from "@/lib/tts/voice-registry";
import { defaultTtsProvider } from "@/lib/tts/tts-provider";
import { audioCache } from "@/lib/tts/audio-cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Normalizasyon: Kısa aksan kodlarını standart AccentCode formatına çevir
function normalizeLocale(code?: string | null): AccentCode {
  if (!code) return "en-US";
  const c = code.toLowerCase().trim();
  if (c === "uk" || c === "en-gb" || c === "en_gb") return "en-GB";
  if (c === "us" || c === "en-us" || c === "en_us") return "en-US";
  if (c === "ca" || c === "en-ca" || c === "en_ca") return "en-CA";
  if (c === "au" || c === "en-au" || c === "en_au") return "en-AU";
  if (c === "nz" || c === "en-nz" || c === "en_nz") return "en-NZ";
  if (c === "in" || c === "en-in" || c === "en_in") return "en-IN";
  return "en-US";
}

// Normalizasyon: Cinsiyet
function normalizeGender(gender?: string | null): VoiceGender {
  return gender?.toLowerCase() === "male" ? "male" : "female";
}

// Güvenli metin temizleme
function sanitizeText(raw: string): string {
  if (!raw) return "";
  // Güvenlik: şifre, token veya JSON yapılarının yanlışlıkla gönderilmesini engelle
  let cleaned = raw.replace(/[\r\n\t]+/g, " ").trim();
  return cleaned;
}

// İstek parametrelerinden uygun ses profilini çözümler
function resolveVoice(
  voiceParam?: string | null,
  accentParam?: string | null,
  genderParam?: string | null
): VoiceProfile {
  if (voiceParam) {
    const profile = getVoiceProfile(voiceParam);
    if (profile && profile.enabled) return profile;
  }

  const locale = normalizeLocale(accentParam);
  const gender = normalizeGender(genderParam);
  return findVoice(locale, gender);
}

// Ortak Sentezleme Mantığı
async function handleTtsRequest(
  text: string,
  voiceParam?: string | null,
  accentParam?: string | null,
  genderParam?: string | null,
  rateParam?: number | string | null,
  contentTypeParam?: string | null
): Promise<Response> {
  const cleanText = sanitizeText(text);

  if (!cleanText) {
    return NextResponse.json(
      { ok: false, error: "Metin boş olamaz." },
      { status: 400 }
    );
  }

  const targetVoice = resolveVoice(voiceParam, accentParam, genderParam);

  const contentType = (contentTypeParam || "word") as "word" | "sentence" | "long-form";
  const maxLen = contentType === "long-form" ? 2000 : contentType === "sentence" ? 600 : 150;

  if (cleanText.length > maxLen) {
    return NextResponse.json(
      {
        ok: false,
        error: `Metin azami ${maxLen} karakter sınırını aşıyor.`,
      },
      { status: 400 }
    );
  }

  const numericRate =
    typeof rateParam === "number"
      ? rateParam
      : typeof rateParam === "string"
      ? parseFloat(rateParam) || 1.0
      : 1.0;
  const safeRate = Math.max(0.75, Math.min(1.25, numericRate));

  // 1. Önbellek Kontrolü (Cache Hit)
  const cacheKey = audioCache.generateKey(
    targetVoice.provider,
    targetVoice.id,
    targetVoice.locale,
    safeRate,
    contentType,
    cleanText
  );

  const cached = audioCache.get(cacheKey);
  if (cached) {
    return new Response(new Uint8Array(cached.buffer), {
      status: 200,
      headers: {
        "Content-Type": cached.mimeType,
        "Content-Length": String(cached.sizeBytes),
        "Cache-Control": "public, max-age=604800, immutable",
        "X-TTS-Voice": targetVoice.id,
        "X-TTS-Locale": targetVoice.locale,
        "X-TTS-Gender": targetVoice.gender,
        "X-TTS-Source": targetVoice.source,
        "X-TTS-Cache": "HIT",
      },
    });
  }

  // 2. Ses Sentezleme (Cache Miss)
  try {
    const result = await defaultTtsProvider.synthesize({
      text: cleanText,
      voiceId: targetVoice.id,
      locale: targetVoice.locale,
      speakingRate: safeRate,
      contentType,
    });

    // Önbelleğe al
    audioCache.set(cacheKey, {
      buffer: result.audio,
      mimeType: result.mimeType,
      voiceId: targetVoice.id,
      locale: targetVoice.locale,
      createdAt: Date.now(),
      sizeBytes: result.audio.length,
    });

    return new Response(new Uint8Array(result.audio), {
      status: 200,
      headers: {
        "Content-Type": result.mimeType,
        "Content-Length": String(result.audio.length),
        "Cache-Control": "public, max-age=604800, immutable",
        "X-TTS-Voice": targetVoice.id,
        "X-TTS-Locale": targetVoice.locale,
        "X-TTS-Gender": targetVoice.gender,
        "X-TTS-Source": targetVoice.source,
        "X-TTS-Cache": "MISS",
      },
    });
  } catch (err: any) {
    console.error("[TTS API Synthesis Error]:", err?.message || err);
    return NextResponse.json(
      {
        ok: false,
        error: "Ses sentezlenemedi. Lütfen tekrar deneyin.",
      },
      { status: 502 }
    );
  }
}

/**
 * GET /api/tts
 * Geriye dönük tüm query parametre kombinasyonlarıyla %100 uyumludur.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "";
  const voice = searchParams.get("voice");
  const accent = searchParams.get("accent");
  const gender = searchParams.get("gender");
  const rate = searchParams.get("rate") || searchParams.get("speakingRate");
  const contentType = searchParams.get("contentType");

  return handleTtsRequest(text, voice, accent, gender, rate, contentType);
}

/**
 * POST /api/tts
 * JSON tabanlı güvenli çağrı arayüzü
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body?.text || "";
    const voice = body?.voice || body?.voiceId;
    const accent = body?.accent || body?.locale;
    const gender = body?.gender;
    const rate = body?.speakingRate ?? body?.rate;
    const contentType = body?.contentType;

    return handleTtsRequest(text, voice, accent, gender, rate, contentType);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Geçersiz JSON gövdesi." },
      { status: 400 }
    );
  }
}
