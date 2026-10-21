"use client";

import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  resolveWordVisualManifest,
  VisualMode,
  MotionDiagramType,
} from "@/lib/media/visual-asset-registry";
import { Camera, Sparkles, Box, BookOpen, Play, Pause, Info } from "lucide-react";

const LazyWord3DScene = dynamic(() => import("@/components/vocabulary/Word3DScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-xs text-slate-400 animate-pulse">
      3D Kavram Sahnesi Yükleniyor...
    </div>
  ),
});

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
  animation: { labelTr: "Animasyon / Şema", icon: Sparkles },
  "3d": { labelTr: "3D Görünüm", icon: Box },
  card: { labelTr: "Anlam Kartı", icon: BookOpen },
};

function SemanticAnimatedSvg({
  motionType,
  visualKey,
  english,
  turkish,
  paused,
}: {
  motionType: MotionDiagramType;
  visualKey: string;
  english: string;
  turkish: string;
  paused: boolean;
}) {
  const gradientId = `semantic-bg-${visualKey}`;
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full select-none"
      role="img"
      aria-label={`${english} (${turkish}) semantik hareket şeması`}
      data-visual-key={visualKey}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" rx="16" fill={`url(#${gradientId})`} />

      {/* Background Subtle Grid */}
      <g stroke="#334155" strokeOpacity="0.45" strokeWidth="1">
        <line x1="32" y1="48" x2="368" y2="48" />
        <line x1="32" y1="108" x2="368" y2="108" />
        <line x1="32" y1="168" x2="368" y2="168" />
      </g>

      {motionType === "mitigate" && (
        <g>
          <path
            d="M 45 160 Q 160 40 355 50"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          <path
            d="M 45 160 Q 165 105 355 145"
            fill="none"
            stroke="#10b981"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="210"
            cy="125"
            r="12"
            fill="#06b6d4"
            className={paused ? "" : "animate-pulse"}
          />
          <text x="240" y="65" fill="#fda4af" fontSize="10" fontFamily="sans-serif">
            Yüksek Etki / Risk
          </text>
          <text x="235" y="138" fill="#6ee7b7" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Hafifletilmiş Etki ↓
          </text>
        </g>
      )}

      {motionType === "decay" && (
        <g>
          <rect x="65" y="60" width="38" height="108" rx="6" fill="#10b981" />
          <rect x="135" y="86" width="38" height="82" rx="6" fill="#eab308" />
          <rect x="205" y="116" width="38" height="52" rx="6" fill="#f97316" />
          <rect
            x="275"
            y="142"
            width="38"
            height="26"
            rx="6"
            fill="#f43f5e"
            className={paused ? "" : "animate-pulse"}
          />
          <path
            d="M 84 54 L 294 134"
            stroke="#fb7185"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
        </g>
      )}

      {motionType === "network" && (
        <g>
          <g stroke="#38bdf8" strokeOpacity="0.45" strokeWidth="1.5">
            <line x1="200" y1="108" x2="95" y2="66" />
            <line x1="200" y1="108" x2="305" y2="66" />
            <line x1="200" y1="108" x2="95" y2="152" />
            <line x1="200" y1="108" x2="305" y2="152" />
            <line x1="95" y1="66" x2="305" y2="66" />
            <line x1="95" y1="152" x2="305" y2="152" />
          </g>
          <circle
            cx="200"
            cy="108"
            r="16"
            fill="#8b5cf6"
            className={paused ? "" : "animate-pulse"}
          />
          <circle cx="95" cy="66" r="9" fill="#38bdf8" />
          <circle cx="305" cy="66" r="9" fill="#38bdf8" />
          <circle cx="95" cy="152" r="9" fill="#38bdf8" />
          <circle cx="305" cy="152" r="9" fill="#38bdf8" />
        </g>
      )}

      {motionType === "examine" && (
        <g>
          <rect
            x="70"
            y="68"
            width="180"
            height="82"
            rx="10"
            fill="#1e293b"
            stroke="#475569"
            strokeWidth="2"
          />
          <line x1="90" y1="92" x2="220" y2="92" stroke="#94a3b8" strokeWidth="3" />
          <line x1="90" y1="112" x2="195" y2="112" stroke="#38bdf8" strokeWidth="3" />
          <line x1="90" y1="130" x2="230" y2="130" stroke="#64748b" strokeWidth="3" />
          <circle
            cx="245"
            cy="108"
            r="28"
            fill="#06b6d4"
            fillOpacity="0.2"
            stroke="#22d3ee"
            strokeWidth="3"
            className={paused ? "" : "animate-pulse"}
          />
          <line x1="266" y1="128" x2="292" y2="152" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}

      {motionType === "balance" && (
        <g>
          <polygon points="200,115 178,162 222,162" fill="#6366f1" />
          <line x1="95" y1="115" x2="305" y2="115" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <circle
            cx="115"
            cy="96"
            r="14"
            fill="#f472b6"
            className={paused ? "" : "animate-pulse"}
          />
          <circle
            cx="285"
            cy="96"
            r="14"
            fill="#34d399"
            className={paused ? "" : "animate-pulse"}
          />
        </g>
      )}

      {motionType === "scale" && (
        <g>
          <path
            d="M 55 158 L 155 150 L 235 65 L 345 55"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="235"
            cy="65"
            r="10"
            fill="#fbbf24"
            className={paused ? "" : "animate-ping"}
          />
          <circle cx="235" cy="65" r="8" fill="#fef08a" />
        </g>
      )}

      {motionType === "barrier" && (
        <g>
          <line x1="65" y1="110" x2="220" y2="110" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
          <polygon points="225,110 208,100 208,120" fill="#fbbf24" />
          <rect
            x="248"
            y="64"
            width="16"
            height="92"
            rx="4"
            fill="#f43f5e"
            className={paused ? "" : "animate-pulse"}
          />
          <text x="280" y="114" fill="#fda4af" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Direnç / Eşik
          </text>
        </g>
      )}

      {motionType === "causal" && (
        <g>
          <rect x="42" y="82" width="88" height="56" rx="12" fill="#7c2d12" stroke="#fb923c" strokeWidth="2" />
          <rect x="156" y="82" width="88" height="56" rx="12" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          <rect x="270" y="82" width="88" height="56" rx="12" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
          <text x="86" y="115" textAnchor="middle" fill="#ffedd5" fontSize="11">NEDEN</text>
          <text x="200" y="115" textAnchor="middle" fill="#dbeafe" fontSize="11">ETKİ</text>
          <text x="314" y="115" textAnchor="middle" fill="#d1fae5" fontSize="11">SONUÇ</text>
          <path d="M130 110h24m0 0-8-7m8 7-8 7M244 110h24m0 0-8-7m8 7-8 7" fill="none" stroke="#cbd5e1" strokeWidth="3" />
          <circle cx="200" cy="58" r="7" fill="#60a5fa" className={paused ? "" : "animate-pulse"} />
        </g>
      )}

      {motionType === "cycle" && (
        <g>
          <path d="M145 70a70 48 0 0 1 112 19M260 91l-3-17 17 6M255 150a70 48 0 0 1-112-19M140 129l3 17-17-6" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
          <circle cx="145" cy="70" r="17" fill="#0891b2" />
          <circle cx="255" cy="150" r="17" fill="#7c3aed" className={paused ? "" : "animate-pulse"} />
          <circle cx="200" cy="110" r="26" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
          <text x="200" y="114" textAnchor="middle" fill="#e0e7ff" fontSize="10">TEKRAR</text>
        </g>
      )}

      {motionType === "compare" && (
        <g>
          <line x1="200" y1="55" x2="200" y2="169" stroke="#94a3b8" strokeWidth="2" />
          <rect x="72" y="83" width="82" height="62" rx="12" fill="#0e7490" stroke="#67e8f9" strokeWidth="2" />
          <rect x="246" y="83" width="82" height="62" rx="12" fill="#7c2d12" stroke="#fdba74" strokeWidth="2" />
          <text x="113" y="111" textAnchor="middle" fill="#ecfeff" fontSize="11">A</text>
          <text x="113" y="129" textAnchor="middle" fill="#a5f3fc" fontSize="9">ÖZELLİK</text>
          <text x="287" y="111" textAnchor="middle" fill="#fff7ed" fontSize="11">B</text>
          <text x="287" y="129" textAnchor="middle" fill="#fed7aa" fontSize="9">ÖZELLİK</text>
          <path d="M164 111h28m0 0-7-6m7 6-7 6M236 129h-28m0 0 7-6m-7 6 7 6" fill="none" stroke="#e2e8f0" strokeWidth="2" />
        </g>
      )}

      {motionType === "distribution" && (
        <g>
          <circle cx="200" cy="110" r="23" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="2" />
          <g stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="2">
            <line x1="200" y1="110" x2="76" y2="66"/><line x1="200" y1="110" x2="322" y2="61"/>
            <line x1="200" y1="110" x2="65" y2="158"/><line x1="200" y1="110" x2="330" y2="161"/>
            <line x1="200" y1="110" x2="200" y2="43"/><line x1="200" y1="110" x2="200" y2="177"/>
          </g>
          <g fill="#22d3ee">
            <circle cx="76" cy="66" r="8"/><circle cx="322" cy="61" r="8"/><circle cx="65" cy="158" r="8"/>
            <circle cx="330" cy="161" r="8"/><circle cx="200" cy="43" r="8"/><circle cx="200" cy="177" r="8" className={paused ? "" : "animate-pulse"}/>
          </g>
        </g>
      )}

      {motionType === "containment" && (
        <g>
          <rect x="72" y="53" width="256" height="116" rx="26" fill="#172554" stroke="#60a5fa" strokeWidth="3" />
          <rect x="122" y="76" width="156" height="70" rx="20" fill="#312e81" stroke="#a78bfa" strokeWidth="3" />
          <circle cx="200" cy="111" r="23" fill="#0e7490" stroke="#67e8f9" strokeWidth="3" className={paused ? "" : "animate-pulse"} />
          <text x="200" y="201" textAnchor="middle" fill="#cbd5e1" fontSize="10">İÇİNDE · KAPSAMINDA · KUŞATILMIŞ</text>
        </g>
      )}

      {motionType === "growth" && (
        <g>
          <line x1="58" y1="169" x2="348" y2="169" stroke="#64748b" strokeWidth="2" />
          <rect x="78" y="130" width="42" height="39" rx="5" fill="#0e7490" />
          <rect x="147" y="108" width="42" height="61" rx="5" fill="#0891b2" />
          <rect x="216" y="80" width="42" height="89" rx="5" fill="#14b8a6" />
          <rect x="285" y="50" width="42" height="119" rx="5" fill="#34d399" className={paused ? "" : "animate-pulse"} />
          <path d="M77 118 153 93l68-28 94-34m0 0-3 17m3-17-18 2" fill="none" stroke="#fbbf24" strokeWidth="3" />
        </g>
      )}

      {motionType === "flow" && (
        <g>
          <rect x="44" y="80" width="84" height="58" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <text x="86" y="113" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            BAŞLANGIÇ
          </text>
          <rect
            x="158"
            y="80"
            width="84"
            height="58"
            rx="10"
            fill="#0e7490"
            stroke="#22d3ee"
            strokeWidth="2.5"
            className={paused ? "" : "animate-pulse"}
          />
          <text x="200" y="113" textAnchor="middle" fill="#ecfeff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            SÜREÇ
          </text>
          <rect x="272" y="80" width="84" height="58" rx="10" fill="#065f46" stroke="#10b981" strokeWidth="2" />
          <text x="314" y="113" textAnchor="middle" fill="#d1fae5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            SONUÇ ✓
          </text>
          <line x1="128" y1="109" x2="158" y2="109" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="242" y1="109" x2="272" y2="109" stroke="#10b981" strokeWidth="2.5" />
        </g>
      )}

      {/* Header & Footer Overlay */}
      <text x="32" y="28" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
        {english.toUpperCase()} — {turkish}
      </text>
      <text x="32" y="200" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
        {paused ? "⏸ Animasyon Duraklatıldı (Statik Görünüm)" : "▶ Canlı Semantik Kavram Diyagramı"}
      </text>
    </svg>
  );
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
  const [localAnimationError, setLocalAnimationError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Kelime değiştiğinde varsayılan moda sıfırla ve reduced-motion tercihini kontrol et
  useEffect(() => {
    setPhotoError(false);
    setLocalAnimationError(false);
    const nextDefault =
      initialMode && manifest.availableModes.includes(initialMode)
        ? initialMode
        : manifest.defaultMode;
    setActiveMode(nextDefault);

    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setIsPaused(true);
      }
    }
  }, [english, initialMode, manifest.defaultMode, manifest.availableModes]);

  // Kompakt Kart Görünümü (Kelime listesi ızgarası için sıfır layout-shift önizleme)
  if (compact) {
    return (
      <div
        data-testid={`vocab-visual-compact-${manifest.wordSlug}`}
        data-visual-key={manifest.visualKey || manifest.wordSlug}
        data-motion-type={manifest.animation.motionType}
        className={`relative w-full h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 ${className}`}
      >
        {manifest.hasVerifiedPhoto && manifest.photo && !photoError ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={manifest.photo.url}
              alt={manifest.photo.altTr}
              width={manifest.photo.width}
              height={manifest.photo.height}
              loading="lazy"
              decoding="async"
              onError={() => setPhotoError(true)}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/15 text-[10px] font-bold text-emerald-300">
              📷 Doğrulanmış Fotoğraf
            </span>
          </>
        ) : (
          <div className="w-full h-full">
            <SemanticAnimatedSvg
              motionType={manifest.animation.motionType}
              visualKey={manifest.visualKey || manifest.wordSlug}
              english={english}
              turkish={turkish}
              paused={true}
            />
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 border border-cyan-500/30 text-[10px] font-bold text-cyan-300">
              ✨ Semantik Şema
            </span>
          </div>
        )}
      </div>
    );
  }

  const effectiveModes = manifest.availableModes.filter((m) =>
    m === "photo" ? manifest.hasVerifiedPhoto && !photoError : true
  );

  const currentMode: VisualMode = effectiveModes.includes(activeMode)
    ? activeMode
    : effectiveModes[0] || "card";

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
                onClick={() => setActiveMode(mode)}
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

        {/* Animasyon Modunda Play / Pause Kontrolü */}
        {currentMode === "animation" && (
          <button
            type="button"
            data-testid="visual-animation-play-pause"
            aria-pressed={!isPaused}
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-cyan-200 flex items-center gap-1.5 transition-all"
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Animasyonu Oynat</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Duraklat</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Görsel Sahne Alanı (Sabit en-boy oranı ile sıfır layout shift) */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner">
        {currentMode === "photo" && manifest.photo && !photoError && (
          <div className="w-full h-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={manifest.photo.url}
              alt={manifest.photo.altTr}
              width={manifest.photo.width}
              height={manifest.photo.height}
              loading="lazy"
              decoding="async"
              onError={() => {
                setPhotoError(true);
                setActiveMode("card");
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-200">
              <span>📷 {manifest.photo.altTr}</span>
              <span className="font-mono text-slate-400">
                Kaynak: {manifest.photo.attribution} ({manifest.photo.license})
              </span>
            </div>
          </div>
        )}

        {currentMode === "animation" && (
          <div className="w-full h-full flex flex-col justify-between bg-slate-950">
            <div className="flex-1 min-h-0">
              {manifest.animation.localSvgUrl && !localAnimationError && !isPaused ? (
                <Image
                  src={manifest.animation.localSvgUrl}
                  alt={`${english} (${turkish}) kelimesine özgü animasyonlu semantik şema`}
                  width={400}
                  height={260}
                  unoptimized
                  onError={() => setLocalAnimationError(true)}
                  data-testid={`vocabulary-local-animation-${manifest.wordSlug}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <SemanticAnimatedSvg
                  motionType={manifest.animation.motionType}
                  visualKey={manifest.visualKey || manifest.wordSlug}
                  english={english}
                  turkish={turkish}
                  paused={isPaused}
                />
              )}
            </div>
            <div className="px-3.5 py-2 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
              <span>{manifest.animation.captionTr}</span>
              <span className="font-mono text-slate-400">
                {manifest.animation.attribution} · {manifest.animation.license}
              </span>
            </div>
          </div>
        )}

        {currentMode === "3d" && (
          <div className="w-full h-full flex items-center justify-center bg-slate-950">
            <LazyWord3DScene
              english={english}
              turkish={turkish}
              motionType={manifest.animation.motionType}
              visualKey={manifest.visualKey || manifest.wordSlug}
            />
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
