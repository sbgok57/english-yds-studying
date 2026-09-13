import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GRAMMAR_CURRICULUM } from "@/lib/grammar-curriculum";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();
    if (q.length < 2) {
      return NextResponse.json({ words: [], topics: [], exams: [] });
    }

    const [words, exams] = await Promise.all([
      prisma.word.findMany({
        where: {
          OR: [
            { english: { contains: q } },
            { turkish: { contains: q } },
          ],
        },
        take: 6,
        select: { id: true, english: true, turkish: true, level: true, type: true },
      }),
      prisma.exam.findMany({
        where: {
          title: { contains: q },
        },
        take: 4,
        select: { id: true, title: true, isReal: true },
      }),
    ]);

    const topics = GRAMMAR_CURRICULUM
      .filter((t) => t.title.toLowerCase().includes(q) || t.slug.includes(q))
      .slice(0, 5)
      .map((t) => ({ slug: t.slug, title: t.title, emoji: t.emoji }));

    return NextResponse.json({ words, topics, exams });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ words: [], topics: [], exams: [] });
  }
}
