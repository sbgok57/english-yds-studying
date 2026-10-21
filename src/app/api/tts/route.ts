import { NextRequest, NextResponse } from "next/server";
import {
  getVoiceProfile,
  findVoice,
  findTurkishNarratorVoice,
  AccentCode,
  VoiceLocale,
  ContentLanguage,
  VoiceGender,
  VoiceProfile,
} from "@/lib/tts/voice-registry";
import { defaultTtsProvider } from "@/lib/tts/tts-provider";
import { audioCache } from "@/lib/tts/audio-cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Normalizasyon: Kısa aksan/dil kodlarını standart VoiceLocale formatına çevir
function normalizeLocale(code?: string | null, contentLanguage?: string | null): VoiceLocale {
  if (contentLanguage?.toLowerCase() === "tr") return "tr-TR";
  if (!code) return "en-US";
  const c = code.toLowerCase().trim();
  if (c === "tr" || c === "tr-tr" || c === "tr_tr" || c === "turkish") return "tr-TR";
  if (c === "uk" || c === "en-gb" || c === "en_gb") return "en-GB";
  if (c === "us" || c === "en-us" || c === "en_us") return "en-US";
  if (c === "ca" || c === "en-ca" || c === "en_ca") return "en-CA";
  if (c === "au" || c === "en-au" || c === "en_au") return "en-AU";
  if (c === "nz" || c === "en-nz" || c === "en_nz") return "en-NZ";
  if (
    c === "sc" ||
    c === "sct" ||
    c === "scot" ||
    c === "scotland" ||
    c === "en-gb-scotland" ||
    c === "en-scot" ||
    c === "en_scot"
  )
    return "en-GB-scotland";
  if (c === "in" || c === "en-in" || c === "en_in") return "en-IN";
  return "en-US";
}

// Normalizasyon: Cinsiyet veya konuşmacı adı (emel / ahmet)
function normalizeGender(gender?: string | null, speaker?: string | null): VoiceGender {
  const s = speaker?.toLowerCase().trim();
  if (s === "ahmet" || s === "male") return "male";
  if (s === "emel" || s === "female") return "female";
  return gender?.toLowerCase() === "male" ? "male" : "female";
}

// Güvenli metin temizleme
function sanitizeText(raw: string): string {
  if (!raw) return "";
  return raw.replace(/[\r\n\t]+/g, " ").trim();
}

// İstek parametrelerinden uygun ses profilini çözümler
function resolveVoice(
  voiceParam?: string | null,
  accentParam?: string | null,
  genderParam?: string | null,
  contentLanguageParam?: string | null,
  speakerParam?: string | null
): VoiceProfile | null {
  if (voiceParam) {
    const profile = getVoiceProfile(voiceParam);
    if (!profile || !profile.enabled) {
      return null;
    }
    return profile;
  }

  const locale = normalizeLocale(accentParam, contentLanguageParam);
  const gender = normalizeGender(genderParam, speakerParam);

  if (locale === "tr-TR" || contentLanguageParam?.toLowerCase() === "tr" || speakerParam) {
    return findTurkishNarratorVoice(gender);
  }

  return findVoice(locale as AccentCode, gender);
}

