"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Upload,
  Check,
  X,
  AlertTriangle,
  FileText,
  Loader2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Trash2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "@/lib/vocabulary/publications-master-corpus";

interface CandidateWord {
  english: string;
  turkish: string;
  level: string;
  type: string;
  occurrences: number;
  selected: boolean;
  definitionEn?: string;
  exampleEn?: string;
}

// Yaygın İngilizce durak sözcükleri (stop words) - YDS kelimesi olmayan bağlaçlar, edatlar, zamirler
const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "if", "while", "although", "because",
  "as", "at", "by", "for", "from", "in", "into", "of", "off", "on", "onto",
  "out", "over", "under", "up", "down", "to", "with", "without", "within",
  "against", "among", "around", "across", "between", "during", "before", "after",
  "since", "until", "unless", "than", "then", "so", "nor", "yet", "both", "either",
  "neither", "such", "same", "too", "very", "just", "more", "most", "less", "least",
  "each", "every", "some", "any", "no", "not", "all", "few", "many", "much",
  "other", "another", "these", "those", "this", "that", "who", "whom", "whose",
  "which", "what", "when", "where", "why", "how", "whether", "can", "could", "may",
  "might", "will", "would", "shall", "should", "must", "have", "has", "had", "do",
  "does", "did", "be", "am", "is", "are", "was", "were", "been", "being", "one",
  "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "i",
  "me", "my", "mine", "we", "us", "our", "ours", "you", "your", "yours", "he",
  "him", "his", "she", "her", "hers", "they", "them", "their", "theirs", "it",
  "its", "here", "there", "again", "further", "once", "only", "own", "also", "via",
  "per", "page", "test", "unit", "section", "part", "question",
]);

// Türkçe sınav yönerge sözcükleri
const TURKISH_FILTER = new Set([
  "ve", "veya", "ile", "için", "gibi", "kadar", "daha", "çok", "en", "bir", "bu",
  "şu", "o", "da", "de", "mi", "mı", "mu", "mü", "ama", "ancak", "fakat", "çünkü",
  "göre", "olarak", "üzere", "tarafından", "aşağıdaki", "yukarıdaki", "verilen",
  "seçiniz", "işaretleyiniz", "bulunuz", "tamamlayınız", "cevaplayınız", "doğru",
  "yanlış", "soru", "sorular", "seçenek", "seçenekler", "cevap", "cümle", "paragraf",
  "metin", "anlam", "boşluk", "uygun", "hangisi", "ifadelerden", "oluşan",
]);

