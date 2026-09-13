
import { NextRequest } from "next/server";
import { createHmac, randomInt } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Doğrulama kodu: stateless imzalı "challenge" ile taşınır (sunucu belleği gerekmez,
// Vercel/serverless ortamlarında da güvenle çalışır).
const SECRET = process.env.AUTH_SECRET || "yds-master-verification-secret-v1";
const CODE_TTL_MS = 10 * 60 * 1000; // 10 dakika

// Basit hız sınırı (işlem başına, bellek içi)
const rate = new Map<string, number>();
const RATE_WINDOW = 60_000; // 1 dk

function b64url(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

interface SendResult {
  ok: boolean;
  demo?: boolean;
  message?: string;
}

async function sendEmail(to: string, code: string): Promise<SendResult> {
  const subject = "YDS Master — Doğrulama Kodun 🔐";
  const text = `Kanka, merhaba! 👋\n\nYDS Master hesabın için doğrulama kodun: ${code}\n\nBu kod 10 dakika geçerli. Kodu hesap sayfasına gir ve hesabını aç.\n\n— YDS Master`;
  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:480px;margin:0 auto;padding:28px;background:#0f172a;color:#e2e8f0;border-radius:16px"><h2 style="margin:0 0 8px">🧠 YDS Master</h2><p style="margin:0 0 16px">Kanka, merhaba! 👋</p><p style="margin:0 0 8px">Hesabın için doğrulama kodun:</p><p style="font-size:36px;font-weight:800;letter-spacing:8px;color:#22d3ee;margin:8px 0 16px">${code}</p><p style="font-size:12px;color:#94a3b8;margin:0">Bu kod 10 dakika geçerli. Kodu hesap sayfasına gir.</p></div>`;

  // 1) Resend (HTTP API)
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "YDS Master <onboarding@resend.dev>",
          to,
          subject,
          text,
          html,
        }),
      });
      if (res.ok) return { ok: true };
      return { ok: false, message: `E-posta gönderilemedi (Resend HTTP ${res.status}).` };
    } catch {
      return { ok: false, message: "E-posta servisine ulaşılamadı kanka." };
    }
  }

  // 2) SMTP (nodemailer — örn. Gmail uygulama şifresi)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: process.env.SMTP_SECURE === "false" ? false : true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to,
        subject,
        text,
        html,
      });
      return { ok: true };
    } catch {
      return { ok: false, message: "SMTP ile gönderilemedi. Ayarları kontrol et kanka." };
    }
  }

  // 3) Yapılandırma yok → demo modu (kod arayüzde gösterilir)
  return { ok: true, demo: true };
}

export async function POST(req: NextRequest) {
  let body: { email?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* boş */
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, message: "Geçerli bir e-posta gir kanka (örn. kanka@mail.com)." },
      { status: 400 }
    );
  }

  const now = Date.now();
  const last = rate.get(email) || 0;
  if (now - last < RATE_WINDOW) {
    const wait = Math.ceil((RATE_WINDOW - (now - last)) / 1000);
    return Response.json(
      { ok: false, message: `Az önce kod gönderdim kanka. ${wait} saniye bekle, sonra tekrar iste.` },
      { status: 429 }
    );
  }
  rate.set(email, now);

  const code = String(randomInt(0, 1000000)).padStart(6, "0");
  const exp = now + CODE_TTL_MS;

  const payload = b64url(Buffer.from(JSON.stringify({ email, exp })));
  const sig = createHmac("sha256", SECRET).update(`${email}.${code}.${exp}`).digest("hex");
  const challenge = `${payload}.${sig}`;

  const sent = await sendEmail(email, code);
  if (!sent.ok) {
    return Response.json({ ok: false, message: sent.message }, { status: 502 });
  }

  return Response.json({
    ok: true,
    demo: !!sent.demo,
    // demo modunda kodu arayüze dön (gerçek gönderim yokken kullanıcı akışı test edilebilsin)
    code: sent.demo ? code : undefined,
    challenge,
    expiresIn: CODE_TTL_MS / 1000,
    message: sent.demo
      ? "Demo modu: e-posta gönderimi yapılandırılmadı, kod aşağıda."
      : "Doğrulama kodu e-postana gönderildi kanka! 📬 Gelen kutunu (ve spam'i) kontrol et.",
  });
}
