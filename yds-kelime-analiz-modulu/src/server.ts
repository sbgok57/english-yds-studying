import { randomUUID } from "node:crypto";
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
  reviewQueueQuerySchema,
  reviewSubmissionSchema,
  wordInputSchema,
  wordListQuerySchema,
} from "./validation";
import { backfillNormalizedTerms, ensureSingleSiteOwner } from "./site-owner";
import {
  createInitialCard,
  fsrsRatingByInput,
  InvalidSchedulerStateError,
  persistCard,
  restoreCard,
  retrievabilityBefore,
  scheduler,
  stateName,
} from "./srs";
import { runEnrichmentWorker } from "./worker";

const prisma = new PrismaClient();
const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use((_req, res, next) => {
  // İstemciden gelen ID'ye güvenmeyiz; her response için sunucu üretir.
  const requestId = randomUUID();
  res.locals.requestId = requestId;
  res.setHeader("X-Request-Id", requestId);
  next();
});

const allowedOrigins = (env.CORS_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
if (allowedOrigins.length > 0) {
  app.use(cors({ origin: allowedOrigins, credentials: true }));
}
// API limiti parser'dan önce uygulanır; bozuk/çok büyük JSON istekleri de sayılır.
app.use(
  "/api",
  rateLimit({
    windowMs: 60_000,
    limit: 60,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).json({
        code: "RATE_LIMITED",
        error: "Çok fazla istek gönderildi; kısa süre sonra tekrar deneyin.",
        requestId: String(res.locals.requestId ?? ""),
      });
    },
  }),
);
app.use(express.json({ limit: "512kb" }));

function sendApiError(res: Response, status: number, code: string, message: string): void {
  res.status(status).json({
    code,
    error: message,
    requestId: String(res.locals.requestId ?? ""),
  });
}

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

  sendApiError(res, 401, "AUTH_REQUIRED", "İşlem için oturum açmalısınız.");
}

const requireOwner: RequestHandler = (_req, res, next) => {
  const userId = String(res.locals.userId ?? "");
  if (!userId) {
    sendApiError(res, 401, "AUTH_REQUIRED", "Oturum açmalısınız.");
    return;
  }

  void prisma.siteOwner
    .findUnique({ where: { id: 1 } })
    .then((owner) => {
      if (!owner || owner.userId !== userId) {
        sendApiError(res, 403, "OWNER_ONLY", "Bu özellik yalnızca site sahibine açıktır.");
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
          dueAt: progress.dueAt,
          lastRating: progress.lastRating,
        }
      : { isLearned: false, reviewCount: 0, lastReviewedAt: null, dueAt: null, lastRating: null },
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

class HttpError extends Error {
  constructor(
    readonly statusCode: number,
    message: string,
    readonly code = "REQUEST_REJECTED",
  ) {
    super(message);
    this.name = "HttpError";
  }
}

function isStudyable(word: Word): boolean {
  if (word.enrichmentStatus !== "COMPLETED" || word.analysis === null) return false;
  if (typeof word.analysis !== "object" || Array.isArray(word.analysis)) return false;
  return (word.analysis as Record<string, unknown>).isRecognized !== false;
}

function reviewPrompt(
  word: Word,
  progress: UserWordProgress | null,
  queueType: "REVIEW" | "NEW",
  now: Date,
) {
  return {
    wordId: word.id,
    term: word.term,
    context: word.context,
    isShared: word.isGlobal,
    queueType,
    dueAt: progress?.dueAt ?? now,
    reviewCount: progress?.reviewCount ?? 0,
  };
}

function reviewEventResponse(
  event: {
    requestId: string;
    wordId: string;
    rating: string;
    reviewedAt: Date;
    nextDueAt: Date;
    scheduledDays: number;
    stability: number;
    difficulty: number;
    state: string;
    retrievabilityBefore: number | null;
    isLearnedAfter: boolean;
  },
  replayed: boolean,
) {
  return {
    requestId: event.requestId,
    wordId: event.wordId,
    rating: event.rating,
    reviewedAt: event.reviewedAt,
    nextDueAt: event.nextDueAt,
    scheduledDays: event.scheduledDays,
    stability: event.stability,
    difficulty: event.difficulty,
    state: event.state,
    retrievabilityBefore: event.retrievabilityBefore,
    isLearned: event.isLearnedAfter,
    replayed,
  };
}

function utcDayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
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
      sendApiError(res, 400, "INVALID_WORD_ID", "Kelime ID'si geçersiz.");
      return;
    }
    const userId = String(res.locals.userId);
    const word = await findVisibleWord(id, userId);
    if (!word) {
      sendApiError(res, 404, "WORD_NOT_FOUND", "Kelime bulunamadı.");
      return;
    }
    const progress = await prisma.userWordProgress.findUnique({
      where: { userId_wordId: { userId, wordId: id } },
    });
    res.json({ word: publicWord(word, progress) });
  }),
);

