"use client";

/** Route seviyesi hata yakalayıcı — Next.js App Router için.
 *  Herhangi bir sayfa çökerse kullanıcıya dost bir kurtarma ekranı gösterir. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="card-vibrant p-10 text-center max-w-md w-full space-y-4">
        <div className="text-5xl">🧯</div>
        <h1 className="text-2xl font-black">Kanka, sayfa küçük bir hata verdi.</h1>
        <p className="text-sm text-white/60 leading-relaxed">
          Endişelenme — senin verilerin (kayıtların, serilerin) güvende. Sadece bu ekran
          yenilendi. Tekrar dene, hallederiz!
        </p>
        {process.env.NODE_ENV === "development" && (
          <p className="text-[11px] font-mono text-white/40 break-words">
            {error.message}
          </p>
        )}
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
        >
          🔄 Tekrar Dene
        </button>
      </div>
    </div>
  );
}
