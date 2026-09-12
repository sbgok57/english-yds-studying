import React, { useState, useEffect } from 'react';
import {
  VocabularyItem,
  LearningState,
  UserProgress,
  StudySession,
  ErrorRecord,
  GrammarActivity,
} from '../types';
import { getTodayMotivation } from '../data/motivation';
import { buildStudyQueue, processReview } from '../services/spacedRepetition';
import {
  generateVocabActivity,
  GeneratedVocabActivity,
} from '../services/activityGenerator';
import { speechService } from '../services/speech';
import { dbService } from '../services/db';
import { updateStreak } from '../services/gamification';
import {
  Volume2,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
} from 'lucide-react';

interface StudySessionViewProps {
  initialMode: 'daily_mission' | 'quick_review' | 'standard' | 'deep_practice';
  allVocabulary: VocabularyItem[];
  learningStates: Map<string, LearningState>;
  userProgress: UserProgress;
  allGrammarActivities: GrammarActivity[];
  onSessionComplete: (session: StudySession) => void;
  onExit: () => void;
}

export const StudySessionView: React.FC<StudySessionViewProps> = ({
  initialMode,
  allVocabulary,
  learningStates,
  userProgress,
  onSessionComplete,
  onExit,
}) => {
  const [sessionPhase, setSessionPhase] = useState<'briefing' | 'active' | 'summary'>('briefing');
  const [selectedDuration, setSelectedDuration] = useState<number>(
    initialMode === 'quick_review' ? 5 : initialMode === 'deep_practice' ? 30 : 15
  );

  const [queue, setQueue] = useState<GeneratedVocabActivity[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Question Interaction State
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [hasRetried, setHasRetried] = useState(false);

  // Session stats
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [startTime] = useState(new Date().toISOString());

  const motivation = getTodayMotivation();

  // Initialize session queue based on selected duration
  const startActiveSession = () => {
    const targetCount = selectedDuration === 5 ? 5 : selectedDuration === 15 ? 15 : 25;
    const { sessionQueue } = buildStudyQueue(allVocabulary, learningStates, targetCount);

    const generatedActivities: GeneratedVocabActivity[] = sessionQueue.map((v) =>
      generateVocabActivity(v, allVocabulary)
    );

    // If database is small, fill remaining
    while (generatedActivities.length < targetCount && allVocabulary.length > 0) {
      const fallbackVocab = allVocabulary[generatedActivities.length % allVocabulary.length];
      generatedActivities.push(generateVocabActivity(fallbackVocab, allVocabulary));
    }

    setQueue(generatedActivities);
    setCurrentIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setSessionXp(0);
    setSessionPhase('active');
  };

  const currentActivity = queue[currentIndex];

  useEffect(() => {
    // Reset question state on index change
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setHasRetried(false);

    // Audio cue if listening type
    if (currentActivity?.type === 'listening' && currentActivity.audioPrompt) {
      speechService.speak(currentActivity.audioPrompt, { lang: 'en-US' });
    }
  }, [currentIndex, currentActivity]);

  const handleSelectOption = async (option: string) => {
    if (isAnswerSubmitted && selectedAnswer === currentActivity.correctAnswer) return;

    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    const isCorrect = option === currentActivity.correctAnswer;

    if (isCorrect) {
      speechService.speakCorrectAnswer('Excellent!');
      const earned = hasRetried ? 5 : 10;
      setSessionXp((prev) => prev + earned);
      setCorrectCount((prev) => prev + 1);

      // Update Spaced Repetition State
      const currentVocab = allVocabulary.find((v) => v.id === currentActivity.vocabularyId);
      if (currentVocab) {
        const existingState = learningStates.get(currentVocab.id) || {
          vocabularyId: currentVocab.id,
          mastery: 0,
          correctCount: 0,
          incorrectCount: 0,
          consecutiveCorrect: 0,
          consecutiveIncorrect: 0,
          easeFactor: 2.5,
          intervalDays: 0,
          lastReviewedAt: null,
          nextReviewAt: new Date().toISOString(),
          learningStage: 'new',
        };

        const updatedState = processReview(existingState, true, hasRetried ? 0.7 : 1.0);
        learningStates.set(currentVocab.id, updatedState);
        await dbService.saveLearningState(updatedState);
      }
    } else {
      speechService.speakIncorrectAnswer('Not quite.');
      setIncorrectCount((prev) => prev + 1);

      // Record in Error Notebook
      const currentVocab = allVocabulary.find((v) => v.id === currentActivity.vocabularyId);
      if (currentVocab) {
        const errorRecord: ErrorRecord = {
          id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          itemId: currentVocab.id,
          itemType: 'vocabulary',
          title: `Hatalı Hatırlama: ${currentVocab.word}`,
          targetWordOrRule: currentVocab.word,
          userAnswer: option,
          correctAnswer: currentActivity.correctAnswer,
          explanation: currentActivity.explanationEn,
          category: 'meaning',
          failedAt: new Date().toISOString(),
          reviewedCount: 0,
          mastered: false,
          lastReviewedAt: null,
        };
        await dbService.saveError(errorRecord);

        // Update learning state (gentle penalty)
        const existingState = learningStates.get(currentVocab.id) || {
          vocabularyId: currentVocab.id,
          mastery: 0,
          correctCount: 0,
          incorrectCount: 0,
          consecutiveCorrect: 0,
          consecutiveIncorrect: 0,
          easeFactor: 2.5,
          intervalDays: 0,
          lastReviewedAt: null,
          nextReviewAt: new Date().toISOString(),
          learningStage: 'new',
        };
        const updatedState = processReview(existingState, false);
        learningStates.set(currentVocab.id, updatedState);
        await dbService.saveLearningState(updatedState);
      }
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setHasRetried(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < queue.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishSession();
    }
  };

  const finishSession = async () => {
    const endTime = new Date().toISOString();
    const durationSeconds = Math.round(
      (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000
    );

    const completedSession: StudySession = {
      id: `sess-${Date.now()}`,
      startTime,
      endTime,
      mode: initialMode,
      totalItems: queue.length,
      completedItems: currentIndex + 1,
      correctCount,
      incorrectCount,
      xpEarned: sessionXp + 30, // Session completion bonus
      durationSeconds,
    };

    // Update and persist User Progress
    const updatedUserProgress = updateStreak({
      ...userProgress,
      xp: userProgress.xp + completedSession.xpEarned,
      totalStudyTimeMinutes:
        userProgress.totalStudyTimeMinutes + Math.ceil(durationSeconds / 60),
      perfectSessions:
        incorrectCount === 0 ? userProgress.perfectSessions + 1 : userProgress.perfectSessions,
    });

    await dbService.saveSession(completedSession);
    await dbService.saveUserProgress(updatedUserProgress);

    setSessionPhase('summary');
    onSessionComplete(completedSession);
  };

  // Phase 1: Pre-Study Briefing Screen
  if (sessionPhase === 'briefing') {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 animate-fadeIn">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white p-6 sm:p-8 text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Hazırlık & Hedef Belirleme
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Bugünkü Çalışma Misyonun
            </h2>
            <p className="text-xs sm:text-sm text-brand-100 max-w-md mx-auto">
              Aralıklı tekrar, zayıf kelimelerin pekiştirilmesi ve sınav formatı odaklı günlük oturum.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Motivation Quote */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  Günün İlhamı
                </span>
                <button
                  onClick={() => speechService.speakMotivation(motivation.en)}
                  className="text-slate-400 hover:text-brand-600 p-1"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic">
                "{motivation.en}"
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{motivation.tr}</p>
            </div>

            {/* Current Streak & Stats */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500 text-white">
                  <Flame className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block">
                    {userProgress.dailyStreak} Günlük Seri
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400">
                    Bugün tamamlandığında serin korunacak.
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400 block">Mevcut Seviye</span>
                <span className="text-base font-extrabold text-brand-600 dark:text-brand-400">
                  Lv.{userProgress.level} ({userProgress.xp} XP)
                </span>
              </div>
            </div>

            {/* Duration Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                Hedeflenen Oturum Süresi:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { mins: 5, label: '5 Dakika', sub: 'Hızlı Tekrar (5 Soru)' },
                  { mins: 15, label: '15 Dakika', sub: 'Standart (15 Soru)' },
                  { mins: 30, label: '30 Dakika', sub: 'Derin Pratik (25 Soru)' },
                ].map((item) => (
                  <button
                    key={item.mins}
                    type="button"
                    onClick={() => setSelectedDuration(item.mins)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedDuration === item.mins
                        ? 'bg-brand-50 border-brand-500 text-brand-900 dark:bg-brand-950/60 dark:border-brand-500 dark:text-brand-200 shadow-sm ring-2 ring-brand-500/20'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <Clock className="w-4 h-4 mx-auto mb-1 text-brand-600 dark:text-brand-400" />
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={onExit}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Vazgeç
              </button>
              <button
                onClick={startActiveSession}
                className="flex-1 py-3.5 px-6 rounded-2xl btn-rainbow-primary font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <span>Görevi Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phase 3: Session Summary Screen
  if (sessionPhase === 'summary') {
    const accuracy =
      queue.length > 0 ? Math.round((correctCount / (correctCount + incorrectCount || 1)) * 100) : 100;

    return (
      <div className="max-w-xl mx-auto py-12 px-4 animate-fadeIn">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-rainbow-top shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-rainbow-gradient text-white flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-1">
              Oturum Başarıyla Tamamlandı!
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Harika bir çalışma gerçekleştirdiniz. İlerlemeniz ve hafıza durumlarınız kaydedildi.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Kazanılan XP</span>
              <span className="text-xl font-extrabold text-brand-600 dark:text-brand-400">
                +{sessionXp + 30}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Doğru / Toplam</span>
              <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {correctCount} / {queue.length}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Başarı Oranı</span>
              <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                %{accuracy}
              </span>
            </div>
          </div>

          <button
            onClick={onExit}
            className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  // Phase 2: Active Session Question Runner
  if (!currentActivity) return null;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 animate-fadeIn">
      {/* Progress & Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Soru {currentIndex + 1} / {queue.length}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            ✓ {correctCount}
          </span>
          <span className="text-xs font-semibold text-red-500">✗ {incorrectCount}</span>
          <button
            onClick={finishSession}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 ml-2"
          >
            Bitir ve Kaydet
          </button>
        </div>
      </div>

      {/* Progress Bar (Rainbow Stripe) */}
      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-6">
        <div
          className="h-full bg-rainbow-stripe transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        {/* Activity Prompt */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {currentActivity.type.replace(/_/g, ' ')}
            </span>
            <button
              onClick={() => speechService.speak(currentActivity.targetWord, { lang: 'en-US' })}
              aria-label="Telaffuz et"
              className="p-1.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 hover:bg-brand-100 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {currentActivity.promptEn}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            {currentActivity.promptTr}
          </p>
        </div>

        {/* Context sentence if present */}
        {currentActivity.contextSentence && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <p className="text-sm sm:text-base font-mono text-slate-900 dark:text-slate-100 leading-relaxed">
              {currentActivity.contextSentence}
            </p>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {currentActivity.options.map((opt, idx) => {
            let btnStyle =
              'w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between ';

            if (!isAnswerSubmitted) {
              btnStyle +=
                'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-400 hover:bg-brand-50/40 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 shadow-sm';
            } else {
              if (opt === currentActivity.correctAnswer) {
                btnStyle +=
                  'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold shadow-sm';
              } else if (opt === selectedAnswer) {
                btnStyle +=
                  'bg-red-50 dark:bg-red-950/60 border-red-400 text-red-900 dark:text-red-200';
              } else {
                btnStyle +=
                  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50 text-slate-500 dark:text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt)}
                disabled={isAnswerSubmitted && selectedAnswer === currentActivity.correctAnswer}
                className={btnStyle}
              >
                <span>{opt}</span>
                {isAnswerSubmitted && opt === currentActivity.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                )}
                {isAnswerSubmitted &&
                  opt === selectedAnswer &&
                  opt !== currentActivity.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />
                  )}
              </button>
            );
          })}
        </div>

        {/* Supportive Feedback and Explanation */}
        {isAnswerSubmitted && (
          <div
            className={`p-4 rounded-2xl text-xs space-y-1.5 animate-fadeIn ${
              selectedAnswer === currentActivity.correctAnswer
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm flex items-center gap-1.5">
                {selectedAnswer === currentActivity.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Harika! Doğru Cevap
                  </>
                ) : (
                  <>
                    <HelpCircle className="w-4 h-4 text-amber-600" /> Çözüm & İpucu (Explanation)
                  </>
                )}
              </span>
              {selectedAnswer !== currentActivity.correctAnswer && !hasRetried && (
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-300 hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Tekrar Dene
                </button>
              )}
            </div>
            <p className="font-medium">{currentActivity.explanationEn}</p>
            <p className="italic opacity-90">{currentActivity.explanationTr}</p>
          </div>
        )}

        {/* Next Button */}
        {isAnswerSubmitted && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-rainbow-primary font-bold text-sm shadow-md transition-all"
            >
              <span>{currentIndex < queue.length - 1 ? 'Sonraki Soru' : 'Görevi Tamamla'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
