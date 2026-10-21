"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ChatPanel = dynamic(() => import("./ChatPanel"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-white/60" role="status">
      Sohbet hazırlanıyor…
    </div>
  ),
});

/** Tüm sayfalarda gezen yüzen YDS Kanka AI. */
export default function AiWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/60 bg-slate-950 shadow-xl shadow-cyan-950/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 motion-reduce:transition-none"
        aria-label="YDS Kanka AI"
        title="YDS Kanka AI"
      >
        <Image src="/icons/icon-192.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
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
