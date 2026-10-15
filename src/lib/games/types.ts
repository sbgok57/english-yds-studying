/**
 * DİL MASTER — 240+ Özgün ve Oynanabilir Gramer & Kelime Oyunları Tip Tanımları
 * P0 Reliability & Deterministik Yerel Kod Mimarisi
 */

export type GameExamCategory = "YDS" | "YDT" | "YÖKDİL" | "Genel";

export type GameModeId =
  | "multiple-choice"   // 1. Çoktan Seçmeli Yapı
  | "true-false"         // 2. Doğru / Yanlış Gramer Kuralı
  | "matching"           // 3. Kural ↔ Cümle Eşleştirme
  | "flashcard"          // 4. Hatırlama & Kalıp Kartı
  | "sentence-order"     // 5. Cümle Kelime Sıralama
  | "fill-in-the-blank"  // 6. Boşluk Tamamlama
  | "pattern-finder"     // 7. Gramer Kalıbı Bulma
  | "memory-pair"        // 8. Hafıza Çiftleri
  | "error-detective"    // 9. Hata Dedektifi (Find the Mistake)
  | "team-quiz-board";   // 10. Takım / Kendi Kendine Quiz Tahtası

export interface GameModeMeta {
  id: GameModeId;
  label: string;
  emoji: string;
  description: string;
}

export const GAME_MODES: readonly GameModeMeta[] = [
  { id: "multiple-choice", label: "Çoktan Seçmeli", emoji: "🎯", description: "Hedef gramer kuralını doğru seçenekle tamamla" },
  { id: "true-false", label: "Doğru / Yanlış", emoji: "⚖️", description: "Cümlenin gramer kuralına uygunluğunu sına" },
  { id: "matching", label: "Eşleştirme", emoji: "🧩", description: "İngilizce kalıpları Türkçe karşılıkları ve kurallarla eşleştir" },
  { id: "flashcard", label: "Kalıp Kartı", emoji: "🃏", description: "Kuralı hatırla, kartı çevir ve kendini test et" },
  { id: "sentence-order", label: "Cümle Sıralama", emoji: "🔤", description: "Karışık verilen sözcükleri doğru İngilizce sözdizimine koy" },
  { id: "fill-in-the-blank", label: "Boşluk Doldur", emoji: "✏️", description: "Cümledeki eksik yardımcı fiil, edat veya kalıbı tamamla" },
  { id: "pattern-finder", label: "Kalıp Bul", emoji: "🔍", description: "Cümledeki anahtar gramer örüntüsünü doğru teşhis et" },
  { id: "memory-pair", label: "Hafıza Çiftleri", emoji: "🧠", description: "Kural kartı ile doğru örneği hafızanda eşleştir" },
  { id: "error-detective", label: "Hata Dedektifi", emoji: "🕵️", description: "YDS/YDT tuzaklı yanlış cümleyi ve hatayı tespit et" },
  { id: "team-quiz-board", label: "Quiz Tahtası", emoji: "🏆", description: "Puanlı soru tahtasında adım adım ilerle" },
];

export interface PlayableGameItem {
  id: string;                      // Kararlı, benzersiz kimlik (örn: gm-sentence-order-multiple-choice)
  lessonId: string;                // Bağlı olduğu 24 dersten biri (örn: sentence-order)
  lessonTitle: string;             // Ders başlığı
  lessonOrder: number;             // Ders sıra numarası (1-24)
  level: "A1" | "A2";              // CEFR Seviyesi
  mode: GameModeId;                // 10 mekanikten biri
  modeTitle: string;               // Mekanik Türkçe başlığı
  examCategories: GameExamCategory[]; // YDS, YDT, YÖKDİL eşleşmeleri
  title: string;                   // Oyun başlığı
  instruction: string;             // Açık yönerge
  prompt: string;                  // Soru veya görev metni
  choices?: string[];              // Çoktan seçmeli veya sıralama seçenekleri
  correctAnswer: string | number | string[]; // Doğru yanıt doğrulama kuralı
  explanation: string;             // Neden doğru olduğunu anlatan açıklama
  pattern: string;                 // Kural kalıbı (Subject + Verb + Object)
  examples: readonly { en: string; tr: string }[];
  commonMistake?: string;          // Yaygın tuzak
  points: number;                  // Başarı puanı (10-30)
}

export interface GameProgressState {
  gameId: string;
  stepIndex: number;
  totalSteps: number;
  score: number;
  streak: number;
  userAnswer: string | number | string[] | null;
  isCorrect: boolean | null;
  hasConfirmedExplanation: boolean; // Kullanıcı "Tamam, anladım/devam" onayı vermeden geçiş olamaz
  completed: boolean;
  timestamp: number;
}
