"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PenTool,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ChevronRight,
  Lightbulb,
  FileText,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WritingTip {
  title: string;
  category: "YDS" | "YDT" | "YÖKDİL" | "Genel";
  formula: string;
  description: string;
  goodExample: string;
  badExample: string;
  explanation: string;
}

const WRITING_TIPS: WritingTip[] = [
  {
    title: "Karmaşık Cümlelerde Zıtlık & Neden Dengesi",
    category: "YDS",
    formula: "Although + S + V + O, S + V + O (Tam Cümle Bağlantısı)",
    description: "YDS cümle tamamlama ve çevirilerinde zıtlık bağlacından sonra gelen yapı ana cümlenin tonunu belirler.",
    goodExample: "Although renewable energy investments have accelerated drastically, fossil fuels still dominate the global market.",
    badExample: "Although renewable energy investments accelerated, but fossil fuels still dominate.",
    explanation: "'Although' olan cümlede 'but' kullanılmaz; çift bağlaç hatası (double conjunction trap) YDS'de en sık elenen tuzaktır.",
  },
  {
    title: "YDT İçin Doğal Cümle Dizilimi (S + V + O + MPT)",
    category: "YDT",
    formula: "Özne (Subject) + Yüklem (Verb) + Nesne (Object) + Manner + Place + Time",
    description: "YKS-Dil (YDT) çeviri ve kompozisyon sorularında zarfların dizilimi belirleyicidir.",
    goodExample: "The exchange students presented their research fluently at the conference yesterday.",
    badExample: "The exchange students presented yesterday at the conference fluently their research.",
    explanation: "İngilizcede nesne fiilden hemen sonra gelir; araya zaman veya yer zarfı sokulamaz.",
  },
  {
    title: "YÖKDİL Sağlık & Fen İçin Pasif / Akademik İfade Kalıpları",
    category: "YÖKDİL",
    formula: "It is widely hypothesized / demonstrated that + Clause",
    description: "Bilimsel makale ve YÖKDİL sağlık/fen paragraflarında kişisel 'I/We think' yerine pasif yapılar kullanılır.",
    goodExample: "It has been conclusively demonstrated that regular aerobic exercise significantly mitigates cardiovascular disease risk.",
    badExample: "Doctors know that regular exercise is good for hearts and prevents disease.",
    explanation: "Akademik dilde nesnel kanıt vurgulanır; 'conclusively demonstrated', 'significantly mitigates' gibi C1 seviye fiil öbekleri tercih edilir.",
  },
  {
    title: "Devrik Cümle ile Vurgu (Inversion)",
    category: "YDS",
    formula: "Not only + Yardımcı Fiil + Özne + Fiil..., but also...",
    description: "Cümle başında olumsuz veya kısıtlayıcı bir zarf varsa yardımcı fiil öznenin önüne geçer.",
    goodExample: "Not only did the researchers discover a novel antibiotic compound, but they also synthesized it in the laboratory.",
    badExample: "Not only the researchers discovered a novel antibiotic, but also synthesized it.",
    explanation: "'Not only' cümle başında ise soru cümlesi gibi devrik yapılır (did the researchers discover).",
  },
  {
    title: "Akademik Geçiş ve Neden-Sonuç İfadeleri",
    category: "Genel",
    formula: "Consequently / Furthermore / In contrast + Virgul + Cümle",
    description: "Paragraf akışında cümleleri birbirine bağlayan geçiş kelimeleri noktalı virgül veya noktadan sonra gelir.",
    goodExample: "The clinical trial yielded promising results; consequently, regulatory approval was expedited.",
    badExample: "The clinical trial yielded promising results consequently regulatory approval was expedited.",
    explanation: "Geçiş zarfları iki bağımsız cümleyi tek başına bağlayamaz; noktalı virgül (;) veya nokta (.) gerektirir.",
  },
];

