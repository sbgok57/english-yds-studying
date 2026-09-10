import React, { useState } from 'react';
import { GrammarTopic } from '../../types/grammar';
import { speechService } from '../../services/speech';
import { 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  GraduationCap, 
  HelpCircle, 
  Clock,
  Play
} from 'lucide-react';

interface GrammarTopicViewProps {
  topic: GrammarTopic;
  onStartPractice: () => void;
  onBackToList: () => void;
}

export const GrammarTopicView: React.FC<GrammarTopicViewProps> = ({
  topic,
  onStartPractice,
  onBackToList
}) => {
  const [microAnswers, setMicroAnswers] = useState<Record<string, string>>({});
  const [microFeedback, setMicroFeedback] = useState<Record<string, { isCorrect: boolean; text: string }>>({});

  const handleMicroSelect = (qId: string, selectedOpt: string, correctOpt: string, fbEn: string, fbTr: string) => {
    setMicroAnswers(prev => ({ ...prev, [qId]: selectedOpt }));
    const isCorrect = selectedOpt === correctOpt;
    if (isCorrect) {
      speechService.speakCorrectAnswer();
    } else {
      speechService.speakIncorrectAnswer();
    }
    setMicroFeedback(prev => ({
      ...prev,
      [qId]: { isCorrect, text: `${fbEn} (${fbTr})` }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Top Header & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToList}
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
        >
          ← Tüm Gramer Konuları
        </button>

        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          {topic.category} KATEGORİSİ • KONU #{topic.order}
        </span>
      </div>

      {/* Main Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {topic.title}
          </h1>
          <h2 className="text-lg font-semibold text-emerald-400 mb-4">
            {topic.titleTr}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {topic.intro.overview} ({topic.intro.overviewTr})
          </p>

          <button
            onClick={onStartPractice}
            className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all transform active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Pratik Yapmaya Başla ({topic.activities.length} Aktivite)</span>
          </button>
        </div>
      </div>

      {/* Section 1 & 2: What is it & Why use it */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>NEDİR? (WHAT IS IT?)</span>
          </div>
          <p className="text-sm text-slate-200 font-medium mb-1">{topic.intro.whatIsIt}</p>
          <p className="text-xs text-slate-400">{topic.intro.whatIsItTr}</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4" />
            <span>NEDEN KULLANIRIZ? (WHY USE IT?)</span>
          </div>
          <p className="text-sm text-slate-200 font-medium mb-1">{topic.intro.whyUseIt}</p>
          <p className="text-xs text-slate-400">{topic.intro.whyUseItTr}</p>
        </div>
      </div>

      {/* Section 3: Interactive Sentence Structure Blocks */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4">
          <Layers className="w-4 h-4" />
          <span>CÜMLE MİMARİSİ VE YAPI TAŞLARI</span>
        </div>

        {/* Positive Formula & Blocks */}
        <div className="mb-5">
          <div className="text-xs text-slate-400 font-semibold mb-2 uppercase">1. Olumlu Cümle Dizilimi (Positive):</div>
          <div className="font-mono text-xs text-emerald-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 mb-3">
            {topic.structure.formulaPositive}
          </div>
          <div className="flex flex-wrap gap-2">
            {topic.structure.sentenceBlocksPositive.map((b, i) => (
              <div key={i} className={`p-3 rounded-xl border text-center ${b.colorClass}`}>
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">{b.role}</div>
                <div className="text-sm font-bold">{b.text}</div>
                <div className="text-[11px] opacity-80 mt-0.5">{b.textTr}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Negative & Question Formulas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
          <div>
            <div className="text-xs text-slate-400 font-semibold mb-1 uppercase">2. Olumsuz Form (Negative):</div>
            <div className="font-mono text-xs text-rose-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              {topic.structure.formulaNegative}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold mb-1 uppercase">3. Soru Formu (Question):</div>
            <div className="font-mono text-xs text-amber-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              {topic.structure.formulaQuestion}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Signal Words */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
          <Clock className="w-4 h-4" />
          <span>SİNYAL KELİMELERİ VE ZAMAN İŞARETÇİLERİ</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {topic.signalWords.words.map((w, idx) => (
            <span key={idx} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-sm font-semibold">
              {w}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          {topic.signalWords.explanationEn} ({topic.signalWords.explanationTr})
        </p>
      </div>

      {/* Section 5: Examples with Mandatory Vocabulary Support */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4">
          <BookOpen className="w-4 h-4" />
          <span>ÖRNEK CÜMLELER & KELİME DESTEĞİ (VOCABULARY SUPPORT)</span>
        </div>

        <div className="space-y-4">
          {topic.examplesWithVocab.map((ex, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="text-sm font-semibold text-slate-100 mb-1">
                "{ex.sentence}"
              </div>
              <div className="text-xs text-emerald-400/90 mb-3 font-medium">
                "{ex.sentenceTr}"
              </div>

              {/* Linked Vocabulary Chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                {ex.vocabulary.map((v, vi) => (
                  <div key={vi} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs">
                    <span className="font-bold text-white">{v.word}</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-slate-300">{v.meaningTr}</span>
                    <span className="text-[9px] uppercase px-1 rounded bg-slate-900 text-slate-400">{v.partOfSpeech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: Common Mistakes (❌ vs ✓) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-4">
          <AlertTriangle className="w-4 h-4" />
          <span>SIK YAPILAN HATALAR VE DOĞRULARI (COMMON MISTAKES)</span>
        </div>

        <div className="space-y-3">
          {topic.commonMistakes.map((m, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-1">
                <span>❌</span>
                <span className="line-through">{m.incorrect}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <span>✓</span>
                <span>{m.correct}</span>
              </div>
              <p className="text-xs text-slate-300">
                {m.explanationEn} ({m.explanationTr})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7: Memory Tricks */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
          <Lightbulb className="w-4 h-4" />
          <span>HAFIZA TEKNİĞİ & AKILDA TUTMA İPUCU</span>
        </div>
        {topic.memoryTricks.map((tr, idx) => (
          <div key={idx} className="mb-2 last:mb-0">
            <p className="text-sm text-slate-200 font-medium">{tr.trickEn}</p>
            <p className="text-xs text-slate-400">{tr.trickTr}</p>
          </div>
        ))}
      </div>

      {/* Section 8: Micro-Practice Questions */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4" />
          <span>MİKRO ALIŞTIRMA (MICRO-PRACTICE)</span>
        </div>

        <div className="space-y-4">
          {topic.microPractices.map((mp) => {
            const chosen = microAnswers[mp.id];
            const fb = microFeedback[mp.id];

            return (
              <div key={mp.id} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-3">
                  {mp.question}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {mp.options.map((opt, oi) => {
                    let optClass = 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700';
                    if (chosen) {
                      if (opt === mp.correctAnswer) {
                        optClass = 'bg-emerald-600/30 border-emerald-500 text-emerald-300';
                      } else if (chosen === opt) {
                        optClass = 'bg-rose-600/30 border-rose-500 text-rose-300';
                      }
                    }

                    return (
                      <button
                        key={oi}
                        disabled={!!chosen}
                        onClick={() => handleMicroSelect(mp.id, opt, mp.correctAnswer, mp.feedbackEn, mp.feedbackTr)}
                        className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${optClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {fb && (
                  <div className={`text-xs p-2.5 rounded-lg ${fb.isCorrect ? 'bg-emerald-950/40 text-emerald-300' : 'bg-rose-950/40 text-rose-300'}`}>
                    {fb.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 9: YDS Connection & Strategy */}
      <div className="bg-gradient-to-tr from-slate-900 to-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>YDS SINAV STRATEJİSİ & ÇELDİRİCİ TUZAKLAR</span>
        </div>
        <div className="text-sm font-bold text-white mb-1">
          {topic.ydsConnection.importance}
        </div>
        <p className="text-xs text-slate-300 mb-2">
          <span className="font-semibold text-emerald-400">Soru Tipi:</span> {topic.ydsConnection.examQuestionType}
        </p>
        <p className="text-xs text-slate-300 leading-relaxed mb-2">
          <span className="font-semibold text-indigo-300">Strateji:</span> {topic.ydsConnection.ydsStrategyTr}
        </p>
        <p className="text-xs text-slate-400 italic">
          <span className="font-semibold text-rose-400">Tipik Çeldirici Tuzak:</span> {topic.ydsConnection.typicalTrapTr}
        </p>
      </div>

      {/* Bottom Start Practice CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onStartPractice}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 inline-flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <span>Konu Testine Başla ({topic.activities.length} Soru)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
