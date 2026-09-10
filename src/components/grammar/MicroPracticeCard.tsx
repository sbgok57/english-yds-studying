import React, { useState } from 'react';
import { MicroPractice } from '../../types';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';
import { speechService } from '../../services/speech';

interface MicroPracticeCardProps {
  practice: MicroPractice;
}

export const MicroPracticeCard: React.FC<MicroPracticeCardProps> = ({ practice }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = selectedOption === practice.correctAnswer;

  const handleSelect = (opt: string) => {
    if (isSubmitted && isCorrect) return;
    setSelectedOption(opt);
    setIsSubmitted(true);

    if (opt === practice.correctAnswer) {
      speechService.speakCorrectAnswer('Well done!');
    } else {
      speechService.speakIncorrectAnswer('Try again!');
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="my-5 p-5 rounded-xl border border-brand-200 dark:border-brand-900 bg-brand-50/40 dark:bg-brand-950/20 shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-900/60 text-brand-800 dark:text-brand-300">
          <HelpCircle className="w-3.5 h-3.5" />
          Mini Alıştırma (Micro-Practice)
        </span>
        {isSubmitted && !isCorrect && (
          <button
            onClick={handleRetry}
            className="text-xs flex items-center gap-1 text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Tekrar Dene
          </button>
        )}
      </div>

      <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 mb-1">
        {practice.question}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-4">
        {practice.questionTr}
      </p>

      <div className="space-y-2 mb-4">
        {practice.options.map((opt, idx) => {
          let btnClass =
            'w-full text-left p-3 rounded-lg border text-sm transition-all duration-200 flex items-center justify-between ';

          if (!isSubmitted) {
            btnClass +=
              'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-400 hover:bg-brand-50/50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';
          } else {
            if (opt === practice.correctAnswer) {
              btnClass +=
                'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
            } else if (opt === selectedOption) {
              btnClass +=
                'bg-red-50 dark:bg-red-950/50 border-red-400 text-red-900 dark:text-red-200';
            } else {
              btnClass +=
                'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(opt)}
              disabled={isSubmitted && isCorrect}
              className={btnClass}
            >
              <span>{opt}</span>
              {isSubmitted && opt === practice.correctAnswer && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
              )}
              {isSubmitted && opt === selectedOption && !isCorrect && (
                <XCircle className="w-4 h-4 text-red-500 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {isSubmitted && (
        <div
          className={`p-3.5 rounded-lg text-xs animate-fadeIn ${
            isCorrect
              ? 'bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
              : 'bg-amber-100/70 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200'
          }`}
        >
          <p className="font-semibold mb-1">
            {isCorrect ? '🎉 Tebrikler! (Correct!)' : '💡 İpucu & Çözüm (Supportive Clue):'}
          </p>
          <p className="mb-0.5">{practice.explanationEn}</p>
          <p className="italic opacity-90">{practice.explanationTr}</p>
        </div>
      )}
    </div>
  );
};
