"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Microscope,
  Stethoscope,
  Zap,
  Building,
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
import { cn } from "@/lib/utils";

const YOKDIL_FIELDS = [
  { id: "saglik", label: "Sağlık Bilimleri", emoji: "🩺", desc: "Tıp, Diş, Eczacılık, Hemşirelik ve Sağlık Yönetimi terminolojisi", color: "from-emerald-500/20 to-teal-500/20 border-emerald-400/40 text-emerald-300" },
  { id: "fen", label: "Fen Bilimleri", emoji: "⚡", desc: "Mühendislik, Mimarlık, Biyoloji, Kimya, Fizik ve Çevre Bilimleri", color: "from-blue-500/20 to-cyan-500/20 border-blue-400/40 text-blue-300" },
  { id: "sosyal", label: "Sosyal Bilimler", emoji: "🏛️", desc: "İktisat, İşletme, Hukuk, Tarih, Psikoloji ve Uluslararası İlişkiler", color: "from-purple-500/20 to-pink-500/20 border-purple-400/40 text-purple-300" },
];

const YOKDIL_SKILLS = [
  {
    title: "Alan Kelime Çalışmaları (Vocabulary)",
    emoji: "📚",
    desc: "Sağlık, Fen ve Sosyal alanlarına göre ayrıştırılmış yüksek frekanslı akademik terimler ve 3D flashcards.",
    href: "/vocabulary/flashcards?exam=YÖKDİL",
    badge: "3 Alan Havuzu",
    color: "from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-300",
  },
  {
    title: "Gramer Akademisi (Grammar)",
    emoji: "📖",
    desc: "Bilimsel makale dilinde en çok kullanılan pasif çatılar, relative clauses, zamanlar ve bağlaç testleri.",
    href: "/grammar",
    badge: "Akademik Gramer",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-300",
  },
  {
    title: "Reading & Paragraf (Okuma)",
    emoji: "🔬",
    desc: "Lancet, Nature ve Science tarzı akademik makaleler; anında Türkçe sözlük ve paragraf soru çözümleri.",
    href: "/reading",
    badge: "Alan Paragrafları",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-300",
  },
  {
    title: "Listening & Sesli Makale (Dinleme)",
    emoji: "🎧",
    desc: "Akademik konferans ve makale dinleme metinleri; 12 sesli gramer stüdyo kaydı ve telaffuz.",
    href: "/grammar/audio",
    badge: "Sesli Gramer",
    color: "from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-300",
  },
  {
    title: "Writing & Cümle Kurma (Yazma)",
    emoji: "✍️",
    desc: "Bilimsel araştırma cümle kalıpları ('It is observed that...', 'Recent studies indicate...'), çeviri ve paraphrase.",
    href: "/writing",
    badge: "Bilimsel Cümle",
    color: "from-cyan-500/20 to-teal-500/20 border-cyan-400/30 text-cyan-300",
  },
  {
    title: "Speaking & Akademik Diyalog",
    emoji: "🎙️",
    desc: "Akademik sunumlar, sempozyum soru-cevap kalıpları ve yapay zeka ile sesli İngilizce pratiği.",
    href: "/speaking",
    badge: "Konuşma Lab",
    color: "from-pink-500/20 to-rose-500/20 border-pink-400/30 text-pink-300",
  },
  {
    title: "YÖKDİL Alan Denemeleri (Sağlık, Fen, Sosyal)",
    emoji: "⏱️",
    desc: "2018-2026 İlkbahar / Sonbahar çıkmış sınavlar ve 72 Özgün Alan Denemesi (180 dk, 80 soru).",
    href: "/exams?category=YÖKDİL",
    badge: "180 dk • 80 Soru",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-400/30 text-indigo-300",
  },
];

export default function YokdilHubPage() {
  const [selectedField, setSelectedField] = useState("saglik");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border-2 border-purple-400/40 shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-xs font-black text-purple-300">
          <Microscope className="w-4 h-4" />
          <span>YÖKDİL ÖZEL ALAN MERKEZİ • SAĞLIK • FEN • SOSYAL • 180 DK</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YÖKDİL Alan Hazırlık & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300">7 Beceri Akademisi</span>
        </h1>

        <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
          Tıpta Uzmanlık (TUS), Diş Hekimliği (DUS), akademisyenlik veya lisansüstü için alanınıza özel (Sağlık, Fen, Sosyal) terminoloji, okuma parçaları ve 180 dakikalık alan denemeleri.
        </p>

        {/* 3 Alan Seçici Hap Bar */}
        <div className="pt-2">
          <span className="text-xs font-mono text-purple-300 uppercase tracking-widest block font-bold mb-2">
            Hedef Alanını Seç:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl">
            {YOKDIL_FIELDS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedField(f.id)}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all",
                  selectedField === f.id
                    ? "bg-purple-500/30 border-purple-300 shadow-lg scale-102"
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70"
                )}
              >
                <div className="flex items-center gap-2 font-black text-sm text-white">
                  <span>{f.emoji}</span>
                  <span>{f.label}</span>
                </div>
                <p className="text-[10px] text-white/60 mt-1 line-clamp-1">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Hızlı Butonlar */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/exams?category=YÖKDİL"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Clock className="w-4 h-4 text-white" />
            <span>YÖKDİL Alan Denemelerini Aç (72 Deneme)</span>
          </Link>

          <Link
            href="/vocabulary/flashcards?exam=YÖKDİL"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
          >
            <span>🃏 3D YÖKDİL Alan Kelimeleri</span>
          </Link>

          <Link
            href="/vocabulary/inventory?exam=YÖKDİL"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 font-bold text-xs sm:text-sm transition-all"
          >
            <span>📖 YÖKDİL Kelime Envanteri</span>
          </Link>
        </div>
      </div>

      {/* 7 Beceri Modülü */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>🔬</span> YÖKDİL Adaylarına Özel 7 Temel Modül
          </h2>
          <span className="text-xs text-purple-300 font-mono">Alan Odaklı & Özgün</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {YOKDIL_SKILLS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="card-vibrant p-6 border border-white/10 hover:border-purple-400/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-black text-lg text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex items-center text-xs font-bold text-purple-300 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/5">
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
          <Shield className="w-6 h-6 text-purple-400 shrink-0" />
          <span>
            YÖKDİL Sağlık, Fen ve Sosyal sınavları 180 dakika ve 80 soru üzerinden ÖSYM standart puanlama formülüyle değerlendirilir.
          </span>
        </div>
        <Link
          href="/reading"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap transition-colors"
        >
          Alan Okuma Parçaları &rarr;
        </Link>
      </div>
    </div>
  );
}
