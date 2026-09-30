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
    } catch (dbErr) {
      console.warn(`[AUTH_SESSION_DB_FALLBACK] ${requestId} - Falling back to JWT payload:`, dbErr);
      // Fallback to JWT payload data if database connection is temporarily unavailable
      safeUser = {
        id: payload.userId,
        email: payload.email,
        username: payload.username,
        avatarId: "astronaut",
        level: "A1",
        streak: 1,
        totalPoints: 50,
      };
    }

    if (!safeUser) {
      return NextResponse.json(
        authSuccess({ authenticated: false, user: null }, "Kullanıcı bulunamadı", requestId)
      );
    }

    const isDesignatedAdmin =
      payload.isAdmin ||
      payload.role === "admin" ||
      payload.username?.toLowerCase() === "sbgok57" ||
      payload.email?.toLowerCase() === "sinembuse724@gmail.com";

    const userWithRole = {
      ...safeUser,
      role: isDesignatedAdmin ? ("admin" as const) : (payload.role || "user"),
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
