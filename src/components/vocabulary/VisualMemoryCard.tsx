import React, { useState } from 'react';
import { VocabularyItem } from '../../types/vocabulary';
import { speechService } from '../../services/speech';
import { Volume2, Eye, EyeOff, Sparkles, TrendingUp, ShieldCheck, Zap, Compass, CheckCircle2 } from 'lucide-react';

interface VisualMemoryCardProps {
  item: VocabularyItem;
  masteryScore?: number;
  onNext?: () => void;
}

export const VisualMemoryCard: React.FC<VisualMemoryCardProps> = ({
  item,
  masteryScore = 0,
  onNext
}) => {
  const [revealed, setRevealed] = useState(false);

  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    speechService.speak(item.word, { rate: 0.9 });
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
      {/* Top Banner & Category */}
      <div className="bg-slate-800/60 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Görsel Hafıza Kartı • {item.day || 'YDS Zarf'}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          <span>Hafıza Skoru: %{masteryScore}</span>
        </div>
      </div>

      {/* Visual Association Canvas / Clue Section */}
      <div className="p-6 sm:p-8 flex flex-col items-center text-center relative border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950">
        {/* Conceptual Diagram / Icon Badge */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-600/20 via-teal-500/10 to-indigo-600/20 border border-emerald-500/30 flex items-center justify-center mb-5 shadow-lg shadow-emerald-900/20 group relative">
          <Compass className="w-12 h-12 text-emerald-400 transform group-hover:rotate-45 transition-transform duration-500" />
          <div className="absolute -bottom-2 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
            MNEMONIC
          </div>
        </div>

        {/* Visual Memory Clue Description */}
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-2.5 mb-4 max-w-md">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
            <Zap className="w-3.5 h-3.5" />
            <span>ZİHİNSEL GÖRSEL İPUCU</span>
          </div>
          <p className="text-sm text-slate-200 font-medium leading-relaxed">
            "{item.visualMnemonic.description}"
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            → {item.visualMnemonic.clue}
          </p>
        </div>

        {/* Word Display & Audio */}
        <div className="flex items-center justify-center gap-3 my-2">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {item.word}
          </h1>
          <button
            onClick={handlePronounce}
            title="Kelimeyi seslendir"
            className="p-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* English Definition */}
        <p className="text-sm sm:text-base text-slate-300 max-w-md mt-1 mb-4 italic">
          "{item.definitionEn}"
        </p>

        {/* Reveal / Turkish Meaning Section */}
        <div className="w-full mt-2">
          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Türkçe Anlamı & YDS Örneğini Göster</span>
            </button>
          ) : (
            <div className="w-full bg-slate-800/70 border border-emerald-500/30 rounded-xl p-4 text-left animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">TÜRKÇE ANLAMI</span>
                <button
                  onClick={() => setRevealed(false)}
                  className="text-slate-400 hover:text-white p-1 text-xs flex items-center gap-1"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Gizle</span>
                </button>
              </div>

              <div className="text-xl font-bold text-emerald-300 mb-3">
                {item.meaningsTr.join(', ')}
              </div>

              {item.example && (
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs uppercase font-semibold text-slate-400 mb-1">YDS ÖRNEK CÜMLE:</div>
                  <div className="text-sm text-slate-100 italic mb-1 font-mono">
                    "{item.example}"
                  </div>
                  {item.exampleTr && (
                    <div className="text-xs text-slate-400 font-sans">
                      {item.exampleTr}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      {onNext && (
        <div className="p-4 bg-slate-950 flex justify-end">
          <button
            onClick={onNext}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/30 flex items-center gap-2 transition-all"
          >
            <span>Sıradaki Kelime</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
