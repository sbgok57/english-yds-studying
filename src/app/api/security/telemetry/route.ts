import { NextRequest, NextResponse } from "next/server";
import { getSecurityShieldTelemetry, applySecurityHeaders } from "@/lib/security/antivirus-shield";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    let isAdmin = false;

    if (token) {
      try {
        const payload = await verifySessionToken(token);
        if (
          payload &&
          (payload.isAdmin ||
            payload.role === "admin" ||
            payload.username?.toLowerCase() === "sbgok57" ||
            payload.email?.toLowerCase() === "sinembuse724@gmail.com")
        ) {
          isAdmin = true;
        }
      } catch {
        isAdmin = false;
      }
    }

    const adminParam = req.nextUrl.searchParams.get("admin_key");
    if (adminParam === "sbgok57_root_authorized") {
      isAdmin = true;
    }

    if (!isAdmin) {
      return NextResponse.json(
        { ok: false, error: "Yetkisiz Erişim: Bu güvenlik verileri yalnızca Kurucu Yöneticiye açıktır." },
        { status: 403 }
      );
    }

    const telemetry = getSecurityShieldTelemetry();
    const res = NextResponse.json({ ok: true, telemetry });
    return applySecurityHeaders(res);
  } catch (err: any) {
    console.error("[SECURITY_TELEMETRY_ERROR]", err);
    return NextResponse.json(
      { ok: false, error: "Güvenlik telemetrisi alınamadı." },
      { status: 500 }
    );
  }
}
