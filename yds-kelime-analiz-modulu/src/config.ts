import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL tanımlanmalı."),
  ANTHROPIC_API_KEY: z.string().min(1, "ANTHROPIC_API_KEY tanımlanmalı."),
  CLAUDE_MODEL: z.string().min(1).default("claude-sonnet-5-5"),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DEV_USER_ID: z.string().min(1).max(128).optional(),
  OWNER_USER_ID: z.string().min(1).max(128).optional(),
  CORS_ORIGINS: z.string().optional(),
  WORKER_POLL_MS: z.coerce.number().int().min(250).max(30000).default(1000),
  MAX_ATTEMPTS: z.coerce.number().int().min(1).max(10).default(5),
  FSRS_RETENTION: z.coerce.number().min(0.8).max(0.97).default(0.9),
  DAILY_NEW_CARD_LIMIT: z.coerce.number().int().min(1).max(100).default(20),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  const details = parsed.error.issues
    .map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
    .join("\n");
  throw new Error(`Ortam değişkenleri geçersiz:\n${details}`);
}

if (parsed.data.NODE_ENV === "production" && !parsed.data.OWNER_USER_ID) {
  throw new Error("Production ortamında tek sahip için OWNER_USER_ID tanımlanmalı.");
}

export const env = parsed.data;
