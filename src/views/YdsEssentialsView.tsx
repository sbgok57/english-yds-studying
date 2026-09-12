import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Clock,
  Search,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  HelpCircle,
  Zap,
} from 'lucide-react';
import {
  YDS_EXAM_INFO,
  YDT_EXAM_INFO,
  GOLDEN_RULES_50,
  QUESTION_TYPE_GUIDES,
  EXAM_STRATEGIES,
} from '../data/ydsEssentialsData';

interface YdsEssentialsViewProps {
  onNavigateToPractice?: (category?: string) => void;
}

type MainTab = 'exam_logic' | 'golden_rules' | 'question_guides' | 'strategies';

export const YdsEssentialsView: React.FC<YdsEssentialsViewProps> = ({
  onNavigateToPractice,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<MainTab>('golden_rules');

  // Golden Rules state
  const [ruleSearch, setRuleSearch] = useState('');
  const [selectedRuleCat, setSelectedRuleCat] = useState<string>('all');
  const [expandedRuleId, setExpandedRuleId] = useState<string | null>(null);

  // Question Guides state
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>(
    QUESTION_TYPE_GUIDES[0].category
  );
  const [showMiniSolution, setShowMiniSolution] = useState<boolean>(false);

  // Filtered Rules
  const filteredRules = useMemo(() => {
    return GOLDEN_RULES_50.filter((r) => {
      const matchCat =
        selectedRuleCat === 'all' || r.category === selectedRuleCat;
      const q = ruleSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        r.titleTr.toLowerCase().includes(q) ||
        r.explanationTr.toLowerCase().includes(q) ||
        r.exampleEn.toLowerCase().includes(q) ||
        (r.formula && r.formula.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [ruleSearch, selectedRuleCat]);

  const currentQuestionGuide = useMemo(() => {
    return (
      QUESTION_TYPE_GUIDES.find((g) => g.category === selectedQuestionType) ||
      QUESTION_TYPE_GUIDES[0]
    );
  }, [selectedQuestionType]);

  const ruleCategories = [
    { id: 'all', label: 'Tümü (50+ Kural)' },
    { id: 'Tense & Time', label: 'Zamanlar (Tense)' },
    { id: 'Connectors', label: 'Bağlaçlar' },
    { id: 'Modals', label: 'Modallar' },
    { id: 'Relative & Noun Clauses', label: 'Cümlecikler' },
    { id: 'Reductions & Inversion', label: 'Kısaltma & Devriklik' },
    { id: 'Prepositions', label: 'Edatlar' },
    { id: 'Exam Strategy', label: 'Sınav Taktikleri' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 animate-fadeIn">
      {/* Hero Header with Rainbow Accent */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-brand-950 p-6 sm:p-8 text-white shadow-2xl border border-indigo-800/40 border-rainbow-top">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              YDS / YDT Master Akademi
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              YDS / YDT Altın Kurallar &amp; Taktikler
            </h1>
            <p className="text-indigo-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              ÖSYM sınav mantığı, 50+ Altın Kural, 15 soru türünün çözüm taktikleri,
              çeldirici şık tuzakları ve adım adım çözümlü mini örnekler.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:self-center">
            {onNavigateToPractice && (
              <button
                onClick={() => onNavigateToPractice()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                Soru Çözümüne Geç
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 overflow-x-auto pb-1">
        {[
          { id: 'golden_rules', label: '50+ Altın Kural', icon: BookOpen },
          { id: 'question_guides', label: '15 Soru Türü: Nasıl Çözülür?', icon: Lightbulb },
          { id: 'exam_logic', label: 'Sınav Mantığı (YDS vs YDT)', icon: HelpCircle },
          { id: 'strategies', label: 'Zaman & Çeldirici Stratejisi', icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as MainTab)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: 50+ ALTIN KURAL */}
      {activeSubTab === 'golden_rules' && (
        <div className="space-y-6">
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Kural veya formül ara..."
                value={ruleSearch}
                onChange={(e) => setRuleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
              {ruleCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedRuleCat(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedRuleCat === c.id
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rules List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.map((rule) => {
              const isExpanded = expandedRuleId === rule.id;
              return (
                <div
                  key={rule.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-300 dark:hover:border-brand-700 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 font-bold text-[11px] border border-brand-200 dark:border-brand-800">
                        Kural #{rule.ruleNumber} • {rule.category}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                      {rule.titleTr}
                    </h3>

                    {rule.formula && (
                      <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold text-brand-700 dark:text-brand-300">
                        {rule.formula}
                      </div>
                    )}

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {rule.explanationTr}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded ? (
                    <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs animate-fadeIn">
                      <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                          <CheckCircle className="w-3.5 h-3.5" /> Örnek Kullanım
                        </div>
                        <p className="italic font-medium text-slate-900 dark:text-slate-100">
                          "{rule.exampleEn}"
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                          {rule.exampleTr}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                          <ShieldAlert className="w-3.5 h-3.5" /> ÖSYM Çeldirici Tuzağı
                        </div>
                        <p className="leading-relaxed">{rule.examTrapTr}</p>
                      </div>
                    </div>
                  ) : null}

                  <button
                    onClick={() => setExpandedRuleId(isExpanded ? null : rule.id)}
                    className="pt-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1 transition-colors self-start"
                  >
                    {isExpanded ? (
                      <>
                        Daha Az Göster <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Örnek ve ÖSYM Tuzağını Gör <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: 15 SORU TÜRÜ: NASIL ÇÖZÜLÜR? */}
      {activeSubTab === 'question_guides' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Types List */}
          <div className="lg:col-span-1 space-y-1.5 max-h-[750px] overflow-y-auto pr-1">
            {QUESTION_TYPE_GUIDES.map((guide) => {
              const isSelected = selectedQuestionType === guide.category;
              return (
                <button
                  key={guide.category}
                  onClick={() => {
                    setSelectedQuestionType(guide.category);
                    setShowMiniSolution(false);
                  }}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-brand-500 text-white border-brand-600 shadow-md shadow-brand-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="truncate">{guide.titleTr}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-brand-600 text-brand-100'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {guide.questionCountYds} Soru
                  </span>
                </button>
              );
            })}
          </div>

          {/* Guide Details */}
          <div className="lg:col-span-3 space-y-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
                    {currentQuestionGuide.titleTr}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    YDS Soru Sayısı: <strong>{currentQuestionGuide.questionCountYds}</strong> • İdeal Süre:{' '}
                    <strong>{currentQuestionGuide.timeAllocationMinutes} Dakika</strong>
                  </p>
                </div>

                {onNavigateToPractice && (
                  <button
                    onClick={() => onNavigateToPractice(currentQuestionGuide.category)}
                    className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow transition-colors flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Bu Türden Soru Çöz
                  </button>
                )}
              </div>

              {/* 1. Nasıl Çözülür? */}
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Nasıl Çözülür? (Adım Adım Metot)
                </h3>
                <div className="space-y-2">
                  {currentQuestionGuide.howToSolveTr.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Hızlı Taktikler & Sık Yapılan Hatalar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
                  <h4 className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <Zap className="w-3.5 h-3.5" /> Hızlı Taktikler (Fast Tactics)
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900 dark:text-emerald-200">
                    {currentQuestionGuide.fastTacticsTr.map((tac, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{tac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 space-y-2">
                  <h4 className="text-xs font-extrabold text-rose-800 dark:text-rose-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <AlertTriangle className="w-3.5 h-3.5" /> En Sık Yapılan Hatalar
                  </h4>
                  <ul className="space-y-1.5 text-xs text-rose-900 dark:text-rose-200">
                    {currentQuestionGuide.frequentMistakesTr.map((mis, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{mis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Çözümlü Mini Örnek */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    Çözümlü Mini Örnek (ÖSYM Formatı)
                  </h3>
                  <button
                    onClick={() => setShowMiniSolution(!showMiniSolution)}
                    className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                  >
                    {showMiniSolution ? 'Çözümü Gizle' : 'Çözümü Göster'}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
                  <p className="text-xs sm:text-sm font-medium leading-relaxed font-sans">
                    {currentQuestionGuide.miniExample.stemEn}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {currentQuestionGuide.miniExample.options.map((opt) => (
                      <div
                        key={opt.label}
                        className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 border ${
                          showMiniSolution &&
                          opt.label === currentQuestionGuide.miniExample.correctAnswer
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold'
                            : 'bg-slate-800 border-slate-700 text-slate-200'
                        }`}
                      >
                        <span className="w-5 h-5 rounded bg-slate-700 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                          {opt.label}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {showMiniSolution && (
                  <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs space-y-3 animate-fadeIn">
                    <div className="space-y-1">
                      <span className="font-bold text-indigo-900 dark:text-indigo-200 block text-xs uppercase tracking-wider">
                        ✓ Doğru Cevap: {currentQuestionGuide.miniExample.correctAnswer} — Adım Adım Çözüm:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentQuestionGuide.miniExample.stepByStepSolutionTr}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-indigo-200/60 dark:border-indigo-800/60">
                      <span className="font-bold text-rose-700 dark:text-rose-400 block text-[11px] uppercase tracking-wider">
                        Çeldiriciler Neden Yanlış?
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                        {currentQuestionGuide.miniExample.whyDistractorsFailTr}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SINAV MANTIĞI (YDS vs YDT) */}
      {activeSubTab === 'exam_logic' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YDS Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg">
                  YDS
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    {YDS_EXAM_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400">Akademik & Kamu Odaklı Sınav</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400 block">Soru Sayısı:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {YDS_EXAM_INFO.questionCount} Soru
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400 block">Sınav Süresi:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {YDS_EXAM_INFO.durationMinutes} Dakika (2.25 dk/soru)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold">
                  ✓ {YDS_EXAM_INFO.penaltyFormula}
                </div>
                <p>
                  <strong>Puanlama:</strong> {YDS_EXAM_INFO.scoringBase}
                </p>
                <p>
                  <strong>Hedef Kitle:</strong> {YDS_EXAM_INFO.targetAudience}
                </p>
                <p>
                  <strong>Dil Profili:</strong> {YDS_EXAM_INFO.questionStyle}
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 leading-relaxed">
                  <strong>Taktik Tavsiye:</strong> {YDS_EXAM_INFO.tacticalAdvice}
                </div>
              </div>
            </div>

            {/* YDT Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-lg">
                  YDT
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    {YDT_EXAM_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400">Üniversite Lisans Giriş Sınavı</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400 block">Soru Sayısı:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {YDT_EXAM_INFO.questionCount} Soru
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400 block">Sınav Süresi:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {YDT_EXAM_INFO.durationMinutes} Dakika (1.5 dk/soru)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-bold">
                  ⚠️ {YDT_EXAM_INFO.penaltyFormula}
                </div>
                <p>
                  <strong>Puanlama:</strong> {YDT_EXAM_INFO.scoringBase}
                </p>
                <p>
                  <strong>Hedef Kitle:</strong> {YDT_EXAM_INFO.targetAudience}
                </p>
                <p>
                  <strong>Dil Profili:</strong> {YDT_EXAM_INFO.questionStyle}
                </p>
                <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200 leading-relaxed">
                  <strong>Taktik Tavsiye:</strong> {YDT_EXAM_INFO.tacticalAdvice}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: STRATEJİ & ZAMAN */}
      {activeSubTab === 'strategies' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXAM_STRATEGIES.map((strat) => (
              <div
                key={strat.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-wider border border-indigo-200 dark:border-indigo-800">
                    {strat.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                    {strat.titleTr}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {strat.descriptionTr}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    {strat.actionPointsTr.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
