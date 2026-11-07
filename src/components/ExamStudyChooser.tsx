"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Target } from "lucide-react";
import NavigationSectionIcon from "@/components/navigation/NavigationSectionIcon";
import { INVENTORY_METRICS } from "@/lib/data-inventory";
import { useUsage } from "@/lib/store";

type ExamId = "YDS" | "YDT" | "YÖKDİL";

const EXAMS: { id: ExamId; title: string; subtitle: string; href: string; color: string; badge: string }[] = [
  { id: "YDS", title: "YDS", subtitle: "Akademik İngilizce, kelime ve sınav pratiği", href: "/yds", color: "cyan", badge: "Akademik odak" },
  { id: "YDT", title: "YDT", subtitle: "YKS-Dil müfredatı, hız ve soru türleri", href: "/ydt", color: "amber", badge: "YKS-Dil" },
  { id: "YÖKDİL", title: "YÖKDİL", subtitle: "Sağlık, fen ve sosyal bilimler alanları", href: "/yokdil", color: "violet", badge: "3 alan seçeneği" },
];

const MODULES = [
  { id: "grammar", title: "Gramer", icon: "graduation-cap", href: "/grammar", text: "Konu anlatımları ve kısa alıştırmalar" },
  { id: "games", title: "Oyunlar", icon: "gamepad-2", href: "/games", text: "Seçilen sınav için filtrelenmiş oyunlar" },
  { id: "vocabulary", title: "Kelime", icon: "book-open", href: "/vocabulary/flashcards", text: "Sınav havuzuna göre kelime kartları" },
  { id: "reading", title: "Reading", icon: "audio-lines", href: "/reading", text: "Akademik metin ve okuduğunu anlama" },
  { id: "speaking", title: "Speaking", icon: "mic-vocal", href: "/speaking", text: "İngilizce anlatım ve telaffuz pratiği" },
  { id: "listening", title: "Listening", icon: "headphones", href: "/listening", text: "Dinleme ve aksan çalışmaları" },
  { id: "writing", title: "Writing", icon: "pen-line", href: "/writing", text: "Cümle kurma ve akademik yazma" },
  { id: "exam", title: "Sınav alıştırmaları", icon: "clipboard-list", href: "/exams", text: "Deneme, süre yönetimi ve soru pratiği" },
  { id: "study-plan", title: "Çalışma programı", icon: "calendar-days", href: "/study-plans", text: "Hedef sınavına göre günlük çalışma düzeni" },
] as const;

const EXAM_COLORS: Record<string, string> = {
  cyan: "border-cyan-300/40 bg-cyan-400/10 text-cyan-100 hover:border-cyan-200",
  amber: "border-amber-300/40 bg-amber-400/10 text-amber-100 hover:border-amber-200",
  violet: "border-violet-300/40 bg-violet-400/10 text-violet-100 hover:border-violet-200",
};

function examParam(exam: ExamId): string {
  return encodeURIComponent(exam);
}

export default function ExamStudyChooser() {
  const { usage, update, mounted } = useUsage();
  const selectedExam = useMemo<ExamId | null>(() => {
    const active = usage.activeExams || [];
    return active.length === 1 && EXAMS.some((exam) => exam.id === active[0])
      ? (active[0] as ExamId)
      : null;
  }, [usage.activeExams]);
  const exam = EXAMS.find((item) => item.id === selectedExam);
  const wordCount = selectedExam === "YDS"
    ? INVENTORY_METRICS.YDS
    : selectedExam === "YDT"
      ? INVENTORY_METRICS.YDT
      : selectedExam === "YÖKDİL"
        ? INVENTORY_METRICS.YÖKDİL
        : 0;

  const chooseExam = (examId: ExamId) => {
    update((current) => ({ ...current, activeExams: [examId] }));
  };

  return (
    <section id="exam-study-chooser" aria-labelledby="exam-study-heading" className="mx-auto mt-8 max-w-6xl scroll-mt-24 text-left">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-1 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            <Target className="h-4 w-4" /> Önce hedefini seç
          </p>
          <h2 id="exam-study-heading" className="text-2xl font-black text-white sm:text-3xl">Bugün hangi sınava hazırlanıyoruz?</h2>
          <p className="mt-1 text-sm text-white/65">Seçimin kaydedilir; çalışma alanını o sınava göre açarız.</p>
        </div>
        {selectedExam && (
          <button type="button" onClick={() => update((current) => ({ ...current, activeExams: [] }))} className="rounded-xl border border-white/15 px-3 py-2 text-xs font-bold text-white/75 transition hover:bg-white/10 hover:text-white">
            Sınavı değiştir
          </button>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {EXAMS.map((item) => {
          const isSelected = selectedExam === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => chooseExam(item.id)}
              className={`rounded-2xl border p-5 text-left transition duration-200 hover:-translate-y-0.5 ${EXAM_COLORS[item.color]} ${isSelected ? "ring-2 ring-white/70 shadow-xl" : ""}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl font-black">{item.title}</span>
                <span className="rounded-full bg-black/20 px-2.5 py-1 text-[10px] font-bold">{item.badge}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{item.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-black">
                {isSelected ? "Çalışma alanın seçildi" : "Bu sınava hazırlan"}<ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          );
        })}
      </div>

      {!mounted || !exam ? (
        <div className="mt-5 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-5 py-6 text-center text-sm text-white/65">
          Sınavını seçince gramer, oyun, kelime ve beceri çalışmalarını burada sıralayacağız.
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-white/15 bg-slate-950/70 p-4 shadow-2xl sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">Seçili çalışma alanı</p>
              <h3 className="mt-1 text-xl font-black text-white">{exam.title} hazırlık merkezi</h3>
              <p className="mt-1 text-xs text-white/60">Kelime havuzunda bu sınavla etiketlenmiş {wordCount.toLocaleString("tr-TR")} kelime var.</p>
            </div>
            <Link href={exam.href} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2.5 text-xs font-black text-white transition hover:bg-white/15">
              Sınav merkezini aç<ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((module) => {
              const href = `${module.href}?exam=${examParam(exam.id)}`;
              const description = module.id === "vocabulary" && exam.id === "YÖKDİL"
                ? "Sağlık, fen ve sosyal alan etiketli kelimeler"
                : module.id === "vocabulary" && exam.id === "YDT"
                  ? "YKS-Dil düzeyi ve phrasal verb havuzu"
                  : module.id === "vocabulary"
                    ? "Akademik çekirdek ve yüksek öncelikli kelimeler"
                    : module.text;
              return (
                <Link key={module.id} href={href} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-100">
                    <NavigationSectionIcon icon={module.icon} className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-white group-hover:text-cyan-100">{module.title}</h4>
                  <p className="mt-1 min-h-10 text-xs leading-relaxed text-white/60">{description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-cyan-200">Çalışmaya geç<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
                </Link>
              );
            })}
          </div>
          {exam.id === "YÖKDİL" && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-violet-300/20 bg-violet-300/[0.06] px-3 py-2 text-xs text-violet-100/80">
              <FlaskConical className="h-4 w-4 shrink-0" />YÖKDİL merkezinde Sağlık, Fen veya Sosyal alanını çalışma sayfasından seçebilirsin.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
