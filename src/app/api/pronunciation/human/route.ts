import { NextRequest, NextResponse } from "next/server";
import { findHumanWordRecording, type HumanRecordingAccent } from "@/lib/tts/wiktionary-human-audio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ACCENTS = new Set<HumanRecordingAccent>(["en-GB", "en-US", "en-AU"]);

/** Human-recorded word lookup only; it does not synthesize or clone a voice. */
export async function GET(request: NextRequest) {
  const word = request.nextUrl.searchParams.get("word") || "";
  const accent = request.nextUrl.searchParams.get("accent") || "en-US";

  if (!ALLOWED_ACCENTS.has(accent as HumanRecordingAccent)) {
    return NextResponse.json({ ok: false, code: "UNSUPPORTED_ACCENT" }, { status: 400 });
  }

  try {
    const recording = await findHumanWordRecording(word, accent as HumanRecordingAccent);
    if (!recording) {
      return NextResponse.json(
        { ok: false, code: "HUMAN_RECORDING_NOT_FOUND", message: "Bu kelime ve aksan için lisansı doğrulanmış insan kaydı bulunamadı." },
        { status: 404, headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
      );
    }
    const mediaResponse = await fetch(recording.audioUrl, {
      headers: { "User-Agent": "DilMaster/1.0 (https://dil-master.vercel.app; educational pronunciation lookup)" },
      signal: AbortSignal.timeout(7000),
    });
    if (!mediaResponse.ok || !mediaResponse.body) {
      return NextResponse.json({ ok: false, code: "HUMAN_AUDIO_UNAVAILABLE" }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const upstreamType = mediaResponse.headers.get("content-type")?.split(";")[0].trim().toLowerCase() || "";
    const contentType = upstreamType === "application/ogg" ? "audio/ogg" : upstreamType;
    if (!["audio/ogg", "audio/mpeg", "audio/wav", "audio/flac"].includes(contentType)) {
      return NextResponse.json({ ok: false, code: "UNSUPPORTED_HUMAN_AUDIO_FORMAT" }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const announcedSize = Number(mediaResponse.headers.get("content-length") || 0);
    const maxBytes = 4 * 1024 * 1024;
    if (announcedSize > maxBytes) {
      return NextResponse.json({ ok: false, code: "HUMAN_AUDIO_TOO_LARGE" }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const reader = mediaResponse.body.getReader();
    const chunks: Uint8Array[] = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        return NextResponse.json({ ok: false, code: "HUMAN_AUDIO_TOO_LARGE" }, { status: 502, headers: { "Cache-Control": "no-store" } });
      }
      chunks.push(value);
    }
    if (totalBytes === 0) {
      return NextResponse.json({ ok: false, code: "EMPTY_HUMAN_AUDIO" }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const audio = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
      audio.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return new Response(audio, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(totalBytes),
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "X-Audio-Source": "wikimedia-human-recording",
        "X-Audio-Accent": recording.accent,
        "X-Audio-Speaker-Gender": "unknown",
        "X-Audio-Creator": encodeURIComponent(recording.creator),
        "X-Audio-License": encodeURIComponent(recording.licenseName),
        "X-Audio-License-Url": recording.licenseUrl,
        "X-Audio-File-Url": recording.filePageUrl,
      },
    });
  } catch (error) {
    // Keep the error class for server diagnosis, but never expose upstream
    // details or URLs to the browser response.
    console.warn("[HUMAN_PRONUNCIATION_LOOKUP_FAILED]", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { ok: false, code: "HUMAN_RECORDING_LOOKUP_UNAVAILABLE", message: "Ücretsiz insan kaydı arşivine şu anda ulaşılamıyor." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
