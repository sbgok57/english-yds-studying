import type { Metadata } from "next";
import PushManager from "@/components/PushManager";
import ThemeStudio from "@/components/theme/ThemeStudio";
import VoiceQaPanel from "@/components/tts/VoiceQaPanel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayarlar, Ses QA Denetimi, Renk Teması & Bildirimler — DİL MASTER",
  description:
    "DİL MASTER renk teması, 36 özgün SVG arka plan deseni, 16 ses profili (Emel/Ahmet ve 7 İngilizce aksan) QA denetim masası ve bildirim tercihleri.",
};

export default function AyarlarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <span>⚙️</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              Ayarlar, Ses QA & Tema Stüdyosu
            </span>
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Renk paletlerini ve 36 özgün SVG arka plan desenini özelleştirin, 16 ses profilini (Emel, Ahmet ve 7 İngilizce aksan) test edin ve bildirimlerinizi yönetin.
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

      {/* Merkezi Ses Motoru & 16 Konuşmacı QA Denetim Masası */}
      <VoiceQaPanel />

      {/* Tema & Renk Kişiselleştirme Stüdyosu */}
      <ThemeStudio />

      {/* Push Bildirim Yöneticisi */}
      <PushManager />

      {/* Ek Bilgilendirme Kartı */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs text-white/60 space-y-2">
        <h4 className="font-bold text-white flex items-center gap-2">
          <span>🔒</span> Gizlilik & Güvenlik
        </h4>
        <p>
          Push bildirimleri Web Push VAPID standardı ile uçtan uca şifrelenir. Cihaz token&apos;ınız yalnızca çalışma hatırlatmaları ve sınav bildirimleri göndermek amacıyla güvenle saklanır, üçüncü taraflarla paylaşılmaz.
        </p>
      </div>
    </div>
  );
}
