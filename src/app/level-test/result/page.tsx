"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LevelAssessmentResult,
  LEVEL_COLORS,
  LEVEL_TEST_QUESTIONS,
  LevelTestQuestion,
  CefrLevel,
} from "@/lib/data-level-test";
import { LEVEL_TEST_RESULT_STORAGE_KEY, LEVEL_TEST_ANSWERS_STORAGE_KEY } from "../page";

export default function LevelTestResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<LevelAssessmentResult | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<"SUMMARY" | "QUESTIONS">("SUMMARY");
  const [filterLevel, setFilterLevel] = useState<CefrLevel | "ALL">("ALL");

  useEffect(() => {
    try {
      const rawRes = window.localStorage.getItem(LEVEL_TEST_RESULT_STORAGE_KEY);
      const rawAns = window.localStorage.getItem(LEVEL_TEST_ANSWERS_STORAGE_KEY);
      if (rawRes) {
        setResult(JSON.parse(rawRes));
      }
      if (rawAns) {
        setAnswers(JSON.parse(rawAns));
      }
    } catch {
      /* safety */
    }
  }, []);

  if (!result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-black text-white">Henüz bir seviye testi çözmedin kanka.</h2>
        <p className="text-sm text-white/50">
          42 soruluk mini seviye tespit sınavını tamamlayarak gerçek CEFR seviyeni öğren!
        </p>
        <Link
          href="/level-test"
          className="inline-block px-6 py-3 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20"
        >
          Seviye Testini Başlat 🚀
        </Link>
      </div>
    );
  }

  const levelColor = LEVEL_COLORS[result.estimatedLevel] || LEVEL_COLORS.B1;

  const filteredQuestions = LEVEL_TEST_QUESTIONS.filter((q) => {
    if (filterLevel === "ALL") return true;
    return q.level === filterLevel;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner: Estimated Level & Confidence */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl text-center space-y-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
            Mini Seviye Tespit Sınavı Değerlendirmesi
          </span>

          {/* Level Badge */}
          <div
            className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border-2 flex flex-col items-center justify-center shadow-2xl transition-transform hover:scale-105 ${levelColor.bgClass} ${levelColor.borderClass}`}
          >
            <span className={`text-4xl sm:text-5xl font-black ${levelColor.textClass}`}>
              {result.estimatedLevel}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 mt-1">
              {levelColor.name} Kuşak
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Tahmini Seviyen: <span className={levelColor.textClass}>{result.estimatedLevel}</span>
          </h1>

          {result.borderNote && (
            <div className="px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              ⚡ {result.borderNote}
            </div>
          )}

          <p className="text-xs text-white/50 max-w-lg">
            Güvenilirlik Düzeyi: <strong className="text-white capitalize">{result.confidence}</strong> &bull; {result.disclaimer}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-white/40 block">Başarı Oranı</span>
            <span className="text-2xl font-black text-cyan-400">%{result.scorePercent}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-white/40 block">Doğru Cevap</span>
            <span className="text-2xl font-black text-emerald-400">{result.totalCorrect}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-white/40 block">Yanlış Cevap</span>
            <span className="text-2xl font-black text-rose-400">{result.totalWrong}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-white/40 block">Boş Soru</span>
            <span className="text-2xl font-black text-white/60">{result.totalEmpty}</span>
          </div>
        </div>

        {/* CTA Button to Study Plans */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/study-plans"
            className="px-6 py-3.5 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:brightness-110 shadow-lg shadow-purple-500/20 transition-all"
          >
            {result.estimatedLevel} Düzeyine Uygun Çalışma Planını Başlat 🚀
          </Link>
          <Link
            href="/level-test"
            className="px-5 py-3.5 rounded-xl font-bold text-xs border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            Testi Tekrar Çöz 🔄
          </Link>
        </div>
      </div>

      {/* Navigation Tabs between Summary and Question Review */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab("SUMMARY")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "SUMMARY"
              ? "bg-white/15 text-white shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          📊 Detaylı Seviye & Beceri Analizi
        </button>
        <button
          onClick={() => setActiveTab("QUESTIONS")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "QUESTIONS"
              ? "bg-white/15 text-white shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          🔍 Soruları & Açıklamaları İncele ({LEVEL_TEST_QUESTIONS.length})
        </button>
      </div>

      {/* TAB 1: DETAILED SUMMARY */}
      {activeTab === "SUMMARY" && (
        <div className="space-y-6">
          {/* CEFR Level Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              CEFR Seviyelerine Göre Başarı Düzeyi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(["A1", "A2", "B1", "B2", "C1", "C2"] as CefrLevel[]).map((lvl) => {
                const score = result.levelScores[lvl];
                const info = LEVEL_COLORS[lvl];

                return (
                  <div
                    key={lvl}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-extrabold ${info.textClass}`}>
                        {lvl} Seviyesi
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        {score.correct}/{score.total} (%{score.percent})
                      </span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${score.percent}%`,
                          backgroundColor: info.hex,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Dil Becerilerine Göre Dağılım
            </h3>
            <div className="space-y-3">
              {[
                { name: "Gramer (Dilbilgisi)", key: "grammar", percent: result.skillScores.grammar },
                { name: "Kelime Bilgisi (Vocabulary)", key: "vocabulary", percent: result.skillScores.vocabulary },
                { name: "Okuma / Anlama (Reading)", key: "reading", percent: result.skillScores.reading },
                { name: "Cümle Yapısı & Bağlaçlar", key: "sentence", percent: result.skillScores.sentence },
                { name: "Çeviri & Anlamsal Eşdeğerlik", key: "translation", percent: result.skillScores.translation },
              ].map((skill) => (
                <div key={skill.key} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">%{skill.percent}</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-xl space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <span>💪</span> En Güçlü Alanların
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {result.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-xl space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>🎯</span> Geliştirilmesi Gerekenler
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {result.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-amber-400">!</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: QUESTIONS & PEDAGOGICAL EXPLANATIONS REVIEW */}
      {activeTab === "QUESTIONS" && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {(["ALL", "A1", "A2", "B1", "B2", "C1", "C2"] as (CefrLevel | "ALL")[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterLevel === lvl
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {lvl === "ALL" ? "Tüm Sorular" : `${lvl} Soruları`}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const chosen = answers[q.id];
              const isCorrect = chosen === q.answer;
              const isEmp = chosen === undefined || chosen === -1;
              const levelInfo = LEVEL_COLORS[q.level];

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-3xl border transition-all ${
                    isCorrect
                      ? "border-emerald-500/30 bg-emerald-950/10"
                      : isEmp
                      ? "border-white/10 bg-slate-900/60"
                      : "border-rose-500/30 bg-rose-950/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-white/60">
                        Soru {idx + 1}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold border ${levelInfo.bgClass} ${levelInfo.textClass} ${levelInfo.borderClass}`}
                      >
                        {q.level}
                      </span>
                      <span className="text-[10px] text-white/40 uppercase">
                        {q.skill}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect
                          ? "bg-emerald-500/20 text-emerald-300"
                          : isEmp
                          ? "bg-white/10 text-white/50"
                          : "bg-rose-500/20 text-rose-300"
                      }`}
                    >
                      {isCorrect ? "✓ Doğru" : isEmp ? "○ Boş" : "✗ Yanlış"}
                    </span>
                  </div>

                  {q.passage && (
                    <div className="p-3.5 mb-3 rounded-xl bg-white/[0.03] text-xs text-white/70 italic">
                      {q.passage}
                    </div>
                  )}

                  <p className="text-sm font-semibold text-white mb-3">{q.stem}</p>

                  {/* Options */}
                  <div className="space-y-1.5 mb-4">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.answer;
                      const isOptionChosen = optIdx === chosen;
                      const letter = ["A", "B", "C", "D", "E"][optIdx];

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl text-xs flex items-center gap-2 border ${
                            isOptionCorrect
                              ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-200 font-semibold"
                              : isOptionChosen && !isOptionCorrect
                              ? "border-rose-400/50 bg-rose-500/10 text-rose-200"
                              : "border-white/5 text-white/60"
                          }`}
                        >
                          <span className="font-mono font-bold w-5">{letter})</span>
                          <span>{opt}</span>
                          {isOptionCorrect && <span className="ml-auto text-emerald-400 font-bold">✓ Doğru Cevap</span>}
                          {isOptionChosen && !isOptionCorrect && <span className="ml-auto text-rose-400 font-bold">Senin Seçimin</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Pedagogical Explanation */}
                  <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200">
                    <strong className="text-white block font-bold mb-0.5">
                      💡 Çözüm & Taktik Açıklaması:
                    </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
