import Link from "next/link";
import WelcomeQuote from "@/components/quotes/WelcomeQuote";
import { 
  Sparkles, 
  Clock, 
  BookOpen, 
  Compass, 
  UploadCloud, 
  Award, 
  Layers, 
  FileSpreadsheet, 
  Headphones,
  Flame,
  ArrowRight,
  Target
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const wordCount = await prisma.word.count().catch(() => 30);
  const quoteCount = await prisma.quote.count().catch(() => 500);
  const examCount = await prisma.exam.count().catch(() => 128);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Her açılışta beliren motivasyon karşılama penceresi */}
      <WelcomeQuote />

      {/* Hero Banner */}
      <section className="relative rounded-3xl p-8 md:p-14 overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-yellow-300">
            <Sparkles className="w-4 h-4" />
            <span>A1/A2'den YDS'ye Görsel Hafıza Devrimi</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            YDS'yi Ezberlemeden,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              Görsel Hafızayla Kodlayarak
            </span>{" "}
            Fethedin!
          </h1>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            3D dönebilen kelime küpleri, 180 dakikalık gerçek online optik form, 10 sesli multi-accent TTS ve 11 soru tipine özel taktiklerle YDS hazırlığında sıfır hata!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/vocabulary/flashcards"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white font-black text-base shadow-xl hover:shadow-pink-500/40 hover:scale-105 transition-all"
            >
              <span>🃏 3D Flashcards Başlat</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/exams/yds-2024-ilkbahar"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-base backdrop-blur-md transition-all"
            >
              <Clock className="w-5 h-5 text-rose-400" />
              <span>180 dk Optik Sınav Çöz</span>
            </Link>
          </div>
        </div>

        {/* Arka plan dekoratif neon ışıklar */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        <div className="absolute right-40 top-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
      </section>

      {/* Hızlı İstatistik Sayaçları */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="card-vibrant p-5 text-center">
          <span className="text-3xl font-black text-yellow-300 block mb-1">
            {wordCount}+
          </span>
          <span className="text-xs text-white/70 font-semibold">
            YDS Hedef Kelime
          </span>
        </div>
        <div className="card-vibrant p-5 text-center">
          <span className="text-3xl font-black text-pink-400 block mb-1">
            {examCount}
          </span>
          <span className="text-xs text-white/70 font-semibold">
            Sınav & 100 Deneme
          </span>
        </div>
        <div className="card-vibrant p-5 text-center">
          <span className="text-3xl font-black text-cyan-300 block mb-1">
            15
          </span>
          <span className="text-xs text-white/70 font-semibold">
            Kapsamlı Gramer Konusu
          </span>
        </div>
        <div className="card-vibrant p-5 text-center">
          <span className="text-3xl font-black text-emerald-400 block mb-1">
            10
          </span>
          <span className="text-xs text-white/70 font-semibold">
            Multi-Accent TTS Sesi
          </span>
        </div>
      </section>

      {/* Ana Modüller Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Öğrenme ve Simülasyon İstasyonları
            </h2>
            <p className="text-xs md:text-sm text-white/60">
              Her aşamada renkli, animasyonlu ve görsel hafıza destekli modüller
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flashcards */}
          <Link
            href="/vocabulary/flashcards"
            className="group card-vibrant p-6 space-y-4 hover:border-amber-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
              🃏
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-yellow-300 transition-colors">
                3D Flashcards & Görsel Hafıza
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Kart çevirme animasyonu, WebGL dönen kelime küpü, üstte şeffaf Detay butonu ve SM-2 algoritması.
              </p>
            </div>
            <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
              Öğrenmeye Başla <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 180 dk Optik Sınav */}
          <Link
            href="/exams"
            className="group card-vibrant p-6 space-y-4 hover:border-rose-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-600 flex items-center justify-center text-2xl shadow-lg">
              ⏱️
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-rose-300 transition-colors">
                180 dk Online Optik Sınav
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                2013-2026 çıkmış sınavlar ve 100 özgün deneme. 80 soru, süre korumalı baloncuk formu ve otomatik net hesabı.
              </p>
            </div>
            <div className="text-xs font-bold text-rose-300 flex items-center gap-1">
              Sınavları İncele <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Gramer */}
          <Link
            href="/grammar"
            className="group card-vibrant p-6 space-y-4 hover:border-purple-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg">
              📖
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">
                15 Gramer Konusu & 100 Soru
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                A1 sadeliğinde Türkçe anlatım, renk kodlu formüller, kafada kodlama taktikleri ve tuzak uyarıları.
              </p>
            </div>
            <div className="text-xs font-bold text-purple-300 flex items-center gap-1">
              Konuları Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 11 Soru Tipi Taktikleri */}
          <Link
            href="/tactics"
            className="group card-vibrant p-6 space-y-4 hover:border-cyan-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
              🎯
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                11 YDS Soru Tipi ve Taktikleri
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Cümle tamamlama, çeviri, diyalog, restatement ve akışı bozan cümleler için adım adım çözüm algoritmaları.
              </p>
            </div>
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-1">
              Taktikleri Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Reading Lab */}
          <Link
            href="/reading"
            className="group card-vibrant p-6 space-y-4 hover:border-emerald-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-2xl shadow-lg">
              🔬
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                Reader at Work Tarzı Reading Lab
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Özgün akademik okuma parçaları, tıklandığında anında açılan kelime sözlüğü ve 5 açık uçlu kavrama sorusu.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1">
              Okumaya Başla <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* PDF & Quizlet İçe Aktar */}
          <Link
            href="/import"
            className="group card-vibrant p-6 space-y-4 hover:border-pink-400/50 hover:bg-white/15"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-2xl shadow-lg">
              📤
            </div>
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-pink-300 transition-colors">
                PDF & Quizlet İçe Aktarma
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Quizlet dışa aktarımı yapıştır-parse et-onayla akışı + PDF OCR tarayıcı ve şüpheli karakter denetimi.
              </p>
            </div>
            <div className="text-xs font-bold text-pink-300 flex items-center gap-1">
              İçe Aktar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
