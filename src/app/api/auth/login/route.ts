import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { withDbRetry } from "@/lib/db-retry";
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
    const rawIdentifier = String(body.identifier || body.email || "").trim();
    const password = String(body.password || "").trim();

    if (!rawIdentifier || !password) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.MISSING_FIELDS,
          "Lütfen kullanıcı adı veya e-posta ile parolanızı girin.",
          !rawIdentifier ? "identifier" : "password",
          requestId
        ),
        { status: 400 }
      );
    }

    const lowerIdentifier = rawIdentifier.toLowerCase();
    const isEmail = lowerIdentifier.includes("@");

    // Query user by normalized email or username with transient retry protection
    const user = await withDbRetry(
      async () => {
        return prisma.user.findFirst({
          where: isEmail
            ? { email: lowerIdentifier }
            : {
                OR: [
                  { username: rawIdentifier },
                  { username: lowerIdentifier },
                ],
              },
        });
      },
      { maxRetries: 2, timeoutMs: 5000, requestId, operationName: "login_user_lookup" }
    );

    // Uniform timing / error message for both user-not-found and invalid password
    if (!user) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          "Kullanıcı adı/e-posta veya parola hatalı.",
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
          "Kullanıcı adı/e-posta veya parola hatalı.",
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

    const responsePayload = {
      ok: true,
      data: {
        user: {
          ...safeUser,
          name: user.username,
        },
        safeUser,
      },
      message: `Hoş geldin ${user.username}! Başarıyla giriş yapıldı.`,
      requestId,
    };

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
      error?.name === "PrismaClientKnownRequestError" ||
      error?.name === "PrismaClientRustPanicError" ||
      error?.name === "DatabaseTimeoutError" ||
      error?.code === "ETIMEDOUT" ||
      error?.code === "ECONNREFUSED" ||
      error?.code === "P1001" ||
      error?.code === "P1002" ||
      error?.code === "P1008" ||
      error?.code === "P1011" ||
      error?.code === "P1017" ||
      error?.message?.includes("database") ||
      error?.message?.includes("datasource") ||
      error?.message?.includes("connection");

    const statusCode = isDbError ? 503 : 500;
    const errorCode = isDbError ? AUTH_ERROR_CODES.DATABASE_UNAVAILABLE : AUTH_ERROR_CODES.INTERNAL_SERVER_ERROR;
    const clientMessage = isDbError
      ? "Veritabanı bağlantısı geçici olarak kurulamadı."
      : "Giriş yapılırken sunucu hatası oluştu kanka. Lütfen tekrar dene.";

    return NextResponse.json(
      authError(errorCode, clientMessage, undefined, requestId),
      { status: statusCode }
    );
  }
}
