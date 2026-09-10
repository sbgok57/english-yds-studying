import React from 'react';
import { Volume2, ArrowRight, Lightbulb, GitCommit, Split } from 'lucide-react';
import { speechService } from '../../services/speech';

// --- ComparisonCard ---
interface ComparisonCardProps {
  itemA: { title: string; example: string; explanation: string };
  itemB: { title: string; example: string; explanation: string };
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ itemA, itemB }) => {
  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20">
        <h5 className="font-bold text-sm text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          {itemA.title}
        </h5>
        <p className="text-sm font-mono text-slate-800 dark:text-slate-200 my-2 p-2 rounded bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-950">
          "{itemA.example}"
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400">{itemA.explanation}</p>
      </div>

      <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20">
        <h5 className="font-bold text-sm text-purple-900 dark:text-purple-300 mb-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          {itemB.title}
        </h5>
        <p className="text-sm font-mono text-slate-800 dark:text-slate-200 my-2 p-2 rounded bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-950">
          "{itemB.example}"
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400">{itemB.explanation}</p>
      </div>
    </div>
  );
};

// --- CauseResultDiagram ---
interface CauseResultDiagramProps {
  cause: string;
  connector: string;
  result: string;
}

export const CauseResultDiagram: React.FC<CauseResultDiagramProps> = ({
  cause,
  connector,
  result,
}) => {
  return (
    <div className="my-5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
      <div className="flex-1 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
          Neden (Cause)
        </span>
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{cause}</span>
      </div>

      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-800 dark:text-brand-300 font-mono text-xs font-bold shrink-0">
        <span>{connector}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>

      <div className="flex-1 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
          Sonuç (Result)
        </span>
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{result}</span>
      </div>
    </div>
  );
};

// --- ActivePassiveDiagram ---
interface ActivePassiveDiagramProps {
  activeSentence: { subject: string; verb: string; object: string };
  passiveSentence: { subject: string; auxiliary: string; pastParticiple: string; agent?: string };
}

export const ActivePassiveDiagram: React.FC<ActivePassiveDiagramProps> = ({
  activeSentence,
  passiveSentence,
}) => {
  return (
    <div className="my-5 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
        <Split className="w-4 h-4" /> Etken - Edilgen Çatı Dönüşümü (Active to Passive)
      </div>

      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-1">
          ETKEN (ACTIVE):
        </span>
        <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
          <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200">
            [{activeSentence.subject}]
          </span>
          <span className="text-slate-600 dark:text-slate-400">{activeSentence.verb}</span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold">
            [{activeSentence.object}]
          </span>
        </div>
      </div>

      <div className="flex justify-center -my-2">
        <ArrowRight className="w-5 h-5 text-brand-500 transform rotate-90 md:rotate-0" />
      </div>

      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
          EDİLGEN (PASSIVE):
        </span>
        <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold">
            [{passiveSentence.subject}]
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200">
            {passiveSentence.auxiliary}
          </span>
          <span className="underline font-bold text-slate-800 dark:text-slate-200">
            {passiveSentence.pastParticiple}
          </span>
          {passiveSentence.agent && (
            <span className="text-xs text-slate-500 italic">by {passiveSentence.agent}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// --- ClauseDiagram ---
interface ClauseDiagramProps {
  subordinateClause: string;
  mainClause: string;
  connector: string;
}

export const ClauseDiagram: React.FC<ClauseDiagramProps> = ({
  subordinateClause,
  mainClause,
  connector,
}) => {
  return (
    <div className="my-5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
        <GitCommit className="w-4 h-4" /> Yan Cümle & Ana Cümle Bağıntısı (Clause Architecture)
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="flex-1 p-3 rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30">
          <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase block">
            Bağlaçlı Yan Cümle (Subordinate)
          </span>
          <p className="text-xs font-mono text-slate-800 dark:text-slate-200 mt-1">
            <strong className="text-amber-600 dark:text-amber-400">{connector}</strong>{' '}
            {subordinateClause}
          </p>
        </div>

        <span className="text-xl font-bold text-slate-400 select-none">,</span>

        <div className="flex-1 p-3 rounded-lg border border-indigo-300 dark:border-indigo-800 bg-indigo-50/60 dark:bg-indigo-950/30">
          <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase block">
            Ana Cümle (Main Clause)
          </span>
          <p className="text-xs font-mono text-slate-800 dark:text-slate-200 mt-1">{mainClause}</p>
        </div>
      </div>
    </div>
  );
};

// --- MemoryTrickCard ---
interface MemoryTrickCardProps {
  title: string;
  mnemonicEn: string;
  mnemonicTr: string;
}

export const MemoryTrickCard: React.FC<MemoryTrickCardProps> = ({
  title,
  mnemonicEn,
  mnemonicTr,
}) => {
  return (
    <div className="my-4 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3.5 shadow-sm">
      <div className="p-2 rounded-xl bg-amber-400 text-slate-900 shrink-0 shadow">
        <Lightbulb className="w-5 h-5" />
      </div>
      <div>
        <h5 className="text-sm font-bold text-amber-950 dark:text-amber-200 mb-1">{title}</h5>
        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mb-1">{mnemonicEn}</p>
        <p className="text-xs text-slate-600 dark:text-slate-400 italic">{mnemonicTr}</p>
      </div>
    </div>
  );
};

// --- ExampleSentenceCard ---
interface ExampleSentenceCardProps {
  en: string;
  tr: string;
  context?: string;
  highlightedWords?: string[];
  onWordClick?: (word: string) => void;
}

export const ExampleSentenceCard: React.FC<ExampleSentenceCardProps> = ({
  en,
  tr,
  context,
  highlightedWords = [],
  onWordClick,
}) => {
  const handlePronounce = () => {
    speechService.speak(en, { lang: 'en-US' });
  };

  const words = en.split(' ');

  return (
    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-brand-300 dark:hover:border-brand-800">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        {context && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {context}
          </span>
        )}
        <button
          onClick={handlePronounce}
          aria-label="Cümleyi dinle"
          className="p-1 rounded-full text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-auto"
        >
          <Volume2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed mb-1">
        {words.map((w, idx) => {
          const cleanW = w.toLowerCase().replace(/[^a-z]/g, '');
          const isHighlighted = highlightedWords.some(
            (hw) => hw.toLowerCase() === cleanW
          );

          if (isHighlighted) {
            return (
              <span
                key={idx}
                onClick={() => onWordClick && onWordClick(cleanW)}
                className="font-bold text-brand-600 dark:text-brand-400 underline decoration-dotted underline-offset-2 cursor-pointer hover:bg-brand-50 dark:hover:bg-brand-950 px-0.5 rounded transition-colors"
                title="Kelime detayını incele"
              >
                {w}{' '}
              </span>
            );
          }
          return <span key={idx}>{w} </span>;
        })}
      </p>

      <p className="text-xs text-slate-500 dark:text-slate-400 italic">{tr}</p>
    </div>
  );
};
