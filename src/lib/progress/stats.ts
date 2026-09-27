// ============================================================
// src/lib/progress/stats.ts
// YDS EXAM – İlerleme okuma yardımcıları (sunucu tarafı)
// /ilerleme sayfası ve push kişiselleştirmesi bunları kullanır.
// ============================================================
import { createClient } from '@/lib/supabase/server';
import type { UserStats } from './tracker';

export interface TopicMastery {
  topic_slug: string;
  attempts: number;
  correct: number;
  success_rate: number;
}

export interface MyProgress {
  loggedIn: boolean;
  stats: UserStats | null;
  mastery: TopicMastery[];
  weakTopic: TopicMastery | null;
  recentExams: Array<{
    exam_name: string;
    score: number;
    correct: number;
    wrong: number;
    empty: number;
    taken_at: string;
  }>;
  listening: Array<{ topic_slug: string; completed: boolean; position_seconds: number }>;
  recentActivity: Array<{
    activity_type: string;
    topic_slug: string | null;
    points: number;
    created_at: string;
  }>;
}

// Seviye sistemi — YDS temalı unvanlar
export const LEVELS = [
  { level: 1, min: 0, title: 'Çaylak' },
  { level: 2, min: 60, title: 'Kelime Avcısı' },
  { level: 3, min: 150, title: 'Cümle Kaşifi' },
  { level: 4, min: 300, title: 'Bağlaç Ustası' },
  { level: 5, min: 500, title: 'Paragraf Şampiyonu' },
  { level: 6, min: 800, title: 'Deneme Canavarı' },
  { level: 7, min: 1200, title: 'Zaman Makinisti' },
  { level: 8, min: 1700, title: 'YDS Ustası' },
  { level: 9, min: 2400, title: 'Puan Mimarı' },
  { level: 10, min: 3200, title: 'YDS Efsanesi' },
] as const;

export function levelInfo(points: number) {
  let idx = 0;
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (points >= LEVELS[i].min) {
      idx = i;
      break;
    }
  }
  const current = LEVELS[idx];
  const next = LEVELS[idx + 1] ?? null;
  const span = next ? next.min - current.min : 1;
  const into = next ? points - current.min : 0;
  return {
    level: current.level,
    title: current.title,
    points,
    nextLevelAt: next?.min ?? null,
    nextTitle: next?.title ?? null,
    progressPct: next ? Math.min(100, Math.round((into / span) * 100)) : 100,
  };
}

/** Oturumu açık kullanıcının TÜM ilerlemesini tek çağrıda toplar */
export async function getMyProgress(): Promise<MyProgress> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        loggedIn: false,
        stats: null,
        mastery: [],
        weakTopic: null,
        recentExams: [],
        listening: [],
        recentActivity: [],
      };
    }

    const [statsRes, masteryRes, examsRes, listenRes, activityRes] = await Promise.all([
      supabase.from('user_stats').select('*').eq('user_id', user.id).maybeSingle(),
      supabase.from('topic_mastery').select('*').eq('user_id', user.id).order('success_rate', { ascending: true }),
      supabase.from('exam_results').select('exam_name, score, correct, wrong, empty, taken_at')
        .eq('user_id', user.id).order('taken_at', { ascending: false }).limit(5),
      supabase.from('listening_progress').select('topic_slug, completed, position_seconds')
        .eq('user_id', user.id),
      supabase.from('activity_log').select('activity_type, topic_slug, points, created_at')
        .eq('user_id', user.id).order('created_at', { ascending: false }).limit(10),
    ]);

    const mastery = (masteryRes.data ?? []) as TopicMastery[];
    // Zayıf konu: en az 5 denemesi olanlar içinde en düşük başarı
    const weakTopic = mastery.filter((m) => m.attempts >= 5).sort((a, b) => a.success_rate - b.success_rate)[0] ?? null;

    return {
      loggedIn: true,
      stats: statsRes.data ?? null,
      mastery,
      weakTopic,
      recentExams: examsRes.data ?? [],
      listening: listenRes.data ?? [],
      recentActivity: activityRes.data ?? [],
    };
  } catch (err) {
    // // SAFETY: Veritabanı hatasında sayfanın çökmesini engelle
    return {
      loggedIn: false,
      stats: null,
      mastery: [],
      weakTopic: null,
      recentExams: [],
      listening: [],
      recentActivity: [],
    };
  }
}

/** Push bildirimlerini kişiselleştirmek için hafif özet (Modül 2 yaması kullanır) */
export async function getProgressDigestForUser(userId: string) {
  try {
    const { createAdminClient } = await import('@/lib/push/supabase-admin');
    const admin = createAdminClient();

    const [statsRes, answersRes] = await Promise.all([
      admin.from('user_stats').select('current_streak, points, total_correct, total_questions').eq('user_id', userId).maybeSingle(),
      admin.from('quiz_answers')
        .select('topic_slug, is_correct')
        .eq('user_id', userId),
    ]);

    const byTopic = new Map<string, { attempts: number; correct: number }>();
    for (const row of answersRes.data ?? []) {
      const t = byTopic.get(row.topic_slug) ?? { attempts: 0, correct: 0 };
      t.attempts++;
      if (row.is_correct) t.correct++;
      byTopic.set(row.topic_slug, t);
    }

    let weakTopic: string | null = null;
    let weakRate = 101;
    for (const [slug, v] of byTopic) {
      if (v.attempts < 5) continue;
      const rate = (v.correct / v.attempts) * 100;
      if (rate < weakRate) {
        weakRate = rate;
        weakTopic = slug;
      }
    }

    return {
      streak: statsRes.data?.current_streak ?? 0,
      points: statsRes.data?.points ?? 0,
      accuracy: statsRes.data?.total_questions
        ? Math.round((100 * (statsRes.data?.total_correct ?? 0)) / statsRes.data.total_questions)
        : null,
      weakTopic,
      weakRate: weakTopic ? Math.round(weakRate) : null,
    };
  } catch {
    return null;
  }
}
