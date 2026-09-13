"use client";

import { useState } from "react";
import { FileSpreadsheet, Sparkles, BookOpen, CheckCircle2, ChevronRight, X } from "lucide-react";
import TTSPlayer from "@/components/tts/TTSPlayer";
import { cn } from "@/lib/utils";

interface ReadingPassage {
  id: string;
  title: string;
  category: string;
  level: string;
  text: string;
  vocabularyMap: Record<string, string>;
  questions: {
    id: number;
    prompt: string;
    sampleAnswer: string;
    rubricHint: string;
  }[];
}

const SAMPLE_PASSAGES: ReadingPassage[] = [
  {
    id: "neuroplasticity-and-language",
    title: "Neuroplasticity and Second Language Acquisition",
    category: "Nörobilim & Dil Edinimi",
    level: "B2 - YDS Düzeyi",
    text: `For decades, neuroscientists posited that the adult human brain was an immutable organ, structurally fixed after critical developmental windows in early childhood. However, ground-breaking neuroimaging studies have thoroughly dismantled this rigid doctrine, demonstrating that neuroplasticity persists across the entire human lifespan. 

When adults embark on mastering a new language, cortical networks undergo substantial structural and functional reorganization. Synaptogenesis intensifies in the left temporal lobe, while the corpus callosum exhibits heightened myelination, accelerating inter-hemispheric communication. Far from being a passive memorization task, vocabulary acquisition and grammar synthesis compel the brain to construct novel neural circuits, effectively shielding against premature neurodegenerative decline. Consequently, linguistic immersion serves not merely as a practical communicative tool, but as a robust cognitive safeguard.`,
    vocabularyMap: {
      posited: "öne sürdü, varsaydı",
      immutable: "değişmez, sabit",
      dismantled: "çürüttü, parçalara ayırdı",
      doctrine: "öğreti, ilke",
      neuroplasticity: "beyin esnekliği, sinirsel uyum yeteneği",
      substantial: "büyük ölçüde, önemli",
      intensifies: "yoğunlaşır, artar",
      myelination: "miyelin kılıf oluşumu",
      compel: "zorlamak, sevk etmek",
      safeguard: "güvence, koruma kalkanı",
    },
    questions: [
      {
        id: 1,
        prompt: "According to the passage, what traditional view regarding the adult human brain was disproven by modern neuroimaging?",
        sampleAnswer: "Traditional neuroscience viewed the adult brain as an immutable, structurally fixed organ that could not change after childhood; modern studies proved neuroplasticity continues throughout life.",
        rubricHint: "Cevabınızda 'immutable / structurally fixed' ve 'neuroplasticity persists throughout life' karşıtlığını belirttiniz mi?",
      },
      {
        id: 2,
        prompt: "Which specific anatomical regions of the brain experience structural transformations during adult language learning?",
        sampleAnswer: "The left temporal lobe (increased synaptogenesis) and the corpus callosum (heightened myelination).",
        rubricHint: "Sol temporal lob ve corpus callosum bölgelerine değindiniz mi?",
      },
      {
        id: 3,
        prompt: "How does second language acquisition contribute to long-term neurological health?",
        sampleAnswer: "It compels the brain to generate new neural circuits, which acts as a protective shield against early neurodegenerative decline.",
        rubricHint: "Yeni sinir yolları inşa ederek nörodejeneratif gerilemeye karşı koruma sağladığını açıkladınız mı?",
      },
    ],
  },
];

export default function ReadingPage() {
  const [selectedWord, setSelectedWord] = useState<{ word: string; meaning: string } | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const passage = SAMPLE_PASSAGES[0];

  const handleWordClick = (rawWord: string) => {
    const cleaned = rawWord.toLowerCase().replace(/[^a-zA-Z]/g, "");
    const meaning = passage.vocabularyMap[cleaned];
    if (meaning) {
      setSelectedWord({ word: cleaned, meaning });
    } else {
      setSelectedWord({ word: cleaned, meaning: "Sözlükte anlam aramak için çift tıklayın." });
    }
  };

  const toggleAnswer = (qId: number) => {
    setRevealedAnswers((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border-2 border-emerald-500/30 shadow-2xl space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Reader at Work Tarzı • Açık Uçlu Soru & Sözlük</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Akademik Reading & Anında Sözlük Laboratuvarı
        </h1>
        <p className="text-xs md:text-sm text-white/70">
          Metindeki altı çizili veya herhangi bir kelimeye tıklayarak Türkçe karşılığını anında görün.
        </p>
      </div>

      {/* Okuma Metni Kartı */}
      <div className="card-vibrant p-6 md:p-10 space-y-6 relative">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="glass-pill text-[10px] text-cyan-300 mr-2">
              {passage.category}
            </span>
            <span className="glass-pill text-[10px] text-yellow-300">
              {passage.level}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-2">
              {passage.title}
            </h2>
          </div>
          <TTSPlayer text={passage.text.slice(0, 300)} size="md" showControls={true} />
        </div>

        {/* Tıklanabilir Paragraf Metni */}
        <div className="text-base md:text-lg leading-relaxed text-white/90 font-serif space-y-4">
          {passage.text.split("\n\n").map((para, pIdx) => (
            <p key={pIdx}>
              {para.split(" ").map((word, wIdx) => {
                const clean = word.toLowerCase().replace(/[^a-zA-Z]/g, "");
                const isHighlight = Boolean(passage.vocabularyMap[clean]);
                return (
                  <span
                    key={wIdx}
                    onClick={() => handleWordClick(word)}
                    className={cn(
                      "cursor-pointer hover:bg-yellow-400/20 transition-colors rounded px-0.5 inline-block",
                      isHighlight && "border-b-2 border-cyan-400 font-semibold text-cyan-200"
                    )}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          ))}
        </div>

        {/* Anlık Sözlük Popover'ı */}
        {selectedWord && (
          <div className="p-4 rounded-2xl bg-slate-900 border-2 border-cyan-400 shadow-2xl flex items-center justify-between gap-3 animate-fade-in">
            <div>
              <span className="text-xs font-mono text-cyan-300 uppercase block font-bold">
                📖 Seçilen Kelime: {selectedWord.word}
              </span>
              <p className="text-base font-black text-yellow-300">
                {selectedWord.meaning}
              </p>
            </div>
            <button
              onClick={() => setSelectedWord(null)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/60"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 5 Açık Uçlu Soru ve Değerlendirme Rubriği */}
      <div className="space-y-4">
        <h3 className="text-2xl font-black text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-emerald-400" />
          Metin Kavrama & Kendi Kendini Değerlendirme (Rubrik)
        </h3>

        {passage.questions.map((q) => (
          <div key={q.id} className="card-vibrant p-6 space-y-4">
            <h4 className="text-base font-bold text-white">
              Soru {q.id}: {q.prompt}
            </h4>

            <textarea
              placeholder="Kendi cevabınızı buraya yazın..."
              className="w-full h-24 p-3.5 rounded-2xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-emerald-400"
            />

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => toggleAnswer(q.id)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-emerald-300 transition-colors"
              >
                {revealedAnswers[q.id] ? "Örnek Cevabı Gizle" : "Örnek Cevabı & Rubriği Gör"}
              </button>
            </div>

            {revealedAnswers[q.id] && (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2 text-xs">
                <p className="text-emerald-200">
                  <strong>✅ İdeal Akademik Yanıt:</strong> {q.sampleAnswer}
                </p>
                <p className="text-white/70 italic border-t border-emerald-500/20 pt-2">
                  <strong>📋 Değerlendirme Rubriği:</strong> {q.rubricHint}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
