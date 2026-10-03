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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const english = (body.english || body.word || "").trim();
    const turkish = (body.turkish || body.tr || "").trim();

    if (!english) {
      return NextResponse.json({ error: "İngilizce kelime zorunludur." }, { status: 400 });
    }

    const { enrichWordWithAI } = await import("@/lib/word-enricher");
    const enriched = await enrichWordWithAI(english, turkish, body.context);

    const examplesFormatted = enriched.examples.map((ex) =>
      ex.sentenceTr ? `${ex.sentenceEn} (${ex.sentenceTr})` : ex.sentenceEn
    );

    const created = await prisma.word.upsert({
      where: {
        english_turkish: {
          english,
          turkish: enriched.meaningTr,
        },
      },
      update: {
        definitionEn: enriched.definitionEn,
        type: enriched.partOfSpeechTr,
        level: enriched.cefrLevel,
        examples: JSON.stringify(examplesFormatted),
        synonyms: JSON.stringify(enriched.synonyms || []),
      },
      create: {
        english,
        turkish: enriched.meaningTr,
        definitionEn: enriched.definitionEn,
        type: enriched.partOfSpeechTr,
        level: enriched.cefrLevel,
        examples: JSON.stringify(examplesFormatted),
        synonyms: JSON.stringify(enriched.synonyms || []),
        source: body.source || "api-direct",
        approved: true,
      },
    });

    return NextResponse.json({
      success: true,
      word: created,
      enriched,
    });
  } catch (error: any) {
    console.error("Word create error:", error);
    return NextResponse.json({ error: error.message || "Kelime eklenemedi." }, { status: 500 });
  }
}
