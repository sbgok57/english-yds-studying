import { PrismaClient } from "@prisma/client";
import { getSafeDatabaseUrl } from "./server-config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const safeUrl = getSafeDatabaseUrl();
  // Ensure process.env is synchronized so Prisma internal rust engine gets the exact path
  process.env.DATABASE_URL = safeUrl;

  return new PrismaClient({
    datasources: {
      db: {
        url: safeUrl,
      },
    },
    log:
      process.env.NODE_ENV === "development"
        ? ["warn", "error"]
        : ["error"],
  });
}

// PERF: Reuse existing client across Next.js HMR reloads
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
