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

function hashVisualSeed(value: string): number {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.codePointAt(0) || 0;
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
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

    // Reuse a stored 3D image only when its style, sense and current prompt version match.
    if (style === "3d" && word?.imageUrl?.includes("memoryVersion=3") && word.imageUrl.includes("style=3d")) {
      return NextResponse.json({
        imageUrl: word.imageUrl,
        source: "db",
        word: targetEnglish,
        meaning: targetTurkish,
      });
    }

    const prompt = generateVocabularyVisualPrompt(targetEnglish, targetTurkish, targetType, targetExample || "", style);
    const hash = hashVisualSeed(`${targetEnglish}|${targetTurkish}|${targetType}|${targetExample}|${style}|memory-v3`);
    const ai3dImageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=768&height=768&nologo=true&seed=${hash}&style=${style}&memoryVersion=3`;

    return NextResponse.json({
      imageUrl: ai3dImageUrl,
      source: "ai-3d-render",
      word: targetEnglish,
      meaning: targetTurkish,
      style: `${style}-vocabulary-memory-v3`,
    });
  } catch (error) {
    console.error("[WORD_IMAGE_ROUTE_ERROR]:", error instanceof Error ? error.message : "Unknown image lookup error");
    return NextResponse.json({ ok: false, code: "WORD_IMAGE_UNAVAILABLE" }, { status: 503 });
  }
}
