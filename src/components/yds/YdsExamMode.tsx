import React, { useState } from 'react';
import { speechService } from '../../services/speech';
import { StorageService } from '../../services/storage';
import confetti from 'canvas-confetti';
import { 
  FileCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Award,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';

interface YdsQuestion {
  id: string;
  category: 'Cümle Tamamlama' | 'Cloze Test' | 'Bağlaç & Mantık' | 'Kelime & Çeviri' | 'YDS Paragraf Analizi';
  difficulty: 'B1+' | 'B2' | 'YDS Foundation' | 'YDS Advanced';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: {
    correctAnalysisEn: string;
    whyOthersWrongEn: string;
    keyVocabulary: string[];
    grammarPoint: string;
    turkishExplanation: string;
  };
}

const YDS_QUESTIONS: YdsQuestion[] = [
  {
    id: 'yds-q-1',
    category: 'Bağlaç & Mantık',
    difficulty: 'YDS Advanced',
    question: "_____ the unprecedented disruptions in the international supply chain, the corporate conglomerate reported a 14% increase in net operational revenue.",
    options: ["Notwithstanding", "Inasmuch as", "On account of", "Provided that"],
    correctAnswer: "Notwithstanding",
    explanation: {
      correctAnalysisEn: "'Notwithstanding' is followed by a noun phrase ('the unprecedented disruptions...') and establishes a contrast meaning 'despite'.",
      whyOthersWrongEn: "'Inasmuch as' introduces a clause expressing reason. 'On account of' signals cause (which would contradict the revenue increase). 'Provided that' introduces a condition.",
      keyVocabulary: ["unprecedented (eşi görülmemiş)", "conglomerate (şirketler topluluğu)", "revenue (gelir / hasılat)"],
      grammarPoint: "Prepositional Concessive Conjunctions (Zıtlık Bildiren Edatsal Bağlaçlar)",
      turkishExplanation: "Cümlede tedarik zincirindeki aksamalara RAĞMEN kârın arttığı belirtilmektedir. İsim öbeği ile 'rağmen' anlamını 'Notwithstanding' verir."
    }
  },
  {
    id: 'yds-q-2',
    category: 'Cümle Tamamlama',
    difficulty: 'YDS Foundation',
    question: "Although initial pilot trials of the AI recruitment software raised ethical concerns among committee members, _____.",
    options: [
      "subsequent algorithmic refinements substantially reduced hiring bias.",
      "because the software had already been discarded by competitors.",
      "so that human recruiters could be replaced entirely.",
      "unless transparent audit protocols were submitted on time."
    ],
    correctAnswer: "subsequent algorithmic refinements substantially reduced hiring bias.",
    explanation: {
      correctAnalysisEn: "The subordinate clause with 'Although' presents a negative initial impression (ethical concerns); the independent main clause must present an opposing positive outcome.",
      whyOthersWrongEn: "Option B uses 'because' creating a dependent fragment. Option C uses 'so that' which indicates purpose rather than consequence. Option D uses 'unless' conditional.",
      keyVocabulary: ["refinements (iyileştirmeler / düzeltmeler)", "bias (önyargı / taraflılık)", "recruitment (işe alım)"],
      grammarPoint: "Adverbial Clauses of Concession & Sentence Balance",
      turkishExplanation: "'Although' (her ne kadar ... olsa da) ile başlayan yan cümle endişelerden bahsettiği için, ana cümlede bu endişeleri gideren olumlu bir gelişme ('algoritmik iyileştirmelerin önyargıyı azaltması') yer almalıdır."
    }
  },
  {
    id: 'yds-q-3',
    category: 'Kelime & Çeviri',
    difficulty: 'YDS Advanced',
    question: "In fast-evolving industries, organizations that fail to _____ their operational strategies to emerging digital paradigms face rapid obsolescence.",
    options: ["adapt", "diminish", "postpone", "contradict"],
    correctAnswer: "adapt",
    explanation: {
      correctAnalysisEn: "'Adapt ... to' is a high-frequency academic collocation meaning to modify something to suit a new purpose or environment.",
      whyOthersWrongEn: "'Diminish' means to decrease. 'Postpone' means to delay. 'Contradict' means to assert the opposite.",
      keyVocabulary: ["obsolescence (eski ve kullanışsız hale gelme)", "paradigms (modeller / paradigmalar)", "emerging (yükselen / yeni gelişen)"],
      grammarPoint: "Dependent Prepositions & Collocations (adapt to)",
      turkishExplanation: "'Adapt ... to' kalıbı, stratejileri yeni dijital paradigmaya 'uyarlamak / adapte etmek' anlamında cümlenin mantığını tek başına eksiksiz tamamlar."
    }
  },
  {
    id: 'yds-q-4',
    category: 'Cloze Test',
    difficulty: 'YDS Advanced',
    question: "Had the executive board taken timely preventive measures, the entire cyber breach _____ altogether.",
    options: [
      "could have been prevented",
      "would prevent",
      "is prevented",
      "had been preventing"
    ],
    correctAnswer: "could have been prevented",
    explanation: {
      correctAnalysisEn: "This is an inverted Third Conditional ('Had the board taken' = 'If the board had taken'). The result clause requires modal + have + been + V3 in passive.",
      whyOthersWrongEn: "'Would prevent' is Type 2. 'Is prevented' is Present. 'Had been preventing' is active past perfect.",
      keyVocabulary: ["breach (ihlal / güvenlik açığı)", "preventive (önleyici)", "consensus (uzlaşı)"],
      grammarPoint: "Inversion in Third Conditionals & Passive Voice",
      turkishExplanation: "Cümle başında 'Had + V3' ile kurulan devrik yapı (Inverted 3rd Conditional), geçmişte gerçekleşmemiş bir durumu varsayar. Sonuç cümlesi 'could have been prevented' (önlenebilirdi) şeklinde olmalıdır."
    }
  },
  {
    id: 'yds-q-5',
    category: 'YDS Paragraf Analizi',
    difficulty: 'YDS Advanced',
    question: "Rarely _____ such widespread unanimity across global regulatory bodies regarding artificial intelligence safety guidelines.",
    options: [
      "has there been",
      "there has been",
      "there was being",
      "have they been"
    ],
    correctAnswer: "has there been",
    explanation: {
      correctAnalysisEn: "Negative/restrictive adverbial 'Rarely' placed at the beginning of a clause strictly requires subject-auxiliary inversion ('has there been').",
      whyOthersWrongEn: "'There has been' has standard non-inverted word order, which is ungrammatical following clause-initial 'Rarely'.",
      keyVocabulary: ["unanimity (oy birliği / tam mutabakat)", "regulatory bodies (düzenleyici denetim kurumları)"],
      grammarPoint: "Negative Inversion with Restrictive Adverbials",
      turkishExplanation: "Cümle başında 'Rarely, Seldom, Never' gibi kısıtlayıcı olumsuz zarflar yer aldığında cümle devrikleşir ve yardımcı fiil öznenin önüne gelir: 'Rarely has there been'."
    }
  }
];

interface YdsExamModeProps {
  onXpGained: (amount: number) => void;
}

export const YdsExamMode: React.FC<YdsExamModeProps> = ({ onXpGained }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQ = YDS_QUESTIONS[currentIdx];

  const handleSelect = (opt: string) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(opt);

    if (opt === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      speechService.speakCorrectAnswer();
      onXpGained(30);
    } else {
      speechService.speakIncorrectAnswer("Analyze why the other choices fail.");
      StorageService.recordError({
        itemType: 'yds_question',
        title: `YDS ${currentQ.category} (#${currentQ.id})`,
        userAnswer: opt,
        correctAnswer: currentQ.correctAnswer,
        explanationEn: currentQ.explanation.correctAnalysisEn,
        explanationTr: currentQ.explanation.turkishExplanation,
        category: currentQ.category
      });
    }
  };

  const handleNext = () => {
    if (currentIdx < YDS_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
    } else {
      setCurrentIdx(0);
      setSelectedOpt(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-1">
            <FileCheck className="w-4 h-4" />
            <span>YDS & YDT SINAV STRATEJİ MODU</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Akademik Sınav Sorusu & Derin Analiz
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
            Soru {currentIdx + 1} / {YDS_QUESTIONS.length}
          </span>
          <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400">
            {score} Doğru
          </span>
        </div>
      </div>

      {/* Question Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Meta badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold">
            {currentQ.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
            Seviye: {currentQ.difficulty}
          </span>
        </div>

        {/* Stem */}
        <div className="text-lg sm:text-xl font-bold text-slate-100 mb-8 leading-relaxed font-sans">
          {currentQ.question}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((opt, oi) => {
            let optClass = 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-700';

            if (selectedOpt !== null) {
              if (opt === currentQ.correctAnswer) {
                optClass = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
              } else if (selectedOpt === opt) {
                optClass = 'bg-rose-600/30 border-rose-500 text-rose-200 ring-2 ring-rose-500/30';
              } else {
                optClass = 'bg-slate-800/20 border-slate-800 text-slate-500 opacity-50';
              }
            }

            return (
              <button
                key={oi}
                disabled={selectedOpt !== null}
                onClick={() => handleSelect(opt)}
                className={`w-full p-4 rounded-xl border font-medium text-sm text-left transition-all flex items-center justify-between ${optClass}`}
              >
                <span>{opt}</span>
                {selectedOpt !== null && (
                  <span>
                    {opt === currentQ.correctAnswer ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : selectedOpt === opt ? (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* In-depth Academic Breakdown */}
        {selectedOpt !== null && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-6 animate-fade-in space-y-4">
            <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
              YDS ÇÖZÜM ANALİZİ & DİLBİLGİSİ NOKTASI
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">TÜRKÇE AÇIKLAMA:</div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {currentQ.explanation.turkishExplanation}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">DİĞER SEÇENEKLER NEDEN YANLIŞ?</div>
              <p className="text-xs text-slate-300">
                {currentQ.explanation.whyOthersWrongEn}
              </p>
            </div>

            {/* Key Vocab Chips */}
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1.5">ÖNEMLİ AKADEMİK KELİMELER:</div>
              <div className="flex flex-wrap gap-2">
                {currentQ.explanation.keyVocabulary.map((kv, kvi) => (
                  <span key={kvi} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                    {kv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advance */}
        {selectedOpt !== null && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2"
            >
              <span>{currentIdx < YDS_QUESTIONS.length - 1 ? 'Sonraki Soru' : 'İlk Soruya Dön'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
