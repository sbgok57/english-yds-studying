import React from 'react';
import { FormulaBlock } from '../../types';

interface SentenceBlocksProps {
  pattern?: string;
  blocks: FormulaBlock[];
}

export const SentenceBlocks: React.FC<SentenceBlocksProps> = ({ pattern, blocks }) => {
  return (
    <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
      {pattern && (
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Formula / Cümle Şablonu: <span className="font-mono text-brand-600 dark:text-brand-400">{pattern}</span>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        {blocks.map((block, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg border text-sm transition-transform hover:scale-105 ${
                block.highlight
                  ? 'bg-brand-50 border-brand-300 text-brand-900 dark:bg-brand-950/50 dark:border-brand-700 dark:text-brand-200 font-semibold shadow-sm'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
                {block.role}
              </span>
              <span className="font-mono text-sm">{block.text}</span>
              {block.note && (
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {block.note}
                </span>
              )}
            </div>
            {index < blocks.length - 1 && (
              <span className="text-slate-400 font-bold text-lg select-none">+</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
