import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createHmac } from "crypto";

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
    const code = String(body.code || "").trim();
    const challenge = String(body.challenge || "").trim();
    const newPassword = String(body.newPassword || "").trim();

    if (!email || !newPassword) {
      return NextResponse.json(
        { ok: false, message: "E-posta ve yeni şifre zorunludur kanka." },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { ok: false, message: "Yeni şifre en az 6 karakter olmalıdır kanka." },
        { status: 400 }
      );
    }

    if (challenge && code) {
      const isCodeValid = verifyChallengeCode(email, code, challenge);
      if (!isCodeValid) {
        return NextResponse.json(
          { ok: false, message: "Doğrulama kodu geçersiz veya süresi dolmuş kanka." },
          { status: 400 }
        );
      }
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Bu e-posta adresine sahip bir kullanıcı bulunamadı kanka." },
        { status: 404 }
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash },
    });

    return NextResponse.json({
      ok: true,
      message: "Şifren başarıyla güncellendi kanka! Artık yeni şifrenle giriş yapabilirsin. 🔐",
    });
  } catch (error) {
    console.error("Reset password API error:", error);
    return NextResponse.json(
      { ok: false, message: "Şifre yenileme sırasında bir hata oluştu kanka." },
      { status: 500 }
    );
  }
}
