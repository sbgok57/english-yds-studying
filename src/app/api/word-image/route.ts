import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateVocabularyVisualPrompt, GeneratedImageStyle } from "@/lib/media/vocabulary-image-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanPromptValue(value: string, maxLength: number): string {
  return value.replace(/[<>\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function resolveExample(serializedExamples: string | undefined, fallback: string): string {
  if (!serializedExamples) return fallback;

  try {
    const parsed: unknown = JSON.parse(serializedExamples);
    if (Array.isArray(parsed)) {
      const firstExample = parsed.find((item) =>
        typeof item === "string" || (typeof item === "object" && item !== null),
      );
      if (typeof firstExample === "string") return cleanPromptValue(firstExample, 260);
      if (typeof firstExample === "object" && firstExample !== null) {
        const candidate = "en" in firstExample ? firstExample.en : "english" in firstExample ? firstExample.english : undefined;
        if (typeof candidate === "string") return cleanPromptValue(candidate, 260);
      }
    }
  } catch {
    return cleanPromptValue(serializedExamples, 260);
  }

  return fallback;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const wordId = searchParams.get("id");
  const english = cleanPromptValue(searchParams.get("word") || "", 90);
  const requestedMeaning = cleanPromptValue(searchParams.get("meaning") || "", 180);
  const requestedType = cleanPromptValue(searchParams.get("type") || "", 40);
  const requestedExample = cleanPromptValue(searchParams.get("example") || "", 260);
  const requestedStyle = searchParams.get("style");
  const style: GeneratedImageStyle = requestedStyle === "photorealistic" || requestedStyle === "cartoon"
    ? requestedStyle
    : "3d";

  if (!wordId && !english) {
    return NextResponse.json({ ok: false, code: "WORD_REQUIRED" }, { status: 400 });
  }

  try {
    const word = wordId
      ? await prisma.word.findUnique({ where: { id: wordId } })
      : await prisma.word.findFirst({
          where: { english: english },
        });

    const targetEnglish = word?.english || english || "vocabulary";
    const targetTurkish = word?.turkish || requestedMeaning || "meaning not provided";
    const targetType = word?.type || requestedType || "academic vocabulary";
    const targetExample = resolveExample(word?.examples, requestedExample);

    // Keep the provider URL server-side. The app renders through our own
    // same-origin image endpoint, which validates MIME/size and can be cached.
    const imageQuery = new URLSearchParams({
      word: targetEnglish,
      meaning: targetTurkish,
      type: targetType,
      style,
    });
    if (targetExample) imageQuery.set("example", targetExample);
    const imageUrl = `/api/word-image/image?${imageQuery.toString()}`;

    return NextResponse.json({
      imageUrl,
      source: "same-origin-image-proxy",
      word: targetEnglish,
      meaning: targetTurkish,
      style: `${style}-vocabulary-memory-v3`,
    });
  } catch (error) {
    console.error("[WORD_IMAGE_ROUTE_ERROR]:", error instanceof Error ? error.message : "Unknown image lookup error");
    return NextResponse.json({ ok: false, code: "WORD_IMAGE_UNAVAILABLE" }, { status: 503 });
  }
}
