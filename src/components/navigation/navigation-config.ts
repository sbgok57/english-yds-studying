/**
 * DİL MASTER — Merkezi Navigasyon Kayıt Kütüğü (Central Navigation Registry)
 *
 * Üst menü (Header), Hamburger Menü Çekmecesi (MenuDrawer), Yatay Kaydırılabilir Araç Çubuğu
 * (ScrollableToolbar) ve Mobil Alt Navigasyon (BottomNavigation) aynı tekil kaynaktan beslenir.
 */

export type NavigationCategoryId =
  | "start"
  | "vocabulary"
  | "grammar"
  | "reading-listening"
  | "exams"
  | "progress"
  | "personalization"
  | "account";

export type NavigationIconId =
  | "home"
  | "dashboard"
  | "compass"
  | "book-open"
  | "layers"
  | "box"
  | "sparkles"
  | "file-up"
  | "graduation-cap"
  | "headphones"
  | "microscope"
  | "pen-tool"
  | "mic"
  | "target"
  | "clock"
  | "zap"
  | "gamepad"
  | "trending-up"
  | "calendar"
  | "award"
  | "palette"
  | "volume-2"
  | "user"
  | "settings"
  | "shield"
  | "help-circle";

export interface NavigationItem {
  id: string;
  label: string;
  description: string;
  href: string;
  category: NavigationCategoryId;
  icon: NavigationIconId;
  badge?: string;
  searchTags: string[];
  requiresAuth?: boolean;
}

export interface NavigationCategoryGroup {
  id: NavigationCategoryId;
  title: string;
  subtitle: string;
  items: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  // A. Başlangıç
  {
    id: "nav-home",
    label: "Ana Sayfa",
    description: "Hızlı başlangıç, sınav merkezleri ve günlük çalışma özeti",
    href: "/",
    category: "start",
    icon: "home",
    searchTags: ["ana sayfa", "başlangıç", "home", "giriş ekranı", "özet"],
  },
  {
    id: "nav-dashboard",
    label: "Kontrol Paneli & Çalışma Alanı",
    description: "Son çalışmaya devam et, günlük hedef ve çalışma serisi",
    href: "/dashboard",
    category: "start",
    icon: "dashboard",
    badge: "Canlı",
    searchTags: ["kontrol paneli", "dashboard", "çalışma alanı", "günlük hedef", "seri", "streak"],
  },
  {
    id: "nav-level-test",
    label: "Seviye Tespit Sınavı",
    description: "CEFR (A1–C2) ve tahmini YDS/YDT puan analizi",
    href: "/level-test",
    category: "start",
    icon: "compass",
    searchTags: ["seviye tespit", "placement test", "cefr", "başlangıç testi"],
  },
  {
    id: "nav-guide",
    label: "Platform Kılavuzu",
    description: "DİL MASTER modüllerini verimli kullanma rehberi",
    href: "/kilavuz",
    category: "start",
    icon: "help-circle",
    searchTags: ["kılavuz", "rehber", "yardım", "nasıl kullanılır"],
  },

  // B. Kelimeler
  {
    id: "nav-vocabulary",
    label: "Kelime Çalışması & Görsel Kartlar",
    description: "Fotoğraf, 3D model, animasyon, telaffuz ve örnek cümleler",
    href: "/vocabulary",
    category: "vocabulary",
    icon: "book-open",
    badge: "Görsel + Ses",
    searchTags: ["kelime", "kelimeler", "vocabulary", "kelime çalışması", "kelime görselleri", "telaffuz", "örnek cümle"],
  },
  {
    id: "nav-vocabulary-inventory",
    label: "Kelime Envanteri (Arama & Tekrar)",
    description: "Kaydedilmiş kelimeler, tekrar edilecekler, sınav filtresi ve notlar",
    href: "/vocabulary/inventory",
    category: "vocabulary",
    icon: "layers",
    badge: "Envanter",
    searchTags: ["envanter", "kelime envanteri", "kelime arama", "favori kelimeler", "tekrar", "kaydedilmiş", "inventory"],
  },
  {
    id: "nav-vocabulary-flashcards",
    label: "3D Flashcards (Kelime Küpü)",
    description: "Üç boyutlu dokunsal hafıza kartları ve hızlı ezber modu",
    href: "/vocabulary/flashcards",
    category: "vocabulary",
    icon: "box",
    badge: "3D",
    searchTags: ["flashcards", "3d kelime", "kelime kartları", "küp", "ezber"],
  },
  {
    id: "nav-vocabulary-import",
    label: "Akıllı PDF & Kelime Aktarıcı",
    description: "PDF veya metinden akademik kelimeleri otomatik ayıkla",
    href: "/import",
    category: "vocabulary",
    icon: "file-up",
    searchTags: ["pdf", "kelime ekle", "import", "aktarıcı", "quizlet"],
  },

