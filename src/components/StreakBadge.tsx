"use client";

// ============================================================
// src/components/StreakBadge.tsx
// Header için küçük seri rozeti (client component)
// <StreakBadge /> → 🔥 4 gün (veya giriş yapılmadıysa hiçbir şey)
// ============================================================
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

export default function StreakBadge() {
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    async function loadStreak() {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user || !mounted) return;

        const { data } = await supabase
          .from('user_stats')
          .select('current_streak')
          .eq('user_id', user.id)
          .maybeSingle();

        if (mounted && data?.current_streak) {
          setStreak(data.current_streak);
        }
      } catch {
        // // SAFETY: Sessiz failover
      }
    }
    loadStreak();
    return () => {
      mounted = false;
    };
  }, []);

  if (streak === 0) return null;

  return (
    <Link
      href="/ilerleme"
      className="flex items-center gap-1 rounded-full bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300 transition hover:bg-amber-500/30 shadow-sm shrink-0"
      title="Çalışma serin — detaylar için tıkla"
    >
      <span>🔥</span>
      <span>{streak} gün</span>
    </Link>
  );
}
