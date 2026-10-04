import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MASTER_VOCABULARY } from "@/lib/vocabulary/master-vocab-database";
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "@/lib/vocabulary/publications-master-corpus";

export const dynamic = "force-dynamic";

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

    const formatted = words.map((w) => {
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

    // PERF & RELIABILITY: Eğer veritabanında henüz kelime yoksa master korpustan sun
    let finalWords = formatted;
    let finalTotal = total;

    if (finalTotal === 0) {
      const combinedPool = [
        ...YDS_PUBLICATIONS_MASTER_CORPUS.map((p, idx) => ({
          id: `pub-${idx + 1}`,
          english: p.term,
          turkish: p.meaningsTr.join(", "),
          definitionEn: p.definitionEn,
          examples: [p.exampleEn, p.exampleTr],
          synonyms: p.synonyms,
          level: p.level,
          type: p.type,
          imageUrl: null,
          targetExams: ["YDS", "YDT", "YÖKDİL"] as ("YDS" | "YDT" | "YÖKDİL")[],
          sourceCategory: p.sourceCategory || "Modadil / Akın Dil / YDS Pub",
        })),
        ...MASTER_VOCABULARY.map((m) => {
          const isBeginner = m.level === "A1" || m.level === "A2";
          return {
            id: String(m.id),
            english: m.word,
            turkish: m.tr,
            definitionEn: m.hint || "",
            examples: m.example ? [m.example, m.exampleTr || ""] : [],
            synonyms: m.synonyms || [],
            level: m.level,
            type: m.type,
            imageUrl: null,
            targetExams: (isBeginner ? ["YDT"] : ["YDS", "YDT", "YÖKDİL"]) as ("YDS" | "YDT" | "YÖKDİL")[],
            sourceCategory: `Master Veritabanı (${m.level})`,
          };
        }),
      ];

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
          if (!w.targetExams.includes(normExam as any)) {
            return false;
          }
        }
        return true;
      });

      finalTotal = filtered.length;
      finalWords = filtered.slice(skip, skip + limit);
    }

    // Hem dizi hem sayfalama uyumluluğu için JSON dön
    return NextResponse.json({
      words: finalWords,
      total: finalTotal,
      page,
      limit,
      totalPages: Math.ceil(finalTotal / limit) || 1,
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
