import cors from "cors";
import express, { NextFunction, Request, RequestHandler, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { Prisma, PrismaClient, UserWordProgress, Word } from "@prisma/client";
import { ZodError } from "zod";
import { env } from "./config";
import { importGlobalPdfWords, normalizeTerm } from "./global-word-import";
import {
  bulkWordInputSchema,
  globalPdfImportSchema,
  progressInputSchema,
  wordInputSchema,
  wordListQuerySchema,
} from "./validation";
import { backfillNormalizedTerms, ensureSingleSiteOwner } from "./site-owner";
import { runEnrichmentWorker } from "./worker";

const prisma = new PrismaClient();
const app = express();

app.disable("x-powered-by");
app.use(helmet());

const allowedOrigins = (env.CORS_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
if (allowedOrigins.length > 0) {
  app.use(cors({ origin: allowedOrigins, credentials: true }));
}
app.use(express.json({ limit: "512kb" }));
app.use(
  "/api",
  rateLimit({
    windowMs: 60_000,
    limit: 60,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

interface RequestWithUser extends Request {
  user?: { id?: string };
}

function requireUser(req: Request, res: Response, next: NextFunction): void {
  const authenticatedUserId = (req as RequestWithUser).user?.id;
  if (authenticatedUserId) {
    res.locals.userId = authenticatedUserId;
    next();
    return;
  }

  // Yalnızca development içindir. Production'da sitenin doğrulanmış session/JWT
  // middleware'i req.user.id alanını doldurmalıdır.
  if (env.NODE_ENV !== "production" && env.DEV_USER_ID) {
    res.locals.userId = env.DEV_USER_ID;
    next();
    return;
  }

  res.status(401).json({ error: "İşlem için oturum açmalısınız." });
}

const requireOwner: RequestHandler = (_req, res, next) => {
  const userId = String(res.locals.userId ?? "");
  if (!userId) {
    res.status(401).json({ error: "Oturum açmalısınız." });
    return;
  }

  void prisma.siteOwner
    .findUnique({ where: { id: 1 } })
    .then((owner) => {
      if (!owner || owner.userId !== userId) {
        res.status(403).json({ error: "Bu özellik yalnızca site sahibine açıktır." });
        return;
      }
      res.locals.ownerUserId = owner.userId;
      next();
    })
    .catch(next);
};

function asyncHandler(
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>,
): RequestHandler {
  return (req, res, next) => {
    void handler(req, res, next).catch(next);
  };
}

function getRouteId(req: Request): string | undefined {
  const raw = req.params.id;
  if (typeof raw === "string") return raw;
  if (Array.isArray(raw)) return raw[0];
  return undefined;
}

function publicWord(word: Word, progress: UserWordProgress | null = null) {
  return {
    id: word.id,
    term: word.term,
    context: word.context,
    lemma: word.lemma,
    cefrLevel: word.cefrLevel,
    confidence: word.confidence,
    analysis: word.analysis,
    status: word.enrichmentStatus,
    isShared: word.isGlobal,
    source: word.source,
    sourceFile: word.sourceFile,
    attempts: word.attempts,
    createdAt: word.createdAt,
    analyzedAt: word.analyzedAt,
    progress: progress
      ? {
          isLearned: progress.isLearned,
          reviewCount: progress.reviewCount,
          lastReviewedAt: progress.lastReviewedAt,
        }
      : { isLearned: false, reviewCount: 0, lastReviewedAt: null },
  };
}

function visibleWordFilter(userId: string): Prisma.WordWhereInput {
  return {
    OR: [
      { isGlobal: true },
      { isGlobal: false, userId },
    ],
  };
}

async function findVisibleWord(id: string, userId: string): Promise<Word | null> {
  return prisma.word.findFirst({
    where: { id, ...visibleWordFilter(userId) },
  });
}

async function isOwner(userId: string): Promise<boolean> {
  const owner = await prisma.siteOwner.findUnique({ where: { id: 1 } });
  return owner?.userId === userId;
}

app.get(
  "/health",
  asyncHandler(async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, service: "yds-word-enrichment" });
  }),
);

// Frontend, admin menüsünü saklamak için kullanabilir. Bu bilgi yalnızca görsel
// amaçlıdır; aşağıdaki yönetim endpoint'leri ayrıca sunucuda requireOwner ile korunur.
app.get(
  "/api/session/me",
  requireUser,
  asyncHandler(async (_req, res) => {
    const userId = String(res.locals.userId);
    res.json({ userId, isOwner: await isOwner(userId) });
  }),
);

// Kullanıcı kendi özel kelimelerini VE tüm global kelimeleri bu listede görür.
// Progress kayıtları her kullanıcıya özeldir, global kelimenin kendisi tekrarlanmaz.
app.get(
  "/api/words",
  requireUser,
  asyncHandler(async (req, res) => {
    const query = wordListQuerySchema.parse(req.query);
    const userId = String(res.locals.userId);
    const rows = await prisma.word.findMany({
      where: visibleWordFilter(userId),
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: query.limit + 1,
      cursor: query.cursor ? { id: query.cursor } : undefined,
      skip: query.cursor ? 1 : 0,
    });

    const hasMore = rows.length > query.limit;
    const page = rows.slice(0, query.limit);
    const progressRows = page.length
      ? await prisma.userWordProgress.findMany({
          where: { userId, wordId: { in: page.map((word) => word.id) } },
        })
      : [];
    const progressByWordId = new Map(progressRows.map((progress) => [progress.wordId, progress]));
    const lastWord = page.at(-1);

    res.json({
      words: page.map((word) => publicWord(word, progressByWordId.get(word.id) ?? null)),
      hasMore,
      nextCursor: hasMore ? lastWord?.id ?? null : null,
    });
  }),
);

app.get(
  "/api/words/:id",
  requireUser,
  asyncHandler(async (req, res) => {
    const id = getRouteId(req);
    if (!id) {
      res.status(400).json({ error: "Kelime ID'si geçersiz." });
      return;
    }
    const userId = String(res.locals.userId);
    const word = await findVisibleWord(id, userId);
    if (!word) {
      res.status(404).json({ error: "Kelime bulunamadı." });
      return;
    }
    const progress = await prisma.userWordProgress.findUnique({
      where: { userId_wordId: { userId, wordId: id } },
    });
    res.json({ word: publicWord(word, progress) });
  }),
);

// Normal kullanıcıların eklediği kelimeler özel kalır; request body'den isGlobal
// veya owner rolü alınmadığı için kullanıcı kendine admin yetkisi veremez.
app.post(
  "/api/words",
  requireUser,
  asyncHandler(async (req, res) => {
    const input = wordInputSchema.parse(req.body);
    const userId = String(res.locals.userId);
    const word = await prisma.word.create({
      data: {
        userId,
        isGlobal: false,
        normalizedTerm: normalizeTerm(input.term),
        source: "MANUAL",
        term: input.term,
        context: input.context ?? null,
      },
    });
    res.status(202).json({ word: publicWord(word) });
  }),
);

app.post(
  "/api/words/bulk",
  requireUser,
  asyncHandler(async (req, res) => {
    const input = bulkWordInputSchema.parse(req.body);
    const userId = String(res.locals.userId);
    const words = await prisma.$transaction(
      input.words.map((item) =>
        prisma.word.create({
          data: {
            userId,
            isGlobal: false,
            normalizedTerm: normalizeTerm(item.term),
            source: "MANUAL",
            term: item.term,
            context: item.context ?? null,
          },
        }),
      ),
    );

    res.status(202).json({ count: words.length, words: words.map((word) => publicWord(word)) });
  }),
);

// Kendi çalışma durumunu yalnızca oturum açan kullanıcı değiştirebilir.
// Bu sayede ortak kelime havuzu tüm hesaplarda görünürken ilerleme kişisel kalır.
app.put(
  "/api/words/:id/progress",
  requireUser,
  asyncHandler(async (req, res) => {
    const id = getRouteId(req);
    if (!id) {
      res.status(400).json({ error: "Kelime ID'si geçersiz." });
      return;
    }
    const input = progressInputSchema.parse(req.body);
    const userId = String(res.locals.userId);
    const word = await findVisibleWord(id, userId);
    if (!word) {
      res.status(404).json({ error: "Kelime bulunamadı." });
      return;
    }

    const now = new Date();
    const progress = await prisma.userWordProgress.upsert({
      where: { userId_wordId: { userId, wordId: id } },
      create: { userId, wordId: id, isLearned: input.isLearned, reviewCount: 1, lastReviewedAt: now },
      update: {
        isLearned: input.isLearned,
        reviewCount: { increment: 1 },
        lastReviewedAt: now,
      },
    });
    res.json({
      progress: {
        isLearned: progress.isLearned,
        reviewCount: progress.reviewCount,
        lastReviewedAt: progress.lastReviewedAt,
      },
    });
  }),
);

app.post(
  "/api/words/:id/retry",
  requireUser,
  asyncHandler(async (req, res) => {
    const id = getRouteId(req);
    if (!id) {
      res.status(400).json({ error: "Kelime ID'si geçersiz." });
      return;
    }
    const userId = String(res.locals.userId);
    const existing = await findVisibleWord(id, userId);
    if (!existing) {
      res.status(404).json({ error: "Kelime bulunamadı." });
      return;
    }
    if (existing.isGlobal && !(await isOwner(userId))) {
      res.status(403).json({ error: "Ortak kelime analizini yalnızca site sahibi yenileyebilir." });
      return;
    }
    if (existing.enrichmentStatus === "COMPLETED") {
      res.status(409).json({ error: "Analizi tamamlanmış kelimeyi yeniden kuyruğa alamazsınız." });
      return;
    }

    const word = await prisma.word.update({
      where: { id },
      data: {
        enrichmentStatus: "PENDING",
        attempts: 0,
        nextAttemptAt: new Date(),
        lastError: null,
      },
    });
    res.status(202).json({ word: publicWord(word) });
  }),
);

// Mevcut PDF yükleme/parsing akışından ÇIKARILAN kelimeler bu rotaya gönderilir.
// Sadece tek SiteOwner çağırabilir; kelimeler ortak havuza eklenir.
app.post(
  "/api/admin/pdf/import",
  requireUser,
  requireOwner,
  asyncHandler(async (req, res) => {
    const input = globalPdfImportSchema.parse(req.body);
    const result = await importGlobalPdfWords(
      prisma,
      String(res.locals.ownerUserId),
      input.words,
      input.sourceFileName,
    );
    res.status(202).json(result);
  }),
);

// Mevcut projedeki analizsiz kelimeleri yeniden kuyruğa alır; bu işlem de owner-only.
app.post(
  "/api/admin/backfill",
  requireUser,
  requireOwner,
  asyncHandler(async (_req, res) => {
    const result = await prisma.word.updateMany({
      where: { analysis: { equals: Prisma.DbNull } },
      data: {
        enrichmentStatus: "PENDING",
        attempts: 0,
        nextAttemptAt: new Date(),
        lastError: null,
      },
    });
    res.json({ queued: result.count });
  }),
);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Rota bulunamadı." });
});

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: "Gönderilen veri geçersiz.",
      details: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
    return;
  }

  console.error("[api] beklenmeyen hata:", error);
  res.status(500).json({ error: "Sunucu tarafında beklenmeyen bir hata oluştu." });
});

async function main(): Promise<void> {
  await prisma.$connect();
  await ensureSingleSiteOwner(prisma);
  await backfillNormalizedTerms(prisma);

  const server = app.listen(env.PORT, "0.0.0.0", () => {
    console.info(`[api] http://0.0.0.0:${env.PORT} üzerinde çalışıyor.`);
  });

  const controller = new AbortController();
  const workerPromise = runEnrichmentWorker(prisma, controller.signal);
  let shuttingDown = false;

  const shutdown = async (signal: string) => {
    if (shuttingDown) return;
    shuttingDown = true;
    console.info(`[api] ${signal} alındı; düzgün kapatılıyor.`);
    controller.abort();
    await new Promise<void>((resolve) => server.close(() => resolve()));
    await workerPromise;
    await prisma.$disconnect();
    process.exit(0);
  };

  process.once("SIGINT", () => void shutdown("SIGINT"));
  process.once("SIGTERM", () => void shutdown("SIGTERM"));
}

void main().catch(async (error: unknown) => {
  console.error("[api] başlatılamadı:", error);
  await prisma.$disconnect();
  process.exit(1);
});
