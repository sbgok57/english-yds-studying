// Centralized Points and XP Configuration for YDS Master

export type PointEventType =
  | "daily_login"
  | "flashcard_first"
  | "flashcard_repeat"
  | "grammar_question"
  | "reading_question"
  | "reading_complete"
  | "tactic_practice"
  | "test_10"
  | "test_20"
  | "test_40"
  | "exam_80"
  | "level_test_complete"
  | "level_up"
  | "study_plan_daily"
  | "study_plan_weekly"
  | "streak_7"
  | "streak_30"
  | "custom";

export const POINTS_CONFIG: Record<PointEventType, number> = {
  daily_login: 2,
  flashcard_first: 3,
  flashcard_repeat: 1,
  grammar_question: 4,
  reading_question: 5,
  reading_complete: 8,
  tactic_practice: 4,
  test_10: 10,
  test_20: 20,
  test_40: 35,
  exam_80: 60,
  level_test_complete: 75,
  level_up: 150,
  study_plan_daily: 20,
  study_plan_weekly: 100,
  streak_7: 100,
  streak_30: 500,
  custom: 5,
};

export interface PointEvent {
  id: string;
  type: PointEventType;
  points: number;
  sourceId: string;
  createdAt: number;
  metadata?: Record<string, string | number | boolean>;
}

export interface PointsState {
  version: number;
  total: number;
  events: PointEvent[];
  awardedSourceKeys: Record<string, number>;
}

export function defaultPointsState(): PointsState {
  return {
    version: 1,
    total: 0,
    events: [],
    awardedSourceKeys: {},
  };
}

export interface XpTitle {
  minXp: number;
  title: string;
  emoji: string;
  description: string;
}

export const XP_TITLES: XpTitle[] = [
  { minXp: 0, title: "Yeni Yolcu", emoji: "🌱", description: "YDS maratonuna ilk adımını attın." },
  { minXp: 200, title: "Kelime Çırağı", emoji: "📚", description: "Temel kelime hazneni hızla genişletiyorsun." },
  { minXp: 500, title: "Gramer Kaşifi", emoji: "🧭", description: "İngilizce cümle yapılarının şifrelerini çözdün." },
  { minXp: 1000, title: "Reading Koşucusu", emoji: "🏃", description: "Uzun akademik paragrafları soluksuz okuyorsun." },
  { minXp: 2000, title: "Soru Avcısı", emoji: "🏹", description: "ÖSYM tarzı tuzakları ilk bakışta ayırt ediyorsun." },
  { minXp: 3500, title: "Net Savaşçısı", emoji: "⚔️", description: "Denemelerde istikrarlı yüksek netlere ulaştın." },
  { minXp: 5500, title: "YDS Ustası", emoji: "🧙", description: "Soru çözme hızın ve doğruluğun zirveye yaklaştı." },
  { minXp: 8000, title: "Zirve Tırmanıcısı", emoji: "🧗", description: "Hedeflediğin 80+ puan için emin adımlarla ilerliyorsun." },
  { minXp: 12000, title: "Dil Stratejisti", emoji: "♟️", description: "Sınav stratejisi ve süre yönetiminde uzmanlaştın." },
  { minXp: 18000, title: "YDS Şampiyonu", emoji: "🏆", description: "Akademik İngilizcenin tüm inceliklerine hakimsin." },
  { minXp: 25000, title: "Zirve Efsanesi", emoji: "👑", description: "YDS Master efsaneleri arasına adını altın harflerle yazdırdın." },
];

export function getXpTitle(totalXp: number): {
  current: XpTitle;
  next: XpTitle | null;
  progressPercent: number;
  xpToNext: number;
} {
  const safeXp = Math.max(0, Number(totalXp) || 0);
  let current = XP_TITLES[0];
  let next: XpTitle | null = null;

  for (let i = XP_TITLES.length - 1; i >= 0; i--) {
    if (safeXp >= XP_TITLES[i].minXp) {
      current = XP_TITLES[i];
      next = XP_TITLES[i + 1] || null;
      break;
    }
  }

  if (!next) {
    return {
      current,
      next: null,
      progressPercent: 100,
      xpToNext: 0,
    };
  }

  const range = next.minXp - current.minXp;
  const gained = safeXp - current.minXp;
  const progressPercent = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
  const xpToNext = Math.max(0, next.minXp - safeXp);

  return { current, next, progressPercent, xpToNext };
}

// SAFETY: Idempotent point awarding prevents double-crediting in Strict Mode or on rapid clicks
export function awardPointsIdempotent(
  state: PointsState,
  event: Omit<PointEvent, "createdAt"> & { createdAt?: number }
): { updatedState: PointsState; awarded: boolean; points: number } {
  const sourceKey = `${event.type}:${event.sourceId}`;
  
  if (state.awardedSourceKeys && state.awardedSourceKeys[sourceKey]) {
    return { updatedState: state, awarded: false, points: 0 };
  }
  if (state.events && state.events.some((e) => e.id === event.id)) {
    return { updatedState: state, awarded: false, points: 0 };
  }

  const pointsToAdd = Math.max(0, Number(event.points) || POINTS_CONFIG[event.type] || 0);
  const now = event.createdAt || Date.now();

  const newEvent: PointEvent = {
    id: event.id,
    type: event.type,
    points: pointsToAdd,
    sourceId: event.sourceId,
    createdAt: now,
    metadata: event.metadata,
  };

  const existingEvents = Array.isArray(state.events) ? state.events : [];
  const newEvents = [newEvent, ...existingEvents.slice(0, 499)];
  const newTotal = Math.max(0, (Number(state.total) || 0) + pointsToAdd);

  return {
    updatedState: {
      version: state.version || 1,
      total: newTotal,
      events: newEvents,
      awardedSourceKeys: {
        ...(state.awardedSourceKeys || {}),
        [sourceKey]: now,
      },
    },
    awarded: true,
    points: pointsToAdd,
  };
}
