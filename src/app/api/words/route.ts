import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { INVENTORY_ITEMS, getWordExams } from "@/lib/data-inventory";

export const dynamic = "force-dynamic";

interface CanonicalWordDto {
  id: string;
  english: string;
  turkish: string;
  definitionEn: string;
  examples: string[];
  synonyms: string[];
  level: string;
  type: string;
  imageUrl: string | null;
  targetExams: ("YDS" | "YDT" | "YÖKDİL")[];
  sourceCategory: string;
}

function mapPosToTr(pos?: string, phrasal?: boolean): string {
  if (phrasal) return "phrasal verb";
  switch ((pos || "").toLowerCase()) {
    case "verb":
    case "fiil":
      return "fiil";
    case "noun":
    case "isim":
      return "isim";
    case "adjective":
    case "sıfat":
      return "sıfat";
    case "adverb":
    case "zarf":
      return "zarf";
    default:
      return pos || "genel";
  }
}

function buildCanonicalPool(): CanonicalWordDto[] {
  return INVENTORY_ITEMS.map((item) => ({
    id: item.id,
    english: item.word,
    turkish: item.turkishMeanings.join(", "),
    definitionEn: item.englishDefinition || "",
    examples: item.example ? [item.example, item.exampleTr || ""] : [],
    synonyms: item.synonyms || [],
    level: item.level === "UNCLASSIFIED" ? "B2" : item.level,
    type: mapPosToTr(item.partOfSpeech, item.phrasalVerb),
    imageUrl: null,
    targetExams: getWordExams(item),
    sourceCategory: item.sourceTags?.includes("reading")
      ? "Modadil / Akın Dil / Akademik Yayınlar"
      : "DİL MASTER Konsolide Envanter",
  }));
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim() || "";
    const type = searchParams.get("type") || undefined;
    const level = searchParams.get("level") || undefined;
    const exam = searchParams.get("exam") || undefined;
    const source = searchParams.get("source") || undefined;
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(10, parseInt(searchParams.get("limit") || "50", 10)));
    const skip = (page - 1) * limit;

    let formatted: CanonicalWordDto[] = [];
    let total = 0;

    // SAFETY: Isolate Prisma DB query so serverless DB errors fall back to canonical 2,544 inventory
    try {
      const whereClause: Record<string, unknown> = {};

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

      const [words, dbTotal] = await Promise.all([
        prisma.word.findMany({
          where: whereClause,
          orderBy: { english: "asc" },
          skip,
          take: limit,
        }),
        prisma.word.count({ where: whereClause }),
      ]);

      total = dbTotal;
      formatted = words.map((w) => {
        const exams: ("YDS" | "YDT" | "YÖKDİL")[] = [];
        const lvl = (w.level || "B2").toUpperCase();
        const tp = (w.type || "").toLowerCase();
        if (lvl === "A1" || lvl === "A2" || lvl === "B1" || lvl === "B2" || tp.includes("phrasal")) exams.push("YDT");
        if (lvl === "B2" || lvl === "C1" || lvl === "C2" || lvl.includes("YDS")) exams.push("YDS");
        if (lvl === "B1" || lvl === "B2" || lvl === "C1") exams.push("YÖKDİL");
        if (exams.length === 0) exams.push("YDS", "YDT", "YÖKDİL");

        return {
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
          targetExams: exams,
          sourceCategory: w.source || "ÖSYM / Akademik Yayınlar",
        };
      });
    } catch {
      total = 0;
      formatted = [];
    }

    // PERF & RELIABILITY: Eğer veritabanında henüz kelime yoksa veya erişilemiyorsa 2.544 kanonik korpustan sun
    let finalWords = formatted;
    let finalTotal = total;

    if (finalTotal === 0) {
      const combinedPool = buildCanonicalPool();

      const filtered = combinedPool.filter((w) => {
        if (q) {
          const matchQ =
            w.english.toLowerCase().includes(q.toLowerCase()) ||
            w.turkish.toLowerCase().includes(q.toLowerCase()) ||
            w.definitionEn.toLowerCase().includes(q.toLowerCase());
          if (!matchQ) return false;
        }
        if (type && type !== "Hepsi" && !w.type.toLowerCase().includes(type.toLowerCase())) {
          return false;
        }
        if (level && level !== "Hepsi" && !w.level.toLowerCase().includes(level.toLowerCase())) {
          return false;
        }
        if (exam && exam !== "Hepsi" && exam !== "ALL") {
          const normExam = exam === "YOKDIL" ? "YÖKDİL" : exam;
          if (!w.targetExams.includes(normExam as "YDS" | "YDT" | "YÖKDİL")) {
            return false;
          }
        }
        return true;
      });

      finalTotal = filtered.length;
      finalWords = filtered.slice(skip, skip + limit);
    }

    return NextResponse.json({
      words: finalWords,
      total: finalTotal,
      page,
      limit,
      totalPages: Math.ceil(finalTotal / limit) || 1,
    });
  } catch (error) {
    console.error("Words fetch error:", error);
    const fallbackPool = buildCanonicalPool();
    return NextResponse.json({
      words: fallbackPool.slice(0, 50),
      total: fallbackPool.length,
      page: 1,
      limit: 50,
      totalPages: Math.ceil(fallbackPool.length / 50) || 1,
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
