import { Prisma, PrismaClient } from "@prisma/client";
import type { WordInput } from "./validation";

export function normalizeTerm(term: string): string {
  return term
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[’]/g, "'")
    .replace(/[ \t]+/g, " ")
    .trim();
}

export function safeSourceFileName(fileName?: string): string | null {
  if (!fileName) return null;
  const leaf = fileName.split(/[\\/]/).pop()?.trim();
  return leaf ? leaf.replace(/[\u0000-\u001f]/g, "").slice(0, 250) || null : null;
}

export interface GlobalImportResult {
  requested: number;
  uniqueInPdf: number;
  promotedToShared: number;
  queued: number;
  alreadyShared: number;
  sourceFile: string | null;
}

/**
 * PDF ayrıştırıcınızın çıkardığı kelimeleri ortak havuza ekler.
 * Aynı kelime PDF içinde tekrarlanırsa tek kez eklenir. Tekrar yüklemede
 * mevcut ortak kaydı atlar; admin hesabındaki eski kişisel kopyayı ortak yapar.
 */
export async function importGlobalPdfWords(
  prisma: PrismaClient,
  ownerUserId: string,
  inputWords: WordInput[],
  sourceFileName?: string,
): Promise<GlobalImportResult> {
  const sourceFile = safeSourceFileName(sourceFileName);
  const byNormalizedTerm = new Map<string, WordInput>();

  for (const word of inputWords) {
    const normalizedTerm = normalizeTerm(word.term);
    if (!byNormalizedTerm.has(normalizedTerm)) {
      byNormalizedTerm.set(normalizedTerm, word);
    }
  }

  const entries = [...byNormalizedTerm.entries()];
  const normalizedTerms = entries.map(([normalizedTerm]) => normalizedTerm);
  let promotedToShared = 0;
  let queued = 0;
  let alreadyShared = 0;

  await prisma.$transaction(async (tx) => {
    // Birden fazla API instance aynı PDF'i eşzamanlı alırsa aynı global
    // kelimeleri iki kez yazmamak için transaction süresince import kilidi.
    await tx.$queryRaw`SELECT pg_advisory_xact_lock(6147320519::bigint)`;

    const existingGlobal = await tx.word.findMany({
      where: { isGlobal: true, normalizedTerm: { in: normalizedTerms } },
      select: { normalizedTerm: true },
    });
    const globalTerms = new Set(existingGlobal.map((word) => word.normalizedTerm));

    // Bu modülün önceki sürümünde PDF kelimeleri kişisel kaydedilmiş olabilir.
    // Aynı hesabın aynı kelimesini yeni bir kopya yerine ortak kayda dönüştür.
    const ownerPrivateWords = await tx.word.findMany({
      where: {
        userId: ownerUserId,
        isGlobal: false,
        normalizedTerm: { in: normalizedTerms },
      },
      select: { id: true, normalizedTerm: true },
    });
    const privateByTerm = new Map<string, string[]>();
    for (const word of ownerPrivateWords) {
      const ids = privateByTerm.get(word.normalizedTerm) ?? [];
      ids.push(word.id);
      privateByTerm.set(word.normalizedTerm, ids);
    }

    const idsToPromote = ownerPrivateWords
      .filter((word) => !globalTerms.has(word.normalizedTerm))
      .map((word) => word.id);

    if (idsToPromote.length > 0) {
      const promoted = await tx.word.updateMany({
        where: { id: { in: idsToPromote }, userId: ownerUserId, isGlobal: false },
        data: { isGlobal: true, source: "PDF", sourceFile },
      });
      promotedToShared = promoted.count;
    }

    const wordsToCreate = entries
      .filter(([normalizedTerm]) => !globalTerms.has(normalizedTerm) && !privateByTerm.has(normalizedTerm))
      .map(([normalizedTerm, word]) => ({
        userId: ownerUserId,
        isGlobal: true,
        normalizedTerm,
        source: "PDF",
        sourceFile,
        term: word.term,
        context: word.context ?? null,
        enrichmentStatus: "PENDING",
        attempts: 0,
        nextAttemptAt: new Date(),
      }));

    if (wordsToCreate.length > 0) {
      const created = await tx.word.createMany({ data: wordsToCreate });
      queued = created.count;
    }

    alreadyShared = Math.max(0, entries.length - promotedToShared - queued);
  }, { isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted });

  return {
    requested: inputWords.length,
    uniqueInPdf: entries.length,
    promotedToShared,
    queued,
    alreadyShared,
    sourceFile,
  };
}
