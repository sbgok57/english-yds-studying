"use client";

import { useEffect, useId, useState } from "react";
import {
  browserVoicesForLanguage,
  chooseBrowserVoice,
  formatBrowserVoiceLabel,
  formatVoiceProfileLabel,
  nativeVoiceOptionId,
  nativeVoiceUriFromOption,
  type SpeechVoiceProfile,
} from "../shared/speech-voices";
import { clientAudio } from "@/lib/tts/audio-client";
import type { AccentCode } from "@/lib/tts/voice-registry";
import { Volume2, Loader2, AlertCircle } from "lucide-react";

type Props = {
  text: string;
  language?: string;
  voiceProfiles?: readonly SpeechVoiceProfile[];
  selectedVoiceProfileId?: string;
  onVoiceProfileChange?: (id: string) => void;
  /** Provider callback; resolve after audio playback, not merely after enqueueing a request. */
  onSpeak?: (text: string, profileId: string, language: string) => Promise<void> | void;
  className?: string;
};

function canSpeakLocally(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

/** Word pronunciation with explicit provider/device voice choices and visible failures. */
export function PronunciationButton({
  text,
  language = "en-GB",
  voiceProfiles = [],
  selectedVoiceProfileId,
  onVoiceProfileChange,
  onSpeak,
  className = "",
}: Props) {
  const id = useId();
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [localSelection, setLocalSelection] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const matchingProfiles = voiceProfiles.filter(
    (profile) => profile.language.toLowerCase().split(/[-_]/)[0] === language.toLowerCase().split(/[-_]/)[0],
  );

  useEffect(() => {
    if (!canSpeakLocally()) return;
    const synth = window.speechSynthesis;
    const update = () => setBrowserVoices(synth.getVoices());
    update();
    synth.addEventListener("voiceschanged", update);
    const timeout = window.setTimeout(update, 250);
    return () => {
      window.clearTimeout(timeout);
      synth.removeEventListener("voiceschanged", update);
      clientAudio.stopAll();
    };
  }, []);

  const localVoices = browserVoicesForLanguage(browserVoices, language);
  const selectedId =
    selectedVoiceProfileId ??
    (localSelection || matchingProfiles[0]?.id || (localVoices[0] ? nativeVoiceOptionId(localVoices[0].voiceURI) : ""));

  async function speakLocally(profileId: string) {
    if (!canSpeakLocally()) throw new Error("Bu tarayıcıda seslendirme desteği yok.");
    const synth = window.speechSynthesis;
    const profile = matchingProfiles.find((candidate) => candidate.id === profileId);
    const preferredUri = nativeVoiceUriFromOption(profileId) ?? profile?.voiceURI;
    const voice = chooseBrowserVoice(synth.getVoices(), profile?.language ?? language, preferredUri);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = profile?.language ?? language;
    utterance.rate = 0.93;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (voice) utterance.voice = voice;

    await new Promise<void>((resolve, reject) => {
      let started = false;
      let complete = false;
      const timeout = window.setTimeout(() => {
        if (!started && !complete) finish(new Error("Cihazın ses motoru başlamadı. Başka bir ses seç veya TTS sağlayıcısını kontrol et."));
      }, 10_000);
      const finish = (reason?: Error) => {
        if (complete) return;
        complete = true;
        window.clearTimeout(timeout);
        if (reason) reject(reason);
        else resolve();
      };
      utterance.onstart = () => {
        started = true;
        setStatus(`${voice?.name ?? "Cihaz sesi"} · ${voice?.lang ?? language}`);
      };
      utterance.onend = () => finish();
      utterance.onerror = (event) =>
        finish(
          new Error(
            event.error === "not-allowed"
              ? "Tarayıcı sesi engelledi; ekrana dokunup tekrar dene."
              : `Ses oynatılamadı (${event.error || "unknown"}).`,
          ),
        );
      synth.cancel();
      synth.speak(utterance);
    });
  }

  async function play() {
    if (!text.trim()) {
      setError("Telaffuz edilecek kelime metni boş.");
      return;
    }
    setBusy(true);
    setStatus("Ses hazırlanıyor…");
    setError("");
    try {
      if (onSpeak && selectedId && !selectedId.startsWith("native:")) {
        await onSpeak(text, selectedId, language);
        setStatus("Telaffuz tamamlandı.");
      } else if (!selectedId.startsWith("native:")) {
        await clientAudio.play(text, {
          voiceId: selectedId || undefined,
          accent: (language.startsWith("tr") ? undefined : (language as AccentCode)) || "en-GB",
          locale: (language.startsWith("tr") ? "tr-TR" : (language as AccentCode)) || "en-GB",
          contentLanguage: language.startsWith("tr") ? "tr" : "en",
          gender: selectedId.toLowerCase().includes("male") || selectedId.toLowerCase().includes("ahmet") ? "male" : "female",
          rate: 0.93,
          contentType: text.includes(" ") ? "sentence" : "word",
        });
        setStatus("Telaffuz tamamlandı.");
      } else {
        await speakLocally(selectedId);
        setStatus("Telaffuz tamamlandı.");
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Ses oynatılamadı.");
      setStatus("");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={`yds-pronunciation inline-flex flex-col gap-1.5 ${className}`} aria-label="Kelime telaffuzu">
      <div className="flex items-center gap-2">
        <button
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          type="button"
          onClick={() => void play()}
          disabled={busy || !text.trim()}
          title="Kelimeyi dinle"
        >
          {busy ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
          <span>{busy ? "Oynatılıyor…" : "🔊 Dinle"}</span>
        </button>

        {(matchingProfiles.length > 0 || localVoices.length > 0) && (
          <select
            id={`${id}-voice`}
            aria-label="Telaffuz sesi"
            className="text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-800 dark:text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 max-w-[140px] truncate"
            value={selectedId}
            onChange={(event) => {
              setLocalSelection(event.target.value);
              onVoiceProfileChange?.(event.target.value);
              setError("");
            }}
            disabled={busy}
          >
            {matchingProfiles.length > 0 && (
              <optgroup label="Uygulama sesleri">
                {matchingProfiles.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {formatVoiceProfileLabel(profile)}
                  </option>
                ))}
              </optgroup>
            )}
            {localVoices.length > 0 && (
              <optgroup label="Cihaz sesleri">
                {localVoices.map((voice) => (
                  <option key={voice.voiceURI} value={nativeVoiceOptionId(voice.voiceURI)}>
                    {formatBrowserVoiceLabel(voice)}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        )}
      </div>

      {error && (
        <span className="yds-error flex items-center gap-1 text-[11px] text-red-500 font-medium" role="alert">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </span>
      )}
      {status && !error && (
        <span className="yds-footnote text-[10px] text-slate-500 dark:text-slate-400" role="status" aria-live="polite">
          {status}
        </span>
      )}
    </div>
  );
}
