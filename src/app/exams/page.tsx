import Link from "next/link";
import { Clock, Award, ShieldAlert, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { getPracticeExamIds } from "@/lib/data-exams";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ExamsPage() {
  let exams: Array<{ id: string; title: string; year: string; period: string; isReal: boolean }> = [];
  try {
    const dbExams = await prisma.exam.findMany({
      orderBy: [{ isReal: "desc" }, { year: "desc" }, { title: "asc" }],
    });
    if (dbExams && dbExams.length > 0) {
      exams = dbExams.map((e) => ({
        id: e.id,
        title: e.title,
        year: e.year ? String(e.year) : "2024",
        period: e.period ?? "Bahar",
        isReal: Boolean(e.isReal),
      }));
    }
  } catch (err) {
    console.warn("Prisma exam query failed, falling back to static exam registry:", err);
  }

  // Fallback to static practice registry if db is empty or unavailable
  if (exams.length === 0) {
    const list = getPracticeExamIds();
    exams = list.map((item) => ({
      id: item.id,
      title: item.title,
      year: item.year,
      period: item.session,
      isReal: item.year !== "Özgün",
    }));
  }

  const realExams = exams.filter((e) => e.isReal);
  const mockExams = exams.filter((e) => !e.isReal);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Başlık Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-red-950 via-rose-950 to-slate-950 border-2 border-red-500/30 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-xs font-bold text-red-300">
          <Clock className="w-4 h-4" />
          <span>180 Dakika Resmi Sınav Süresi • 80 Soru</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDS Çıkmış Sınavlar ve 100 Özgün Deneme
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          Gerçek YDS ortamını simüle eden tıklanabilir optik form, süre sayaçları, süre uyarıları ve anlık detaylı net hesabı ile sınav salonundaymış gibi test çözün.
        </p>
      </div>

      {/* 1. Kısım: 2013-2026 Gerçek Çıkmış YDS Sınavları */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📕</span>
            <h2 className="text-2xl font-black text-white">
              2013 – 2026 Gerçek YDS Sınavları ({realExams.length})
            </h2>
          </div>
          <span className="glass-pill text-xs font-mono text-rose-300">
            Resmi ÖSYM Formatı
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {realExams.map((exam) => (
            <div
              key={exam.id}
              className="card-vibrant p-5 space-y-3 flex flex-col justify-between hover:border-red-400/50 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                  <span className="font-mono font-bold text-yellow-300">{exam.year}</span>
                  <span className="glass-pill text-[10px] text-cyan-300">
                    {exam.period}
                  </span>
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-yellow-300 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  80 Soru • 180 Dakika • Optik Form
                </p>
              </div>

              <Link
                href={`/exams/${exam.id}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
              >
                <span>Sınavı Başlat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Kısım: 100 Özgün Deneme Sınavı */}
      <section className="space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📘</span>
            <h2 className="text-2xl font-black text-white">
              100 Adet Özgün YDS Deneme Sınavı
            </h2>
          </div>
          <span className="glass-pill text-xs font-mono text-cyan-300">
            Geçmiş Soru Dağılımı Uyumlu
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockExams.slice(0, 16).map((exam) => (
            <div
              key={exam.id}
              className="card-vibrant p-5 space-y-3 flex flex-col justify-between hover:border-cyan-400/50 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                  <span className="glass-pill text-[10px] text-yellow-300 font-bold">
                    Özgün Deneme
                  </span>
                  <span className="text-[10px] text-white/50">80 Soru</span>
                </div>
                <h3 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  180 dk Süre • Anlık Net Raporu
                </p>
              </div>

              <Link
                href={`/exams/${exam.id}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
              >
                <span>Denemeyi Çöz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
