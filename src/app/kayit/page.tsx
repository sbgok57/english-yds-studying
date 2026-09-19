"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import MotivationBox from "@/components/MotivationBox";
import { authRequest, registerWithApi } from "@/lib/auth-client";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/";

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [challenge, setChallenge] = useState("");
  const [demoCode, setDemoCode] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorRequestId, setErrorRequestId] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const codeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !username.trim() || !password.trim()) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (password.trim().length < 6) {
      setError("Şifreniz en az 6 karakter olmalıdır.");
      return;
    }

    setLoading(true);
    setError(null);
    setErrorRequestId(null);

    try {
      const res = await authRequest<{
        challenge?: string;
        demo?: boolean;
        code?: string;
      }>("/api/auth/send-code", {
        method: "POST",
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (!res.ok) {
        setError(res.message || "Doğrulama kodu gönderilemedi.");
        if (res.requestId) setErrorRequestId(res.requestId);
        setLoading(false);
        return;
      }

      setChallenge(res.data?.challenge || "");
      if (res.data?.demo && res.data?.code) {
        setDemoCode(res.data.code);
        setCode(res.data.code); // auto-fill in demo mode for instant ease
      }
      setStep(2);
      setCooldown(60);
      setSuccess(res.message || "Doğrulama kodu gönderildi!");
      setTimeout(() => codeInputRef.current?.focus(), 150);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || code.length < 6) {
      setError("Lütfen 6 haneli doğrulama kodunu girin.");
      return;
    }

    setLoading(true);
    setError(null);
    setErrorRequestId(null);

    try {
      const res = await registerWithApi({
        email: email.trim().toLowerCase(),
        username: username.trim(),
        password: password.trim(),
        code: code.trim(),
        challenge,
      });

      if (!res.ok) {
        setError(res.message || "Kayıt tamamlanamadı. Lütfen tekrar deneyin.");
        if (res.requestId) setErrorRequestId(res.requestId);
        setLoading(false);
        return;
      }

      setSuccess("Tebrikler! Kaydınız başarıyla tamamlandı. Yönlendiriliyorsunuz...");

      setTimeout(() => {
        window.location.href = returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/";
      }, 700);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-purple-950/40">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-500 to-blue-500 p-[2px] shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
              🚀
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Yeni Hesap Oluştur
          </h1>
          <p className="text-sm text-white/50 mt-1">
            YDS yolculuğuna başla, rozetleri topla!
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 space-y-1">
            <div className="flex items-center gap-2">
              <span>⚠️</span> <span>{error}</span>
            </div>
            {errorRequestId && (
              <div className="text-[10px] text-white/40 font-mono pl-6">
                İstek No: {errorRequestId}
              </div>
            )}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 flex items-center gap-2">
            <span>🎉</span> {success}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleRequestCode} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
                E-posta Adresi
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@ogrenci.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ornek_kullanici"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
                Şifre (en az 6 karakter)
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  <span>Kod Gönderiliyor...</span>
                </>
              ) : (
                <span>Doğrulama Kodu Gönder 📬</span>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCompleteRegister} className="space-y-4">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
              <p className="font-semibold text-white">
                <span className="font-mono">{email}</span> adresine 6 haneli bir onay kodu gönderdik.
              </p>
              {demoCode && (
                <div className="mt-2 p-2 rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-center text-sm font-bold">
                  🧪 Demo Modu Kodu: <span className="text-white tracking-widest">{demoCode}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">
                6 Haneli Doğrulama Kodu
              </label>
              <input
                ref={codeInputRef}
                type="text"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                placeholder="123456"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-center text-xl tracking-[0.4em] font-mono placeholder:text-white/30 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || code.length < 6}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  <span>Hesap Oluşturuluyor...</span>
                </>
              ) : (
                <span>Doğrula & Kaydı Tamamla ✨</span>
              )}
            </button>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                ← Bilgileri Değiştir
              </button>
              <button
                type="button"
                disabled={cooldown > 0}
                onClick={handleRequestCode}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 disabled:opacity-40 disabled:hover:text-cyan-400 transition-colors"
              >
                {cooldown > 0 ? `Tekrar Kod (${cooldown}s)` : "Kodu Tekrar Gönder 🔄"}
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          Zaten hesabın var mı?{" "}
          <Link
            href={`/giris${returnTo !== "/" ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`}
            className="font-bold text-cyan-400 hover:underline ml-1"
          >
            Giriş Yap
          </Link>
        </div>

        <div className="mt-4 text-center text-[11px] text-white/40 space-x-2">
          <Link href="/gizlilik" className="hover:text-white hover:underline">
            Gizlilik Politikası
          </Link>
          <span>&bull;</span>
          <Link href="/kullanim-kosullari" className="hover:text-white hover:underline">
            Kullanım Koşulları
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function KayitPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Register Form */}
        <div className="lg:col-span-6">
          <Suspense fallback={<div className="text-center text-white/50">Yükleniyor...</div>}>
            <RegisterForm />
          </Suspense>
        </div>

        {/* Right column: Motivation & Gamification highlights */}
        <div className="lg:col-span-6 space-y-6">
          <MotivationBox context="login" />

          <div className="p-6 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-xl">
            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-400 mb-2">
              🎉 Kayıt Hediyesi: +50 XP Hoş Geldin Bonusu
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Hesabını oluşturur oluşturmaz 50 XP kazanarak doğrudan &ldquo;Yeni Yolcu&rdquo; unvanına adım atarsın. Çalıştıkça yeni rozetler açılır, seviyen yükselir!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
