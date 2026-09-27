import type { Metadata } from "next";
import PushManager from "@/components/PushManager";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayarlar & Bildirimler — YDS Master",
  description: "YDS akıllı telefon ve web push bildirim tercihleri, hatırlatıcı saatleri ve PWA yönetimi.",
};

export default function AyarlarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <span>⚙️</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              Ayarlar & Bildirimler
            </span>
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Akıllı bildirim saatlerini yönet, sınav geri sayımını takip et ve YDS koçunu kişiselleştir.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/hesap"
            className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all"
          >
            👤 Hesabım
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 font-bold text-xs transition-all"
          >
            📊 Panel
          </Link>
        </div>
      </div>

      {/* Push Bildirim Yöneticisi */}
      <PushManager />

      {/* Ek Bilgilendirme Kartı */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs text-white/60 space-y-2">
        <h4 className="font-bold text-white flex items-center gap-2">
          <span>🔒</span> Gizlilik & Güvenlik
        </h4>
        <p>
          Push bildirimleri Web Push VAPID standardı ile uçtan uca şifrelenir. Cihaz token'ınız yalnızca çalışma hatırlatmaları ve sınav bildirimleri göndermek amacıyla güvenle saklanır, üçüncü taraflarla paylaşılmaz.
        </p>
      </div>
    </div>
  );
}
