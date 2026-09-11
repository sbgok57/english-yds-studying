import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  VocabularyItem,
  LearningState,
  VocabularySource,
  WORD_LEVEL_CONFIG,
  WORD_IMPORTANCE_CONFIG,
  WORD_LEARNING_STATUS_CONFIG,
} from '../types';
import { speechService } from '../services/speech';
import { exportVocabularyToCsv } from '../services/csv';
import { dbService } from '../services/db';
import {
  createInitialLearningState,
  processReview,
  processSrsConfidenceReview,
} from '../services/spacedRepetition';
import {
  buildVocabQuiz,
  VocabQuizQuestion,
} from '../services/vocabularyQuizEngine';
import { calculateSourceCompleteness } from '../services/importer';
import { VocabularyImportModal } from '../components/VocabularyImportModal';
import { VisualMemoryCard } from '../components/common/VisualMemoryCard';
import { AuditDashboardModal } from '../components/common/AuditDashboardModal';
import { ModernFlashcard } from '../components/vocabulary/ModernFlashcard';
import {
  Search,
  Volume2,
  Download,
  Upload,
  BookmarkPlus,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Database,
  X,
  Sparkles,
  Layers,
  Star,
  RotateCw,
  AlertTriangle,
  Play,
  Award,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Filter,
} from 'lucide-react';

export type VocabSubMode = 'cards' | 'flashcards' | 'quiz' | 'errors' | 'favorites';

