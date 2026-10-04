"use client";

import Link from "next/link";
import {
  GraduationCap,
  Clock,
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

const YDT_SKILLS = [
  {
    title: "Kelime Çalışmaları (Vocabulary)",
    emoji: "📚",
    desc: "YDT & YKS-Dil yüksek frekanslı kelimeler, phrasal verbs, yaygın eşdizimler ve 3D flashcards.",
    href: "/vocabulary/flashcards?exam=YDT",
    badge: "YDT Odaklı",
    color: "from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-300",
  },
  {
    title: "Gramer Akademisi (Grammar)",
    emoji: "📖",
    desc: "Tüm YKS-Dil gramer konuları, zaman uyumları, bağlaçlar, kipler ve pekiştirme testleri.",
    href: "/grammar",
    badge: "Gramer Testleri",
    color: "from-pink-500/20 to-purple-500/20 border-pink-400/30 text-pink-300",
  },
  {
    title: "Reading & Paragraf (Okuma)",
    emoji: "🔬",
    desc: "YDT tipi hikayeleyici ve akademik okuma parçaları, kelimeye tıklayarak anında sözlük.",
    href: "/reading",
    badge: "5 Paragraf / 15 Soru",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-300",
  },
  {
    title: "Listening & Aksan (Dinleme)",
    emoji: "🎧",
    desc: "Üniversite hazırlık için çoklu aksan dinleme parçaları ve 12 sesli gramer stüdyo kaydı.",
    href: "/listening",
    badge: "Multi-Accent TTS",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-300",
  },
  {
    title: "Writing & Cümle Kurma (Yazma)",
    emoji: "✍️",
    desc: "Doğru cümle dizilimi (S+V+O+MPT), çeviri formülleri ve Türkçe-İngilizce cümle kurma kılavuzu.",
    href: "/writing",
    badge: "Çeviri & Cümle",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-300",
  },
  {
    title: "AI Speaking Lab (Konuşma)",
    emoji: "🎙️",
    desc: "Üniversite mülakatları ve günlük İngilizce için yapay zeka ile interaktif sesli diyalog pratiği.",
    href: "/speaking",
    badge: "Konuşma Pratiği",
    color: "from-rose-500/20 to-pink-500/20 border-rose-400/30 text-rose-300",
  },
  {
    title: "YDT Denemeleri & LYS-5 Çıkmış Sınavlar",
    emoji: "⏱️",
    desc: "2010-2017 LYS-5 + 2018-2026 YDT çıkmış sınavları ve 72 Özgün YDT Denemesi (120 dk, 80 soru).",
    href: "/exams?category=YDT",
    badge: "120 dk • 80 Soru",
    color: "from-amber-500/20 to-yellow-500/20 border-amber-400/30 text-amber-300",
  },
];

export default function YdtHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-pink-500/20 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-black text-amber-300">
          <GraduationCap className="w-4 h-4" />
          <span>YDT (YKS-DİL / LYS-5) ÖZEL SINAV MERKEZİ • 120 DAKİKA • 80 SORU</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDT Hazırlık & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400">7 Beceri Akademisi</span>
        </h1>

        <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
          İngilizce Öğretmenliği, Mütercim-Tercümanlık ve Amerikan/İngiliz Dili ve Edebiyatı hedefleyen lise ve mezun öğrenciler için 120 dakikalık gerçek YDT temposuna uyarlanmış modüller.
        </p>

        {/* Hızlı Butonlar */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/exams/ydt-2024"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Clock className="w-4 h-4 text-slate-950" />
            <span>Son Çıkmış YDT'yi Çöz (2024 • 120 dk)</span>
          </Link>

          <Link
            href="/vocabulary/flashcards?exam=YDT"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
          >
            <span>🃏 3D YDT Kelime Kartları</span>
          </Link>
        </div>
      </div>

      {/* 7 Beceri Modülü */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>🎓</span> YDT Öğrencilerine Özel 7 Temel Modül
          </h2>
          <span className="text-xs text-amber-300 font-mono">120 Dakika Hız Odaklı</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {YDT_SKILLS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="card-vibrant p-6 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-black text-lg text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/5">
                <span>Modülü Aç</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Alt Bilgilendirme */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-amber-400 shrink-0" />
          <span>
            YDT denemelerinde sayaç 120 dakika olarak otomatik başlar ve soru başına 1.5 dakika hız hedeflenir.
          </span>
        </div>
        <Link
          href="/study-plans"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap transition-colors"
        >
          YDT Çalışma Planı &rarr;
        </Link>
      </div>
    </div>
  );
}
