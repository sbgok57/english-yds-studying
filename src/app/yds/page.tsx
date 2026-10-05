"use client";

import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Headphones,
  PenTool,
  Mic,
  Clock,
  FileText,
  ChevronRight,
  ArrowRight,
  Shield,
  Layers,
  Award,
} from "lucide-react";

const YDS_SKILLS = [
  {
    title: "Kelime Çalışmaları (Vocabulary)",
    emoji: "📚",
    desc: "2.500+ master akademik kelime, 2013-2026 Modadil, Akın Dil, Remzi Hoca yayınlar havuzu ve 3D flashcards.",
    href: "/vocabulary/flashcards?exam=YDS",
    badge: "2.500+ Kelime",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-300",
  },
  {
    title: "Gramer Akademisi (Grammar)",
    emoji: "📖",
    desc: "YDS'de en çok çıkan 27 gramer konusu, zıtlık bağlaçları, devrik yapılar (inversion) ve pekiştirme testleri.",
    href: "/grammar",
    badge: "27 Konu",
    color: "from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-300",
  },
  {
    title: "Reading & Paragraf (Okuma)",
    emoji: "🔬",
    desc: "Akademik okuma parçaları, tıkla-öğren anında sözlük ve YDS tarzı 3'er soruluk paragraf analizleri.",
    href: "/reading",
    badge: "Akademik Lab",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-300",
  },
  {
    title: "Listening & Sesli Gramer (Dinleme)",
    emoji: "🎧",
    desc: "12 sesli stüdyo kaydı: ALi CÜMLEci vs DEDE İSİMci, Sebahattin & Sevim ve çoklu aksan kulak aşinalığı.",
    href: "/grammar/audio",
    badge: "12 Parça",
    color: "from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-300",
  },
  {
    title: "Writing & Cümle Kurma (Yazma)",
    emoji: "✍️",
    desc: "Kompozisyon iskeleti, akademik paraphrase teknikleri, cümle tamamlama ve çeviri soru şifreleri.",
    href: "/writing",
    badge: "Yeni Lab",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-400/30 text-indigo-300",
  },
  {
    title: "AI Speaking & Telaffuz (Konuşma)",
    emoji: "🎙️",
    desc: "YDS Kanka AI ile konuşma pratiği, telaffuz doğruluğu ve akademik diyalog kalıpları.",
    href: "/speaking",
    badge: "AI Destekli",
    color: "from-pink-500/20 to-rose-500/20 border-pink-400/30 text-pink-300",
  },
  {
    title: "Sınav Denemeleri & Çıkmış Sorular",
    emoji: "⏱️",
    desc: "2013-2026 İlkbahar / Sonbahar tüm gerçek çıkmış YDS sınavları ve 72 Özgün Deneme (180 dk, 80 soru).",
    href: "/exams?category=YDS",
    badge: "180 dk • 80 Soru",
    color: "from-cyan-500/20 to-teal-500/20 border-cyan-400/30 text-cyan-300",
  },
];

export default function YdsHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Başlık & Tanıtım */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-pink-500/20 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-xs font-black text-cyan-300">
          <span>🎯</span>
          <span>YDS ÖZEL SINAV MERKEZİ • 180 DAKİKA • 80 SORU</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDS Hazırlık & <span className="gradient-text">7 Beceri Akademisi</span>
        </h1>

        <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
          Kamu personeli, doçentlik, doktora ve yüksek lisans adayları için YDS standardına özel tasarlanmış modüler eğitim ekosistemi. Kelimeden denemeye tüm ihtiyaçlarınız burada.
        </p>

        {/* Hızlı Aksiyon Butonları */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/study-plans?exam=yds"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>📅</span>
            <span>YDS Çalışma Programları (30–120 Gün & Özel Plan)</span>
          </Link>

          <Link
            href="/exams/yds-2024-ilkbahar"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
          >
            <Clock className="w-4 h-4 text-cyan-300" />
            <span>Son Çıkmış YDS'yi Başlat (2024)</span>
          </Link>

          <Link
            href="/vocabulary/flashcards?exam=YDS"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 font-bold text-xs sm:text-sm transition-all"
          >
            <span>🃏 3D YDS Kelime Kartları</span>
          </Link>
        </div>
      </div>

      {/* 7 Beceri Modülü Izgarası */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>⚡</span> YDS İçin Özelleştirilmiş 7 Temel Modül
          </h2>
          <span className="text-xs text-cyan-300 font-mono">Eksiksiz & Entegre</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {YDS_SKILLS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="card-vibrant p-6 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-black text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex items-center text-xs font-bold text-cyan-300 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/5">
                <span>Modülü Aç</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Alt Hızlı Bilgilendirme */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-cyan-400 shrink-0" />
          <span>
            Tüm YDS çıkmış soru şablonları ve 72 özgün deneme, ÖSYM 80 soru soru dağılımıyla birebir eşleşir.
          </span>
        </div>
        <Link
          href="/study-plans"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap transition-colors"
        >
          30 Günlük YDS Planı &rarr;
        </Link>
      </div>
    </div>
  );
}
