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
import { loginPermanentUser } from "@/lib/supabase-auth-service";

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

    // Authenticate permanently via Supabase cloud + SQLite fallback with auto-migration
    const loginResult = await loginPermanentUser(rawIdentifier, password);

    if (!loginResult.success || !loginResult.user) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          loginResult.error || "Kullanıcı adı/e-posta veya parola hatalı.",
          loginResult.field || "identifier",
          requestId
        ),
        { status: 401 }
      );
    }

    const safeUser: SafeUser = loginResult.user;

    // Sign session token
    const token = await signSessionToken({
      userId: safeUser.id,
      email: safeUser.email,
      username: safeUser.username,
      name: safeUser.username,
    });

    const responsePayload = {
      ok: true,
      data: {
        user: {
          ...safeUser,
          name: safeUser.username,
        },
        safeUser,
      },
      message: `Hoş geldin ${safeUser.username}! Başarıyla giriş yapıldı.`,
      requestId,
    };

    const res = NextResponse.json(responsePayload, { status: 200 });

    const rememberMe = Boolean(body.rememberMe);

    if (rememberMe) {
      // 🔒 Kalıcı Oturum: 365 gün boyunca açık kalır
      res.cookies.set({
        name: SESSION_COOKIE_NAME,
        value: token,
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 365 * 24 * 60 * 60,
      });
      res.cookies.set({
        name: "yds_remember_choice",
        value: "true",
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 365 * 24 * 60 * 60,
      });
    } else {
      // ⏳ Geçici / Tek Seferlik Oturum (Session Cookie):
      // maxAge verilmez -> Tarayıcı veya uygulama kapatıldığında oturum silinir!
      res.cookies.set({
        name: SESSION_COOKIE_NAME,
        value: token,
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      res.cookies.delete("yds_remember_choice");
    }

    console.info(`[AUTH_LOGIN_SUCCESS] ${requestId} - User ${safeUser.username} (${safeUser.email}) logged in successfully.`);
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
