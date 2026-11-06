"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, XCircle, Brain, Lightbulb } from "lucide-react";
import type { GrammarTopic } from "@/lib/grammar-data";
import { cn } from "@/lib/utils";
import GrammarVisuals from "./GrammarVisuals";
import { suggestGrammarStudyMethod } from "@/lib/ai";

export default function GrammarLesson({ topic }: { topic: GrammarTopic }) {
  const [activeSection, setActiveSection] = useState(0);
  const [testMode, setTestMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const section = topic.sections[activeSection] || topic.sections[0];
  const studyMethod = suggestGrammarStudyMethod({
    topicTitle: topic.title,
    rule: section?.formula || topic.simpleSummary,
    example: section?.examples[0]?.en || "",
    memoryHint: section?.memoryCode || section?.visualHint || "",
  });

  const handleSelectChoice = (questionId: number, choice: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: choice }));
    setShowExplanation((prev) => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Başlık Kartı */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "rounded-3xl p-8 md:p-10 text-white shadow-2xl bg-gradient-to-br border-2 border-white/20",
          topic.colorTheme
        )}
      >
        <span className="text-5xl drop-shadow-md">{topic.emoji}</span>
        <h1 className="text-3xl md:text-4xl font-black mt-2 tracking-tight">
          {topic.title}
        </h1>
        <p className="mt-3 text-white/95 text-base md:text-lg font-medium leading-relaxed bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/15">
          💡 {topic.simpleSummary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setTestMode(false)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all",
              !testMode
                ? "bg-white text-slate-950 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            )}
          >
            📖 Taktik & Konu Anlatımı
          </button>
          <button
            onClick={() => setTestMode(true)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
              testMode
                ? "bg-yellow-300 text-slate-950 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            )}
          >
            🎯 100 Soruluk Alıştırma Testi
          </button>
        </div>
      </motion.div>

      {/* ============= MOD 1: KONU ANLATIMI ============= */}
      {!testMode ? (
        <>
          {/* Bölüm Sekmeleri */}
          {topic.sections.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {topic.sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(i)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border",
                    i === activeSection
                      ? "bg-white text-slate-950 border-white shadow-lg scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/80 border-white/10"
                  )}
                >
                  {s.heading}
                </button>
              ))}
            </div>
          )}

          {/* Aktif Bölüm İçeriği */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="card-vibrant p-6 md:p-8 space-y-6"
            >
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                {section.heading}
              </h3>

              <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-cyan-200">Kısa kural</p>
                <p className="mt-1 text-sm leading-relaxed text-white/90">{topic.simpleSummary}</p>
              </div>

              {/* Renk Kodlu Formül Kutusu */}
              <div className="bg-slate-950 border border-emerald-500/40 text-emerald-300 font-mono text-center text-sm md:text-base rounded-2xl p-4 shadow-inner tracking-wide font-bold">
                {section.formula}
              </div>

              {section.examples[0] && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-white/55">Bir örnekle bağla</p>
                  <p className="font-bold text-white">{section.examples[0].en}</p>
                  <p className="text-sm text-white/65">{section.examples[0].tr}</p>
                </div>
              )}

              <div className="grid gap-2 sm:grid-cols-3 text-xs text-white/75">
                <p className="rounded-xl bg-white/5 p-3"><Brain className="mb-1 h-4 w-4 text-cyan-200" />Kuralı oku, sonra kapatıp kendin hatırla.</p>
                <p className="rounded-xl bg-white/5 p-3"><Lightbulb className="mb-1 h-4 w-4 text-amber-200" />Örnekte kuralın nerede olduğunu bul.</p>
                <p className="rounded-xl bg-white/5 p-3"><CheckCircle2 className="mb-1 h-4 w-4 text-emerald-200" />Mini soruyla gerçekten öğrendiğini kontrol et.</p>
              </div>

              <aside className="rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-violet-500/10 p-4" aria-label="YDS Kanka AI çalışma önerisi">
                <p className="text-sm font-black text-amber-100">YDS Kanka AI’den sana mini çalışma planı</p>
                <p className="mt-1 text-xs text-white/65">Kısa anlat, hatırla, uygula; kanka, bu üçlü kuralı kalıcılaştırır.</p>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-white/85">
                  {studyMethod.steps.map((step, index) => <li key={`${topic.slug}-${activeSection}-${index}`} className="flex gap-2"><span className="font-black text-cyan-200">{index + 1}.</span><span>{step}</span></li>)}
                </ol>
                <p className="mt-3 rounded-xl bg-black/20 p-3 text-xs text-cyan-100/90"><strong>Tekrar planı:</strong> {studyMethod.reviewPlan}</p>
              </aside>

              <details className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <summary className="cursor-pointer font-bold text-white/85">Detaylı anlatım, hafıza ipucu ve diğer örnekler</summary>
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-white/85 leading-relaxed">{section.explanation}</p>
                  <div className="rounded-xl border-l-4 border-amber-400 bg-amber-500/10 p-4 space-y-2">
                    <p className="font-extrabold text-amber-100 text-sm flex items-center gap-2"><Sparkles className="h-4 w-4" />{section.memoryCode}</p>
                    <p className="text-xs text-amber-100/75"><strong>Gözünde canlandır:</strong> {section.visualHint}</p>
                  </div>
                  {section.examples.length > 1 && <div className="space-y-2">
                    <h4 className="text-xs font-bold text-cyan-200">Diğer örnekler</h4>
                    {section.examples.slice(1).map((ex) => (
                      <div key={ex.en} className="bg-black/30 border border-white/10 rounded-xl p-3 space-y-1">
                        <p className="font-bold text-white text-sm">{ex.en}</p>
                        <p className="text-white/60 text-xs">{ex.tr}</p>
                      </div>
                    ))}
                  </div>}
                  <GrammarVisuals slug={topic.slug} />
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2"><h4 className="text-xs font-bold text-rose-200">Sınav tuzakları</h4>{topic.trapAlerts.map((trap, i) => <p key={i} className="rounded-lg bg-rose-500/10 p-3 text-xs text-rose-100/85">{trap}</p>)}</div>
                    <div className="space-y-2"><h4 className="text-xs font-bold text-emerald-200">İpucu kelimeler</h4><div className="flex flex-wrap gap-2">{topic.signalWords.map((word) => <span key={word} className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">{word}</span>)}</div></div>
                  </div>
                </div>
              </details>
            </motion.div>
          </AnimatePresence>

        </>
      ) : (
        /* ============= MOD 2: 100 SORULUK TEST ============= */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-yellow-300">
              🎯 {topic.title} — Alıştırma Soruları
            </h3>
            <span className="glass-pill text-xs font-mono">
              Hedef: 100 Soru
            </span>
          </div>

          {topic.practiceQuestions.map((q) => {
            const userChoice = selectedAnswers[q.id];
            const isAnswered = Boolean(userChoice);
            const isCorrect = userChoice === q.correct;

            return (
              <div
                key={q.id}
                className={cn(
                  "card-vibrant p-6 space-y-4",
                  isAnswered && (isCorrect ? "border-emerald-500/50" : "border-rose-500/50")
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="glass-pill text-xs font-bold text-cyan-300">
                    Soru {q.id}
                  </span>
                  {isAnswered && (
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                        isCorrect ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Doğru!
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Yanlış (Doğru Cevap: {q.correct})
                        </>
                      )}
                    </span>
                  )}
                </div>

                <p className="text-base text-white/95 font-medium leading-relaxed">
                  {q.text}
                </p>

                {/* Seçenekler */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const letter = ["A", "B", "C", "D", "E"][optIdx];
                    const isPicked = userChoice === letter;
                    const isKey = q.correct === letter;

                    return (
                      <button
                        key={letter}
                        onClick={() => handleSelectChoice(q.id, letter)}
                        className={cn(
                          "w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 text-sm",
                          isPicked && isKey && "bg-emerald-500/30 border-emerald-400 text-white font-bold",
                          isPicked && !isKey && "bg-rose-500/30 border-rose-400 text-white",
                          !isPicked && isAnswered && isKey && "border-emerald-400/80 bg-emerald-500/10 text-emerald-300",
                          !isAnswered && "bg-white/5 border-white/15 hover:border-white/30 hover:bg-white/10 text-white/80"
                        )}
                      >
                        <span
                          className={cn(
                            "w-7 h-7 rounded-full border flex items-center justify-center font-black text-xs",
                            isPicked ? "bg-white text-slate-950" : "border-white/30"
                          )}
                        >
                          {letter}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Çözüm ve Kafada Kodlama */}
                {showExplanation[q.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-4 rounded-2xl bg-black/40 border border-white/15 text-xs space-y-1.5"
                  >
                    <p className="text-yellow-200 leading-relaxed">
                      <strong>💡 Çözüm Mantığı:</strong> {q.explanation}
                    </p>
                    {q.memoryCode && (
                      <p className="text-cyan-300 font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        🧠 <strong>Kafada Kodla:</strong> {q.memoryCode}
                      </p>
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
