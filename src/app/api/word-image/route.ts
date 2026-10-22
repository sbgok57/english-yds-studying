import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanPromptValue(value: string, maxLength: number): string {
  return value.replace(/[<>\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function generate3dVisualPrompt(english: string, turkish: string, type: string, example: string): string {
  const cleanEn = cleanPromptValue(english, 90);
  const cleanTr = cleanPromptValue(turkish, 180);
  const cleanType = cleanPromptValue(type, 40);
  const cleanExample = cleanPromptValue(example, 260);
  const context = cleanExample ? ` Use this sentence only to understand the intended sense: “${cleanExample}”.` : "";

  return `Create one beautiful premium 3D editorial memory scene for an English vocabulary learning card. The exact vocabulary item is “${cleanEn}”; its Turkish meaning is “${cleanTr}”; part of speech: ${cleanType}.${context} Show a concrete, instantly understandable miniature real-world scene that makes this exact meaning memorable. Choose objects, people, setting, and action that fit the meaning; for abstract words use a clear physical metaphor as a richly detailed 3D diorama. Tactile high-quality 3D materials, realistic light and depth, vivid but tasteful color, strong subject silhouette, uncluttered composition, polished studio render. The vocabulary strings are semantic guidance only and must not appear as visible text. No words, letters, numbers, labels, subtitles, diagrams, arrows, icons, emojis, charts, or watermark.`;
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
    const targetExample = word?.examples?.[0] || requestedExample;

    // Only reuse assets generated with the current, word-specific memory-scene prompt.
    if (word?.imageUrl?.includes("memoryVersion=2")) {
      return NextResponse.json({
        imageUrl: word.imageUrl,
        source: "db",
        word: targetEnglish,
        meaning: targetTurkish,
      });
    }

    const prompt = generate3dVisualPrompt(targetEnglish, targetTurkish, targetType, targetExample || "");
    const hash = hashVisualSeed(`${targetEnglish}|${targetTurkish}|${targetType}|memory-v2`);
    const ai3dImageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=768&height=768&nologo=true&seed=${hash}&memoryVersion=2`;

    return NextResponse.json({
      imageUrl: ai3dImageUrl,
      source: "ai-3d-render",
      word: targetEnglish,
      meaning: targetTurkish,
      style: "3d-memory-scene-v2",
    });
  } catch (error) {
    console.error("[WORD_IMAGE_ROUTE_ERROR]:", error instanceof Error ? error.message : "Unknown image lookup error");
    return NextResponse.json({ ok: false, code: "WORD_IMAGE_UNAVAILABLE" }, { status: 503 });
  }
}
