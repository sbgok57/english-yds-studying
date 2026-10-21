"use client";

import React, { useState, useEffect } from "react";
import {
  ALL_VOICE_REGISTRY,
  VoiceProfile,
  STANDARD_PREVIEW_TEXT,
  STANDARD_TURKISH_PREVIEW_TEXT,
} from "@/lib/tts/voice-registry";
import { clientAudio, PlaybackMetadata } from "@/lib/tts/audio-client";
import { Play, Square, CheckCircle2, AlertCircle, Volume2, Headphones } from "lucide-react";

interface VoiceProbeState {
  probed: boolean;
  ok: boolean;
  provider?: string;
  providerVoiceId?: string;
  distinctSpeakerVerified?: boolean;
  latencyMs?: number;
  error?: string;
}

const MANUAL_QA_STORAGE_KEY = "yds-voice-manual-qa-confirmed-v1";

export default function VoiceQaPanel() {
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const [probeResults, setProbeResults] = useState<Record<string, VoiceProbeState>>({});
  const [manualConfirmed, setManualConfirmed] = useState<Record<string, boolean>>({});
  const [filterLang, setFilterLang] = useState<"all" | "tr" | "en">("all");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(MANUAL_QA_STORAGE_KEY);
      if (saved) {
        setManualConfirmed(JSON.parse(saved));
      }
    } catch {
      /* noop */
    }
    return () => {
      clientAudio.stopAll();
    };
  }, []);

  const toggleManualConfirm = (voiceId: string) => {
    setManualConfirmed((prev) => {
      const next = { ...prev, [voiceId]: !prev[voiceId] };
      try {
        window.localStorage.setItem(MANUAL_QA_STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* noop */
      }
      return next;
    });
  };

  const handlePlayVoice = async (voice: VoiceProfile) => {
    if (activeVoiceId === voice.id) {
      clientAudio.stopAll();
      setActiveVoiceId(null);
      return;
    }

    setActiveVoiceId(voice.id);
    const sampleText =
      voice.contentLanguage === "tr" ? STANDARD_TURKISH_PREVIEW_TEXT : STANDARD_PREVIEW_TEXT;

    await clientAudio.play(sampleText, {
      voiceId: voice.id,
      locale: voice.locale,
      contentLanguage: voice.contentLanguage,
      gender: voice.gender,
      rate: 1.0,
      contentType: "sentence",
      onMetadata: (meta: PlaybackMetadata) => {
        setProbeResults((prev) => ({
          ...prev,
          [voice.id]: {
            probed: true,
            ok: true,
            provider: meta.provider,
            providerVoiceId: meta.providerVoiceId,
            distinctSpeakerVerified: meta.distinctSpeakerVerified,
            latencyMs: meta.latencyMs,
          },
        }));
      },
      onEnd: () => {
        setActiveVoiceId(null);
      },
      onError: (err) => {
        setActiveVoiceId(null);
        setProbeResults((prev) => ({
          ...prev,
          [voice.id]: {
            probed: true,
            ok: false,
            error: err?.message || "Ses oynatılamadı",
          },
        }));
      },
    });
  };

  const filteredVoices = ALL_VOICE_REGISTRY.filter((v) =>
    filterLang === "all" ? true : v.contentLanguage === filterLang
  );

  return (
    <section
      id="voice-qa-panel"
      data-testid="voice-qa-panel"
      aria-labelledby="voice-qa-heading"
      className="rounded-3xl border border-cyan-500/25 bg-slate-950/90 p-6 sm:p-8 space-y-5 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-2">
            <Headphones className="w-3.5 h-3.5" />
            <span>Merkezi Ses Motoru & Konuşmacı QA Denetim Masası</span>
          </div>
          <h2 id="voice-qa-heading" className="text-xl sm:text-2xl font-black text-white">
            16 Etkin Ses Profili (14 İngilizce Aksan + 2 Türkçe Anlatıcı: Emel & Ahmet)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Teknik probe sonuçları (MIME, sağlayıcı kimliği, gecikme süresi) ile gerçek insan kulağıyla{" "}
            <strong className="text-slate-200">&ldquo;Dinleyerek doğrulandı&rdquo;</strong> onayı birbirinden bağımsız tutulur.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 self-start">
          {[
            { id: "all", label: "Tümü (16)" },
            { id: "tr", label: "🇹🇷 Türkçe (2)" },
            { id: "en", label: "🌍 İngilizce (14)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterLang(tab.id as "all" | "tr" | "en")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterLang === tab.id
                  ? "bg-cyan-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredVoices.map((voice) => {
          const isPlaying = activeVoiceId === voice.id;
          const probe = probeResults[voice.id];
          const isConfirmed = Boolean(manualConfirmed[voice.id]);

          return (
            <div
              key={voice.id}
              data-testid={`voice-qa-card-${voice.id}`}
              className={`rounded-2xl border p-4 transition-all flex flex-col justify-between gap-3 ${
                isPlaying
                  ? "border-cyan-400 bg-cyan-950/30 shadow-lg"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg" aria-hidden="true">
                      {voice.flag}
                    </span>
                    <span className="text-sm font-black text-white">{voice.displayName}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-slate-200 font-semibold">
                      {voice.accentLabelTr} · {voice.gender === "female" ? "Kadın" : "Erkek"}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-cyan-300/90 mt-1">
                    ID: {voice.id} · ProviderVoice: {voice.providerVoiceId}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{voice.description}</p>
                </div>

                <button
                  type="button"
                  data-testid={`voice-qa-play-${voice.id}`}
                  onClick={() => handlePlayVoice(voice)}
                  aria-label={`${voice.displayName} (${voice.accentLabelTr}) sesini ${
                    isPlaying ? "durdur" : "dinle"
                  }`}
                  className={`min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all ${
                    isPlaying
                      ? "bg-rose-500 text-white shadow"
                      : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/30"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Durdur</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test Et</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px]">
                <div className="flex items-center gap-1.5">
                  {!probe ? (
                    <span className="text-slate-400 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-slate-500" />
                      Teknik Probe: Henüz çalıştırılmadı
                    </span>
                  ) : probe.ok ? (
                    <span className="text-emerald-300 flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {probe.provider} ({probe.latencyMs}ms) ·{" "}
                      {probe.distinctSpeakerVerified ? "Ayrık Neural Ses" : "Yedek Ses Motoru"}
                    </span>
                  ) : (
                    <span className="text-rose-300 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                      {probe.error}
                    </span>
                  )}
                </div>

                <label className="inline-flex items-center gap-1.5 cursor-pointer select-none text-slate-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={() => toggleManualConfirm(voice.id)}
                    className="rounded border-white/25 bg-slate-900 text-cyan-500 focus:ring-cyan-400"
                  />
                  <span>Dinleyerek doğrulandı</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
