import React, { useState, useEffect } from 'react';
import { UserProgress, YdsAttempt, VocabularyItem } from '../types';
import {
  YdsQuestionCategory,
  YdsMockExam,
  ALL_PRACTICE_CATEGORIES,
} from '../types/yds';
import { getMockExamList, generateMockExam } from '../services/mockExamGenerator';
import { YdsModulePracticeScreen } from './yds/YdsModulePracticeScreen';
import { MockExamScreen } from './yds/MockExamScreen';
import { MockExamResultScreen } from './yds/MockExamResultScreen';
import { ScientificReadingView } from './yds/ScientificReadingView';
import { RealExamsArchiveScreen } from './yds/RealExamsArchiveScreen';
import { dbService } from '../services/db';
import { VisualMemoryCard } from '../components/common/VisualMemoryCard';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Layers,
  Award,
  Play,
  CheckCircle2,
  Clock,
  Filter,
  Search,
  Archive,
} from 'lucide-react';

interface YdsViewProps {
  userProgress?: UserProgress;
  onRefreshProgress: () => void;
  allVocabulary?: VocabularyItem[];
}

export const YdsView: React.FC<YdsViewProps> = ({
  onRefreshProgress,
  allVocabulary = [],
}) => {
  // Hub sub-tabs: 'modules' | 'mock_exams' | 'scientific_reading' | 'vocab_bank' | 'real_exams'
  const [activeHubTab, setActiveHubTab] = useState<'modules' | 'mock_exams' | 'scientific_reading' | 'vocab_bank' | 'real_exams'>('modules');

  // Navigation states
  const [viewState, setViewState] = useState<'hub' | 'module_practice' | 'mock_exam' | 'exam_result' | 'scientific_reading'>('hub');
  const [selectedModuleCategory, setSelectedModuleCategory] = useState<YdsQuestionCategory>('vocabulary');
  const [activeExam, setActiveExam] = useState<YdsMockExam | null>(null);
  const [latestAttempt, setLatestAttempt] = useState<YdsAttempt | null>(null);

  // Mock exams catalog & filters
  const [examCatalog] = useState(getMockExamList(100));
  const [examFilter, setExamFilter] = useState<'all' | 'not_started' | 'completed' | 'B2' | 'C1_YDS'>('all');
  const [completedExamIds, setCompletedExamIds] = useState<Set<string>>(new Set());
  const [examScores, setExamScores] = useState<Record<string, number>>({});

  // Vocabulary bank filters
  const [vocabSearch, setVocabSearch] = useState('');

  // Load existing attempts from IndexedDB to reflect real completed mock exams
  useEffect(() => {
    const loadAttempts = async () => {
      try {
        const attempts: YdsAttempt[] = await dbService.getAllYdsAttempts();
        const completed = new Set<string>();
        const scores: Record<string, number> = {};

        attempts.forEach((att: YdsAttempt) => {
          if (att.examId) {
            completed.add(att.examId);
            if (!scores[att.examId] || att.score > scores[att.examId]) {
              scores[att.examId] = att.score;
            }
          }
        });

        setCompletedExamIds(completed);
        setExamScores(scores);
      } catch (err) {
        console.warn('Failed to load past YDS attempts:', err);
      }
    };

    loadAttempts();
  }, [viewState]);

  // Start a specific question module practice
  const handleStartModulePractice = (cat: YdsQuestionCategory) => {
    setSelectedModuleCategory(cat);
    setViewState('module_practice');
  };

  // Start a full 80-question mock exam
  const handleStartMockExam = (examSummary: { id: string }) => {
    const examIndex = parseInt(examSummary.id.replace('exam-', ''), 10) || 1;
    const fullExam = generateMockExam(examIndex);
    setActiveExam(fullExam);
    setViewState('mock_exam');
  };

  // Filtered mock exams
  const filteredExams = examCatalog.filter((ex) => {
    const isDone = completedExamIds.has(ex.id);
    if (examFilter === 'not_started') return !isDone;
    if (examFilter === 'completed') return isDone;
    if (examFilter === 'B2') return ex.difficulty === 'B2' || ex.difficulty === 'B2+';
    if (examFilter === 'C1_YDS') return ex.difficulty === 'C1_YDS';
    return true;
  });

  // Filtered high-frequency vocabulary for YDS
  const ydsVocabList = allVocabulary.filter((v) => {
    const matchesSearch =
      v.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      v.meaningsTr.some((m) => m.toLowerCase().includes(vocabSearch.toLowerCase()));
    return matchesSearch;
  });

  // --- SUB-SCREEN ROUTING ---
  if (viewState === 'module_practice') {
    return (
      <YdsModulePracticeScreen
        category={selectedModuleCategory}
        onBack={() => setViewState('hub')}
        onRefreshData={onRefreshProgress}
      />
    );
  }

  if (viewState === 'mock_exam' && activeExam) {
    return (
      <MockExamScreen
        exam={activeExam}
        onFinish={(attempt) => {
          setLatestAttempt(attempt);
          setViewState('exam_result');
          onRefreshProgress();
        }}
        onExit={() => setViewState('hub')}
      />
    );
  }

  if (viewState === 'exam_result' && activeExam && latestAttempt) {
    return (
      <MockExamResultScreen
        exam={activeExam}
        attempt={latestAttempt}
        onExit={() => setViewState('hub')}
        onRefreshData={onRefreshProgress}
      />
    );
  }

  if (viewState === 'scientific_reading') {
    return (
      <ScientificReadingView
        onBack={() => setViewState('hub')}
        onRefreshData={onRefreshProgress}
      />
    );
  }

  // --- MAIN YDS STUDY CENTER HUB ---
  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Top Welcome & Mode Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-brand-900 to-slate-900 text-white shadow-xl border border-indigo-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-brand-200">
            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
            <span>Resmi Sınav Formatında Hazırlık</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            YDS &amp; YDT Çalışma Merkezi
          </h2>
          <p className="text-xs sm:text-sm text-brand-200/90 max-w-2xl leading-relaxed">
            10 ayrı soru tipi çalışma modülü, 100+ tam 80 soruluk deneme sınavı, online optik form, 180 dakika zaman sayacı ve bilimsel okuma kütüphanesi ile kapsamlı sınav hazırlığı.
          </p>
        </div>

        {/* Quick Stats Box */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur border border-white/10 p-4 rounded-2xl shrink-0">
          <div className="text-center">
            <span className="text-2xl font-black text-amber-300">
              {completedExamIds.size}
            </span>
            <span className="text-[10px] text-slate-300 block font-medium">
              Tamamlanan Deneme
            </span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <span className="text-2xl font-black text-emerald-400">10 / 10</span>
            <span className="text-[10px] text-slate-300 block font-medium">
              Soru Modülü
            </span>
          </div>
        </div>
      </div>

      {/* Hub Tab Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={() => setActiveHubTab('modules')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeHubTab === 'modules'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          10 Soru Tipi Modülü
        </button>

        <button
          onClick={() => setActiveHubTab('mock_exams')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeHubTab === 'mock_exams'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Award className="w-4 h-4" />
          100+ Tam Deneme Sınavı
        </button>

        <button
          onClick={() => setActiveHubTab('real_exams')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeHubTab === 'real_exams'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Archive className="w-4 h-4" />
          2013–2026 YDS Resmi Arşiv
        </button>

        <button
          onClick={() => setActiveHubTab('scientific_reading')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeHubTab === 'scientific_reading'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Bilimsel Okuma Kütüphanesi
        </button>

        <button
          onClick={() => setActiveHubTab('vocab_bank')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeHubTab === 'vocab_bank'
              ? 'bg-brand-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          YDS Kelime Bankası
        </button>
      </div>

      {/* --- TAB 1: 15 SEPARATE QUESTION PRACTICE MODULES --- */}
      {activeHubTab === 'modules' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
              YDS / YDT Soru Kategorileri (15 Bağımsız Modül &amp; 580+ Soru)
            </h3>
            <span className="text-xs text-slate-500">
              Her modülde YDS standardında soru ve ayrıntılı çeldirici analizleri
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_PRACTICE_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.category}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {cat.targetCount}+ Soru Havuzu
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                    {cat.nameTr}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.descriptionTr}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    Seviye: {cat.difficultyRange}
                  </span>
                  <button
                    onClick={() => handleStartModulePractice(cat.category)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Çalışmaya Başla
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 2: 100+ FULL YDS MOCK EXAMS --- */}
      {activeHubTab === 'mock_exams' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Deneme Filtresi:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                onClick={() => setExamFilter('all')}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                  examFilter === 'all'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Tümü ({examCatalog.length})
              </button>
              <button
                onClick={() => setExamFilter('not_started')}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                  examFilter === 'not_started'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Başlanmamış ({examCatalog.length - completedExamIds.size})
              </button>
              <button
                onClick={() => setExamFilter('completed')}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                  examFilter === 'completed'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Tamamlananlar ({completedExamIds.size})
              </button>
              <button
                onClick={() => setExamFilter('C1_YDS')}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                  examFilter === 'C1_YDS'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                C1 / Akademik Seviye
              </button>
            </div>
          </div>

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredExams.map((ex) => {
              const isCompleted = completedExamIds.has(ex.id);
              const score = examScores[ex.id];

              return (
                <div
                  key={ex.id}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        {ex.code}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase">
                        {ex.difficulty}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                      {ex.title}
                    </h4>

                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>80 Soru</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 180 Dakika
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    {isCompleted ? (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Puan: {score ? score.toFixed(1) : 'Tamamlandı'}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">Henüz Çözülmedi</span>
                    )}

                    <button
                      onClick={() => handleStartMockExam(ex)}
                      className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      {isCompleted ? 'Tekrar Çöz' : 'Sınavı Başlat'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- TAB: 2013-2026 REAL EXAMS ARCHIVE --- */}
      {activeHubTab === 'real_exams' && (
        <RealExamsArchiveScreen
          onStartExamByYear={(year, title) => {
            const exam = generateMockExam(1);
            setActiveExam({ ...exam, title: `${year} Formatında ${title}` });
            setViewState('mock_exam');
          }}
        />
      )}

      {/* --- TAB 3: SCIENTIFIC READING LIBRARY --- */}
      {activeHubTab === 'scientific_reading' && (
        <ScientificReadingView
          onBack={() => setActiveHubTab('modules')}
          onRefreshData={onRefreshProgress}
        />
      )}

      {/* --- TAB 4: 2013-2026 YDS VOCABULARY BANK --- */}
      {activeHubTab === 'vocab_bank' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Search bar */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="YDS kelime bankasında İngilizce veya Türkçe ara..."
              value={vocabSearch}
              onChange={(e) => setVocabSearch(e.target.value)}
              className="flex-1 bg-transparent text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
            />
            <span className="text-xs text-slate-400 font-medium">
              {ydsVocabList.length} Kelime
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ydsVocabList.slice(0, 30).map((v) => (
              <VisualMemoryCard key={v.id} vocab={v} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
