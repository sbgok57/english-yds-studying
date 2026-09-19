import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createHmac } from "crypto";
import { AUTH_SECRET } from "@/lib/server-config";
import {
  AUTH_ERROR_CODES,
  authError,
  authSuccess,
  generateRequestId,
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
    const code = String(body.code || "").trim();
    const challenge = String(body.challenge || "").trim();
    const newPassword = String(body.newPassword || "").trim();

    if (!email || !newPassword) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.MISSING_FIELDS,
          "E-posta ve yeni şifre zorunludur kanka.",
          !email ? "email" : "newPassword",
          requestId
        ),
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.WEAK_PASSWORD,
          "Yeni şifre en az 6 karakter olmalıdır kanka.",
          "newPassword",
          requestId
        ),
        { status: 400 }
      );
    }

    if (challenge && code) {
      const isCodeValid = verifyChallengeCode(email, code, challenge);
      if (!isCodeValid) {
        return NextResponse.json(
          authError(
            AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
            "Doğrulama kodu geçersiz veya süresi dolmuş kanka.",
            "code",
            requestId
          ),
          { status: 400 }
        );
      }
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.USER_NOT_FOUND,
          "Bu e-posta adresine sahip bir kullanıcı bulunamadı kanka.",
          "email",
          requestId
        ),
        { status: 404 }
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash },
    });

    console.log(`[AUTH_RESET_PASSWORD_SUCCESS] ${requestId} - Password reset for user: ${email}`);

    return NextResponse.json(
      authSuccess(
        { reset: true },
        "Şifren başarıyla güncellendi kanka! Artık yeni şifrenle giriş yapabilirsin. 🔐",
        requestId
      ),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`[AUTH_RESET_PASSWORD_ERROR] ${requestId} -`, error);
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INTERNAL_SERVER_ERROR,
        "Şifre yenileme sırasında bir hata oluştu kanka.",
        undefined,
        requestId
      ),
      { status: 500 }
    );
  }
}
