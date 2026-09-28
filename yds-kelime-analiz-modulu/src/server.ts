import { timingSafeEqual } from "node:crypto";
import cors from "cors";
import express, { NextFunction, Request, RequestHandler, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { Prisma, PrismaClient } from "@prisma/client";
import { ZodError } from "zod";
import { env } from "./config";
import { bulkWordInputSchema, wordInputSchema } from "./validation";
import { runEnrichmentWorker } from "./worker";

const prisma = new PrismaClient();
const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(express.json({ limit: "32kb" }));

const allowedOrigins = (env.CORS_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
if (allowedOrigins.length > 0) {
  app.use(cors({ origin: allowedOrigins, credentials: true }));
}

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

  // Geliştirme kolaylığı içindir. Production'da mevcut sitenin session/JWT
  // middleware'i req.user.id alanını doldurmalı; bu bypass asla açılmaz.
  if (env.NODE_ENV !== "production" && env.DEV_USER_ID) {
    res.locals.userId = env.DEV_USER_ID;
    next();
    return;
  }

  res.status(401).json({ error: "Kelime eklemek için oturum açmalısınız." });
}

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

function publicWord(word: {
  id: string;
  term: string;
  context: string | null;
  lemma: string | null;
  cefrLevel: string | null;
  confidence: string | null;
  analysis: Prisma.JsonValue | null;
  enrichmentStatus: string;
  attempts: number;
  createdAt: Date;
  analyzedAt: Date | null;
}) {
  return {
    id: word.id,
    term: word.term,
    context: word.context,
    lemma: word.lemma,
    cefrLevel: word.cefrLevel,
    confidence: word.confidence,
    analysis: word.analysis,
    status: word.enrichmentStatus,
    attempts: word.attempts,
    createdAt: word.createdAt,
    analyzedAt: word.analyzedAt,
  };
}

const adminOnly: RequestHandler = (req, res, next) => {
  const expected = env.ADMIN_API_KEY;
  const provided = req.header("x-admin-key") ?? "";

  if (!expected) {
    res.status(503).json({ error: "ADMIN_API_KEY sunucuda ayarlanmamış." });
    return;
  }

  const expectedBuffer = Buffer.from(expected);
  const providedBuffer = Buffer.from(provided);
  const matches =
    expectedBuffer.length === providedBuffer.length &&
    timingSafeEqual(expectedBuffer, providedBuffer);

  if (!matches) {
    res.status(401).json({ error: "Yetkisiz işlem." });
    return;
  }
  next();
};

app.get(
  "/health",
  asyncHandler(async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, service: "yds-word-enrichment" });
  }),
);

// Yeni eklenen HER kelime önce veritabanına PENDING kaydedilir.
// Arka plan worker'ı Claude analizini otomatik yapar; AI erişilemezse kayıt silinmez.
app.post(
  "/api/words",
  requireUser,
  asyncHandler(async (req, res) => {
    const input = wordInputSchema.parse(req.body);
    const word = await prisma.word.create({
      data: {
        userId: String(res.locals.userId),
        term: input.term,
        context: input.context ?? null,
      },
    });
    res.status(202).json({ word: publicWord(word) });
  }),
);

// Toplu eklemede en fazla 50 öğe kabul edilir; her öğe bağımsız kuyruk işi olur.
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
            term: item.term,
            context: item.context ?? null,
          },
        }),
      ),
    );

    res.status(202).json({
      count: words.length,
      words: words.map(publicWord),
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
    const word = await prisma.word.findFirst({
      where: { id, userId: String(res.locals.userId) },
    });
    if (!word) {
      res.status(404).json({ error: "Kelime bulunamadı." });
      return;
    }
    res.json({ word: publicWord(word) });
  }),
);

app.post(
  "/api/words/:id/retry",
  requireUser,
  asyncHandler(async (req, res) => {
    const userId = String(res.locals.userId);
    const id = getRouteId(req);
    if (!id) {
      res.status(400).json({ error: "Kelime ID'si geçersiz." });
      return;
    }
    const existing = await prisma.word.findFirst({
      where: { id, userId },
    });
    if (!existing) {
      res.status(404).json({ error: "Kelime bulunamadı." });
      return;
    }
    if (existing.enrichmentStatus === "COMPLETED") {
      res.status(409).json({ error: "Analizi tamamlanmış kelimeyi yeniden kuyruğa alamazsınız." });
      return;
    }

    const word = await prisma.word.update({
      where: { id: existing.id },
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

// Bu örnek projedeki tablonun analiz edilmemiş kayıtlarını tekrar kuyruğa alır.
// Mevcut sitenin farklı veritabanı/tablo şeması varsa backfill sorgusu uyarlanmalıdır.
app.post(
  "/api/admin/backfill",
  adminOnly,
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
