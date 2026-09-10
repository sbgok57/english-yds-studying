import React, { useState } from 'react';
import { GRAMMAR_TOPICS } from '../../data/grammarData';
import { GrammarTopic } from '../../types/grammar';
import { GraduationCap, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface GrammarTopicListProps {
  onSelectTopic: (topic: GrammarTopic) => void;
}

export const GrammarTopicList: React.FC<GrammarTopicListProps> = ({ onSelectTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'FOUNDATION', 'CORE', 'INTERMEDIATE', 'YDS'];

  const filtered = selectedCategory === 'ALL'
    ? GRAMMAR_TOPICS
    : GRAMMAR_TOPICS.filter(t => t.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-bold text-emerald-400 tracking-widest flex items-center gap-1.5 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>AKADEMİK DİLBİLGİSİ SİSTEMİ</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">30 Gramer Konusu & YDS Analizi</h1>
          <p className="text-sm text-slate-400 mt-1">
            Her konuda 19 yapısal bölüm, görsel zaman çizelgesi, yaygın hatalar ve 20+ özgün test sorusu.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === c
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((topic) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="group bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {topic.category} • #{topic.order}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <span>{topic.activities.length} Soru</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {topic.title}
              </h3>
              <h4 className="text-xs font-semibold text-emerald-400/90 mb-2">
                {topic.titleTr}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {topic.intro.overview}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>Ders anlatımını ve testleri incele</span>
              <ChevronRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
