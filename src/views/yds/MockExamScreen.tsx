import React, { useState, useEffect, useRef } from 'react';
import { YdsMockExam, YdsOptionLabel } from '../../types/yds';
import { OnlineOpticalSheet } from '../../components/yds/OnlineOpticalSheet';
import { dbService } from '../../services/db';
import { YdsAttempt } from '../../types/progress';
import {
  Clock,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Send,
  Volume2,
  AlertTriangle,
  Layers,
} from 'lucide-react';
import { speechService } from '../../services/speech';

interface MockExamScreenProps {
  exam: YdsMockExam;
  onFinish: (attempt: YdsAttempt) => void;
  onExit: () => void;
}

export const MockExamScreen: React.FC<MockExamScreenProps> = ({
  exam,
  onFinish,
  onExit,
}) => {
  // 180 minutes = 10,800 seconds
  const [secondsRemaining, setSecondsRemaining] = useState<number>(180 * 60);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, YdsOptionLabel | null>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMobileOpticalOpen, setIsMobileOpticalOpen] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Format seconds to 03:00:00
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Submit test and calculate comprehensive score & section analytics
  const handleSubmitExam = async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    let incorrectCount = 0;
    let blankCount = 0;

    const sectionScores: Record<string, { correct: number; total: number; percentage: number }> = {};

    exam.questions.forEach((q) => {
      const userAns = answers[q.questionNumber];
      const isCorrect = userAns === q.correctAnswer;

      if (!userAns) {
        blankCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      if (!sectionScores[q.category]) {
        sectionScores[q.category] = { correct: 0, total: 0, percentage: 0 };
      }
      sectionScores[q.category].total += 1;
      if (isCorrect) {
        sectionScores[q.category].correct += 1;
      }
    });

    Object.keys(sectionScores).forEach((cat) => {
      const item = sectionScores[cat];
      item.percentage = Math.round((item.correct / (item.total || 1)) * 100);
    });

    const score = Math.round((correctCount / (exam.totalQuestions || 80)) * 100 * 100) / 100;
    const timeSpent = 180 * 60 - secondsRemaining;

    const attempt: YdsAttempt = {
      id: `yds-attempt-${exam.id}-${Date.now()}`,
      examId: exam.id,
      examTitle: exam.title,
      testType: 'full',
      score,
      totalQuestions: exam.totalQuestions,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      blankAnswers: blankCount,
      timeSpentSeconds: timeSpent,
      sectionScores,
      flaggedQuestionIds: Object.keys(flagged).filter((k) => flagged[Number(k)]),
      date: new Date().toISOString(),
      questionDetails: exam.questions.map((q) => ({
        questionId: q.id,
        questionNumber: q.questionNumber,
        category: q.category,
        isCorrect: answers[q.questionNumber] === q.correctAnswer,
        userAnswer: answers[q.questionNumber] || '',
        correctAnswer: q.correctAnswer,
      })),
    };

    await dbService.saveYdsAttempt(attempt);
    onFinish(attempt);
  };

  const handleSubmitExamRef = useRef(handleSubmitExam);
  handleSubmitExamRef.current = handleSubmitExam;

  // 180-minute Countdown Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleSubmitExamRef.current(); // Auto-submit when time expires (00:00:00)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentQ = exam.questions.find((q) => q.questionNumber === currentQuestionNumber) || exam.questions[0];
  const selectedOption = answers[currentQuestionNumber] || null;
  const isCurrentFlagged = !!flagged[currentQuestionNumber];

  const handleSelectOption = (opt: YdsOptionLabel) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionNumber]: prev[currentQuestionNumber] === opt ? null : opt,
    }));
  };

  const handleToggleFlag = () => {
    setFlagged((prev) => ({
      ...prev,
      [currentQuestionNumber]: !prev[currentQuestionNumber],
    }));
  };

  const isLowTime = secondsRemaining < 30 * 60;
  const isCriticalTime = secondsRemaining < 5 * 60;

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Top Exam Header Bar */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-600 transition-colors"
            title="Sınavdan Çık"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
              {exam.title}
            </h2>
            <span className="text-[11px] text-slate-400">
              {exam.code} • 80 Soru • 180 Dakika
            </span>
          </div>
        </div>

        {/* Center: 180-Minute Countdown Clock */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono font-bold text-sm sm:text-base transition-all ${
            isCriticalTime
              ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-600 dark:text-rose-400 animate-pulse'
              : isLowTime
              ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-500 text-amber-600 dark:text-amber-400'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{formatTime(secondsRemaining)}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Optical Toggle */}
          <button
            onClick={() => setIsMobileOpticalOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
          >
            <Layers className="w-4 h-4" /> Optik
          </button>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" /> Sınavı Bitir
          </button>
        </div>
      </div>

      {/* Main Layout: Question Canvas (Left) + Online Optical Sheet (Right) */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Left Question Area */}
        <div className="flex-1 w-full space-y-5">
          {/* Question Meta Header */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-sm flex items-center justify-center">
                {currentQuestionNumber}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                {currentQ.category.replace('_', ' ')}
              </span>
            </div>

            <button
              onClick={handleToggleFlag}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isCurrentFlagged
                  ? 'bg-amber-50 dark:bg-amber-950 border-amber-500 text-amber-700 dark:text-amber-300'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-500' : ''}`} />
              {isCurrentFlagged ? 'İşaretlendi (Gözden Geçir)' : 'Soruyu İşaretle'}
            </button>
          </div>

          {/* Question Content Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            {/* Passage if cloze or reading */}
            {currentQ.passage && (
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                {currentQ.passage}
              </div>
            )}

            {/* Stem */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                {currentQ.stemEn}
              </h3>
              <button
                onClick={() => speechService.speak(currentQ.stemEn)}
                title="Soruyu Dinle"
                className="p-2 rounded-xl text-slate-400 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectOption(opt.label)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3.5 text-xs sm:text-sm ${
                      isSelected
                        ? 'bg-brand-50 dark:bg-brand-950/80 border-brand-500 text-brand-900 dark:text-brand-100 font-bold ring-2 ring-brand-500/20 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-brand-400 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold shrink-0 text-xs ${
                        isSelected
                          ? 'bg-brand-600 text-white'
                          : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Question Footer Navigation */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => setCurrentQuestionNumber((prev) => Math.max(1, prev - 1))}
                disabled={currentQuestionNumber === 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki Soru
              </button>

              <button
                onClick={() => handleSelectOption(selectedOption as YdsOptionLabel)}
                className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors font-medium"
              >
                İşareti Kaldır (Boş Bırak)
              </button>

              <button
                onClick={() => setCurrentQuestionNumber((prev) => Math.min(exam.totalQuestions, prev + 1))}
                disabled={currentQuestionNumber === exam.totalQuestions}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white transition-colors shadow-sm"
              >
                Sonraki Soru <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Optical Sheet */}
        <OnlineOpticalSheet
          totalQuestions={exam.totalQuestions}
          answers={answers}
          flagged={flagged}
          currentQuestionNumber={currentQuestionNumber}
          onSelectQuestion={(qNum) => setCurrentQuestionNumber(qNum)}
          onSelectOption={(qNum, opt) => {
            setAnswers((prev) => ({ ...prev, [qNum]: opt }));
          }}
          isMobileDrawerOpen={isMobileOpticalOpen}
          onCloseMobileDrawer={() => setIsMobileOpticalOpen(false)}
        />
      </div>

      {/* Submit Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                Sınavı tamamlamak istiyor musunuz?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Toplam 80 sorudan <strong>{Object.values(answers).filter(Boolean).length}</strong> tanesini cevapladınız.{' '}
                {80 - Object.values(answers).filter(Boolean).length > 0 && (
                  <span className="text-amber-600 dark:text-amber-400 block font-semibold mt-1">
                    {80 - Object.values(answers).filter(Boolean).length} boş sorunuz bulunmaktadır.
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
              >
                Sorulara Dön
              </button>
              <button
                onClick={() => {
                  setIsSubmitModalOpen(false);
                  handleSubmitExam();
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-md"
              >
                Evet, Sınavı Bitir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
