"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { UserCheck, Sparkles, Check, AlertCircle } from "lucide-react";
import { safeStorage } from "@/lib/safe-storage";

export default function UsernameChanger() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    const saved = safeStorage.get("yds_username") || "ydskasifi";
    setUsername(saved);
  }, []);

  const handleSave = async () => {
    if (!username || username.trim().length < 3) {
      setMsg({ ok: false, text: "Kullanıcı adı en az 3 karakter olmalıdır." });
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch("/api/profile/username", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMsg({ ok: false, text: data.error || "Güncellenemedi." });
        return;
      }

      safeStorage.set("yds_username", data.username);
      try {
        confetti({ particleCount: 50, spread: 60, scalar: 0.8 });
      } catch {}
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(30);

      setMsg({ ok: true, text: "Kullanıcı adınız başarıyla güncellendi! ✅" });
    } catch {
      // Çevrimdışı/yerel kayıt
      safeStorage.set("yds_username", username.trim());
      setMsg({ ok: true, text: "Kullanıcı adınız yerel olarak kaydedildi! ✅" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 shadow-xl space-y-3 text-white">
      <div className="flex items-center gap-2">
        <UserCheck className="w-5 h-5 text-yellow-300" />
        <h4 className="font-black text-sm text-white">👤 Kullanıcı Adınızı Değiştirin</h4>
      </div>
      <p className="text-xs text-white/70">
        Liderlik tablosunda ve başarı karnenizde görünecek takma adınızı belirleyin.
      </p>

      <div className="flex gap-2 pt-1">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Yeni kullanıcı adı..."
          maxLength={20}
          className="flex-1 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 focus:border-yellow-300 focus:outline-none text-xs text-white placeholder:text-white/40 font-mono font-bold"
        />
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-5 py-2.5 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 transition-transform disabled:opacity-50 shadow-lg flex items-center gap-1"
        >
          {loading ? "..." : "Kaydet"}
        </button>
      </div>

      {msg && (
        <p
          className={`text-xs font-bold flex items-center gap-1.5 pt-1 ${
            msg.ok ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {msg.ok ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
          {msg.text}
        </p>
      )}
    </div>
  );
}
