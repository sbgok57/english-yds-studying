import { Prisma, PrismaClient, Word } from "@prisma/client";
import { env } from "./config";
import { enrichWord } from "./ai/word-enricher";

const sleep = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

async function claimNextWord(prisma: PrismaClient): Promise<Word | null> {
  return prisma.$transaction(async (tx) => {
    // Son deneme sırasında süreç çökerse kayıt sonsuza kadar PROCESSING kalmasın.
    // Otomatik deneme sınırı dolmuş eski kayıtları son FAILED durumuna al.
    await tx.$executeRaw`
      UPDATE "Word"
      SET
        "enrichmentStatus" = 'FAILED',
        "lastError" = COALESCE("lastError", 'Worker zaman aşımına uğradı; elle yeniden deneyin.'),
        "nextAttemptAt" = NOW()
      WHERE "enrichmentStatus" = 'PROCESSING'
        AND "updatedAt" < NOW() - INTERVAL '15 minutes'
        AND "attempts" >= ${env.MAX_ATTEMPTS}
    `;

    // SKIP LOCKED, birden çok worker/process çalıştığında aynı kelimenin
    // iki kez aynı anda işlenmesini önler. 15 dakikadır PROCESSING kalan işler
    // worker çökerse yeniden alınabilir.
    const rows = await tx.$queryRaw<Array<{ id: string }>>`
      SELECT "id"
      FROM "Word"
      WHERE
        (
          "enrichmentStatus" = 'PENDING'
          OR ("enrichmentStatus" = 'FAILED' AND "attempts" < ${env.MAX_ATTEMPTS})
          OR ("enrichmentStatus" = 'PROCESSING'
              AND "updatedAt" < NOW() - INTERVAL '15 minutes'
              AND "attempts" < ${env.MAX_ATTEMPTS})
        )
        AND "nextAttemptAt" <= NOW()
      ORDER BY "createdAt" ASC
      FOR UPDATE SKIP LOCKED
      LIMIT 1
    `;

    const row = rows[0];
    if (!row) return null;

    return tx.word.update({
      where: { id: row.id },
      data: {
        enrichmentStatus: "PROCESSING",
        attempts: { increment: 1 },
        lastError: null,
      },
    });
  });
}

function safeErrorMessage(error: unknown): string {
  const raw = error instanceof Error ? error.message : "Bilinmeyen analiz hatası";
  // Sınırsız API yanıtının veritabanına/loglara yazılmasını önle.
  return raw.replace(/[\r\n\t]+/g, " ").slice(0, 900);
}

async function processWord(prisma: PrismaClient, word: Word): Promise<void> {
  try {
    const analysis = await enrichWord(word.term, word.context ?? undefined);

    await prisma.word.update({
      where: { id: word.id },
      data: {
        lemma: analysis.lemma,
        cefrLevel: analysis.overallLevel,
        confidence: analysis.levelConfidence,
        analysis: analysis as Prisma.InputJsonValue,
        enrichmentStatus: "COMPLETED",
        analyzedModel: env.CLAUDE_MODEL,
        analyzedAt: new Date(),
        lastError: null,
      },
    });

    console.info(`[word-worker] tamamlandı id=${word.id} term=${word.term}`);
  } catch (error) {
    const attempts = word.attempts;
    const delaySeconds = Math.min(60 * 60, 15 * 2 ** Math.max(0, attempts - 1));
    const nextAttemptAt = new Date(Date.now() + delaySeconds * 1000);
    const message = safeErrorMessage(error);

    await prisma.word.update({
      where: { id: word.id },
      data: {
        enrichmentStatus: "FAILED",
        lastError: message,
        nextAttemptAt,
      },
    });

    console.error(
      `[word-worker] hata id=${word.id} term=${word.term} deneme=${attempts}/${env.MAX_ATTEMPTS}: ${message}`,
    );
  }
}

export async function runEnrichmentWorker(
  prisma: PrismaClient,
  signal: AbortSignal,
): Promise<void> {
  console.info("[word-worker] kelime zenginleştirme kuyruğu başlatıldı.");

  while (!signal.aborted) {
    try {
      const word = await claimNextWord(prisma);
      if (word) {
        await processWord(prisma, word);
      } else {
        await sleep(env.WORKER_POLL_MS);
      }
    } catch (error) {
      console.error("[word-worker] kuyruk döngüsü hatası:", safeErrorMessage(error));
      await sleep(Math.max(env.WORKER_POLL_MS, 1000));
    }
  }

  console.info("[word-worker] durduruldu.");
}
