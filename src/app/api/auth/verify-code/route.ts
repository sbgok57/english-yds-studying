import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  const requestId = generateRequestId();
  let body: { email?: string; code?: string; challenge?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* empty */
  }

  const email = String(body.email || "").trim().toLowerCase();
  const code = String(body.code || "").trim();
  const challenge = String(body.challenge || "").trim();

  if (!email || !code || !challenge) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.MISSING_FIELDS,
        "E-posta, kod veya doğrulama verisi eksik kanka.",
        undefined,
        requestId
      ),
      { status: 400 }
    );
  }

  const parts = challenge.split(".");
  if (parts.length !== 2) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
        "Geçersiz doğrulama verisi kanka.",
        "challenge",
        requestId
      ),
      { status: 400 }
    );
  }

  const [payloadB64, sig] = parts;
  let exp = 0;
  try {
    const raw = b64urlDecode(payloadB64).toString("utf-8");
    const parsed = JSON.parse(raw);
    if (parsed.email !== email) {
      return NextResponse.json(
        authError(
          AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
          "E-posta adresi eşleşmiyor kanka.",
          "email",
          requestId
        ),
        { status: 400 }
      );
    }
    exp = Number(parsed.exp) || 0;
  } catch {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
        "Doğrulama verisi okunamadı kanka.",
        "challenge",
        requestId
      ),
      { status: 400 }
    );
  }

  if (Date.now() > exp) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
        "Kodun süresi dolmuş kanka (10 dk). Lütfen yeni kod iste.",
        "code",
        requestId
      ),
      { status: 400 }
    );
  }

  const expectedSig = createHmac("sha256", AUTH_SECRET)
    .update(`${email}.${code}.${exp}`)
    .digest("hex");

  if (expectedSig !== sig) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INVALID_OR_EXPIRED_CODE,
        "Doğrulama kodu hatalı kanka. Tekrar kontrol et.",
        "code",
        requestId
      ),
      { status: 400 }
    );
  }

  return NextResponse.json(
    authSuccess({ verified: true }, "E-posta başarıyla doğrulandı kanka! 🎉", requestId),
    { status: 200 }
  );
}
