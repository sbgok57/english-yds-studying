import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createHmac } from "crypto";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { AUTH_SECRET } from "@/lib/server-config";
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

function b64urlDecode(str: string): Buffer {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  return Buffer.from(b64, "base64");
}

function verifyChallengeCode(email: string, code: string, challenge: string): boolean {
  try {
    const parts = challenge.split(".");
    if (parts.length !== 2) return false;
    const [payloadB64, sig] = parts;
    const raw = b64urlDecode(payloadB64).toString("utf-8");
    const parsed = JSON.parse(raw);
    if (parsed.email !== email) return false;
    if (Date.now() > Number(parsed.exp)) return false;

    const expectedSig = createHmac("sha256", AUTH_SECRET)
      .update(`${email}.${code}.${parsed.exp}`)
      .digest("hex");
    return expectedSig === sig;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const requestId = generateRequestId();

  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();
    const rawUsername = String(body.username || body.name || "").trim();
    const password = String(body.password || "").trim();
    const code = String(body.code || "").trim();
    const challenge = String(body.challenge || "").trim();

    // 1. Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_EMAIL,
          "Lütfen geçerli bir e-posta adresi girin kanka.",
          "email",
          requestId
        ),
        { status: 400 }
      );
    }

    const username =
      rawUsername.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20) ||
      `kullanici_${Date.now().toString().slice(-4)}`;

    if (username.length < 3) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_USERNAME,
          "Kullanıcı adı en az 3 karakter olmalı kanka.",
          "username",
          requestId
        ),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.WEAK_PASSWORD,
          "Şifre en az 6 karakter olmalıdır kanka.",
          "password",
          requestId
        ),
        { status: 400 }
      );
    }

    // 2. Verification Challenge Check (if challenge provided)
    if (challenge && code) {
      const isCodeValid = verifyChallengeCode(email, code, challenge);
      if (!isCodeValid) {
        return NextResponse.json(
          authError(
            AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
            "E-posta doğrulama kodu geçersiz veya süresi dolmuş kanka.",
            "code",
            requestId
          ),
          { status: 400 }
        );
      }
    }

    // 3. Existing User Checks with transient retry
    const existingEmail = await withDbRetry(
      () => prisma.user.findUnique({ where: { email } }),
      { maxRetries: 2, timeoutMs: 5000, requestId, operationName: "check_existing_email" }
    );
    if (existingEmail) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.EMAIL_ALREADY_IN_USE,
          "Bu e-posta adresiyle zaten kayıtlı bir hesap var kanka. Giriş yapmayı dene!",
          "email",
          requestId
        ),
        { status: 409 }
      );
    }

    const existingUsername = await withDbRetry(
      () => prisma.user.findUnique({ where: { username } }),
      { maxRetries: 2, timeoutMs: 5000, requestId, operationName: "check_existing_username" }
    );
    if (existingUsername) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.USERNAME_ALREADY_IN_USE,
          "Bu kullanıcı adı zaten alınmış kanka. Lütfen başka bir kullanıcı adı seç!",
          "username",
          requestId
        ),
        { status: 409 }
      );
    }

    // 4. Create User atomically
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await withDbRetry(
      () =>
        prisma.user.create({
          data: {
            email,
            username,
            passwordHash,
            level: "A1",
            streak: 1,
            totalPoints: 50,
            avatarId: "astronaut",
          },
        }),
      { maxRetries: 2, timeoutMs: 6000, requestId, operationName: "create_user" }
    );

    // 5. Sign Session Token & Issue Cookie
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
      {
        user: {
          ...safeUser,
          name: user.username,
        },
        safeUser,
      },
      `Aramıza hoş geldin ${user.username}! Hesabın başarıyla oluşturuldu. 🚀`,
      requestId
    );

    const res = NextResponse.json(responsePayload, { status: 201 });

    res.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
    });

    console.log(`[AUTH_REGISTER_SUCCESS] ${requestId} - User ${user.username} (${user.email}) registered.`);
    return res;
  } catch (error: any) {
    console.error(`[AUTH_REGISTER_ERROR] ${requestId} -`, {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      stack: error?.stack,
    });

    // Catch unique constraint collision (P2002) in race conditions
    if (error?.code === "P2002") {
      const target = Array.isArray(error?.meta?.target) ? error.meta.target.join(", ") : "Bilgiler";
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.EMAIL_ALREADY_IN_USE,
          `Bu ${target.includes("email") ? "e-posta" : "kullanıcı adı"} az önce başka bir kullanıcı tarafından alındı.`,
          target.includes("email") ? "email" : "username",
          requestId
        ),
        { status: 409 }
      );
    }

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
      error?.message?.includes("readonly") ||
      error?.message?.includes("database") ||
      error?.message?.includes("datasource") ||
      error?.message?.includes("connection");

    const statusCode = isDbError ? 503 : 500;
    const errorCode = isDbError ? AUTH_ERROR_CODES.DATABASE_UNAVAILABLE : AUTH_ERROR_CODES.INTERNAL_SERVER_ERROR;
    const clientMessage = isDbError
      ? "Veritabanı bağlantısı geçici olarak kurulamadı."
      : "Kayıt işlemi sırasında bir hata oluştu kanka. Lütfen tekrar dene.";

    return NextResponse.json(
      authError(errorCode, clientMessage, undefined, requestId),
      { status: statusCode }
    );
  }
}
