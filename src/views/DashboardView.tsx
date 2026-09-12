import React from 'react';
import {
  UserProgress,
  VocabularyItem,
  LearningState,
  GrammarProgress,
  StudySession,
  ErrorRecord,
} from '../types';
import { getDynamicMotivation } from '../data/motivation';
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
  const unmasteredErrorsCount = errors.filter((e) => !e.mastered).length;
  const dynamicMotivation = getDynamicMotivation(
    userProgress.dailyStreak,
    userProgress.xp,
    unmasteredErrorsCount
  );
  const motivation = dynamicMotivation.message;

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
      {/* Top Greeting & Motivation Banner with Rainbow Top Accent */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 shadow-xl border border-indigo-800/40 border-rainbow-top flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="relative z-10 max-w-2xl space-y-4 flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-indigo-200 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Günün İlhamı &amp; Odak Notu</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {getGreeting()}, Şampiyon! <span className="text-rainbow-gradient">Hazır mısın?</span>
          </h2>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/10 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                "{motivation.en}"
              </p>
              <button
                onClick={handleSpeakMotivation}
                aria-label="Motivasyon sözünü dinle"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-indigo-200 transition-colors shrink-0"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-indigo-200/90 font-medium">
              {motivation.tr}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onStartSession('daily_mission')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-rainbow-primary font-bold text-sm shadow-lg"
            >
              <Play className="w-4 h-4 fill-white" />
              Günün Görevine Başla (15 dk)
            </button>
            <button
              onClick={() => onStartSession('quick_review')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur transition-all border border-white/10"
            >
              Hızlı Tekrar (5 dk)
            </button>
          </div>
        </div>

        {/* Dynamic Visual Badge */}
        <div className="shrink-0 hidden md:flex items-center justify-center w-36 h-36 rounded-2xl bg-white/5 border border-white/10 p-3 shadow-inner">
          <div
            className="w-full h-full drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: dynamicMotivation.visualSvg }}
          />
        </div>
      </div>

      {/* Real Performance Metrics Grid (🔴🟠🟡🟢🔵🟣 Spectrum Colors) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* 🟠 Streak (Turuncu / Ateş) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/70 dark:border-amber-900/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 ring-1 ring-amber-200/60 dark:ring-amber-800/40">
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
              Haftalık: {userProgress.weeklyStreak} hafta
            </span>
          </div>
        </div>

        {/* 🟡 Level & XP (Sarı / Altın) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-yellow-200/70 dark:border-yellow-900/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="p-3.5 rounded-2xl bg-yellow-50 dark:bg-yellow-950/50 text-yellow-600 ring-1 ring-yellow-200/60 dark:ring-yellow-800/40">
            <Zap className="w-7 h-7 fill-yellow-500 text-yellow-500" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Seviye {userProgress.level}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {userProgress.xp} XP
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              Sonraki Seviye: {userProgress.level * 100 - userProgress.xp > 0 ? userProgress.level * 100 - userProgress.xp : 0} XP
            </span>
          </div>
        </div>

        {/* 🟢 Vocabulary Progress (Yeşil / Başarı) */}
        <div
          onClick={() => onNavigate('vocabulary')}
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200/70 dark:border-emerald-900/40 shadow-sm flex items-center gap-4 cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition-all"
        >
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 ring-1 ring-emerald-200/60 dark:ring-emerald-800/40">
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

        {/* 🟣 Grammar Progress (Mor / Mimari) */}
        <div
          onClick={() => onNavigate('grammar')}
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200/70 dark:border-purple-900/40 shadow-sm flex items-center gap-4 cursor-pointer hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition-all"
        >
          <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 ring-1 ring-purple-200/60 dark:ring-purple-800/40">
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
        {/* 🟢 Due Reviews Card (Yeşil / Tekrarlar) */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
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
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-sm"
          >
            Tekrarları Başlat
          </button>
        </div>

        {/* 🟠 Weak Words Alert (Turuncu-Sarı / Pekiştirme) */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-950/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
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
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-amber-800 dark:text-amber-200 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-950/70 border border-amber-200 dark:border-amber-800/60 disabled:opacity-50 transition-all"
          >
            Zayıf Kelimeleri Çalış
          </button>
        </div>

        {/* 🔴 Error Notebook Preview (Kırmızı-Gül / Hata Analizi) */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-rose-500" />
              Hata Defteri
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
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
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-rose-700 dark:text-rose-300 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 border border-rose-200 dark:border-rose-800/60 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Hata Defterini Aç</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
