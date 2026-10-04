"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Compass, Sparkles, BookOpen, Mic, FileText, Headphones } from "lucide-react";
import { getPracticeExamIds, PracticeExamEntry } from "@/lib/data-exams";
import ExamModeSwitcher, { ExamType } from "@/components/ExamModeSwitcher";
import { useUsage } from "@/lib/store";

export default function ExamsPage() {
  const { usage } = useUsage();
  const [activeCategory, setActiveCategory] = useState<"ALL" | ExamType>("ALL");
  const [typeFilter, setTypeFilter] = useState<"ALL" | "OFFICIAL" | "MOCK">("ALL");
  const [search, setSearch] = useState("");

  const allExams: PracticeExamEntry[] = useMemo(() => getPracticeExamIds(), []);

  // Filter exams by category, official/mock, and search query
  const filteredExams = useMemo(() => {
    let list = allExams;
    if (activeCategory !== "ALL") {
      list = list.filter((e) => e.category === activeCategory);
    }
    if (typeFilter === "OFFICIAL") {
      list = list.filter((e) => e.year !== "Özgün");
    } else if (typeFilter === "MOCK") {
      list = list.filter((e) => e.year === "Özgün");
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.year.toLowerCase().includes(q) ||
          e.session.toLowerCase().includes(q)
      );
    }
    return list;
  }, [allExams, activeCategory, typeFilter, search]);

  const counts = useMemo(() => {
    return {
      all: allExams.length,
      yds: allExams.filter((e) => e.category === "YDS").length,
      ydt: allExams.filter((e) => e.category === "YDT").length,
      yokdil: allExams.filter((e) => e.category === "YÖKDİL").length,
    };
  }, [allExams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık Banner */}
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 border-2 border-cyan-500/30 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300">
            <Clock className="w-3.5 h-3.5" />
            <span>Gerçek Sınav Ortamı • 80 Soru • Optik Form</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
            YDS (180 dk) • YDT (120 dk) • YÖKDİL (180 dk)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Sınav Merkezi: <span className="rainbow-text">YDS · YDT · YÖKDİL</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          2010&apos;dan 2026&apos;ya çıkmış tüm ÖSYM sınavları (LYS-5, YDT, YDS, YÖKDİL Sağlık/Fen/Sosyal) ve her sınav türü için 72&apos;şer adet özgün deneme sınavı. Tıklanabilir optik form, süre uyarıları ve anlık net hesabı ile sınav salonundaymış gibi deneyimleyin.
        </p>

        {/* Sınav Modu Seçici */}
        <div className="pt-2">
          <ExamModeSwitcher />
        </div>
      </div>

      {/* Sınavlara Özel Beceriler (Reading, Listening, Speaking, Writing) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Link
          href="/reading"
          className="card-vibrant p-4 rounded-2xl flex items-center gap-3 hover:border-cyan-400 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            📖
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Reading Lab</h4>
            <p className="text-[10px] text-slate-400">YDS/YDT/YÖKDİL Okuma</p>
          </div>
        </Link>

        <Link
          href="/speaking"
          className="card-vibrant p-4 rounded-2xl flex items-center gap-3 hover:border-pink-400 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            🎙️
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Speaking Lab</h4>
            <p className="text-[10px] text-slate-400">AI Telaffuz & Konuşma</p>
          </div>
        </Link>

        <Link
          href="/grammar/audio"
          className="card-vibrant p-4 rounded-2xl flex items-center gap-3 hover:border-purple-400 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            🎧
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Sesli Dinleme</h4>
            <p className="text-[10px] text-slate-400">12 Sınav Ses Modülü</p>
          </div>
        </Link>

        <Link
          href="/tactics"
          className="card-vibrant p-4 rounded-2xl flex items-center gap-3 hover:border-amber-400 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            🎯
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Soru Taktikleri</h4>
            <p className="text-[10px] text-slate-400">ÖSYM Çözüm Şifreleri</p>
          </div>
        </Link>
      </div>

      {/* Sınav Bölüm Sekmeleri (YDS, YDT, YÖKDİL, Tümü) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all ${
                activeCategory === "ALL"
                  ? "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-pink-500/20 scale-105"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              🌟 Tümü ({counts.all})
            </button>
            <button
              onClick={() => setActiveCategory("YDS")}
              className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                activeCategory === "YDS"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              <span>🎯</span> YDS Bölümü ({counts.yds})
            </button>
            <button
              onClick={() => setActiveCategory("YDT")}
              className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                activeCategory === "YDT"
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              <span>🎓</span> YDT / LYS-5 ({counts.ydt})
            </button>
            <button
              onClick={() => setActiveCategory("YÖKDİL")}
              className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                activeCategory === "YÖKDİL"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/20 scale-105"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              <span>🔬</span> YÖKDİL Alanları ({counts.yokdil})
            </button>
          </div>

          {/* Çıkmış vs Özgün Filtre */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setTypeFilter("ALL")}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                typeFilter === "ALL" ? "bg-white/20 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Hepsi
            </button>
            <button
              onClick={() => setTypeFilter("OFFICIAL")}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                typeFilter === "OFFICIAL" ? "bg-cyan-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
              }`}
            >
              🏛️ Çıkmış Sınavlar
            </button>
            <button
              onClick={() => setTypeFilter("MOCK")}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                typeFilter === "MOCK" ? "bg-amber-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
              }`}
            >
              🎲 Özgün Denemeler
            </button>
          </div>
        </div>

        {/* Arama Kutusu & Sayaç */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Yıl, dönem veya sınav ara..."
              className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {filteredExams.length} sınav listeleniyor
          </span>
        </div>

        {/* Sınav Kartları Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredExams.map((exam) => {
            const isOfficial = exam.year !== "Özgün";
            const badgeColor =
              exam.category === "YDT"
                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                : exam.category === "YÖKDİL"
                ? "bg-pink-500/20 text-pink-300 border-pink-500/30"
                : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";

            return (
              <div
                key={exam.id}
                className="card-vibrant p-5 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase ${badgeColor}`}>
                      {exam.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold">
                      {isOfficial ? exam.year : "Özgün Deneme"}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {exam.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-1">
                    {exam.session}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300 font-mono">
                    <span>⏱️ {exam.durationMin} Dakika</span>
                    <span>•</span>
                    <span>📝 80 Soru</span>
                  </div>
                </div>

                <Link
                  href={`/exams/${exam.id}`}
                  className="w-full mt-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Sınavı Başlat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
