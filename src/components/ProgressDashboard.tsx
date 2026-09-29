// ============================================================
// src/components/ProgressDashboard.tsx
// /ilerleme sayfası — kişisel ilerleme panosu (server component)
// ============================================================
import { getMyProgress, levelInfo } from '@/lib/progress/stats';
import { GRAMMAR_CURRICULUM } from '@/lib/grammar-curriculum';
import { calculateStudentProgress } from '@/lib/progress/calculator';
import Link from 'next/link';

const TOPIC_TITLES: Record<string, string> = Object.fromEntries(
  GRAMMAR_CURRICULUM.map((c) => [c.slug, c.title])
);

function fmtDuration(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.round((sec % 3600) / 60);
  return h > 0 ? `${h} sa ${m} dk` : `${m} dk`;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}

const TYPE_META: Record<string, { icon: string; label: string }> = {
  listen: { icon: '🎧', label: 'Dinleme' },
  quiz: { icon: '✏️', label: 'Soru çözümü' },
  vocab: { icon: '🧠', label: 'Kelime' },
  exam: { icon: '📝', label: 'Deneme' },
  task: { icon: '✅', label: 'Görev' },
};

export default async function ProgressDashboard() {
  const p = await getMyProgress();

  if (!p.loggedIn) {
    return (
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-8 text-center shadow-2xl">
        <p className="text-4xl mb-2">🔐</p>
        <h2 className="text-2xl font-black text-white">İlerlemen Sana Özel Kaydedilsin mi?</h2>
        <p className="mt-2 text-sm text-white/70 max-w-md mx-auto leading-relaxed">
          Giriş yaptığında her aktiviten — dinlediğin sesli dersler, çözdüğün sorular,
          kelime tekrarların ve denemelerin — <strong>yalnızca sana özel</strong> güvenle saklanır.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/giris"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-sm text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
          >
            Giriş Yap →
          </Link>
          <Link
            href="/hesap"
            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 font-bold text-sm text-white hover:bg-white/10 transition-all"
          >
            Kayıt Ol / Hesap
          </Link>
        </div>
      </div>
    );
  }

  const lvl = levelInfo(p.stats?.points ?? 0);
  const accuracy = p.stats?.total_questions
    ? Math.round((100 * p.stats.total_correct) / p.stats.total_questions)
    : null;

  // PERF: Calculate real weighted overall progress percentage
  const progress = calculateStudentProgress({
    wordsLearned: Math.round((p.stats?.points ?? 0) / 10),
    grammarCompleted: p.mastery.length,
    tacticsCompleted: Math.min(11, Math.round(p.mastery.length / 2)),
    questionsSolved: p.stats?.total_questions ?? 0,
    examsTaken: p.recentExams.length,
  });

  return (
    <div className="space-y-6">
      {/* ── Genel YDS Hazırlık Yüzdesi Hero Kartı ── */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/70 to-purple-950/60 p-6 sm:p-8 text-white shadow-2xl border border-cyan-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-xs font-black uppercase tracking-wider text-cyan-300">
              <span>{progress.milestoneEmoji}</span>
              <span>{progress.milestoneTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Genel YDS Hazırlık İlerlemesi
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg">
              {progress.milestoneMessage}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl shrink-0">
            <div className="text-right">
              <span className="block text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400">
                %{progress.overallPercent}
              </span>
              <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider">
                Tamamlandı
              </span>
            </div>
          </div>
        </div>

        {/* Ana İlerleme Çubuğu */}
        <div className="mt-6 space-y-2 relative z-10">
          <div className="flex justify-between text-xs font-bold text-white/70">
            <span>Yolculuk İlerlemesi</span>
            <span className="text-cyan-300 font-mono">%{progress.overallPercent} / %100</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-black/50 border border-white/10 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-cyan-500/30 transition-all duration-700"
              style={{ width: `${Math.max(3, progress.overallPercent)}%` }}
            />
          </div>
        </div>

        {/* 4 Ana Alanın Yüzdelik Kırılımı */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10 relative z-10">
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5 text-center">
            <span className="text-xs text-white/60 font-semibold block">🧠 Kelime</span>
            <span className="text-lg font-black text-pink-400">%{progress.vocabulary.percent}</span>
            <span className="text-[10px] text-white/40 block mt-0.5">
              {progress.vocabulary.learned} / {progress.vocabulary.total} Kelime
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5 text-center">
            <span className="text-xs text-white/60 font-semibold block">📖 Gramer</span>
            <span className="text-lg font-black text-purple-400">%{progress.grammar.percent}</span>
            <span className="text-[10px] text-white/40 block mt-0.5">
              {progress.grammar.completed} / {progress.grammar.total} Konu
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5 text-center">
            <span className="text-xs text-white/60 font-semibold block">🎯 Taktikler</span>
            <span className="text-lg font-black text-emerald-400">%{progress.tactics.percent}</span>
            <span className="text-[10px] text-white/40 block mt-0.5">
              {progress.tactics.completed} / {progress.tactics.total} Taktik
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5 text-center">
            <span className="text-xs text-white/60 font-semibold block">📝 Soru Pratiği</span>
            <span className="text-lg font-black text-cyan-400">%{progress.practice.percent}</span>
            <span className="text-[10px] text-white/40 block mt-0.5">
              {progress.practice.questionsSolved} Soru · {progress.practice.examsTaken} Deneme
            </span>
          </div>
        </div>
      </section>

      {/* ── Seviye Kartı (XP & Rank) ── */}
      <section className="rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-6 sm:p-8 text-white shadow-2xl border border-purple-500/30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400/40 text-[11px] font-black uppercase tracking-wider text-purple-200">
              <span>🏆</span> Seviye {lvl.level}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-2 text-white">{lvl.title}</h2>
          </div>
          <div className="text-right">
            <p className="text-3xl sm:text-4xl font-black text-amber-300">{p.stats?.points ?? 0}</p>
            <p className="text-xs text-white/60 font-mono">Toplam Puan (XP)</p>
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-black/40 border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-500"
            style={{ width: `${lvl.progressPct}%` }}
          />
        </div>

        <p className="mt-2.5 text-xs text-white/80 font-medium">
          {lvl.nextTitle
            ? `${lvl.title} ➔ ${lvl.nextTitle} seviyesine ulaşmak için ${lvl.nextLevelAt! - (p.stats?.points ?? 0)} puan kaldı.`
            : 'Tebrikler! En yüksek YDS Efsanesi seviyesindesin! 👑'}
        </p>
      </section>

      {/* ── Sayaçlar (Grid) ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            icon: '🔥',
            big: `${p.stats?.current_streak ?? 0} gün`,
            small: `Çalışma serisi (Rekor: ${p.stats?.longest_streak ?? 0})`,
            color: 'text-amber-400',
          },
          {
            icon: '✏️',
            big: `${p.stats?.total_questions ?? 0}`,
            small: 'Çözülen soru',
            color: 'text-cyan-400',
          },
          {
            icon: '🎯',
            big: accuracy == null ? '—' : `%${accuracy}`,
            small: 'Genel doğruluk oranı',
            color: 'text-emerald-400',
          },
          {
            icon: '🎧',
            big: fmtDuration(p.stats?.total_listen_sec ?? 0),
            small: 'Sesli gramer dinleme',
            color: 'text-purple-400',
          },
        ].map((c) => (
          <div
            key={c.small}
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-center backdrop-blur-xl shadow-lg"
          >
            <p className="text-2xl">{c.icon}</p>
            <p className={`text-xl font-black mt-1 ${c.color}`}>{c.big}</p>
            <p className="text-[11px] text-white/50 mt-0.5">{c.small}</p>
          </div>
        ))}
      </section>

      {/* ── Zayıf Konu Önerisi (Bugün Buna Odaklan) ── */}
      {p.weakTopic && (
        <section className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 backdrop-blur-xl space-y-1">
          <p className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>📌</span> Bugün Buna Odaklan
          </p>
          <p className="text-sm text-white/90 leading-relaxed">
            Şu an en çok pratik isteyen konun:{' '}
            <strong className="text-amber-200">
              {TOPIC_TITLES[p.weakTopic.topic_slug] ?? p.weakTopic.topic_slug}
            </strong>{' '}
            (%{p.weakTopic.success_rate} başarı, {p.weakTopic.attempts} soru çözüldü). Bu konudan 10 soru çözerek netini hızla artırabilirsin!
          </p>
        </section>
      )}

      {/* ── Konu Ustalık Barları ── */}
      <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 space-y-4">
        <h3 className="font-black text-white text-base flex items-center gap-2">
          <span>📊</span> Konu Bazlı Başarı & Ustalık
        </h3>
        {p.mastery.length === 0 ? (
          <p className="text-xs text-white/50">
            Henüz soru çözmediniz. Soru çözdükçe her konunun başarı yüzdesi burada otomatik listelenecektir.
          </p>
        ) : (
          <div className="space-y-3">
            {p.mastery.map((m) => (
              <div key={m.topic_slug} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white/80">
                    {TOPIC_TITLES[m.topic_slug] ?? m.topic_slug}
                  </span>
                  <span className="text-white/50 font-mono text-[11px]">
                    %{m.success_rate} · {m.correct}/{m.attempts} doğru
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5 border border-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      m.success_rate >= 70
                        ? 'bg-emerald-500'
                        : m.success_rate >= 45
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${m.success_rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Son Deneme Sonuçları ── */}
      <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 space-y-4">
        <h3 className="font-black text-white text-base flex items-center gap-2">
          <span>📝</span> Son Deneme Sonuçları
        </h3>
        {p.recentExams.length === 0 ? (
          <p className="text-xs text-white/50">Henüz tamamlanan resmi veya özgün deneme sınavı kaydı yok.</p>
        ) : (
          <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
            {p.recentExams.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 bg-white/[0.02] text-xs"
              >
                <div>
                  <p className="font-bold text-white">{e.exam_name}</p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {fmtDate(e.taken_at)} · {e.correct}D / {e.wrong}Y / {e.empty}B
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-black">
                  {e.score} Puan
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Son Aktiviteler ── */}
      <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 space-y-4">
        <h3 className="font-black text-white text-base flex items-center gap-2">
          <span>🕘</span> Son Aktiviteler
        </h3>
        {p.recentActivity.length === 0 ? (
          <p className="text-xs text-white/50">İlk çalışmanızı yaptığınızda günlük buraya işlenecektir.</p>
        ) : (
          <ul className="space-y-2">
            {p.recentActivity.map((a, i) => {
              const meta = TYPE_META[a.activity_type] ?? { icon: '•', label: a.activity_type };
              return (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-2.5 text-xs"
                >
                  <span className="text-white/80">
                    <span className="mr-1.5">{meta.icon}</span>
                    <strong>{meta.label}</strong>
                    {a.topic_slug ? ` — ${TOPIC_TITLES[a.topic_slug] ?? a.topic_slug}` : ''}
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">
                    +{a.points} XP · <span className="text-white/40">{fmtDate(a.created_at)}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
