"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Plus, CheckCircle2, AlertCircle, BookOpen, Layers, Type } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

interface EnrichedResult {
  word: string;
  lemma: string;
  partOfSpeech: string;
  partOfSpeechTr: string;
  cefrLevel: string;
  meaningTr: string;
  definitionEn: string;
  examples: { sentenceEn: string; sentenceTr: string }[];
  synonyms: string[];
  collocations: string[];
  source: string;
}

export default function WordManualEnricher() {
  const [term, setTerm] = useState("");
  const [meaning, setMeaning] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EnrichedResult | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEnrichAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) {
      toast.error("Lütfen İngilizce kelimeyi girin.");
      return;
    }

    setLoading(true);
    setResult(null);
    setSavedSuccess(false);

    try {
      const res = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          english: term.trim(),
          turkish: meaning.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Kelime zenginleştirilemedi.");
      }

      setResult(data.enriched);
      setSavedSuccess(true);
      confetti({ particleCount: 120, spread: 80 });
      toast.success(`'${term}' başarıyla ${data.enriched.cefrLevel} seviyesi ve '${data.enriched.partOfSpeechTr}' türüyle kaydedildi!`);
    } catch (err: any) {
      toast.error(err.message || "Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const getLevelBadgeColor = (lvl: string) => {
    switch (lvl) {
      case "A1":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "A2":
        return "bg-teal-500/20 text-teal-300 border-teal-500/40";
      case "B1":
        return "bg-sky-500/20 text-sky-300 border-sky-500/40";
      case "B2":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "C1":
        return "bg-rose-500/20 text-rose-300 border-rose-500/40";
      case "C2":
        return "bg-purple-500/20 text-purple-300 border-purple-500/40";
      default:
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    }
  };

  return (
    <div className="card-vibrant p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/30">
          🧠
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-amber-300">
            Akıllı Kelime Ekleme & Claude AI Zenginleştirme
          </h3>
          <p className="text-xs text-white/60">
            Eklediğiniz her kelimenin CEFR seviyesi (A1-C2), türü (noun, verb, adj...) ve doğal örnek cümleleri otomatik oluşturulur.
          </p>
        </div>
      </div>

      <form onSubmit={handleEnrichAndSave} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-end">
        <div>
          <label className="block text-xs font-bold text-cyan-300 mb-1.5 uppercase tracking-wider">
            İngilizce Kelime / Kalıp *
          </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Örn: exacerbate, resilient, call off"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-2xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-semibold"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-pink-300 mb-1.5 uppercase tracking-wider">
            Türkçe Anlamı (Opsiyonel)
          </label>
          <input
            type="text"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="Boş bırakırsanız yapay zeka otomatik bulur"
            className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-2xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !term.trim()}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 disabled:opacity-50 text-white font-black text-sm rounded-2xl shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 h-[46px]"
        >
          {loading ? (
            <>
              <span className="animate-spin text-base">⏳</span>
              <span>Çözümleniyor...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Otomatik Zenginleştir & Kaydet</span>
            </>
          )}
        </button>
      </form>

      {/* Zenginleştirilmiş Sonuç Paneli */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-slate-900/90 to-purple-950/40 p-6 space-y-5 shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-white">{result.word}</span>
                <span className={cn("px-3 py-1 rounded-full text-xs font-black border", getLevelBadgeColor(result.cefrLevel))}>
                  Seviye: {result.cefrLevel}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  {result.partOfSpeechTr} ({result.partOfSpeech})
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Veritabanına & Ortak Havuza Eklendi</span>
              </div>
            </div>

            {/* Anlam ve Tanım */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest font-bold">
                  Türkçe Anlam
                </div>
                <div className="text-base font-bold text-amber-200">{result.meaningTr}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest font-bold">
                  İngilizce Akademik Tanım
                </div>
                <div className="text-xs text-white/80 leading-relaxed">{result.definitionEn}</div>
              </div>
            </div>

            {/* Örnek Cümleler */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-widest font-bold flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Otomatik Üretilen Doğal Örnek Cümleler</span>
              </div>

              <div className="space-y-2">
                {result.examples.map((ex, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <div className="text-xs sm:text-sm font-semibold text-white flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">#{i + 1}</span>
                      <span>{ex.sentenceEn}</span>
                    </div>
                    {ex.sentenceTr && (
                      <div className="text-xs text-emerald-300 pl-5">
                        🇹🇷 {ex.sentenceTr}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Eş Anlamlılar ve Collocations */}
            {(result.synonyms?.length > 0 || result.collocations?.length > 0) && (
              <div className="flex flex-wrap gap-4 text-xs pt-2">
                {result.synonyms?.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-white/50 block font-bold">Eş Anlamlılar:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {result.synonyms.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-white/10 text-white/90">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {result.collocations?.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-white/50 block font-bold">Eşdizimler (Collocations):</span>
                    <div className="flex flex-wrap gap-1.5">
                      {result.collocations.map((c, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-pink-500/15 border border-pink-500/30 text-pink-200">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
