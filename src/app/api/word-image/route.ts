import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const TYPE_EMOJIS: Record<string, string> = {
  fiil: "⚡",
  isim: "📦",
  sıfat: "🎨",
  zarf: "🚀",
  "phrasal verb": "🔗",
  genel: "💡",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const wordId = searchParams.get("id");
  const english = searchParams.get("word");

  if (!wordId && !english) {
    return NextResponse.json(
      { emoji: "💡", source: "fallback-default" },
      { status: 200 }
    );
  }

  try {
    const word = wordId
      ? await prisma.word.findUnique({ where: { id: wordId } })
      : await prisma.word.findFirst({ where: { english: english || "" } });

    if (!word) {
      return NextResponse.json({
        emoji: "💡",
        source: "fallback-notfound",
      });
    }

    // 1. Katman: DB'de kayıtlı görsel
    if (word.imageUrl) {
      return NextResponse.json({
        imageUrl: word.imageUrl,
        source: "db",
      });
    }

    // 2. Katman: Unsplash API (Eğer Access Key tanımlıysa bir kere çek ve DB'ye kaydet)
    if (process.env.UNSPLASH_ACCESS_KEY) {
      try {
        const unsplashRes = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            word.english
          )}&per_page=1&orientation=squarish`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        if (unsplashRes.ok) {
          const unsplashData = await unsplashRes.json();
          const foundUrl = unsplashData.results?.[0]?.urls?.small;
          if (foundUrl) {
            await prisma.word.update({
              where: { id: word.id },
              data: { imageUrl: foundUrl },
            });
            return NextResponse.json({
              imageUrl: foundUrl,
              source: "unsplash",
            });
          }
        }
      } catch (apiErr) {
        console.warn("Unsplash fetch skipped:", apiErr);
      }
    }

    // 3. Katman: Türe göre garantili emoji (asla boş kalmaz!)
    const emoji = TYPE_EMOJIS[word.type.toLowerCase()] || "💡";
    return NextResponse.json({
      emoji,
      type: word.type,
      source: "fallback-emoji",
    });
  } catch (error) {
    console.error("Word image error:", error);
    return NextResponse.json({
      emoji: "💡",
      source: "error-fallback",
    });
  }
}
