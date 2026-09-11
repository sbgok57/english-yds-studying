import React, { useState, useMemo } from 'react';
import { SCIENTIFIC_READINGS, evaluateOpenEndedAnswer } from '../../data/scientificReadings';
import { ScientificReadingVocabulary, OpenEndedReadingQuestion, OpenEndedEvaluationResult } from '../../types/yds';
import { VocabularyItem, LearningState } from '../../types/vocabulary';
import { dbService } from '../../services/db';
import { createInitialLearningState } from '../../services/spacedRepetition';
import { speechService } from '../../services/speech';
import {
  BookOpen,
  ArrowLeft,
  Volume2,
  BookmarkPlus,
  Check,
  CheckCircle2,
  XCircle,
  Sparkles,
  Clock,
  Edit3,
  Search,
} from 'lucide-react';

interface ScientificReadingViewProps {
  onBack: () => void;
  onRefreshData?: () => void;
}

export const ScientificReadingView: React.FC<ScientificReadingViewProps> = ({
  onBack,
  onRefreshData,
}) => {
  const [selectedReadingId, setSelectedReadingId] = useState<string | null>(null);
  const [addedVocab, setAddedVocab] = useState<Record<string, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [openEndedInputs, setOpenEndedInputs] = useState<Record<string, string>>({});
  const [openEndedResults, setOpenEndedResults] = useState<Record<string, OpenEndedEvaluationResult>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const activeReading = SCIENTIFIC_READINGS.find((r) => r.id === selectedReadingId);

  const handleAddWordToSrs = async (v: ScientificReadingVocabulary) => {
    if (addedVocab[v.word]) return;

    const vocabId = `vocab-srs-${v.word.toLowerCase().replace(/[^a-z0-9]/g, '')}-${Date.now()}`;
    const newVocabItem: VocabularyItem = {
      id: vocabId,
      word: v.word,
      displayWord: v.word,
      sourceText: v.word,
      meaningsTr: [v.meaningTr],
      partOfSpeech: v.partOfSpeech,
      example: v.exampleSentence,
      synonyms: [],
      antonyms: [],
      collocations: v.collocations,
      visualMnemonic: v.visualMnemonic,
      pronunciation: v.pronunciation,
      difficulty: 'YDS',
      source: `Reading: ${activeReading?.title || 'Scientific Reading'}`,
      sourceRefs: [
        {
          sourceId: activeReading?.id || 'reading',
          sourceType: 'manual',
          sourceName: activeReading?.title,
          importedAt: new Date().toISOString(),
        },
      ],
      verifiedYDSOccurrence: true,
    };

    const initState: LearningState = createInitialLearningState(vocabId);

    await dbService.saveVocabularyItem(newVocabItem);
    await dbService.saveLearningState(initState);

    setAddedVocab((prev) => ({ ...prev, [v.word]: true }));
    if (onRefreshData) onRefreshData();
  };

  const handleSelectAnswer = (qId: string, label: string) => {
    if (submittedAnswers[qId]) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: label }));
  };

  const handleSubmitAnswer = (qId: string) => {
    setSubmittedAnswers((prev) => ({ ...prev, [qId]: true }));
  };

  const handleEvaluateOpenEnded = (q: OpenEndedReadingQuestion) => {
    const input = openEndedInputs[q.id] || '';
    const result = evaluateOpenEndedAnswer(input, q);
    setOpenEndedResults((prev) => ({ ...prev, [q.id]: result }));
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    SCIENTIFIC_READINGS.forEach((r) => set.add(r.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredReadings = useMemo(() => {
    return SCIENTIFIC_READINGS.filter((r) => {
      const matchCat = selectedCategory === 'all' || r.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.summaryTr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.passageEn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!activeReading) {
    return (
      <div className="space-y-6 animate-fadeIn pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> YDS Merkezine Dön
          </button>
          <div className="text-left sm:text-right">
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
              Bilimsel &amp; Akademik Okuma Kütüphanesi
            </h2>
            <p className="text-xs text-slate-500">
              {SCIENTIFIC_READINGS.length} Doğrulanmış Akademik Makale (25+ Disiplin)
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Makale başlığı, Türkçe özet veya İngilizce kavram ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.slice(0, 10).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'Tüm Alanlar' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReadings.map((reading) => (
            <div
              key={reading.id}
              onClick={() => setSelectedReadingId(reading.id)}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 uppercase tracking-wider">
                    {reading.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{reading.readTimeMinutes} dk</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition-colors leading-snug">
                  {reading.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {reading.summaryTr}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>{reading.keyVocabulary.length} Akademik Kelime</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">
                  Metni Oku &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedReadingId(null)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Kütüphaneye Dön
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 uppercase">
            {activeReading.category}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {activeReading.difficulty} Seviyesi
          </span>
        </div>
      </div>

      {/* Reading Passage Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
            {activeReading.title}
          </h2>
          <button
            onClick={() => speechService.speak(activeReading.passageEn)}
            title="Metni Dinle"
            className="p-2.5 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300 hover:bg-brand-100 transition-colors shrink-0"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* English Text */}
        <div className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-serif space-y-4 whitespace-pre-line border-l-4 border-brand-500 pl-4 py-1">
          {activeReading.passageEn}
        </div>

        {/* Turkish Synopsis */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1 text-xs">
          <span className="font-bold text-slate-800 dark:text-slate-200 block">
            🇹🇷 Türkçe Özet &amp; Rehber:
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {activeReading.summaryTr}
          </p>
        </div>
      </div>

      {/* Key Academic Vocabulary (Integrated with SRS) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Metindeki Kritik Kelimeler &amp; SRS Entegrasyonu
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kelimeleri doğrudan kişisel aralıklı tekrar (SRS) kuyruğunuza ekleyebilirsiniz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeReading.keyVocabulary.map((v) => {
            const isAdded = !!addedVocab[v.word];
            return (
              <div
                key={v.word}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <strong className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {v.word}
                      </strong>
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        {v.partOfSpeech}
                      </span>
                    </div>
                    <button
                      onClick={() => speechService.speak(v.word)}
                      className="p-1 text-slate-400 hover:text-brand-600"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs font-bold text-brand-600 dark:text-brand-400 mt-1">
                    {v.meaningTr}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic mt-2">
                    "{v.exampleSentence}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    {v.collocations.slice(0, 2).join(' • ')}
                  </span>
                  <button
                    onClick={() => handleAddWordToSrs(v)}
                    disabled={isAdded}
                    className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      isAdded
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 cursor-default'
                        : 'bg-brand-600 hover:bg-brand-700 text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> SRS'de Ekli
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="w-3.5 h-3.5" /> + SRS'ye Ekle
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reading Comprehension Questions */}
      {activeReading.questions.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-600" />
            Paragrafı Anlama &amp; Çıkarım Soruları
          </h3>

          <div className="space-y-6">
            {activeReading.questions.map((q, idx) => {
              const userSelected = userAnswers[q.id];
              const isSubmitted = submittedAnswers[q.id];
              const isCorrect = userSelected === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {q.stemEn}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = userSelected === opt.label;
                      let cls = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-brand-400 text-slate-800 dark:text-slate-200';

                      if (isSubmitted) {
                        if (opt.label === q.correctAnswer) {
                          cls = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isSelected && !isCorrect) {
                          cls = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
                        } else {
                          cls = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-500';
                        }
                      } else if (isSelected) {
                        cls = 'bg-brand-50 dark:bg-brand-950 border-brand-500 text-brand-900 dark:text-brand-100 font-bold';
                      }

                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSelectAnswer(q.id, opt.label)}
                          disabled={isSubmitted}
                          className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center gap-3 ${cls}`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                            {opt.label}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitAnswer(q.id)}
                      disabled={!userSelected}
                      className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white font-bold text-xs transition-colors"
                    >
                      Cevabı Onayla
                    </button>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-xs animate-fadeIn">
                      <div className="flex items-center gap-1.5 font-bold">
                        {isCorrect ? (
                          <span className="text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Tebrikler, Doğru Cevap: {q.correctAnswer}
                          </span>
                        ) : (
                          <span className="text-rose-600 flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> Yanıtınız Hatalı. Doğru Cevap: {q.correctAnswer}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.whyCorrect}
                      </p>
                      {q.explanationTr && (
                        <p className="text-slate-500 dark:text-slate-400">
                          🇹🇷 {q.explanationTr}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Open-Ended Written Answer Questions */}
      {activeReading.openEndedQuestions && activeReading.openEndedQuestions.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-indigo-500" />
              Açık Uçlu Akademik Yazma &amp; Çıkarım Sorusu
            </h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
              Klavyeyle Cevap Yazma
            </span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sadece çoktan seçmeli değil; cevabınızı doğrudan kendi cümlelerinizle yazıp yapay zeka ve kural tabanlı anlamsal anahtar kelime eşleştirmesiyle anında değerlendirebilirsiniz.
          </p>

          <div className="space-y-6">
            {activeReading.openEndedQuestions.map((oeQ, idx) => {
              const currentInput = openEndedInputs[oeQ.id] || '';
              const evalResult = openEndedResults[oeQ.id];

              return (
                <div
                  key={oeQ.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      W{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {oeQ.questionText}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={currentInput}
                      onChange={(e) => setOpenEndedInputs((prev) => ({ ...prev, [oeQ.id]: e.target.value }))}
                      placeholder="Cevabınızı buraya İngilizce veya Türkçe olarak yazınız (örn. Paragrafta belirtilen kilit kavramlara değininiz)..."
                      className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        Hedef anahtar kavramlar: {oeQ.keyConcepts.slice(0, 4).join(', ')}...
                      </span>
                      <button
                        onClick={() => handleEvaluateOpenEnded(oeQ)}
                        disabled={!currentInput.trim()}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Cevabı Değerlendir
                      </button>
                    </div>
                  </div>

                  {evalResult && (
                    <div
                      className={`p-4 rounded-xl border space-y-3 text-xs animate-fadeIn ${
                        evalResult.status === 'correct'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                          : evalResult.status === 'partially_correct'
                          ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                          : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-1.5">
                          {evalResult.status === 'correct' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : evalResult.status === 'partially_correct' ? (
                            <Sparkles className="w-4 h-4 text-amber-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600" />
                          )}
                          {evalResult.status === 'correct'
                            ? 'Tam Doğru (%100)'
                            : evalResult.status === 'partially_correct'
                            ? 'Kısmen Doğru (%50)'
                            : 'Eksik / Yetersiz (%0)'}
                        </span>
                        <span className="text-[11px] opacity-80">Skor: {evalResult.score}/100</span>
                      </div>

                      <p className="leading-relaxed font-medium">{evalResult.feedback}</p>

                      {evalResult.matchedConcepts.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] uppercase font-bold opacity-75">Tespit Edilen Kavramlar:</span>
                          {evalResult.matchedConcepts.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                            >
                              ✓ {c}
                            </span>
                          ))}
                        </div>
                      )}

                      {evalResult.missingConcepts.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] uppercase font-bold opacity-75">Eksik Kalan Fikirler:</span>
                          {evalResult.missingConcepts.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            >
                              ○ {c}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-2 border-t border-current/10 space-y-1">
                        <strong className="block text-[11px]">Örnek Akademik Cevap:</strong>
                        <p className="italic opacity-90">{evalResult.expectedAnswer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