  // C. Gramer
  {
    id: "nav-grammar",
    label: "Gramer Konu Listesi (27 Konu)",
    description: "Tenses, Modals, Clauses, Conjunctions ve ÖSYM formülleri",
    href: "/grammar",
    category: "grammar",
    icon: "graduation-cap",
    badge: "27 Konu",
    searchTags: ["gramer", "grammar", "konu anlatımı", "dilbilgisi", "tenses", "bağlaçlar"],
  },
  {
    id: "nav-grammar-audio",
    label: "Sesli Gramer (Emel & Ahmet)",
    description: "Türkçe anlatımlı gramer dersleri ve ALi CÜMLEci / DEDE İSİMci kodları",
    href: "/grammar/audio",
    category: "grammar",
    icon: "headphones",
    badge: "TR Sesli",
    searchTags: ["sesli gramer", "emel", "ahmet", "dinleyerek gramer", "hafıza kodları", "audio grammar"],
  },
  {
    id: "nav-grammar-practice",
    label: "Gramer Çalışma Alanı & Alıştırmalar",
    description: "Konu bazlı interaktif gramer soru pratiği",
    href: "/grammar/practice",
    category: "grammar",
    icon: "pen-tool",
    searchTags: ["gramer alıştırmaları", "gramer pratik", "gramer çalışma alanı", "soru çözümü"],
  },
  {
    id: "nav-grammar-mixed",
    label: "Karışık Gramer Testleri",
    description: "Tüm gramer konularını kapsayan karma tarama testleri",
    href: "/grammar/mixed-tests",
    category: "grammar",
    icon: "zap",
    searchTags: ["karışık gramer", "gramer testi", "tarama testi", "mixed tests"],
  },
  {
    id: "nav-grammar-starter",
    label: "Sıfırdan Temel Gramer Kampı",
    description: "Temel cümle kurulumu ve başlangıç seviyesi gramer",
    href: "/grammar/starter",
    category: "grammar",
    icon: "sparkles",
    searchTags: ["sıfırdan gramer", "temel gramer", "starter", "başlangıç"],
  },

  // D. Reading ve Listening
  {
    id: "nav-reading",
    label: "Reading Lab (Metinler & Sesli Dinleme)",
    description: "200 akademik okuma parçası, tıkla-öğren sözlük ve sesli okuma",
    href: "/reading",
    category: "reading-listening",
    icon: "microscope",
    badge: "200 Metin",
    searchTags: ["reading", "okuma", "paragraf", "akademik metin", "sesli okuma", "reading lab"],
  },
  {
    id: "nav-listening",
    label: "Listening Lab (6 Doğrulanmış Aksan)",
    description: "Akademik dinleme materyalleri, aksan karşılaştırma ve transkript",
    href: "/listening",
    category: "reading-listening",
    icon: "headphones",
    badge: "6 Aksan",
    searchTags: ["listening", "dinleme", "aksan", "kulak aşinalığı", "listening lab"],
  },
  {
    id: "nav-speaking",
    label: "Speaking & Telaffuz Koçu",
    description: "Mikrofonla telaffuz pratiği ve konuşma egzersizleri",
    href: "/speaking",
    category: "reading-listening",
    icon: "mic",
    searchTags: ["speaking", "konuşma", "telaffuz", "mikrofon"],
  },
  {
    id: "nav-writing",
    label: "Writing & Çeviri Laboratuvarı",
    description: "Akademik cümle kurma, paraphrase ve çeviri çalışmaları",
    href: "/writing",
    category: "reading-listening",
    icon: "pen-tool",
    searchTags: ["writing", "yazma", "çeviri", "cümle kurma"],
  },

