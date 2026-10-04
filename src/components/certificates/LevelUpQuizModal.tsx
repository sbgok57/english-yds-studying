"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  // Sesli Dinleme (Listening Audio) State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.9);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  // // SAFETY: Stop speech audio on question change or modal close
  const stopAudio = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, []);

  useEffect(() => {
    stopAudio();
    return () => stopAudio();
  }, [currentIndex, isOpen, stopAudio]);

  if (!isOpen) return null;

  const handleSelectOption = (optionIndex: number) => {
    if (isFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    stopAudio();
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    stopAudio();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePlayAudio = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Tarayıcınız ses sentezini (Web Speech API) desteklemiyor.");
      return;
    }

    if (isPlayingAudio) {
      stopAudio();
      return;
    }

    const textToSpeak = currentQ?.audioText || currentQ?.stem || "";
    if (!textToSpeak) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-US";
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  const finishQuiz = () => {
    stopAudio();
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
    stopAudio();
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

  // Skill Badge Config
  const getSkillBadge = (skill?: string) => {
    switch (skill) {
      case "reading":
        return {
          icon: "🔬",
          label: "Paragraf Okuma (Reading)",
          bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        };
      case "listening":
        return {
          icon: "🎧",
          label: "Dinleme & Anlama (Listening)",
          bg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
        };
      case "speaking":
        return {
          icon: "🎙️",
          label: "Konuşma & İletişim (Speaking)",
          bg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        };
      default:
        return {
          icon: "📖",
          label: "Dilbilgisi & Kelime (Grammar)",
          bg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        };
    }
  };

  const skillBadge = getSkillBadge(currentQ?.skill);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-8 shadow-2xl text-white my-auto max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{def?.badgeEmoji || "🎯"}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-cyan-300">
                  {level} Çok Becerili Seviye Bitirme Sınavı
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  4 Beceri
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {def?.title || `${level} İngilizce Yeterlilik`} (Baraj: %{def?.requirements.examPassingScore || 70})
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {!isFinished ? (
          <div className="mt-5 space-y-5">
            {/* Progress Bar & Skill Indicator */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200">Soru {currentIndex + 1} / {totalQuestions}</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border text-[11px] font-semibold ${skillBadge.bg}`}>
                    <span>{skillBadge.icon}</span>
                    <span>{skillBadge.label}</span>
                  </span>
                </div>
                <span className="font-mono text-cyan-400">İlerleme: %{Math.round(((currentIndex + 1) / totalQuestions) * 100)}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* 1. Okuma Parçası Kartı (Reading Passage) */}
            {currentQ?.skill === "reading" && currentQ.readingPassage && (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/35 text-emerald-100 shadow-inner">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <span>📖</span>
                  <span>Akademik Okuma Metni (Reading Passage)</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-serif whitespace-pre-line">
                  {currentQ.readingPassage}
                </p>
              </div>
            )}

            {/* 2. Dinleme Oynatıcı Kartı (Listening Audio) */}
            {currentQ?.skill === "listening" && currentQ.audioText && (
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-500/40 text-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-purple-950/40">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-all ${
                      isPlayingAudio
                        ? "bg-purple-600 text-white animate-pulse shadow-lg shadow-purple-500/50 scale-105"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    }`}
                  >
                    🎧
                  </div>
                  <div>
                    <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span>Sesli Dinleme Kaydı (Listening Audio)</span>
                      {isPlayingAudio && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      )}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {isPlayingAudio
                        ? "🔊 Ses kaydı konuşuluyor... Dikkatle dinleyin."
                        : "Soruyu cevaplamak için butona basarak ses kaydını dinleyin."}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={handlePlayAudio}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer ${
                      isPlayingAudio
                        ? "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30"
                    }`}
                  >
                    {isPlayingAudio ? "⏹️ Durdur" : "🔊 Metni Dinle"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpeechRate((prev) => (prev === 0.9 ? 0.75 : 0.9))}
                    className="px-2.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-colors"
                    title="Konuşma Hızı"
                  >
                    {speechRate === 0.75 ? "0.75x (Yavaş)" : "0.9x (Normal)"}
                  </button>
                </div>
              </div>
            )}

            {/* 3. Konuşma Senaryo Kartı (Speaking Scenario) */}
            {currentQ?.skill === "speaking" && currentQ.speakingPrompt && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/25 border border-amber-500/35 text-amber-100 shadow-inner">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span>🎙️</span>
                  <span>İletişim & Konuşma Durumu (Situational Scenario)</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-200/90 font-medium">
                  {currentQ.speakingPrompt}
                </p>
              </div>
            )}

            {/* Soru Kökü (Question Stem) */}
            <div className="p-4 bg-slate-800/70 rounded-2xl border border-slate-700/70">
              <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                {currentQ?.stem}
              </p>
            </div>

            {/* Şıklar (Options) */}
            <div className="space-y-2.5">
              {currentQ?.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentIndex] === oIdx;
                const letter = ["A", "B", "C", "D"][oIdx];
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm sm:text-base transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-md ring-1 ring-cyan-400/50"
                        : "bg-slate-800/40 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? "bg-cyan-400 text-slate-950 font-black shadow-sm"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                ← Önceki Soru
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentIndex] === undefined}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-cyan-600/25 transition-all cursor-pointer"
              >
                {currentIndex === totalQuestions - 1 ? "Sınavı Tamamla 🏁" : "Sonraki Soru →"}
              </button>
            </div>
          </div>
        ) : (
          /* Sonuç & Başarı Ekranı */
          <div className="mt-6 text-center space-y-6">
            <div className="inline-block p-4 rounded-3xl bg-slate-800/80 border border-slate-700">
              <span className="text-6xl">{isPassed ? "🏆" : "📚"}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {isPassed ? "Tebrikler! Sınavı Üstün Başarıyla Geçtin!" : "Biraz Daha Pratik Gerekli"}
              </h3>
              <p className="text-sm text-slate-300">
                {isPassed
                  ? `${level} seviye yeterlilik kriterlerini (Gramer, Okuma, Dinleme, Konuşma) başarıyla tamamladın ve sertifikan tanzim edildi!`
                  : `Baraj puanı %${def?.requirements.examPassingScore || 70}. Konuları tekrar gözden geçirip istediğin zaman yeniden deneyebilirsin.`}
              </p>
            </div>

            {/* Skor Kartı */}
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

            {/* Soru Analizi & Çözümler */}
            <div className="text-left bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 max-h-56 overflow-y-auto space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Çok Becerili Soru Analizi & Çözüm İzahları
              </div>
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.answer;
                const skillInfo = getSkillBadge(q.skill);
                return (
                  <div key={idx} className="text-xs border-b border-slate-700/40 pb-2.5">
                    <div className="flex items-center justify-between gap-2 font-medium flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span>{isCorrect ? "✅" : "❌"} Soru {idx + 1}:</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${skillInfo.bg}`}>
                          {skillInfo.icon} {skillInfo.label.split(" ")[0]}
                        </span>
                      </div>
                      <span className={isCorrect ? "text-emerald-300" : "text-rose-300"}>
                        {isCorrect
                          ? "Doğru"
                          : `Seçimin: ${["A","B","C","D"][userAns ?? 0]} | Doğru: ${["A","B","C","D"][q.answer]}`}
                      </span>
                    </div>
                    <div className="text-slate-300 mt-1 leading-relaxed">{q.explanation}</div>
                  </div>
                );
              })}
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {isPassed && earnedCert ? (
                <button
                  onClick={() => {
                    stopAudio();
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:scale-105 active:scale-95 text-slate-950 font-black rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>📜</span> Resmi Sertifikamı Görüntüle & PDF İndir
                </button>
              ) : (
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  🔄 Sınavı Yeniden Başlat
                </button>
              )}
              <button
                onClick={() => {
                  stopAudio();
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors text-sm cursor-pointer"
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
