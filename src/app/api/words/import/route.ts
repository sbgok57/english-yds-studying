import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const WordItemSchema = z.object({
  english: z
    .string()
    .min(1, "İngilizce kelime boş olamaz")
    .max(120)
    .regex(/^[a-zA-Z0-9\s\-'.,()/;?!:]+$/, "İngilizce alanda geçersiz karakter"),
  turkish: z
    .string()
    .max(200)
    .optional()
    .default(""),
  definitionEn: z.string().optional(),
  type: z.string().optional(),
  level: z.string().optional(),
  source: z.string().optional(),
});

const ImportPayloadSchema = z.object({
  words: z.array(WordItemSchema).min(1, "En az 1 kelime gereklidir").max(2000),
  source: z.string().optional().default("import"),
  type: z.string().optional().default("genel"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ImportPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Geçersiz veri: şüpheli veya bozuk karakterli satırlar reddedildi.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { words, source, type } = parsed.data;

    const { enrichWordWithAI } = await import("@/lib/word-enricher");

    let addedCount = 0;
    for (const w of words) {
      const english = w.english.trim();
      const rawTurkish = (w.turkish || "").trim();

      // Claude AI / Corpus zenginleştirme motoru
      const enriched = await enrichWordWithAI(english, rawTurkish);
      const turkish = rawTurkish || enriched.meaningTr || "akademik kelime";

      // Zenginleştirilmiş örnek cümleler
      const examplesFormatted = enriched.examples.map((ex) =>
        ex.sentenceTr ? `${ex.sentenceEn} (${ex.sentenceTr})` : ex.sentenceEn
      );

      await prisma.word.upsert({
        where: {
          english_turkish: {
            english,
            turkish,
          },
        },
        update: {
          definitionEn: enriched.definitionEn || w.definitionEn || "",
          type: enriched.partOfSpeechTr || w.type || type,
          level: enriched.cefrLevel || w.level || "B2",
          examples: JSON.stringify(examplesFormatted),
          synonyms: JSON.stringify(enriched.synonyms || []),
          source: w.source || source,
        },
        create: {
          english,
          turkish,
          definitionEn: enriched.definitionEn || w.definitionEn || "",
          examples: JSON.stringify(examplesFormatted),
          synonyms: JSON.stringify(enriched.synonyms || []),
          level: enriched.cefrLevel || w.level || "B2",
          type: enriched.partOfSpeechTr || w.type || type,
          source: w.source || source,
          approved: true,
        },
      });
      addedCount++;
    }

    return NextResponse.json({
      success: true,
      added: addedCount,
      message: `${addedCount} kelime başarıyla veritabanına eklendi.`,
    });
  } catch (error: any) {
    console.error("Word import API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası, lütfen tekrar deneyin.", details: error.message },
      { status: 500 }
    );
  }
}
