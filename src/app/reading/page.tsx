"use client";

import { useMemo, useState } from "react";
import { PASSAGES, ReadingPassage } from "@/lib/data-reading";
import ReadingQuiz from "@/components/ReadingQuiz";
import ErrorBoundary from "@/components/ErrorBoundary";
import AcademicAudioPlayer from "@/components/reading/AcademicAudioPlayer";
import { cn } from "@/lib/utils";

interface DomainCat {
  id: string;
  label: string;
  icon: string;
  pattern?: RegExp;
}

const DOMAIN_CATEGORIES: DomainCat[] = [
  { id: "all", label: "Tümü (200 Metin)", icon: "📚" },
  { id: "neuro", label: "Nörobilim & Zihin", icon: "🧠", pattern: /nöro|psiko|biliş|zihin|dikkat|algı|hafıza/i },
  { id: "bio", label: "Tıp & Biyoloji", icon: "🧬", pattern: /biyo|tıp|genet|immün|kanser|sağlık|mikro|epigen|hücre|onkoloji|patoloji|transplant|viroloji|farmakoloji|epidemiyoloji|zoonotik|genom/i },
  { id: "env", label: "Çevre & İklim", icon: "🌿", pattern: /çevre|iklim|ekolo|okyanus|deniz|atmosfer|sulak|biyoçeşit|sürdürülebilir|şehircilik|hidroloji|enerji|oşinografi|jeo|kutup|tarım/i },
  { id: "space", label: "Astrofizik & Uzay", icon: "🔭", pattern: /astro|uzay|kozmo|fizik|kuantum|gezegen|ay|interstellar/i },
  { id: "arch", label: "Arkeoloji & Tarih", icon: "🏛️", pattern: /arkeo|antik|medeniyet|tarih|paleo|epigrafi|roma|mısır/i },
  { id: "ai", label: "Yapay Zeka & Bilişim", icon: "🤖", pattern: /yapay zeka|bilişim|yazılım|robotik|algorit|kripto|siber|otonom|donanım|bilgisayar|ağ|iot|dağıtık|hesaplamalı|yarı iletken|havacılık|malzeme/i },
  { id: "phil", label: "Felsefe & Etik", icon: "⚖️", pattern: /felsefe|etik|mantık|ontolo|epistem|postmodern/i },
  { id: "soc", label: "Sosyoloji & Kültür", icon: "🌍", pattern: /sosyo|antropo|kültür|kent|göç|demografi|çalışma|toplumsal cinsiyet|medya/i },
  { id: "econ", label: "Ekonomi & Finans", icon: "📈", pattern: /ekonomi|finans|iktisat|para|piyasa|makroekonomi|mikroekonomi|tedarik/i },
  { id: "art", label: "Sanat & Dilbilim", icon: "🎨", pattern: /sanat|mimarlık|dilbilim|edebiyat|gösterge|tasarım|ortaçağ/i },
];

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
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("ALL");
  const [showCatalogModal, setShowCatalogModal] = useState(false);

  const passage = PASSAGES[pid] || PASSAGES[0];

  // Filter passages for catalog selector
  const filteredPassages = useMemo(() => {
    return PASSAGES.map((p, idx) => ({ ...p, originalIndex: idx })).filter((p) => {
      // Category filter
      if (selectedCat !== "all") {
        const cat = DOMAIN_CATEGORIES.find((c) => c.id === selectedCat);
        if (cat?.pattern && !cat.pattern.test(p.topic)) {
          return false;
        }
      }
      // Level filter
      if (levelFilter !== "ALL") {
        if (!p.level.toLowerCase().includes(levelFilter.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesTopic = p.topic.toLowerCase().includes(q);
        const matchesGlossary = p.glossary.some(
          (g) => g.word.toLowerCase().includes(q) || g.tr.toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesTopic && !matchesGlossary) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCat, levelFilter, searchQuery]);

  const selectPassage = (index: number) => {
    setPid(index);
    setActiveParagraph(0);
    setRevealed({});
    setShowCatalogModal(false);
  };

  const handlePrev = () => {
    setPid((prev) => (prev > 0 ? prev - 1 : PASSAGES.length - 1));
    setActiveParagraph(0);
    setRevealed({});
  };

  const handleNext = () => {
    setPid((prev) => (prev < PASSAGES.length - 1 ? prev + 1 : 0));
    setActiveParagraph(0);
    setRevealed({});
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          🔬 <span className="gradient-text">Reading Lab</span>
        </h1>
        <p className="text-white/60">
          Kanka, okumadan net olmaz! 200 akademik parça · çoklu aksan ses dinleme · anında sözlük · kavrama testi
        </p>
        <div className="flex justify-center gap-2 mt-5">
          <button
            onClick={() => setMode("read")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
              mode === "read"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/20"
                : "border border-white/15 text-white/60 hover:text-white"
            }`}
          >
            📖 Okuma Modu ({PASSAGES.length} Metin)
          </button>
          <button
            onClick={() => setMode("quiz")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
              mode === "quiz"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/20"
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
          {/* Quick Navigator Bar */}
          <div className="card-vibrant p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-slate-900/60 backdrop-blur-xl">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all flex items-center gap-1.5"
                title="Önceki Pasaj"
              >
                <span>◀</span> Önceki
              </button>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-xs font-black text-sky-300">
                <span>Pasaj #{pid + 1}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">{PASSAGES.length}</span>
              </div>
              <button
                onClick={handleNext}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all flex items-center gap-1.5"
                title="Sonraki Pasaj"
              >
                Sonraki <span>▶</span>
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setShowCatalogModal(true)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-blue-600/20 hover:from-sky-500/30 hover:to-blue-600/30 border border-sky-400/40 text-xs font-black text-sky-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>📑</span> 200 Metin Kataloğu & Arama
                <span className="px-1.5 py-0.5 rounded bg-sky-400/20 text-[10px] text-sky-300">
                  {filteredPassages.length}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Domain Filter Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
            {DOMAIN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 shrink-0",
                  selectedCat === cat.id
                    ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-sm"
                    : "border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Main Reading View */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            {/* Metin ve Kavrama */}
            <div className="card-vibrant p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{passage.emoji ?? "📄"}</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{passage.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
                    {passage.level}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/20">
                    {passage.topic}
                  </span>
                </div>
              </div>

              {/* Bilimsel/Akademik Metin Doğal Ses Oynatıcısı */}
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
                      "p-4 rounded-2xl transition-all cursor-pointer",
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
                <h3 className="font-black mb-4 flex items-center gap-2 text-white">
                  <span>❓</span> Kavrama Soruları &bull; Reading Comprehension
                </h3>
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
                          className="mt-3 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                        >
                          Cevabı göster
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sözlük Sidebar */}
            <aside className="card-vibrant p-5 h-fit lg:sticky lg:top-20 space-y-4 border border-white/10">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <p className="font-black text-white flex items-center gap-1.5">
                  <span>📖</span> Parça Sözlüğü
                </p>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300">
                  {passage.glossary.length} Kelime
                </span>
              </div>
              <p className="text-xs text-white/40">
                Metinde mavi renkli kelimelere tıklayarak da anlamı balon olarak görebilirsin.
              </p>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
                {passage.glossary.map((g) => (
                  <div
                    key={g.word}
                    className="rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 hover:border-cyan-400/30 transition-colors"
                  >
                    <p className="font-mono text-sm font-bold text-cyan-300">{g.word}</p>
                    <p className="text-xs text-white/70 mt-0.5">{g.tr}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {/* 200 Catalog & Search Modal */}
          {showCatalogModal && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md anim-fade">
              <div className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]">
                {/* Modal Header */}
                <div className="p-6 border-b border-white/10 bg-slate-950/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📑</span>
                    <div>
                      <h3 className="text-xl font-black text-white">
                        Reading Lab Metin Kataloğu (200 Metin)
                      </h3>
                      <p className="text-xs text-white/50">
                        {filteredPassages.length} akademik okuma parçası listeleniyor
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCatalogModal(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Filter Controls inside Modal */}
                <div className="p-4 border-b border-white/10 bg-white/[0.02] flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Başlık, konu veya kelime ara..."
                      className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <select
                    value={levelFilter}
                    onChange={(e) => setLevelFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-800 border border-white/10 text-white text-xs font-bold"
                  >
                    <option value="ALL">Tüm Seviyeler</option>
                    <option value="B2">B2 Düzeyi</option>
                    <option value="C1">C1 İleri Düzey</option>
                  </select>
                </div>

                {/* Category Pills inside Modal */}
                <div className="px-4 py-2 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-thin bg-black/20">
                  {DOMAIN_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.id)}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1 shrink-0",
                        selectedCat === cat.id
                          ? "bg-sky-500/20 border-sky-400 text-sky-200"
                          : "border-white/10 text-white/50 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Catalog Grid */}
                <div className="p-6 overflow-y-auto space-y-2 max-h-[60vh]">
                  {filteredPassages.length === 0 ? (
                    <div className="text-center py-12 text-white/50">
                      <p className="text-3xl mb-2">🔍</p>
                      <p className="text-sm font-bold">Aradığınız kriterlere uygun metin bulunamadı.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCat("all");
                          setLevelFilter("ALL");
                        }}
                        className="mt-3 px-4 py-1.5 rounded-lg bg-white/10 text-xs font-bold text-white hover:bg-white/20"
                      >
                        Filtreleri Temizle
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredPassages.map((p) => {
                        const isCurrent = pid === p.originalIndex;
                        return (
                          <div
                            key={p.id}
                            onClick={() => selectPassage(p.originalIndex)}
                            className={cn(
                              "p-4 rounded-2xl border transition-all cursor-pointer text-left flex items-start gap-3",
                              isCurrent
                                ? "bg-sky-500/20 border-sky-400 shadow-md shadow-sky-500/10"
                                : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                            )}
                          >
                            <span className="text-2xl mt-0.5">{p.emoji ?? "📄"}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/70">
                                  #{p.originalIndex + 1}
                                </span>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-300">
                                  {p.level}
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-white truncate">{p.title}</h4>
                              <p className="text-xs text-white/50 mt-0.5 truncate">{p.topic}</p>
                              <div className="flex items-center gap-3 mt-2 text-[11px] text-white/40">
                                <span>📖 {p.paragraphs.length} Paragraf</span>
                                <span>&bull;</span>
                                <span>❓ {p.questions.length} Soru</span>
                                <span>&bull;</span>
                                <span>📚 {p.glossary.length} Kelime</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
