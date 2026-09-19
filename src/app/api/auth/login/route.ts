import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import {
  AUTH_ERROR_CODES,
  authError,
  authSuccess,
  generateRequestId,
  SafeUser,
} from "@/lib/auth-contract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const requestId = generateRequestId();

  try {
    const body = await req.json().catch(() => ({}));
    const rawIdentifier = String(body.email || body.identifier || "").trim();
    const password = String(body.password || "").trim();

    if (!rawIdentifier || !password) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.MISSING_FIELDS,
          "Lütfen e-posta veya kullanıcı adınızı ve şifrenizi girin kanka.",
          !rawIdentifier ? "identifier" : "password",
          requestId
        ),
        { status: 400 }
      );
    }

    const lowerIdentifier = rawIdentifier.toLowerCase();

    // Query user by email (normalized lowercase) or username (either exact or lower)
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: lowerIdentifier },
          { username: rawIdentifier },
          { username: lowerIdentifier },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          "Kullanıcı adı/e-posta veya şifre hatalı kanka. Bilgilerini kontrol et veya kayıt ol!",
          "identifier",
          requestId
        ),
        { status: 401 }
      );
    }

    // Secure password comparison
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          "Kullanıcı adı/e-posta veya şifre hatalı kanka. Lütfen tekrar dene!",
          "password",
          requestId
        ),
        { status: 401 }
      );
    }

    // Sign session token
    const token = await signSessionToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      name: user.username,
    });

    const safeUser: SafeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      avatarId: user.avatarId,
      level: user.level,
      streak: user.streak,
      totalPoints: user.totalPoints,
      createdAt: user.createdAt.toISOString(),
    };

    const responsePayload = authSuccess(
      { user: safeUser },
      `Hoş geldin ${user.username}! Başarıyla giriş yapıldı. 🎉`,
      requestId
    );

    const res = NextResponse.json(responsePayload, { status: 200 });

    res.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    console.log(`[AUTH_LOGIN_SUCCESS] ${requestId} - User ${user.username} (${user.email}) logged in successfully.`);
    return res;
  } catch (error: any) {
    console.error(`[AUTH_LOGIN_ERROR] ${requestId} -`, {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      stack: error?.stack,
    });

    const isDbError =
      error?.name === "PrismaClientInitializationError" ||
      error?.name === "PrismaClientRustPanicError" ||
      error?.message?.includes("database") ||
      error?.message?.includes("datasource");

    const statusCode = isDbError ? 503 : 500;
    const errorCode = isDbError ? AUTH_ERROR_CODES.DATABASE_UNAVAILABLE : AUTH_ERROR_CODES.INTERNAL_SERVER_ERROR;
    const clientMessage = isDbError
      ? "Veritabanı servisine şu an erişilemiyor. Lütfen biraz sonra tekrar deneyin."
      : "Giriş yapılırken sunucu hatası oluştu kanka. Lütfen tekrar dene.";

    return NextResponse.json(
      authError(errorCode, clientMessage, undefined, requestId),
      { status: statusCode }
    );
  }
}
