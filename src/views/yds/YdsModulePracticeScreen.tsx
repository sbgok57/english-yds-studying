import React, { useState } from 'react';
import { YdsQuestionCategory, YdsOptionLabel } from '../../types/yds';
import { getQuestionsForModule, getModuleConfig } from '../../services/ydsPracticeEngine';
import { speechService } from '../../services/speech';
import { dbService } from '../../services/db';
import { ErrorRecord } from '../../types/progress';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Volume2,
  BookmarkPlus,
  Check,
  Award,
  Zap,
  Sparkles,
  Lightbulb,
  ShieldAlert,
  Compass,
} from 'lucide-react';

interface YdsModulePracticeScreenProps {
  category: YdsQuestionCategory;
  onBack: () => void;
  onRefreshData?: () => void;
}

export const YdsModulePracticeScreen: React.FC<YdsModulePracticeScreenProps> = ({
  category,
  onBack,
  onRefreshData,
}) => {
  const config = getModuleConfig(category);
  const questions = getQuestionsForModule(category);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<YdsOptionLabel | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showFastTactic, setShowFastTactic] = useState(false);
  const [addedToErrors, setAddedToErrors] = useState<Record<string, boolean>>({});
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const currentQ = questions[currentIdx];

  const handleSelectOption = (label: YdsOptionLabel) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(label);
    setIsAnswerSubmitted(true);

    const isCorrect = label === currentQ.correctAnswer;
    if (isCorrect) {
      speechService.speakCorrectAnswer('Excellent! Correct analysis.');
      setStats((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      speechService.speakIncorrectAnswer('Take note of the distractor trap.');
      setStats((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowFastTactic(false);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowFastTactic(false);
    }
  };

  const handleAddToErrors = async () => {
    if (!currentQ || addedToErrors[currentQ.id]) return;

    const errorRecord: ErrorRecord = {
      id: `err-yds-${currentQ.id}-${Date.now()}`,
      itemId: currentQ.id,
      itemType: 'yds',
      title: `${config.nameTr}: Soru ${currentIdx + 1}`,
      targetWordOrRule: currentQ.relatedGrammarTopicId || currentQ.category,
      userAnswer: selectedOption || 'Boş',
      correctAnswer: currentQ.correctAnswer,
      explanation: currentQ.explanationTr || currentQ.whyCorrect,
      category: 'reading_comprehension',
      failedAt: new Date().toISOString(),
      reviewedCount: 0,
      mastered: false,
      lastReviewedAt: null,
    };

    await dbService.saveErrorRecord(errorRecord);
    setAddedToErrors((prev) => ({ ...prev, [currentQ.id]: true }));
    if (onRefreshData) onRefreshData();
  };

  if (!currentQ) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-500">Bu modül için soru bulunamadı.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  const isUserCorrect = isAnswerSubmitted && selectedOption === currentQ.correctAnswer;
  const isUserIncorrect = isAnswerSubmitted && selectedOption !== currentQ.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Modüllere Dön
        </button>

        <div className="text-center">
          <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
            {config.nameTr}
          </h2>
          <p className="text-xs text-slate-400">
            Soru {currentIdx + 1} / {questions.length} • {config.nameEn}
          </p>
        </div>

        {/* Live Score */}
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
            ✓ {stats.correct}
          </span>
          <span className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-1 rounded-lg border border-rose-200 dark:border-rose-800">
            ✗ {stats.incorrect}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        {/* Top Action Bar: Fast Tactic Toggle */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Soru #{currentIdx + 1}
          </span>

          <button
            onClick={() => setShowFastTactic(!showFastTactic)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              showFastTactic
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            {showFastTactic ? 'Taktik Bilgisini Kapat' : 'Hızlı Taktik (Püf Noktası)'}
          </button>
        </div>

        {/* Fast Tactic Drawer */}
        {showFastTactic && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider text-[11px]">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Bu Soru Türü İçin Hızlı Sınav İpucu:
            </div>
            <p className="leading-relaxed font-medium">
              {currentQ.strategyTip || 'Cümledeki zaman uyumunu, kutupluluk dengesini (+/-) ve bağlaç sentaksını kontrol edin.'}
            </p>
          </div>
        )}

        {/* Dialogue header if dialogue question */}
        {currentQ.dialogueSpeakers && currentQ.dialogueSpeakers.length > 0 && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            {currentQ.dialogueSpeakers.map((d, i) => (
              <div key={i} className="text-xs leading-relaxed">
                <strong className="text-brand-600 dark:text-brand-400 mr-2">
                  {d.speaker}:
                </strong>
                <span className="text-slate-800 dark:text-slate-200">{d.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Passage if reading / cloze */}
        {currentQ.passage && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
            {currentQ.passage}
          </div>
        )}

        {/* Question Stem */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
            {currentQ.stemEn}
          </h3>
          <button
            onClick={() => speechService.speak(currentQ.stemEn)}
            title="Soruyu Dinle"
            className="p-2 rounded-xl text-slate-400 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Options List (A - E) */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.label;
            const isCorrectAnswer = opt.label === currentQ.correctAnswer;

            let buttonClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-800 dark:text-slate-200';
            if (isAnswerSubmitted) {
              if (isCorrectAnswer) {
                buttonClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
              } else if (isSelected && !isCorrectAnswer) {
                buttonClass = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
              } else {
                buttonClass = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-500';
              }
            } else if (isSelected) {
              buttonClass = 'bg-brand-50 dark:bg-brand-950 border-brand-500 text-brand-900 dark:text-brand-100 font-bold';
            }

            return (
              <button
                key={opt.label}
                onClick={() => handleSelectOption(opt.label)}
                disabled={isAnswerSubmitted}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs leading-relaxed ${buttonClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold shrink-0 text-xs ${
                      isSelected || (isAnswerSubmitted && isCorrectAnswer)
                        ? 'bg-brand-600 text-white'
                        : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerSubmitted && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* MICRO-CELEBRATION ON CORRECT ANSWER */}
        {isUserCorrect && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-400/40 text-emerald-950 dark:text-emerald-100 flex items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-base shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-emerald-800 dark:text-emerald-300">
                  Tebrikler! Doğru Analiz
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Soruyu akademik standartta doğru çözdünüz.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs shadow-sm">
              +15 XP
            </span>
          </div>
        )}

        {/* DEEP PEDAGOGICAL BREAKDOWN ON INCORRECT ANSWER */}
        {isUserIncorrect && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-rose-500/10 border border-rose-300 dark:border-rose-800/60 text-slate-900 dark:text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-black text-base shrink-0 shadow-md">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-rose-800 dark:text-rose-300">
                  Bu Soru Çeldirici İçeriyordu!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Hata yapmak öğrenmenin en hızlı yoludur. Çözüm adımlarını aşağıda inceleyin.
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToErrors}
              disabled={addedToErrors[currentQ.id]}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow ${
                addedToErrors[currentQ.id]
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-600 hover:bg-rose-700 text-white'
              }`}
            >
              {addedToErrors[currentQ.id] ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Hata Defterime Eklendi
                </>
              ) : (
                <>
                  <BookmarkPlus className="w-3.5 h-3.5" /> 1-Tıkla Hata Defterime Ekle
                </>
              )}
            </button>
          </div>
        )}

        {/* Deep Explanation Panel (Revealed on submission) */}
        {isAnswerSubmitted && (
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 animate-fadeIn">
            {/* Correct Rationale */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Doğru Cevap Neden {currentQ.correctAnswer}?
                </span>
                {!addedToErrors[currentQ.id] && (
                  <button
                    onClick={handleAddToErrors}
                    className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" /> Hata Defterine Ekle
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {currentQ.whyCorrect}
              </p>
              {currentQ.explanationTr && (
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  🇹🇷 {currentQ.explanationTr}
                </p>
              )}
            </div>

            {/* Why Selected Distractor Failed */}
            {isUserIncorrect && selectedOption && currentQ.whyDistractorsFail?.[selectedOption] && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-1 text-xs">
                <span className="font-bold text-rose-800 dark:text-rose-300 block uppercase tracking-wider text-[11px]">
                  Seçtiğiniz Şık ({selectedOption}) Neden Yanlış?
                </span>
                <p className="text-rose-950 dark:text-rose-200">
                  {currentQ.whyDistractorsFail[selectedOption]}
                </p>
              </div>
            )}

            {/* Why Distractors Fail Breakdown */}
            {currentQ.whyDistractorsFail && (
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-slate-700 dark:text-slate-300 text-xs block">
                  Tüm Seçeneklerin Çeldirici Analizi:
                </span>
                <div className="space-y-1.5 text-[11px]">
                  {Object.entries(currentQ.whyDistractorsFail).map(([label, reason]) => {
                    if (label === currentQ.correctAnswer) return null;
                    return (
                      <div key={label} className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-2">
                        <strong className="text-rose-600 dark:text-rose-400 shrink-0">
                          {label}:
                        </strong>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {reason}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step-by-Step Heuristic & Strategy Tip */}
            {currentQ.strategyTip && (
              <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="block font-black uppercase tracking-wider text-[11px]">
                    Benzer Sorularda Uygulanacak Çözüm Stratejisi:
                  </strong>
                  <p className="leading-relaxed">{currentQ.strategyTip}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation Controls */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Önceki
          </button>

          {currentIdx < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white transition-colors shadow-sm"
            >
              Sonraki Soru <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
            >
              <Award className="w-4 h-4" /> Modülü Tamamla
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
