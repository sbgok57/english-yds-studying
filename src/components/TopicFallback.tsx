import Link from "next/link";

/** Bilinmeyen slug için 404 yerine dost bir "konu bulunamadı" ekranı — asla 404 döndürmez. */
export default function TopicFallback({
  title,
  slug,
  items,
  listHref,
}: {
  title: string;
  slug: string;
  items: { slug: string; title: string; emoji: string }[];
  listHref: string;
}) {
  // yakın eşleşme öner (küçük yazım hatalarına karşı)
  const suggestions = items
    .filter((i) => i.slug.includes(slug.slice(0, 5)) || slug.includes(i.slug.slice(0, 5)))
    .slice(0, 6);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="card-vibrant p-10 text-center space-y-5">
        <div className="text-6xl">🧭</div>
        <h1 className="text-3xl font-black">
          Kanka, <span className="gradient-text">"{slug}"</span> diye bir {title.toLowerCase()} bulamadım!
        </h1>
        <p className="text-sm text-white/60 leading-relaxed">
          Panik yok — aşağıdaki {title.toLowerCase()}lerden birini seçebilirsin. Site çökmedi, sadece
          bu adres değişmiş olabilir. 👇
        </p>

        {suggestions.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Bunları mı arıyordun?</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s.slug}
                  href={`${listHref}/${s.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/80 hover:border-cyan-400/50 hover:text-white transition-all"
                >
                  {s.emoji} {s.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href={listHref}
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
        >
          ← Tüm {title.toLowerCase()}ler
        </Link>
      </div>
    </div>
  );
}
