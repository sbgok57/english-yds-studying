"use client";

// Unified Client Authentication & Account Management
import { useCallback, useEffect, useState } from "react";
import {
  fetchCurrentSession,
  loginWithApi,
  logoutWithApi,
  registerWithApi,
  syncLocalSession,
} from "./auth-client";

export interface Account {
  email: string;
  name: string;
  passHash: string;
  createdAt: number;
  role?: string;
  isAdmin?: boolean;
}

const ACCOUNTS_KEY = "yds-master-accounts";
const SESSION_KEY = "yds-master-session";
const SALT = "yds-master-salt-v1";

// Memory fallback if localStorage is disabled/sandboxed
let memAccounts: Account[] = [];
let memSession: string | null = null;
let memUsed = false;

function canStore(): boolean {
  try {
    window.localStorage.setItem("__t", "1");
    window.localStorage.removeItem("__t");
    return true;
  } catch {
    return false;
  }
}

function readAccounts(): Account[] {
  if (!canStore()) return memAccounts;
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    const list = raw ? (JSON.parse(raw) as Account[]) : [];
    memAccounts = list;
    memUsed = true;
    return list;
  } catch {
    return memAccounts;
  }
}

function writeAccounts(list: Account[]) {
  memAccounts = list;
  memUsed = true;
  if (canStore()) {
    try {
      window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(list));
    } catch {
      /* empty */
    }
  }
}

function readSession(): string | null {
  if (!canStore()) return memSession;
  try {
    const s = window.localStorage.getItem(SESSION_KEY);
    memSession = s;
    memUsed = true;
    return s;
  } catch {
    return memSession;
  }
}

function writeSession(email: string | null) {
  memSession = email;
  memUsed = true;
  if (canStore()) {
    try {
      if (email) window.localStorage.setItem(SESSION_KEY, email);
      else window.localStorage.removeItem(SESSION_KEY);
    } catch {
      /* empty */
    }
  }
}

async function hash(text: string): Promise<string> {
  try {
    if (typeof crypto !== "undefined" && crypto.subtle) {
      const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(SALT + text)
      );
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
  } catch {
    /* fallback */
  }
  let h = 5381;
  const s = SALT + text;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return "fb" + h.toString(16);
}

export interface CodeRequest {
  ok: boolean;
  demo: boolean;
  code?: string;
  challenge?: string;
  message: string;
}

export interface AuthApi {
  account: Account | null;
  busy: boolean;
  error: string;
  notice: string;
  login: (email: string, pass: string) => Promise<boolean>;
  sendCode: (email: string) => Promise<CodeRequest>;
  register: (email: string, name: string, pass: string, code: string, challenge: string) => Promise<boolean>;
  logout: () => void;
  clearAll: () => void;
  storageOk: boolean;
}

