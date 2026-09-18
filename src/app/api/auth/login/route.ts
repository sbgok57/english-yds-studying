import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawIdentifier = String(body.email || body.identifier || "").trim().toLowerCase();
    const password = String(body.password || "").trim();

    if (!rawIdentifier || !password) {
      return NextResponse.json(
        { ok: false, message: "Lütfen e-posta veya kullanıcı adınızı ve şifrenizi girin kanka." },
        { status: 400 }
      );
    }

    // Email or username lookup
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: rawIdentifier },
          { username: rawIdentifier },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Bu bilgilere sahip bir kullanıcı bulunamadı kanka. Bilgilerini kontrol et veya kayıt ol!" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { ok: false, message: "Şifreniz hatalı kanka. Lütfen tekrar deneyin!" },
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

    const res = NextResponse.json({
      ok: true,
      message: `Hoş geldin ${user.username}! Başarıyla giriş yapıldı. 🎉`,
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
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    return res;
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { ok: false, message: "Giriş yapılırken sunucu hatası oluştu kanka. Lütfen tekrar dene." },
      { status: 500 }
    );
  }
}
