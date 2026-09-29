import { Prisma } from "@prisma/client";
import { createEmptyCard, fsrs, Rating, State, type Card, type Grade } from "ts-fsrs";
import { z } from "zod";
import { env } from "./config";
import type { ReviewRating } from "./validation";

// 90% hedef hatırlama olasılığı varsayılandır; kullanıcı yoğunluğuna göre
// FSRS_RETENTION ile ayarlanabilir. Aralıklar tekrar performansına göre değişir.
export const scheduler = fsrs({
  request_retention: env.FSRS_RETENTION,
  maximum_interval: 36_500,
  enable_fuzz: true,
  enable_short_term: true,
  learning_steps: ["1m", "10m"],
  relearning_steps: ["10m"],
});

export const fsrsRatingByInput: Record<ReviewRating, Grade> = {
  AGAIN: Rating.Again,
  HARD: Rating.Hard,
  GOOD: Rating.Good,
  EASY: Rating.Easy,
};

const storedCardSchema = z
  .object({
    due: z.string().datetime(),
    stability: z.number().finite().nonnegative(),
    difficulty: z.number().finite().min(0).max(10),
    elapsed_days: z.number().finite().nonnegative(),
    scheduled_days: z.number().finite().nonnegative(),
    learning_steps: z.number().int().nonnegative(),
    reps: z.number().int().nonnegative(),
    lapses: z.number().int().nonnegative(),
    state: z.number().int().min(0).max(3),
    last_review: z.string().datetime().optional(),
  })
  .strict();

export class InvalidSchedulerStateError extends Error {
  constructor() {
    super("Kullanıcıya ait FSRS kart verisi okunamadı.");
    this.name = "InvalidSchedulerStateError";
  }
}

export function createInitialCard(now: Date): Card {
  return createEmptyCard(now);
}

export function restoreCard(saved: Prisma.JsonValue | null, now: Date): Card {
  if (saved === null) return createInitialCard(now);

  const parsed = storedCardSchema.safeParse(saved);
  if (!parsed.success) throw new InvalidSchedulerStateError();

  return {
    due: new Date(parsed.data.due),
    stability: parsed.data.stability,
    difficulty: parsed.data.difficulty,
    elapsed_days: parsed.data.elapsed_days,
    scheduled_days: parsed.data.scheduled_days,
    learning_steps: parsed.data.learning_steps,
    reps: parsed.data.reps,
    lapses: parsed.data.lapses,
    state: parsed.data.state as State,
    ...(parsed.data.last_review ? { last_review: new Date(parsed.data.last_review) } : {}),
  };
}

export function persistCard(card: Card): Prisma.InputJsonValue {
  return {
    due: card.due.toISOString(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    ...(card.last_review ? { last_review: card.last_review.toISOString() } : {}),
  } as Prisma.InputJsonValue;
}

export function stateName(state: State): string {
  return State[state] ?? "Unknown";
}

export function retrievabilityBefore(card: Card, now: Date): number | null {
  if (card.reps === 0) return null;
  return scheduler.get_retrievability(card, now, false);
}
