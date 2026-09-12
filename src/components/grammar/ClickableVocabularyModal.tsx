import { sanitizeWord, sanitizeMeanings } from '../../services/wordSanitizer';
import React, { useState } from 'react';
import { VocabularyItem } from '../../types';
import { Volume2, BookmarkPlus, Check, X } from 'lucide-react';
import { speechService } from '../../services/speech';
import { dbService } from '../../services/db';
import { createInitialLearningState } from '../../services/spacedRepetition';

interface ClickableVocabularyModalProps {
  item: VocabularyItem;
  isOpen: boolean;
  onClose: () => void;
}

export const ClickableVocabularyModal: React.FC<ClickableVocabularyModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen) return null;

  const cleanWord = sanitizeWord(item.displayWord || item.word);
  const cleanMeanings = sanitizeMeanings(item.meaningsTr || item.turkishMeanings || item.meanings);

  const handlePronounce = () => {
    speechService.speak(cleanWord, { lang: 'en-US' });
  };

  const handleAddToReview = async () => {
    try {
      const existing = await dbService.getLearningState(item.id);
      if (!existing) {
        const newState = createInitialLearningState(item.id);
        await dbService.saveLearningState(newState);
      }
      setIsAdded(true);
    } catch (err) {
      console.warn('Failed to add to review queue:', err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Vocabulary details for ${cleanWord}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/25 dark:bg-black/30 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {cleanWord}
          </h3>
          <button
            onClick={handlePronounce}
            aria-label={`Pronounce ${cleanWord}`}
            className="p-1.5 rounded-full bg-brand-50 hover:bg-brand-100 dark:bg-brand-950 dark:hover:bg-brand-900 text-brand-600 dark:text-brand-400 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
            {item.pronunciation}
          </span>
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4">
          {item.partOfSpeech} • {item.difficulty}
        </div>

        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block">
              Türkçe Anlamı
            </span>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {cleanMeanings.join(', ')}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block">
              Örnek Cümle (Example)
            </span>
            <p className="italic text-slate-800 dark:text-slate-200">
              "{item.example}"
            </p>
            {item.exampleTr && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {item.exampleTr}
              </p>
            )}
          </div>

          {item.visualMnemonic && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase block mb-1">
                💡 Hafıza İpucu (Visual Mnemonic)
              </span>
              <p className="text-xs text-amber-900 dark:text-amber-200">
                {item.visualMnemonic}
              </p>
            </div>
          )}

          {item.collocations && item.collocations.length > 0 && (
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-1">
                Eşdizimler (Collocations)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.collocations.map((col, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={handleAddToReview}
            disabled={isAdded}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              isAdded
                ? 'bg-emerald-500 text-white cursor-default'
                : 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" /> Tekrar Listesine Eklendi
              </>
            ) : (
              <>
                <BookmarkPlus className="w-4 h-4" /> Tekrar Listeme Ekle
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
