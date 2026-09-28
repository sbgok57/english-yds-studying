import { PrismaClient } from "@prisma/client";
import { env } from "./config";
import { normalizeTerm } from "./global-word-import";

/** Tek sahip, uygulama başlatılırken sunucu konfigürasyonundan sabitlenir. */
export async function ensureSingleSiteOwner(prisma: PrismaClient): Promise<void> {
  if (!env.OWNER_USER_ID) {
    console.warn("[owner] OWNER_USER_ID ayarlı değil; admin özellikleri kapalı.");
    return;
  }

  const owner = await prisma.siteOwner.upsert({
    where: { id: 1 },
    create: { id: 1, userId: env.OWNER_USER_ID },
    update: {}, // Önemli: mevcut sahip başka bir hesaba otomatik devredilmez.
  });

  if (owner.userId !== env.OWNER_USER_ID) {
    throw new Error(
      "OWNER_USER_ID veritabanındaki tek sahip hesabıyla uyuşmuyor. Güvenlik için sunucu başlatılmadı.",
    );
  }
}

/** Önceki sürümden kalan kayıtların arama/dedup anahtarını tamamlar. */
export async function backfillNormalizedTerms(prisma: PrismaClient): Promise<void> {
  const batchSize = 300;

  while (true) {
    const legacyWords = await prisma.word.findMany({
      where: { normalizedTerm: "" },
      select: { id: true, term: true },
      orderBy: { createdAt: "asc" },
      take: batchSize,
    });

    if (legacyWords.length === 0) return;

    await prisma.$transaction(
      legacyWords.map((word) =>
        prisma.word.update({
          where: { id: word.id },
          data: {
            normalizedTerm: normalizeTerm(word.term) || `__legacy__${word.id}`,
          },
        }),
      ),
    );
  }
}
