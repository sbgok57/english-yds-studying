import { z } from "zod";
import { AVATAR_CATEGORY_IDS } from "./avatar-catalog";

// Tek kelime ya da en fazla 6 kelimelik kalıp/frazal verb kabul edilir.
const lexicalItemPattern = /^[\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*(?: +[\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*){0,5}$/u;

export const wordInputSchema = z
  .object({
    term: z
      .string()
      .trim()
      .min(1, "Kelime boş olamaz.")
      .max(100, "Kelime/kalıp en fazla 100 karakter olabilir.")
      .transform((value) => value.replace(/[ \t]+/g, " "))
      .refine((value) => lexicalItemPattern.test(value), {
        message: "Yalnızca İngilizce kelime veya en fazla 6 kelimelik kalıp girin.",
      }),
    context: z
      .string()
      .trim()
      .max(500, "Bağlam en fazla 500 karakter olabilir.")
      .optional()
      .transform((value) => (value ? value.replace(/\s+/g, " ") : undefined)),
  })
  .strict();

export const bulkWordInputSchema = z
  .object({
    words: z
      .array(wordInputSchema)
      .min(1, "En az bir kelime gönderin.")
      .max(50, "Bir istekte en fazla 50 kelime ekleyebilirsiniz."),
  })
  .strict();

// PDF'ten kelimeleri mevcut parser çıkardıktan sonra bu endpoint'e gönderir.
export const globalPdfImportSchema = z
  .object({
    sourceFileName: z.string().trim().min(1).max(255).optional(),
    words: z
      .array(wordInputSchema)
      .min(1, "PDF'ten en az bir kelime çıkarılmalı.")
      .max(500, "PDF başına en fazla 500 kelime içe aktarılabilir."),
  })
  .strict();

export const wordListQuerySchema = z
  .object({
    limit: z.coerce.number().int().min(1).max(100).default(50),
    cursor: z.string().min(1).max(128).optional(),
  })
  .strict();

export const progressInputSchema = z
  .object({
    isLearned: z.boolean(),
  })
  .strict();

export const reviewQueueQuerySchema = z
  .object({
    limit: z.coerce.number().int().min(1).max(50).default(20),
    newLimit: z.coerce.number().int().min(0).max(50).default(10),
  })
  .strict();

export const reviewSubmissionSchema = z
  .object({
    requestId: z.string().uuid(),
    rating: z.enum(["AGAIN", "HARD", "GOOD", "EASY"]),
  })
  .strict();

const memoryTagPattern = /^[\p{L}\p{M}\p{N}][\p{L}\p{M}\p{N} _-]*$/u;
const memoryTagSchema = z
  .string()
  .trim()
  .min(1, "Etiket boş olamaz.")
  .max(30, "Etiket en fazla 30 karakter olabilir.")
  .transform((value) => value.normalize("NFKC"))
  .refine((value) => memoryTagPattern.test(value), "Etikette yalnızca harf, sayı, boşluk, tire ve alt çizgi kullanın.");

// Tam PUT gövdesi: tüm alanlar gönderilir; boş metinler sunucuda null yapılır.
export const userWordMemoryInputSchema = z
  .object({
    personalNote: z.string().trim().max(2000, "Not en fazla 2000 karakter olabilir.").nullable(),
    mnemonic: z.string().trim().max(500, "Hatırlatıcı en fazla 500 karakter olabilir.").nullable(),
    personalExample: z.string().trim().max(500, "Kişisel örnek en fazla 500 karakter olabilir.").nullable(),
    tags: z.array(memoryTagSchema).max(10, "En fazla 10 etiket ekleyebilirsiniz."),
  })
  .strict()
  .superRefine((memory, context) => {
    const normalized = memory.tags.map((tag) => tag.toLocaleLowerCase("en-US"));
    if (new Set(normalized).size !== normalized.length) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Aynı etiketi birden fazla kez ekleyemezsiniz.",
        path: ["tags"],
      });
    }
  });

export const avatarCatalogQuerySchema = z
  .object({
    category: z.enum(AVATAR_CATEGORY_IDS).default("all"),
    offset: z.coerce.number().int().min(0).max(2000).default(0),
    limit: z.coerce.number().int().min(1).max(80).default(40),
  })
  .strict();

export const avatarSelectionSchema = z
  .object({
    avatarId: z.number().int().min(0).max(1999),
  })
  .strict();

export type WordInput = z.infer<typeof wordInputSchema>;
export type UserWordMemoryInput = z.infer<typeof userWordMemoryInputSchema>;
export type AvatarSelectionInput = z.infer<typeof avatarSelectionSchema>;
export type ReviewRating = z.infer<typeof reviewSubmissionSchema>["rating"];
