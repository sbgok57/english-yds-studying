"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CORE_LEVEL_QUESTIONS,
  LEVEL_TEST_QUESTIONS,
  LevelTestQuestion,
  calculateLevelAssessment,
  LEVEL_COLORS,
} from "@/lib/data-level-test";
import { awardPointsIdempotent } from "@/lib/gamification/points-config";
import { useUsage } from "@/lib/store";

export const LEVEL_TEST_RESULT_STORAGE_KEY = "yds-master-level-assessment-result-v1";
export const LEVEL_TEST_ANSWERS_STORAGE_KEY = "yds-master-level-assessment-answers-v1";

export default function LevelTestPage() {
  const router = useRouter();
  const { addXp } = useUsage();

  // Questions: 42 authentic questions
  const questions: LevelTestQuestion[] = LEVEL_TEST_QUESTIONS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time mm:ss
  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleClearOption = () => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
  };

  const handleFinishTest = () => {
    setIsFinishing(true);

    const assessment = calculateLevelAssessment(answers, questions);

    // Save assessment and answers to localStorage
    try {
      window.localStorage.setItem(LEVEL_TEST_RESULT_STORAGE_KEY, JSON.stringify(assessment));
      window.localStorage.setItem(LEVEL_TEST_ANSWERS_STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* safety */
    }

    // Award XP
    try {
      const { xpAwarded } = awardPointsIdempotent("level_test_complete", "LEVEL_TEST_COMPLETE");
      if (xpAwarded > 0 && addXp) {
        addXp(xpAwarded);
      }
    } catch {
      /* safety */
    }

    router.push("/level-test/result");
  };

  const currentLevelInfo = LEVEL_COLORS[currentQ.level];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Bar: Title, Timer, Question Count, Finish Button */}
      <header className="p-4 sm:p-6 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-9 h-9 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs transition-colors"
          >
            ←
          </Link>
          <div>
            <h1 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <span>📊</span> Mini Seviye Tespit Sınavı
            </h1>
            <p className="text-[11px] text-white/50">
              A1–C2 Seviye Analizi &bull; {questions.length} Soru
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white/80 flex items-center gap-1.5">
            <span>⏱️</span> {formatTime(elapsedSeconds)}
          </div>

          <div className="text-xs text-white/60">
            <span className="font-bold text-cyan-400">{answeredCount}</span> / {questions.length} Cevaplandı
          </div>

          <button
            onClick={handleFinishTest}
            disabled={isFinishing}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:brightness-110 shadow-md shadow-cyan-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {isFinishing ? "Hesaplanıyor..." : "Sınavı Bitir 🏁"}
          </button>
        </div>
      </header>

      {/* Main Question Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Center: Question and Options */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-6">
            {/* Question Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-white/10 text-white">
                  Soru {currentIndex + 1}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-lg text-[11px] font-extrabold border ${currentLevelInfo.bgClass} ${currentLevelInfo.textClass} ${currentLevelInfo.borderClass}`}
                >
                  {currentQ.level} Düzeyi
                </span>
                <span className="text-[11px] text-white/40 uppercase capitalize">
                  {currentQ.skill}
                </span>
              </div>

              {answers[currentQ.id] !== undefined && (
                <button
                  onClick={handleClearOption}
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Cevabı Temizle
                </button>
              )}
            </div>

            {/* Reading Passage if available */}
            {currentQ.passage && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                {currentQ.passageTitle && (
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    📖 {currentQ.passageTitle}
                  </h4>
                )}
                <p className="text-sm text-white/80 leading-relaxed italic">
                  {currentQ.passage}
                </p>
              </div>
            )}

            {/* Question Stem */}
            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              {currentQ.stem}
            </p>

            {/* 5 Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                const letter = ["A", "B", "C", "D", "E"][optIdx];

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 group ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                        : "bg-white/[0.02] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? "bg-cyan-400 border-cyan-400 text-slate-950 font-bold"
                          : "bg-white/5 border-white/15 text-white/60 group-hover:border-white/30"
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="text-sm font-medium leading-normal flex-1">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-white/15 hover:bg-white/10 text-white/70 hover:text-white disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
              >
                ← Önceki Soru
              </button>

              <span className="text-xs text-white/40">
                {currentIndex + 1} / {questions.length}
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((idx) => Math.min(questions.length - 1, idx + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-400 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
                >
                  Sonraki Soru →
                </button>
              ) : (
                <button
                  onClick={handleFinishTest}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:brightness-110 shadow-md shadow-emerald-500/20 transition-all"
                >
                  Sınavı Tamamla 🏁
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right column: Question Navigator Palette */}
        <div className="lg:col-span-4 p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Soru Gezgini
            </h3>
            <span className="text-[11px] text-white/40">
              {answeredCount}/{questions.length}
            </span>
          </div>

          {/* 42-question grid */}
          <div className="grid grid-cols-6 sm:grid-cols-7 gap-1.5">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = answers[q.id] !== undefined;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-xl text-xs font-bold transition-all border ${
                    isCurrent
                      ? "border-cyan-400 bg-cyan-400/30 text-cyan-200 ring-2 ring-cyan-400/40"
                      : isAnswered
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50"></span>
              <span>Cevaplandı</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-cyan-400/40 border border-cyan-400"></span>
              <span>Mevcut Soru</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-white/5 border border-white/15"></span>
              <span>Boş / Bekliyor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
