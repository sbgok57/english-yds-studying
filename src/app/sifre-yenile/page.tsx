"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "";
  const initialChallenge = searchParams.get("challenge") || "";
  const demoCode = searchParams.get("demoCode") || "";

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState(demoCode);
  const [newPassword, setNewPassword] = useState("");
  const [challenge, setChallenge] = useState(initialChallenge);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || !newPassword) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Yeni şifreniz en az 6 karakter olmalıdır.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code,
          challenge,
          newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message || "Şifre yenilenemedi.");
        setLoading(false);
        return;
      }

      setSuccess("Şifreniz başarıyla yenilendi! Giriş sayfasına yönlendiriliyorsunuz...");
      setTimeout(() => {
        router.push("/giris");
      }, 1500);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-500 p-[2px] shadow-lg shadow-cyan-500/20">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
            🔒
          </div>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">
          Yeni Şifre Belirle
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Doğrulama kodunu ve yeni şifreni gir.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 flex items-center gap-2">
          <span>⚠️</span> {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 flex items-center gap-2">
          <span>🎉</span> {success}
        </div>
      )}

      {demoCode && (
        <div className="mb-4 p-3 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-center text-xs">
          🧪 Demo Kodu: <span className="text-white font-bold">{demoCode}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
            E-posta Adresiniz
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
            6 Haneli Doğrulama Kodu
          </label>
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            placeholder="123456"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-center text-xl tracking-[0.3em] font-mono transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
            Yeni Şifre (en az 6 karakter)
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
            required
            minLength={6}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
              <span>Güncelleniyor...</span>
            </>
          ) : (
            <span>Şifreyi Güncelle 🔐</span>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        <Link href="/giris" className="font-bold text-cyan-400 hover:underline">
          Giriş Sayfasına Dön
        </Link>
      </div>
    </div>
  );
}

export default function SifreYenilePage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="text-center text-white/50">Yükleniyor...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
