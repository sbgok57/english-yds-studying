import React, { useState } from 'react';
import {
  YdsQuestion,
  getAdaptiveQuestions,
} from '../services/yds';
import { YdsAttempt, UserProgress } from '../types';
import { dbService } from '../services/db';
import { speechService } from '../services/speech';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';

interface YdsViewProps {
  userProgress: UserProgress;
  onRefreshProgress: () => void;
}

export const YdsView: React.FC<YdsViewProps> = ({
  userProgress,
  onRefreshProgress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [testState, setTestState] = useState<'idle' | 'running' | 'result'>('idle');
  const [questions, setQuestions] = useState<YdsQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Question answering state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const startTest = () => {
    const list = getAdaptiveQuestions(userProgress.xp, selectedCategory, 5);
    setQuestions(list);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setTestState('running');
  };

  const currentQ = questions[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;

    setSelectedOption(opt);
    setIsAnswerSubmitted(true);

    const isCorrect = opt === currentQ.correctAnswer;
    if (isCorrect) {
      speechService.speakCorrectAnswer('Excellent strategy!');
      setCorrectAnswers((prev) => prev + 1);
    } else {
      speechService.speakIncorrectAnswer('Review the rationale.');
      setIncorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      finishTest();
    }
  };

  const finishTest = async () => {
    const total = questions.length;
    const score = Math.round((correctAnswers / (total || 1)) * 100);

    const attempt: YdsAttempt = {
      id: `yds-att-${Date.now()}`,
      testType: 'mini',
      score,
      totalQuestions: total,
      correctAnswers,
      incorrectAnswers,
      date: new Date().toISOString(),
      questionDetails: questions.map((q) => ({
        questionId: q.id,
        category: q.category,
        isCorrect: selectedOption === q.correctAnswer,
        userAnswer: selectedOption || '',
        correctAnswer: q.correctAnswer,
      })),
    };

    await dbService.saveYdsAttempt(attempt);

    // Reward XP
    const earnedXp = correctAnswers * 15 + 25;
    await dbService.saveUserProgress({
      ...userProgress,
      xp: userProgress.xp + earnedXp,
    });

    onRefreshProgress();
    setTestState('result');
  };

  const categories = [
    { id: 'all', label: 'Tüm Soru Tipleri' },
    { id: 'vocabulary', label: 'Kelime Soruları' },
    { id: 'grammar', label: 'Gramer & Zaman' },
    { id: 'sentence_completion', label: 'Cümle Tamamlama' },
    { id: 'cloze', label: 'Cloze Test' },
    { id: 'translation', label: 'Çeviri' },
    { id: 'connector', label: 'Bağlaçlar' },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-indigo-600" />
            YDS & YDT Sınav Simülatörü
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            ÖSYM geçmiş soru mantığına ve soru şablonlarına göre hazırlanmış soru bankası.
          </p>
        </div>
      </div>

      {testState === 'idle' && (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Sınav Seviyesi Mini Deneme
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aşağıdan odaklanmak istediğiniz soru tipini seçin ve 5 soruluk odaklanmış sınav testini başlatın.
            </p>
          </div>

          {/* Category Picker */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={startTest}
              className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Testi Başlat (5 Soru)
            </button>
          </div>
        </div>
      )}

      {testState === 'running' && currentQ && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Soru {currentIdx + 1} / {questions.length} • {currentQ.category.toUpperCase()} ({currentQ.level})
            </span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓ {correctAnswers}</span>
              <span className="text-red-500 font-bold">✗ {incorrectAnswers}</span>
            </div>
          </div>

          {/* Passage if cloze or reading */}
          {currentQ.passage && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm font-serif leading-relaxed text-slate-800 dark:text-slate-200">
              {currentQ.passage}
            </div>
          )}

          {/* Stem */}
          <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
            {currentQ.stemEn}
          </div>

          {/* Strategy Tip Alert */}
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">ÖSYM Soru İpucu:</span>
              <p>{currentQ.strategyTip}</p>
            </div>
          </div>

          {/* 5 Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, D, E
              let btnClass =
                'w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ';

              if (!isAnswerSubmitted) {
                btnClass +=
                  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-slate-800 dark:text-slate-200 shadow-sm';
              } else {
                if (opt === currentQ.correctAnswer) {
                  btnClass +=
                    'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (opt === selectedOption) {
                  btnClass +=
                    'bg-red-50 dark:bg-red-950/60 border-red-400 text-red-900 dark:text-red-200';
                } else {
                  btnClass +=
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50 text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={btnClass}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300">
                      {letter}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswerSubmitted && opt === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isAnswerSubmitted && opt === selectedOption && opt !== currentQ.correctAnswer && (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Detailed Rationale */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2 text-xs animate-fadeIn">
              <div className="font-bold text-sm text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Detaylı Soru Çözümü & Açıklama
              </div>
              <p className="text-slate-800 dark:text-slate-200">{currentQ.explanationEn}</p>
              <p className="text-slate-500 dark:text-slate-400 italic">{currentQ.explanationTr}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswerSubmitted && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <span>{currentIdx < questions.length - 1 ? 'Sonraki Soru' : 'Testi Bitir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {testState === 'result' && (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              YDS Mini Testi Tamamlandı!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sonuçlarınız kaydedildi ve başarı puanınız güncellendi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">Doğru Sayısı</span>
              <span className="text-2xl font-black text-emerald-600">
                {correctAnswers} / {questions.length}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">Başarı Skoru</span>
              <span className="text-2xl font-black text-indigo-600">
                %{Math.round((correctAnswers / (questions.length || 1)) * 100)}
              </span>
            </div>
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setTestState('idle')}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
            >
              Yeni Test Çöz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
