import { getSafeDatabaseUrl, getSafeDirectUrl } from "./server-config";
import { PrismaClient } from "@prisma/client";

// Early synchronization before Prisma Client instantiation
const earlySafeUrl = getSafeDatabaseUrl();
const earlyDirectUrl = getSafeDirectUrl();
if (earlySafeUrl && !process.env["DATABASE_URL"]) {
  process.env["DATABASE_URL"] = earlySafeUrl;
}
if (earlyDirectUrl && !process.env["DIRECT_URL"]) {
  process.env["DIRECT_URL"] = earlyDirectUrl;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const safeUrl = getSafeDatabaseUrl();
  const directUrl = getSafeDirectUrl();

  // Ensure process.env is synchronized so Prisma internal rust engine gets the exact path
  process.env["DATABASE_URL"] = safeUrl;
  if (directUrl && !process.env["DIRECT_URL"]) {
    process.env["DIRECT_URL"] = directUrl;
  }

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
