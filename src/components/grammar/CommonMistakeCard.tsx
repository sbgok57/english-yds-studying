import React from 'react';
import { CommonMistake } from '../../types';
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface CommonMistakeCardProps {
  mistakes: CommonMistake[];
}

export const CommonMistakeCard: React.FC<CommonMistakeCardProps> = ({ mistakes }) => {
  return (
    <div className="space-y-4 my-4">
      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm">
        <AlertTriangle className="w-4 h-4" />
        <span>Sık Yapılan Hatalar & Doğru Kullanım (Common Mistakes)</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mistakes.map((m, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {/* Wrong sentence */}
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-red-700 dark:text-red-300 block mb-0.5">
                    YANLIŞ (INCORRECT)
                  </span>
                  <p className="text-sm font-mono text-red-950 dark:text-red-200 line-through">
                    {m.wrong}
                  </p>
                </div>
              </div>

              {/* Correct sentence */}
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                    DOĞRU (CORRECT)
                  </span>
                  <p className="text-sm font-mono font-medium text-emerald-950 dark:text-emerald-200">
                    {m.right}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanations */}
            <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg">
              <p className="font-medium text-slate-800 dark:text-slate-200 mb-0.5">
                {m.explanationEn}
              </p>
              <p className="text-slate-500 dark:text-slate-400 italic">{m.explanationTr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
