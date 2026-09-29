import { z } from "zod";

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

export const userWordMemoryInputSchema = z
  .object({
    mnemonic: z.string().trim().max(500).optional(),
    personalNote: z.string().trim().max(500).optional(),
    customTag: z.string().trim().max(50).optional(),
  })
  .strict();

export const avatarCatalogQuerySchema = z
  .object({
    category: z.string().trim().min(1).max(50).optional(),
    limit: z.coerce.number().int().min(1).max(200).default(50),
    page: z.coerce.number().int().min(1).default(1),
  })
  .strict();

export const avatarSelectionSchema = z
  .object({
    avatarId: z.coerce.number().int().min(1).max(2000),
  })
  .strict();

export type WordInput = z.infer<typeof wordInputSchema>;
export type ReviewRating = z.infer<typeof reviewSubmissionSchema>["rating"];
export type UserWordMemoryInput = z.infer<typeof userWordMemoryInputSchema>;
export type AvatarCatalogQuery = z.infer<typeof avatarCatalogQuerySchema>;
export type AvatarSelection = z.infer<typeof avatarSelectionSchema>;
