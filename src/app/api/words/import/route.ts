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
    .min(1, "Türkçe anlam boş olamaz")
    .max(200)
    .regex(/^[a-zA-ZçÇğĞıİöÖşŞüÜâîû0-9\s\-'.,()/;?!:]+$/, "Türkçe alanda geçersiz karakter"),
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

    const data = words.map((w) => ({
      english: w.english.trim(),
      turkish: w.turkish.trim(),
      definitionEn: w.definitionEn || "",
      examples: JSON.stringify([
        `The student learned how to use '${w.english.trim()}' in academic context.`,
      ]),
      synonyms: JSON.stringify([]),
      level: w.level || "YDS",
      type: w.type || type,
      source: w.source || source,
      approved: true,
    }));

    let addedCount = 0;
    for (const w of data) {
      await prisma.word.upsert({
        where: {
          english_turkish: {
            english: w.english,
            turkish: w.turkish,
          },
        },
        update: {
          definitionEn: w.definitionEn,
          type: w.type,
          source: w.source,
        },
        create: w,
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
