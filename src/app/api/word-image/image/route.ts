import { NextRequest, NextResponse } from "next/server";
import { generateVocabularyVisualPrompt, GeneratedImageStyle } from "@/lib/media/vocabulary-image-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

function clean(value: string | null, maxLength: number, fallback = ""): string {
  return (value || fallback).replace(/[<>\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function xml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function stableSeed(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function fallbackMemoryCard(word: string, meaning: string, style: GeneratedImageStyle): string {
  const safeWord = xml(word || "Vocabulary");
  const safeMeaning = xml(meaning || "Anlam kartı");
  const accent = style === "cartoon" ? "#fb7185" : style === "photorealistic" ? "#38bdf8" : "#a78bfa";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" role="img" aria-label="${safeWord} ${safeMeaning}">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0f172a"/><stop offset=".55" stop-color="#312e81"/><stop offset="1" stop-color="#701a75"/></linearGradient><radialGradient id="orb"><stop stop-color="${accent}" stop-opacity=".95"/><stop offset="1" stop-color="${accent}" stop-opacity=".06"/></radialGradient></defs>
    <rect width="960" height="720" rx="48" fill="url(#bg)"/><circle cx="740" cy="205" r="230" fill="url(#orb)"/><circle cx="190" cy="610" r="180" fill="url(#orb)" opacity=".45"/>
    <path d="M580 230 720 310 720 470 580 550 440 470 440 310Z" fill="#fff" fill-opacity=".12" stroke="#fff" stroke-opacity=".55" stroke-width="5"/><path d="m440 310 140 80 140-80M580 390v160" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="4"/>
    <text x="72" y="125" fill="#a5f3fc" font-family="Arial,sans-serif" font-size="30" font-weight="700">DİL MASTER · GÖRSEL HAFIZA</text><text x="72" y="525" fill="#fff" font-family="Arial,sans-serif" font-size="64" font-weight="800">${safeWord}</text><text x="72" y="600" fill="#e0e7ff" font-family="Arial,sans-serif" font-size="38">${safeMeaning}</text>
    <text x="72" y="665" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="22">Dış görsel servisi geçici olarak yanıt vermiyor · çevrimdışı anlam kartı</text></svg>`;
}

function fallbackResponse(word: string, meaning: string, style: GeneratedImageStyle) {
  return new NextResponse(fallbackMemoryCard(word, meaning, style), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
      "X-Visual-Fallback": "local-memory-card",
    },
  });
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const word = clean(params.get("word"), 90, "Vocabulary");
  const meaning = clean(params.get("meaning"), 180, "Meaning card");
  const type = clean(params.get("type"), 40, "academic vocabulary");
  const example = clean(params.get("example"), 260);
  const styleValue = params.get("style");
  const style: GeneratedImageStyle = styleValue === "photorealistic" || styleValue === "cartoon" ? styleValue : "3d";
  const prompt = generateVocabularyVisualPrompt(word, meaning, type, example, style);
  const imageUrl = new URL(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`);
  imageUrl.searchParams.set("width", "768");
  imageUrl.searchParams.set("height", "768");
  imageUrl.searchParams.set("nologo", "true");
  imageUrl.searchParams.set("seed", String(stableSeed(`${word}|${meaning}|${style}`)));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const upstream = await fetch(imageUrl, {
      signal: controller.signal,
      headers: { Accept: "image/avif,image/webp,image/png,image/jpeg" },
      next: { revalidate: 86400 },
    });
    const contentType = upstream.headers.get("content-type")?.split(";")[0].toLowerCase() || "";
    const contentLength = Number(upstream.headers.get("content-length") || 0);
    if (!upstream.ok || !["image/jpeg", "image/png", "image/webp", "image/avif"].includes(contentType) || contentLength > MAX_IMAGE_BYTES) {
      return fallbackResponse(word, meaning, style);
    }

    const bytes = await upstream.arrayBuffer();
    if (!bytes.byteLength || bytes.byteLength > MAX_IMAGE_BYTES) return fallbackResponse(word, meaning, style);
    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(bytes.byteLength),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "X-Content-Type-Options": "nosniff",
        "X-Visual-Fallback": "none",
      },
    });
  } catch {
    return fallbackResponse(word, meaning, style);
  } finally {
    clearTimeout(timeout);
  }
}
