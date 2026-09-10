import React from 'react';
import {
  UserProgress,
  VocabularyItem,
  LearningState,
  GrammarProgress,
  StudySession,
  ErrorRecord,
} from '../types';
import { getTodayMotivation } from '../data/motivation';
import {
  Flame,
  Zap,
  BookOpen,
  Cpu,
  GraduationCap,
  Play,
  Volume2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { speechService } from '../services/speech';
import { ActiveTab } from '../components/layout/Navbar';

interface DashboardViewProps {
  userProgress: UserProgress;
  vocabulary: VocabularyItem[];
  learningStates: Map<string, LearningState>;
  grammarProgress: Map<string, GrammarProgress>;
  recentSessions: StudySession[];
  errors: ErrorRecord[];
  onNavigate: (tab: ActiveTab) => void;
  onStartSession: (mode: 'daily_mission' | 'quick_review' | 'standard' | 'deep_practice') => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userProgress,
  vocabulary,
  learningStates,
  grammarProgress,
  errors,
  onNavigate,
  onStartSession,
}) => {
  const motivation = getTodayMotivation();

  // Calculate real metrics from persisted data (No fake data!)
  const now = new Date();
  let dueReviewsCount = 0;
  let weakWordsCount = 0;
  let totalMasteredCount = 0;

  learningStates.forEach((st) => {
    if (new Date(st.nextReviewAt) <= now) {
      dueReviewsCount++;
    }
    if (st.mastery < 40 && st.learningStage !== 'new') {
      weakWordsCount++;
    }
    if (st.mastery >= 95) {
      totalMasteredCount++;
    }
  });

  const completedGrammarCount = Array.from(grammarProgress.values()).filter(
    (g) => g.lessonCompleted || g.mastery >= 80
  ).length;

  const unmasteredErrorsCount = errors.filter((e) => !e.mastered).length;

  const handleSpeakMotivation = () => {
    speechService.speakMotivation(motivation.en);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Günaydın';
    if (hour < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Greeting & Motivation Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-brand-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-indigo-800/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Günün İlhamı & Odak Notu</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {getGreeting()}, Şampiyon! Hazır mısın?
          </h2>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/10 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                "{motivation.en}"
              </p>
              <button
                onClick={handleSpeakMotivation}
                aria-label="Motivasyon sözünü dinle"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-brand-200 transition-colors shrink-0"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-brand-200/90 font-medium">
              {motivation.tr}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onStartSession('daily_mission')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-lg hover:shadow-brand-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-white" />
              Günün Görevine Başla (15 Dk)
            </button>
            <button
              onClick={() => onStartSession('quick_review')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur transition-all"
            >
              Hızlı Tekrar (5 Dk)
            </button>
          </div>
        </div>
      </div>

      {/* Real Performance Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Streak */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500">
            <Flame className="w-7 h-7 fill-amber-500" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Seri (Streak)
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {userProgress.dailyStreak} Gün
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              Haftalık: {userProgress.weeklyStreak} hf
            </span>
          </div>
        </div>

        {/* Level & XP */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-brand-50 dark:bg-brand-950/40 text-brand-500">
            <Zap className="w-7 h-7 fill-brand-500" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Seviye {userProgress.level}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {userProgress.xp} XP
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              Sonraki Lv: {userProgress.level * 100 - userProgress.xp > 0 ? userProgress.level * 100 - userProgress.xp : 0} XP
            </span>
          </div>
        </div>

        {/* Vocabulary Progress */}
        <div
          onClick={() => onNavigate('vocabulary')}
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 cursor-pointer hover:border-brand-400 transition-all"
        >
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Kelimeler
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {learningStates.size} / {vocabulary.length}
            </span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block mt-0.5">
              {totalMasteredCount} Ustalaşıldı
            </span>
          </div>
        </div>

        {/* Grammar Progress */}
        <div
          onClick={() => onNavigate('grammar')}
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 cursor-pointer hover:border-brand-400 transition-all"
        >
          <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Gramer Konuları
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {completedGrammarCount} / 28
            </span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium block mt-0.5">
              {28 - completedGrammarCount} Konu Kaldı
            </span>
          </div>
        </div>
      </div>

      {/* Main Study Hub: Overdue Reviews, Weak Words, Error Notebook */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Due Reviews Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-600" />
              Bugünün Tekrarları
            </h3>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                dueReviewsCount > 0
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
              }`}
            >
              {dueReviewsCount} Kelime
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {dueReviewsCount > 0
              ? 'Aralıklı tekrar algoritması tarafından bugün gözden geçirilmesi planlanan kelimeleriniz.'
              : 'Bugün için planlanmış gecikmiş tekrarınız yok. Harika gidiyorsunuz!'}
          </p>
          <button
            onClick={() => onStartSession('standard')}
            disabled={dueReviewsCount === 0 && learningStates.size === 0}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 transition-all"
          >
            Tekrarları Başlat
          </button>
        </div>

        {/* Weak Words Alert */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Zayıf Kelimeler
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              {weakWordsCount}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {weakWordsCount > 0
              ? 'Hafıza skoru %40 altında kalan ve pekiştirme gerektiren kelimeleriniz.'
              : 'Henüz zayıf olarak işaretlenen bir kelimeniz bulunmuyor.'}
          </p>
          <button
            onClick={() => onStartSession('deep_practice')}
            disabled={weakWordsCount === 0}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-800 dark:text-slate-200 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-950 border border-amber-200 dark:border-amber-800/60 disabled:opacity-50 transition-all"
          >
            Zayıf Kelimeleri Çalış
          </button>
        </div>

        {/* Error Notebook Preview */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              Hata Defteri
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
              {unmasteredErrorsCount} Hata
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {unmasteredErrorsCount > 0
              ? 'Daha önce yanıldığınız ve üzerinde çalışılarak düzeltilmeyi bekleyen sorular.'
              : 'Tüm hatalarınızı başarıyla düzelttiniz veya henüz hata kaydı oluşmadı.'}
          </p>
          <button
            onClick={() => onNavigate('errors')}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-950 border border-indigo-200 dark:border-indigo-800/60 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Hata Defterini Aç</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
