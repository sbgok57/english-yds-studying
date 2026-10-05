import type { Metadata } from "next";
import ThemeStudio from "@/components/theme/ThemeStudio";
import Link from "next/link";
import { Sparkles, Palette, Layers, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "1.000+ Renk ve Desenli Tema Stüdyosu — DİL MASTER",
  description:
    "YDS, YDT ve YÖKDİL hazırlığı için 250+ SVG desenli (noktalı, ızgara, çizgili, geometrik, ağ) ve 750 desensiz canlı renk teması.",
};

export default function TemalarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Üst Karşılama Banner */}
      <header className="relative overflow-hidden rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-r from-slate-950 via-purple-950/70 to-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-4">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/20 via-cyan-500/20 to-yellow-500/20 blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-400/40 text-xs font-black text-pink-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1.000+ VARYANTLI TEMA MOTORU</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-bold text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>250+ Desenli SVG Arka Plan</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-bold text-cyan-300">
            <span>✨ 750 Düz & Degrade Renk</span>
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Görünüm & <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-300">Tema Stüdyosu</span> 🎨
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
            YDS, YDT ve YÖKDİL hazırlığında gözünü yormayan, ders çalışma motivasyonunu zirveye çıkaran algoritmik temalar. İster <strong>Noktalı, Izgara, Çizgili, Geometrik</strong> SVG desenleri; ister <strong>Minimal, Neon, Siberpunk Koyu, Pastel</strong> tonları seç. Tek tıkla tüm siteye ve PWA mobil uygulamasına anında uygulanır.
          </p>
        </div>

        {/* Hızlı Kısayol Butonları */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <Link
            href="/study-plans"
            className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-black transition-all flex items-center gap-1.5"
          >
            <span>📅</span>
            <span>Çalışma Programları</span>
          </Link>
          <Link
            href="/hesap"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span>👤</span>
            <span>Hesap Ayarları</span>
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span>📊</span>
            <span>Öğrenci Paneli</span>
          </Link>
        </div>
      </header>

      {/* Ana Tema Stüdyosu Bileşeni */}
      <ThemeStudio />

      {/* Teknik Bilgilendirme ve Güvence */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Tema Motoru Özellikleri & Kalıcılık Garantisi</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/60">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">📐 250+ SVG Arka Plan Deseni</span>
            <p>Noktalı, Izgara, Çizgili, Geometrik Baklava ve Mesh gradyanları doğrudan CSS değişkeni olarak derlenir ve donma yaratmaz.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">💾 2 GB IndexedDB & LocalStorage</span>
            <p>Seçtiğin tema tarayıcı belleğine ve cihazına kaydedilir; sayfayı yenilediğinde veya uygulamayı kapattığında kaybolmaz.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">🌓 Karanlık & Yüksek Kontrastlı Açık Mod</span>
            <p>1.000 temanın tamamı hem gece çalışmalarında gözü dinlendiren koyu modda hem de gündüz için açık modda tam uyumludur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
