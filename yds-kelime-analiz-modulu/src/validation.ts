import { z } from "zod";

// Tek kelime ya da en fazla 6 kelimelik kalıp/frazal verb kabul edilir.
// Satır sonu, talimat metni, HTML ve rastgele metin girişini reddeder.
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

export type WordInput = z.infer<typeof wordInputSchema>;
