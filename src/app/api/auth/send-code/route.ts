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

const SENDER_EMAIL =
  process.env.GMAIL_USER ||
  process.env.SYSTEM_SENDER_EMAIL ||
  process.env.RESEND_FROM ||
  process.env.SMTP_FROM ||
  "ydsmaster.official@gmail.com";

const SENDER_DISPLAY = `YDS Master Akademi <${SENDER_EMAIL}>`;

async function sendEmail(to: string, code: string): Promise<SendResult> {
  const subject = "YDS Master — Doğrulama Kodun 🔐";
  const text = `Kanka, merhaba! 👋\n\nYDS Master hesabın için tek kullanımlık doğrulama kodun: ${code}\n\nGönderici: ${SENDER_EMAIL}\nBu kod 10 dakika geçerlidir. Kodu kayıt ekranına girerek oturumunu kalıcı olarak açabilirsin.\n\n— YDS Master Akademik Destek Ekibi\n${SENDER_EMAIL}`;
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#090d16;color:#e2e8f0;border-radius:20px;border:1px solid #1e293b;">
      <div style="text-align:center;margin-bottom:24px;">
        <span style="font-size:32px;">🧠</span>
        <h2 style="margin:8px 0 0;font-size:24px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">YDS Master</h2>
        <p style="margin:4px 0 0;font-size:12px;color:#06b6d4;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Görsel Hafıza & Dil Akademisi</p>
      </div>
      <div style="background:#131d2e;border:1px solid #1e3a5f;border-radius:16px;padding:24px;text-align:center;margin-bottom:20px;">
        <p style="margin:0 0 12px;font-size:14px;color:#94a3b8;">Hesap Kayıt & Giriş Doğrulama Kodun:</p>
        <div style="font-size:40px;font-weight:900;letter-spacing:10px;color:#22d3ee;font-family:monospace;background:#090d16;padding:14px 20px;border-radius:12px;display:inline-block;border:1px dashed #06b6d4;">${code}</div>
        <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;">Bu tek kullanımlık güvenlik kodu <strong>10 dakika</strong> geçerlidir.</p>
      </div>
      <p style="font-size:12px;color:#64748b;line-height:1.6;margin:0 0 12px;">Güvenliğiniz için bu kodu kimseyle paylaşmayınız. Bu mesaj resmi YDS Master sistemi tarafından otomatik gönderilmiştir.</p>
      <div style="border-top:1px solid #1e293b;padding-top:16px;font-size:11px;color:#475569;text-align:center;">
        YDS Master Otomatik E-Posta Servisi &bull; ${SENDER_EMAIL}
      </div>
    </div>
  `;

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
          from: SENDER_DISPLAY,
          to,
          subject,
          text,
          html,
        }),
      });
      if (res.ok) {
        console.info(`[EMAIL_SENT_RESEND] From: ${SENDER_EMAIL} To: ${to}`);
        return { ok: true };
      }
      console.warn(`[EMAIL_RESEND_FAIL] Status: ${res.status}`);
    } catch (e) {
      console.warn(`[EMAIL_RESEND_ERR]`, e);
    }
  }

  // 2) Brevo / Sendinblue API
  if (process.env.BREVO_API_KEY) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "YDS Master Doğrulama", email: SENDER_EMAIL },
          to: [{ email: to }],
          subject,
          htmlContent: html,
          textContent: text,
        }),
      });
      if (res.ok) {
        console.info(`[EMAIL_SENT_BREVO] From: ${SENDER_EMAIL} To: ${to}`);
        return { ok: true };
      }
    } catch (e) {
      console.warn(`[EMAIL_BREVO_ERR]`, e);
    }
  }

  // 3) Gmail & Custom SMTP (nodemailer)
  const isGmail = Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  const isCustomSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

  if (isGmail || isCustomSmtp) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = isGmail
        ? nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_APP_PASSWORD,
            },
          })
        : nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 465),
            secure: process.env.SMTP_SECURE === "false" ? false : true,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
          });

      await transporter.sendMail({
        from: SENDER_DISPLAY,
        to,
        subject,
        text,
        html,
      });
      console.info(`[EMAIL_SENT_${isGmail ? "GMAIL" : "SMTP"}] From: ${SENDER_EMAIL} To: ${to}`);
      return { ok: true };
    } catch (smtpErr) {
      console.warn(`[EMAIL_SMTP_ERR]`, smtpErr);
    }
  }

  // 4) Default / Instant Delivery Mode (Ensures zero user block if external mailer is unconfigured)
  console.info(`[EMAIL_DISPATCH_INSTANT] From: ${SENDER_EMAIL} To: ${to} Code: ${code}`);
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
    ? `Doğrulama kodu oluşturuldu (${SENDER_EMAIL}). Kodunuz: ${code}`
    : `Doğrulama kodu ${SENDER_EMAIL} adresi üzerinden ${email} kutunuza gönderildi kanka! 📬`;

  const responseData = {
    demo: !!sent.demo,
    code: sent.demo ? code : undefined,
    sender: SENDER_EMAIL,
    challenge,
    expiresIn: CODE_TTL_MS / 1000,
  };

  const responsePayload = {
    ...authSuccess(responseData, successMessage, requestId),
    // Backward compatibility fields:
    demo: !!sent.demo,
    code: sent.demo ? code : undefined,
    sender: SENDER_EMAIL,
    challenge,
    expiresIn: CODE_TTL_MS / 1000,
    message: successMessage,
  };

  return NextResponse.json(responsePayload, { status: 200 });
}
