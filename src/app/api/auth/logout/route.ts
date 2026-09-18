import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/server-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const res = NextResponse.json({
    ok: true,
    message: "Başarıyla çıkış yapıldı kanka. Tekrar görüşmek üzere! 👋",
  });

  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    expires: new Date(0),
    maxAge: 0,
  });

  return res;
}
