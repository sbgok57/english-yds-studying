import { UserProgress, Achievement } from '../types';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-first-session',
    title: 'First Step to Mastery',
    titleTr: 'Ustalığa İlk Adım',
    description: 'Complete your first full study session.',
    descriptionTr: 'İlk tam çalışma oturumunu başarıyla tamamla.',
    icon: 'Footprints',
    category: 'study_time',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'ach-streak-3',
    title: 'Consistency Champion',
    titleTr: 'İstikrar Şampiyonu',
    description: 'Maintain a 3-day continuous study streak.',
    descriptionTr: '3 gün boyunca aralıksız çalışma serisini koru.',
    icon: 'Flame',
    category: 'streak',
    progress: 0,
    maxProgress: 3,
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'ach-vocab-20',
    title: 'Vocabulary Explorer',
    titleTr: 'Kelime Kâşifi',
    description: 'Encounter and study 20 academic vocabulary items.',
    descriptionTr: '20 akademik kelimeyi incele ve çalış.',
    icon: 'BookOpen',
    category: 'vocabulary',
    progress: 0,
    maxProgress: 20,
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'ach-grammar-master',
    title: 'Grammar Architect',
    titleTr: 'Gramer Mimarı',
    description: 'Complete all activities for a grammar topic.',
    descriptionTr: 'Bir gramer konusunun tüm alıştırmalarını tamamla.',
    icon: 'Cpu',
    category: 'grammar',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'ach-perfect-round',
    title: 'Flawless Accuracy',
    titleTr: 'Kusursuz İsabet',
    description: 'Complete a study session with 100% correct answers.',
    descriptionTr: 'Bir oturumu %100 doğrulukla hatasız bitir.',
    icon: 'Award',
    category: 'mastery',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'ach-yds-triumph',
    title: 'YDS Conqueror',
    titleTr: 'YDS Fatihi',
    description: 'Score 80% or higher on a YDS test simulation.',
    descriptionTr: 'YDS test denemesinde %80 veya üzeri başarı sağla.',
    icon: 'Trophy',
    category: 'yds',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    unlockedAt: null,
  }
];

export function calculateLevel(xp: number): number {
  if (xp <= 0) return 1;
  return Math.floor(Math.sqrt(xp / 50)) + 1;
}

export function updateStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = progress.lastActiveDate;

  if (lastDate === today) {
    return progress;
  }

  const todayDateObj = new Date(today);
  const lastDateObj = new Date(lastDate);
  const diffDays = Math.round(
    (todayDateObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24)
  );

  let newDailyStreak = progress.dailyStreak;
  if (diffDays === 1) {
    newDailyStreak += 1;
  } else if (diffDays > 1) {
    newDailyStreak = 1;
  }

  return {
    ...progress,
    dailyStreak: newDailyStreak,
    lastActiveDate: today,
  };
}

export function evaluateAchievements(
  progress: UserProgress,
  totalLearnedVocab: number,
  completedGrammarTopics: number,
  existingAchievements: Achievement[]
): { updatedAchievements: Achievement[]; newlyUnlocked: Achievement[] } {
  const newlyUnlocked: Achievement[] = [];
  const list = existingAchievements.length > 0 ? existingAchievements : INITIAL_ACHIEVEMENTS;

  const updatedAchievements = list.map((ach) => {
    if (ach.unlocked) return ach;

    let currentProgress = ach.progress;
    let unlocked = false;

    switch (ach.id) {
      case 'ach-first-session':
        currentProgress = progress.totalStudyTimeMinutes > 0 ? 1 : 0;
        unlocked = currentProgress >= 1;
        break;
      case 'ach-streak-3':
        currentProgress = Math.min(3, progress.dailyStreak);
        unlocked = currentProgress >= 3;
        break;
      case 'ach-vocab-20':
        currentProgress = Math.min(20, totalLearnedVocab);
        unlocked = currentProgress >= 20;
        break;
      case 'ach-grammar-master':
        currentProgress = completedGrammarTopics > 0 ? 1 : 0;
        unlocked = currentProgress >= 1;
        break;
      case 'ach-perfect-round':
        currentProgress = progress.perfectSessions > 0 ? 1 : 0;
        unlocked = currentProgress >= 1;
        break;
      default:
        break;
    }

    if (unlocked && !ach.unlocked) {
      const updated = {
        ...ach,
        progress: currentProgress,
        unlocked: true,
        unlockedAt: new Date().toISOString(),
      };
      newlyUnlocked.push(updated);
      return updated;
    }

    return { ...ach, progress: currentProgress };
  });

  return { updatedAchievements, newlyUnlocked };
}
