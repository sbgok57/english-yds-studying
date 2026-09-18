"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import MotivationBox from "@/components/MotivationBox";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      setError("Lütfen e-posta veya kullanıcı adınızı ve şifrenizi girin.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message || "Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        setLoading(false);
        return;
      }

      setSuccess("Giriş başarılı! Yönlendiriliyorsunuz...");

      // Also sync client local session storage for backward-compatibility
      try {
        window.localStorage.setItem("yds-master-session", data.user?.email || identifier);
      } catch {
        /* ignore */
      }

      setTimeout(() => {
        // Full page reload or router push to ensure middleware picks up the new cookie
        window.location.href = returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/";
      }, 500);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-purple-950/40">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[2px] shadow-lg shadow-purple-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
              🔐
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Tekrar Hoş Geldin!
          </h1>
          <p className="text-sm text-white/50 mt-1">
            YDS maratonuna kaldığın yerden devam et.
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
              E-posta veya Kullanıcı Adı
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="kanka@ydsmaster.com veya ydskasifi"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
                Şifre
              </label>
              <Link
                href="/sifremi-unuttum"
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Şifremi unuttum?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-sm"
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:brightness-110 shadow-lg shadow-purple-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                <span>Giriş Yapılıyor...</span>
              </>
            ) : (
              <span>Giriş Yap 🚀</span>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          Henüz hesabın yok mu?{" "}
          <Link
            href={`/kayit${returnTo !== "/" ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`}
            className="font-bold text-cyan-400 hover:underline ml-1"
          >
            Hemen Ücretsiz Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GirisPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Login Form */}
        <div className="lg:col-span-6">
          <Suspense fallback={<div className="text-center text-white/50">Yükleniyor...</div>}>
            <LoginForm />
          </Suspense>
        </div>

        {/* Right column: Motivation & Features */}
        <div className="lg:col-span-6 space-y-6">
          <MotivationBox context="login" />

          <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl">
            <h3 className="text-sm font-black uppercase tracking-wider text-cyan-400 mb-3">
              YDS Master ile Neler Kazanırsın?
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 485+ kelimelik detaylı CEFR A1–C2 Kelime Envanteri
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 7–180 Günlük Kişiselleştirilmiş Çalışma Programları
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 42 Soruluk Gerçekçi Mini Seviye Tespit Sınavı
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> XP, Seviye Başlıkları ve 42 Koleksiyon Rozeti
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 1.000 İlham Verici Söz ve Kanka Tavsiyeleri
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
