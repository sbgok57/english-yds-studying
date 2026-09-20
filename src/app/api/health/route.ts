import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateRequestId } from "@/lib/auth-contract";
import { withDbRetry } from "@/lib/db-retry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const requestId = generateRequestId();

  try {
    // Quick, bounded probe query (checks if DB engine responds)
    await withDbRetry(
      async () => {
        // Probe User table or count
        await prisma.user.findFirst({ select: { id: true } });
      },
      { maxRetries: 1, timeoutMs: 3000, requestId, operationName: "health_probe" }
    );

    return NextResponse.json(
      {
        ok: true,
        services: {
          application: "up",
          database: "up",
        },
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
    console.error(`[HEALTH_CHECK_ERROR] ${requestId} - Database down:`, err?.message || err);

    return NextResponse.json(
      {
        ok: false,
        services: {
          application: "up",
          database: "down",
        },
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