const PARAPHRASE_EXERCISES = [
  {
    id: 1,
    original: "Due to unprecedented climatic shifts, many marine species are forced to migrate towards polar waters.",
    correctRewrite: "Unprecedented climate change is compelling numerous sea creatures to relocate to polar regions.",
    options: [
      "Unprecedented climate change is compelling numerous sea creatures to relocate to polar regions.",
      "Because marine species migrated to the poles, the global climate began to shift unprecedentedly.",
      "Only a few marine species are able to endure polar waters despite shifting climate patterns.",
    ],
    hint: "'Due to' ➔ Neden-sonuç; 'are forced to migrate' ➔ 'is compelling ... to relocate'",
  },
  {
    id: 2,
    original: "The government would not have faced public outrage had it been transparent about the fiscal deficit.",
    correctRewrite: "If the government had been honest about the budget deficit, citizens would not have reacted with fury.",
    options: [
      "If the government had been honest about the budget deficit, citizens would not have reacted with fury.",
      "Even though the government concealed the fiscal deficit, public outrage was completely avoided.",
      "The public demanded transparency because the government successfully eliminated the financial deficit.",
    ],
    hint: "Had it been... ➔ Type 3 Gizli If (Inversion Conditional); 'public outrage' ➔ 'citizens reacted with fury'",
  },
];

