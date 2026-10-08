"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, Award, Sparkles, ArrowRight } from "lucide-react";

// TypeScript arayüzü ile veri yapısını sıkı bir şekilde (strict) kurallara bağlıyoruz
export interface ProgramData {
  id: string;
  title: string;
  examCode: "YDS" | "YDT" | "YOKDIL";
  description: string;
  badgeColor: string;
  badgeText: string;
  targetInfo: string;
  durationInfo: string;
  href: string;
  highlights: string[];
}

// Hataya yer bırakmayan, dışarıdan müdahaleye kapalı (Read-Only) kurumsal veri kaynağı
export const EXAM_PROGRAMS: ReadonlyArray<ProgramData> = [
  {
    id: "yds",
    title: "YDS Çalışma Programı",
    examCode: "YDS",
    description:
      "Yabancı Dil Bilgisi Seviye Tespit Sınavı için özel hazırlanmış, akademik kelime, Reader at Work tarzı okuma ve bağlaç taktikleri odaklı yoğunlaştırılmış program.",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/40",
    badgeText: "YDS Akademik",
    targetInfo: "70 – 90+ Hedef Puan",
    durationInfo: "30 · 60 · 90 · 120 Gün",
    href: "/study-plans?exam=yds",
    highlights: ["2.500+ Akademik Kelime", "80 Soru Sınav Stratejileri", "Gramer Formülleri"],
  },
  {
    id: "ydt",
    title: "YDT Çalışma Programı",
    examCode: "YDT",
    description:
      "Yükseköğretim Kurumları Sınavı (YKS-Dil) puan türü için test teknikleri, Türkçe-İngilizce çeviri sürati, diyaloglar ve 120 dakikalık zaman yönetimi odaklı program.",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    badgeText: "YDT (YKS-Dil)",
    targetInfo: "65 – 78+ Hedef Net",
    durationInfo: "30 · 60 · 90 · 120 Gün",
    href: "/study-plans?exam=ydt",
    highlights: ["80 Soru / 120 Dk Hız", "Çeviri & Cümle Tamamlama", "İlk 5.000 Derece Rotası"],
  },
  {
    id: "yokdil",
    title: "YÖKDİL Çalışma Programı",
    examCode: "YOKDIL",
    description:
      "Fen Bilimleri, Sosyal Bilimler ve Sağlık Bilimleri alanlarına özel ayrılmış terminoloji havuzları, akademik çeviri ve alan makalesi analizi programı.",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
    badgeText: "YÖKDİL 3 Alan",
    targetInfo: "Sağlık · Fen · Sosyal",
    durationInfo: "30 · 60 Günlük Alan Kampları",
    href: "/study-plans?exam=yokdil",
    highlights: ["Sağlık Terminolojisi", "Fen & Teknoloji Metinleri", "Sosyal Bilim Makaleleri"],
  },
];

export const ExamProgramsSection: React.FC = () => {
  const router = useRouter();

  // SAFETY: Eğer veri dizisi boşsa veya tanımsızsa sayfanın çökmesini engelleyen güvenlik kontrolü
  if (!EXAM_PROGRAMS || EXAM_PROGRAMS.length === 0) {
    return (
      <div className="p-8 text-center text-white/50 bg-white/5 rounded-3xl border border-white/10 my-8">
        Program verileri yükleniyor...
      </div>
    );
  }

  const handleStartProgram = (program: ProgramData) => {
    try {
      // Defansif yönlendirme: route hatasında fallback window.location
      if (router && typeof router.push === "function") {
        router.push(program.href);
      } else if (typeof window !== "undefined") {
        window.location.href = program.href;
      }
    } catch (e) {
      // SAFETY: Asla beyaz ekrana düşürme, güvenli yönlendir
      console.error("[ExamPrograms] Yönlendirme hatası bloke edildi:", e);
      if (typeof window !== "undefined") {
        window.location.href = program.href;
      }
    }
  };

  return (
    <section id="programlar" aria-label="Sınav Hazırlık Programları" className="my-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-black text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KİŞİSELLEŞTİRİLMİŞ TAKVİM & HEDEF MOTORU</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Sınav Hazırlık <span className="gradient-text">Programları</span> 📅
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-white/70 leading-relaxed">
            Hedeflediğiniz sınava özel (YDS, YDT, YÖKDİL), seviyenize göre uyarlanan ve gün/ay/yıl takvimi sunan veri güdümlü çalışma modülleri.
          </p>
        </div>

        {/* CSS Grid ile responsivite (Mobilde 1 sütun, tablette 2, bilgisayarda 3 sütun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXAM_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="card-vibrant p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Rozet ve Süre */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black border ${program.badgeColor}`}
                  >
                    {program.badgeText}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-white/50">
                    {program.durationInfo}
                  </span>
                </div>

                {/* Başlık & Hedef */}
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-bold text-cyan-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{program.targetInfo}</span>
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                  {program.description}
                </p>

                {/* Öne Çıkan Özellikler */}
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-white/80">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aksiyon Butonları */}
              <div className="pt-6 mt-4 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={() => handleStartProgram(program)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 active:scale-[0.99] text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Programa Başla</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href={program.href}
                  className="block text-center text-[11px] font-bold text-white/50 hover:text-cyan-300 transition-colors pt-1"
                >
                  Program Takvimini ve CEFR Kılavuzunu İncele →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamProgramsSection;
