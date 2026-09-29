"use client";

import React, { useState } from "react";
import { CertificateLevel, UserCertificate } from "@/lib/certificates/types";
import { LEVEL_UP_QUIZZES, CERTIFICATE_DEFINITIONS } from "@/lib/certificates/data";
import { awardCertificate } from "@/lib/certificates/engine";
import { launchFireworks } from "@/lib/fireworks";

interface LevelUpQuizModalProps {
  level: CertificateLevel;
  userName: string;
  isOpen: boolean;
  onClose: () => void;
  onCertificateEarned: (cert: UserCertificate) => void;
}

export function LevelUpQuizModal({
  level,
  userName,
  isOpen,
  onClose,
  onCertificateEarned,
}: LevelUpQuizModalProps) {
  const questions = LEVEL_UP_QUIZZES[level] || [];
  const def = CERTIFICATE_DEFINITIONS[level];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [earnedCert, setEarnedCert] = useState<UserCertificate | null>(null);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const finishQuiz = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        correctCount++;
      }
    });

    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= (def?.requirements?.examPassingScore || 70);

    setIsFinished(true);

    if (passed) {
      launchFireworks(3000);
      const cert = awardCertificate(level, userName || "Öğrenci", scorePercent, "exam");
      setEarnedCert(cert);
      onCertificateEarned(cert);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
    setEarnedCert(null);
  };

  // Score calculation for finish screen
  let correctCount = 0;
  if (isFinished) {
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        correctCount++;
      }
    });
  }
  const scorePercent = isFinished ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePercent >= (def?.requirements?.examPassingScore || 70);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{def?.badgeEmoji || "🎯"}</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-cyan-300">
                {level} Seviye Bitirme Sınavı
              </h2>
              <p className="text-xs text-slate-400">
                {def?.title || `${level} İngilizce Yeterlilik`} (Baraj: %{def?.requirements.examPassingScore || 70})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {!isFinished ? (
          <div className="mt-6 space-y-6">
            {/* Progress Bar & Counter */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Soru {currentIndex + 1} / {totalQuestions}</span>
                <span>İlerleme: %{Math.round(((currentIndex + 1) / totalQuestions) * 100)}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Stem */}
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                {currentQ?.stem}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ?.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentIndex] === oIdx;
                const letter = ["A", "B", "C", "D"][oIdx];
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm sm:text-base transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md ring-1 ring-cyan-400/50"
                        : "bg-slate-800/40 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? "bg-cyan-400 text-slate-950 font-bold"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {letter}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                ← Önceki Soru
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentIndex] === undefined}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed shadow-lg transition-all"
              >
                {currentIndex === totalQuestions - 1 ? "Sınavı Bitir 🏁" : "Sonraki Soru →"}
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="mt-6 text-center space-y-6">
            <div className="inline-block p-4 rounded-3xl bg-slate-800/80 border border-slate-700">
              <span className="text-6xl">{isPassed ? "🏆" : "📚"}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {isPassed ? "Tebrikler! Sınavı Başarıyla Geçtin!" : "Biraz Daha Pratik Gerekli"}
              </h3>
              <p className="text-sm text-slate-300">
                {isPassed
                  ? `${level} seviye yeterlilik kriterlerini tamamladın ve sertifikan hazırlandı!`
                  : `Baraj puanı %${def?.requirements.examPassingScore || 70}. Konuları tekrar gözden geçirip tekrar deneyebilirsin.`}
              </p>
            </div>

            {/* Score Card */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                <div className="text-xs text-slate-400">Doğru Sayısı</div>
                <div className="text-2xl font-bold text-cyan-300">{correctCount} / {totalQuestions}</div>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                <div className="text-xs text-slate-400">Başarı Puanı</div>
                <div className={`text-2xl font-bold ${isPassed ? "text-emerald-400" : "text-amber-400"}`}>
                  %{scorePercent}
                </div>
              </div>
            </div>

            {/* Explanations summary */}
            <div className="text-left bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 max-h-48 overflow-y-auto space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Soru Analizi & Çözümler
              </div>
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.answer;
                return (
                  <div key={idx} className="text-xs border-b border-slate-700/40 pb-2">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span>{isCorrect ? "✅" : "❌"} Soru {idx + 1}:</span>
                      <span className={isCorrect ? "text-emerald-300" : "text-rose-300"}>
                        {isCorrect ? "Doğru" : `Cevabın: ${["A","B","C","D"][userAns ?? 0]} | Doğru: ${["A","B","C","D"][q.answer]}`}
                      </span>
                    </div>
                    <div className="text-slate-400 mt-0.5">{q.explanation}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {isPassed && earnedCert ? (
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>📜</span> Sertifikamı Görüntüle & İndir
                </button>
              ) : (
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  🔄 Yeniden Dene
                </button>
              )}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors text-sm"
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
