"use client";

import React from "react";
import { NewsArticle } from "@/lib/news/types";

interface NewspaperClippingCardProps {
  article: NewsArticle;
  onRead: (article: NewsArticle) => void;
}

export function NewspaperClippingCard({ article, onRead }: NewspaperClippingCardProps) {
  const { newspaperClipping: clip } = article;

  return (
    <article
      onClick={() => onRead(article)}
      className="group relative flex flex-col justify-between bg-gradient-to-b from-amber-50/[0.04] to-slate-900/90 border border-slate-700/70 hover:border-cyan-400/60 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Newspaper Top Header / Masthead */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 text-[10px] sm:text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-300">
            <span>{article.categoryEmoji}</span>
            <span>{clip.paperName}</span>
          </div>
          <span className="text-cyan-300 font-semibold">{article.level} CEFR</span>
        </div>

        {/* Edition & Date Line */}
        <div className="flex items-center justify-between py-1.5 text-[9px] sm:text-[10px] text-slate-500 font-serif border-b border-dashed border-slate-800">
          <span>{clip.edition}</span>
          <span>{clip.dateString}</span>
        </div>

        {/* Headline */}
        <div className="mt-3.5 space-y-1.5">
          <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
            {article.titleEn}
          </h3>
          <p className="text-xs text-amber-300/80 font-medium line-clamp-1 italic">
            🇹🇷 {article.titleTr}
          </p>
        </div>

        {/* Lead Excerpt */}
        <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
          {article.summaryEn}
        </p>

        {/* Key Vocabulary Pills Preview */}
        {article.keyVocabulary.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1.5 flex items-center justify-between">
              <span>Hedef Akademik Kelimeler</span>
              <span className="text-cyan-400 font-mono">+{article.keyVocabulary.length}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {article.keyVocabulary.slice(0, 3).map((v, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700"
                >
                  <strong className="text-cyan-300">{v.word}</strong>: {v.meaningTr}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
          <span>⏱️</span> {article.readTimeMin} dk okuma &bull; 🔊 Sesli
        </span>

        <button
          type="button"
          className="px-3 py-1.5 rounded-xl bg-cyan-600/30 group-hover:bg-cyan-600 text-cyan-200 group-hover:text-white font-bold text-xs transition-all flex items-center gap-1 shadow-sm"
        >
          <span>Oku & Dinle</span>
          <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
        </button>
      </div>
    </article>
  );
}
