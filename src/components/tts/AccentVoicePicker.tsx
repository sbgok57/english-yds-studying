"use client";

import React, { useState, useEffect } from "react";
import {
  AccentCode,
  VoiceGender,
  VoiceProfile,
  ACCENT_METADATA_LIST,
  getVoicesForAccent,
} from "@/lib/tts/voice-registry";
import { clientAudio, UserVoicePreferences } from "@/lib/tts/audio-client";
import { Play, Square, Volume2, Sparkles, Check, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccentVoicePickerProps {
  onSelectVoice?: (voice: VoiceProfile) => void;
  compact?: boolean;
  className?: string;
  showSpeedSelector?: boolean;
}

export default function AccentVoicePicker({
  onSelectVoice,
  compact = false,
  className,
  showSpeedSelector = true,
}: AccentVoicePickerProps) {
  const [prefs, setPrefs] = useState<UserVoicePreferences>(() => clientAudio.getPreferences());
  const [activeAccent, setActiveAccent] = useState<AccentCode>(prefs.preferredAccent);
  const [previewPlayingId, setPreviewPlayingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateHandler = () => {
      const p = clientAudio.getPreferences();
      setPrefs(p);
      setActiveAccent(p.preferredAccent);
    };
    window.addEventListener("yds:voice-prefs-changed", updateHandler);
    return () => window.removeEventListener("yds:voice-prefs-changed", updateHandler);
  }, []);

  const handleSelectVoice = (voice: VoiceProfile) => {
    clientAudio.savePreferences({
      preferredAccent: voice.locale,
      preferredVoiceGender: voice.gender,
      preferredVoiceId: voice.id,
    });
    setPrefs((prev) => ({
      ...prev,
      preferredAccent: voice.locale,
      preferredVoiceGender: voice.gender,
      preferredVoiceId: voice.id,
    }));
    onSelectVoice?.(voice);
  };

  const handleRateChange = (newRate: number) => {
    clientAudio.savePreferences({ speakingRate: newRate });
    setPrefs((prev) => ({ ...prev, speakingRate: newRate }));
  };

  const handleTogglePreview = async (voice: VoiceProfile) => {
    if (previewPlayingId === voice.id) {
      clientAudio.stopAll();
      setPreviewPlayingId(null);
      return;
    }

    setPreviewPlayingId(voice.id);
    await clientAudio.playPreview(voice.id, {
      onEnd: () => setPreviewPlayingId(null),
      onError: () => setPreviewPlayingId(null),
    });
  };

  if (!mounted) {
    return (
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 animate-pulse text-xs text-white/50">
        Ses modülü yükleniyor...
      </div>
    );
  }

  const voicesForCurrentAccent = getVoicesForAccent(activeAccent);
  const currentAccentMeta = ACCENT_METADATA_LIST.find((a) => a.code === activeAccent) || ACCENT_METADATA_LIST[0];

  return (
    <div className={cn("rounded-2xl bg-slate-900/90 border border-white/15 p-4 sm:p-5 space-y-4 shadow-xl", className)}>
      {/* Üst Başlık & Bilgi */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
            <Volume2 className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>Doğal Çoklu Aksan & Konuşmacı Seçici</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-normal">
                12 Doğrulanmış Ses
              </span>
            </h4>
            <p className="text-xs text-white/60">
              Her aksan için bağımsız kadın ve erkek konuşmacı (96 kbps stüdyo kalitesi)
            </p>
          </div>
        </div>

        {/* Konuşma Hızı Seçici */}
        {showSpeedSelector && (
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 rounded-xl px-2.5 py-1 text-xs">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white/60 font-mono">Hız:</span>
            {[0.75, 0.9, 1.0, 1.1, 1.25].map((rate) => (
              <button
                key={rate}
                onClick={() => handleRateChange(rate)}
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono transition-all",
                  Math.abs(prefs.speakingRate - rate) < 0.01
                    ? "bg-cyan-500 text-white font-bold shadow"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {rate.toFixed(2).replace(/\.00$/, "")}x
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 6 Aksan Sekmesi */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
        {ACCENT_METADATA_LIST.map((acc) => {
          const isSelected = activeAccent === acc.code;
          return (
            <button
              key={acc.code}
              onClick={() => {
                setActiveAccent(acc.code);
                // Tercihi de bu aksanın mevcut cinsiyetine göre güncelle
                const matchingVoice = getVoicesForAccent(acc.code).find(
                  (v) => v.gender === prefs.preferredVoiceGender
                );
                if (matchingVoice) handleSelectVoice(matchingVoice);
              }}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all",
                isSelected
                  ? "bg-gradient-to-b from-cyan-500/20 to-blue-600/30 border-cyan-400 text-white shadow-lg scale-[1.02]"
                  : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white"
              )}
            >
              <span className="text-xl mb-0.5">{acc.flag}</span>
              <span className="text-xs font-bold">{acc.labelTr}</span>
              <span className="text-[10px] text-white/40 font-mono">{acc.code}</span>
            </button>
          );
        })}
      </div>

      {/* Aktif Aksan Açıklaması */}
      <div className="text-[11px] text-cyan-200/80 bg-cyan-950/40 border border-cyan-800/40 rounded-xl px-3 py-1.5 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
        <span>{currentAccentMeta.descriptionTr}</span>
      </div>

      {/* Kadın ve Erkek Konuşmacı Kartları */}
      <div className="grid sm:grid-cols-2 gap-3">
        {voicesForCurrentAccent.map((v) => {
          const isSelected = prefs.preferredVoiceId === v.id;
          const isPreviewing = previewPlayingId === v.id;

          return (
            <div
              key={v.id}
              className={cn(
                "p-3.5 rounded-xl border transition-all flex flex-col justify-between space-y-3",
                isSelected
                  ? "bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-cyan-400 shadow-md"
                  : "bg-black/30 border-white/10 hover:border-white/20"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-lg border",
                      v.gender === "female"
                        ? "bg-pink-950/60 border-pink-500/40 text-pink-300"
                        : "bg-blue-950/60 border-blue-500/40 text-blue-300"
                    )}
                  >
                    {v.gender === "female" ? "👩" : "👨"}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white">{v.displayName}</span>
                      <span className="text-[10px] font-mono text-white/50">({v.providerVoiceId})</span>
                    </div>
                    <span className="text-xs text-white/60 block">
                      {v.gender === "female" ? "Kadın Konuşmacı" : "Erkek Konuşmacı"} • {v.accentLabelTr}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium">
                  Doğal Neural Ses
                </span>
              </div>

              {/* Seçme ve Önizleme Butonları */}
              <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleSelectVoice(v)}
                  className={cn(
                    "flex-1 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all border",
                    isSelected
                      ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                  )}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Aktif Ses</span>
                    </>
                  ) : (
                    <span>Bu Sesi Seç</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleTogglePreview(v)}
                  className={cn(
                    "py-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1 transition-all border",
                    isPreviewing
                      ? "bg-amber-500 text-slate-950 border-amber-400 animate-pulse"
                      : "bg-white/5 hover:bg-white/15 text-white/80 border-white/15"
                  )}
                  title="Standart karşılaştırma cümlesini dinle"
                >
                  {isPreviewing ? (
                    <>
                      <Square className="w-3 h-3 fill-current" />
                      <span>Durdur</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>Önizle</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
