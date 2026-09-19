"use client";

import { useEffect, useRef, useState } from "react";
import { answerAi } from "@/lib/ai";
import RichText from "@/components/RichText";

interface Msg {
  role: "user" | "ai";
  text: string;
}

const SUGGESTIONS = [
  "Seviyemi nasıl ölçerim?",
  "Bugün ne çalışmalıyım?",
  "Nereden başlamalıyım?",
  "Yanlışlarımı tekrar ettir",
  "Tenses nedir kanka?",
  "Net nasıl hesaplanır?",
  "Bana 30 günlük plan ver",
];

export default function ChatPanel({ compact = false }: { compact?: boolean }) {
  const [msgs, setMsgs] = useState<Msg[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(window.localStorage.getItem("yds-master-chat") || "[]");
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem("yds-master-chat", JSON.stringify(msgs));
    } catch {
      /* boş */
    }
  }, [msgs]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = answerAi(t);
      setMsgs((m) => [...m, { role: "ai", text: reply }]);
      setTyping(false);
    }, 500);
  };

  const clear = () => {
    setMsgs([]);
    try {
      window.localStorage.removeItem("yds-master-chat");
    } catch {
      /* boş */
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* mesajlar */}
      <div className={`flex-1 overflow-y-auto space-y-3 p-3 ${compact ? "max-h-[52vh]" : "min-h-[50vh]"}`}>
        {msgs.length === 0 && (
          <div className="space-y-2">
            <p className="text-center text-sm text-white/50 mb-3">
              Kanka, ne merak ediyorsun? 🤔
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                m.role === "user"
                  ? "bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white"
                  : "bg-white/[0.06] border border-white/10 text-white/85"
              }`}
            >
              {m.role === "user" ? m.text : <RichText text={m.text} />}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl px-4 py-2.5 bg-white/[0.06] border border-white/10 text-white/60 text-sm">
              YDS Kanka düşünüyor
              <span className="inline-flex gap-0.5 ml-1">
                <span className="anim-dot">.</span>
                <span className="anim-dot" style={{ animationDelay: "0.2s" }}>.</span>
                <span className="anim-dot" style={{ animationDelay: "0.4s" }}>.</span>
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* giriş */}
      <div className="border-t border-white/10 p-3 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Kanka, sorunu yaz..."
          className="flex-1 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-sm focus:outline-none focus:border-cyan-400"
        />
        <button
          onClick={() => send(input)}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-black hover:scale-105 transition-transform"
          aria-label="Gönder"
        >
          ➤
        </button>
        {msgs.length > 0 && (
          <button
            onClick={clear}
            className="text-xs text-white/40 hover:text-white transition-colors"
            title="Sohbeti temizle"
          >
            🗑️
          </button>
        )}
      </div>
    </div>
  );
}
