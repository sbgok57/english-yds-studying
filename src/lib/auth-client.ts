// Resilient Client-Side Authentication Service for YDS Master

import { AuthErrorDetails, SafeUser } from "./auth-contract";

export interface ClientAuthResult<T = unknown> {
  ok: boolean;
  data?: T;
  error?: AuthErrorDetails;
  message?: string;
  requestId?: string;
  isNetworkError?: boolean;
}

const DEFAULT_TIMEOUT_MS = 10_000; // 10s timeout per anti-crash rule

/**
 * Resilient HTTP request helper with AbortController timeout,
 * Content-Type guard, and structured error normalization.
 */
export async function authRequest<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<ClientAuthResult<T>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      credentials: "include",
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options.headers || {}),
      },
    });

    // Content-Type guard: prevent crash if response is HTML (e.g. 502 gateway error)
    const contentType = res.headers.get("content-type") || "";
    let parsedJson: any = null;

    if (contentType.includes("application/json")) {
      try {
        parsedJson = await res.json();
      } catch {
        parsedJson = null;
      }
    }

    if (!res.ok) {
      const fallbackMsg =
        res.status === 401
          ? "Kullanıcı adı/e-posta veya şifre hatalı kanka."
          : res.status === 409
          ? "Bu e-posta veya kullanıcı adı zaten kullanımda."
          : res.status === 429
          ? "Çok fazla deneme yapıldı. Lütfen biraz bekleyin."
          : res.status === 503
          ? "Veritabanı servisine şu an ulaşılamıyor. Lütfen az sonra tekrar deneyin."
          : "Bir sunucu hatası oluştu. Lütfen tekrar deneyin.";

      const errorCode = parsedJson?.error?.code || `HTTP_${res.status}`;
      const errorMessage = parsedJson?.error?.message || parsedJson?.message || fallbackMsg;
      const field = parsedJson?.error?.field;
      const requestId = parsedJson?.requestId;

      return {
        ok: false,
        error: { code: errorCode, message: errorMessage, field },
        message: errorMessage,
        requestId,
      };
    }

    // Success response
    const data = parsedJson?.data !== undefined ? (parsedJson.data as T) : (parsedJson as T);
    const message = parsedJson?.message;
    const requestId = parsedJson?.requestId;

    return {
      ok: true,
      data,
      message,
      requestId,
    };
  } catch (err: any) {
    if (err?.name === "AbortError") {
      return {
        ok: false,
        error: {
          code: "TIMEOUT",
          message: "İstek zaman aşımına uğradı (10 sn). İnternet bağlantınızı kontrol edip tekrar deneyin.",
        },
        message: "İstek zaman aşımına uğradı. Lütfen tekrar deneyin.",
        isNetworkError: true,
      };
    }

    return {
      ok: false,
      error: {
        code: "NETWORK_ERROR",
        message: "Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.",
      },
      message: "Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.",
      isNetworkError: true,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

// Sync session with legacy localStorage storage for seamless backward compatibility
export function syncLocalSession(user: SafeUser | null) {
  if (typeof window === "undefined") return;
  try {
    if (user) {
      window.localStorage.setItem("yds-master-session", user.email);
    } else {
      window.localStorage.removeItem("yds-master-session");
    }
  } catch {
    /* ignore storage errors */
  }
}

export async function loginWithApi(identifier: string, password: string, rememberMe: boolean = true) {
  const result = await authRequest<{ user: SafeUser }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ identifier, password, rememberMe }),
  });

  if (result.ok && result.data?.user) {
    syncLocalSession(result.data.user);
  }

  return result;
}

export async function registerWithApi(payload: {
  email: string;
  username: string;
  password: string;
  code?: string;
  challenge?: string;
}) {
  const result = await authRequest<{ user: SafeUser }>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result.ok && result.data?.user) {
    syncLocalSession(result.data.user);
  }

  return result;
}

export async function fetchCurrentSession() {
  return authRequest<{ authenticated: boolean; user: SafeUser | null }>("/api/auth/session", {
    method: "GET",
  });
}

export async function logoutWithApi() {
  const result = await authRequest<{ loggedOut: boolean }>("/api/auth/logout", {
    method: "POST",
  });
  syncLocalSession(null);
  return result;
}
