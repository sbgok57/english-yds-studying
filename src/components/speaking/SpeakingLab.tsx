"use client";

import React, { useState, useEffect, useRef } from "react";
import { SpeakingTopic, SpeakingSentence, SPEAKING_TOPICS } from "@/lib/speaking/topics";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  textEn: string;
  sentences?: SpeakingSentence[];
  tipsTr?: string;
  timestamp: string;
}

export function SpeakingLab() {
  const [activeTopic, setActiveTopic] = useState<SpeakingTopic>(SPEAKING_TOPICS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedSentence, setSelectedSentence] = useState<SpeakingSentence | null>(null);
  const [audioPlayingId, setAudioPlayingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize topic conversation
  useEffect(() => {
    setMessages([
      {
        id: "msg-initial",
        role: "assistant",
        textEn: activeTopic.initialMessage.en,
        sentences: activeTopic.initialMessage.sentences,
        tipsTr: activeTopic.initialMessage.tipsTr,
        timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setSelectedSentence(null);
  }, [activeTopic]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          let transcript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setInputMessage(transcript);
        };

        recognition.onerror = (event: any) => {
          console.warn("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          console.warn("Recognition abort cleanup:", e);
        }
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Tarayıcınız ses tanıma özelliğini desteklemiyor. Klavye ile yazarak pratik yapabilirsiniz.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn("Start recognition error:", e);
      }
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      textEn: text,
      timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicId: activeTopic.id,
          userMessage: text,
        }),
      });

      if (res.ok) {
        const json = await res.json();
        if (json.ok && json.data) {
          const aiMsg: ChatMessage = {
            id: `ai-${Date.now()}`,
            role: "assistant",
            textEn: json.data.en,
            sentences: json.data.sentences,
            tipsTr: json.data.tipsTr,
            timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
          };
          setMessages((prev) => [...prev, aiMsg]);
        }
      }
    } catch (e) {
      console.error("Speaking request failed:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const playSentenceAudio = (sentenceEn: string, id: string) => {
    setAudioPlayingId(id);

    // Prefer high-quality TTS audio API with fallback to Web Speech
    const audio = new Audio(`/api/tts?text=${encodeURIComponent(sentenceEn)}&accent=en-US`);
    audio.play().catch(() => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(sentenceEn);
        utter.lang = "en-US";
        utter.onend = () => setAudioPlayingId(null);
        utter.onerror = () => setAudioPlayingId(null);
        window.speechSynthesis.speak(utter);
      } else {
        setAudioPlayingId(null);
      }
    });

    audio.onended = () => setAudioPlayingId(null);
    audio.onerror = () => setAudioPlayingId(null);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[550px] max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Top Bar: Topic Selection & Level Badge */}
      <div className="p-4 bg-slate-950/80 backdrop-blur border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{activeTopic.emoji}</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-sm sm:text-base text-white">{activeTopic.titleTr}</h2>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/40">
                {activeTopic.level}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">{activeTopic.titleEn}</p>
          </div>
        </div>

        {/* Topic Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
          {SPEAKING_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTopic.id === topic.id
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300"
              }`}
            >
              <span>{topic.emoji}</span> {topic.titleTr.split("&")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Conversation Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-gradient-to-b from-slate-900/60 to-slate-950/90">
        {/* Helper Hint */}
        <div className="text-center">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[11px] text-cyan-300">
            💡 İpucu: İngilizce cümlelerin üzerine tıklayarak Türkçe çevirisini ve telaffuzunu anında gör!
          </span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-1.5`}
            >
              <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
                <span>{isUser ? "Sen (Öğrenci)" : "🤖 YDS AI Speaking Coach"}</span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[90%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 shadow-lg ${
                  isUser
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none"
                    : "bg-slate-800/90 border border-slate-700/80 text-slate-100 rounded-tl-none"
                }`}
              >
                {/* Sentence by Sentence Clickable Rendering */}
                {msg.sentences && msg.sentences.length > 0 ? (
                  <div className="space-y-2">
                    <div className="leading-relaxed text-sm sm:text-base">
                      {msg.sentences.map((sentence, sIdx) => {
                        const isSelected = selectedSentence?.en === sentence.en;
                        return (
                          <span
                            key={sIdx}
                            onClick={() => setSelectedSentence(sentence)}
                            className={`cursor-pointer transition-all rounded px-1 py-0.5 inline-block mr-1 hover:bg-cyan-500/30 hover:text-cyan-200 border-b border-dashed border-cyan-400/40 ${
                              isSelected ? "bg-cyan-500/30 text-cyan-200 ring-1 ring-cyan-400" : ""
                            }`}
                            title="Türkçe çevirisi ve telaffuzu için tıkla"
                          >
                            {sentence.en}{" "}
                          </span>
                        );
                      })}
                    </div>

                    {/* Master Audio Button for whole message */}
                    <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                      <button
                        onClick={() => playSentenceAudio(msg.textEn, msg.id)}
                        disabled={audioPlayingId === msg.id}
                        className="text-cyan-300 hover:text-cyan-200 flex items-center gap-1 font-semibold transition-colors"
                      >
                        <span>{audioPlayingId === msg.id ? "🔊 Dinleniyor..." : "🔊 Tümünü Dinle"}</span>
                      </button>
                      <span className="text-[10px] text-slate-400">👆 Cümleye tıkla = Türkçe Çeviri</span>
                    </div>

                    {/* Grammar or Vocabulary Tip */}
                    {msg.tipsTr && (
                      <div className="mt-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                        <span className="text-base shrink-0">💡</span>
                        <span>{msg.tipsTr}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm sm:text-base leading-relaxed">{msg.textEn}</p>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-2">
            <span className="animate-spin text-base">⏳</span>
            <span>YDS AI koç yanıtını hazırlıyor...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Selected Sentence Translation Popover / Banner */}
      {selectedSentence && (
        <div className="p-3.5 bg-slate-950 border-t border-cyan-500/40 animate-in slide-in-from-bottom duration-200 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Cümle Analizi
                </span>
                <button
                  onClick={() => playSentenceAudio(selectedSentence.en, "selected")}
                  className="px-2 py-0.5 bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/40 rounded-lg text-xs flex items-center gap-1 transition-colors"
                >
                  <span>🔊</span> Dinle
                </button>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                "{selectedSentence.en}"
              </div>
              <div className="text-xs sm:text-sm text-emerald-300 font-semibold">
                🇹🇷 {selectedSentence.tr}
              </div>
            </div>
            <button
              onClick={() => setSelectedSentence(null)}
              className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Starter Prompts Carousel */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-[11px] text-slate-400 whitespace-nowrap font-semibold">Öneri Yanıtlar:</span>
        {activeTopic.starterPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 whitespace-nowrap border border-slate-700 transition-all text-xs shrink-0"
          >
            "{prompt}"
          </button>
        ))}
      </div>

      {/* Bottom Input Area: Typing + Microphone */}
      <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
        <div className="flex items-center gap-2">
          {/* Microphone Voice Button */}
          <button
            onClick={toggleListening}
            title={isListening ? "Dinlemeyi Durdur" : "Mikrofon ile İngilizce Konuş"}
            className={`relative p-3.5 rounded-2xl flex items-center justify-center transition-all ${
              isListening
                ? "bg-rose-600 text-white animate-pulse ring-4 ring-rose-500/40 shadow-lg shadow-rose-600/50"
                : "bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 hover:border-cyan-500/40"
            }`}
          >
            <span className="text-xl">{isListening ? "🛑" : "🎙️"}</span>
            {isListening && (
              <span className="absolute -top-7 whitespace-nowrap text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded font-bold">
                Dinleniyor...
              </span>
            )}
          </button>

          {/* Typing Input */}
          <input
            type="text"
            placeholder={
              isListening
                ? "İngilizce konuşmanız dinleniyor..."
                : "İngilizce yanıtını yaz veya mikrofona tıkla..."
            }
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />

          {/* Send Button */}
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            className="px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-2xl shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>Gönder</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  );
}
