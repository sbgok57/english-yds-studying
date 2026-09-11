import React, { useState, useEffect, useCallback } from 'react';
import { VocabularyItem, LearningState, VocabularySource } from '../types';
import { getMasteryLevelInfo } from '../services/mastery';
import { speechService } from '../services/speech';
import { exportVocabularyToCsv } from '../services/csv';
import { dbService } from '../services/db';
import { createInitialLearningState, processReview } from '../services/spacedRepetition';
import { calculateSourceCompleteness } from '../services/importer';
import { VocabularyImportModal } from '../components/VocabularyImportModal';
import { VisualMemoryCard } from '../components/common/VisualMemoryCard';
import { AuditDashboardModal } from '../components/common/AuditDashboardModal';
import { getVisualMemory } from '../services/visualMemory';
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
  Eye,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isAuditDashboardOpen, setIsAuditDashboardOpen] = useState(false);
  const [isVisualQuizOpen, setIsVisualQuizOpen] = useState(false);
  const [quizWordIndex, setQuizWordIndex] = useState(0);
  const [isWordRevealed, setIsWordRevealed] = useState(false);
  const [quizGuessInput, setQuizGuessInput] = useState('');
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<VocabularyItem | null>(null);
  const [sources, setSources] = useState<VocabularySource[]>([]);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

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

  // Filter vocabulary
  const filteredVocabulary = vocabulary.filter((item) => {
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

    const matchesPos = selectedPos === 'all' || item.partOfSpeech === selectedPos;
    const matchesDiff = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;

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

    let matchesStage = true;
    const state = learningStates.get(item.id);
    const stage = state?.learningStage || 'new';

    if (selectedStage === 'due') {
      if (!state) matchesStage = false;
      else {
        const now = new Date().toISOString();
        matchesStage = state.nextReviewAt <= now;
      }
    } else if (selectedStage !== 'all') {
      matchesStage = stage === selectedStage;
    }

    return matchesSearch && matchesPos && matchesDiff && matchesSource && matchesStage;
  });

  const handlePronounce = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    speechService.speak(word, { lang: 'en-US' });
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
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            Akademik Kelime Bankası
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Toplam <strong>{vocabulary.length}</strong> doğrulanmış YDT &amp; YDS kelimesi (Quizlet: {totalQuizletWords}, PDF: {totalPdfWords}, CSV: {totalCsvWords}, Çekirdek: {Math.max(0, totalCoreWords)}).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setIsVisualQuizOpen(true);
              setQuizWordIndex(0);
              setIsWordRevealed(false);
              setQuizGuessInput('');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-indigo-600 hover:opacity-90 text-white shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" /> Görsel Hafıza Testi (What's the word?)
          </button>
          <button
            onClick={() => setIsAuditDashboardOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Teşhis &amp; Denetim Paneli
          </button>
          <button
            onClick={() => setIsAuditOpen(!isAuditOpen)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <Database className="w-3.5 h-3.5 text-brand-600" />
            Kaynaklar ({sources.length})
            {isAuditOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-all shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" /> İçe Aktar
          </button>
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> CSV
          </button>
        </div>
      </div>

      {/* Visual Memory Quiz Modal / Screen */}
      {isVisualQuizOpen && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-brand-950 text-white border border-indigo-700/50 shadow-2xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-extrabold flex items-center gap-2">
                  <span>Görsel Hafıza Testi: "What's the word?"</span>
                </h3>
                <p className="text-xs text-indigo-200">
                  Resim ve bilişsel ipucundan kelimeyi hatırlayın, ardından kartı açıp SRS bilginizi değerlendirin.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-indigo-200">
                {quizWordIndex + 1} / {vocabulary.length}
              </span>
              <button
                onClick={() => setIsVisualQuizOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {vocabulary.length > 0 && (() => {
            const currentItem = vocabulary[quizWordIndex] || vocabulary[0];
            const currentVisual = getVisualMemory(currentItem.word, currentItem.partOfSpeech, currentItem.meaningsTr);
            const currentState = learningStates.get(currentItem.id) || createInitialLearningState(currentItem.id);

            const handleRateQuiz = async (isCorrect: boolean) => {
              try {
                const nextState = processReview(currentState, isCorrect);
                await dbService.saveLearningState(nextState);
                onRefreshData();
              } catch (err) {
                console.warn('SRS update error:', err);
              }
              setQuizWordIndex((prev) => (prev + 1) % vocabulary.length);
              setIsWordRevealed(false);
              setQuizGuessInput('');
            };

            return (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 shrink-0 bg-slate-900/60 rounded-2xl p-2 border border-white/10 overflow-hidden shadow-inner flex items-center justify-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: currentVisual.svgContent }}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="space-y-3 flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/30 text-brand-200 uppercase tracking-wider">
                        {currentItem.partOfSpeech}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 font-mono">
                        {currentVisual.style}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-200">
                        {currentItem.difficulty}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-indigo-200 font-semibold block mb-1">
                        Bilişsel Hafıza İpucu:
                      </span>
                      <p className="text-sm font-bold text-amber-200 leading-snug">
                        "{currentVisual.memoryTip.tr}"
                      </p>
                    </div>

                    {!isWordRevealed ? (
                      <div className="py-2">
                        <span className="text-2xl font-mono tracking-widest text-slate-400 font-black select-none">
                          {currentItem.word.split('').map((c) => (c === ' ' || c === '-' ? c : '•')).join('')}
                        </span>
                        <p className="text-[11px] text-indigo-300 mt-1">
                          Kelime gizlendi. Zihninizde görseli ve anlamı çağrıştırın.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 animate-fadeIn pt-2 border-t border-white/10">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                          <h4 className="text-2xl font-black text-white">{currentItem.word}</h4>
                          <button
                            onClick={() => speechService.speak(currentItem.word)}
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-emerald-300 font-bold">
                          {currentItem.meaningsTr.join(', ')}
                        </p>
                        <p className="text-xs text-slate-300 italic">
                          "{currentItem.example}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {!isWordRevealed ? (
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                      type="text"
                      placeholder="Tahmininizi yazın (isteğe bağlı)..."
                      value={quizGuessInput}
                      onChange={(e) => setQuizGuessInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && setIsWordRevealed(true)}
                      className="flex-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <button
                      onClick={() => setIsWordRevealed(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" /> Kelimeyi Göster
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-3 animate-fadeIn text-center">
                    <span className="text-xs text-indigo-200 font-bold block">
                      Bu kelimeyi doğru hatırladınız mı?
                    </span>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => handleRateQuiz(false)}
                        className="flex-1 py-3 px-4 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <XCircle className="w-4 h-4" /> Hatırlayamadım
                      </button>
                      <button
                        onClick={() => handleRateQuiz(true)}
                        className="flex-1 py-3 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <CheckCircle2 className="w-4 h-4" /> Doğru Hatırladım (+10 XP)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
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
                        <td className="p-2.5 uppercase font-mono text-[10px]">
                          {src.type}
                        </td>
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
                        <td className="p-2.5 text-slate-500">
                          {src.duplicateCount}
                        </td>
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

      {/* Multi-Field Search & Filter Bar */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="İngilizce kelime, Türkçe anlam, eşanlam veya kaynak ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>

        {/* Source filter */}
        <select
          value={selectedSourceType}
          onChange={(e) => setSelectedSourceType(e.target.value)}
          className="px-3 py-2.5 rounded-2xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Kaynaklar ({vocabulary.length})</option>
          <option value="quizlet">Quizlet Kaynaklı ({totalQuizletWords})</option>
          <option value="pdf">PDF Kaynaklı ({totalPdfWords})</option>
          <option value="csv">CSV Kaynaklı ({totalCsvWords})</option>
          <option value="core">YDS Çekirdek ({Math.max(0, totalCoreWords)})</option>
        </select>

        {/* Learning Stage filter */}
        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          className="px-3 py-2.5 rounded-2xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Öğrenme Durumları</option>
          <option value="new">Yeni (%0)</option>
          <option value="familiar">Tanıdık (%20-39)</option>
          <option value="learning">Öğreniliyor (%40-59)</option>
          <option value="strong">Güçlü (%60-79)</option>
          <option value="very_strong">Çok Güçlü (%80-94)</option>
          <option value="mastered">Usta (%95-100)</option>
          <option value="due">Bugün Tekrar Gerekenler</option>
        </select>

        {/* Part of speech filter */}
        <select
          value={selectedPos}
          onChange={(e) => setSelectedPos(e.target.value)}
          className="px-3 py-2.5 rounded-2xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Sözcük Türleri</option>
          <option value="noun">Noun (İsim)</option>
          <option value="verb">Verb (Fiil)</option>
          <option value="adjective">Adjective (Sıfat)</option>
          <option value="adverb">Adverb (Zarf)</option>
          <option value="phrasal_verb">Phrasal Verb (Deyimsel Fiil)</option>
          <option value="conjunction">Conjunction (Bağlaç)</option>
        </select>

        {/* Difficulty filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-3 py-2.5 rounded-2xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Seviyeler</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="YDS">YDS</option>
        </select>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVocabulary.map((item) => {
          const state = learningStates.get(item.id);
          const mastery = state?.mastery ?? 0;
          const levelInfo = getMasteryLevelInfo(mastery);
          const isAdded = addedItems.has(item.id) || !!state;

          return (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Word, Pronunciation, POS badge, Mastery badge */}
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
                      {item.pronunciation}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.partOfSpeech}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${levelInfo.colorClass}`}>
                      {levelInfo.labelTr} (%{mastery})
                    </span>
                  </div>
                </div>

                {/* Turkish Meaning */}
                <div className="my-2.5">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.meaningsTr.join(', ')}
                  </p>
                </div>

                {/* Example Sentence */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 my-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <p className="italic font-medium text-slate-800 dark:text-slate-200">
                    "{item.example}"
                  </p>
                  {item.exampleTr && (
                    <p className="text-slate-400 mt-1">{item.exampleTr}</p>
                  )}
                </div>

                {/* Synonyms & Collocations */}
                <div className="space-y-1.5 text-xs">
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

                {/* Visual Mnemonic & Concept Badge */}
                {item.visualMnemonic && (
                  <div
                    onClick={() => setSelectedItemForDetail(item)}
                    className="mt-3 p-2.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/50 flex items-start gap-2.5 text-[11px] text-amber-900 dark:text-amber-200 cursor-pointer hover:bg-amber-100/80 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 overflow-hidden bg-slate-900/10 dark:bg-slate-800"
                      dangerouslySetInnerHTML={{ __html: getVisualMemory(item.word, item.partOfSpeech, item.meaningsTr).svgContent }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 font-bold text-[10px] text-amber-800 dark:text-amber-300">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Görsel Hafıza & İpucu (Tıkla ve İncele)</span>
                      </div>
                      <p className="line-clamp-2 mt-0.5">{item.visualMnemonic}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions & Provenance */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-400 uppercase truncate max-w-[120px]" title={item.source}>
                  {item.source}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedItemForDetail(item)}
                    className="px-2 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-colors"
                    title="Görsel Hafıza Kartını Aç"
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

      {filteredVocabulary.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Arama kriterlerinize uygun kelime bulunamadı.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Filtreleri sıfırlayarak tüm kelime veritabanını görüntüleyebilirsiniz.
          </p>
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
