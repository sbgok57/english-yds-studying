"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Check, X, AlertTriangle, FileText, Sparkles, Folder } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ParsedCard {
  english: string;
  turkish: string;
  suspicious: boolean;
}

// Bozuk/kodlu karakter dedektörü — "kelimede ne yazıyorsa o" kuralı
function isSuspicious(text: string): boolean {
  if (!text || text.trim().length < 2) return true;
  if (/[\uFFFD\u0000-\u0008\u000E-\u001F]/.test(text)) return true;
  if (/(.)\1{4,}/.test(text)) return true; // aaaaa gibi OCR/kodlama bozulmaları
  const valid = text.match(/[a-zA-ZçÇğĞıİöÖşŞüÜâîû0-9\s\-'.,()/;:!?]/g)?.length ?? 0;
  return valid / text.length < 0.85;
}

function parseQuizletText(raw: string): ParsedCard[] {
  const text = raw.replace(/\r/g, "").trim();
  if (!text) return [];

  let lines = text.split("\n").filter((l) => l.trim());
  if (lines.length === 1 && text.includes(";")) {
    lines = text.split(";").filter((l) => l.trim());
  }

  // Sütun ayracını otomatik tespit et
  const tabCount = lines.filter((l) => l.includes("\t")).length;
  const dashCount = lines.filter((l) => / [-–—] /.test(l)).length;
  const separator: "tab" | "dash" | "comma" =
    tabCount >= lines.length * 0.5 ? "tab" : dashCount >= lines.length * 0.5 ? "dash" : "comma";

  const cards: ParsedCard[] = [];
  for (const line of lines) {
    let parts: string[];
    if (separator === "tab") parts = line.split("\t");
    else if (separator === "dash") parts = line.split(/ [-–—] /);
    else parts = line.split(/,(.+)/);

    if (parts.length < 2) continue;
    const english = parts[0].trim();
    const turkish = parts.slice(1).join(" ").trim();
    if (!english || !turkish) continue;

    cards.push({
      english,
      turkish,
      suspicious: isSuspicious(english) || isSuspicious(turkish),
    });
  }
  return cards;
}

const FOLDER_PRESETS = [
  { id: "phrasal", label: "📁 YDS Phrasal Verbs", type: "phrasal verb" },
  { id: "common", label: "📁 En Sık Kullanılan Kelimeler", type: "genel" },
  { id: "adverbs", label: "📁 En Sık Kullanılan Zarflar", type: "zarf" },
] as const;

export default function QuizletImporter() {
  const [rawText, setRawText] = useState("");
  const [folder, setFolder] = useState<string>("common");
  const [status, setStatus] = useState<"input" | "preview" | "saving" | "done">("input");
  const [cards, setCards] = useState<ParsedCard[]>([]);
  const [error, setError] = useState("");

  const liveCount = useMemo(() => parseQuizletText(rawText).length, [rawText]);

  const handleParse = () => {
    setError("");
    const parsed = parseQuizletText(rawText);
    if (parsed.length === 0) {
      setError("Kart bulunamadı! Lütfen Quizlet'ten 'Dışa Aktar (Export)' formatında kopyaladığınızdan emin olun.");
      return;
    }
    setCards(parsed);
    setStatus("preview");
  };

  const updateCard = (i: number, field: "english" | "turkish", value: string) => {
    setCards((prev) =>
      prev.map((c, idx) =>
        idx === i ? { ...c, [field]: value, suspicious: isSuspicious(value) } : c
      )
    );
  };

  const removeCard = (i: number) => {
    setCards((prev) => prev.filter((_, idx) => idx !== i));
  };

  const suspiciousCount = cards.filter((c) => c.suspicious).length;

  const handleConfirm = async () => {
    if (suspiciousCount > 0) {
      setError("Kırmızı işaretli satırlar varken kaydedilemez! Lütfen önce düzeltin ya da silin.");
      return;
    }

    setStatus("saving");
    try {
      const type = FOLDER_PRESETS.find((f) => f.id === folder)?.type ?? "genel";
      const res = await fetch("/api/words/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          words: cards.map(({ english, turkish }) => ({ english, turkish })),
          source: `quizlet-${folder}`,
          type,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Kayıt hatası");
      }

      confetti({ particleCount: 150, spread: 90 });
      toast.success(data.message);
      setStatus("done");
    } catch (err: any) {
      setError(err.message || "Kaydetme başarısız, lütfen tekrar deneyin.");
      setStatus("preview");
    }
  };

  return (
    <div className="card-vibrant p-6 md:p-8">
      {status === "input" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🃏</span>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Quizlet Dışa Aktarımını İçe Aktar
            </h3>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Quizlet'te ilgili seti açın → <strong>⋯ menüsü</strong> → <strong>Dışa Aktar (Export)</strong> → metni kopyalayıp aşağıdaki alana yapıştırın.
          </p>

          {/* Hedef Klasör Seçimi */}
          <div>
            <label className="block text-xs font-mono text-cyan-300 uppercase tracking-widest mb-2 font-bold">
              Hedef Klasör
            </label>
            <div className="flex flex-wrap gap-2">
              {FOLDER_PRESETS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFolder(f.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
                    folder === f.id
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30 scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/80"
                  )}
                >
                  <Folder className="w-3.5 h-3.5" />
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder={"bring about\tneden olmak, yol açmak\ncall off\tiptal etmek\ncarry out\tyürütmek, gerçekleştirmek..."}
            className="w-full h-56 p-4 rounded-2xl bg-black/40 border-2 border-white/15 font-mono text-xs focus:border-violet-400 focus:outline-none shadow-inner text-white"
          />

          <div className="flex items-center justify-between">
            <span
              className={cn(
                "text-xs font-bold font-mono",
                liveCount > 0 ? "text-emerald-400" : "text-white/40"
              )}
            >
              {liveCount > 0 ? `✨ ${liveCount} kart algılandı` : "Henüz kart yapıştırılmadı"}
            </span>
            <button
              onClick={handleParse}
              disabled={liveCount === 0}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-extrabold text-sm text-white disabled:opacity-40 hover:scale-105 transition-transform"
            >
              🔍 Önizle ve Doğrula
            </button>
          </div>
        </motion.div>
      )}

      {/* Önizleme & Düzenleme Tablosu */}
      {status === "preview" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-black text-yellow-300">
                ✏️ Önizleme: {cards.length} Kart
              </h4>
              <p className="text-xs text-white/70">
                İstediğiniz hücreye tıklayıp düzenleyebilir veya hatalı satırları silebilirsiniz.
              </p>
            </div>

            {suspiciousCount > 0 && (
              <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {suspiciousCount} Şüpheli Satır
              </span>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto rounded-2xl border border-white/15 bg-black/30 p-2 space-y-1.5">
            <AnimatePresence>
              {cards.map((c, i) => (
                <motion.div
                  key={i}
                  layout
                  exit={{ opacity: 0, x: -30 }}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-xl border text-xs transition-colors",
                    c.suspicious
                      ? "bg-red-950/40 border-red-500/50"
                      : "bg-white/5 border-white/10 hover:border-white/25"
                  )}
                >
                  <span className="w-6 text-center font-mono text-white/50">{i + 1}</span>
                  <input
                    value={c.english}
                    onChange={(e) => updateCard(i, "english", e.target.value)}
                    className="flex-1 bg-black/40 border border-white/15 rounded-lg px-2.5 py-1.5 font-bold text-cyan-300"
                    placeholder="English"
                  />
                  <span className="text-white/40">→</span>
                  <input
                    value={c.turkish}
                    onChange={(e) => updateCard(i, "turkish", e.target.value)}
                    className="flex-1 bg-black/40 border border-white/15 rounded-lg px-2.5 py-1.5 text-yellow-200"
                    placeholder="Türkçe Anlam"
                  />
                  <button
                    onClick={() => removeCard(i)}
                    className="p-1.5 rounded-full hover:bg-red-500/30 text-white/60 hover:text-red-400"
                    title="Satırı Sil"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStatus("input")}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold"
            >
              Geri
            </button>
            <button
              onClick={handleConfirm}
              disabled={suspiciousCount > 0}
              className={cn(
                "flex-1 py-3 rounded-xl font-extrabold text-white text-sm shadow-xl flex items-center justify-center gap-2",
                suspiciousCount > 0
                  ? "bg-gray-700 cursor-not-allowed text-white/50"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 transition-transform"
              )}
            >
              {suspiciousCount > 0
                ? `⚠️ Önce ${suspiciousCount} Şüpheli Satırı Düzeltin`
                : `✅ ${cards.length} Kartı Onayla ve Kaydet`}
            </button>
          </div>
        </motion.div>
      )}

      {status === "done" && (
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-10 space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl mx-auto">
            🎉
          </div>
          <h4 className="text-2xl font-black text-emerald-300">
            Kelimeler Başarıyla Kaydedildi!
          </h4>
          <p className="text-xs text-white/70">
            Eklenen kelimeler Flashcard ve kütüphane modüllerinde anında çalışmaya hazırdır.
          </p>
          <button
            onClick={() => {
              setRawText("");
              setCards([]);
              setStatus("input");
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-xs font-bold"
          >
            Yeni Set Aktar
          </button>
        </motion.div>
      )}

      {error && (
        <p className="mt-4 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs text-center font-bold">
          {error}
        </p>
      )}
    </div>
  );
}
