import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { authSuccess, generateRequestId, SafeUser } from "@/lib/auth-contract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const requestId = generateRequestId();

  try {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        authSuccess({ authenticated: false, user: null }, "Oturum bulunamadı", requestId)
      );
    }

    const payload = await verifySessionToken(token);
    if (!payload || !payload.userId) {
      return NextResponse.json(
        authSuccess({ authenticated: false, user: null }, "Oturum geçersiz", requestId)
      );
    }

    // Try finding fresh user record from database
    let safeUser: SafeUser | null = null;
    try {
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

      if (user) {
        safeUser = {
          ...user,
          createdAt: user.createdAt.toISOString(),
        };
      }
    } catch {
      // A signed token alone is not enough to keep an account active when the
      // current database record cannot be checked. Fail closed; do not invent
      // profile fields or grant stale roles from the token.
      return NextResponse.json(
        authSuccess({ authenticated: false, user: null }, "Hesap doğrulaması geçici olarak kullanılamıyor", requestId),
        { status: 503 }
      );
    }

    if (!safeUser) {
      return NextResponse.json(
        authSuccess({ authenticated: false, user: null }, "Kullanıcı bulunamadı", requestId)
      );
    }

    const isDesignatedAdmin = safeUser.email?.toLowerCase() === "sinembuse724@gmail.com";

    const userWithRole = {
      ...safeUser,
      role: isDesignatedAdmin ? ("admin" as const) : "user",
      isAdmin: isDesignatedAdmin,
    };

    return NextResponse.json(
      authSuccess(
        {
          authenticated: true,
          user: userWithRole,
        },
        "Oturum aktif",
        requestId
      )
    );
  } catch (error: any) {
    console.error(`[AUTH_SESSION_ERROR] ${requestId} -`, error);
    return NextResponse.json(
      authSuccess({ authenticated: false, user: null }, "Oturum doğrulanamadı", requestId)
    );
  }
}
