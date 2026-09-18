import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createHmac } from "crypto";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECRET = process.env.AUTH_SECRET || "yds-master-verification-secret-v1";

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

    const expectedSig = createHmac("sha256", SECRET)
      .update(`${email}.${code}.${parsed.exp}`)
      .digest("hex");
    return expectedSig === sig;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
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
        { ok: false, message: "Lütfen geçerli bir e-posta adresi girin kanka." },
        { status: 400 }
      );
    }

    const username = rawUsername.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20) || `kullanici_${Date.now().toString().slice(-4)}`;
    if (username.length < 3) {
      return NextResponse.json(
        { ok: false, message: "Kullanıcı adı en az 3 karakter olmalı kanka." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { ok: false, message: "Şifre en az 6 karakter olmalıdır kanka." },
        { status: 400 }
      );
    }

    // 2. Verification Challenge Check (if challenge provided)
    if (challenge && code) {
      const isCodeValid = verifyChallengeCode(email, code, challenge);
      if (!isCodeValid) {
        return NextResponse.json(
          { ok: false, message: "E-posta doğrulama kodu geçersiz veya süresi dolmuş kanka." },
          { status: 400 }
        );
      }
    }

    // 3. Existing User Checks
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return NextResponse.json(
        { ok: false, message: "Bu e-posta adresiyle zaten kayıtlı bir hesap var kanka. Giriş yapmayı dene!" },
        { status: 409 }
      );
    }

    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return NextResponse.json(
        { ok: false, message: "Bu kullanıcı adı zaten alınmış kanka. Lütfen başka bir kullanıcı adı seç!" },
        { status: 409 }
      );
    }

    // 4. Create User
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        passwordHash,
        level: "A1",
        streak: 1,
        totalPoints: 50,
        avatarId: "astronaut",
      },
    });

    // 5. Sign Session Token & Issue Cookie
    const token = await signSessionToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      name: user.username,
    });

    const res = NextResponse.json({
      ok: true,
      message: `Aramıza hoş geldin ${user.username}! Hesabın başarıyla oluşturuldu. 🚀`,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        avatarId: user.avatarId,
        level: user.level,
        streak: user.streak,
        totalPoints: user.totalPoints,
      },
    });

    res.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
    });

    return res;
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { ok: false, message: "Kayıt işlemi sırasında bir hata oluştu kanka. Lütfen tekrar dene." },
      { status: 500 }
    );
  }
}
