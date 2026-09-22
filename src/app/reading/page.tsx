"use client";

import { useMemo, useState } from "react";
import { PASSAGES } from "@/lib/data-reading";
import ReadingQuiz from "@/components/ReadingQuiz";
import ErrorBoundary from "@/components/ErrorBoundary";
import AcademicAudioPlayer from "@/components/reading/AcademicAudioPlayer";
import { cn } from "@/lib/utils";

function HighlightedText({
  text,
  glossary,
}: {
  text: string;
  glossary: { word: string; tr: string }[];
}) {
  const [open, setOpen] = useState<string | null>(null);

  const parts = useMemo(() => {
    const words = glossary.map((g) => g.word).sort((a, b) => b.length - a.length);
    const regex = new RegExp(
      `(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
      "gi"
    );
    return text.split(regex);
  }, [text, glossary]);

  const findDef = (w: string) => glossary.find((g) => g.word.toLowerCase() === w.toLowerCase());

  return (
    <p className="leading-relaxed text-white/80">
      {parts.map((p, i) => {
        const def = findDef(p);
        if (!def) return <span key={i}>{p}</span>;
        const isOpen = open === p;
        return (
          <span key={i} className="relative inline-block">
            <button
              onClick={() => setOpen(isOpen ? null : p)}
              className={`rounded px-0.5 underline decoration-dotted underline-offset-4 transition-colors ${
                isOpen ? "bg-amber-400/25 text-amber-200" : "text-cyan-300 hover:bg-cyan-400/15"
              }`}
            >
              {p}
            </button>
            {isOpen && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-10 w-max max-w-[240px] rounded-xl bg-slate-800 border border-white/15 px-3 py-1.5 text-xs text-white shadow-xl anim-pop">
                <b className="text-amber-300">{def.word}</b> → {def.tr}
              </span>
            )}
          </span>
        );
      })}
    </p>
  );
}

export default function ReadingPage() {
  const [pid, setPid] = useState(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [mode, setMode] = useState<"read" | "quiz">("read");
  const [activeParagraph, setActiveParagraph] = useState(0);

  const passage = PASSAGES[pid] || PASSAGES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          🔬 <span className="gradient-text">Reading Lab</span>
        </h1>
        <p className="text-white/60">
          Kanka, okumadan net olmaz! Özgün parçalar · kelimeye tıkla, anında sözlük · havai fişekli mini test
        </p>
        <div className="flex justify-center gap-2 mt-5">
          <button
            onClick={() => setMode("read")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
              mode === "read"
                ? "bg-gradient-to-r from-sky-500 to-blue-600"
                : "border border-white/15 text-white/60 hover:text-white"
            }`}
          >
            📖 Okuma Modu
          </button>
          <button
            onClick={() => setMode("quiz")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
              mode === "quiz"
                ? "bg-gradient-to-r from-sky-500 to-blue-600"
                : "border border-white/15 text-white/60 hover:text-white"
            }`}
          >
            🧪 Mini Test (havai fişekli)
          </button>
        </div>
      </header>

      {mode === "quiz" ? (
        <ErrorBoundary label="Reading mini test">
          <ReadingQuiz />
        </ErrorBoundary>
      ) : (
        <>
          {/* Parça seçici */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {PASSAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setPid(i);
                  setActiveParagraph(0);
                  setRevealed({});
                }}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                  pid === i
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 border-transparent"
                    : "border-white/15 text-white/60 hover:text-white"
                }`}
              >
                {p.emoji ?? "📄"} {p.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-6">
            {/* Metin */}
            <div className="card-vibrant p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-2xl font-black">{passage.title}</h2>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/10 text-white/60">
                  {passage.level}
                </span>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-sky-500/15 text-sky-300">
                  {passage.topic}
                </span>
              </div>

              {/* Bilimsel/Akademik Metin Ses Oynatıcısı */}
              <AcademicAudioPlayer
                title={passage.title}
                paragraphs={passage.paragraphs}
                activeParagraph={activeParagraph}
                onParagraphSelect={setActiveParagraph}
                className="mb-6"
              />

              <div className="space-y-4">
                {passage.paragraphs.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveParagraph(i)}
                    className={cn(
                      "p-3 rounded-2xl transition-all cursor-pointer",
                      activeParagraph === i
                        ? "bg-blue-500/10 border border-blue-400/40 shadow-sm"
                        : "border border-transparent hover:bg-white/[0.02]"
                    )}
                  >
                    <HighlightedText text={p} glossary={passage.glossary} />
                  </div>
                ))}
              </div>

              {/* Sorular */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-black mb-4">❓ Kavrama Soruları</h3>
                <div className="space-y-3">
                  {passage.questions.map((q, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm text-white/85 leading-relaxed">
                        <span className="font-black text-cyan-300 mr-2">{i + 1}.</span>
                        {q.q}
                      </p>
                      {revealed[i] ? (
                        <p className="mt-3 text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-3 leading-relaxed anim-pop">
                          ✅ {q.a}
                        </p>
                      ) : (
                        <button
                          onClick={() => setRevealed((r) => ({ ...r, [i]: true }))}
                          className="mt-3 text-xs font-bold text-white/50 hover:text-white underline underline-offset-4"
                        >
                          Cevabı göster
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sözlük */}
            <aside className="card-vibrant p-5 h-fit lg:sticky lg:top-20">
              <p className="font-black mb-3">📖 Kelime Sözlüğü</p>
              <p className="text-xs text-white/40 mb-4">Metinde altı çizili kelimelere tıklayarak da görebilirsin.</p>
              <div className="space-y-2">
                {passage.glossary.map((g) => (
                  <div key={g.word} className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2">
                    <p className="font-mono text-sm font-bold text-cyan-300">{g.word}</p>
                    <p className="text-xs text-white/60">{g.tr}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
}