// Ortak Sentezleme Mantığı
async function handleTtsRequest(
  text: string,
  voiceParam?: string | null,
  accentParam?: string | null,
  genderParam?: string | null,
  rateParam?: number | string | null,
  contentTypeParam?: string | null,
  contentLanguageParam?: string | null,
  speakerParam?: string | null
): Promise<Response> {
  const cleanText = sanitizeText(text);

  if (!cleanText) {
    return NextResponse.json(
      { ok: false, code: "INVALID_TEXT", error: "Metin boş olamaz." },
      { status: 400 }
    );
  }

  const targetVoice = resolveVoice(
    voiceParam,
    accentParam,
    genderParam,
    contentLanguageParam,
    speakerParam
  );

  if (!targetVoice) {
    return NextResponse.json(
      {
        ok: false,
        code: "VOICE_NOT_AVAILABLE",
        error: `Belirtilen ses profili bulunamadı veya devre dışı: ${voiceParam}`,
      },
      { status: 400 }
    );
  }

  const contentType = (contentTypeParam || "word") as "word" | "sentence" | "long-form";
  const maxLen = contentType === "long-form" ? 2500 : contentType === "sentence" ? 600 : 150;

  if (cleanText.length > maxLen) {
    return NextResponse.json(
      {
        ok: false,
        code: "TEXT_TOO_LONG",
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

  // 1. Önbellek Kontrolü (Cache Hit — providerVoiceId dahil izole anahtar)
  const cacheKey = audioCache.generateKey(
    targetVoice.provider,
    targetVoice.id,
    targetVoice.locale,
    safeRate,
    contentType,
    cleanText,
    targetVoice.providerVoiceId,
    "mp3-24khz-96k"
  );

  const cached = audioCache.get(cacheKey);
  if (cached) {
    return new Response(new Uint8Array(cached.buffer), {
      status: 200,
      headers: {
        "Content-Type": cached.mimeType,
        "Content-Length": String(cached.sizeBytes),
        "Cache-Control": "public, max-age=604800, immutable",
        "X-TTS-Provider": cached.provider,
        "X-TTS-Provider-Voice": cached.providerVoiceId,
        "X-TTS-Voice": targetVoice.id,
        "X-TTS-Locale": targetVoice.locale,
        "X-TTS-Language": targetVoice.contentLanguage,
        "X-TTS-Gender": targetVoice.gender,
        "X-TTS-Distinct-Speaker": String(cached.distinctSpeakerVerified),
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
      contentLanguage: targetVoice.contentLanguage as ContentLanguage,
      gender: targetVoice.gender,
      speakingRate: safeRate,
      contentType,
    });

    // Önbelleğe al
    audioCache.set(cacheKey, {
      buffer: result.audio,
      mimeType: result.mimeType,
      voiceId: targetVoice.id,
      providerVoiceId: result.providerVoiceId,
      provider: result.provider,
      locale: targetVoice.locale,
      distinctSpeakerVerified: result.distinctSpeakerVerified,
      createdAt: Date.now(),
      sizeBytes: result.audio.length,
    });

    return new Response(new Uint8Array(result.audio), {
      status: 200,
      headers: {
        "Content-Type": result.mimeType,
        "Content-Length": String(result.audio.length),
        "Cache-Control": "public, max-age=604800, immutable",
        "X-TTS-Provider": result.provider,
        "X-TTS-Provider-Voice": result.providerVoiceId,
        "X-TTS-Voice": targetVoice.id,
        "X-TTS-Locale": targetVoice.locale,
        "X-TTS-Language": targetVoice.contentLanguage,
        "X-TTS-Gender": targetVoice.gender,
        "X-TTS-Distinct-Speaker": String(result.distinctSpeakerVerified),
        "X-TTS-Source": targetVoice.source,
        "X-TTS-Cache": "MISS",
      },
    });
  } catch (err: any) {
    console.error("[TTS API Synthesis Error]:", err?.message || err);
    // // SAFETY: Never return HTTP 200 JSON when callers expect audio/mpeg binary data.
    return NextResponse.json(
      {
        ok: false,
        code: "PROVIDER_ERROR",
        fallbackToClient: true,
        message: "Bulut ses motoru geçici olarak meşgul, istemci yerel ses motoru devreye girdi.",
        error: err?.message || "Synthesis provider unavailable",
      },
      { status: 503 }
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
  const voice = searchParams.get("voice") || searchParams.get("voiceId");
  const accent = searchParams.get("accent") || searchParams.get("locale");
  const gender = searchParams.get("gender");
  const rate = searchParams.get("rate") || searchParams.get("speakingRate");
  const contentType = searchParams.get("contentType");
  const contentLanguage = searchParams.get("contentLanguage") || searchParams.get("lang");
  const speaker = searchParams.get("speaker");

  return handleTtsRequest(
    text,
    voice,
    accent,
    gender,
    rate,
    contentType,
    contentLanguage,
    speaker
  );
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
    const contentLanguage = body?.contentLanguage || body?.lang;
    const speaker = body?.speaker;

    return handleTtsRequest(
      text,
      voice,
      accent,
      gender,
      rate,
      contentType,
      contentLanguage,
      speaker
    );
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_JSON", error: "Geçersiz JSON gövdesi." },
      { status: 400 }
    );
  }
}
