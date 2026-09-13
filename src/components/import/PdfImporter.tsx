"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Upload, Check, X, AlertTriangle, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ParsedWord {
  english: string;
  turkish: string;
  suspicious: boolean;
}

function isSuspicious(text: string): boolean {
  if (!text || text.trim().length < 2) return true;
  if (/[\uFFFD\u0000-\u0008\u000E-\u001F]/.test(text)) return true;
  if (/(.)\1{4,}/.test(text)) return true;
  const valid = text.match(/[a-zA-ZçÇğĞıİöÖşŞüÜâîû0-9\s\-'.,()/;:!?]/g)?.length ?? 0;
  return valid / text.length < 0.85;
}

function parsePdfLine(line: string): ParsedWord | null {
  const cleaned = line.trim();
  if (cleaned.length < 3) return null;
  const match = cleaned.match(/^(.+?)\s*[\t:–—-]\s*(.+)$/);
  if (!match) return null;
  const english = match[1].trim();
  const turkish = match[2].trim();
  if (!english || !turkish) return null;
  return {
    english,
    turkish,
    suspicious: isSuspicious(english) || isSuspicious(turkish),
  };
}

export default function PdfImporter() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "parsing" | "ocr" | "preview" | "saving" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [words, setWords] = useState<ParsedWord[]>([]);
  const [error, setError] = useState("");

  const handleFileChange = async (selectedFile: File) => {
    setFile(selectedFile);
    setError("");
    setWords([]);
    setStatus("parsing");
    setProgress(0);

    try {
      // Dynamic import of pdfjs-dist on client side
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

      const buffer = await selectedFile.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buffer }).promise;
      let fullText = "";

      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        const content = await page.getTextContent();

        // Satır yapısını korumak için Y koordinatlarına göre sırala
        const linesMap = new Map<number, string[]>();
        for (const item of content.items as any[]) {
          const y = Math.round(item.transform[5]);
          if (!linesMap.has(y)) linesMap.set(y, []);
          linesMap.get(y)!.push(item.str);
        }

        Array.from(linesMap.entries())
          .sort((a, b) => b[0] - a[0])
          .forEach(([, parts]) => {
            fullText += parts.join(" ") + "\n";
          });

        setProgress(Math.round((p / pdf.numPages) * 100));
      }

      // Metin katmanı boşsa OCR fallback
      if (fullText.trim().length < 20) {
        setStatus("ocr");
        const Tesseract = (await import("tesseract.js")).default;
        for (let p = 1; p <= Math.min(pdf.numPages, 5); p++) {
          const page = await pdf.getPage(p);
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise;
          const { data } = await Tesseract.recognize(canvas, "eng+tur", {
            logger: (m) => {
              if (m.status === "recognizing text") {
                setProgress(Math.round(m.progress * 100));
              }
            },
          });
          fullText += data.text + "\n";
        }
      }

      const parsed = fullText
        .split("\n")
        .map(parsePdfLine)
        .filter((w): w is ParsedWord => w !== null);

      if (parsed.length === 0) {
        setError("PDF içinde 'kelime - anlam' formatında satır bulunamadı. Lütfen formatı kontrol edin.");
        setStatus("idle");
        return;
      }

      setWords(parsed);
      setStatus("preview");
    } catch (err: any) {
      console.error(err);
      setError("PDF okunurken hata oluştu. Lütfen geçerli bir PDF dosyası yükleyin.");
      setStatus("idle");
    }
  };

  const updateWord = (i: number, field: "english" | "turkish", val: string) => {
    setWords((prev) =>
      prev.map((w, idx) =>
        idx === i ? { ...w, [field]: val, suspicious: isSuspicious(val) } : w
      )
    );
  };

  const removeWord = (i: number) => {
    setWords((prev) => prev.filter((_, idx) => idx !== i));
  };

  const suspiciousCount = words.filter((w) => w.suspicious).length;

  const handleConfirm = async () => {
    if (suspiciousCount > 0) {
      setError("Kırmızı işaretli satırlar varken kayıt yapılamaz! Önce düzeltin ya da silin.");
      return;
    }

    setStatus("saving");
    try {
      const res = await fetch("/api/words/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          words: words.map(({ english, turkish }) => ({ english, turkish })),
          source: file ? file.name : "pdf-upload",
          type: "genel",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Kayıt hatası");

      confetti({ particleCount: 150, spread: 90 });
      toast.success(data.message);
      setStatus("done");
    } catch (err: any) {
      setError(err.message || "Kaydetme başarısız.");
      setStatus("preview");
    }
  };

  return (
    <div className="card-vibrant p-6 md:p-8">
      {status === "idle" && (
        <label className="flex flex-col items-center justify-center p-12 rounded-3xl cursor-pointer border-3 border-dashed border-cyan-400/40 bg-white/5 hover:bg-white/10 transition-colors text-center">
          <Upload className="w-14 h-14 text-cyan-400 mb-3" />
          <span className="text-xl font-black text-white mb-1">
            PDF Dosyanızı Buraya Bırakın veya Seçin
          </span>
          <span className="text-xs text-white/60">
            ÖSYM geçmiş kelimeler, Dilko, ODTÜ veya hazırlık föyleri (kelime - anlam formatı)
          </span>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
          />
        </label>
      )}

      {(status === "parsing" || status === "ocr") && (
        <div className="text-center py-12 space-y-4">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto" />
          <p className="font-extrabold text-lg text-white">
            {status === "ocr" ? "🔎 Taranmış PDF algılandı — OCR ile okunuyor..." : "📖 Metin katmanı çıkarılıyor..."}
          </p>
          <div className="w-64 mx-auto bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-mono text-cyan-300 font-bold">{progress}%</span>
        </div>
      )}

      {status === "preview" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-black text-yellow-300">
                ✏️ PDF Önizleme: {words.length} Kelime Bulundu
              </h4>
              <p className="text-xs text-white/70">
                Bozuk ya da eksik okunan satırları düzenleyin veya silin.
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
              {words.map((w, i) => (
                <motion.div
                  key={i}
                  layout
                  exit={{ opacity: 0, x: -30 }}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-xl border text-xs transition-colors",
                    w.suspicious
                      ? "bg-red-950/40 border-red-500/50"
                      : "bg-white/5 border-white/10 hover:border-white/25"
                  )}
                >
                  <span className="w-6 text-center font-mono text-white/50">{i + 1}</span>
                  <input
                    value={w.english}
                    onChange={(e) => updateWord(i, "english", e.target.value)}
                    className="flex-1 bg-black/40 border border-white/15 rounded-lg px-2.5 py-1.5 font-bold text-cyan-300"
                    placeholder="English"
                  />
                  <span className="text-white/40">→</span>
                  <input
                    value={w.turkish}
                    onChange={(e) => updateWord(i, "turkish", e.target.value)}
                    className="flex-1 bg-black/40 border border-white/15 rounded-lg px-2.5 py-1.5 text-yellow-200"
                    placeholder="Türkçe Anlam"
                  />
                  <button
                    onClick={() => removeWord(i)}
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
              onClick={() => setStatus("idle")}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold"
            >
              Yeni PDF Seç
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
                : `✅ ${words.length} Kelimeyi Onayla ve Kaydet`}
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
            PDF Kelimeleri Başarıyla İçe Aktarıldı!
          </h4>
          <button
            onClick={() => {
              setWords([]);
              setFile(null);
              setStatus("idle");
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-xs font-bold"
          >
            Yeni PDF Yükle
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
