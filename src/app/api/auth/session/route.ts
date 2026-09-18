import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ ok: false, authenticated: false, user: null });
    }

    const payload = await verifySessionToken(token);
    if (!payload || !payload.userId) {
      return NextResponse.json({ ok: false, authenticated: false, user: null });
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        username: true,
        avatarId: true,
        level: true,
        streak: true,
        totalPoints: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ ok: false, authenticated: false, user: null });
    }

    return NextResponse.json({
      ok: true,
      authenticated: true,
      user,
    });
  } catch (error) {
    console.error("Session API error:", error);
    return NextResponse.json(
      { ok: false, authenticated: false, error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
