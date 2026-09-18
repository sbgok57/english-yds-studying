"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SifremiUnuttumPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Lütfen e-posta adresinizi girin.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message || "Kod gönderilemedi.");
        setLoading(false);
        return;
      }

      setSuccess("Doğrulama kodu e-posta adresinize gönderildi! Yönlendiriliyorsunuz...");
      setTimeout(() => {
        router.push(
          `/sifre-yenile?email=${encodeURIComponent(email)}&challenge=${encodeURIComponent(data.challenge || "")}${
            data.demo && data.code ? `&demoCode=${encodeURIComponent(data.code)}` : ""
          }`
        );
      }, 1000);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-[2px] shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
              🔑
            </div>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Şifremi Unuttum
          </h1>
          <p className="text-sm text-white/50 mt-1">
            E-posta adresine 6 haneli bir kurtarma kodu göndereceğiz.
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
              Kayıtlı E-posta Adresiniz
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@mail.com"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                <span>Gönderiliyor...</span>
              </>
            ) : (
              <span>Sıfırlama Kodu Gönder 📬</span>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          Şifreni hatırladın mı?{" "}
          <Link href="/giris" className="font-bold text-cyan-400 hover:underline ml-1">
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
