"use client";

import { useMemo, useState } from "react";
import { clampPage } from "@/shared/game-feedback";
import { filterMotivationResources, motivationEmbedUrl, motivationExternalUrl, MOTIVATION_CATEGORIES, type MotivationCategory, type MotivationResource } from "@/shared/motivation-catalog";

type Props = {
  /** Pass only reviewed entries with a working official embed and appropriate rights/terms. */
  resources: readonly MotivationResource[];
  pageSize?: number;
};

const CATEGORY_LABELS: Record<MotivationCategory, string> = {
  focus: "Odak",
  discipline: "Disiplin",
  "exam-stress": "Sınav kaygısı",
  confidence: "Özgüven",
  rest: "Mola ve dinlenme",
  listening: "İngilizce listening",
};

/** Paginated official YouTube/Spotify embeds. Count is derived from verified data; never hard-coded. */
export function MotivationHub({ resources, pageSize = 8 }: Props) {
  const [category, setCategory] = useState<MotivationCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const safePageSize = Number.isInteger(pageSize) ? Math.max(1, Math.min(24, pageSize)) : 8;
  const visibleResources = useMemo(() => filterMotivationResources(resources, category, search), [resources, category, search]);
  const pageCount = Math.ceil(visibleResources.length / safePageSize);
  const currentPage = clampPage(page, visibleResources.length, safePageSize);
  const pageItems = visibleResources.slice(currentPage * safePageSize, (currentPage + 1) * safePageSize);

  function changeCategory(value: MotivationCategory | "all") {
    setCategory(value);
    setPage(0);
    setPlayingId(null);
  }

  function changeSearch(value: string) {
    setSearch(value);
    setPage(0);
    setPlayingId(null);
  }

  return (
    <section className="yds-card yds-panel yds-motivation-hub" aria-labelledby="yds-motivation-heading">
      <div className="yds-panel-heading">
        <div>
          <p className="yds-eyebrow">Küçük bir mola, yeni bir başlangıç</p>
          <h2 id="yds-motivation-heading">Motivasyon ve dinleme kütüphanesi</h2>
          <p className="yds-subtitle">Yalnızca onaylı katalog kayıtları gösterilir; içerik platformların resmi gömülü oynatıcısında açılır.</p>
        </div>
        <span className="yds-badge">{visibleResources.length} doğrulanmış içerik</span>
      </div>

      <div className="yds-motivation-filters">
        <label>İçerik ara
          <input type="search" value={search} maxLength={80} onChange={(event) => changeSearch(event.target.value)} placeholder="Başlık, içerik üreticisi veya dil…" />
        </label>
        <label>Kategori
          <select value={category} onChange={(event) => changeCategory(event.target.value as MotivationCategory | "all")}>
            <option value="all">Tüm kategoriler</option>
            {MOTIVATION_CATEGORIES.map((item) => <option key={item} value={item}>{CATEGORY_LABELS[item]}</option>)}
          </select>
        </label>
      </div>

      {pageItems.length === 0 ? (
        <p className="yds-exam-notice" role="status">Bu filtrede doğrulanmış kayıt yok. Katalog dosyasına izinli/resmî içerik eklendikçe sayı kendiliğinden güncellenir; boş listeye sahte içerik eklenmez.</p>
      ) : (
        <div className="yds-motivation-list">
          {pageItems.map((resource) => {
            const embedUrl = motivationEmbedUrl(resource);
            const externalUrl = motivationExternalUrl(resource);
            if (!embedUrl || !externalUrl) return null;
            const isPlaying = playingId === resource.id;
            return (
              <article className="yds-motivation-item" key={`${resource.platform}-${resource.id}`}>
                <div className="yds-motivation-item-header">
                  <span className="yds-exam-chip" data-tone={resource.platform === "youtube" ? "blue" : "teal"}>
                    {resource.platform === "youtube" ? "▶ YouTube" : "♫ Spotify"}
                  </span>
                  <span className="yds-exam-chip" data-tone="orange">{CATEGORY_LABELS[resource.category]}</span>
                  {resource.durationMinutes !== undefined && <span className="yds-exam-footnote">{resource.durationMinutes} dk</span>}
                </div>
                <h3>{resource.title}</h3>
                <p><strong>{resource.creator}</strong> · {resource.language}</p>
                <p>{resource.description}</p>
                {isPlaying && (
                  <div className="yds-motivation-embed">
                    <iframe
                      src={embedUrl}
                      title={`${resource.title} — ${resource.platform} resmi oynatıcı`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="autoplay; encrypted-media; picture-in-picture; clipboard-write; fullscreen"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="yds-motivation-actions">
                  <button className="yds-button" type="button" aria-expanded={isPlaying} onClick={() => setPlayingId(isPlaying ? null : resource.id)}>
                    {isPlaying ? "Oynatıcıyı kapat" : "Resmî oynatıcıyı aç"}
                  </button>
                  <a className="yds-button yds-button-secondary" href={externalUrl} target="_blank" rel="noopener noreferrer">Platformda aç ↗</a>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {pageCount > 1 && (
        <nav className="yds-motivation-pagination" aria-label="Motivasyon içeriği sayfaları">
          <button className="yds-button yds-button-secondary" type="button" disabled={currentPage <= 0} onClick={() => { setPage((value) => Math.max(0, value - 1)); setPlayingId(null); }}>Önceki</button>
          <span aria-live="polite">Sayfa {currentPage + 1} / {pageCount}</span>
          <button className="yds-button yds-button-secondary" type="button" disabled={currentPage >= pageCount - 1} onClick={() => { setPage((value) => Math.min(pageCount - 1, value + 1)); setPlayingId(null); }}>Sonraki</button>
        </nav>
      )}
      <p className="yds-exam-footnote">Bu panel katalog altyapısıdır; 1.000+ kayıt bu repoda hazır değildir. Gerçek sayı yalnızca `resources` listesinde lisansı/kaynağı ve çalışır embed'i doğrulanmış öğelerden hesaplanır. Video/podcast indirilmez veya kopyalanmaz.</p>
    </section>
  );
}

