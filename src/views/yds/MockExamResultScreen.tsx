import React, { useState } from 'react';
import { YdsAttempt } from '../../types/progress';
import { YdsMockExam, OFFICIAL_YDS_SECTIONS } from '../../types/yds';
import { dbService } from '../../services/db';
import { ErrorRecord } from '../../types/progress';
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowLeft,
  BookmarkPlus,
  Check,
  ChevronDown,
  ChevronUp,
  BarChart2,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

interface MockExamResultScreenProps {
  exam: YdsMockExam;
  attempt: YdsAttempt;
  onExit: () => void;
  onRefreshData?: () => void;
}

export const MockExamResultScreen: React.FC<MockExamResultScreenProps> = ({
  exam,
  attempt,
  onExit,
  onRefreshData,
}) => {
  const [activeReviewSection, setActiveReviewSection] = useState<string>('all');
  const [addedErrors, setAddedErrors] = useState<Record<string, boolean>>({});
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const totalTimeMinutes = Math.round((attempt.timeSpentSeconds || 0) / 60);
  const avgSecondsPerQ = Math.round((attempt.timeSpentSeconds || 0) / (attempt.totalQuestions || 80));

  // Find strongest and weakest sections
  const sectionEntries = Object.entries(attempt.sectionScores || {});
  let strongestSection = { name: '', pct: -1 };
  let weakestSection = { name: '', pct: 101 };

  sectionEntries.forEach(([cat, data]) => {
    const config = OFFICIAL_YDS_SECTIONS.find((s) => s.category === cat);
    const title = config?.nameTr || cat;
    if (data.percentage > strongestSection.pct) {
      strongestSection = { name: title, pct: data.percentage };
    }
    if (data.percentage < weakestSection.pct) {
      weakestSection = { name: title, pct: data.percentage };
    }
  });

  const handleAddQuestionToErrorNotebook = async (qId: string) => {
    const detail = attempt.questionDetails.find((d) => d.questionId === qId);
    const qData = exam.questions.find((q) => q.id === qId);
    if (!detail || !qData || addedErrors[qId]) return;

    const errorRecord: ErrorRecord = {
      id: `err-exam-${qId}-${Date.now()}`,
      itemId: qId,
      itemType: 'yds',
      title: `${exam.code}: Soru ${qData.questionNumber}`,
      targetWordOrRule: qData.category,
      userAnswer: detail.userAnswer || 'Boş',
      correctAnswer: detail.correctAnswer,
      explanation: qData.explanationTr || qData.whyCorrect,
      category: 'reading_comprehension',
      failedAt: new Date().toISOString(),
      reviewedCount: 0,
      mastered: false,
      lastReviewedAt: null,
    };

    await dbService.saveErrorRecord(errorRecord);
    setAddedErrors((prev) => ({ ...prev, [qId]: true }));
    if (onRefreshData) onRefreshData();
  };

  const filteredQuestions = exam.questions.filter((q) => {
    if (activeReviewSection === 'all') return true;
    if (activeReviewSection === 'incorrect') {
      const d = attempt.questionDetails.find((x) => x.questionId === q.id);
      return !d?.isCorrect;
    }
    return q.category === activeReviewSection;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Top Banner with Rainbow Accent */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-brand-900 to-slate-900 text-white shadow-xl border border-indigo-800/40 border-rainbow-top flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur text-brand-200">
            {exam.code} Sonuç Raporu
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">{exam.title}</h2>
          <p className="text-xs sm:text-sm text-brand-200/90">
            Sınav tamamlandı. Resmi YDS puanınız ve 10 bölümlük detaylı performans analiziniz aşağıdadır.
          </p>
        </div>

        {/* Big Score Card */}
        <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10 min-w-[170px] shadow-inner">
          <span className="text-xs uppercase font-bold text-brand-200 tracking-wider">
            YDS Puanı
          </span>
          <span className="text-4xl sm:text-5xl font-black text-amber-300 my-1">
            {attempt.score.toFixed(1)}
          </span>
          <span className="text-[11px] text-slate-300">100 üzerinden</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Doğru</span>
            <p className="text-lg font-black text-slate-900 dark:text-slate-100">
              {attempt.correctAnswers} / 80
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center font-bold">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Yanlış</span>
            <p className="text-lg font-black text-slate-900 dark:text-slate-100">
              {attempt.incorrectAnswers}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 flex items-center justify-center font-bold">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Boş</span>
            <p className="text-lg font-black text-slate-900 dark:text-slate-100">
              {attempt.blankAnswers || 0}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Süre</span>
            <p className="text-lg font-black text-slate-900 dark:text-slate-100">
              {totalTimeMinutes} Dk <span className="text-xs font-normal text-slate-400">({avgSecondsPerQ}s/soru)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses Recommendation Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strongestSection.pct >= 0 && (
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <strong className="text-emerald-900 dark:text-emerald-200 font-bold block">
                En Güçlü Bölüm: {strongestSection.name} (%{strongestSection.pct})
              </strong>
              <p className="text-emerald-800 dark:text-emerald-300">
                Bu alanda gösterdiğiniz yüksek doğruluk oranını genel tekrarlarla koruyunuz.
              </p>
            </div>
          </div>
        )}

        {weakestSection.pct <= 100 && (
          <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 flex items-start gap-3">
            <TrendingDown className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <strong className="text-rose-900 dark:text-rose-200 font-bold block">
                Geliştirilmesi Gereken Alan: {weakestSection.name} (%{weakestSection.pct})
              </strong>
              <p className="text-rose-800 dark:text-rose-300">
                YDS Çalışma Merkezi'ndeki ilgili modülde özel soru tipi çalışmaları yaparak bu açığı kapatabilirsiniz.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 10 Official YDS Sections Breakdown */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h3 className="font-black text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-brand-600" />
          10 Soru Tipi Bazında Başarı Dağılımı
        </h3>

        <div className="space-y-3">
          {OFFICIAL_YDS_SECTIONS.map((sec) => {
            const data = attempt.sectionScores?.[sec.category] || { correct: 0, total: sec.questionCount, percentage: 0 };
            return (
              <div key={sec.category} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {sec.nameTr}
                  </span>
                  <span className="font-mono text-slate-500">
                    {data.correct} / {data.total} (%{data.percentage})
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      data.percentage >= 70
                        ? 'bg-emerald-500'
                        : data.percentage >= 50
                        ? 'bg-brand-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${data.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Review Section with Filter Tabs */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
            Ayrıntılı Soru İncelemesi &amp; Çözüm Açıklamaları
          </h3>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setActiveReviewSection('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                activeReviewSection === 'all'
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Tümü ({exam.totalQuestions})
            </button>
            <button
              onClick={() => setActiveReviewSection('incorrect')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                activeReviewSection === 'incorrect'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Hatalı Sorular ({attempt.incorrectAnswers})
            </button>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const detail = attempt.questionDetails.find((d) => d.questionId === q.id);
            const isCorrect = !!detail?.isCorrect;
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/20'
                    : 'border-rose-200/80 dark:border-rose-900/40 bg-rose-50/20'
                }`}
              >
                <div
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {q.questionNumber}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-2">
                        {q.stemEn}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[11px]">
                        <span className="text-slate-500">
                          Sizin Cevabınız:{' '}
                          <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                            {detail?.userAnswer || 'Boş'}
                          </strong>
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">
                          Doğru Cevap: <strong className="text-emerald-600">{q.correctAnswer}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {!isCorrect && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddQuestionToErrorNotebook(q.id);
                        }}
                        className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-700 p-1 rounded-lg"
                      >
                        {addedErrors[q.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Eklendi
                          </>
                        ) : (
                          <>
                            <BookmarkPlus className="w-3.5 h-3.5" /> Hata Defterine Ekle
                          </>
                        )}
                      </button>
                    )}
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded Deep Explanation */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs animate-fadeIn">
                    {q.passage && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-[11px] leading-relaxed font-serif">
                        {q.passage}
                      </div>
                    )}

                    <div>
                      <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                        Neden Doğru Cevap: {q.correctAnswer}?
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.whyCorrect}
                      </p>
                    </div>

                    {q.whyDistractorsFail && (
                      <div className="space-y-1 pt-1">
                        <span className="font-bold text-slate-600 dark:text-slate-400 block text-[11px]">
                          Çeldirici Neden Yanlış?
                        </span>
                        {Object.entries(q.whyDistractorsFail).map(([lbl, reason]) => {
                          if (lbl === q.correctAnswer) return null;
                          return (
                            <p key={lbl} className="text-[11px] text-slate-500">
                              <strong className="text-rose-600">{lbl}:</strong> {reason}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Exit Action */}
      <div className="flex justify-center">
        <button
          onClick={onExit}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> YDS Çalışma Merkezi'ne Dön
        </button>
      </div>
    </div>
  );
};
