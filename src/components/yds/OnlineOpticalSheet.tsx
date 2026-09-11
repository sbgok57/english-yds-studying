import React from 'react';
import { YdsOptionLabel } from '../../types/yds';
import { Bookmark } from 'lucide-react';

interface OnlineOpticalSheetProps {
  totalQuestions?: number;
  answers: Record<number, YdsOptionLabel | null>;
  flagged: Record<number, boolean>;
  currentQuestionNumber: number;
  onSelectQuestion: (questionNumber: number) => void;
  onSelectOption: (questionNumber: number, option: YdsOptionLabel) => void;
  isMobileDrawerOpen?: boolean;
  onCloseMobileDrawer?: () => void;
}

const OPTIONS: YdsOptionLabel[] = ['A', 'B', 'C', 'D', 'E'];

export const OnlineOpticalSheet: React.FC<OnlineOpticalSheetProps> = ({
  totalQuestions = 80,
  answers,
  flagged,
  currentQuestionNumber,
  onSelectQuestion,
  onSelectOption,
  isMobileDrawerOpen = false,
  onCloseMobileDrawer,
}) => {
  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const blankCount = totalQuestions - answeredCount;

  const content = (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Online Optik Form</span>
          </h3>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {answeredCount} / {totalQuestions}
          </span>
        </div>

        {/* Tally Metrics */}
        <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-bold">
          <div className="p-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40">
            ✓ {answeredCount} Dolu
          </div>
          <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            ○ {blankCount} Boş
          </div>
          <div className="p-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/40">
            ⚑ {flaggedCount} Bayrak
          </div>
        </div>
      </div>

      {/* Optical Grid List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 divide-y divide-slate-100 dark:divide-slate-800/60 max-h-[620px]">
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((qNum) => {
          const selected = answers[qNum] || null;
          const isFlagged = !!flagged[qNum];
          const isCurrent = qNum === currentQuestionNumber;

          return (
            <div
              key={qNum}
              onClick={() => onSelectQuestion(qNum)}
              className={`pt-1.5 pb-1 flex items-center justify-between gap-1 px-2 rounded-xl transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-brand-50 dark:bg-brand-950/80 ring-2 ring-brand-500/40'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
              }`}
            >
              {/* Question Number & Flag indicator */}
              <div className="flex items-center gap-1.5 w-10 shrink-0">
                <span
                  className={`text-xs font-bold ${
                    isCurrent ? 'text-brand-600 dark:text-brand-400 font-black' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {qNum.toString().padStart(2, '0')}
                </span>
                {isFlagged && (
                  <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                )}
              </div>

              {/* Optical Bubbles A, B, C, D, E */}
              <div className="flex items-center gap-1.5">
                {OPTIONS.map((opt) => {
                  const isChecked = selected === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectOption(qNum, opt);
                        onSelectQuestion(qNum);
                      }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                        isChecked
                          ? 'bg-slate-900 dark:bg-brand-500 text-white shadow-sm ring-1 ring-black/20 dark:ring-white/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Panel */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-80 h-full bg-white dark:bg-slate-900 p-4 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-sm">Online Optik</span>
              <button
                onClick={onCloseMobileDrawer}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              >
                Kapat
              </button>
            </div>
            <div className="flex-1 overflow-hidden">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
