"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getPracticeExamIds } from "@/lib/data-exams";
import { ARCHIVE_WORDS } from "@/lib/data-archive-vocab";
import { Reveal } from "@/components/animations";

const FREQ_LABEL: Record<string, string> = {
  çok: "🔥 Çok sık",
  sık: "⭐ Sık",
  orta: "💠 Ara sıra",
};

export default function ArsivPage() {
  const [tab, setTab] = useState<"exams" | "words">("exams");
  const [query, setQuery] = useState("");
  const [freq, setFreq] = useState("hepsi");

  const years = useMemo(() => {
    const list = getPracticeExamIds().filter((e) => e.year !== "Özgün");
    // yıla göre grupla
    const map = new Map<string, typeof list>();
    list.forEach((e) => {
      if (!map.has(e.year)) map.set(e.year, []);
      map.get(e.year)!.push(e);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const words = useMemo(() => {
    let list = ARCHIVE_WORDS;
    if (freq !== "hepsi") list = list.filter((w) => w.f === freq);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (w) => w.w.toLowerCase().includes(q) || w.tr.toLowerCase().includes(q)
      );
    }
    return list;
  }, [freq, query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          🗄️ <span className="gradient-text">YDS Arşivi</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Kanka, 2013-2026 arası tüm YDS dönemleri ve o sınavlarda çıkan kelimeler (Türkçe
          anlamlarıyla) burada. Çalış, netleri topla!
        </p>
      </header>

      {/* Sekmeler */}
      <div className="flex justify-center gap-2 mb-10">
        <button
          onClick={() => setTab("exams")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
            tab === "exams"
              ? "bg-gradient-to-r from-pink-500 to-purple-600"
              : "border border-white/15 text-white/60 hover:text-white"
          }`}
        >
          📅 Sınav Dönemleri
        </button>
        <button
          onClick={() => setTab("words")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
            tab === "words"
              ? "bg-gradient-to-r from-pink-500 to-purple-600"
              : "border border-white/15 text-white/60 hover:text-white"
          }`}
        >
          🔤 Çıkmış Kelimeler
        </button>
      </div>

      {tab === "exams" ? (
        <div className="space-y-6">
          {years.map(([year, exams], i) => (
            <Reveal key={year} delay={(i % 4) * 60}>
              <div className="card-vibrant p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-lg">
                    {year}
                  </span>
                  <h2 className="text-lg font-black">YDS {year}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {exams.map((e) => (
                    <Link
                      key={e.id}
                      href={`/exams/${e.id}`}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all"
                    >
                      <span className="text-sm font-bold text-white/80">
                        {e.session} Dönemi
                      </span>
                      <span className="text-xs text-cyan-300 font-mono">80 soru · 180 dk →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div>
          {/* Filtreler */}
          <div className="flex flex-wrap items-center gap-2 justify-center mb-6">
            {["hepsi", "çok", "sık", "orta"].map((f) => (
              <button
                key={f}
                onClick={() => setFreq(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  freq === f
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent"
                    : "border-white/15 text-white/60 hover:text-white"
                }`}
              >
                {f === "hepsi" ? "Hepsi" : FREQ_LABEL[f]}
              </button>
            ))}
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Kelime veya anlam ara..."
              className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm focus:outline-none focus:border-cyan-400 w-56"
            />
          </div>

          <p className="text-center text-xs text-white/40 mb-4">
            {words.length} kelime · 2013-2026 YDS'lerinde çıkmış sık kelimeler
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {words.map((w, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-start justify-between gap-3 hover:border-white/25 transition-all"
              >
                <div>
                  <p className="font-mono font-bold text-cyan-300 text-sm">{w.w}</p>
                  <p className="text-sm text-white/75">{w.tr}</p>
                  <p className="text-[10px] text-white/40 font-mono mt-0.5">{w.type}</p>
                </div>
                <span className="text-[10px] shrink-0 px-2 py-1 rounded-full bg-white/10 text-white/60">
                  {FREQ_LABEL[w.f]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
