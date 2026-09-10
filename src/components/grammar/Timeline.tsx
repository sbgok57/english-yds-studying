import React from 'react';
import { VisualStep } from '../../types';

interface TimelineProps {
  titleEn: string;
  titleTr: string;
  steps: VisualStep[];
}

export const Timeline: React.FC<TimelineProps> = ({ titleEn, titleTr, steps }) => {
  return (
    <div className="my-5 p-5 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-6 border-b border-slate-800 pb-3">
        <h4 className="text-base font-semibold text-brand-300 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse"></span>
          {titleEn}
        </h4>
        <span className="text-xs text-slate-400">{titleTr}</span>
      </div>

      <div className="relative pl-6 sm:pl-0">
        {/* Timeline Horizontal / Vertical Bar */}
        <div className="hidden sm:block absolute top-6 left-8 right-8 h-1 bg-slate-700 -z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start sm:items-center text-left sm:text-center p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 transition-all hover:bg-slate-800"
            >
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-md">
                {idx + 1}
              </div>
              <span className="text-sm font-semibold text-white mb-1">{step.title}</span>
              <p className="text-xs text-slate-300 mb-1">{step.descEn}</p>
              <p className="text-[11px] text-slate-400 italic">{step.descTr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
