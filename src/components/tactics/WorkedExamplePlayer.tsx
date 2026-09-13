"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw, AlertTriangle, Sparkles, CheckCircle2 } from "lucide-react";

export interface WorkedExample {
  question: string;
  choices: string[];
  answerIndex: number;
  walkthrough: string[];   // Adım adım çözüm — her adım ekranda sırayla belirir
  trapExplained: string;   // En çok seçilen yanlış şık ve NEDEN tuzak olduğu
}

export default function WorkedExamplePlayer({ ex }: { ex: WorkedExample }) {
  const [step, setStep] = useState(0); // 0 = sadece soru, sonra adım adım

  const isCompleted = step >= ex.walkthrough.length;

  return (
    <div className="bg-slate-900/90 rounded-3xl shadow-xl p-6 border-2 border-indigo-500/30 text-white space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-extrabold text-sm text-yellow-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          📋 Örnek Çözümlü Soru & Adım Adım Taktik
        </span>
        <button
          onClick={() => setStep(0)}
          className="text-xs text-white/60 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Başa Al
        </button>
      </div>

      {/* Soru Metni */}
      <p className="bg-white/5 rounded-2xl p-4 font-semibold text-sm md:text-base leading-relaxed border border-white/10 text-white/95 whitespace-pre-wrap">
        {ex.question}
      </p>

      {/* Şıklar */}
      <div className="space-y-2">
        {ex.choices.map((c, i) => {
          const letter = String.fromCharCode(65 + i);
          const isCorrectAnswer = i === ex.answerIndex;
          const showAnswerHighlight = isCompleted && isCorrectAnswer;

          return (
            <div
              key={i}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm border-2 transition-all flex items-start gap-2.5 ${
                showAnswerHighlight
                  ? "border-emerald-400 bg-emerald-950/40 font-bold text-emerald-200 shadow-md shadow-emerald-500/20"
                  : "border-white/10 bg-white/5 text-white/80"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 ${showAnswerHighlight ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-white/60"}`}>
                {letter}
              </span>
              <span className="flex-1">{c}</span>
              {showAnswerHighlight && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              )}
            </div>
          );
        })}
      </div>

      {/* Adımlar Sırayla Belirir */}
      <div className="space-y-2 pt-2">
        <AnimatePresence>
          {ex.walkthrough.slice(0, step).map((w, i) => (
            <motion.div
              key={i}
              initial={{ x: -16, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-amber-500/20 to-orange-500/10 border-l-4 border-amber-400 rounded-r-2xl px-4 py-3 text-xs md:text-sm font-semibold text-amber-200"
            >
              {w}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* İlerleme Butonu ve Tuzak Açıklaması */}
      {step < ex.walkthrough.length ? (
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setStep((s) => s + 1)}
          className="w-full py-3.5 rounded-2xl font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all flex items-center justify-center gap-2 text-sm"
        >
          {step === 0 ? "🎬 Çözümü Adım Adım İzle" : `➡️ Sonraki Adım (${step}/${ex.walkthrough.length})`}
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-rose-950/30 border-2 border-rose-500/40 rounded-2xl p-4 text-xs md:text-sm text-rose-200 space-y-1.5"
        >
          <p className="font-bold flex items-center gap-1.5 text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            ⚠️ Neden Bu Şık Tuzak? (Çeldirici Analizi)
          </p>
          <p className="leading-relaxed text-white/90">{ex.trapExplained}</p>
        </motion.div>
      )}
    </div>
  );
}
