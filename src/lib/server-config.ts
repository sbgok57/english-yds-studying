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

/**
 * Resolves the SQLite database URL safely for both local development and
 * serverless environments (e.g. Vercel, AWS Lambda) where the execution root is read-only.
 */
export function getSafeDatabaseUrl(): string {
  // 1. If an explicit remote database URL is configured (Postgres, MySQL, LibSQL, Turso), use it directly.
  const rawUrl = process.env.DATABASE_URL?.trim();
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

  // 2. In Serverless environments (Vercel Lambda), the deployment root is read-only (/var/task).
  // SQLite write operations require a writable directory, which on Lambda is strictly /tmp.
  if (IS_SERVERLESS) {
    const tmpDbPath = "/tmp/dev.db";

    try {
      if (!fs.existsSync(tmpDbPath)) {
        // Find existing seed database in project deployment bundle
        const candidateSourcePaths = [
          path.join(process.cwd(), "prisma", "dev.db"),
          path.resolve(__dirname, "../../prisma/dev.db"),
          path.resolve(__dirname, "../prisma/dev.db"),
          path.join(process.cwd(), "dev.db"),
        ];

        let foundSource: string | null = null;
        for (const candidate of candidateSourcePaths) {
          if (fs.existsSync(candidate) && fs.statSync(candidate).size > 0) {
            foundSource = candidate;
            break;
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
  // The canonical database file is prisma/dev.db.
  const canonicalPrismaDb = path.resolve(process.cwd(), "prisma", "dev.db");
  if (fs.existsSync(canonicalPrismaDb) && fs.statSync(canonicalPrismaDb).size > 0) {
    return `file:${canonicalPrismaDb}`;
  }

  // If rawUrl points to an existing non-empty file, use it
  if (rawUrl && rawUrl.startsWith("file:")) {
    const cleanPath = rawUrl.replace(/^file:/, "");
    const resolvedPath = path.isAbsolute(cleanPath) ? cleanPath : path.resolve(process.cwd(), cleanPath);
    if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).size > 0) {
      return `file:${resolvedPath}`;
    }
  }

  // Fallback: canonical prisma/dev.db
  return `file:${canonicalPrismaDb}`;
}
