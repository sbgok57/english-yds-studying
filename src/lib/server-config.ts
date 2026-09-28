import path from "path";
import fs from "fs";
import { AUTH_SECRET } from "./auth-secret";

export { AUTH_SECRET };

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
        valid: true,
        provider: "sqlite",
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

  // 2. In Serverless environments (Vercel Lambda), write operations require /tmp
  if (IS_SERVERLESS) {
    const tmpDbPath = "/tmp/dev.db";

    try {
      if (!fs.existsSync(tmpDbPath)) {
        const candidateSourcePaths = [
          path.join(process.cwd(), "prisma", "dev.db"),
          path.resolve(__dirname, "../../prisma/dev.db"),
          path.resolve(__dirname, "../prisma/dev.db"),
          path.join(process.cwd(), "dev.db"),
          path.resolve("/var/task/prisma/dev.db"),
          path.resolve("/var/task/dev.db"),
        ];

        let foundSource: string | null = null;
        for (const candidate of candidateSourcePaths) {
          try {
            if (fs.existsSync(candidate) && fs.statSync(candidate).size > 0) {
              foundSource = candidate;
              break;
            }
          } catch {
            // Ignore access errors on candidate probe
          }
        }

        if (foundSource) {
          fs.copyFileSync(foundSource, tmpDbPath);
          try {
            fs.chmodSync(tmpDbPath, 0o666);
          } catch {
            /* ignore */
          }
        }
      }
    } catch (err) {
      console.warn("[SERVER_CONFIG] Notice copying SQLite to /tmp:", err);
    }

    return `file:${tmpDbPath}`;
  }

  // 3. In persistent / local development environments:
  const canonicalPrismaDb = path.resolve(process.cwd(), "prisma", "dev.db");
  if (fs.existsSync(canonicalPrismaDb) && fs.statSync(canonicalPrismaDb).size > 0) {
    return `file:${canonicalPrismaDb}`;
  }

  // If rawUrl points to an existing file, use it
  if (rawUrl && rawUrl.startsWith("file:")) {
    const cleanPath = rawUrl.replace(/^file:/, "");
    const resolvedPath = path.isAbsolute(cleanPath) ? cleanPath : path.resolve(process.cwd(), cleanPath);
    if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).size > 0) {
      return `file:${resolvedPath}`;
    }
  }

  return `file:${canonicalPrismaDb}`;
}