interface VocabularyViewProps {
  vocabulary: VocabularyItem[];
  learningStates: Map<string, LearningState>;
  onRefreshData: () => void;
  onStartWordTest?: (item: VocabularyItem) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  vocabulary,
  learningStates,
  onRefreshData,
}) => {
  // Navigation & Sub-mode
  const [subMode, setSubMode] = useState<VocabSubMode>('cards');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('default');

  // Modals & Panels
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isAuditDashboardOpen, setIsAuditDashboardOpen] = useState(false);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<VocabularyItem | null>(null);
  const [sources, setSources] = useState<VocabularySource[]>([]);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  // Flashcard Mode State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [flashcardPoolType, setFlashcardPoolType] = useState<'all' | 'due' | 'errors' | 'favorites'>('all');
  const [flashcardCompleted, setFlashcardCompleted] = useState(false);
  const [flashcardSessionStats, setFlashcardSessionStats] = useState({ know: 0, unsure: 0, forgot: 0 });

  // Quiz Mode State
  const [quizQuestions, setQuizQuestions] = useState<VocabQuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, incorrect: 0 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [missedInQuiz, setMissedInQuiz] = useState<string[]>([]);
  const [quizCountSetting, setQuizCountSetting] = useState<number>(10);
  const [isQuizConfigOpen, setIsQuizConfigOpen] = useState(false);

  // Load audit sources
  const loadSources = useCallback(async () => {
    try {
      const allSources = await dbService.getAllSources();
      setSources(allSources);
    } catch (err) {
      console.warn('Failed to load sources for audit:', err);
    }
  }, []);

  useEffect(() => {
    loadSources();
  }, [loadSources, vocabulary.length]);

  // Dynamic source calculations
  const totalQuizletWords = vocabulary.filter(
    (v) =>
      v.source.toLowerCase().includes('quizlet') ||
      v.sourceRefs?.some((r) => r.sourceType === 'quizlet')
  ).length;

  const totalPdfWords = vocabulary.filter(
    (v) =>
      v.source.toLowerCase().includes('pdf') ||
      v.sourceRefs?.some((r) => r.sourceType === 'pdf')
  ).length;

  const totalCsvWords = vocabulary.filter(
    (v) =>
      v.source.toLowerCase().includes('csv') ||
      v.sourceRefs?.some((r) => r.sourceType === 'csv')
  ).length;

  const totalCoreWords = vocabulary.length - (totalQuizletWords + totalPdfWords + totalCsvWords);

  // Daily Dashboard Stats Computation
  const now = useMemo(() => new Date(), []);
  const dashboardStats = useMemo(() => {
    let dueCount = 0;
    let newCount = 0;
    let difficultCount = 0;
    let masteredCount = 0;
    let favoritesCount = 0;

    for (const item of vocabulary) {
      const state = learningStates.get(item.id);
      if (!state || state.status === 'new' || state.learningStage === 'new') {
        newCount++;
      } else {
        const isDue = new Date(state.nextReviewAt) <= now;
        if (isDue || state.status === 'review_needed') {
          dueCount++;
        }
        if (state.incorrectCount >= 2 || (state.errorRate && state.errorRate >= 40)) {
          difficultCount++;
        }
        if (state.mastery >= 90 || state.status === 'mastered') {
          masteredCount++;
        }
      }
      if (learningStates.get(item.id)?.favorite) {
        favoritesCount++;
      }
    }

    return { dueCount, newCount, difficultCount, masteredCount, favoritesCount };
  }, [vocabulary, learningStates, now]);

  // Filtered Vocabulary for Card Grid & Sub-modes
  const filteredVocabulary = useMemo(() => {
    return vocabulary
      .filter((item) => {
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.word.toLowerCase().includes(q) ||
          item.meaningsTr.some((m) => m.toLowerCase().includes(q)) ||
          item.synonyms?.some((s) => s.toLowerCase().includes(q)) ||
          item.antonyms?.some((a) => a.toLowerCase().includes(q)) ||
          item.collocations?.some((c) => c.toLowerCase().includes(q)) ||
          item.partOfSpeech.toLowerCase().includes(q) ||
          item.source.toLowerCase().includes(q);

        const matchesLevel =
          selectedLevel === 'all' || (item.level && item.level.toString() === selectedLevel);

        const matchesImportance =
          selectedImportance === 'all' || item.importance === selectedImportance;

        const matchesPos = selectedPos === 'all' || item.partOfSpeech === selectedPos;

        let matchesSource = true;
        if (selectedSourceType === 'quizlet') {
          matchesSource =
            item.source.toLowerCase().includes('quizlet') ||
            !!item.sourceRefs?.some((r) => r.sourceType === 'quizlet');
        } else if (selectedSourceType === 'pdf') {
          matchesSource =
            item.source.toLowerCase().includes('pdf') ||
            !!item.sourceRefs?.some((r) => r.sourceType === 'pdf');
        } else if (selectedSourceType === 'csv') {
          matchesSource =
            item.source.toLowerCase().includes('csv') ||
            !!item.sourceRefs?.some((r) => r.sourceType === 'csv');
        } else if (selectedSourceType === 'core') {
          matchesSource =
            !item.source.toLowerCase().includes('quizlet') &&
            !item.source.toLowerCase().includes('pdf') &&
            !item.source.toLowerCase().includes('csv');
        }

        let matchesStatus = true;
        const state = learningStates.get(item.id);
        const status = state?.status || 'new';

        if (selectedStatus === 'due') {
          matchesStatus = !!state && new Date(state.nextReviewAt) <= now;
        } else if (selectedStatus !== 'all') {
          matchesStatus = status === selectedStatus;
        }

        if (subMode === 'favorites') {
          return matchesSearch && !!state?.favorite;
        }

        if (subMode === 'errors') {
          const hasError = state && (state.incorrectCount > 0 || state.status === 'review_needed');
          return matchesSearch && !!hasError;
        }

        return (
          matchesSearch &&
          matchesLevel &&
          matchesImportance &&
          matchesPos &&
          matchesSource &&
          matchesStatus
        );
      })
      .sort((a, b) => {
        const stateA = learningStates.get(a.id);
        const stateB = learningStates.get(b.id);

        if (sortOrder === 'level_asc') {
          return (a.level || 3) - (b.level || 3);
        }
        if (sortOrder === 'level_desc') {
          return (b.level || 3) - (a.level || 3);
        }
        if (sortOrder === 'alpha_asc') {
          return a.word.localeCompare(b.word);
        }
        if (sortOrder === 'error_desc') {
          return (stateB?.incorrectCount || 0) - (stateA?.incorrectCount || 0);
        }
        if (sortOrder === 'mastery_desc') {
          return (stateB?.mastery || 0) - (stateA?.mastery || 0);
        }
        return 0;
      });
  }, [
    vocabulary,
    learningStates,
    searchQuery,
    selectedLevel,
    selectedImportance,
    selectedPos,
    selectedSourceType,
    selectedStatus,
    subMode,
    sortOrder,
    now,
  ]);

  // Flashcard Pool
  const flashcardItems = useMemo(() => {
    if (flashcardPoolType === 'due') {
      return vocabulary.filter((v) => {
        const st = learningStates.get(v.id);
        return st && (new Date(st.nextReviewAt) <= now || st.status === 'review_needed');
      });
    }
    if (flashcardPoolType === 'errors') {
      return vocabulary.filter((v) => {
        const st = learningStates.get(v.id);
        return st && (st.incorrectCount > 0 || st.status === 'review_needed');
      });
    }
    if (flashcardPoolType === 'favorites') {
      return vocabulary.filter((v) => learningStates.get(v.id)?.favorite);
    }
    return filteredVocabulary.length > 0 ? filteredVocabulary : vocabulary;
  }, [flashcardPoolType, vocabulary, learningStates, filteredVocabulary, now]);

  // Handlers
  const handlePronounce = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    speechService.speak(word, { lang: 'en-US' });
  };

  const handleToggleFavorite = async (vocabId: string) => {
    try {
      const existing =
        (await dbService.getLearningState(vocabId)) || createInitialLearningState(vocabId);
      const nextState: LearningState = {
        ...existing,
        favorite: !existing.favorite,
      };
      await dbService.saveLearningState(nextState);
      onRefreshData();
    } catch (err) {
      console.warn('Failed to toggle favorite:', err);
    }
  };

  const handleAddToReview = async (item: VocabularyItem, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const existing = await dbService.getLearningState(item.id);
      if (!existing) {
        const newState = createInitialLearningState(item.id);
        await dbService.saveLearningState(newState);
      }
      setAddedItems((prev) => new Set(prev).add(item.id));
      onRefreshData();
    } catch (err) {
      console.warn('Failed to add to review queue:', err);
    }
  };

  // Flashcard SRS Response
  const handleFlashcardResponse = async (response: 'know' | 'unsure' | 'forgot') => {
    const currentItem = flashcardItems[flashcardIndex];
    if (!currentItem) return;

    try {
      const existing =
        (await dbService.getLearningState(currentItem.id)) ||
        createInitialLearningState(currentItem.id);
      const nextState = processSrsConfidenceReview(existing, response);
      await dbService.saveLearningState(nextState);
      onRefreshData();
    } catch (err) {
      console.warn('Failed to save flashcard response:', err);
    }

    setFlashcardSessionStats((prev) => ({
      ...prev,
      [response]: prev[response] + 1,
    }));

    if (flashcardIndex + 1 < flashcardItems.length) {
      setFlashcardIndex((prev) => prev + 1);
      setIsCardFlipped(false);
    } else {
      setFlashcardCompleted(true);
    }
  };

  // Start Quiz
  const startQuiz = (
    poolType: 'all' | 'errors' | 'favorites' = 'all',
    count: number = quizCountSetting
  ) => {
    const questions = buildVocabQuiz(vocabulary, learningStates, {
      questionCount: count,
      selectedTypes: [],
      onlyFavorites: poolType === 'favorites',
      onlyErrors: poolType === 'errors',
    });
    setQuizQuestions(questions);
    setQuizIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setQuizScore({ correct: 0, incorrect: 0 });
    setMissedInQuiz([]);
    setQuizFinished(false);
    setSubMode('quiz');
  };

  // Submit Quiz Answer
  const handleSelectQuizOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitQuizAnswer = async () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const currentQ = quizQuestions[quizIndex];
    const isCorrect = selectedOptionId === currentQ.correctOptionId;

    if (isCorrect) {
      setQuizScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setQuizScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setMissedInQuiz((prev) => [...prev, currentQ.vocabularyId]);
    }

    // Save learning state
    try {
      const existing =
        (await dbService.getLearningState(currentQ.vocabularyId)) ||
        createInitialLearningState(currentQ.vocabularyId);
      const nextState = processReview(existing, isCorrect);
      await dbService.saveLearningState(nextState);
      onRefreshData();
    } catch (err) {
      console.warn('Failed to update learning state in quiz:', err);
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleExportCsv = () => {
    const csvData = exportVocabularyToCsv(vocabulary);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `ydt_yds_vocabulary_complete_${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header & Main Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            Akademik Kelime Bankası
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Toplam <strong>{vocabulary.length}</strong> doğrulanmış YDT &amp; YDS kelimesi (Seviye 1-5,
            Word Family, YDS Çeldirici Tuzakları &amp; Bağlamsal Öğrenme).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsAuditDashboardOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Denetim Paneli
          </button>
          <button
            onClick={() => setIsAuditOpen(!isAuditOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <Database className="w-3.5 h-3.5 text-brand-600" />
            Kaynaklar ({sources.length})
            {isAuditOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-all shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" /> İçe Aktar
          </button>
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> CSV
          </button>
        </div>
      </div>

      {/* =========================================================================
          12. GÜNLÜK DASHBOARD ("BUGÜN NE ÇALIŞMALIYIM?")
      ========================================================================== */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-900/90 via-slate-900 to-brand-950 text-white shadow-xl border border-indigo-700/40 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="text-base font-black tracking-tight">Bugün Ne Çalışmalıyım?</h3>
          </div>
          <span className="text-xs text-indigo-200 font-medium">
            Kişiselleştirilmiş SM-2 Aralıklı Tekrar Sistemi
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* 1. Bugün Tekrar Edilecekler */}
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
            <span className="text-[11px] font-semibold text-indigo-200 block">Bugün Tekrar</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl font-black text-amber-300">{dashboardStats.dueCount}</span>
              <span className="text-[10px] text-slate-300">kelime</span>
            </div>
            <p className="text-[10px] text-indigo-200/80 mt-1">Zamanı gelen tekrarlar</p>
          </div>

          {/* 2. Yeni Öğrenilecekler */}
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
            <span className="text-[11px] font-semibold text-indigo-200 block">Yeni Kelimeler</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl font-black text-sky-300">{dashboardStats.newCount}</span>
              <span className="text-[10px] text-slate-300">kelime</span>
            </div>
            <p className="text-[10px] text-indigo-200/80 mt-1">Henüz çalışılmamış</p>
          </div>

          {/* 3. Zorlandıklarım */}
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
            <span className="text-[11px] font-semibold text-indigo-200 block">Zorlandıklarım</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl font-black text-rose-300">{dashboardStats.difficultCount}</span>
              <span className="text-[10px] text-slate-300">kelime</span>
            </div>
            <p className="text-[10px] text-indigo-200/80 mt-1">Hata oranı yüksek</p>
          </div>

          {/* 4. Ustalaşılanlar */}
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
            <span className="text-[11px] font-semibold text-indigo-200 block">Ustalaşılan</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl font-black text-emerald-300">{dashboardStats.masteredCount}</span>
              <span className="text-[10px] text-slate-300">kelime</span>
            </div>
            <p className="text-[10px] text-indigo-200/80 mt-1">%90+ Başarı oranı</p>
          </div>
        </div>

        {/* Action Button: Start Today's Review */}
        <div className="pt-1 flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              setFlashcardPoolType('due');
              setFlashcardIndex(0);
              setIsCardFlipped(false);
              setFlashcardCompleted(false);
              setFlashcardSessionStats({ know: 0, unsure: 0, forgot: 0 });
              setSubMode('flashcards');
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 shadow-lg hover:shadow-xl transition-all"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            Bugünkü Tekrarı Başlat ({dashboardStats.dueCount > 0 ? dashboardStats.dueCount : 15} Kelime)
          </button>

          <button
            onClick={() => startQuiz('all', 10)}
            className="flex items-center gap-1.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            10 Soruluk Hızlı Quiz Çöz
          </button>
        </div>
      </div>

      {/* =========================================================================
          SUB-MODE NAVIGATION TABS
      ========================================================================== */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setSubMode('cards')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            subMode === 'cards'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Layers className="w-4 h-4" />
          Kelimeler &amp; Kartlar ({filteredVocabulary.length})
        </button>

        <button
          onClick={() => {
            setFlashcardPoolType('all');
            setFlashcardIndex(0);
            setIsCardFlipped(false);
            setFlashcardCompleted(false);
            setSubMode('flashcards');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            subMode === 'flashcards'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <RotateCw className="w-4 h-4" />
          Flashcard Modu (Swipe &amp; Klavye)
        </button>

        <button
          onClick={() => {
            if (quizQuestions.length === 0) {
              startQuiz('all', 10);
            } else {
              setSubMode('quiz');
            }
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            subMode === 'quiz'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          Kelime Testi (8 Soru Tipi)
        </button>

        <button
          onClick={() => setSubMode('errors')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            subMode === 'errors'
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-rose-500" />
          Hatalarım &amp; Zor Kelimeler ({dashboardStats.difficultCount})
        </button>

        <button
          onClick={() => setSubMode('favorites')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            subMode === 'favorites'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          Favorilerim ({dashboardStats.favoritesCount})
        </button>
      </div>

      {/* =========================================================================
          SUB-MODE: FLASHCARD STUDY MODE (3D Flip, Swipe, Shortcuts)
      ========================================================================== */}
      {subMode === 'flashcards' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Havuz:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(['all', 'due', 'errors', 'favorites'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFlashcardPoolType(type);
                      setFlashcardIndex(0);
                      setIsCardFlipped(false);
                      setFlashcardCompleted(false);
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition-all ${
                      flashcardPoolType === type
                        ? 'bg-brand-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {type === 'all'
                      ? 'Tümü'
                      : type === 'due'
                      ? 'Bugün Tekrar'
                      : type === 'errors'
                      ? 'Zorlandıklarım'
                      : 'Favoriler'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-500">
                {flashcardItems.length > 0 ? flashcardIndex + 1 : 0} / {flashcardItems.length}
              </span>
              <button
                onClick={() => setSubMode('cards')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {flashcardItems.length > 0 && (
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-indigo-600 transition-all duration-300"
                style={{
                  width: `${((flashcardIndex + 1) / flashcardItems.length) * 100}%`,
                }}
              />
            </div>
          )}

          {/* Main Flashcard Component */}
          {flashcardItems.length > 0 && !flashcardCompleted ? (
            <div className="space-y-4">
              <ModernFlashcard
                vocab={flashcardItems[flashcardIndex]}
                learningState={learningStates.get(flashcardItems[flashcardIndex].id)}
                isFlipped={isCardFlipped}
                onFlip={() => setIsCardFlipped(!isCardFlipped)}
                onResponse={handleFlashcardResponse}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={!!learningStates.get(flashcardItems[flashcardIndex].id)?.favorite}
              />

              <div className="flex items-center justify-between max-w-xl mx-auto pt-2 text-xs text-slate-500">
                <button
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsCardFlipped(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Önceki Kart
                </button>

                <button
                  disabled={flashcardIndex + 1 >= flashcardItems.length}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.min(flashcardItems.length - 1, prev + 1));
                    setIsCardFlipped(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Sonraki Kart <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : flashcardCompleted ? (
            <div className="max-w-md mx-auto p-8 rounded-3xl bg-white dark:bg-slate-800 text-center space-y-5 shadow-lg border border-slate-200 dark:border-slate-700 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  Tebrikler! Çalışma Tamamlandı
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Seçilen havuzdaki tüm kelimeleri başarıyla tekrarladınız.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">Biliyorum</span>
                  <span className="text-lg font-black text-emerald-600">{flashcardSessionStats.know}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">Emin Değilim</span>
                  <span className="text-lg font-black text-amber-600">{flashcardSessionStats.unsure}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">Unuttum</span>
                  <span className="text-lg font-black text-rose-600">{flashcardSessionStats.forgot}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setFlashcardIndex(0);
                    setIsCardFlipped(false);
                    setFlashcardCompleted(false);
                    setFlashcardSessionStats({ know: 0, unsure: 0, forgot: 0 });
                  }}
                  className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-black text-xs shadow-md transition-all"
                >
                  Bu Havuzu Tekrar Çalış
                </button>
                <button
                  onClick={() => setSubMode('cards')}
                  className="w-full py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  Kelime Listesine Dön
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              Bu havuzda şu anda çalışılacak kelime bulunmamaktadır.
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SUB-MODE: KELİME TESTİ (QUIZ) — 8 FARKLI SORU TİPİ
      ========================================================================== */}
      {subMode === 'quiz' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6 animate-fadeIn">
          {/* Quiz Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Kelime Testi (8 Soru Tipi)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Çoktan seçmeli, eş/zıt anlam, bağlam içi ve YDS formatında kelime soruları.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Soru {quizIndex + 1} / {quizQuestions.length}
              </span>
              <button
                onClick={() => setIsQuizConfigOpen(!isQuizConfigOpen)}
                className="flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              >
                <Filter className="w-3.5 h-3.5" /> Ayarlar
              </button>
            </div>
          </div>

          {/* Quiz Settings Drawer */}
          {isQuizConfigOpen && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3 animate-fadeIn text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  Yeni Test Başlat:
                </span>
                <button
                  onClick={() => setIsQuizConfigOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span>Soru Sayısı:</span>
                {[10, 20, 50].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => {
                      setQuizCountSetting(cnt);
                      startQuiz('all', cnt);
                      setIsQuizConfigOpen(false);
                    }}
                    className={`px-3 py-1 rounded-xl font-bold ${
                      quizCountSetting === cnt
                        ? 'bg-brand-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {cnt} Soru
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Quiz Question */}
          {!quizFinished && quizQuestions.length > 0 && (
            <div className="max-w-2xl mx-auto space-y-5">
              {/* Question Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-900">
                  {quizQuestions[quizIndex].typeLabelTr}
                </span>

                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="text-emerald-600">{quizScore.correct} Doğru</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-rose-600">{quizScore.incorrect} Yanlış</span>
                </div>
              </div>

              {/* Stem & Context */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-relaxed">
                  {quizQuestions[quizIndex].stem}
                </h4>
                {quizQuestions[quizIndex].secondaryContext && (
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line italic">
                    {quizQuestions[quizIndex].secondaryContext}
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {quizQuestions[quizIndex].options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrect = opt.isCorrect;

                  let optClass =
                    'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-brand-400';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optClass =
                        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optClass =
                        'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';
                    } else {
                      optClass = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  } else if (isSelected) {
                    optClass = 'border-brand-600 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectQuizOption(opt.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left text-sm flex items-center justify-between transition-all ${optClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-mono font-bold text-xs text-slate-600 dark:text-slate-300">
                          {opt.id}
                        </span>
                        <span className="font-semibold">{opt.text}</span>
                      </div>

                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Pedagogical Feedback */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2 text-xs animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-indigo-900 dark:text-indigo-200">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Çözüm &amp; YDS Pedagojik Analizi:</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {quizQuestions[quizIndex].whyCorrect}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 italic">
                    {quizQuestions[quizIndex].whyDistractorsFail}
                  </p>
                  <p className="text-amber-800 dark:text-amber-300 font-medium">
                    💡 <strong>Sınav İpucu:</strong> {quizQuestions[quizIndex].ydsTip}
                  </p>
                </div>
              )}

              {/* Action Buttons: Submit / Next */}
              <div className="pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={!selectedOptionId}
                    onClick={handleSubmitQuizAnswer}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Cevabı Onayla
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuizQuestion}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {quizIndex + 1 < quizQuestions.length ? 'Sonraki Soruya Geç' : 'Test Sonuçlarını Gör'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Quiz Summary Screen */}
          {quizFinished && (
            <div className="max-w-md mx-auto p-8 rounded-3xl bg-white dark:bg-slate-800 text-center space-y-5 shadow-lg border border-slate-200 dark:border-slate-700 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                  Test Tamamlandı!
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Başarı Yüzdesi: %
                  {Math.round((quizScore.correct / Math.max(1, quizQuestions.length)) * 100)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">Doğru Sayısı</span>
                  <span className="text-2xl font-black text-emerald-600">{quizScore.correct}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">Yanlış Sayısı</span>
                  <span className="text-2xl font-black text-rose-600">{quizScore.incorrect}</span>
                </div>
              </div>

              {missedInQuiz.length > 0 && (
                <div className="text-left p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs">
                  <span className="font-bold text-rose-800 dark:text-rose-300 block mb-1">
                    Tekrar Edilmesi Gereken Kelimeler:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {vocabulary
                      .filter((v) => missedInQuiz.includes(v.id))
                      .map((v) => v.word)
                      .join(', ')}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-2.5">
                {missedInQuiz.length > 0 && (
                  <button
                    onClick={() => startQuiz('errors', missedInQuiz.length)}
                    className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-all"
                  >
                    Hataları Tekrar Test Et ({missedInQuiz.length} Kelime)
                  </button>
                )}
                <button
                  onClick={() => startQuiz('all', quizCountSetting)}
                  className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-black text-xs shadow-md transition-all"
                >
                  Yeni Bir Test Başlat
                </button>
                <button
                  onClick={() => setSubMode('cards')}
                  className="w-full py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  Kelime Listesine Dön
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SUB-MODE: HATALARIM & ZORLANDIĞIM KELİMELER (ERROR ANALYSIS)
      ========================================================================== */}
      {subMode === 'errors' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                Hata Analizi &amp; En Çok Zorlandığım Kelimeler
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sık hata yapılan kelimeleri analiz edin ve tek tıkla hedefli çalışma başlatın.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setFlashcardPoolType('errors');
                  setFlashcardIndex(0);
                  setIsCardFlipped(false);
                  setSubMode('flashcards');
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-all"
              >
                Sadece Hatalarımı Çalış (Flashcard)
              </button>
              <button
                onClick={() => startQuiz('errors', 10)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-all"
              >
                Hatalardan Quiz Çöz
              </button>
            </div>
          </div>

          {filteredVocabulary.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-slate-400 text-sm">
              Tebrikler! Şu anda kayıtlı herhangi bir hatalı veya zor kelime bulunmuyor.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-3">Kelime</th>
                    <th className="p-3">Türkçe Anlam</th>
                    <th className="p-3">Seviye</th>
                    <th className="p-3">Hata Sayısı</th>
                    <th className="p-3">Hata Oranı</th>
                    <th className="p-3">YDS Tuzağı</th>
                    <th className="p-3 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredVocabulary.map((item) => {
                    const state = learningStates.get(item.id);
                    const incorrect = state?.incorrectCount || 0;
                    const total = (state?.correctCount || 0) + incorrect;
                    const errRate = total > 0 ? Math.round((incorrect / total) * 100) : 0;
                    const levelInfo = item.level ? WORD_LEVEL_CONFIG[item.level] : null;

                    return (
                      <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{item.word}</span>
                          <button
                            onClick={(e) => handlePronounce(item.word, e)}
                            className="p-1 rounded text-slate-400 hover:text-brand-600"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                        <td className="p-3 text-slate-700 dark:text-slate-300">
                          {item.meaningsTr.slice(0, 2).join(', ')}
                        </td>
                        <td className="p-3">
                          {levelInfo && (
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${levelInfo.colorClass}`}>
                              {levelInfo.badge}
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-bold text-rose-600 dark:text-rose-400">
                          {incorrect} kez
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-rose-600 dark:text-rose-400">
                            %{errRate}
                          </span>
                        </td>
                        <td className="p-3 text-slate-500 dark:text-slate-400 truncate max-w-xs">
                          {item.ydsTrap ? `${item.word} ≠ ${item.ydsTrap.confusingWord}` : '—'}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => setSelectedItemForDetail(item)}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                          >
                            İncele
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SUB-MODE: FAVORİLERİM
      ========================================================================== */}
      {subMode === 'favorites' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                Favori Kelimelerim ({filteredVocabulary.length})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Yıldızladığınız kelimeleri burada toplayıp özel olarak çalışabilirsiniz.
              </p>
            </div>

            {filteredVocabulary.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setFlashcardPoolType('favorites');
                    setFlashcardIndex(0);
                    setIsCardFlipped(false);
                    setSubMode('flashcards');
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm transition-all"
                >
                  Favorileri Çalış (Flashcard)
                </button>
                <button
                  onClick={() => startQuiz('favorites', filteredVocabulary.length)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-all"
                >
                  Favorilerden Quiz Çöz
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          SEARCH, MULTI-FILTER & SORT BAR (Visible in cards, errors, favorites)
      ========================================================================== */}
      {(subMode === 'cards' || subMode === 'favorites') && (
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="İngilizce kelime, Türkçe anlam, eş anlam veya bağlam ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>

            {/* Sort Order Selector */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-3 py-2.5 rounded-2xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 font-medium"
            >
              <option value="default">Varsayılan Sıralama</option>
              <option value="level_asc">Seviye (1: Temel → 5: İleri)</option>
              <option value="level_desc">Seviye (5: Kritik → 1: Temel)</option>
              <option value="alpha_asc">Alfabetik (A → Z)</option>
              <option value="error_desc">En Çok Yanlış Yapılanlar</option>
              <option value="mastery_desc">Ustalık / Başarı Oranı</option>
            </select>
          </div>

          {/* Filter Pills Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
            {/* 1. Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <option value="all">Tüm Seviyeler (1-5)</option>
              <option value="1">Seviye 1: Temel (A1-A2)</option>
              <option value="2">Seviye 2: Orta (B1)</option>
              <option value="3">Seviye 3: Orta-İleri (B2)</option>
              <option value="4">Seviye 4: İleri (C1)</option>
              <option value="5">Seviye 5: YDS Kritik (C2)</option>
            </select>

            {/* 2. Importance Filter */}
            <select
              value={selectedImportance}
              onChange={(e) => setSelectedImportance(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <option value="all">Tüm Önem Dereceleri</option>
              <option value="must_know">🔴 MUST KNOW (Kesin Çıkar)</option>
              <option value="high_priority">🟠 HIGH PRIORITY (Çok Sık)</option>
              <option value="important">🟡 IMPORTANT (Metinlerde Geçer)</option>
              <option value="normal">⚪ NORMAL (Genel Kelime)</option>
            </select>

            {/* 3. Learning Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <option value="all">Tüm Öğrenme Durumları</option>
              <option value="new">Yeni (Henüz Başlanmadı)</option>
              <option value="learning">Öğreniliyor (1-2 kez doğru)</option>
              <option value="review_needed">Tekrar Gerekiyor (Hata/Zaman)</option>
              <option value="learned">Öğrenildi</option>
              <option value="mastered">Ustalaşıldı (%90+)</option>
              <option value="due">Bugün Tekrar Zamanı Gelenler</option>
            </select>

            {/* 4. Part of Speech Filter */}
            <select
              value={selectedPos}
              onChange={(e) => setSelectedPos(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <option value="all">Tüm Sözcük Türleri</option>
              <option value="verb">Verb (Fiil)</option>
              <option value="noun">Noun (İsim)</option>
              <option value="adjective">Adjective (Sıfat)</option>
              <option value="adverb">Adverb (Zarf)</option>
              <option value="phrasal_verb">Phrasal Verb (Deyimsel Fiil)</option>
              <option value="conjunction">Conjunction (Bağlaç)</option>
            </select>

            {/* 5. Source Filter */}
            <select
              value={selectedSourceType}
              onChange={(e) => setSelectedSourceType(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <option value="all">Tüm Kaynaklar ({vocabulary.length})</option>
              <option value="quizlet">Quizlet Kaynaklı ({totalQuizletWords})</option>
              <option value="pdf">PDF Kaynaklı ({totalPdfWords})</option>
              <option value="csv">CSV Kaynaklı ({totalCsvWords})</option>
              <option value="core">YDS Çekirdek ({Math.max(0, totalCoreWords)})</option>
            </select>
          </div>
        </div>
      )}

      {/* =========================================================================
          VOCABULARY CARDS GRID (Cards / Favorites view)
      ========================================================================== */}
      {(subMode === 'cards' || subMode === 'favorites') && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVocabulary.map((item) => {
            const state = learningStates.get(item.id);
            const mastery = state?.mastery ?? 0;
            const levelInfo = item.level ? WORD_LEVEL_CONFIG[item.level] : null;
            const importanceInfo = item.importance ? WORD_IMPORTANCE_CONFIG[item.importance] : null;
            const statusInfo = state?.status ? WORD_LEARNING_STATUS_CONFIG[state.status] : null;
            const isAdded = addedItems.has(item.id) || !!state;
            const isFav = !!state?.favorite;

            return (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Word, Pronounce, Star Favorite */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                          {item.word}
                        </h3>
                        <button
                          onClick={(e) => handlePronounce(item.word, e)}
                          aria-label={`${item.word} telaffuzunu dinle`}
                          className="p-1 rounded-full text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-slate-400 font-mono block">
                        {item.pronunciation || '/.../'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleFavorite(item.id)}
                      title={isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                      className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isFav
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 dark:text-slate-600 hover:text-amber-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Badges: Level, Importance, Status, POS */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {levelInfo && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${levelInfo.colorClass}`}>
                        {levelInfo.badge}
                      </span>
                    )}
                    {importanceInfo && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${importanceInfo.badgeClass}`}>
                        {importanceInfo.badgeText}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                      {item.partOfSpeech}
                    </span>
                    {statusInfo && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusInfo.colorClass}`}>
                        {statusInfo.labelTr} (%{mastery})
                      </span>
                    )}
                  </div>

                  {/* Turkish Meaning */}
                  <div className="my-2">
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {item.meaningsTr.join(', ')}
                    </p>
                  </div>

                  {/* Example Sentence */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 my-2 text-xs text-slate-700 dark:text-slate-300">
                    <p className="italic font-medium text-slate-800 dark:text-slate-200">
                      "{item.example}"
                    </p>
                    {item.exampleTr && (
                      <p className="text-slate-400 mt-1">{item.exampleTr}</p>
                    )}
                  </div>

                  {/* Word Family Preview */}
                  {item.wordFamily && (item.wordFamily.verb || item.wordFamily.noun || item.wordFamily.adjective) && (
                    <div className="p-2 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100/60 dark:border-indigo-900/40 text-[10px] text-indigo-900 dark:text-indigo-200 space-y-0.5 mb-2">
                      <span className="font-bold flex items-center gap-1 text-[9px] uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                        <Layers className="w-3 h-3" /> Word Family:
                      </span>
                      <div className="flex flex-wrap gap-x-2 text-[10px]">
                        {item.wordFamily.verb && <span>v: {item.wordFamily.verb}</span>}
                        {item.wordFamily.noun && <span>n: {item.wordFamily.noun}</span>}
                        {item.wordFamily.adjective && <span>adj: {item.wordFamily.adjective}</span>}
                        {item.wordFamily.adverb && <span>adv: {item.wordFamily.adverb}</span>}
                      </div>
                    </div>
                  )}

                  {/* YDS Trap Preview */}
                  {item.ydsTrap && (
                    <div className="p-2 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40 text-[10px] text-rose-900 dark:text-rose-200 space-y-0.5 mb-2">
                      <div className="flex items-center gap-1 font-bold text-[9px] uppercase tracking-wider text-rose-700 dark:text-rose-300">
                        <AlertTriangle className="w-3 h-3 text-rose-500" />
                        <span>YDS Tuzağı:</span>
                        <span className="font-mono">{item.word} ≠ {item.ydsTrap.confusingWord}</span>
                      </div>
                      <p className="line-clamp-1">{item.ydsTrap.differenceTr}</p>
                    </div>
                  )}

                  {/* Synonyms & Collocations */}
                  <div className="space-y-1 text-xs">
                    {item.synonyms && item.synonyms.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Eş Anlam: </span>
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {item.synonyms.slice(0, 3).join(', ')}
                        </span>
                      </div>
                    )}
                    {item.collocations && item.collocations.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Eşdizim: </span>
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {item.collocations.slice(0, 2).join(' • ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Detail Modal & Review Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase truncate max-w-[100px]" title={item.source}>
                    {item.source}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedItemForDetail(item)}
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      Detay
                    </button>
                    <button
                      onClick={(e) => handleAddToReview(item, e)}
                      disabled={isAdded}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isAdded
                          ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 cursor-default'
                          : 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 hover:bg-brand-100'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Listemde
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="w-3.5 h-3.5" /> Tekrara Ekle
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {(subMode === 'cards' || subMode === 'favorites') && filteredVocabulary.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Arama kriterlerinize uygun kelime bulunamadı.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Filtreleri sıfırlayarak tüm kelime veritabanını görüntüleyebilirsiniz.
          </p>
        </div>
      )}

      {/* Collapsible Source Audit Panel */}
      {isAuditOpen && (
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-600" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Kaynak İzlenebilirlik &amp; Bütünlük Denetimi (Source Provenance Audit)
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Kayıtlı Kaynak: {sources.length}
            </span>
          </div>

          {sources.length === 0 ? (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-center text-xs text-slate-500">
              Henüz harici bir Quizlet, PDF veya CSV kaynağı içe aktarılmadı.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-2.5">Kaynak Başlığı</th>
                    <th className="p-2.5">Tür</th>
                    <th className="p-2.5">Keşfedilen / İşlenen Set</th>
                    <th className="p-2.5">Aktarılan Kelime</th>
                    <th className="p-2.5">Çakışma / Birleşen</th>
                    <th className="p-2.5">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {sources.map((src) => {
                    const completeness = calculateSourceCompleteness(src);
                    return (
                      <tr key={src.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-slate-900 dark:text-slate-100">
                          {src.title}
                          {src.url && (
                            <span className="block text-[10px] font-normal text-slate-400 truncate max-w-xs">
                              {src.url}
                            </span>
                          )}
                        </td>
                        <td className="p-2.5 uppercase font-mono text-[10px]">{src.type}</td>
                        <td className="p-2.5">
                          {src.discoveredSetCount} / {src.processedSetCount}
                          {!completeness.isComplete && (
                            <span className="block text-[10px] text-amber-600 dark:text-amber-400 font-bold">
                              {completeness.messageTr}
                            </span>
                          )}
                        </td>
                        <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">
                          {src.importedItemCount}
                        </td>
                        <td className="p-2.5 text-slate-500">{src.duplicateCount}</td>
                        <td className="p-2.5">
                          {src.status === 'completed' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                              Tamamlandı
                            </span>
                          )}
                          {src.status === 'access_failed' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                              Erişim Engellendi (WAF)
                            </span>
                          )}
                          {src.status === 'partially_completed' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                              Kısmen Tamamlandı
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Visual Memory Detail Modal */}
      {selectedItemForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg">
            <button
              onClick={() => setSelectedItemForDetail(null)}
              aria-label="Kapat"
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <VisualMemoryCard vocab={selectedItemForDetail} />
          </div>
        </div>
      )}

      {/* Multi-Source Vocabulary Import Modal */}
      <VocabularyImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        existingVocabulary={vocabulary}
        onImportComplete={() => {
          onRefreshData();
          loadSources();
          setIsImportModalOpen(false);
        }}
      />

      {/* Admin Audit & Diagnostics Dashboard Modal */}
      <AuditDashboardModal
        isOpen={isAuditDashboardOpen}
        onClose={() => setIsAuditDashboardOpen(false)}
        vocabulary={vocabulary}
        sources={sources}
      />
    </div>
  );
};
