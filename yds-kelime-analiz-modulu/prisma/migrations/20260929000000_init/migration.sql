-- CreateTable
CREATE TABLE "SiteOwner" (
    "id" INTEGER NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SiteOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "normalizedTerm" VARCHAR(150) NOT NULL DEFAULT '',
    "source" VARCHAR(16) NOT NULL DEFAULT 'MANUAL',
    "sourceFile" VARCHAR(255),
    "term" VARCHAR(100) NOT NULL,
    "context" VARCHAR(500),
    "lemma" VARCHAR(120),
    "cefrLevel" VARCHAR(12),
    "confidence" VARCHAR(12),
    "analysis" JSONB,
    "enrichmentStatus" VARCHAR(16) NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "nextAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastError" VARCHAR(1000),
    "analyzedModel" VARCHAR(100),
    "analyzedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWordProgress" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "wordId" TEXT NOT NULL,
    "isLearned" BOOLEAN NOT NULL DEFAULT false,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "lastReviewedAt" TIMESTAMP(3),
    "fsrsCard" JSONB,
    "dueAt" TIMESTAMP(3),
    "fsrsStartedAt" TIMESTAMP(3),
    "lastRating" VARCHAR(8),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWordProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewEvent" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "wordId" TEXT NOT NULL,
    "requestId" VARCHAR(36) NOT NULL,
    "rating" VARCHAR(8) NOT NULL,
    "reviewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextDueAt" TIMESTAMP(3) NOT NULL,
    "scheduledDays" DOUBLE PRECISION NOT NULL,
    "stability" DOUBLE PRECISION NOT NULL,
    "difficulty" DOUBLE PRECISION NOT NULL,
    "state" VARCHAR(16) NOT NULL,
    "retrievabilityBefore" DOUBLE PRECISION,
    "isLearnedAfter" BOOLEAN NOT NULL DEFAULT false,
    "resultingCard" JSONB NOT NULL,

    CONSTRAINT "ReviewEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWordMemory" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "wordId" TEXT NOT NULL,
    "personalNote" VARCHAR(2000),
    "mnemonic" VARCHAR(500),
    "personalExample" VARCHAR(500),
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWordMemory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(128) NOT NULL,
    "avatarId" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteOwner_userId_key" ON "SiteOwner"("userId");

-- CreateIndex
CREATE INDEX "Word_enrichmentStatus_nextAttemptAt_createdAt_idx" ON "Word"("enrichmentStatus", "nextAttemptAt", "createdAt");

-- CreateIndex
CREATE INDEX "Word_enrichmentStatus_updatedAt_attempts_idx" ON "Word"("enrichmentStatus", "updatedAt", "attempts");

-- CreateIndex
CREATE INDEX "Word_userId_createdAt_idx" ON "Word"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Word_userId_normalizedTerm_idx" ON "Word"("userId", "normalizedTerm");

-- CreateIndex
CREATE INDEX "Word_isGlobal_createdAt_idx" ON "Word"("isGlobal", "createdAt");

-- CreateIndex
CREATE INDEX "Word_isGlobal_normalizedTerm_idx" ON "Word"("isGlobal", "normalizedTerm");

-- CreateIndex
CREATE INDEX "UserWordProgress_userId_dueAt_idx" ON "UserWordProgress"("userId", "dueAt");

-- CreateIndex
CREATE INDEX "UserWordProgress_userId_lastReviewedAt_idx" ON "UserWordProgress"("userId", "lastReviewedAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserWordProgress_userId_wordId_key" ON "UserWordProgress"("userId", "wordId");

-- CreateIndex
CREATE INDEX "ReviewEvent_userId_reviewedAt_idx" ON "ReviewEvent"("userId", "reviewedAt");

-- CreateIndex
CREATE INDEX "ReviewEvent_userId_wordId_reviewedAt_idx" ON "ReviewEvent"("userId", "wordId", "reviewedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ReviewEvent_userId_requestId_key" ON "ReviewEvent"("userId", "requestId");

-- CreateIndex
CREATE INDEX "UserWordMemory_userId_updatedAt_idx" ON "UserWordMemory"("userId", "updatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserWordMemory_userId_wordId_key" ON "UserWordMemory"("userId", "wordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- AddForeignKey
ALTER TABLE "UserWordProgress" ADD CONSTRAINT "UserWordProgress_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewEvent" ADD CONSTRAINT "ReviewEvent_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWordMemory" ADD CONSTRAINT "UserWordMemory_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
