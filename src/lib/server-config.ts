import path from "path";
import fs from "fs";
import { getAuthSecret } from "./auth-secret";

export { getAuthSecret };

export const IS_SERVERLESS = !!(
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.LAMBDA_TASK_ROOT ||
  process.env.NETLIFY
);

export function sanitizeEnvUrl(val?: string | null): string {
  if (!val) return "";
  let clean = val.trim();
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    clean = clean.slice(1, -1).trim();
  }
  return clean;
}

export function findEnvUrl(keys: string[]): string {
  for (const k of keys) {
    if (process.env[k]) {
      const sanitized = sanitizeEnvUrl(process.env[k]);
      if (sanitized) return sanitized;
    }
  }
  // Check prefixed variables (e.g. from Vercel integration: englishydsstudying_POSTGRES_PRISMA_URL)
  for (const envKey of Object.keys(process.env)) {
    for (const k of keys) {
      if (envKey.endsWith(`_${k}`) || envKey === k) {
        if (process.env[envKey]) {
          const sanitized = sanitizeEnvUrl(process.env[envKey]);
          if (sanitized) return sanitized;
        }
      }
    }
  }
  return "";
}

export function getSafeDirectUrl(): string {
  return findEnvUrl(["DIRECT_URL", "POSTGRES_URL_NON_POOLING"]);
}

// Top-level automatic synchronization: ensure process.env.DATABASE_URL & DIRECT_URL are populated
const resolvedDbInit = findEnvUrl(["DATABASE_URL", "POSTGRES_PRISMA_URL", "POSTGRES_URL"]);
if (resolvedDbInit && !process.env["DATABASE_URL"]) {
  process.env["DATABASE_URL"] = resolvedDbInit;
}
const resolvedDirectInit = findEnvUrl(["DIRECT_URL", "POSTGRES_URL_NON_POOLING"]);
if (resolvedDirectInit && !process.env["DIRECT_URL"]) {
  process.env["DIRECT_URL"] = resolvedDirectInit;
}

export function validateDatabaseConfig(): { valid: boolean; provider: string; error?: string } {
  const rawUrl = findEnvUrl(["DATABASE_URL", "POSTGRES_PRISMA_URL", "POSTGRES_URL"]);

  if (!rawUrl) {
    if (IS_SERVERLESS) {
      return {
        valid: false,
        provider: "unknown",
        error: "A persistent remote DATABASE_URL is required in serverless environments",
      };
    }
    return {
      valid: true,
      provider: "sqlite",
    };
  }

  if (rawUrl.startsWith("postgresql://") || rawUrl.startsWith("postgres://")) {
    try {
      const parsed = new URL(rawUrl);
      if (!parsed.hostname) {
        return { valid: false, provider: "postgresql", error: "DATABASE_URL hostname missing" };
      }
      return { valid: true, provider: "postgresql" };
    } catch {
      return { valid: false, provider: "postgresql", error: "DATABASE_URL malformed" };
    }
  }

  if (rawUrl.startsWith("mysql://")) {
    return { valid: true, provider: "mysql" };
  }

  if (rawUrl.startsWith("file:")) {
    return { valid: true, provider: "sqlite" };
  }

  return { valid: false, provider: "unknown", error: "DATABASE_URL protocol unsupported" };
}

/**
 * Resolves the database URL safely for both local development and
 * serverless environments (e.g. Vercel, AWS Lambda).
 */
export function getSafeDatabaseUrl(): string {
  // 1. Check for remote connection strings (PostgreSQL / Neon / Supabase / Vercel Postgres)
  const rawUrl = findEnvUrl(["DATABASE_URL", "POSTGRES_PRISMA_URL", "POSTGRES_URL"]);

  if (
    rawUrl &&
    (rawUrl.startsWith("postgresql://") ||
      rawUrl.startsWith("postgres://") ||
      rawUrl.startsWith("mysql://") ||
      rawUrl.startsWith("libsql://") ||
      rawUrl.startsWith("https://"))
  ) {
    return rawUrl;
  }

  // A writable /tmp SQLite copy is ephemeral per serverless instance and must
  // never be presented as persistent application storage.
  if (IS_SERVERLESS) {
    throw new Error("A persistent remote DATABASE_URL is required in serverless environments.");
  }

  // Respect an explicitly configured local SQLite URL first. This is required
  // for isolated test databases and prevents accidental writes to prisma/dev.db.
  if (rawUrl && rawUrl.startsWith("file:")) {
    const cleanPath = rawUrl.replace(/^file:/, "");
    const resolvedPath = path.isAbsolute(cleanPath) ? cleanPath : path.resolve(process.cwd(), cleanPath);
    return `file:${resolvedPath}`;
  }

  // 3. In persistent / local development environments:
  const canonicalPrismaDb = path.resolve(process.cwd(), "prisma", "dev.db");
  if (fs.existsSync(canonicalPrismaDb) && fs.statSync(canonicalPrismaDb).size > 0) {
    return `file:${canonicalPrismaDb}`;
  }

  return `file:${canonicalPrismaDb}`;
}