export default function WritingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [exerciseState, setExerciseState] = useState<Record<number, { selected: string; isCorrect?: boolean }>>({});

  const filteredTips = WRITING_TIPS.filter((t) =>
    selectedCategory === "Tümü" ? true : t.category === selectedCategory || t.category === "Genel"
  );

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSelectExercise = (exerciseId: number, option: string, correct: string) => {
    setExerciseState((prev) => ({
      ...prev,
      [exerciseId]: {
        selected: option,
        isCorrect: option === correct,
      },
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-400/40 shadow-2xl relative overflow-hidden space-y-3">
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-xs font-black text-indigo-300">
          <PenTool className="w-4 h-4 text-pink-400" />
          <span>YDS · YDT · YÖKDİL • Akademik Yazma & Cümle Kurma Laboratuvarı</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
          Akademik Writing, Cümle İskeleti & Paraphrase Rehberi
        </h1>

        <p className="text-xs md:text-sm text-white/70 max-w-3xl leading-relaxed">
          Sınavlarda cümle tamamlama, çeviri ve anlamca en yakın cümle (restatement) sorularının temelinde güçlü bir cümle kurma hakimiyeti yatar. Formülleri inceleyin, sık yapılan tuzakları görün ve interaktif alıştırmalarla bilginizi pekiştirin.
        </p>

        {/* Hızlı Kategori Seçici */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["Tümü", "YDS", "YDT", "YÖKDİL"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-black transition-all border",
                selectedCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white border-pink-400 shadow-md scale-105"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
              )}
            >
              {cat === "Tümü" ? "🌟 Tüm Sınav Formülleri" : `${cat} Odaklı`}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Bölüm: Akademik Cümle Formülleri ve Tuzaklar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>📐</span> Altın Cümle Formülleri & Çeldirici İpuçları
          </h2>
          <span className="text-xs text-white/50 font-mono">{filteredTips.length} Formül Gösteriliyor</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTips.map((tip, idx) => (
            <div
              key={idx}
              className="card-vibrant p-5 sm:p-6 space-y-4 border border-white/10 hover:border-indigo-400/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {tip.category}
                  </span>
                  <button
                    onClick={() => copyToClipboard(tip.goodExample, idx)}
                    className="text-white/40 hover:text-white transition-colors p-1"
                    title="Örnek cümleyi kopyala"
                  >
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h3 className="font-black text-base text-white">{tip.title}</h3>
                <p className="text-xs text-cyan-300 font-mono bg-cyan-950/40 p-2 rounded-xl border border-cyan-800/30">
                  {tip.formula}
                </p>
                <p className="text-xs text-white/70 leading-relaxed">{tip.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                {/* Doğru Örnek */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                  <span className="font-black text-emerald-300 flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Doğru & Akademik:
                  </span>
                  <p className="text-white/90 font-mono italic">&ldquo;{tip.goodExample}&rdquo;</p>
                </div>

                {/* Yanlış / Tuzak Örnek */}
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                  <span className="font-black text-rose-300 flex items-center gap-1 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5" /> Sık Yapılan Hata:
                  </span>
                  <p className="text-white/70 font-mono line-through">&ldquo;{tip.badExample}&rdquo;</p>
                </div>

                <p className="text-[11px] text-white/50 pt-1">
                  💡 <strong>Kritik Kural:</strong> {tip.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Bölüm: İnteraktif Paraphrase & Yeniden Yazma Alıştırması */}
      <div className="card-vibrant p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>İnteraktif Sınav Pratiği</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            Anlamca En Yakın Cümleyi Seç (Restatement / Paraphrase)
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Aşağıdaki orijinal cümleyi okuyun ve anlamını gramer ve mantık yönünden eksiksiz karşılayan en doğru akademik yazımı işaretleyin.
          </p>
        </div>

        <div className="space-y-6">
          {PARAPHRASE_EXERCISES.map((ex) => {
            const current = exerciseState[ex.id];
            return (
              <div key={ex.id} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <div className="p-3.5 rounded-xl bg-indigo-500/15 border border-indigo-400/30">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 block mb-1 font-bold">
                    Orijinal Cümle #{ex.id}:
                  </span>
                  <p className="text-sm font-mono text-white font-bold">&ldquo;{ex.original}&rdquo;</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-black text-white/70">En Doğru Alternatif Hangisidir?</span>
                  {ex.options.map((opt, oIdx) => {
                    const isSelected = current?.selected === opt;
                    const isCorrect = opt === ex.correctRewrite;
                    let btnStyle = "bg-white/5 border-white/10 text-white/80 hover:bg-white/10";
                    if (current) {
                      if (isSelected) {
                        btnStyle = isCorrect
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                          : "bg-rose-500/20 border-rose-400 text-rose-200";
                      } else if (isCorrect) {
                        btnStyle = "bg-emerald-500/10 border-emerald-500/40 text-emerald-300";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectExercise(ex.id, opt, ex.correctRewrite)}
                        className={cn(
                          "w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5",
                          btnStyle
                        )}
                      >
                        <span className="font-mono font-bold text-xs mt-0.5">
                          {String.fromCharCode(65 + oIdx)})
                        </span>
                        <span className="flex-1 leading-relaxed">{opt}</span>
                        {current && isSelected && (
                          <span className="font-bold text-xs">
                            {isCorrect ? "✓ Doğru" : "✗ Yanlış"}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {current && (
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 space-y-1">
                    <p className="font-bold flex items-center gap-1 text-cyan-300">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-300" /> Çözüm İpucu:
                    </p>
                    <p>{ex.hint}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bölüm: Diğer Becerilerle Hızlı Bağlantı */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/reading"
          className="card-vibrant p-5 border border-white/10 hover:border-cyan-400/40 transition-all group block space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">🔬</span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-black text-white text-base">Reading Laboratuvarı</h4>
          <p className="text-xs text-white/60">Yazdığınız cümle yapılarını gerçek akademik makalelerde test edin.</p>
        </Link>

        <Link
          href="/tactics"
          className="card-vibrant p-5 border border-white/10 hover:border-pink-400/40 transition-all group block space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">🎯</span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-black text-white text-base">Soru Taktikleri</h4>
          <p className="text-xs text-white/60">Çeviri ve cümle tamamlama şıklarını 5 saniyede eleme yöntemleri.</p>
        </Link>

        <Link
          href="/exams"
          className="card-vibrant p-5 border border-white/10 hover:border-amber-400/40 transition-all group block space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">⏱️</span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-black text-white text-base">Sınav Denemeleri</h4>
          <p className="text-xs text-white/60">YDS, YDT ve YÖKDİL 80 soruluk gerçek deneme sınavlarına katılın.</p>
        </Link>
      </div>
    </div>
  );
}