// Review ekranı önce yalnızca soruyu verir; cevap kullanıcı hatırlamaya çalıştıktan
// sonra /answer ile istenir. Due tekrarlar yenilerden önce gösterilir.
app.get(
  "/api/reviews/due",
  requireUser,
  asyncHandler(async (req, res) => {
    const query = reviewQueueQuerySchema.parse(req.query);
    const userId = String(res.locals.userId);
    const now = new Date();
    const rollingDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const [newStarted, dueCount] = await Promise.all([
      prisma.userWordProgress.count({
        where: { userId, fsrsStartedAt: { gte: rollingDayAgo } },
      }),
      prisma.userWordProgress.count({ where: { userId, dueAt: { lte: now } } }),
    ]);
    const newRemaining = Math.max(0, env.DAILY_NEW_CARD_LIMIT - newStarted);
    const newLimit = Math.min(query.newLimit, newRemaining);

    const dueRows = await prisma.userWordProgress.findMany({
      where: { userId, dueAt: { lte: now } },
      include: { word: true },
      orderBy: [{ dueAt: "asc" }, { id: "asc" }],
      take: Math.max(query.limit * 4, query.limit),
    });
    const dueItems = dueRows
      .filter(({ word }) => (word.isGlobal || word.userId === userId) && isStudyable(word))
      .slice(0, query.limit)
      .map(({ word, ...progress }) => reviewPrompt(word, progress, "REVIEW", now));

    const newItems: ReturnType<typeof reviewPrompt>[] = [];
    if (newLimit > 0) {
      const legacyRows = await prisma.userWordProgress.findMany({
        where: { userId, dueAt: null },
        include: { word: true },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        take: newLimit * 4,
      });
      const legacyItems = legacyRows
        .filter(({ word }) => (word.isGlobal || word.userId === userId) && isStudyable(word))
        .slice(0, newLimit)
        .map(({ word, ...progress }) => reviewPrompt(word, progress, "NEW", now));
      newItems.push(...legacyItems);

      const remainingSlots = newLimit - newItems.length;
      if (remainingSlots > 0) {
        const unseenRows = await prisma.word.findMany({
          where: {
            AND: [
              visibleWordFilter(userId),
              { enrichmentStatus: "COMPLETED" },
              { progress: { none: { userId } } },
            ],
          },
          orderBy: [{ createdAt: "asc" }, { id: "asc" }],
          take: remainingSlots * 4,
        });
        newItems.push(
          ...unseenRows
            .filter(isStudyable)
            .slice(0, remainingSlots)
            .map((word) => reviewPrompt(word, null, "NEW", now)),
        );
      }
    }

    res.json({
      serverTime: now,
      due: dueItems,
      new: newItems,
      dueCount,
      newStartedLast24h: newStarted,
      newRemainingLast24h: newRemaining,
      dailyNewLimit: env.DAILY_NEW_CARD_LIMIT,
    });
  }),
);

