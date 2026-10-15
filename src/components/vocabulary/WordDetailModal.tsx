"use client";

import { useEffect, useState, useId } from "react";
import Image from "next/image";
import {
  X,
  Volume2,
  Sparkles,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Layers,
  GraduationCap,
  Play,
  RotateCw,
} from "lucide-react";
import { clientAudio } from "@/lib/tts/audio-client";
import { ACCENT_METADATA_LIST, AccentCode, VoiceGender } from "@/lib/tts/voice-registry";
import { logStudentActivity } from "@/lib/activity-logger";
import { cn } from "@/lib/utils";

export interface WordDetailItem {
  id: string;
  english: string;
  turkish: string;
  definitionEn?: string;
  examples?: string[];
  synonyms?: string[];
  level: string;
  type: string;
  imageUrl?: string;
  targetExams?: ("YDS" | "YDT" | "YÖKDİL")[];
  sourceCategory?: string;
}

interface WordDetailModalProps {
  word: WordDetailItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function WordDetailModal({
  word,
  isOpen,
  onClose,
}: WordDetailModalProps) {
  const [activeAccent, setActiveAccent] = useState<AccentCode>("en-US");
  const [activeGender, setActiveGender] = useState<VoiceGender>("female");
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  // Modal açıldığında görseli çek, aktivite kaydet ve ilk telaffuzu çal
  useEffect(() => {
    if (!isOpen || !word) return;

    setImgLoading(true);
    setImgError(false);

    // 1. 3D Görseli API'den çek
    const fetch3dImage = async () => {
      try {
        const res = await fetch(
          `/api/word-image?id=${encodeURIComponent(word.id)}&word=${encodeURIComponent(
            word.english
          )}`
        );
        if (res.ok) {
          const data = await res.json();
          if (data.imageUrl) {
            setImageUrl(data.imageUrl);
          } else {
            setImageUrl(
              `https://image.pollinations.ai/prompt/3D%20isometric%20cute%20render%20of%20${encodeURIComponent(
                word.english
              )}%20concept%20education?width=512&height=512&nologo=true`
            );
          }
        }
      } catch {
        setImageUrl(
          `https://image.pollinations.ai/prompt/3D%20isometric%20cute%20render%20of%20${encodeURIComponent(
            word.english
          )}?width=512&height=512&nologo=true`
        );
      } finally {
        setImgLoading(false);
      }
    };

    fetch3dImage();

    // 2. Öğrenci aktivite kaydı (Gerçek Öğrenci Takip Sistemi)
    void logStudentActivity({
      type: "vocabulary",
      category: (word.targetExams?.[0] as any) || "Genel",
      title: `🔍 3D Kelime İncelemesi: ${word.english}`,
      details: `"${word.english}" (${word.turkish}) kelimesinin 3D görsel hafıza kartı ve telaffuzları incelendi.`,
      scoreOrCount: `${word.level} • ${word.type}`,
      points: 5,
      timeSpentMinutes: 1,
      metadata: {
        wordId: word.id,
        english: word.english,
        turkish: word.turkish,
        level: word.level,
      },
    });

    // 3. İlk açılışta anında kelimeyi telaffuz et
    const prefs = clientAudio.getPreferences();
    setActiveAccent(prefs.preferredAccent);
    setActiveGender(prefs.preferredVoiceGender);

    void clientAudio.play(word.english, {
      accent: prefs.preferredAccent,
      gender: prefs.preferredVoiceGender,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });

    // ESC ile kapatma dinleyicisi
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clientAudio.stopAll();
    };
  }, [isOpen, word, onClose]);

  if (!isOpen || !word) return null;

