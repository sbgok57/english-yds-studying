import type { Metadata } from "next";
import ThemeTabsView from "@/components/theme/ThemeTabsView";
import { PATTERN_REGISTRY } from "@/lib/themes/pattern-registry";
import Link from "next/link";
import { Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Desenli Tema Galerisi & Renk Stüdyosu — DİL MASTER",
  description:
    "YDS, YDT ve YÖKDİL hazırlığı için 36 özgün vektörel SVG arka plan deseni (noktalı, milimetrik ızgara, topografik, altıgen, blueprint, molekül ağı, takımyıldız) ve renk paletleri.",
};

export default function TemalarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Üst Karşılama Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-slate-950 via-purple-950/70 to-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-black text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DESENLİ TEMA GALERİSİ & RENK STÜDYOSU</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-bold text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{PATTERN_REGISTRY.length} Özgün Vektörel SVG Arka Plan Deseni</span>
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Görünüm &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-300">
              Desenli Tema Galerisi
            </span>{" "}
            🎨
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/75 max-w-3xl leading-relaxed">
            YDS, YDT ve YÖKDİL hazırlığında okunabilirliği ve kontrastı bozmayan{" "}
            <strong>{PATTERN_REGISTRY.length} benzersiz vektörel SVG desen</strong> (Topografik Kontur, Blueprint, Molekül Ağı, Takımyıldız, Altıgen, Milimetrik Izgara, Terrazzo) ve renk paletlerini özelleştirin.
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

      {/* Ana Tema ve SVG Desen Stüdyosu Sekmeli Bileşeni */}
      <ThemeTabsView />

      {/* Teknik Bilgilendirme ve Güvence */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Tema & Desen Motoru Özellikleri</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/60">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">
              📐 {PATTERN_REGISTRY.length} Benzersiz Vektörel SVG Desen
            </span>
            <p>
              24 farklı kategorideki özgün SVG desenleri doğrudan CSS değişkeni olarak uygulanır, pointer-events:none katmanında çalışır ve menü/buton etkileşimini engellemez.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">💾 Kalıcı Tercih & Opaklık Kontrolü</span>
            <p>
              Seçtiğiniz desen, opaklık ve ölçek değerleri cihazınızda saklanır; sayfayı yenilediğinizde otomatik olarak geri yüklenir.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white block">🌓 Karanlık & Açık Mod Uyumlu</span>
            <p>
              Tüm desenler hem koyu hem açık zemin modunda metin okunabilirliğini ve WCAG kontrastını koruyacak opaklık sınırlarıyla çalışır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
