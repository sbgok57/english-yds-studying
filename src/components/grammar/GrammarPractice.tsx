import React, { useState } from 'react';
import { GrammarTopic, GrammarActivity } from '../../types/grammar';
import { speechService } from '../../services/speech';
import { StorageService } from '../../services/storage';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Volume2, 
  Award,
  ChevronLeft
} from 'lucide-react';

interface GrammarPracticeProps {
  topic: GrammarTopic;
  onFinish: () => void;
  onXpGained: (amount: number) => void;
}

export const GrammarPractice: React.FC<GrammarPracticeProps> = ({
  topic,
  onFinish,
  onXpGained
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const activities = topic.activities;
  const currentActivity: GrammarActivity = activities[currentIndex];

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null || !currentActivity) return;

    setSelectedOption(opt);
    const isCorrect = opt === currentActivity.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      speechService.speakCorrectAnswer();
      onXpGained(20);
    } else {
      speechService.speakIncorrectAnswer("Notice the sentence structure.");
      // Record in Error Notebook
      StorageService.recordError({
        itemType: 'grammar',
        title: `${topic.title} (#${currentActivity.id})`,
        userAnswer: opt,
        correctAnswer: currentActivity.correctAnswer,
        explanationEn: currentActivity.explanationEn,
        explanationTr: currentActivity.explanationTr,
        category: topic.title
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowSummary(true);
      speechService.speak(`Practice completed! You scored ${score + (selectedOption === currentActivity.correctAnswer ? 1 : 0)} out of ${activities.length}.`);
    }
  };

  if (showSummary) {
    const finalScore = score;
    const percent = Math.round((finalScore / activities.length) * 100);

    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Konu Testi Tamamlandı!</h2>
          <p className="text-sm text-slate-400 mb-6">{topic.title}</p>

          <div className="text-5xl font-black text-emerald-400 mb-2">%{percent}</div>
          <div className="text-sm text-slate-300 mb-8 font-medium">
            {finalScore} / {activities.length} Doğru Cevap
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setScore(0);
                setShowSummary(false);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Çöz</span>
            </button>
            <button
              onClick={onFinish}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              <span>Konu Listesine Dön</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 text-xs">
        <button
          onClick={onFinish}
          className="text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Konu Özetine Dön</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-slate-400">Soru {currentIndex + 1} / {activities.length}</span>
          <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-bold border border-slate-700">
            {score} Doğru
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentActivity.type.replace(/-/g, ' ')}</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
          {currentActivity.prompt}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentActivity.options.map((opt, oi) => {
            const isSelected = selectedOption === opt;
            let optClass = 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-700';

            if (selectedOption !== null) {
              if (opt === currentActivity.correctAnswer) {
                optClass = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
              } else if (isSelected) {
                optClass = 'bg-rose-600/30 border-rose-500 text-rose-200 ring-2 ring-rose-500/30';
              } else {
                optClass = 'bg-slate-800/20 border-slate-800 text-slate-500 opacity-50';
              }
            }

            return (
              <button
                key={oi}
                disabled={selectedOption !== null}
                onClick={() => handleSelectOption(opt)}
                className={`w-full p-4 rounded-xl border font-medium text-sm text-left transition-all flex items-center justify-between ${optClass}`}
              >
                <span>{opt}</span>
                {selectedOption !== null && (
                  <span>
                    {opt === currentActivity.correctAnswer ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation upon selection */}
        {selectedOption !== null && (
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 mb-6 animate-fade-in">
            <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1">
              AÇIKLAMA VE YDS ANALİZİ
            </div>
            <p className="text-sm text-slate-200 mb-2 font-medium">
              {currentActivity.explanationEn}
            </p>
            <p className="text-xs text-slate-400">
              {currentActivity.explanationTr}
            </p>
          </div>
        )}

        {/* Advance Button */}
        {selectedOption !== null && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all transform active:scale-95"
            >
              <span>{currentIndex < activities.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