  // E. YDS ve Sınav Hazırlığı
  {
    id: "nav-exams",
    label: "Soru Bankası & Deneme Sınavları",
    description: "YDS, YDT ve YÖKDİL çıkmış sorular ile özgün denemeler",
    href: "/exams",
    category: "exams",
    icon: "clock",
    badge: "80 Soru",
    searchTags: ["deneme", "denemeler", "soru bankası", "sınav", "çıkmış sorular", "testler", "exams"],
  },
  {
    id: "nav-yds-hub",
    label: "YDS Hazırlık Merkezi",
    description: "Kamu ve akademik personel sınavına özel çalışma merkezi",
    href: "/yds",
    category: "exams",
    icon: "target",
    searchTags: ["yds", "yabancı dil sınavı", "akademik sınav"],
  },
  {
    id: "nav-ydt-hub",
    label: "YDT (YKS-Dil) Hazırlık Merkezi",
    description: "Üniversite dil sınavı odaklı kelime, okuma ve soru merkezi",
    href: "/ydt",
    category: "exams",
    icon: "graduation-cap",
    searchTags: ["ydt", "yks dil", "üniversite hazırlık"],
  },
  {
    id: "nav-yokdil-hub",
    label: "YÖKDİL Alan Merkezi (Fen · Sağlık · Sosyal)",
    description: "3 bilim alanına ayrılmış terminoloji ve deneme merkezi",
    href: "/yokdil",
    category: "exams",
    icon: "microscope",
    searchTags: ["yökdil", "yokdil", "sağlık", "fen", "sosyal"],
  },
  {
    id: "nav-tactics",
    label: "Soru Çözüm Taktikleri (11 Soru Tipi)",
    description: "Cloze test, cümle tamamlama, çeviri ve diyalog eleme teknikleri",
    href: "/tactics",
    category: "exams",
    icon: "zap",
    searchTags: ["taktik", "taktikler", "soru tipleri", "ipuçları", "cloze test"],
  },
  {
    id: "nav-games",
    label: "Eğitsel Oyun Kütüphanesi",
    description: "Kelime ve gramer reflekslerini hızlandıran interaktif oyunlar",
    href: "/games",
    category: "exams",
    icon: "gamepad",
    badge: "Oyunlar",
    searchTags: ["oyun", "oyunlar", "games", "yarışma"],
  },

  // F. İlerleme ve İstatistik
  {
    id: "nav-progress",
    label: "İlerleme & Başarı Grafikleri",
    description: "Öğrenilen kelime sayısı, çalışma geçmişi ve net gelişimi",
    href: "/ilerleme",
    category: "progress",
    icon: "trending-up",
    searchTags: ["ilerleme", "istatistik", "grafik", "başarı", "çalışma geçmişi"],
  },
  {
    id: "nav-study-plans",
    label: "Çalışma Planları & Takvim",
    description: "30, 60, 90 ve 120 günlük kişiselleştirilmiş çalışma programı",
    href: "/study-plans",
    category: "progress",
    icon: "calendar",
    searchTags: ["plan", "planlar", "çalışma planı", "takvim", "program"],
  },
  {
    id: "nav-certificates",
    label: "Sertifikalar & Başarı Rozetleri",
    description: "Tamamlanan aşamalar ve kazanılan akademik rozetler",
    href: "/sertifikalar",
    category: "progress",
    icon: "award",
    searchTags: ["sertifika", "sertifikalar", "rozet", "başarı belgesi"],
  },

  // G. Kişiselleştirme
  {
    id: "nav-themes",
    label: "Desenli Temalar & Görünüm Galerisi",
    description: "36 özgün SVG desenli tema, açık/koyu mod ve kontrast ayarları",
    href: "/temalar",
    category: "personalization",
    icon: "palette",
    badge: "36 Desen",
    searchTags: ["tema", "temalar", "desen", "desenli tema", "karanlık mod", "aydınlık mod", "görünüm"],
  },
  {
    id: "nav-voice-settings",
    label: "Ses Aksanı, Hız & Konuşmacı QA Merkezi",
    description: "7 İngilizce aksan + Türkçe (Emel & Ahmet) ses testi ve erişilebilirlik",
    href: "/ayarlar",
    category: "personalization",
    icon: "volume-2",
    badge: "Ses QA",
    searchTags: ["ses ayarları", "aksan", "konuşma hızı", "emel", "ahmet", "erişilebilirlik", "voice qa"],
  },
  {
    id: "nav-avatars",
    label: "Profil Avatarları",
    description: "Öğrenci profil görünümü ve karakter seçimi",
    href: "/avatars",
    category: "personalization",
    icon: "sparkles",
    searchTags: ["avatar", "profil resmi", "karakter"],
  },

