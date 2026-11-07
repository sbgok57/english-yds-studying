"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import {
  resolveWordVisualManifest,
  VisualMode,
} from "@/lib/media/visual-asset-registry";
import { Camera, Sparkles, Box, BookOpen, Info, Image as ImageIcon, Film } from "lucide-react";

function Lightweight3DMeaningCard({ english, turkish }: { english: string; turkish: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      aria-label={`${english}: anlamı görmek için çevir`}
      onClick={() => setFlipped((value) => !value)}
      className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center rounded-3xl border border-cyan-300/30 bg-[radial-gradient(ellipse_at_50%_20%,#4338ca,#111827_68%)] p-6 text-center shadow-2xl [perspective:900px]"
    >
      <span className="absolute left-4 top-3 text-[10px] font-semibold uppercase tracking-wider text-cyan-100/80">Hafif CSS 3D anlam kartı · çevirmek için dokun</span>
      <span className="absolute -right-4 -top-2 h-20 w-20 rounded-full bg-fuchsia-400/20 blur-2xl" aria-hidden="true" />
      <span className="relative block w-full rounded-2xl border border-white/20 bg-slate-950/35 px-5 py-8 shadow-xl transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <span className="block text-xs uppercase tracking-[0.25em] text-cyan-200">{flipped ? "Türkçe anlam" : "English word"}</span>
        <span className="mt-3 block text-3xl font-black text-white" style={{ transform: flipped ? "rotateY(180deg)" : undefined }}>{flipped ? turkish : english}</span>
      </span>
    </button>
  );
}

export interface VocabularyVisualProps {
  english: string;
  turkish: string;
  partOfSpeech?: string;
  level?: string;
  definitionEn?: string;
  example?: string;
  compact?: boolean;
  initialMode?: VisualMode;
  className?: string;
}

const MODE_LABELS: Record<VisualMode, { labelTr: string; icon: React.ComponentType<{ className?: string }> }> = {
  photo: { labelTr: "Fotoğraf", icon: Camera },
  photorealistic: { labelTr: "Foto-gerçekçi AI", icon: ImageIcon },
  cartoon: { labelTr: "Çizgi Film", icon: Film },
  animation: { labelTr: "Animasyon / Şema", icon: Sparkles },
  "3d": { labelTr: "3D Görünüm", icon: Box },
  ai3d: { labelTr: "3D Hafıza Görseli", icon: Sparkles },
  card: { labelTr: "Anlam Kartı", icon: BookOpen },
};

type GeneratedVisualResponse = { imageUrl?: unknown };
type CommonsVisual = {
  imageUrl: string;
  alt: string;
  license: string;
  attribution: string;
  licenseUrl: string | null;
  sourcePage: string | null;
  mimeType: string;
  mediaType: "image" | "animated-image";
  requestKey?: string;
};
type GeneratedImageMode = Extract<VisualMode, "ai3d" | "photorealistic" | "cartoon">;
type GeneratedImageStatus = "idle" | "loading" | "ready" | "error";

function isGeneratedImageMode(mode: VisualMode): mode is GeneratedImageMode {
  return mode === "ai3d" || mode === "photorealistic" || mode === "cartoon";
}

const IMAGE_STYLE_BY_MODE: Record<GeneratedImageMode, "3d" | "photorealistic" | "cartoon"> = {
  ai3d: "3d",
  photorealistic: "photorealistic",
  cartoon: "cartoon",
};

const GENERATED_MODE_LABELS: Record<GeneratedImageMode, string> = {
  ai3d: "3D sahnesi",
  photorealistic: "foto-gerçekçi AI görseli",
  cartoon: "çizgi film görseli",
};

function isGeneratedVisualResponse(value: unknown): value is GeneratedVisualResponse {
  return typeof value === "object" && value !== null && "imageUrl" in value;
}

export default function VocabularyVisual({
  english,
  turkish,
  partOfSpeech = "academic",
  level = "B2",
  definitionEn,
  example,
  compact = false,
  initialMode,
  className = "",
}: VocabularyVisualProps) {
  const manifest = useMemo(
    () => resolveWordVisualManifest({ english, turkish, partOfSpeech, level, definitionEn, example }),
    [english, turkish, partOfSpeech, level, definitionEn, example]
  );

  const [activeMode, setActiveMode] = useState<VisualMode>(() => {
    if (initialMode && manifest.availableModes.includes(initialMode)) {
      return initialMode;
    }
    return manifest.defaultMode;
  });

  const [photoError, setPhotoError] = useState(false);
  const [commonsVisual, setCommonsVisual] = useState<CommonsVisual | null>(null);
  const [failedCommonsImageUrl, setFailedCommonsImageUrl] = useState<string | null>(null);
  const [commonsStatus, setCommonsStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [commonsError, setCommonsError] = useState("");
  const [commonsRetry, setCommonsRetry] = useState(0);
  const [compactVisible, setCompactVisible] = useState(
    !compact,
  );
  const [generatedImages, setGeneratedImages] = useState<Partial<Record<GeneratedImageMode, string>>>(
    manifest.threeD.imageUrl ? { ai3d: manifest.threeD.imageUrl } : {},
  );
  const [generatedImageStatuses, setGeneratedImageStatuses] = useState<Partial<Record<GeneratedImageMode, GeneratedImageStatus>>>(
    manifest.threeD.imageUrl ? { ai3d: "ready" } : {},
  );
  const [generatedImageErrors, setGeneratedImageErrors] = useState<Partial<Record<GeneratedImageMode, boolean>>>({});
  const [generatedImageErrorMessages, setGeneratedImageErrorMessages] = useState<Partial<Record<GeneratedImageMode, string>>>({});
  const [requestedGenerationKey, setRequestedGenerationKey] = useState<string | null>(null);
  const [generatedImageRetry, setGeneratedImageRetry] = useState(0);
  const compactVisualRef = useRef<HTMLDivElement | null>(null);

  const effectiveModes = manifest.availableModes;
  const currentMode: VisualMode = effectiveModes.includes(activeMode)
    ? activeMode
    : effectiveModes[0] || "card";
  const generatedImageMode = isGeneratedImageMode(currentMode) ? currentMode : null;
  const generatedImageUrl = generatedImageMode ? generatedImages[generatedImageMode] || null : null;
  const generatedImageStatus = generatedImageMode ? generatedImageStatuses[generatedImageMode] || "idle" : "idle";
  const generatedImageError = generatedImageMode ? Boolean(generatedImageErrors[generatedImageMode]) : false;
  const commonsRequestKey = `${manifest.wordSlug}:${currentMode}`;
  const currentCommonsVisual = commonsVisual?.requestKey === commonsRequestKey && commonsVisual.imageUrl !== failedCommonsImageUrl
    ? commonsVisual
    : null;

  // Kelime değiştiğinde varsayılan moda sıfırla ve reduced-motion tercihini kontrol et
  useEffect(() => {
    setPhotoError(false);
    setCommonsVisual(null);
    setCommonsStatus("idle");
    setCommonsError("");
    setCommonsRetry(0);
    setGeneratedImageErrors({});
    setGeneratedImageErrorMessages({});
    setGeneratedImageRetry(0);
    setGeneratedImages(manifest.threeD.imageUrl ? { ai3d: manifest.threeD.imageUrl } : {});
    setGeneratedImageStatuses(manifest.threeD.imageUrl ? { ai3d: "ready" } : {});
    setCompactVisible(!compact || Boolean(manifest.threeD.imageUrl));
    const nextDefault =
      initialMode && manifest.availableModes.includes(initialMode)
        ? initialMode
        : manifest.defaultMode;
    setActiveMode(nextDefault);

  }, [compact, english, initialMode, manifest.defaultMode, manifest.availableModes, manifest.threeD.imageUrl]);

  useEffect(() => {
    if (!compactVisible || (currentMode !== "photo" && currentMode !== "animation")) return;
    if (currentMode === "photo" && manifest.photo && !photoError) return;
    const controller = new AbortController();
    setCommonsStatus("loading");
    setCommonsError("");
    setFailedCommonsImageUrl(null);
    const query = new URLSearchParams({ word: english, meaning: turkish });
    if (currentMode === "animation") query.set("animated", "1");

    void fetch(`/api/word-photo?${query}`, { signal: controller.signal })
      .then(async (response) => {
        const payload: unknown = await response.json();
        if (!response.ok) {
          const message = typeof payload === "object" && payload !== null && "message" in payload && typeof payload.message === "string"
            ? payload.message
            : "Bu aramada uygun görsel bulunamadı.";
          throw new Error(message);
        }
        if (typeof payload !== "object" || payload === null || !("imageUrl" in payload) || typeof payload.imageUrl !== "string" || !("mimeType" in payload) || typeof payload.mimeType !== "string") {
          throw new Error("Görsel kataloğundan geçerli medya bilgisi alınamadı.");
        }
        if (currentMode === "animation" && payload.mimeType !== "image/gif") {
          throw new Error("Bu kelime için gerçek GIF biçiminde animasyon bulunamadı.");
        }
        const data = { ...(payload as CommonsVisual), requestKey: `${manifest.wordSlug}:${currentMode}` };
        setCommonsVisual(data);
        setCommonsStatus("ready");
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          setCommonsStatus("error");
          setCommonsError(error instanceof Error ? error.message : "Görsel yüklenemedi.");
        }
      });
    return () => controller.abort();
  }, [compactVisible, currentMode, english, turkish, commonsRetry, manifest.photo, manifest.wordSlug, photoError]);

  useEffect(() => {
    if (!compact || manifest.threeD.imageUrl) {
      setCompactVisible(true);
      return;
    }

    const element = compactVisualRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setCompactVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCompactVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px", threshold: 0.01 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [compact, manifest.threeD.imageUrl, manifest.wordSlug]);

  useEffect(() => {
    const generationKey = generatedImageMode
      ? `${manifest.wordSlug}:${IMAGE_STYLE_BY_MODE[generatedImageMode]}:${english}:${turkish}:${example || ""}`
      : null;
    if (!generatedImageMode || !compactVisible || requestedGenerationKey !== generationKey) {
      return;
    }

    const controller = new AbortController();
    setGeneratedImageStatuses((previous) => ({ ...previous, [generatedImageMode]: "loading" }));

    const loadGeneratedVisual = async () => {
      try {
        const query = new URLSearchParams({
          word: english,
          meaning: turkish,
          type: partOfSpeech,
          style: IMAGE_STYLE_BY_MODE[generatedImageMode],
        });
        if (example) query.set("example", example);
        const response = await fetch(`/api/word-image?${query.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          const payload: unknown = await response.json().catch(() => null);
          const message =
            typeof payload === "object" && payload !== null && "message" in payload &&
            typeof payload.message === "string"
              ? payload.message
              : `Görsel isteği başarısız oldu (HTTP ${response.status}).`;
          throw new Error(message);
        }

        const payload: unknown = await response.json();
        if (!isGeneratedVisualResponse(payload) || typeof payload.imageUrl !== "string") {
          throw new Error("3D görsel yanıtı geçerli bir görsel adresi içermiyor.");
        }

        setGeneratedImages((previous) => ({ ...previous, [generatedImageMode]: payload.imageUrl as string }));
        setGeneratedImageStatuses((previous) => ({ ...previous, [generatedImageMode]: "ready" }));
      } catch (error) {
        if (!controller.signal.aborted) {
          setGeneratedImageStatuses((previous) => ({ ...previous, [generatedImageMode]: "error" }));
          setGeneratedImageErrorMessages((previous) => ({
            ...previous,
            [generatedImageMode]: error instanceof Error ? error.message : "Görsel yüklenemedi. Yeniden deneyebilirsin.",
          }));
          console.warn(`[VocabularyVisual] ${generatedImageMode} memory image unavailable:`, error);
        }
      }
    };

    void loadGeneratedVisual();
    return () => controller.abort();
  // Do not depend on generatedImageStatus or generatedImageUrl here. Updating
  // either after starting the request would clean up this effect, abort its
  // fetch, and leave the visual stuck in an idle/loading loop. Mode/content
  // changes, an explicit user request, and the explicit retry counter are the only triggers.
  }, [compactVisible, currentMode, english, example, generatedImageMode, generatedImageRetry, manifest.wordSlug, partOfSpeech, requestedGenerationKey, turkish]);

  // Kompakt Kart Görünümü (Kelime listesi ızgarası için sıfır layout-shift önizleme)
  if (compact) {
    return (
      <div
        ref={compactVisualRef}
        data-testid={`vocab-visual-compact-${manifest.wordSlug}`}
        data-visual-key={manifest.visualKey || manifest.wordSlug}
        data-motion-type={manifest.animation.motionType}
        className={`relative w-full h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 ${className}`}
      >
        {(currentMode === "photo" && (photoError ? currentCommonsVisual?.imageUrl : manifest.photo?.url || currentCommonsVisual?.imageUrl)) || (currentMode === "animation" && currentCommonsVisual?.mediaType === "animated-image" && currentCommonsVisual.mimeType === "image/gif") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={currentMode === "animation" ? currentCommonsVisual?.imageUrl || "" : photoError ? currentCommonsVisual?.imageUrl || "" : manifest.photo?.url || currentCommonsVisual?.imageUrl || ""} alt={currentMode === "animation" ? currentCommonsVisual?.alt || `${english}: ${turkish}` : manifest.photo?.altTr || currentCommonsVisual?.alt || `${english}: ${turkish}`} loading="lazy" className="h-full w-full object-cover" onError={(event) => {
            const failedUrl = event.currentTarget.currentSrc || event.currentTarget.src;
            if (failedUrl === currentCommonsVisual?.imageUrl) {
              setFailedCommonsImageUrl(failedUrl);
              setCommonsStatus("error");
              setCommonsError("Görsel kaynağı bulundu ancak tarayıcı yükleyemedi.");
            } else {
              setPhotoError(true);
            }
          }} />
        ) : generatedImageUrl && !generatedImageError ? (
          <Image
            src={generatedImageUrl}
            alt={`${english} (${turkish}) kelimesini anlatan 3D hafıza görseli`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            onError={() => setGeneratedImageErrors((previous) => ({ ...previous, ai3d: true }))}
            onLoad={() => setGeneratedImageErrors((previous) => ({ ...previous, ai3d: false }))}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-indigo-950 to-fuchsia-950">
            <div className="relative flex h-full flex-col items-center justify-center gap-1 bg-slate-950/35 px-4 text-center">
              <span className="text-lg font-black text-white">{english}</span>
              <span className="line-clamp-1 text-sm font-semibold text-cyan-100">{turkish}</span>
              <span className="text-[11px] text-amber-100/90">
                {currentMode === "photo" ? commonsStatus === "loading" ? "Ücretsiz Commons kataloğunda aranıyor…" : "Fotoğraf yüklenemedi; ayrıntıyı açıp yeniden deneyebilirsin." : currentMode === "animation" ? commonsStatus === "loading" ? "Gerçek GIF aranıyor…" : "Bu kelime için GIF bulunamadı." : generatedImageStatus === "error" || generatedImageError ? "Görsel servisi yapılandırılmamış veya görsel üretilemedi." : "Kelimeye özel görsel hazırlanıyor…"}
              </span>
            </div>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-lg border border-white/20 bg-slate-950/75 px-2.5 py-1 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur">
          {currentMode === "animation" ? "Wikimedia GIF" : currentMode === "photo" ? "Kelime fotoğrafı" : MODE_LABELS[currentMode].labelTr}
        </span>
        {(currentMode === "photo" || currentMode === "animation") && currentCommonsVisual && (currentMode === "animation" || photoError || !manifest.photo) && (
          <span className="absolute bottom-0 inset-x-0 truncate bg-slate-950/80 px-2 py-1 text-[10px] text-white/90" title={`${currentCommonsVisual.attribution} · ${currentCommonsVisual.license}`}>
            {currentCommonsVisual.attribution} · {currentCommonsVisual.license}
          </span>
        )}
        {(currentMode === "photo" || currentMode === "animation") && (commonsStatus === "error" || (commonsStatus === "ready" && !currentCommonsVisual && (!manifest.photo || photoError))) && (
          <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-2 rounded-lg bg-slate-950/90 p-2 text-center text-[11px] text-white" role="status">
            <span className="min-w-0 truncate">{commonsError || "Görsel yüklenemedi."}</span>
            <button type="button" onClick={() => setCommonsRetry((value) => value + 1)} className="shrink-0 rounded-md bg-white/15 px-2 py-1 font-bold hover:bg-white/25">Tekrar dene</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      data-testid="vocabulary-visual-container"
      data-word-slug={manifest.wordSlug}
      data-visual-key={manifest.visualKey || manifest.wordSlug}
      data-motion-type={manifest.animation.motionType}
      data-active-mode={currentMode}
      className={`space-y-3 ${className}`}
    >
      {/* Mod Seçici Sekmeler (Yalnızca bu kelime için gerçekten var olan modlar gösterilir) */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          role="tablist"
          aria-label="Kelime görsel anlatım modu"
          className="flex flex-wrap items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-white/10"
        >
          {effectiveModes.map((mode) => {
            const meta = MODE_LABELS[mode];
            const Icon = meta.icon;
            const isSelected = currentMode === mode;
            return (
              <button
                key={mode}
                type="button"
                role="tab"
                aria-selected={isSelected}
                data-testid={`visual-mode-tab-${mode}`}
                onClick={() => {
                  setActiveMode(mode);
                  setRequestedGenerationKey(
                    isGeneratedImageMode(mode)
                      ? `${manifest.wordSlug}:${IMAGE_STYLE_BY_MODE[mode]}:${english}:${turkish}:${example || ""}`
                      : null,
                  );
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 shadow"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{meta.labelTr}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Görsel Sahne Alanı (Sabit en-boy oranı ile sıfır layout shift) */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner">
        {currentMode === "photo" && (photoError ? currentCommonsVisual : manifest.photo || currentCommonsVisual) && (
          <div className="w-full h-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={(photoError ? currentCommonsVisual?.imageUrl : manifest.photo?.url || currentCommonsVisual?.imageUrl) || ""}
              alt={(photoError ? currentCommonsVisual?.alt : manifest.photo?.altTr || currentCommonsVisual?.alt) || `${english}: ${turkish}`}
              width={manifest.photo?.width || 900}
              height={manifest.photo?.height || 600}
              loading="lazy"
              decoding="async"
              onError={() => {
                const imageUrl = photoError ? currentCommonsVisual?.imageUrl : manifest.photo?.url || currentCommonsVisual?.imageUrl;
                if (imageUrl && imageUrl === currentCommonsVisual?.imageUrl) {
                  setFailedCommonsImageUrl(imageUrl);
                  setCommonsStatus("error");
                  setCommonsError("Fotoğraf bulundu ancak tarayıcı yükleyemedi.");
                } else {
                  setPhotoError(true);
                }
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-200">
              <span>{photoError ? currentCommonsVisual?.alt : manifest.photo?.altTr || currentCommonsVisual?.alt}</span>
              <span className="font-mono text-slate-400">
                Kaynak: {manifest.photo?.attribution || currentCommonsVisual?.attribution} ({manifest.photo?.license || currentCommonsVisual?.license})
                {currentCommonsVisual?.sourcePage && <> · <a href={currentCommonsVisual.sourcePage} target="_blank" rel="noopener noreferrer" className="underline">Kaynak sayfası</a></>}
                {currentCommonsVisual?.licenseUrl && <> · <a href={currentCommonsVisual.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">Lisans</a></>}
              </span>
            </div>
          </div>
        )}

        {currentMode === "photo" && !manifest.photo && !currentCommonsVisual && commonsStatus === "loading" && (
          <div role="status" className="flex h-full items-center justify-center gap-3 p-6 text-center text-sm text-white/75">
            <ImageIcon className="h-5 w-5 animate-pulse text-cyan-200" aria-hidden="true" />
            “{english}” için lisans ve üretici bilgili fotoğraflar aranıyor…
          </div>
        )}

        {currentMode === "photo" && (commonsStatus === "error" || (commonsStatus === "ready" && Boolean(commonsVisual && commonsVisual.imageUrl === failedCommonsImageUrl))) && !(manifest.photo && !photoError) && (
          <div role="status" className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-white">
            <ImageIcon className="h-8 w-8 text-cyan-200" />
            <p className="max-w-lg text-sm">{commonsError || "Bulunan görsel yüklenemedi; farklı bir sonuç için tekrar arayabilirsin."}</p>
            <button type="button" onClick={() => setCommonsRetry((value) => value + 1)} className="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/20">Yeniden dene</button>
          </div>
        )}

        {currentMode === "animation" && (
          <div className="w-full h-full flex flex-col justify-between bg-slate-950">
            {currentCommonsVisual?.mediaType === "animated-image" && currentCommonsVisual.mimeType === "image/gif" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={currentCommonsVisual.imageUrl} alt={currentCommonsVisual.alt} className="min-h-0 w-full flex-1 object-contain" onError={() => {
                setFailedCommonsImageUrl(currentCommonsVisual.imageUrl);
                setCommonsStatus("error");
                setCommonsError("GIF bulundu ancak tarayıcı yükleyemedi.");
              }} />
            ) : <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white/75" role={commonsStatus === "error" ? "status" : undefined}>
              {commonsStatus === "loading" ? "Gerçek GIF aranıyor…" : commonsError || "Bu kelime için lisans bilgisi olan gerçek GIF bulunamadı."}
              {commonsStatus === "error" && <div className="flex flex-wrap justify-center gap-2"><button type="button" onClick={() => setActiveMode("photo")} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-bold">Fotoğrafa geç</button><button type="button" onClick={() => setCommonsRetry((value) => value + 1)} className="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold">Yeniden dene</button></div>}
            </div>}
            {currentCommonsVisual?.mediaType === "animated-image" && (
              <div className="px-3 py-2 border-t border-white/10 text-xs text-slate-300">{currentCommonsVisual.attribution} · {currentCommonsVisual.license}{currentCommonsVisual.sourcePage && <> · <a href={currentCommonsVisual.sourcePage} target="_blank" rel="noopener noreferrer" className="underline">Kaynak</a></>}</div>
            )}
            {currentCommonsVisual?.mediaType === "animated-image" && currentCommonsVisual.licenseUrl && (
              <div className="px-3 py-1 text-[11px] text-slate-400"><a href={currentCommonsVisual.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">Lisans koşulları</a></div>
            )}
          </div>
        )}

        {currentMode === "3d" && (
          <div className="w-full h-full flex items-center justify-center bg-slate-950">
            <Lightweight3DMeaningCard
              english={english}
              turkish={turkish}
            />
          </div>
        )}

        {generatedImageMode && (
          <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-indigo-950 to-fuchsia-950">
            {generatedImageUrl && !generatedImageError ? (
              <Image
                src={generatedImageUrl}
                alt={`${english} (${turkish}) anlamını anlatan ${GENERATED_MODE_LABELS[generatedImageMode]}`}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="lazy"
                onError={() => setGeneratedImageErrors((previous) => ({ ...previous, [generatedImageMode]: true }))}
                onLoad={() => setGeneratedImageErrors((previous) => ({ ...previous, [generatedImageMode]: false }))}
                className="object-cover"
                data-testid={`vocabulary-${generatedImageMode}-image-${manifest.wordSlug}`}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-5 py-4 text-center">
                <Sparkles className="h-8 w-8 text-amber-300" aria-hidden="true" />
                <h3 className="text-xl font-black text-white">{english}</h3>
                <p className="text-base font-semibold text-cyan-100">{turkish}</p>
                <p className="max-w-md text-sm text-white/75" role={generatedImageStatus === "error" ? "alert" : undefined}>
                  {generatedImageStatus === "error" || generatedImageError
                    ? generatedImageErrorMessages[generatedImageMode] || `Üretilen ${GENERATED_MODE_LABELS[generatedImageMode]} şu anda erişilemiyor.`
                    : generatedImageStatus === "loading"
                      ? `${english} kelimesinin anlamına uygun ${GENERATED_MODE_LABELS[generatedImageMode]} hazırlanıyor…`
                      : `${english} için ${GENERATED_MODE_LABELS[generatedImageMode]} henüz oluşturulmadı.`}
                </p>
                {generatedImageStatus === "idle" && (
                  <button
                    type="button"
                    onClick={() => setRequestedGenerationKey(`${manifest.wordSlug}:${IMAGE_STYLE_BY_MODE[generatedImageMode]}:${english}:${turkish}:${example || ""}`)}
                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Bu görseli oluştur
                  </button>
                )}
                {(generatedImageStatus === "error" || generatedImageError) && (
                  <button
                    type="button"
                    onClick={() => {
                      setGeneratedImageErrors((previous) => ({ ...previous, [generatedImageMode]: false }));
                      setGeneratedImageErrorMessages((previous) => ({ ...previous, [generatedImageMode]: undefined }));
                      setGeneratedImages((previous) => ({ ...previous, [generatedImageMode]: undefined }));
                      setGeneratedImageStatuses((previous) => ({ ...previous, [generatedImageMode]: "idle" }));
                      setGeneratedImageRetry((previous) => previous + 1);
                    }}
                    className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    Görseli yeniden dene
                  </button>
                )}
              </div>
            )}
            {generatedImageUrl && !generatedImageError && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 pt-12">
                <div className="inline-flex rounded-full border border-white/20 bg-slate-950/65 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
                  {MODE_LABELS[generatedImageMode].labelTr} · {english} · {turkish}
                </div>
              </div>
            )}
          </div>
        )}

        {currentMode === "card" && (
          <div
            data-testid="visual-typographic-fallback-card"
            className="w-full h-full p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-950 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold">
                Kavramsal Anlam Kartı · {level} · {partOfSpeech}
              </span>
              {!manifest.hasVerifiedPhoto && (
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  Soyut akademik terim (Doğrulanmış fotoğraf yerine kavramsal kart aktif)
                </span>
              )}
            </div>

            <div className="my-auto space-y-2">
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {english}
              </h4>
              <p className="text-lg sm:text-xl font-bold text-cyan-300">{turkish}</p>
              {definitionEn && (
                <p className="text-xs sm:text-sm text-slate-300 italic line-clamp-2">
                  &ldquo;{definitionEn}&rdquo;
                </p>
              )}
              {example && (
                <p className="text-xs text-slate-400 pt-1 border-t border-white/10 line-clamp-2">
                  Örnek: {example}
                </p>
              )}
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-white/10">
              <span>DİL MASTER Semantik Hafıza Kartı</span>
              <span>Kategori: {manifest.semanticCategory}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
