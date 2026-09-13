import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const dynamic = "force-dynamic";

const UsernameSchema = z
  .string()
  .min(3, "Kullanıcı adı en az 3 karakter olmalıdır")
  .max(20, "Kullanıcı adı en fazla 20 karakter olabilir")
  .regex(/^[a-zA-Z0-9_]+$/, "Sadece harf, rakam ve alt çizgi (_) içerebilir");

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const rawUsername = typeof body?.username === "string" ? body.username.trim() : "";

    const parseResult = UsernameSchema.safeParse(rawUsername);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const username = parseResult.data;

    // Kullanıcı adının benzersizliğini kontrol et
    const existing = await prisma.user.findUnique({
      where: { username },
    });

    if (existing && body.userId && existing.id !== body.userId) {
      return NextResponse.json(
        { error: "Bu kullanıcı adı zaten alınmış, lütfen başka bir isim deneyin!" },
        { status: 409 }
      );
    }

    if (body.userId) {
      await prisma.user.update({
        where: { id: body.userId },
        data: { username },
      });
    }

    return NextResponse.json({
      ok: true,
      username,
      message: "Kullanıcı adınız başarıyla güncellendi! ✅",
    });
  } catch (error) {
    console.error("Username update error:", error);
    return NextResponse.json(
      { error: "Kullanıcı adı güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
