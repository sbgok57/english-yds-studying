import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const words = await prisma.word.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    const formatted = words.map((w) => ({
      id: w.id,
      english: w.english,
      turkish: w.turkish,
      definitionEn: w.definitionEn,
      examples: JSON.parse(w.examples || "[]"),
      synonyms: JSON.parse(w.synonyms || "[]"),
      level: w.level,
      type: w.type,
      imageUrl: w.imageUrl,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Words fetch error:", error);
    return NextResponse.json([]);
  }
}