const CANDIDATE_PATTERN = /[\p{Script=Latin}][\p{Script=Latin}\p{M}]*(?:['’\-][\p{Script=Latin}\p{M}]+)*/gu;

export default function PdfImporter() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "parsing" | "ocr" | "preview" | "saving" | "done"
  >("idle");
  const [progress, setProgress] = useState(0);
  const [words, setWords] = useState<CandidateWord[]>([]);
  const [error, setError] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [parsedType, setParsedType] = useState<"structured" | "unstructured">("unstructured");
  const [savingLoading, setSavingLoading] = useState(false);

  // 1. PDF Dosyasını Oku ve Ayrıştır (Formatlı veya Serbest Metin)
  const handleFileChange = async (selectedFile: File) => {
    setFile(selectedFile);
    setError("");
    setWords([]);
    setStatus("parsing");
    setProgress(5);

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

        // Satır yapısını koruyarak birleştir
        const lineParts: string[] = [];
        for (const item of content.items as any[]) {
          if (item.str) lineParts.push(item.str);
        }
        fullText += lineParts.join(" ") + "\n";
        setProgress(Math.round((p / pdf.numPages) * 70));
      }

      // Metin katmanı yoksa OCR desteği (ilk 5 sayfa sınırlı)
      if (fullText.trim().length < 30) {
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
                setProgress(70 + Math.round(m.progress * 25));
              }
            },
          });
          fullText += data.text + "\n";
        }
      }

      setProgress(95);

      // A) Önce yapılandırılmış satırları ara (kelime - anlam / word : meaning)
      const lines = fullText.split(/\r?\n/);
      const structuredItems: CandidateWord[] = [];

      for (const line of lines) {
        const cleaned = line.trim();
        if (cleaned.length < 3) continue;
        const match = cleaned.match(/^([a-zA-Z\s\-']{2,40})\s*[\t:–—=-]\s*(.+)$/);
        if (match) {
          const eng = match[1].trim();
          const tr = match[2].trim();
          if (
            eng.length >= 2 &&
            tr.length >= 2 &&
            !STOP_WORDS.has(eng.toLowerCase()) &&
            !TURKISH_FILTER.has(tr.toLowerCase())
          ) {
            structuredItems.push({
              english: eng,
              turkish: tr,
              level: "B2",
              type: "genel",
              occurrences: 1,
              selected: true,
            });
          }
        }
      }

      if (structuredItems.length >= 3) {
        setParsedType("structured");
        setWords(structuredItems);
        setStatus("preview");
        setProgress(100);
        return;
      }

      // B) Yapılandırılmamış Serbest Metin / Kitap / Sınav / Makale Modu
      setParsedType("unstructured");
      const normalizedText = fullText
        .normalize("NFKC")
        .replace(/[\u00ad\u200b\ufeff]/gu, "")
        .replace(/-\s*\r?\n\s*/gu, "")
        .replace(/\r\n?/gu, "\n");

      const frequencyMap = new Map<string, number>();

      for (const match of normalizedText.matchAll(CANDIDATE_PATTERN)) {
        const raw = match[0];
        const letters = raw.replace(/[^\p{L}\p{M}]/gu, "");
        if (letters.length < 3 || letters.length > 35) continue;
        if (/[çğıöşüÇĞİÖŞÜ]/iu.test(raw)) continue; // Türkçe harf barındıranları atla
        if (/^[A-Z]{2,8}$/u.test(raw)) continue; // Kısaltmaları atla

        const term = raw
          .normalize("NFKC")
          .toLowerCase()
          .replace(/[’]/gu, "'")
          .replace(/^-+|-+$/gu, "")
          .trim();

        if (!term || STOP_WORDS.has(term) || TURKISH_FILTER.has(term)) continue;

        frequencyMap.set(term, (frequencyMap.get(term) || 0) + 1);
      }

      // Master Yayınlar Korpusu ve yerel eşleşmelerle zenginleştir
      const pubMap = new Map(
        YDS_PUBLICATIONS_MASTER_CORPUS.map((p) => [p.term.toLowerCase(), p])
      );

      const candidateList: CandidateWord[] = [];

      for (const [term, occurrences] of frequencyMap.entries()) {
        const pubMatch = pubMap.get(term);
        if (pubMatch) {
          candidateList.push({
            english: pubMatch.term,
            turkish: pubMatch.meaningsTr.join(", "),
            level: pubMatch.level,
            type: pubMatch.type,
            occurrences,
            selected: true,
            definitionEn: pubMatch.definitionEn,
            exampleEn: pubMatch.exampleEn,
          });
        } else {
          // Akademik kelime tespiti (uzunluk ve morfolojik yapı)
          candidateList.push({
            english: term,
            turkish: "Otomatik AI Analizi",
            level: term.length > 8 ? "B2" : "B1",
            type: term.endsWith("ly")
              ? "zarf"
              : term.endsWith("tion") || term.endsWith("ment")
              ? "isim"
              : term.endsWith("able") || term.endsWith("ive")
              ? "sıfat"
              : "genel",
            occurrences,
            selected: occurrences >= 1,
          });
        }
      }

      // Frekansa göre ve yayın eşleşmesine göre sırala (en çok geçen ve en kritik YDS kelimeleri öne)
      candidateList.sort((a, b) => {
        const aHasPub = a.turkish !== "Otomatik AI Analizi" ? 1 : 0;
        const bHasPub = b.turkish !== "Otomatik AI Analizi" ? 1 : 0;
        if (aHasPub !== bHasPub) return bHasPub - aHasPub;
        return b.occurrences - a.occurrences;
      });

      if (candidateList.length === 0) {
        setError(
          "PDF içinde taranabilecek İngilizce akademik kelime bulunamadı. Lütfen dosyanızı kontrol edin."
        );
        setStatus("idle");
        return;
      }

      // En yüksek öncelikli 150 kelimeyi önizlemeye al
      setWords(candidateList.slice(0, 150));
      setStatus("preview");
      setProgress(100);
    } catch (err: any) {
      console.error(err);
      setError("PDF okunurken hata oluştu. Lütfen geçerli bir PDF dosyası seçin.");
      setStatus("idle");
    }
  };

  // Tek tek seçim toggle
  const toggleSelect = (index: number) => {
    setWords((prev) =>
      prev.map((w, i) => (i === index ? { ...w, selected: !w.selected } : w))
    );
  };

  // Hepsini seç / kaldır
  const toggleAll = (select: boolean) => {
    setWords((prev) => prev.map((w) => ({ ...w, selected: select })));
  };

  // Seçilen kelimeleri veritabanına ve kütüphaneye kaydet
  const handleSaveSelected = async () => {
    const selectedWords = words.filter((w) => w.selected);
    if (selectedWords.length === 0) {
      toast.error("Lütfen eklenecek en az bir kelime seçin.");
      return;
    }

    setSavingLoading(true);
    try {
      const res = await fetch("/api/words/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          words: selectedWords.map((w) => ({
            english: w.english,
            turkish: w.turkish === "Otomatik AI Analizi" ? "" : w.turkish,
            level: w.level,
            type: w.type,
          })),
          source: file ? `PDF: ${file.name.slice(0, 50)}` : "Akıllı PDF Tarayıcı",
          type: "akademik",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Kayıt sırasında hata oluştu.");
      }

      confetti({ particleCount: 160, spread: 100, origin: { y: 0.6 } });
      toast.success(
        `🎉 ${selectedWords.length} kelime başarıyla zenginleştirilip kütüphanenize eklendi!`
      );
      setStatus("done");
    } catch (err: any) {
      toast.error(err.message || "Kaydetme başarısız oldu.");
    } finally {
      setSavingLoading(false);
    }
  };

  // 2013-2026 Tüm Yayınlar Master Havuzunu Tek Tıkla Yükleme
  const handleDirectSeedCorpus = async () => {
    setSavingLoading(true);
    try {
      const payload = YDS_PUBLICATIONS_MASTER_CORPUS.map((p) => ({
        english: p.term,
        turkish: p.meaningsTr.join(", "),
        definitionEn: p.definitionEn,
        type: p.type,
        level: p.level,
        source: p.sourceCategory,
      }));

      const res = await fetch("/api/words/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          words: payload,
          source: "YDS 2013-2026 Master Yayınlar Havuzu",
          type: "akademik",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "İçe aktarım başarısız");

      confetti({ particleCount: 200, spread: 120 });
      toast.success(
        `🏆 2013–2026 tüm yayınların (Modadil, Akın Dil, Cambridge, Oxford...) YDS kelimeleri kütüphanenize başarıyla yüklendi!`
      );
      setStatus("done");
    } catch (err: any) {
      toast.error(err.message || "Havuz yüklenemedi.");
    } finally {
      setSavingLoading(false);
    }
  };

  const filteredWords = words.filter(
    (w) =>
      w.english.toLowerCase().includes(filterQuery.toLowerCase()) ||
      w.turkish.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const selectedCount = words.filter((w) => w.selected).length;

  return (
    <div className="space-y-6">
      {/* 2013-2026 Yayınlar Hızlı Yükleme Kartı */}
      <div className="card-vibrant p-6 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-cyan-500/10 border-2 border-amber-400/40 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black">
              <span>👑</span>
              <span>2013–2026 Tüm YDS Yayınları Hazır Havuzu</span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-white">
              Kitap Taramaya Vaktiniz Yok mu? Tüm Yayınların Kelimeleri Hazır!
            </h3>
            <p className="text-xs text-white/70 max-w-2xl leading-relaxed">
              Modadil, Akın Dil, YDS Publishing, İrem, Remzi Hoca, ODTÜ GV, Benim Hocam, Yargı,
              Dilko, Pelikan, Pegem, Cambridge ve Oxford yayınlarındaki ortak YDS/YDT kelimelerini
              tek tıkla kütüphanenize aktarın.
            </p>
          </div>

          <button
            onClick={handleDirectSeedCorpus}
            disabled={savingLoading}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-slate-950 font-black text-xs md:text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap disabled:opacity-50"
          >
            {savingLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 text-slate-950" />
            )}
            <span>📚 Tüm Yayınlar Havuzunu Kütüphaneme Aktar</span>
          </button>
        </div>
      </div>

      {/* PDF Yükleme Alanı */}
      <div className="card-vibrant p-6 md:p-8">
        {status === "idle" && (
          <label className="flex flex-col items-center justify-center p-10 md:p-14 rounded-3xl cursor-pointer border-3 border-dashed border-cyan-400/40 bg-white/5 hover:bg-white/10 transition-all text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📄
            </div>
            <span className="text-xl md:text-2xl font-black text-white mb-2">
              Herhangi Bir PDF Yükleyin (Akıllı Tarayıcı)
            </span>
            <span className="text-xs md:text-sm text-cyan-300 font-bold max-w-xl mb-3">
              Format fark etmez! Kitap, deneme sınavı, makale veya kelime listesi yükleyebilirsiniz.
            </span>
            <span className="text-xs text-white/50 max-w-lg">
              İçindeki tüm İngilizce akademik kelimeler tek tek ayıklanır, Türkçe anlamları, CEFR
              seviyeleri ve örnek cümleleri otomatik olarak oluşturulur.
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
              {status === "ocr"
                ? "🔎 Taranmış PDF algılandı — OCR ile okunuyor..."
                : "📖 PDF taranıyor & akademik kelimeler ayıklanıyor..."}
            </p>
            <div className="w-72 mx-auto bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400"
                animate={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-cyan-300 font-bold">{progress}%</span>
          </div>
        )}

        {status === "preview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {/* Üst Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h4 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
                  ⚡ {words.length} YDS Kelimesi Tespit Edildi
                </h4>
                <p className="text-xs text-white/70">
                  {parsedType === "structured"
                    ? "Kelime-anlam eşleşmesi başarıyla okundu."
                    : "Akademik metin analizi tamamlandı. Frekansı yüksek YDS kelimeleri öne çıkarıldı."}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleAll(true)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Tümünü Seç
                </button>
                <button
                  onClick={() => toggleAll(false)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white/70 transition-colors"
                >
                  Seçimi Kaldır
                </button>
                <button
                  onClick={handleSaveSelected}
                  disabled={savingLoading || selectedCount === 0}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-black text-xs md:text-sm text-white shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  {savingLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  <span>{selectedCount} Kelimeyi Kütüphaneme Ekle</span>
                </button>
              </div>
            </div>

            {/* Arama Çubuğu */}
            <div className="relative">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Çıkarılan kelimelerde ara..."
                className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Kelime Listesi Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto p-1 pr-2">
              {filteredWords.map((w, index) => (
                <div
                  key={`${w.english}-${index}`}
                  onClick={() => toggleSelect(index)}
                  className={cn(
                    "p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2",
                    w.selected
                      ? "bg-cyan-500/10 border-cyan-400/50 shadow-md shadow-cyan-500/10"
                      : "bg-white/5 border-white/10 opacity-60 hover:opacity-100"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={w.selected}
                        onChange={() => {}} // parent onClick handles toggle
                        className="w-4 h-4 rounded text-cyan-500 accent-cyan-500 cursor-pointer"
                      />
                      <span className="font-black text-base text-white">{w.english}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 font-mono text-[10px] font-bold">
                        {w.level}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-400/20 text-purple-300 text-[10px] font-bold">
                        {w.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/80 line-clamp-1">{w.turkish}</p>

                  {w.exampleEn && (
                    <p className="text-[11px] text-white/50 italic line-clamp-1">
                      &quot;{w.exampleEn}&quot;
                    </p>
                  )}

                  {w.occurrences > 1 && (
                    <span className="text-[10px] text-cyan-300 font-mono self-end">
                      PDF&apos;te {w.occurrences} kez geçiyor
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Alt İşlem Butonu */}
            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={handleSaveSelected}
                disabled={savingLoading || selectedCount === 0}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-black text-sm text-white shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {savingLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-5 h-5" />
                )}
                <span>Seçilen {selectedCount} Kelimeyi Otomatik Kütüphaneme Ekle ➔</span>
              </button>
            </div>
          </motion.div>
        )}

        {status === "done" && (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
              ✓
            </div>
            <h4 className="text-2xl font-black text-white">İçe Aktarım Başarıyla Tamamlandı!</h4>
            <p className="text-xs md:text-sm text-white/70 max-w-md mx-auto">
              Kelimeler seviyelerine göre kategorilendi, örnek cümleleri bağlandı ve kelime havuzunuza
              eklendi.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="/vocabulary"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-xs md:text-sm text-white shadow-lg hover:scale-105 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Kelimeler Sayfasına Git</span>
              </Link>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFile(null);
                  setWords([]);
                }}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 font-bold text-xs md:text-sm text-white transition-all"
              >
                Yeni PDF Yükle
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
