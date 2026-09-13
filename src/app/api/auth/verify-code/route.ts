import { NextRequest } from "next/server";
import { createHmac } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECRET = process.env.AUTH_SECRET || "yds-master-verification-secret-v1";

function b64urlDecode(str: string): Buffer {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  return Buffer.from(b64, "base64");
}

export async function POST(req: NextRequest) {
  let body: { email?: string; code?: string; challenge?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* boş */
  }

  const email = String(body.email || "").trim().toLowerCase();
  const code = String(body.code || "").trim();
  const challenge = String(body.challenge || "").trim();

  if (!email || !code || !challenge) {
    return Response.json(
      { ok: false, message: "E-posta, kod veya doğrulama verisi eksik kanka." },
      { status: 400 }
    );
  }

  const parts = challenge.split(".");
  if (parts.length !== 2) {
    return Response.json(
      { ok: false, message: "Geçersiz doğrulama verisi kanka." },
      { status: 400 }
    );
  }

  const [payloadB64, sig] = parts;
  let exp = 0;
  try {
    const raw = b64urlDecode(payloadB64).toString("utf-8");
    const parsed = JSON.parse(raw);
    if (parsed.email !== email) {
      return Response.json(
        { ok: false, message: "E-posta adresi eşleşmiyor kanka." },
        { status: 400 }
      );
    }
    exp = Number(parsed.exp) || 0;
  } catch {
    return Response.json(
      { ok: false, message: "Doğrulama verisi okunamadı kanka." },
      { status: 400 }
    );
  }

  if (Date.now() > exp) {
    return Response.json(
      { ok: false, message: "Kodun süresi dolmuş kanka (10 dk). Lütfen yeni kod iste." },
      { status: 400 }
    );
  }

  const expectedSig = createHmac("sha256", SECRET)
    .update(`${email}.${code}.${exp}`)
    .digest("hex");

  if (expectedSig !== sig) {
    return Response.json(
      { ok: false, message: "Doğrulama kodu hatalı kanka. Tekrar kontrol et." },
      { status: 400 }
    );
  }

  return Response.json({
    ok: true,
    message: "E-posta başarıyla doğrulandı kanka! 🎉",
  });
}
