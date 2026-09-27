// ============================================================
// /ilerleme — kişisel ilerleme sayfası
// ============================================================
import ProgressDashboard from '@/components/ProgressDashboard';
import Link from 'next/link';

export const metadata = {
  title: 'İlerlemem — YDS Master',
  description: 'Kişisel YDS çalışma ilerlemesi, konu bazlı başarı oranları, çalışma serisi ve aktiviteler.',
};

export const dynamic = 'force-dynamic';

export default function ProgressPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">
            <span>📈</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              Kişisel İlerlemem
            </span>
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Neyi ne kadar yaptıysan burada: Her hesap yalnızca kendi ilerlemesini görür ve geliştirir.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/grammar/audio"
            className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all flex items-center gap-1"
          >
            <span>🎧</span> Sesli Gramer
          </Link>
          <Link
            href="/ayarlar"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-xs transition-all flex items-center gap-1"
          >
            <span>⚙️</span> Ayarlar
          </Link>
        </div>
      </header>

      <ProgressDashboard />
    </main>
  );
}