export function useAccount(): AuthApi {
  const [account, setAccount] = useState<Account | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [storageOk, setStorageOk] = useState(true);

  // Synchronize on mount: check server session first, then localStorage
  useEffect(() => {
    setStorageOk(canStore());

    async function initSession() {
      try {
        const sessionRes = await fetchCurrentSession();
        if (sessionRes.ok && sessionRes.data?.authenticated && sessionRes.data?.user) {
          const u = sessionRes.data.user;
          const serverAcc: Account = {
            email: u.email,
            name: u.username,
            passHash: "server-synced",
            createdAt: u.createdAt ? new Date(u.createdAt).getTime() : Date.now(),
            role: (u as any).role,
            isAdmin: (u as any).isAdmin,
          };
          setAccount(serverAcc);
          writeSession(u.email);
          return;
        }
      } catch {
        /* ignore network error on initial session check */
      }

      // Local storage fallback if server has no session
      const email = readSession();
      if (email) {
        const found = readAccounts().find((a) => a.email === email);
        if (found) setAccount(found);
      }
    }

    initSession();
  }, []);

  const login = useCallback(async (email: string, pass: string) => {
    setBusy(true);
    setError("");
    try {
      const e = email.trim().toLowerCase();

      // 1. Try server-side authentication
      const apiRes = await loginWithApi(e, pass);
      if (apiRes.ok && apiRes.data?.user) {
        const u = apiRes.data.user;
        const acc: Account = {
          email: u.email,
          name: u.username,
          passHash: "server-synced",
          createdAt: u.createdAt ? new Date(u.createdAt).getTime() : Date.now(),
          role: (u as any).role,
          isAdmin: (u as any).isAdmin,
        };
        setAccount(acc);
        writeSession(acc.email);
        setNotice(`Hoş geldin kanka, ${acc.name}! 👋`);
        return true;
      }

      // 2. Fallback to offline localStorage account if server returned network error
      if (apiRes.isNetworkError) {
        const h = await hash(pass);
        const found = readAccounts().find((a) => a.email === e);
        if (found && found.passHash === h) {
          writeSession(found.email);
          setAccount(found);
          setNotice(`Hoş geldin kanka (çevrimdışı mod), ${found.name}! 👋`);
          return true;
        }
      }

      setError(apiRes.message || "Giriş yapılamadı kanka. Bilgilerini kontrol et!");
      return false;
    } finally {
      setBusy(false);
    }
  }, []);

  const sendCode = useCallback(async (email: string): Promise<CodeRequest> => {
    setBusy(true);
    setError("");
    try {
      const e = email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
        const msg = "Geçerli bir e-posta gir kanka (örn. kanka@mail.com).";
        setError(msg);
        return { ok: false, demo: false, message: msg };
      }

      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: e }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        const msg = data.error?.message || data.message || "Kod gönderilemedi kanka.";
        setError(msg);
        return { ok: false, demo: false, message: msg };
      }

      setNotice(data.message || "Kod gönderildi!");
      return {
        ok: true,
        demo: !!(data.data?.demo ?? data.demo),
        code: data.data?.code || data.code,
        challenge: data.data?.challenge || data.challenge,
        message: data.message || "Kod gönderildi!",
      };
    } catch {
      const msg = "Sunucuya ulaşılamadı kanka. İnternetini kontrol et.";
      setError(msg);
      return { ok: false, demo: false, message: msg };
    } finally {
      setBusy(false);
    }
  }, []);

  const register = useCallback(
    async (email: string, name: string, pass: string, code: string, challenge: string) => {
      setBusy(true);
      setError("");
      try {
        const e = email.trim().toLowerCase();
        const n = name.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
          setError("Geçerli bir e-posta gir kanka (örn. kanka@mail.com).");
          return false;
        }
        if (pass.length < 6) {
          setError("Şifre en az 6 karakter olsun kanka.");
          return false;
        }
        if (!/^\d{6}$/.test(code.trim())) {
          setError("Doğrulama kodu 6 haneli olmalı kanka.");
          return false;
        }

        // 1. Call server-side register API
        const apiRes = await registerWithApi({
          email: e,
          username: n || `kullanici_${Date.now().toString().slice(-4)}`,
          password: pass,
          code: code.trim(),
          challenge,
        });

        if (apiRes.ok && apiRes.data?.user) {
          const u = apiRes.data.user;
          const acc: Account = {
            email: u.email,
            name: u.username,
            passHash: "server-synced",
            createdAt: u.createdAt ? new Date(u.createdAt).getTime() : Date.now(),
            role: (u as any).role,
            isAdmin: (u as any).isAdmin,
          };
          writeAccounts([...readAccounts().filter((a) => a.email !== e), acc]);
          writeSession(e);
          setAccount(acc);
          setNotice(`E-posta doğrulandı, kayıt tamam kanka! Hoş geldin ${acc.name}! 🎉`);
          return true;
        }

        setError(apiRes.message || "Kayıt işlemi tamamlanamadı kanka.");
        return false;
      } catch {
        setError("Sunucuya ulaşılamadı kanka. İnternetini kontrol et.");
        return false;
      } finally {
        setBusy(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      await logoutWithApi();
    } catch {
      /* ignore */
    }
    writeSession(null);
    setAccount(null);
    setNotice("Çıkış yaptın kanka. Görüşürüz! 👋");
  }, []);

  const clearAll = useCallback(() => {
    writeAccounts([]);
    writeSession(null);
    setAccount(null);
    setNotice("Tüm hesaplar silindi.");
  }, []);

  return { account, busy, error, notice, login, sendCode, register, logout, clearAll, storageOk };
}
