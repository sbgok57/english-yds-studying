// Secure Server-Side Session Token Management (Edge & Node compatible via Web Crypto)
import { AUTH_SECRET } from "./auth-secret";

export interface SessionPayload {
  userId: string;
  email: string;
  username: string;
  name: string;
  role?: "admin" | "user";
  isAdmin?: boolean;
  exp: number; // Unix timestamp in seconds
  iat: number;
}

const TOKEN_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds
export const SESSION_COOKIE_NAME = "yds_session_token";

function b64urlEncode(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(str: string): Uint8Array {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function getHmacKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signSessionToken(payload: Omit<SessionPayload, "iat" | "exp"> & { exp?: number }): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = payload.exp || iat + TOKEN_MAX_AGE;

  // SAFETY: user sbgok57 or sinembuse724@gmail.com is designated site admin
  const isTargetAdmin =
    payload.username?.toLowerCase() === "sbgok57" ||
    payload.email?.toLowerCase() === "sinembuse724@gmail.com" ||
    payload.role === "admin" ||
    payload.isAdmin === true;

  const fullPayload: SessionPayload = {
    ...payload,
    role: isTargetAdmin ? "admin" : (payload.role || "user"),
    isAdmin: isTargetAdmin,
    iat,
    exp,
  };

  const enc = new TextEncoder();
  const headerB64 = b64urlEncode(enc.encode(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  const payloadB64 = b64urlEncode(enc.encode(JSON.stringify(fullPayload)));
  const dataToSign = `${headerB64}.${payloadB64}`;

  const key = await getHmacKey(AUTH_SECRET);
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(dataToSign));
  const signatureB64 = b64urlEncode(signature);

  return `${dataToSign}.${signatureB64}`;
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, signatureB64] = parts;
  const dataToSign = `${headerB64}.${payloadB64}`;

  try {
    const enc = new TextEncoder();
    const key = await getHmacKey(AUTH_SECRET);
    const signatureBytes = b64urlDecode(signatureB64);

    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes as unknown as BufferSource,
      enc.encode(dataToSign)
    );

    if (!valid) return null;

    const payloadRaw = new TextDecoder().decode(b64urlDecode(payloadB64));
    const payload = JSON.parse(payloadRaw) as SessionPayload;

    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
