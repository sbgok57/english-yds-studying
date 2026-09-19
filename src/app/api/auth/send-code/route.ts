import { NextRequest, NextResponse } from "next/server";
import { createHmac, randomInt } from "crypto";
import { AUTH_SECRET } from "@/lib/server-config";
import {
  AUTH_ERROR_CODES,
  authError,
  authSuccess,
  generateRequestId,
} from "@/lib/auth-contract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CODE_TTL_MS = 10 * 60 * 1000; // 10 minutes

// In-memory rate limiting per email (60s window)
const rate = new Map<string, number>();
const RATE_WINDOW = 60_000; // 1 min

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

  // 2) SMTP (nodemailer)
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

  // 3) Default -> demo mode
  return { ok: true, demo: true };
}

export async function POST(req: NextRequest) {
  const requestId = generateRequestId();
  let body: { email?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* empty */
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.INVALID_EMAIL,
        "Geçerli bir e-posta gir kanka (örn. kanka@mail.com).",
        "email",
        requestId
      ),
      { status: 400 }
    );
  }

  const now = Date.now();
  const last = rate.get(email) || 0;
  if (now - last < RATE_WINDOW) {
    const wait = Math.ceil((RATE_WINDOW - (now - last)) / 1000);
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.RATE_LIMITED,
        `Az önce kod gönderdim kanka. ${wait} saniye bekle, sonra tekrar iste.`,
        "email",
        requestId
      ),
      { status: 429 }
    );
  }
  rate.set(email, now);

  const code = String(randomInt(0, 1000000)).padStart(6, "0");
  const exp = now + CODE_TTL_MS;

  const payload = b64url(Buffer.from(JSON.stringify({ email, exp })));
  const sig = createHmac("sha256", AUTH_SECRET).update(`${email}.${code}.${exp}`).digest("hex");
  const challenge = `${payload}.${sig}`;

  const sent = await sendEmail(email, code);
  if (!sent.ok) {
    return NextResponse.json(
      authError(
        AUTH_ERROR_CODES.EMAIL_DELIVERY_FAILED,
        sent.message || "E-posta gönderimi başarısız oldu.",
        "email",
        requestId
      ),
      { status: 502 }
    );
  }

  const successMessage = sent.demo
    ? "Demo modu: e-posta gönderimi yapılandırılmadı, kod aşağıda."
    : "Doğrulama kodu e-postana gönderildi kanka! 📬 Gelen kutunu (ve spam'i) kontrol et.";

  const responseData = {
    demo: !!sent.demo,
    code: sent.demo ? code : undefined,
    challenge,
    expiresIn: CODE_TTL_MS / 1000,
  };

  const responsePayload = {
    ...authSuccess(responseData, successMessage, requestId),
    // Backward compatibility fields:
    demo: !!sent.demo,
    code: sent.demo ? code : undefined,
    challenge,
    expiresIn: CODE_TTL_MS / 1000,
    message: successMessage,
  };

  return NextResponse.json(responsePayload, { status: 200 });
}
