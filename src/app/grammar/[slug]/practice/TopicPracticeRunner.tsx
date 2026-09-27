"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { GrammarTopic } from "@/lib/data-grammar";
import {
  GRAMMAR_TOPIC_TESTS,
  type GrammarTopicQuestion,
} from "@/lib/data-grammar-topic-tests";
import {
  useUsage,
  toggleBookmark,
  recordQuestionResult,
} from "@/lib/store";
import Celebration from "@/components/Celebration";
import RichText from "@/components/RichText";
import { recordAnswer } from "@/lib/progress/tracker";

export default function TopicPracticeRunner({
  slug,
  topic,
}: {
  slug: string;
  topic?: GrammarTopic;
}) {
  const searchParams = useSearchParams();
  const { usage, update } = useUsage();

  const initialStar = searchParams.get("star") === "1";
  const initialWrong = searchParams.get("wrong") === "1";

  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [starOnly, setStarOnly] = useState<boolean>(initialStar);
  const [wrongOnly, setWrongOnly] = useState<boolean>(initialWrong);
  const [savedOnly, setSavedOnly] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(100);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [celebrate, setCelebrate] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Bu konunun 100 sorusu
  const topicQuestions = useMemo(() => {
    return GRAMMAR_TOPIC_TESTS[slug] || [];
  }, [slug]);

  // Filtrelenmis sorular
  const filteredQuestions = useMemo(() => {
    let pool = topicQuestions;

    if (selectedLevel !== "all") {
      pool = pool.filter((q) => q.level === selectedLevel);
    }
    if (starOnly) {
      pool = pool.filter((q) => q.isImportant);
    }
    if (wrongOnly) {
      const wrongKeys = Object.keys(usage.wrongQuestions || {});
      pool = pool.filter((q) => wrongKeys.includes(q.id));
    }
    if (savedOnly) {
      const savedList = usage.bookmarks || [];
      pool = pool.filter((q) => savedList.includes(q.id));
    }

    if (questionCount > 0 && pool.length > questionCount) {
      return pool.slice(0, questionCount);
    }
    return pool;
  }, [topicQuestions, selectedLevel, starOnly, wrongOnly, savedOnly, questionCount, usage.wrongQuestions, usage.bookmarks]);

  const restartTest = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsFinished(false);
  };

  const currentQuestion: GrammarTopicQuestion | undefined = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;

  const handleSelectAnswer = (choiceIdx: number) => {
    if (!currentQuestion) return;
    if (userAnswers[currentQuestion.id] !== undefined) return;

    const isCorrect = choiceIdx === currentQuestion.answer;
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: choiceIdx }));

    recordQuestionResult(
      update,
      currentQuestion.id,
      isCorrect,
      choiceIdx,
      currentQuestion.answer,
      { topic: currentQuestion.topicSlug }
    );

    // 🧩 Modül 5: Kişisel İlerleme Takibi (quiz_answers upsert + RPC trackEvent)
    recordAnswer({
      topic: currentQuestion.topicSlug || slug,
      questionId: currentQuestion.id,
      chosen: String(choiceIdx),
      correctAnswer: String(currentQuestion.answer),
    });

    if (isCorrect) {
      setCelebrate(true);
    }
  };

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let empty = 0;

    filteredQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans === undefined) empty++;
      else if (ans === q.answer) correct++;
      else wrong++;
    });

    const net = correct - wrong * 0.25;
    const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    return { correct, wrong, empty, net: Math.max(0, Number(net.toFixed(2))), accuracy };
  }, [filteredQuestions, userAnswers]);

  const handleRetryMistakes = () => {
    const wrongIds = filteredQuestions
      .filter((q) => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.answer)
      .map((q) => q.id);

    if (wrongIds.length === 0) return;

    setUserAnswers((prev) => {
      const copy = { ...prev };
      wrongIds.forEach((id) => delete copy[id]);
      return copy;
    });

    const firstWrongIdx = filteredQuestions.findIndex((q) => wrongIds.includes(q.id));
    if (firstWrongIdx !== -1) setCurrentIndex(firstWrongIdx);
    setIsFinished(false);
  };

  const title = topic ? topic.title : slug.toUpperCase();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message="Dogru bildin kral! 🎆"
        sub="Gramer kurali kafana piril piril oturdu! 👑"
      />

      {/* Ust Bar */}
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Link href={`/grammar/${slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
            ← {title} Konu Anlatimi
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-sm font-bold text-cyan-300">100 Soru Konu Testi</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setInstantFeedback(!instantFeedback)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
              instantFeedback
                ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                : "border-white/10 bg-white/5 text-white/50"
            }`}
          >
            <span>{instantFeedback ? "⚡ Aninda Cozum: Acik" : "📝 Sinav Modu (Gizli)"}</span>
          </button>
        </div>
      </div>

      {/* Filtre ve Seviye Barı */}
      <div className="card-vibrant p-5 mb-6 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <h2 className="text-sm font-black uppercase tracking-wider text-white/90">
              {title} — 100 Soruluk Tam Seri
            </h2>
          </div>
          <span className="text-xs font-mono text-cyan-400 font-bold">
            Havuzda {filteredQuestions.length} Soru Aktif
          </span>
        </div>

        {/* CEFR Seviye Tablari */}
        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-white/10">
          {[
            { id: "all", label: "Tum Seviyeler (100)" },
            { id: "A1", label: "A1 (15 Soru)" },
            { id: "A2", label: "A2 (15 Soru)" },
            { id: "B1", label: "B1 (20 Soru)" },
            { id: "B2", label: "B2 (20 Soru)" },
            { id: "C1", label: "C1 (15 Soru)" },
            { id: "C2", label: "C2 (15 Soru)" },
          ].map((tab) => {
            const active = selectedLevel === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedLevel(tab.id);
                  restartTest();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Alt filtreler: Soru sayisi, onemli, yanlislar, kaydedilenler */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div>
            <label className="block text-[10px] text-white/40 mb-1 font-mono uppercase">Soru Limiti</label>
            <select
              value={questionCount}
              onChange={(e) => {
                setQuestionCount(Number(e.target.value));
                restartTest();
              }}
              className="w-full bg-slate-900 border border-white/15 rounded-xl px-2.5 py-2 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
            >
              <option value={10}>10 Soru (Mini)</option>
              <option value={20}>20 Soru (Orta)</option>
              <option value={50}>50 Soru (Yarim Seri)</option>
              <option value={100}>Tum 100 Soru</option>
            </select>
          </div>

          <div className="col-span-3 flex items-center gap-1.5 pt-4 flex-wrap">
            <button
              onClick={() => {
                setStarOnly(!starOnly);
                restartTest();
              }}
              className={`flex-1 min-w-[100px] py-2 px-2 rounded-xl font-bold transition-all text-center ${
                starOnly
                  ? "bg-amber-400 text-slate-900 shadow-md shadow-amber-400/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              ⭐ Onemli Kaliplar
            </button>
            <button
              onClick={() => {
                setWrongOnly(!wrongOnly);
                restartTest();
              }}
              className={`flex-1 min-w-[100px] py-2 px-2 rounded-xl font-bold transition-all text-center ${
                wrongOnly
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              ❌ Onceki Yanlislarim
            </button>
            <button
              onClick={() => {
                setSavedOnly(!savedOnly);
                restartTest();
              }}
              className={`flex-1 min-w-[100px] py-2 px-2 rounded-xl font-bold transition-all text-center ${
                savedOnly
                  ? "bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              📌 Kayitli Sorularim
            </button>
          </div>
        </div>
      </div>

      {totalQuestions === 0 ? (
        <div className="card-vibrant p-12 text-center space-y-4">
          <div className="text-4xl">🔍</div>
          <h3 className="text-xl font-black text-white">Secili kriterlere uygun soru bulunamadi</h3>
          <p className="text-xs text-white/60">
            Filtreleri sifirlayarak tum 100 soruya erisebilirsiniz.
          </p>
          <button
            onClick={() => {
              setSelectedLevel("all");
              setStarOnly(false);
              setWrongOnly(false);
              setSavedOnly(false);
              restartTest();
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-900 font-bold text-xs hover:bg-cyan-400 transition-all"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : isFinished ? (
        /* Test Sonuc Ekrani */
        <div className="card-vibrant p-8 sm:p-10 space-y-8 anim-pop">
          <div className="text-center space-y-2">
            <div className="text-5xl">🏆</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{title} Konu Testi Bitti!</h2>
            <p className="text-xs text-white/60">Tebrikler kral, 100 soruluk ozel setten sonuclarin:</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <div className="text-2xl font-black text-emerald-400">{stats.correct}</div>
              <div className="text-[11px] font-mono uppercase text-emerald-200/60 mt-1">Dogru</div>
            </div>
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
              <div className="text-2xl font-black text-rose-400">{stats.wrong}</div>
              <div className="text-[11px] font-mono uppercase text-rose-200/60 mt-1">Yanlis</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl font-black text-white/70">{stats.empty}</div>
              <div className="text-[11px] font-mono uppercase text-white/40 mt-1">Bos</div>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
              <div className="text-2xl font-black text-cyan-300">%{stats.accuracy}</div>
              <div className="text-[11px] font-mono uppercase text-cyan-200/60 mt-1">Basari</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs text-white/60">YDS Net Skoru</p>
              <p className="text-xl font-mono font-black text-white">{stats.net} Net</p>
            </div>
            <div className="flex items-center gap-3">
              {stats.wrong > 0 && (
                <button
                  onClick={handleRetryMistakes}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>🔄</span> Yanlislari Tekrar Coz ({stats.wrong})
                </button>
              )}
              <button
                onClick={restartTest}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-xs transition-all"
              >
                Testi Basa Sar
              </button>
              <Link
                href="/grammar/mixed-tests"
                className="px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-purple-200 font-bold text-xs transition-all"
              >
                500 Karisik Teste Gec →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Soru ve Optik Form */
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {currentQuestion && (
              <div className="card-vibrant p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold">
                      Soru {currentIndex + 1} / {totalQuestions}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-white/5 text-white/60 border border-white/10 text-xs font-mono">
                      {currentQuestion.level}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-white/5 text-white/60 border border-white/10 text-xs font-mono">
                      {currentQuestion.difficulty}
                    </span>
                    {currentQuestion.isImportant && (
                      <span className="px-2 py-0.5 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
                        ⭐ Onemli
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleBookmark(update, currentQuestion.id)}
                      className={`text-xs px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${
                        usage.bookmarks?.includes(currentQuestion.id)
                          ? "border-amber-400/40 bg-amber-400/20 text-amber-300"
                          : "border-white/10 bg-white/5 text-white/50 hover:text-white"
                      }`}
                    >
                      <span>{usage.bookmarks?.includes(currentQuestion.id) ? "📌 Kaydedildi" : "☆ Kaydet"}</span>
                    </button>
                  </div>
                </div>

                {/* Soru Koku */}
                <p className="text-sm sm:text-base font-semibold text-white/95 whitespace-pre-line leading-relaxed">
                  {currentQuestion.stem}
                </p>

                {/* 5 Secenek */}
                <div className="space-y-2.5 pt-2">
                  {currentQuestion.options.map((opt, oIdx) => {
                    const hasAnswered = userAnswers[currentQuestion.id] !== undefined;
                    const isUserChoice = userAnswers[currentQuestion.id] === oIdx;
                    const isAnswer = oIdx === currentQuestion.answer;

                    let btnCls = "border-white/10 bg-white/[0.03] hover:border-white/30 text-white/90";

                    if (hasAnswered && instantFeedback) {
                      if (isAnswer) {
                        btnCls = "border-emerald-400/80 bg-emerald-500/20 text-emerald-200 font-bold shadow-md shadow-emerald-500/10";
                      } else if (isUserChoice) {
                        btnCls = "border-rose-400/80 bg-rose-500/20 text-rose-200 anim-shake";
                      } else {
                        btnCls = "border-white/5 bg-white/[0.01] opacity-40 text-white/40";
                      }
                    } else if (hasAnswered && !instantFeedback) {
                      if (isUserChoice) {
                        btnCls = "border-cyan-400/80 bg-cyan-500/20 text-cyan-200 font-bold";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={hasAnswered}
                        onClick={() => handleSelectAnswer(oIdx)}
                        className={`w-full text-left rounded-xl border px-4 py-3 text-xs sm:text-sm transition-all flex items-start gap-3 ${btnCls}`}
                      >
                        <span className="font-mono font-bold text-white/50 shrink-0">
                          {String.fromCharCode(65 + oIdx)})
                        </span>
                        <span className="leading-relaxed flex-1 font-mono">{opt}</span>
                        {hasAnswered && instantFeedback && isAnswer && <span className="shrink-0">✅</span>}
                        {hasAnswered && instantFeedback && isUserChoice && !isAnswer && <span className="shrink-0">❌</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Cozum Aciklamasi */}
                {userAnswers[currentQuestion.id] !== undefined && instantFeedback && (
                  <div className="mt-6 p-5 rounded-2xl border border-cyan-400/30 bg-slate-900/90 space-y-4 anim-pop">
                    <div className="flex items-center gap-2 text-sm font-black text-cyan-300">
                      <span>
                        {userAnswers[currentQuestion.id] === currentQuestion.answer
                          ? "🎉 Tebrikler, Dogru Cevap:"
                          : "💡 Dogru Cevap:"}
                      </span>
                      <span className="font-mono">{String.fromCharCode(65 + currentQuestion.answer)}</span>
                    </div>

                    <p className="text-xs text-white/80 leading-relaxed">
                      <strong>Aciklama:</strong> {currentQuestion.explanation}
                    </p>

                    {/* Sik Sik Celdirici Analizleri */}
                    {currentQuestion.distractorAnalysis && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <p className="text-xs font-mono uppercase tracking-wider text-amber-200 font-bold">
                          🔍 Sik Sik Celdirici Analizi:
                        </p>
                        <div className="grid gap-1.5">
                          {Object.entries(currentQuestion.distractorAnalysis).map(([optLetter, reason]) => {
                            const isCorrectLetter = optLetter === String.fromCharCode(65 + currentQuestion.answer);
                            return (
                              <div
                                key={optLetter}
                                className={`text-xs p-2.5 rounded-lg leading-relaxed flex items-start gap-2 ${
                                  isCorrectLetter
                                    ? "bg-emerald-500/15 border border-emerald-400/30 text-emerald-200"
                                    : "bg-black/30 border border-white/5 text-white/70"
                                }`}
                              >
                                <span className="font-mono font-black shrink-0">{optLetter}:</span>
                                <span>{reason}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="p-3 rounded-xl bg-black/40 border border-cyan-400/20 text-xs text-cyan-200 flex items-start gap-2">
                      <span className="text-base shrink-0">🎯</span>
                      <div>
                        <strong>Gramer Taktigi:</strong> {currentQuestion.tactic}
                        {currentQuestion.memoryCode && (
                          <div className="mt-1 text-amber-300">🎵 {currentQuestion.memoryCode}</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Soru Gecis Butonlari */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-xs font-bold text-white transition-all"
                  >
                    ← Onceki Soru
                  </button>

                  <div className="text-xs font-mono text-white/40">
                    {currentIndex + 1} / {totalQuestions}
                  </div>

                  {currentIndex < totalQuestions - 1 ? (
                    <button
                      onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                      className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-xs transition-all"
                    >
                      Sonraki Soru →
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsFinished(true)}
                      className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      Testi Bitir 🏁
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sag: Optik Form */}
          <div className="space-y-4">
            <div className="card-vibrant p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-wider text-white/70">Optik Form</h3>
                <span className="text-xs font-mono text-cyan-400">
                  {Object.keys(userAnswers).length} / {totalQuestions}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-1.5 max-h-[380px] overflow-y-auto p-1 custom-scrollbar">
                {filteredQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const ans = userAnswers[q.id];
                  const hasAns = ans !== undefined;
                  const isCorrect = hasAns && ans === q.answer;
                  const isBookmarked = usage.bookmarks?.includes(q.id);

                  let bgCls = "bg-white/5 text-white/60 hover:bg-white/10 border-white/10";

                  if (hasAns) {
                    if (instantFeedback) {
                      bgCls = isCorrect
                        ? "bg-emerald-500 text-white border-emerald-400"
                        : "bg-rose-500 text-white border-rose-400";
                    } else {
                      bgCls = "bg-cyan-500 text-slate-900 border-cyan-400 font-bold";
                    }
                  }

                  if (isCurrent) {
                    bgCls += " ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-9 rounded-lg border text-xs font-mono font-bold transition-all relative flex items-center justify-center ${bgCls}`}
                    >
                      <span>{idx + 1}</span>
                      {isBookmarked && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setIsFinished(true)}
                className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-all"
              >
                Testi Tamamla & Sonuclari Gor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
