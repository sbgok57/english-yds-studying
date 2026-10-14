"use client";

import { useId, useState } from "react";

type Props = {
  topic: string;
  prompt: string;
  imageUrl: string;
  imageAlt: string;
  memoryCue: string;
  explanation: string;
  sourceLabel?: string;
  onSpeak?: (text: string) => void;
};

/** 3D flip card for a licensed/original user-supplied mnemonic image and its learning cue. */
export function VisualMemoryCard({
  topic,
  prompt,
  imageUrl,
  imageAlt,
  memoryCue,
  explanation,
  sourceLabel = "Özgün / yetkili görsel",
  onSpeak,
}: Props) {
  const id = useId();
  const [revealed, setRevealed] = useState(false);
  const backText = `${topic}. ${memoryCue}. ${explanation}`;

  return (
    <section className="yds-visual-memory-card" aria-labelledby={`${id}-heading`}>
      <div className="yds-visual-memory-heading">
        <div><p className="yds-eyebrow">Görsel hafıza · 3D kart</p><h3 id={`${id}-heading`}>{topic}</h3></div>
        {onSpeak && <button className="yds-icon-button" type="button" onClick={() => onSpeak(backText)} aria-label={`${topic} görsel kartının açıklamasını seslendir`}>🔊</button>}
      </div>
      <div className="yds-visual-memory-scene">
        <button
          className="yds-visual-memory-flipper"
          type="button"
          data-revealed={revealed}
          aria-pressed={revealed}
          aria-label={revealed ? `${topic} açıklaması açık; karta basarak görseli tekrar göster` : `${topic} görselini göster; etkinleştirerek açıklamayı aç`}
          onClick={() => setRevealed((current) => !current)}
        >
          <span className="yds-visual-memory-face yds-visual-memory-front" aria-hidden={revealed}>
            <img src={imageUrl} alt={imageAlt} loading="lazy" decoding="async" />
            <span className="yds-visual-memory-overlay"><small>{sourceLabel}</small><strong>{prompt}</strong><span>Hatırla ve kartı çevir ↻</span></span>
          </span>
          <span className="yds-visual-memory-face yds-visual-memory-back" aria-hidden={!revealed}>
            <span className="yds-visual-memory-emoji" aria-hidden="true">🧠</span>
            <strong>{memoryCue}</strong>
            <span>{explanation}</span>
            <small>Bir kez daha düşün, sonra kendi cümlenle anlat.</small>
          </span>
        </button>
      </div>
      <p className="yds-exam-footnote">Görsel, host uygulamanın verdiği `imageUrl` üzerinden gösterilir. Kaynağı/lisansı doğrulanmalı; ekran okuyucu açıklaması `imageAlt` ile sağlanmalıdır.</p>
    </section>
  );
}
