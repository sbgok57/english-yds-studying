import React from 'react';
import { VocabularyItem } from '../../types/vocabulary';
import { getVisualMemory } from '../../services/visualMemory';
import { speechService } from '../../services/speech';
import { Lightbulb, Volume2, Sparkles, CheckCircle } from 'lucide-react';

interface VisualMemoryCardProps {
  vocab: VocabularyItem;
  compact?: boolean;
  className?: string;
}

export const VisualMemoryCard: React.FC<VisualMemoryCardProps> = ({
  vocab,
  compact = false,
  className = '',
}) => {
  const safeMeanings = vocab.meaningsTr || vocab.turkishMeanings || vocab.meanings || [];
  const safePos = vocab.partOfSpeech || 'noun';
  const visual = getVisualMemory(vocab.word, safePos, safeMeanings);
  const memoryTip = vocab.memoryTip || visual.memoryTip;

  const handleSpeak = (e: React.MouseEvent, gender: 'female' | 'male') => {
    e.stopPropagation();
    if (gender === 'female') {
      speechService.speakWoman(vocab.word);
    } else {
      speechService.speakMan(vocab.word);
    }
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
        <div
          className="w-12 h-12 rounded-lg shrink-0 overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-800"
          dangerouslySetInnerHTML={{ __html: visual.svgContent }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-100 truncate text-sm">
              {vocab.displayWord || vocab.word}
            </span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              {safePos.replace('_', ' ')}
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
            {safeMeanings.join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md flex flex-col ${className}`}>
      {/* Visual Header Illustration */}
      <div className="relative w-full h-48 bg-slate-950/40 flex items-center justify-center p-4 border-b border-slate-100 dark:border-slate-800/80">
        <div
          className="w-40 h-40 drop-shadow-lg"
          dangerouslySetInnerHTML={{ __html: visual.svgContent }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur border border-white/10 uppercase tracking-wide">
            {safePos.replace('_', ' ')}
          </span>
          {vocab.difficulty && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-500/80 text-white backdrop-blur">
              {vocab.difficulty}
            </span>
          )}
          {visual.emotion && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/90 text-slate-950 backdrop-blur">
              {visual.emotion}
            </span>
          )}
          {vocab.verifiedYDSOccurrence && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> YDS
            </span>
          )}
        </div>

        {/* Dual Pronunciation Listeners */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <button
            onClick={(e) => handleSpeak(e, 'female')}
            title="Kadın Sesiyle Dinle"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 dark:bg-slate-800/90 text-pink-600 dark:text-pink-400 text-xs font-semibold hover:bg-white transition-all shadow-sm"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>♀</span>
          </button>
          <button
            onClick={(e) => handleSpeak(e, 'male')}
            title="Erkek Sesiyle Dinle"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 dark:bg-slate-800/90 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-white transition-all shadow-sm"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>♂</span>
          </button>
        </div>

        {/* IPA Pronunciation */}
        {vocab.pronunciation && (
          <div className="absolute bottom-2 right-3 text-[11px] text-slate-400 font-mono">
            /{vocab.pronunciation}/
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Word & Turkish Meanings */}
          <div className="mb-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {vocab.displayWord || vocab.word}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {safeMeanings.map((meaning, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
                >
                  {meaning}
                </span>
              ))}
            </div>
            {visual.semanticScene && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-1.5">
                🎬 {visual.semanticScene}
              </p>
            )}
          </div>

          {/* Bilingual Cognitive Memory Tip (Hafıza İpucu) */}
          <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Görsel Hafıza İpucu (Memory Tip)</span>
            </div>
            <p className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
              🇹🇷 {memoryTip.tr}
            </p>
            <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 italic leading-relaxed">
              🇬🇧 {memoryTip.en}
            </p>
          </div>

          {/* Example Sentence */}
          {vocab.example && (
            <div className="mt-3 text-xs">
              <p className="text-slate-700 dark:text-slate-300 font-medium italic">
                "{vocab.example}"
              </p>
              {vocab.exampleTr && (
                <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-[11px]">
                  "{vocab.exampleTr}"
                </p>
              )}
            </div>
          )}
        </div>

        {/* Collocations & Synonyms Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] space-y-1.5">
          {vocab.collocations && vocab.collocations.length > 0 && (
            <div className="flex items-start gap-1">
              <span className="font-bold text-slate-500 shrink-0">Öbekler:</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {vocab.collocations.slice(0, 3).join(' • ')}
              </span>
            </div>
          )}
          {vocab.synonyms && vocab.synonyms.length > 0 && (
            <div className="flex items-start gap-1">
              <span className="font-bold text-slate-500 shrink-0">Eş Anlam:</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {vocab.synonyms.slice(0, 3).join(', ')}
              </span>
            </div>
          )}
          {vocab.sourceRefs && vocab.sourceRefs.length > 0 && (
            <div className="text-[10px] text-slate-400 pt-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-500" />
              <span>
                Kaynak: {vocab.sourceRefs[0].sourceName || vocab.sourceRefs[0].sourceType}
                {vocab.sourceRefs[0].sourcePage ? ` (Sayfa ${vocab.sourceRefs[0].sourcePage})` : ''}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