  // H. Hesap ve Yardım
  {
    id: "nav-account",
    label: "Hesabım & Oturum",
    description: "Profil bilgileri, sınav hedefi ve veri dışa aktarma",
    href: "/hesap",
    category: "account",
    icon: "user",
    searchTags: ["hesap", "hesabım", "profil", "oturum", "giriş", "kayıt"],
  },
  {
    id: "nav-admin",
    label: "Yönetici & Öğrenci Takip Paneli",
    description: "Öğrenci aktiviteleri, içerik denetimi ve sistem durumu",
    href: "/admin",
    category: "account",
    icon: "shield",
    searchTags: ["admin", "yönetici", "öğrenci takibi", "sistem"],
  },
];

export const NAVIGATION_CATEGORY_META: Record<
  NavigationCategoryId,
  { title: string; subtitle: string }
> = {
  start: {
    title: "Başlangıç & Çalışma Alanı",
    subtitle: "Ana sayfa, kontrol paneli ve seviye tespiti",
  },
  vocabulary: {
    title: "Kelimeler & Görsel Hafıza",
    subtitle: "Kelime çalışması, envanter, 3D kartlar ve telaffuz",
  },
  grammar: {
    title: "Gramer & Sesli Anlatım",
    subtitle: "27 gramer konusu, Emel & Ahmet sesli dersler ve testler",
  },
  "reading-listening": {
    title: "Reading & Listening Laboratuvarı",
    subtitle: "Akademik okuma parçaları, çoklu aksan dinleme ve konuşma",
  },
  exams: {
    title: "YDS · YDT · YÖKDİL Sınav Hazırlığı",
    subtitle: "Denemeler, çıkmış sorular, taktikler ve eğitsel oyunlar",
  },
  progress: {
    title: "İlerleme, Planlar & İstatistik",
    subtitle: "Çalışma takvimi, grafikler ve başarı sertifikaları",
  },
  personalization: {
    title: "Kişiselleştirme & Ses Kontrolü",
    subtitle: "Desenli temalar, açık/koyu görünüm ve ses QA merkezi",
  },
  account: {
    title: "Hesap, Ayarlar & Yardım",
    subtitle: "Profil, oturum yönetimi ve yönetici araçları",
  },
};

export const QUICK_TOOLBAR_ITEMS: NavigationItem[] = [
  NAVIGATION_ITEMS.find((i) => i.id === "nav-home")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-vocabulary")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-vocabulary-inventory")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-grammar")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-grammar-audio")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-reading")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-listening")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-exams")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-study-plans")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-tactics")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-themes")!,
  NAVIGATION_ITEMS.find((i) => i.id === "nav-progress")!,
];

export const MOBILE_BOTTOM_NAV_ITEMS = [
  { id: "bottom-home", label: "Ana Sayfa", href: "/", icon: "home" as NavigationIconId },
  { id: "bottom-vocab", label: "Kelimeler", href: "/vocabulary", icon: "book-open" as NavigationIconId },
  { id: "bottom-grammar", label: "Gramer", href: "/grammar", icon: "graduation-cap" as NavigationIconId },
  { id: "bottom-reading", label: "Reading", href: "/reading", icon: "microscope" as NavigationIconId },
];

/**
 * Türkçe karakter duyarsız (ç->c, ğ->g, ı->i, ö->o, ş->s, ü->u) arama normalleştirici
 */
export function normalizeTurkishSearch(input: string): string {
  return input
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, " ");
}

/**
 * Menü aramasına göre gruplanmış navigasyon listesi döndürür
 */
export function getFilteredNavigationGroups(query: string = ""): NavigationCategoryGroup[] {
  const normalizedQuery = normalizeTurkishSearch(query);
  const categoryOrder: NavigationCategoryId[] = [
    "start",
    "vocabulary",
    "grammar",
    "reading-listening",
    "exams",
    "progress",
    "personalization",
    "account",
  ];

  return categoryOrder
    .map((catId) => {
      const meta = NAVIGATION_CATEGORY_META[catId];
      const items = NAVIGATION_ITEMS.filter((item) => {
        if (item.category !== catId) return false;
        if (!normalizedQuery) return true;

        const haystack = normalizeTurkishSearch(
          `${item.label} ${item.description} ${meta.title} ${item.searchTags.join(" ")}`
        );
        return haystack.includes(normalizedQuery);
      });

      return {
        id: catId,
        title: meta.title,
        subtitle: meta.subtitle,
        items,
      };
    })
    .filter((group) => group.items.length > 0);
}
