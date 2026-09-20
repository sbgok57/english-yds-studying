import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateRequestId } from "@/lib/auth-contract";
import { withDbRetry } from "@/lib/db-retry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const requestId = generateRequestId();

  try {
    const startTime = Date.now();
    await withDbRetry(
      async () => {
        await prisma.user.findFirst({ select: { id: true } });
      },
      { maxRetries: 1, timeoutMs: 3000, requestId, operationName: "database_health" }
    );
    const latencyMs = Date.now() - startTime;

    return NextResponse.json(
      {
        ok: true,
        database: "connected",
        latencyMs,
        requestId,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (err: any) {
    console.error(`[DB_HEALTH_ERROR] ${requestId} -`, err?.message || err);

    return NextResponse.json(
      {
        ok: false,
        database: "disconnected",
        error: {
          code: "DATABASE_UNAVAILABLE",
          message: "Veritabanı bağlantısı kurulamadı.",
        },
        requestId,
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}
