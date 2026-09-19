import { z } from "zod";

export const CefrLevelEnum = z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]);
export type CefrLevelType = z.infer<typeof CefrLevelEnum>;

export const SkillTypeEnum = z.enum([
  "grammar",
  "vocabulary",
  "reading",
  "sentence",
  "translation",
]);
export type SkillTypeValue = z.infer<typeof SkillTypeEnum>;

// User Schema (Safe representation)
export const SafeUserSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  username: z.string().min(3).max(30),
  avatarId: z.string().nullable().optional().default("astronaut"),
  level: z.string().default("A1"),
  streak: z.number().int().nonnegative().default(1),
  totalPoints: z.number().int().nonnegative().default(0),
  createdAt: z.union([z.string(), z.date()]).optional(),
});
export type ValidatedSafeUser = z.infer<typeof SafeUserSchema>;

// Session Payload Schema
export const SessionPayloadSchema = z.object({
  userId: z.string().min(1),
  email: z.string().email(),
  username: z.string().min(1),
  name: z.string().min(1),
  exp: z.number().int().positive(),
  iat: z.number().int().positive(),
});
export type ValidatedSessionPayload = z.infer<typeof SessionPayloadSchema>;

// Word Mastery Stat
export const WordStatSchema = z.object({
  c: z.number().int().nonnegative().default(0),
  w: z.number().int().nonnegative().default(0),
  last: z.number().int().positive().default(Date.now),
});

// Level Test Question Schema
export const LevelTestQuestionSchema = z.object({
  id: z.string().min(1),
  level: CefrLevelEnum,
  skill: SkillTypeEnum,
  stem: z.string().min(1),
  options: z.array(z.string()).length(5, "Must have exactly 5 options"),
  answer: z.number().int().min(0).max(4, "Answer index must be between 0 and 4"),
  explanation: z.string().min(1),
  weight: z.number().positive().default(1),
  discriminability: z.number().default(1),
  passage: z.string().optional(),
  passageTitle: z.string().optional(),
  isValidation: z.boolean().optional(),
});

// Level Assessment Result
export const SkillBreakdownSchema = z.object({
  correct: z.number().int().nonnegative(),
  total: z.number().int().positive(),
  percent: z.number().min(0).max(100),
});

export const LevelAssessmentResultSchema = z.object({
  level: CefrLevelEnum,
  levelBand: z.string().default("A1"),
  scorePercent: z.number().min(0).max(100),
  totalQuestions: z.number().int().positive(),
  correctCount: z.number().int().nonnegative(),
  confidence: z.enum(["high", "medium", "low"]).default("medium"),
  skillBreakdown: z.record(SkillTypeEnum, SkillBreakdownSchema),
  strongSkills: z.array(z.string()),
  weakSkills: z.array(z.string()),
  recommendedStart: z.string(),
  recommendedPlanId: z.string(),
  estimatedWeeksToNext: z.string(),
  disclaimer: z.string(),
  timestamp: z.number().int().positive(),
});
export type ValidatedLevelAssessmentResult = z.infer<typeof LevelAssessmentResultSchema>;

// Study Task Schema
export const StudyTaskSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  durationMin: z.number().int().positive().default(15),
  type: z.enum(["vocabulary", "grammar", "reading", "practice", "review", "exam"]).default("grammar"),
  completed: z.boolean().default(false),
  detail: z.string().optional(),
});

// Gamification Points State
export const PointsStateSchema = z.object({
  total: z.number().int().nonnegative().default(0),
  awardedSourceKeys: z.record(z.string(), z.boolean()).default({}),
});

// Gamification Badge State
export const BadgeStateSchema = z.object({
  earned: z.record(z.string(), z.boolean()).default({}),
  unlockedAt: z.record(z.string(), z.number()).default({}),
});

// Complete Usage Data Schema with Versioning
export const UsageDataSchema = z.object({
  version: z.number().int().nonnegative().default(1),
  words: z.record(z.string(), WordStatSchema).default({}),
  exams: z.object({
    taken: z.number().int().nonnegative().default(0),
    bestNet: z.number().default(0),
    history: z.array(z.any()).default([]),
  }).default({
    taken: 0,
    bestNet: 0,
    history: [],
  }),
  points: PointsStateSchema.default({ total: 0, awardedSourceKeys: {} }),
  badges: BadgeStateSchema.default({ earned: {}, unlockedAt: {} }),
  levelTest: z.object({
    history: z.array(z.any()).default([]),
    lastAssessment: LevelAssessmentResultSchema.nullable().default(null),
  }).default({ history: [], lastAssessment: null }),
  activePlan: z.any().nullable().default(null),
  completedTasks: z.record(z.string(), z.boolean()).default({}),
  avatar: z.number().int().nullable().default(null),
  customAvatar: z.string().nullable().default(null),
  username: z.string().nullable().default(null),
  mistakeNotebook: z.array(z.any()).default([]),
  lastUpdated: z.number().int().default(Date.now),
});
export type ValidatedUsageData = z.infer<typeof UsageDataSchema>;

/**
 * Validates untrusted input with a Zod schema, returning safe data or default.
 */
export function safeValidate<Output, Def extends z.ZodTypeDef = z.ZodTypeDef, Input = any>(
  schema: z.ZodType<Output, Def, Input>,
  data: unknown,
  fallback: Output
): { data: Output; valid: boolean; errors?: z.ZodError } {
  const parsed = schema.safeParse(data);
  if (parsed.success) {
    return { data: parsed.data, valid: true };
  }
  return { data: fallback, valid: false, errors: parsed.error };
}
