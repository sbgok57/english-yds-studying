// ============================================================
// src/lib/progress/tracker.ts
// YDS EXAM – İlerleme kaydedici (istemci tarafı)
// TEK yazma kapısı sunucudaki track_activity RPC'sidir;
// bu dosya yalnız "ne oldu"yu bildirir.
// ============================================================
import { createClient } from '@/lib/supabase/client';

export type ActivityType = 'listen' | 'quiz' | 'vocab' | 'exam' | 'task';

// Puan tarifesi (oyunlaştırma)
export const POINTS = {
  listenMinute: 1,      // dinlenen her dakika
  quizAnswer: 1,        // çözülen her soru
  quizCorrect: 5,       // her doğru (ek)
  vocabReview: 2,       // kelime tekrarı
  vocabMastered: 10,    // kelime "öğrenildi" işaretlenince
  examCompleted: 50,    // tamamlanan deneme
  dailyTask: 15,        // günlük görev tamam
} as const;

export interface TrackOptions {
  topic?: string;
  points?: number;
  seconds?: number;
  payload?: Record<string, unknown>;
}

export interface UserStats {
  user_id: string;
  points: number;
  total_questions: number;
  total_correct: number;
  total_listen_sec: number;
  total_study_sec: number;
  current_streak: number;
  longest_streak: number;
  last_active_on: string | null;
  updated_at: string;
}

/**
 * Bir aktiviteyi kaydeder; güncellenmiş user_stats döner.
 * Kullanıcı giriş yapmamışsa null döner.
 */
export async function trackEvent(type: ActivityType, opts: TrackOptions = {}): Promise<UserStats | null> {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase.rpc('track_activity', {
      p_type: type,
      p_topic: opts.topic ?? null,
      p_points: opts.points ?? 0,
      p_seconds: opts.seconds ?? 0,
      p_payload: (opts.payload ?? {}) as any,
    });

    if (error) {
      console.warn('[progress] track hatası:', error.message);
      return null;
    }
    return data as UserStats;
  } catch (err) {
    // // SAFETY: Hata durumunda uygulamanın kilitlenmesini engelle
    return null;
  }
}

/** Soru cevabını kaydet + ilerlemeye işle */
export async function recordAnswer(args: {
  topic: string;
  questionId: string;
  chosen: string;
  correctAnswer: string;
  timeSpentSec?: number;
}) {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { saved: false, reason: 'login-required' as const };

    const isCorrect = args.chosen === args.correctAnswer;

    // Aynı soru tekrar çözülürse üzerine yaz (unique(user_id, question_id))
    const { error } = await supabase.from('quiz_answers').upsert(
      {
        user_id: user.id,
        topic_slug: args.topic,
        question_id: args.questionId,
        chosen: args.chosen,
        correct_answer: args.correctAnswer,
        is_correct: isCorrect,
        time_spent_sec: args.timeSpentSec ?? 0,
        answered_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,question_id' }
    );
    if (error) return { saved: false, reason: error.message };

    // İlerlemeye işle
    const stats = await trackEvent('quiz', {
      topic: args.topic,
      points: POINTS.quizAnswer + (isCorrect ? POINTS.quizCorrect : 0),
      seconds: args.timeSpentSec ?? 0,
      payload: { questionId: args.questionId, isCorrect },
    });

    return { saved: true, isCorrect, stats };
  } catch (err: any) {
    return { saved: false, reason: err?.message || 'Bağlantı hatası' };
  }
}
