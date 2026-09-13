import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim() || "";
    const type = searchParams.get("type") || undefined;
    const level = searchParams.get("level") || undefined;
    const source = searchParams.get("source") || undefined;
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(10, parseInt(searchParams.get("limit") || "50", 10)));
    const skip = (page - 1) * limit;

    const whereClause: any = {};

    if (q) {
      whereClause.OR = [
        { english: { contains: q } },
        { turkish: { contains: q } },
        { definitionEn: { contains: q } },
      ];
    }

    if (type && type !== "Hepsi") {
      whereClause.type = type;
    }

    if (level && level !== "Hepsi") {
      whereClause.level = { contains: level };
    }

    if (source && source !== "Hepsi") {
      whereClause.source = source;
    }

    const [words, total] = await Promise.all([
      prisma.word.findMany({
        where: whereClause,
        orderBy: { english: "asc" },
        skip,
        take: limit,
      }),
      prisma.word.count({ where: whereClause }),
    ]);

    const formatted = words.map((w) => ({
      id: w.id,
      english: w.english,
      turkish: w.turkish,
      definitionEn: w.definitionEn,
      examples: (() => {
        try {
          return JSON.parse(w.examples || "[]");
        } catch {
          return [];
        }
      })(),
      synonyms: (() => {
        try {
          return JSON.parse(w.synonyms || "[]");
        } catch {
          return [];
        }
      })(),
      level: w.level,
      type: w.type,
      imageUrl: w.imageUrl,
    }));

    // Hem dizi hem sayfalama uyumluluğu için JSON dön
    return NextResponse.json({
      words: formatted,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    });
  } catch (error) {
    console.error("Words fetch error:", error);
    return NextResponse.json({
      words: [],
      total: 0,
      page: 1,
      limit: 50,
      totalPages: 1,
      error: "Kelimeler yüklenemedi",
    });
  }
}
