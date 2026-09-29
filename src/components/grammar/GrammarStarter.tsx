"use client";

import { useEffect, useId, useState, useRef } from "react";
import { GRAMMAR_LESSONS, type GrammarLesson } from "./grammar-curriculum";
import { Sparkles, Volume2, VolumeX, CheckCircle2, XCircle, ArrowLeft, ArrowRight, RotateCcw, Award } from "lucide-react";

export type GrammarVoiceProfile = {
  id: string;
  label: string;
  /** BCP-47 language tag, e.g. en-GB, en-US, tr-TR. */
  language: string;
  /** Optional browser SpeechSynthesis voice URI for local fallback. */
  voiceURI?: string;
  /** Optional flag emoji */
  flag?: string;
};

export type LanguageKey = "en" | "tr";

const DEFAULT_ENGLISH_PROFILES: readonly GrammarVoiceProfile[] = [
  { id: "en-gb-female", label: "İngiliz Aksanı (British 🇬🇧 - Rachel)", language: "en-GB", flag: "🇬🇧" },
  { id: "en-us-female", label: "Amerikan Aksanı (American 🇺🇸 - Sarah)", language: "en-US", flag: "🇺🇸" },
  { id: "en-au-female", label: "Avustralya Aksanı (Australian 🇦🇺 - Chloe)", language: "en-AU", flag: "🇦🇺" },
  { id: "en-ca-female", label: "Kanada Aksanı (Canadian 🇨🇦 - Clara)", language: "en-CA", flag: "🇨🇦" },
];

const DEFAULT_TURKISH_PROFILES: readonly GrammarVoiceProfile[] = [
  { id: "tr-tr-female", label: "Türkçe Doğal Anlatım (Filiz 🇹🇷)", language: "tr-TR", flag: "🇹🇷" },
];

type Props = {
  voiceProfiles?: readonly GrammarVoiceProfile[];
  selectedVoiceProfileIds?: Partial<Record<LanguageKey, string>>;
  onVoiceProfileChange?: (language: LanguageKey, voiceProfileId: string) => void;
  onSpeak?: (text: string, voiceProfileId: string) => Promise<void> | void;
  onLessonCompleted?: (lessonId: string) => void;
};

const languageMatches = (profile: GrammarVoiceProfile, language: LanguageKey) =>
  profile.language.toLowerCase().split("-")[0] === language;

function lessonNarration(lesson: GrammarLesson): string {
  return lesson.examples.map((example) => example.en).join(". ");
}