app.get(
  "/api/reviews/:id/answer",
  requireUser,
  asyncHandler(async (req, res) => {
    const id = getRouteId(req);
    if (!id) {
      sendApiError(res, 400, "INVALID_WORD_ID", "Kelime ID'si geçersiz.");
      return;
    }
    const word = await findVisibleWord(id, String(res.locals.userId));
    if (!word || !isStudyable(word)) {
      sendApiError(res, 404, "STUDYABLE_WORD_NOT_FOUND", "Çalışılabilir kelime bulunamadı.");
      return;
    }
    res.json({ wordId: word.id, term: word.term, answer: word.analysis });
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
      sendApiError(res, 400, "INVALID_WORD_ID", "Kelime ID'si geçersiz.");
      return;
    }
    const input = progressInputSchema.parse(req.body);
    const userId = String(res.locals.userId);
    const word = await findVisibleWord(id, userId);
    if (!word) {
      sendApiError(res, 404, "WORD_NOT_FOUND", "Kelime bulunamadı.");
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
      sendApiError(res, 400, "INVALID_WORD_ID", "Kelime ID'si geçersiz.");
      return;
    }
    const userId = String(res.locals.userId);
    const existing = await findVisibleWord(id, userId);
    if (!existing) {
      sendApiError(res, 404, "WORD_NOT_FOUND", "Kelime bulunamadı.");
      return;
    }
    if (existing.isGlobal && !(await isOwner(userId))) {
      sendApiError(res, 403, "OWNER_ONLY", "Ortak kelime analizini yalnızca site sahibi yenileyebilir.");
      return;
    }
    if (existing.enrichmentStatus === "COMPLETED") {
      sendApiError(res, 409, "ANALYSIS_ALREADY_COMPLETED", "Analizi tamamlanmış kelimeyi yeniden kuyruğa alamazsınız.");
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

// Bir retrieval attempt'i FSRS ile planlar. requestId aynı HTTP isteğinin tekrar
// gönderilmesi halinde çift sayımı önler; advisory lock aynı kelimeye eşzamanlı
// gelen farklı puanların birbirinin üzerine yazılmasını engeller.
app.post(
  "/api/reviews/:id",
  requireUser,
  asyncHandler(async (req, res) => {
    const wordId = getRouteId(req);
    if (!wordId) {
      sendApiError(res, 400, "INVALID_WORD_ID", "Kelime ID'si geçersiz.");
      return;
    }
    const input = reviewSubmissionSchema.parse(req.body);
    const userId = String(res.locals.userId);

    const previouslyProcessed = await prisma.reviewEvent.findUnique({
      where: { userId_requestId: { userId, requestId: input.requestId } },
    });
    if (previouslyProcessed) {
      if (previouslyProcessed.wordId !== wordId) {
        sendApiError(res, 409, "REQUEST_ID_REUSED", "Bu requestId başka bir kelime için kullanılmış.");
        return;
      }
      res.json(reviewEventResponse(previouslyProcessed, true));
      return;
    }

    const accessibleWord = await findVisibleWord(wordId, userId);
    if (!accessibleWord) {
      sendApiError(res, 404, "WORD_NOT_FOUND", "Kelime bulunamadı.");
      return;
    }
    if (!isStudyable(accessibleWord)) {
      sendApiError(res, 409, "WORD_NOT_READY", "Kelime analizi tamamlanmadan tekrar kuyruğuna alınamaz.");
      return;
    }

    try {
      const result = await prisma.$transaction(async (tx) => {
        await tx.$queryRaw`SELECT pg_advisory_xact_lock(hashtext(${userId}), hashtext(${wordId}))`;

        const replay = await tx.reviewEvent.findUnique({
          where: { userId_requestId: { userId, requestId: input.requestId } },
        });
        if (replay) {
          if (replay.wordId !== wordId) {
            throw new HttpError(409, "Bu requestId başka bir kelime için kullanılmış.", "REQUEST_ID_REUSED");
          }
          return { event: replay, replayed: true };
        }

        const currentWord = await tx.word.findFirst({
          where: { id: wordId, ...visibleWordFilter(userId) },
        });
        if (!currentWord || !isStudyable(currentWord)) {
          throw new HttpError(404, "Çalışılabilir kelime bulunamadı.", "STUDYABLE_WORD_NOT_FOUND");
        }

        const progress = await tx.userWordProgress.findUnique({
          where: { userId_wordId: { userId, wordId } },
        });
        const now = new Date();
        if (progress?.dueAt && progress.dueAt.getTime() > now.getTime()) {
          throw new HttpError(409, "Bu kelimenin tekrar zamanı henüz gelmedi.", "REVIEW_NOT_DUE");
        }

        let latestEvent = null;
        if (!progress?.fsrsCard) {
          latestEvent = await tx.reviewEvent.findFirst({
            where: { userId, wordId },
            orderBy: [{ reviewedAt: "desc" }, { id: "desc" }],
          });
        }
        const isFirstFsrsReview = !progress?.fsrsCard && !latestEvent;
        if (isFirstFsrsReview) {
          // Kullanıcı aynı anda birden çok yeni kart gönderirse günlük limiti aşmasın.
          await tx.$queryRaw`SELECT pg_advisory_xact_lock(hashtext(${userId}), hashtext('fsrs-new-card-quota'))`;
          const rollingDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          const startedRecently = await tx.userWordProgress.count({
            where: { userId, fsrsStartedAt: { gte: rollingDayAgo } },
          });
          if (startedRecently >= env.DAILY_NEW_CARD_LIMIT) {
            throw new HttpError(
              429,
              `Son 24 saatteki ${env.DAILY_NEW_CARD_LIMIT} yeni kelime sınırına ulaştınız. Yarın tekrar çalışabilirsiniz.`,
              "DAILY_NEW_CARD_LIMIT",
            );
          }
        }

        let oldCard = createInitialCard(now);
        if (progress?.fsrsCard) {
          try {
            oldCard = restoreCard(progress.fsrsCard, now);
          } catch (error) {
            latestEvent = await tx.reviewEvent.findFirst({
              where: { userId, wordId },
              orderBy: [{ reviewedAt: "desc" }, { id: "desc" }],
            });
            if (!latestEvent) throw error;
            oldCard = restoreCard(latestEvent.resultingCard, now);
          }
        } else if (latestEvent) {
          oldCard = restoreCard(latestEvent.resultingCard, now);
        }
        const priorReviewCount = progress?.reviewCount ??
          (latestEvent ? await tx.reviewEvent.count({ where: { userId, wordId } }) : 0);
        const fsrsStartedAt = progress?.fsrsStartedAt ?? latestEvent?.reviewedAt ?? now;
        const recallProbability = retrievabilityBefore(oldCard, now);
        const next = scheduler.next(oldCard, now, fsrsRatingByInput[input.rating]);
        const isLearnedAfter = next.card.reps >= 3 && next.card.stability >= 21;

        await tx.userWordProgress.upsert({
          where: { userId_wordId: { userId, wordId } },
          create: {
            userId,
            wordId,
            isLearned: isLearnedAfter,
            reviewCount: priorReviewCount + 1,
            lastReviewedAt: now,
            fsrsCard: persistCard(next.card),
            dueAt: next.card.due,
            fsrsStartedAt,
            lastRating: input.rating,
          },
          update: {
            isLearned: isLearnedAfter,
            reviewCount: { increment: 1 },
            lastReviewedAt: now,
            fsrsCard: persistCard(next.card),
            dueAt: next.card.due,
            fsrsStartedAt,
            lastRating: input.rating,
          },
        });

        const event = await tx.reviewEvent.create({
          data: {
            userId,
            wordId,
            requestId: input.requestId,
            rating: input.rating,
            reviewedAt: now,
            nextDueAt: next.card.due,
            scheduledDays: next.card.scheduled_days,
            stability: next.card.stability,
            difficulty: next.card.difficulty,
            state: stateName(next.card.state),
            retrievabilityBefore: recallProbability,
            isLearnedAfter,
            resultingCard: persistCard(next.card),
          },
        });
        return { event, replayed: false };
      });

      res.json(reviewEventResponse(result.event, result.replayed));
    } catch (error) {
      // Aynı requestId farklı kelimelerde eşzamanlı gönderilirse unique indeks
      // son kontrolü yapar; kazanan isteğin kaydını idempotent olarak döndür.
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        const replay = await prisma.reviewEvent.findUnique({
          where: { userId_requestId: { userId, requestId: input.requestId } },
        });
        if (replay) {
          if (replay.wordId !== wordId) {
            sendApiError(res, 409, "REQUEST_ID_REUSED", "Bu requestId başka bir kelime için kullanılmış.");
            return;
          }
          res.json(reviewEventResponse(replay, true));
          return;
        }
      }
      throw error;
    }
  }),
);

app.get(
  "/api/reviews/stats",
  requireUser,
  asyncHandler(async (_req, res) => {
    const userId = String(res.locals.userId);
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    const rollingDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const [events, dueReviews, newStarted, masteredWords] = await Promise.all([
      prisma.reviewEvent.findMany({
        where: { userId, reviewedAt: { gte: yearAgo } },
        orderBy: { reviewedAt: "desc" },
        select: { rating: true, reviewedAt: true },
      }),
      prisma.userWordProgress.count({ where: { userId, dueAt: { lte: now } } }),
      prisma.userWordProgress.count({
        where: { userId, fsrsStartedAt: { gte: rollingDayAgo } },
      }),
      prisma.userWordProgress.count({ where: { userId, isLearned: true } }),
    ]);

    const last30Days = events.filter((event) => event.reviewedAt >= thirtyDaysAgo);
    const activeDays = new Set(last30Days.map((event) => utcDayKey(event.reviewedAt)));
    const successes = last30Days.filter((event) => event.rating !== "AGAIN").length;

    const reviewDays = new Set(events.map((event) => utcDayKey(event.reviewedAt)));
    const cursor = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    if (!reviewDays.has(utcDayKey(cursor))) cursor.setUTCDate(cursor.getUTCDate() - 1);
    let currentStreakDays = 0;
    while (currentStreakDays < 365 && reviewDays.has(utcDayKey(cursor))) {
      currentStreakDays += 1;
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }

    res.json({
      reviewedLast30Days: last30Days.length,
      recallRateLast30Days: last30Days.length ? successes / last30Days.length : null,
      activeDaysLast30Days: activeDays.size,
      currentStreakDays,
      dueReviews,
      newStartedLast24h: newStarted,
      newRemainingLast24h: Math.max(0, env.DAILY_NEW_CARD_LIMIT - newStarted),
      dailyNewLimit: env.DAILY_NEW_CARD_LIMIT,
      masteredWords,
    });
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

// Yalnızca owner'a açık test/operasyon görünümü; API anahtarı veya kullanıcı içeriği döndürmez.
app.get(
  "/api/admin/diagnostics",
  requireUser,
  requireOwner,
  asyncHandler(async (_req, res) => {
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [statusRows, sharedWords, personalWords, reviewsLast24h, latestFailures] = await Promise.all([
      prisma.word.groupBy({
        by: ["enrichmentStatus"],
        _count: { _all: true },
      }),
      prisma.word.count({ where: { isGlobal: true } }),
      prisma.word.count({ where: { isGlobal: false } }),
      prisma.reviewEvent.count({ where: { reviewedAt: { gte: dayAgo } } }),
      prisma.word.findMany({
        where: { enrichmentStatus: "FAILED" },
        orderBy: { updatedAt: "desc" },
        take: 10,
        select: { id: true, term: true, source: true, attempts: true, lastError: true, updatedAt: true },
      }),
    ]);

    const analysisQueue = Object.fromEntries(
      statusRows.map((row) => [row.enrichmentStatus, row._count._all]),
    );
    res.json({
      generatedAt: new Date(),
      words: { shared: sharedWords, personal: personalWords, total: sharedWords + personalWords },
      analysisQueue,
      reviewsLast24h,
      latestFailures,
    });
  }),
);

app.use((_req, res) => {
  sendApiError(res, 404, "NOT_FOUND", "Rota bulunamadı.");
});

app.use((error: unknown, req: Request, res: Response, _next: NextFunction) => {
  const requestId = String(res.locals.requestId ?? "unknown");
  const parserError = error as { type?: string; status?: number } | null;

  // Body-parser hatalarını 500 gibi göstermeyin: bozuk JSON 400, payload limiti 413.
  if (parserError?.type === "entity.parse.failed") {
    res.status(400).json({
      code: "INVALID_JSON",
      error: "İstek gövdesi geçerli JSON değil.",
      requestId,
    });
    return;
  }
  if (parserError?.type === "entity.too.large") {
    res.status(413).json({
      code: "PAYLOAD_TOO_LARGE",
      error: "İstek gövdesi izin verilen boyutu aşıyor.",
      requestId,
    });
    return;
  }
  if (parserError?.type === "encoding.unsupported" || parserError?.status === 415) {
    res.status(415).json({
      code: "UNSUPPORTED_MEDIA_TYPE",
      error: "İstek gövdesinin içerik türü desteklenmiyor.",
      requestId,
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      code: "VALIDATION_ERROR",
      error: "Gönderilen veri geçersiz.",
      details: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
      requestId,
    });
    return;
  }
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      code: error.code,
      error: error.message,
      requestId,
    });
    return;
  }
  if (error instanceof InvalidSchedulerStateError) {
    res.status(409).json({
      code: "SCHEDULER_STATE_INVALID",
      error: "Tekrar planı okunamadı. Destek ekibi bu kartı sıfırlamalı; ilerleme kaydı korunmuştur.",
      requestId,
    });
    return;
  }

  const errorName = error instanceof Error ? error.name : "UnknownError";
  const errorMessage = error instanceof Error ? error.message.slice(0, 500) : "Unknown error";
  console.error(JSON.stringify({
    level: "error",
    event: "api.unhandled_error",
    requestId,
    method: req.method,
    path: req.path,
    errorName,
    errorMessage,
  }));
  res.status(500).json({
    code: "INTERNAL_ERROR",
    error: "Sunucu tarafında beklenmeyen bir hata oluştu.",
    requestId,
  });
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

// Uygulama, DB'siz HTTP sınır testlerinde import edilebilir; gerçek servis başlatılırken
// migration/owner bootstrap ve worker yine yalnızca doğrudan çalıştırmada başlar.
export { app };

if (require.main === module) {
  void main().catch(async (error: unknown) => {
    console.error("[api] başlatılamadı:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
}
