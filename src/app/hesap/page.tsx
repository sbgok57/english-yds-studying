"use client";

import { useMemo, useState } from "react";
import { useAccount } from "@/lib/auth";
import { useUsage } from "@/lib/store";
import { avatarSvg } from "@/lib/avatars";
import Tip from "@/components/Tip";

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function HesapPage() {
  const { account, busy, error, notice, login, register, logout, storageOk } = useAccount();
  const { usage } = useUsage();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const avatarId = useMemo(() => {
    const base = account ? hashStr(account.email) : hashStr("kanka");
    return usage.avatar ?? base % 500;
  }, [account, usage.avatar]);

  const submit = async () => {
    if (mode === "login") await login(email, pass);
    else await register(email, name, pass);
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2">
          🔑 <span className="gradient-text">Hesabım</span>
        </h1>
        <p className="text-white/60 text-sm">
          Kanka, e-posta ve şifreyle kişisel hesabını aç. İlerlemen bu hesaba bağlanır!
        </p>
        {!storageOk && (
          <p className="text-xs text-amber-300 mt-2">
            ⚠️ Tarayıcı depolaması kapalı görünüyor — hesap bu oturum için bellekte tutulacak.
          </p>
        )}
      </header>

      {account ? (
        <div className="card-vibrant p-8 text-center">
          <div
            className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 mb-4"
            dangerouslySetInnerHTML={{ __html: avatarSvg(avatarId) }}
          />
          <h2 className="text-2xl font-black">{account.name}</h2>
          <p className="text-sm text-white/50 font-mono">{account.email}</p>
          <p className="text-xs text-white/40 mt-1">
            Üyelik: {new Date(account.createdAt).toLocaleDateString("tr-TR")}
          </p>

          <div className="grid grid-cols-3 gap-2 mt-6 text-center">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xl font-black text-emerald-300">
                {Object.keys(usage.words).length}
              </div>
              <div className="text-[10px] text-white/50">Çalışılan kelime</div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xl font-black text-cyan-300">{usage.exams.taken}</div>
              <div className="text-[10px] text-white/50">Çözülen sınav</div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xl font-black text-amber-300">{usage.exams.bestNet}</div>
              <div className="text-[10px] text-white/50">En iyi net</div>
            </div>
          </div>

          <div className="flex gap-3 justify-center mt-6">
            <a
              href="/avatars"
              className="px-5 py-2.5 rounded-full border border-white/20 font-bold text-sm hover:bg-white/10 transition-all"
            >
              👤 Avatar Seç
            </a>
            <button
              onClick={logout}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 font-bold text-sm hover:scale-105 transition-transform"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      ) : (
        <div className="card-vibrant p-8">
          {/* Sekmeler */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition-all ${
                mode === "login"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "border border-white/15 text-white/60"
              }`}
            >
              Giriş Yap
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition-all ${
                mode === "register"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "border border-white/15 text-white/60"
              }`}
            >
              Kayıt Ol
            </button>
          </div>

          <div className="space-y-3">
            {mode === "register" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adın (örn. Kanka)"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-posta adresin"
              className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
            />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Şifre (en az 6 karakter)"
              className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
              onKeyDown={(e) => e.key === "Enter" && submit()}
            />

            {error && (
              <p className="text-xs text-rose-300 bg-rose-500/10 border border-rose-400/20 rounded-xl px-3 py-2">
                {error}
              </p>
            )}
            {notice && (
              <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-3 py-2">
                {notice}
              </p>
            )}

            <button
              onClick={submit}
              disabled={busy}
              className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-black hover:scale-[1.02] transition-transform disabled:opacity-50 text-white"
            >
              {busy ? "Bekle kanka..." : mode === "login" ? "Giriş Yap →" : "Hesap Aç →"}
            </button>

            <Tip
              tip="Bu hesap tarayıcına kaydedilir (localStorage). Şifren hash'lenerek saklanır, düz metin tutulmaz. Gerçek çoklu-cihaz senkronu için bir sunucu bağlanabilir."
              marker
            >
              <p className="text-[11px] text-white/40 text-center cursor-help underline decoration-dotted underline-offset-4">
                ℹ️ Hesap nasıl çalışıyor?
              </p>
            </Tip>
          </div>
        </div>
      )}
    </div>
  );
}
