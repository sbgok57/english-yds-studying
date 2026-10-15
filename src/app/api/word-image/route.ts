import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TYPE_EMOJIS: Record<string, string> = {
  fiil: "⚡",
  isim: "📦",
  sıfat: "🎨",
  zarf: "🚀",
  "phrasal verb": "🔗",
  genel: "💡",
};

// Generates high quality 3D isometric prompt for vocabulary visual memory
function generate3dVisualPrompt(english: string, turkish: string, type: string): string {
  const cleanEn = english.replace(/[^a-zA-Z\s-]/g, "").trim();
  const cleanTr = turkish.replace(/["']/g, "").trim();
  return `3D isometric digital render of ${cleanEn}, concept representing ${cleanTr}, cute blender 3d style, vibrant colors, soft studio lighting, high detail, clean composition, educational flashcard visual, octane render`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const wordId = searchParams.get("id");
  const english = searchParams.get("word")?.trim();

  if (!wordId && !english) {
    return NextResponse.json(
      { emoji: "💡", source: "fallback-default" },
      { status: 200 }
    );
  }

  try {
    const word = wordId
      ? await prisma.word.findUnique({ where: { id: wordId } })
      : await prisma.word.findFirst({
          where: { english: english },
        });

    const targetEnglish = word?.english || english || "vocabulary";
    const targetTurkish = word?.turkish || "kelime";
    const targetType = word?.type || "genel";

    // 1. Katman: DB'de kayıtlı doğrulanmış 3D görsel
    if (word?.imageUrl && word.imageUrl.startsWith("http")) {
      return NextResponse.json({
        imageUrl: word.imageUrl,
        source: "db",
        word: targetEnglish,
        meaning: targetTurkish,
      });
    }

    // 2. Katman: Yapay Zeka 3D Görsel Hafıza Motoru (Pollinations 3D Blender Sanatı)
    const prompt = generate3dVisualPrompt(targetEnglish, targetTurkish, targetType);
    const hash = Array.from(targetEnglish).reduce((acc, char) => acc + char.charCodeAt(0), 42);
    const ai3dImageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=512&height=512&nologo=true&seed=${hash}`;

    // PERF: Gelecek tıklamalarda sıfır gecikme için DB'ye arka planda kaydet
    if (word?.id) {
      prisma.word
        .update({
          where: { id: word.id },
          data: { imageUrl: ai3dImageUrl },
        })
        .catch((updateErr) => {
          console.warn("[WORD_IMAGE_CACHE_WARN] DB image cache skipped:", updateErr);
        });
    }

    return NextResponse.json({
      imageUrl: ai3dImageUrl,
      source: "ai-3d-render",
      prompt,
      word: targetEnglish,
      meaning: targetTurkish,
      emoji: TYPE_EMOJIS[targetType.toLowerCase()] || "💡",
    });
  } catch (error) {
    console.error("[WORD_IMAGE_ROUTE_ERROR]:", error);
    // SAFETY: Never crash, return clean fallback
    const targetEnglish = english || "vocabulary";
    return NextResponse.json({
      imageUrl: `https://image.pollinations.ai/prompt/3D%20cute%20isometric%20book%20render%20for%20learning%20${encodeURIComponent(
        targetEnglish
      )}?width=512&height=512&nologo=true`,
      emoji: "💡",
      source: "error-fallback",
    });
  }
}
