"use client";

import { useEffect, useState } from "react";

type Attribution = {
  creator: string;
  licenseName: string;
  licenseUrl: string;
  filePageUrl: string;
};

export default function HumanAudioAttributionNotice() {
  const [attribution, setAttribution] = useState<Attribution | null>(null);

  useEffect(() => {
    const handle = (event: Event) => {
      const detail = (event as CustomEvent<Attribution>).detail;
      if (
        detail && typeof detail.creator === "string" &&
        detail.filePageUrl?.startsWith("https://commons.wikimedia.org/wiki/File:") &&
        detail.licenseUrl?.startsWith("https://")
      ) setAttribution(detail);
    };
    window.addEventListener("dil-master:human-audio-attribution", handle);
    return () => window.removeEventListener("dil-master:human-audio-attribution", handle);
  }, []);

  if (!attribution) return null;

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-3 left-3 right-3 z-[120] mx-auto max-w-xl rounded-xl border border-emerald-300/30 bg-slate-950/95 px-3 py-2 text-xs text-white shadow-xl backdrop-blur"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="leading-relaxed">
          İnsan telaffuz kaydı: {attribution.creator}. Lisans: {" "}
          <a href={attribution.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{attribution.licenseName}</a>
          {" · "}<a href={attribution.filePageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">kayıt kaynağı</a>
        </p>
        <button type="button" onClick={() => setAttribution(null)} className="shrink-0 rounded px-1 text-white/70 hover:text-white" aria-label="Kayıt lisansı bildirimini kapat">Kapat</button>
      </div>
    </aside>
  );
}
