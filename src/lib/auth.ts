"use client";

// Kişisel hesap (e-posta + şifre) — tarayıcı tabanlı (localStorage).
// Not: Bu bir sunucu hesabı değil; hesap bu tarayıcıya kaydedilir. Şifre asla düz metin
// tutulmaz (SHA-256 hash). Gerçek çoklu-cihaz senkronu için Supabase/Firebase entegrasyonu
// bu katmanın üzerine eklenebilir.

import { useCallback, useEffect, useState } from "react";

export interface Account {
  email: string;
  name: string;
  passHash: string;
  createdAt: number;
}

const ACCOUNTS_KEY = "yds-master-accounts";
const SESSION_KEY = "yds-master-session";
const SALT = "yds-master-salt-v1";

// localStorage kilitliyse (sandbox iframe vb.) bellek içi yedek
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
      /* boş */
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
      /* boş */
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
  // djb2 fallback (güvenli olmayan ama çalışır)
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

  useEffect(() => {
    setStorageOk(canStore());
    const email = readSession();
    if (email) {
      const found = readAccounts().find((a) => a.email === email);
      if (found) setAccount(found);
    }
  }, []);

  const login = useCallback(async (email: string, pass: string) => {
    setBusy(true);
    setError("");
    try {
      const e = email.trim().toLowerCase();
      const h = await hash(pass);
      const found = readAccounts().find((a) => a.email === e);
      if (!found) {
        setError("Kanka, bu e-posta ile kayıtlı hesap yok. Önce kayıt ol!");
        return false;
      }
      if (found.passHash !== h) {
        setError("Şifre hatalı kanka. Tekrar dene!");
        return false;
      }
      writeSession(found.email);
      setAccount(found);
      setNotice(`Hoş geldin kanka, ${found.name}! 👋`);
      return true;
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
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message || "Kod gönderilemedi kanka.");
        return { ok: false, demo: false, message: data.message || "Kod gönderilemedi." };
      }
      setNotice(data.message);
      return {
        ok: true,
        demo: !!data.demo,
        code: data.code,
        challenge: data.challenge,
        message: data.message,
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
        if (readAccounts().some((a) => a.email === e)) {
          setError("Bu e-posta zaten kayıtlı. Giriş yap kanka!");
          return false;
        }

        // Sunucu tarafında e-posta doğrulaması
        const res = await fetch("/api/auth/verify-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: e, code: code.trim(), challenge }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          setError(data.message || "Doğrulama başarısız kanka.");
          return false;
        }

        const acc: Account = {
          email: e,
          name: n || "Kanka",
          passHash: await hash(pass),
          createdAt: Date.now(),
        };
        writeAccounts([...readAccounts(), acc]);
        writeSession(e);
        setAccount(acc);
        setNotice(`E-posta doğrulandı, kayıt tamam kanka! Hoş geldin ${acc.name}! 🎉`);
        return true;
      } catch {
        setError("Sunucuya ulaşılamadı kanka. İnternetini kontrol et.");
        return false;
      } finally {
        setBusy(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
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
