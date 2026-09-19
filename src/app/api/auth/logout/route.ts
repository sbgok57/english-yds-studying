import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { authSuccess, generateRequestId } from "@/lib/auth-contract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const requestId = generateRequestId();
  const res = NextResponse.json(
    authSuccess(
      { loggedOut: true },
      "Başarıyla çıkış yapıldı kanka. Tekrar görüşmek üzere! 👋",
      requestId
    )
  );

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
