import React from 'react';
import {
  UserProgress,
  StudySession,
  LearningState,
  GrammarProgress,
  YdsAttempt,
  Achievement,
} from '../types';
import {
  BarChart3,
  Clock,
  TrendingUp,
  Award,
  BookOpen,
  Flame,
} from 'lucide-react';

interface ProgressViewProps {
  userProgress: UserProgress;
  sessions: StudySession[];
  learningStates: Map<string, LearningState>;
  grammarProgress: Map<string, GrammarProgress>;
  ydsAttempts: YdsAttempt[];
  achievements: Achievement[];
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  userProgress,
  sessions,
  learningStates,
  grammarProgress,
  ydsAttempts,
  achievements,
}) => {
  // Real statistical calculations (No fake progress!)
  const totalCompletedSessions = sessions.length;

  let totalCorrect = 0;
  let totalIncorrect = 0;
  sessions.forEach((s) => {
    totalCorrect += s.correctCount;
    totalIncorrect += s.incorrectCount;
  });

  const totalQuestions = totalCorrect + totalIncorrect;
  const overallAccuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Mastery breakdown
  let newWords = 0;
  let familiarWords = 0;
  let learningWords = 0;
  let strongWords = 0;
  let masteredWords = 0;

  learningStates.forEach((s) => {
    if (s.mastery < 20) newWords++;
    else if (s.mastery < 40) familiarWords++;
    else if (s.mastery < 60) learningWords++;
    else if (s.mastery < 80) strongWords++;
    else masteredWords++;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-brand-600" />
          Öğrenme Analitiği & İlerleme
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Gerçek oturum verilerinizden ve aralıklı tekrar hafıza modellerinizden derlenen istatistikler.
        </p>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <Clock className="w-4 h-4 text-blue-500" /> Toplam Süre
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
            {userProgress.totalStudyTimeMinutes} Dk
          </span>
          <p className="text-[11px] text-slate-500 mt-1">{totalCompletedSessions} tamamlanan oturum</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500" /> Genel Doğruluk
          </div>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {totalQuestions > 0 ? `%${overallAccuracy}` : 'Henüz Veri Yok'}
          </span>
          <p className="text-[11px] text-slate-500 mt-1">
            {totalQuestions > 0 ? `${totalCorrect} doğru / ${totalQuestions} soru` : 'Oturum çözüldükçe hesaplanır'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4 text-amber-500" /> İstikrar Serisi
          </div>
          <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
            {userProgress.dailyStreak} Gün
          </span>
          <p className="text-[11px] text-slate-500 mt-1">Haftalık: {userProgress.weeklyStreak} hafta</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-purple-500" /> Kusursuz Turlar
          </div>
          <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
            {userProgress.perfectSessions}
          </span>
          <p className="text-[11px] text-slate-500 mt-1">%100 hatasız oturumlar</p>
        </div>
      </div>

      {/* Grammar & YDS Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Gramer Tamamlama Durumu
          </span>
          <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
            {Array.from(grammarProgress.values()).filter((g) => g.lessonCompleted || g.mastery >= 80).length} / 28 Konu
          </span>
          <p className="text-xs text-slate-500 mt-1">
            Çalışılan toplam konu: {grammarProgress.size}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            YDS Sınav Denemeleri
          </span>
          <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
            {ydsAttempts.length} Deneme
          </span>
          <p className="text-xs text-slate-500 mt-1">
            {ydsAttempts.length > 0
              ? `Ortalama Başarı: %${Math.round(
                  ydsAttempts.reduce((acc, a) => acc + a.score, 0) / ydsAttempts.length
                )}`
              : 'Henüz YDS denemesi çözülmedi'}
          </p>
        </div>
      </div>

      {/* Vocabulary Mastery Distribution */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brand-600" />
          Kelime Hafıza Aşamaları Dağılımı (Mastery Stages)
        </h3>

        {learningStates.size === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">
            Henüz çalışılmış kelime kaydı bulunmamaktadır. İlk kelime oturumunuzu başlattığınızda hafıza aşamalarınız burada görselleştirilir.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Yeni</span>
              <span className="text-lg font-black text-slate-700 dark:text-slate-300">{newWords}</span>
            </div>
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-center">
              <span className="text-[10px] font-bold text-amber-700 uppercase block">Aşina</span>
              <span className="text-lg font-black text-amber-600">{familiarWords}</span>
            </div>
            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 text-center">
              <span className="text-[10px] font-bold text-blue-700 uppercase block">Öğrenilmekte</span>
              <span className="text-lg font-black text-blue-600">{learningWords}</span>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-center">
              <span className="text-[10px] font-bold text-indigo-700 uppercase block">Güçlü</span>
              <span className="text-lg font-black text-indigo-600">{strongWords}</span>
            </div>
            <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/30 text-center">
              <span className="text-[10px] font-bold text-purple-700 uppercase block">Ustalaşıldı</span>
              <span className="text-lg font-black text-purple-600">{masteredWords}</span>
            </div>
          </div>
        )}
      </div>

      {/* Achievements Showcase */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Kazanılan Başarı Rozetleri (Achievements)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-4 rounded-2xl border transition-all ${
                ach.unlocked
                  ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-xl">{ach.unlocked ? '🏆' : '🔒'}</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  {ach.titleTr}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {ach.descriptionTr}
              </p>
              <div className="mt-2 text-[10px] font-semibold text-slate-400">
                {ach.unlocked ? 'Kazanıldı' : `${ach.progress} / ${ach.maxProgress}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