  // Belirli bir aksan ve sesle anında telaffuz çal
  const handlePlayVoice = (accent: AccentCode, gender: VoiceGender, voiceId: string) => {
    setActiveAccent(accent);
    setActiveGender(gender);
    setPlayingVoiceId(voiceId);
    setIsPlaying(true);

    void clientAudio.play(word.english, {
      voiceId,
      accent,
      gender,
      onStart: () => {
        setIsPlaying(true);
        setPlayingVoiceId(voiceId);
      },
      onEnd: () => {
        setIsPlaying(false);
        setPlayingVoiceId(null);
      },
      onError: () => {
        setIsPlaying(false);
        setPlayingVoiceId(null);
      },
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/20 rounded-3xl shadow-2xl p-5 sm:p-7 text-white space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 z-10"
          title="Kapat (ESC)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Üst Başlık & Rozetler */}
        <div className="flex flex-wrap items-center gap-2 pr-12">
          <span className="px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-black text-xs shadow-md">
            {word.level}
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase">
            {word.type}
          </span>
          {word.targetExams?.map((exam) => (
            <span
              key={exam}
              className="px-2.5 py-0.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 font-bold text-[11px]"
            >
              🎯 {exam}
            </span>
          ))}
          {word.sourceCategory && (
            <span className="text-white/40 text-[11px] font-mono ml-auto">
              📚 {word.sourceCategory}
            </span>
          )}
        </div>

        {/* Ana İçerik: Sol 3D Görsel, Sağ Kelime Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* 3D Görsel Hafıza Fotoğrafı */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 border border-white/15 shadow-inner flex items-center justify-center group">
            {imgLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/70 z-10">
                <RotateCw className="w-8 h-8 text-yellow-300 animate-spin" />
                <span className="text-xs text-white/70 font-medium">3D Görsel Hazırlanıyor...</span>
              </div>
            )}

            {imageUrl && !imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={`${word.english} - ${word.turkish} 3D görseli`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={() => setImgLoading(false)}
                onError={() => {
                  setImgError(true);
                  setImgLoading(false);
                }}
              />
            ) : (
              <div className="text-center p-6 space-y-2">
                <span className="text-6xl">🎨</span>
                <p className="text-sm font-bold text-white/80">3D Görsel Hafıza</p>
                <p className="text-xs text-white/50">{word.english} · {word.turkish}</p>
              </div>
            )}

            <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] text-white/80">
              <span>✨ 3D Görsel Hafıza Modu</span>
              <span className="text-yellow-300 font-bold">{word.english}</span>
            </div>
          </div>

          {/* Sağ Kolon: Kelime, Anlamı, Tanım ve Hızlı Dinle */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 tracking-tight">
                {word.english}
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-cyan-200 mt-1">
                {word.turkish}
              </p>
            </div>

            {word.definitionEn && (
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 italic leading-relaxed">
                &quot;{word.definitionEn}&quot;
              </div>
            )}

            {/* Hızlı Dinle Butonu */}
            <button
              onClick={() =>
                handlePlayVoice(
                  activeAccent,
                  activeGender,
                  `${activeAccent}-${activeGender}`
                )
              }
              className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-extrabold text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Volume2 className={cn("w-5 h-5", isPlaying && "animate-bounce text-yellow-300")} />
              <span>{isPlaying ? "Telaffuz Ediliyor..." : "Kelimeyi Canlı Dinle"}</span>
            </button>
          </div>
        </div>

        {/* 🎙️ 7 AKSAN × KADIN & ERKEK (14 DOĞAL SES SEÇİCİSİ) */}
        <div className="space-y-3 pt-2 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
              <span>🎙️</span> 7 Farklı Aksan & Kadın / Erkek Doğal Sesler
            </h4>
            <span className="text-[11px] text-white/50">Tıklayıp anında dinleyin</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ACCENT_METADATA_LIST.map((accent) => {
              const isFemaleActive =
                playingVoiceId === accent.femaleVoiceId ||
                (isPlaying && activeAccent === accent.code && activeGender === "female");
              const isMaleActive =
                playingVoiceId === accent.maleVoiceId ||
                (isPlaying && activeAccent === accent.code && activeGender === "male");

              return (
                <div
                  key={accent.code}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between gap-1.5"
                >
                  <div className="flex items-center gap-1 text-xs font-bold text-white/90">
                    <span className="text-base">{accent.flag}</span>
                    <span className="truncate">{accent.labelTr}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    {/* Kadın Sesi */}
                    <button
                      type="button"
                      onClick={() =>
                        handlePlayVoice(accent.code, "female", accent.femaleVoiceId)
                      }
                      className={cn(
                        "py-1.5 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1",
                        isFemaleActive
                          ? "bg-pink-500 text-white shadow-md animate-pulse"
                          : "bg-white/10 hover:bg-white/20 text-pink-300"
                      )}
                      title={`${accent.labelTr} Kadın Sesi`}
                    >
                      <span>👩</span>
                      <span className="text-[10px]">K</span>
                    </button>

                    {/* Erkek Sesi */}
                    <button
                      type="button"
                      onClick={() =>
                        handlePlayVoice(accent.code, "male", accent.maleVoiceId)
                      }
                      className={cn(
                        "py-1.5 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1",
                        isMaleActive
                          ? "bg-cyan-500 text-white shadow-md animate-pulse"
                          : "bg-white/10 hover:bg-white/20 text-cyan-300"
                      )}
                      title={`${accent.labelTr} Erkek Sesi`}
                    >
                      <span>👨</span>
                      <span className="text-[10px]">E</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Örnek Cümleler ve Eşanlamlılar */}
        {word.examples && word.examples.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300 flex items-center gap-1.5">
              <span>📖</span> Akademik Örnek Cümle
            </h4>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white/90 italic leading-relaxed">
              {word.examples[0]}
            </div>
          </div>
        )}

        {word.synonyms && word.synonyms.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-bold text-white/50 mr-1">Eşanlamlılar (Synonyms):</span>
            {word.synonyms.map((syn) => (
              <span
                key={syn}
                className="px-2.5 py-1 rounded-lg bg-white/10 text-yellow-200 text-xs font-mono font-medium"
              >
                {syn}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