export function GrammarStarter({
  voiceProfiles = [...DEFAULT_ENGLISH_PROFILES, ...DEFAULT_TURKISH_PROFILES],
  selectedVoiceProfileIds,
  onVoiceProfileChange,
  onSpeak,
  onLessonCompleted,
}: Props) {
  const headingId = useId();
  const [lessonIndex, setLessonIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(() => new Set());
  const [speaking, setSpeaking] = useState(false);
  const [speakingText, setSpeakingText] = useState("");
  const [speechError, setSpeechError] = useState("");
  const [localVoiceIds, setLocalVoiceIds] = useState<Partial<Record<LanguageKey, string>>>({
    en: "en-gb-female",
    tr: "tr-tr-female",
  });

  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  const englishProfiles = voiceProfiles.filter((profile) => languageMatches(profile, "en"));
  const turkishProfiles = voiceProfiles.filter((profile) => languageMatches(profile, "tr"));

  const englishVoiceId =
    selectedVoiceProfileIds?.en ?? localVoiceIds.en ?? englishProfiles[0]?.id ?? "en-gb-female";
  const turkishVoiceId =
    selectedVoiceProfileIds?.tr ?? localVoiceIds.tr ?? turkishProfiles[0]?.id ?? "tr-tr-female";

  const lesson = GRAMMAR_LESSONS[lessonIndex] ?? GRAMMAR_LESSONS[0]!;
  const progressPercent = Math.round((completed.size / GRAMMAR_LESSONS.length) * 100);

  // PERF: Clean up speech audio on unmount
  useEffect(() => {
    return () => {
      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function selectVoice(language: LanguageKey, id: string) {
    setLocalVoiceIds((current) => ({ ...current, [language]: id }));
    onVoiceProfileChange?.(language, id);
  }

  function stopSpeaking() {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
    setSpeakingText("");
  }

  async function speak(text: string, profileId: string, language: LanguageKey) {
    setSpeechError("");
    stopSpeaking();

    if (!text.trim()) return;

    setSpeaking(true);
    setSpeakingText(text);

    // 1. If custom onSpeak provided
    if (onSpeak) {
      try {
        await onSpeak(text, profileId);
        setSpeaking(false);
        setSpeakingText("");
        return;
      } catch (err) {
        console.warn("[TTS] onSpeak error, falling back to server TTS:", err);
      }
    }

    // 2. Try server TTS API endpoint /api/tts
    try {
      const selectedProfile = voiceProfiles.find((p) => p.id === profileId);
      const accent = selectedProfile?.language || (language === "en" ? "en-GB" : "tr-TR");
      const url = `/api/tts?text=${encodeURIComponent(text)}&accent=${encodeURIComponent(accent)}&contentType=sentence`;

      const audio = new Audio(url);
      activeAudioRef.current = audio;

      const playPromise = new Promise<void>((resolve, reject) => {
        audio.onended = () => {
          setSpeaking(false);
          setSpeakingText("");
          resolve();
        };
        audio.onerror = () => reject(new Error("Server TTS audio error"));
      });

      await audio.play();
      await playPromise;
      return;
    } catch {
      // Fallback to browser SpeechSynthesis API
    }

    // 3. Fallback: Browser Web Speech API
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSpeaking(false);
      setSpeakingText("");
      setSpeechError("Bu tarayıcıda sesli okuma desteklenmiyor.");
      return;
    }

    try {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      const profile = voiceProfiles.find((item) => item.id === profileId);
      utterance.lang = profile?.language ?? (language === "en" ? "en-GB" : "tr-TR");
      utterance.rate = 0.95;

      const availableVoices = synth.getVoices();
      const localVoice =
        availableVoices.find((voice) => profile?.voiceURI && voice.voiceURI === profile.voiceURI) ??
        availableVoices.find((voice) => voice.lang.toLowerCase() === utterance.lang.toLowerCase()) ??
        availableVoices.find((voice) => voice.lang.toLowerCase().startsWith(`${language}-`));

      if (localVoice) utterance.voice = localVoice;

      utterance.onend = () => {
        setSpeaking(false);
        setSpeakingText("");
      };
      utterance.onerror = () => {
        setSpeaking(false);
        setSpeakingText("");
        setSpeechError("Cihazın seslendirme motoru konuşmayı başlatamadı.");
      };

      synth.speak(utterance);
    } catch (e) {
      setSpeaking(false);
      setSpeakingText("");
      setSpeechError("Seslendirme sırasında bir hata oluştu.");
    }
  }

  function moveTo(index: number) {
    stopSpeaking();
    const nextIndex = Math.max(0, Math.min(GRAMMAR_LESSONS.length - 1, index));
    setLessonIndex(nextIndex);
    setAnswerIndex(null);
    setSpeechError("");
  }

  function answer(index: number) {
    if (answerIndex !== null) return;
    setAnswerIndex(index);
    if (index === lesson.quiz.answerIndex && !completed.has(lesson.id)) {
      setCompleted((current) => new Set(current).add(lesson.id));
      onLessonCompleted?.(lesson.id);
    }
  }

  return (
    <section
      className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-6"
      aria-labelledby={headingId}
    >
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-bold text-cyan-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Sıfırdan, Adım Adım Temel Gramer</span>
          </div>
          <h2 id={headingId} className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            İngilizce Gramer Temelleri
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
            Önce en temel cümle yapısından başla; kısa açıklama, örnekler, Türkçe karşılık ve mini soruyla ilerle.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
            <Award className="w-4 h-4 text-purple-400" />
            <span>{completed.size} / {GRAMMAR_LESSONS.length} Tamamlandı (%{progressPercent})</span>
          </div>
          <div className="w-44 h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Aksan & Ses Seçici Kontrolleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-cyan-300/80 mb-1.5">
            English Aksanı (Doğal Ses)
          </label>
          <select
            value={englishVoiceId}
            onChange={(e) => selectVoice("en", e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-white/15 px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
            aria-label="İngilizce örnekler için aksan seçin"
          >
            {englishProfiles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-purple-300/80 mb-1.5">
            Türkçe Anlatım Sesi
          </label>
          <select
            value={turkishVoiceId}
            onChange={(e) => selectVoice("tr", e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-white/15 px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-purple-400 cursor-pointer"
            aria-label="Türkçe açıklamalar için ses seçin"
          >
            {turkishProfiles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Ders Kartı */}
      <article className="space-y-6 pt-2">
        <div className="flex items-center justify-between text-xs font-bold text-white/50">
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80">
            Ders {lesson.order} / {GRAMMAR_LESSONS.length}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300">
            {lesson.level} · Temel Başlangıç
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white">{lesson.title}</h3>
          <p className="text-sm font-semibold text-cyan-300/90 mt-1">{lesson.objective}</p>
          <p className="text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">{lesson.explanation}</p>
        </div>

        {/* Kalıp Formülü */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-950 border border-purple-500/30 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Gramer Kalıbı / Formül</span>
          <p className="font-mono text-xs sm:text-sm text-cyan-200 font-bold">{lesson.pattern}</p>
        </div>

        {/* Sesli Dinleme Butonları */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={speaking}
            onClick={() => void speak(lesson.explanation, turkishVoiceId, "tr")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 text-xs font-bold transition-all disabled:opacity-50"
          >
            <Volume2 className="w-4 h-4 text-purple-400" />
            <span>Türkçe Açıklamayı Dinle</span>
          </button>

          <button
            type="button"
            disabled={speaking}
            onClick={() => void speak(lessonNarration(lesson), englishVoiceId, "en")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-200 text-xs font-bold transition-all disabled:opacity-50"
          >
            <Volume2 className="w-4 h-4 text-cyan-400" />
            <span>İngilizce Örnekleri Dinle ({englishProfiles.find((p) => p.id === englishVoiceId)?.flag || "🇬🇧"})</span>
          </button>

          {speaking && (
            <button
              type="button"
              onClick={stopSpeaking}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all hover:bg-rose-500/30"
            >
              <VolumeX className="w-4 h-4" />
              <span>Durdur</span>
            </button>
          )}
        </div>

        {/* Örnek Cümleler */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-white/50">Örnek Cümleler & Dinleme</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lesson.examples.map((example) => (
              <div
                key={example.en}
                className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold text-white">{example.en}</p>
                  <p className="text-xs text-white/50">{example.tr}</p>
                </div>
                <button
                  type="button"
                  aria-label={`İngilizce örneği seslendir: ${example.en}`}
                  disabled={speaking && speakingText === example.en}
                  onClick={() => void speak(example.en, englishVoiceId, "en")}
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-sm transition-all shrink-0 hover:scale-110"
                >
                  🔊
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sık Yapılan Hata */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">⚠️ Sık Yapılan Hata</span>
          <p className="text-xs text-amber-200/90 leading-relaxed">{lesson.commonMistake}</p>
        </div>

        {/* Mini Test / Quiz */}
        <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/15 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h4 className="text-sm font-bold text-white">{lesson.quiz.prompt}</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.quiz.choices.map((choice, index) => {
              const isCorrect = index === lesson.quiz.answerIndex;
              const isSelected = index === answerIndex;

              let btnStyle = "bg-white/[0.05] border-white/10 hover:bg-white/10 text-white/90";
              if (answerIndex !== null) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-200";
                } else if (isSelected) {
                  btnStyle = "bg-rose-500/20 border-rose-500/60 text-rose-200";
                } else {
                  btnStyle = "bg-white/[0.02] border-white/5 text-white/40 opacity-60";
                }
              }

              return (
                <button
                  key={`${index}-${choice}`}
                  type="button"
                  disabled={answerIndex !== null}
                  onClick={() => answer(index)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold text-left transition-all ${btnStyle}`}
                >
                  <span>{choice}</span>
                  {answerIndex !== null && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {answerIndex !== null && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {answerIndex !== null && (
            <div className="space-y-3 pt-2">
              <div
                className={`p-3.5 rounded-xl text-xs font-medium leading-relaxed ${
                  answerIndex === lesson.quiz.answerIndex
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                }`}
              >
                <strong>{answerIndex === lesson.quiz.answerIndex ? "Tebrikler! Doğru. " : "Henüz değil. "}</strong>
                {lesson.quiz.explanation}
              </div>

              {answerIndex !== lesson.quiz.answerIndex && (
                <button
                  type="button"
                  onClick={() => setAnswerIndex(null)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tekrar Dene</span>
                </button>
              )}
            </div>
          )}
        </div>
      </article>

      {speechError && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs font-semibold text-rose-300">
          ⚠️ {speechError}
        </div>
      )}

      {/* Navigasyon Butonları */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <button
          type="button"
          disabled={lessonIndex === 0}
          onClick={() => moveTo(lessonIndex - 1)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Önceki Ders</span>
        </button>

        <span className="text-xs font-mono text-white/40">
          {lessonIndex + 1} / {GRAMMAR_LESSONS.length}
        </span>

        <button
          type="button"
          disabled={lessonIndex === GRAMMAR_LESSONS.length - 1}
          onClick={() => moveTo(lessonIndex + 1)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all disabled:opacity-30 disabled:pointer-events-none"
        >
          <span>Sonraki Ders</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default GrammarStarter;
