import { NextRequest, NextResponse } from "next/server";
import { generateVocabularyVisualPrompt, GeneratedImageStyle } from "@/lib/media/vocabulary-image-prompt";
import { createVisualUnavailableResponse } from "@/lib/media/visual-error";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

function clean(value: string | null, maxLength: number, fallback = ""): string {
  return (value || fallback).replace(/[<>\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function stableSeed(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
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
  const apiKey = process.env.POLLINATIONS_API_KEY?.trim();
  if (!apiKey) {
    return createVisualUnavailableResponse({
      code: "IMAGE_PROVIDER_NOT_CONFIGURED",
      message: "AI görsel üretimi henüz yapılandırılmadı. Sunucuya POLLINATIONS_API_KEY eklendiğinde bu görsel oluşturulabilir.",
      retryable: false,
    });
  }

  const imageUrl = new URL(`https://gen.pollinations.ai/image/${encodeURIComponent(prompt)}`);
  imageUrl.searchParams.set("model", "black-forest-labs/flux.1-schnell");
  imageUrl.searchParams.set("width", "768");
  imageUrl.searchParams.set("height", "768");
  imageUrl.searchParams.set("nologo", "true");
  imageUrl.searchParams.set("seed", String(stableSeed(`${word}|${meaning}|${style}`)));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const upstream = await fetch(imageUrl, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        Accept: "image/avif,image/webp,image/png,image/jpeg",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const contentType = upstream.headers.get("content-type")?.split(";")[0].toLowerCase() || "";
    const contentLength = Number(upstream.headers.get("content-length") || 0);
    if (!upstream.ok || !["image/jpeg", "image/png", "image/webp", "image/avif"].includes(contentType) || contentLength > MAX_IMAGE_BYTES) {
      return createVisualUnavailableResponse({ status: 502 });
    }

    const bytes = await upstream.arrayBuffer();
    if (!bytes.byteLength || bytes.byteLength > MAX_IMAGE_BYTES) {
      return createVisualUnavailableResponse({ status: 502 });
    }
    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(bytes.byteLength),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return createVisualUnavailableResponse();
  } finally {
    clearTimeout(timeout);
  }
}
