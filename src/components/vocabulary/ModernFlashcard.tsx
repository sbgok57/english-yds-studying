import { sanitizeWord, sanitizeMeanings } from '../../services/wordSanitizer';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  VocabularyItem,
  LearningState,
  WORD_LEVEL_CONFIG,
  WORD_IMPORTANCE_CONFIG,
  WORD_LEARNING_STATUS_CONFIG,
} from '../../types';
import { speechService } from '../../services/speech';
import { getVisualMemory } from '../../services/visualMemory';
import { CelebrationCharacter } from '../common/CelebrationCharacter';
import {
  Volume2,
  Star,
  RotateCw,
  CheckCircle2,
  HelpCircle,
  XCircle,
  Sparkles,
  AlertTriangle,
  Clapperboard,
  Layers,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
} from 'lucide-react';

export interface ModernFlashcardProps {
  vocab: VocabularyItem;
  learningState?: LearningState;
  isFlipped: boolean;
  onFlip: () => void;
  onResponse: (response: 'know' | 'unsure' | 'forgot') => void;
  onToggleFavorite?: (vocabId: string) => void;
  isFavorite?: boolean;
  showControls?: boolean;
  enableShortcuts?: boolean;
  enableSwipe?: boolean;
}

export const ModernFlashcard: React.FC<ModernFlashcardProps> = ({
  vocab,
  learningState,
  isFlipped,
  onFlip,
  onResponse,
  onToggleFavorite,
  isFavorite = false,
  showControls = true,
  enableShortcuts = true,
  enableSwipe = true,
}) => {
  // Touch / Swipe State
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [swipeHint, setSwipeHint] = useState<'know' | 'forgot' | 'unsure' | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const cleanWord = sanitizeWord(vocab.displayWord || vocab.word);
  const safeMeanings = sanitizeMeanings(vocab.meaningsTr || vocab.turkishMeanings || vocab.meanings);
  const safePos = vocab.partOfSpeech || 'noun';
  const visual = getVisualMemory(cleanWord, safePos, safeMeanings);

  const handleResponseAction = useCallback(
    (type: 'know' | 'unsure' | 'forgot') => {
      if (type === 'know') {
        setShowCelebration(true);
      }
      onResponse(type);
    },
    [onResponse]
  );

  // Pronunciation handler
  const handlePronounce = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speechService.speak(cleanWord, { lang: 'en-US' });
  };

  // Keyboard Shortcuts
  useEffect(() => {
    if (!enableShortcuts) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        onFlip();
      } else if (e.key === '1') {
        e.preventDefault();
        handleResponseAction('forgot');
      } else if (e.key === '2') {
        e.preventDefault();
        handleResponseAction('unsure');
      } else if (e.key === '3') {
        e.preventDefault();
        handleResponseAction('know');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableShortcuts, onFlip, handleResponseAction]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setDragOffset({ x: 0, y: 0 });
    setSwipeHint(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!enableSwipe || !touchStart) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;

    setDragOffset({ x: dx, y: dy });

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      setSwipeHint(dx > 0 ? 'know' : 'forgot');
    } else if (dy < -50 && Math.abs(dy) > Math.abs(dx)) {
      setSwipeHint('unsure');
    } else {
      setSwipeHint(null);
    }
  };

  const handleTouchEnd = () => {
    if (!enableSwipe || !touchStart) return;

    if (swipeHint === 'know') {
      handleResponseAction('know');
    } else if (swipeHint === 'forgot') {
      handleResponseAction('forgot');
    } else if (swipeHint === 'unsure') {
      handleResponseAction('unsure');
    }

    setTouchStart(null);
    setDragOffset({ x: 0, y: 0 });
    setSwipeHint(null);
  };

  // Level & Importance configs
  const levelInfo = vocab.level ? WORD_LEVEL_CONFIG[vocab.level] : undefined;
  const importanceInfo = vocab.importance ? WORD_IMPORTANCE_CONFIG[vocab.importance] : undefined;
  const statusInfo = learningState?.status ? WORD_LEARNING_STATUS_CONFIG[learningState.status] : undefined;

  return (
    <div className="w-full max-w-xl mx-auto select-none">
      {/* 3D Flip Card Container */}
      <div
        ref={cardRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={onFlip}
        style={{
          perspective: '1200px',
          transform: `translate3d(${dragOffset.x * 0.4}px, ${dragOffset.y * 0.4}px, 0) rotate(${dragOffset.x * 0.04}deg)`,
          transition: touchStart ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative cursor-pointer min-h-[460px] sm:min-h-[500px]"
      >
        {/* Swipe Feedback Overlay */}
        {swipeHint && (
          <div
            className={`absolute inset-0 z-30 rounded-3xl flex items-center justify-center pointer-events-none transition-all ${
              swipeHint === 'know'
                ? 'bg-emerald-500/20 border-4 border-emerald-500 text-emerald-600 dark:text-emerald-300'
                : swipeHint === 'forgot'
                ? 'bg-rose-500/20 border-4 border-rose-500 text-rose-600 dark:text-rose-300'
                : 'bg-amber-500/20 border-4 border-amber-500 text-amber-600 dark:text-amber-300'
            }`}
          >
            <div className="flex flex-col items-center gap-2 bg-white/90 dark:bg-slate-900/90 px-6 py-3 rounded-2xl shadow-xl backdrop-blur">
              {swipeHint === 'know' && (
                <>
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  <span className="text-sm font-black uppercase tracking-wider">Biliyorum (Sağa)</span>
                </>
              )}
              {swipeHint === 'forgot' && (
                <>
                  <XCircle className="w-10 h-10 text-rose-500" />
                  <span className="text-sm font-black uppercase tracking-wider">Unuttum (Sola)</span>
                </>
              )}
              {swipeHint === 'unsure' && (
                <>
                  <HelpCircle className="w-10 h-10 text-amber-500" />
                  <span className="text-sm font-black uppercase tracking-wider">Emin Değilim (Yukarı)</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Card Body with 3D Flip */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
          className="w-full h-full relative"
        >
          {/* ==================== FRONT FACE ==================== */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className={`absolute inset-0 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 ${
              isFlipped ? 'pointer-events-none' : ''
            } border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between overflow-y-auto`}
          >
            {/* Top Badges & Favorite */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
              <div className="flex flex-wrap items-center gap-2">
                {levelInfo && (
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${levelInfo.colorClass}`}>
                    {levelInfo.badge}
                  </span>
                )}
                {importanceInfo && (
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${importanceInfo.badgeClass}`}>
                    {importanceInfo.badgeText}
                  </span>
                )}
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                  {vocab.partOfSpeech}
                </span>
                {statusInfo && (
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusInfo.colorClass}`}>
                    {statusInfo.labelTr}
                  </span>
                )}
              </div>

              {onToggleFavorite && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(vocab.id);
                  }}
                  aria-label="Favorilere ekle"
                  className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Star
                    className={`w-5 h-5 ${
                      isFavorite ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Middle: Word, Pronunciation, Audio */}
            <div className="my-auto py-8 text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {cleanWord}
              </h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
                  {vocab.pronunciation || '/.../'}
                </span>
                <button
                  type="button"
                  onClick={handlePronounce}
                  title="Telaffuzu Dinle (en-US)"
                  aria-label="Telaffuzu Dinle"
                  className="p-2 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-900 transition-colors shadow-sm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Cognitive / Visual Memory Cue */}
              {vocab.logicMnemonic && (
                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/40 max-w-sm mx-auto text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 dark:text-amber-300 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Zihinsel Mantık Çağrışımı:</span>
                  </div>
                  <p className="text-xs text-amber-900 dark:text-amber-200/90 font-medium">
                    {vocab.logicMnemonic.logicConnection}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Flip Hint */}
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 flex items-center justify-between text-xs text-slate-400">
              <span className="hidden sm:inline">Klavye: [Boşluk] Kartı Çevir</span>
              <span className="sm:hidden text-[11px]">Çevirmek için dokunun</span>
              <span className="flex items-center gap-1 font-bold text-brand-600 dark:text-brand-400">
                <RotateCw className="w-3.5 h-3.5" /> Anlamı Gör
              </span>
            </div>
          </div>

          {/* ==================== BACK FACE ==================== */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className={`absolute inset-0 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 ${
              !isFlipped ? 'pointer-events-none' : ''
            } border-brand-500/40 dark:border-brand-500/30 shadow-xl flex flex-col justify-between overflow-y-auto space-y-4`}
          >
            {/* Top Bar: Word, Turkish Meaning, Audio & Caricature Visual */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
                  dangerouslySetInnerHTML={{ __html: visual.svgContent }}
                  title={visual.semanticScene}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {cleanWord}
                    </h3>
                    <button
                      type="button"
                      onClick={handlePronounce}
                      className="p-1 rounded-full text-slate-400 hover:text-brand-600 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {safeMeanings.join(', ')}
                  </p>
                  {visual.semanticScene && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5 max-w-xs truncate">
                      🎬 {visual.semanticScene}
                    </p>
                  )}
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                  {safePos}
                </span>
                {visual.emotion && (
                  <span className="block text-[10px] font-bold text-amber-500 mt-1">
                    {visual.emotion}
                  </span>
                )}
                {levelInfo && (
                  <span className="block text-[10px] text-slate-400 font-bold mt-0.5">
                    {levelInfo.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Example Sentence + Turkish Translation */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Örnek Cümle & Çevirisi:
              </span>
              <p className="italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                "{vocab.example}"
              </p>
              {vocab.exampleTr && (
                <p className="text-slate-500 dark:text-slate-400 mt-1 font-normal">
                  {vocab.exampleTr}
                </p>
              )}
            </div>

            {/* Word Family Grid */}
            {vocab.wordFamily && (
              <div className="p-3 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-[11px]">
                <div className="flex items-center gap-1 font-bold text-indigo-700 dark:text-indigo-300 mb-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Word Family (Kelime Ailesi):</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Verb:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {vocab.wordFamily.verb || '—'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Noun:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {vocab.wordFamily.noun || '—'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Adjective:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {vocab.wordFamily.adjective || '—'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Adverb:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {vocab.wordFamily.adverb || '—'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* YDS Trap Alert */}
            {vocab.ydsTrap && (
              <div className="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40 text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-rose-700 dark:text-rose-300">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  <span>YDS Çeldirici Tuzağı:</span>
                  <span className="font-mono bg-rose-100 dark:bg-rose-900/50 px-1.5 py-0.5 rounded text-[10px]">
                    {cleanWord} ≠ {vocab.ydsTrap.confusingWord}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  {vocab.ydsTrap.differenceTr}
                </p>
                <p className="text-[10px] text-rose-600 dark:text-rose-400 italic">
                  💡 {vocab.ydsTrap.examTrapTip}
                </p>
              </div>
            )}

            {/* Synonyms, Antonyms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {vocab.synonyms && vocab.synonyms.length > 0 && (
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-[9px] font-bold uppercase text-slate-400 block">Eş Anlam (Synonyms):</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {vocab.synonyms.slice(0, 3).join(', ')}
                  </span>
                </div>
              )}
              {vocab.antonyms && vocab.antonyms.length > 0 && (
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-[9px] font-bold uppercase text-slate-400 block">Zıt Anlam (Antonyms):</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {vocab.antonyms.slice(0, 2).join(', ')}
                  </span>
                </div>
              )}
            </div>

            {/* Media / Context Quote */}
            {vocab.mediaContext && (
              <div className="p-2.5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 text-[10px] text-purple-900 dark:text-purple-200">
                <div className="flex items-center gap-1 font-bold text-purple-800 dark:text-purple-300 mb-0.5">
                  <Clapperboard className="w-3 h-3 text-purple-500" />
                  <span>Dizi/Film & Günlük Bağlam ({vocab.mediaContext.sourceTitle}):</span>
                </div>
                <p className="italic">"{vocab.mediaContext.sceneQuote}"</p>
                <p className="mt-0.5 text-purple-700 dark:text-purple-300/80">
                  {vocab.mediaContext.explanationTr}
                </p>
              </div>
            )}

            {/* Bottom Flip Back Hint */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
              <span className="text-[10px]">Klavye: [1] Unuttum, [2] Emin Değilim, [3] Biliyorum</span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-200">
                <RotateCw className="w-3 h-3" /> Ön Yüze Dön
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Controls Below Card */}
      {showControls && (
        <div className="mt-5 space-y-3">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {/* Unuttum (Kırmızı) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleResponseAction('forgot');
              }}
              className="py-3 px-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 font-black text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 min-h-[48px]"
            >
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Unuttum</span>
              <span className="hidden sm:inline text-[10px] font-normal text-rose-400 font-mono">(1)</span>
            </button>

            {/* Emin Değilim (Sarı) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleResponseAction('unsure');
              }}
              className="py-3 px-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 font-black text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 min-h-[48px]"
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Emin Değilim</span>
              <span className="hidden sm:inline text-[10px] font-normal text-amber-400 font-mono">(2)</span>
            </button>

            {/* Biliyorum (Yeşil) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleResponseAction('know');
              }}
              className="py-3 px-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-black text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 min-h-[48px]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Biliyorum</span>
              <span className="hidden sm:inline text-[10px] font-normal text-emerald-400 font-mono">(3)</span>
            </button>
          </div>

          {/* Mobile Gestures Legend */}
          <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 dark:text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 text-rose-400" /> Sola: Unuttum
            </span>
            <span className="flex items-center gap-1">
              <ArrowUp className="w-3 h-3 text-amber-400" /> Yukarı: Emin Değilim
            </span>
            <span className="flex items-center gap-1">
              <ArrowRight className="w-3 h-3 text-emerald-400" /> Sağa: Biliyorum
            </span>
          </div>
        </div>
      )}

      {/* Correct Answer Joyful Celebration Animation */}
      <CelebrationCharacter
        show={showCelebration}
        onComplete={() => setShowCelebration(false)}
      />
    </div>
  );
};
