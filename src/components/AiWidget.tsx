"use client";

import { useState } from "react";
import ChatPanel from "./ChatPanel";

/** Tüm sayfalarda gezen yüzen YDS Kanka AI. */
export default function AiWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-2xl shadow-xl shadow-purple-500/40 hover:scale-110 transition-transform anim-pulse-glow"
        aria-label="YDS Kanka AI"
        title="YDS Kanka AI"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-[92vw] max-w-sm h-[70vh] rounded-3xl border border-white/15 bg-slate-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden anim-pop flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-pink-500/15 to-cyan-500/15">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <div>
                <p className="font-black text-sm leading-tight">YDS Kanka AI</p>
                <p className="text-[10px] text-white/50">Yerleşik asistan · kanka modu</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 min-h-0">
            <ChatPanel compact />
          </div>
        </div>
      )}
    </>
  );
}
