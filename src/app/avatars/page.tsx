"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AVATARS,
  AVATAR_COUNT,
  MONSTER_COUNT,
  AVATAR_CATEGORIES,
  AVATAR_EXPRESSIONS,
  PROFESSIONS,
  avatarMeta,
  avatarSvg,
  syncActiveAvatar,
  AVATAR_STORAGE_KEY,
  CUSTOM_AVATAR_KEY,
} from "@/lib/avatars";
import {
  AVATAR_2000_COUNT,
  AVATAR_2000_CATEGORY_META,
  Avatar2000Category,
  getAvatar2000Page,
} from "@/lib/avatar-catalog-2000";
import { useUsage } from "@/lib/store";

interface CustomAvatar {
  id: string;
  name: string;
  dataUrl: string;
}

const CUSTOM_KEY = "yds-master-custom-avatars";
const CUSTOM_SELECTED = CUSTOM_AVATAR_KEY;

function loadCustom(): CustomAvatar[] {
  try {
    const raw = window.localStorage.getItem(CUSTOM_KEY);
    return raw ? (JSON.parse(raw) as CustomAvatar[]) : [];
  } catch {
    return [];
  }
}

function saveCustom(list: CustomAvatar[]) {
  try {
    window.localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
  } catch {
    /* safety fallback */
  }
}

export default function AvatarsPage() {
  const { usage, update } = useUsage();

  // Tab navigation
  const [activeTab, setActiveTab] = useState<"2k" | "10k" | "upload">("2k");

  // --- 2.000 Avatar State ---
  const [cat2k, setCat2k] = useState<Avatar2000Category>("all");
  const [query2k, setQuery2k] = useState("");
  const [page2k, setPage2k] = useState(0);
  const PER_PAGE_2K = 60;

  // --- 10.000 Avatar State ---
  const [cat, setCat] = useState("Tümü");
  const [prof, setProf] = useState("Tüm Meslekler");
  const [expr, setExpr] = useState<string>("Tüm İfadeler");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const PER_PAGE_10K = 60;

  // Selections
  const [selected10k, setSelected10k] = useState<number | null>(null);
  const [customSelected, setCustomSelected] = useState<string | null>(null);
  const [custom, setCustom] = useState<CustomAvatar[]>([]);
  const [uploadMsg, setUploadMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCustom(loadCustom());
    try {
      const storedCustom = window.localStorage.getItem(CUSTOM_SELECTED);
      setCustomSelected(storedCustom);
    } catch {
      /* empty */
    }
  }, []);

  // PERF & SAFETY: Sync active selection from usage or localStorage
  useEffect(() => {
    if (usage.customAvatar) {
      setCustomSelected("custom-active");
    } else if (usage.avatar !== null && usage.avatar !== undefined) {
      setSelected10k(usage.avatar);
      setCustomSelected(null);
    } else {
      try {
        const stored = window.localStorage.getItem(AVATAR_STORAGE_KEY);
        if (stored) {
          const num = parseInt(stored, 10);
          if (!isNaN(num)) setSelected10k(num);
        }
      } catch {
        /* empty */
      }
    }
  }, [usage.avatar, usage.customAvatar]);

  // 2.000 Avatar Pagination & Query
  const result2k = useMemo(() => {
    return getAvatar2000Page(page2k * PER_PAGE_2K, PER_PAGE_2K, cat2k, query2k);
  }, [page2k, cat2k, query2k]);

  const pageCount2k = Math.max(1, Math.ceil(result2k.total / PER_PAGE_2K));

  // 10.000 Avatar Filtering
  const filtered10k = useMemo(() => {
    let list = AVATARS;
    if (cat !== "Tümü") {
      list = list.filter((a) => a.category === cat);
    }
    if (prof !== "Tüm Meslekler") list = list.filter((a) => a.profession === prof);
    if (expr !== "Tüm İfadeler") list = list.filter((a) => a.expression === expr);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.profession.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          (a.expression && a.expression.toLowerCase().includes(q)) ||
          a.label.toLowerCase().includes(q)
      );
    }
    return list;
  }, [cat, prof, expr, query]);

  const pageCount10k = Math.max(1, Math.ceil(filtered10k.length / PER_PAGE_10K));
  const safePage10k = Math.min(page, pageCount10k - 1);
  const slice10k = filtered10k.slice(
    safePage10k * PER_PAGE_10K,
    safePage10k * PER_PAGE_10K + PER_PAGE_10K
  );

  const onUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    setUploadMsg("");

    // SAFETY: MIME doğrulaması
    const validMimes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/avif",
    ];
    if (!validMimes.includes(file.type) && !file.type.startsWith("image/")) {
      setUploadMsg(
        "Lütfen geçerli bir fotoğraf, resim veya hareketli GIF seç (JPEG, PNG, WebP, GIF, AVIF)."
      );
      return;
    }

    // SAFETY: Boyut sınırı 1.5 MB
    if (file.size > 1_500_000) {
      setUploadMsg("Dosya boyutu en fazla 1,5 MB olmalıdır. Lütfen daha küçük bir dosya seç.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const dataUrl = String(reader.result);
        const item: CustomAvatar = {
          id: `custom-${Date.now()}`,
          name: file.name.replace(/\.[^.]+$/, ""),
          dataUrl,
        };
        const next = [item, ...loadCustom()].slice(0, 16);
        saveCustom(next);
        setCustom(next);
        setCustomSelected(item.id);
        syncActiveAvatar(item.id, dataUrl);
        update((u) => ({ ...u, customAvatar: dataUrl }));
        setUploadMsg("Harika! Profil resmin başarıyla güncellendi. ✅");
      } catch {
        setUploadMsg("Depolama kotası aşıldı veya bir hata oluştu.");
      }
    };
    reader.onerror = () => setUploadMsg("Dosya okunamadı, lütfen tekrar dene.");
    reader.readAsDataURL(file);
  };

  const removeCustom = (id: string) => {
    const next = custom.filter((c) => c.id !== id);
    saveCustom(next);
    setCustom(next);
    if (customSelected === id) {
      setCustomSelected(null);
      syncActiveAvatar(0, null);
      update((u) => ({ ...u, customAvatar: null }));
    }
  };

  const select2kAvatar = (id: number, svg: string) => {
    const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    setCustomSelected(`2k-${id}`);
    setSelected10k(null);
    syncActiveAvatar(`2k-${id}`, dataUrl);
    update((u) => ({ ...u, customAvatar: dataUrl }));
  };

  const selectedCustom =
    custom.find((c) => c.id === customSelected) ||
    (usage.customAvatar
      ? { id: "custom-active", name: "Özel / Yaratıcı Profil Resmi", dataUrl: usage.customAvatar }
      : null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Başlık ve Parıltılı Açıklama */}
      <header className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-amber-500/10 to-cyan-500/10 border border-white/10 mb-3">
          <span className="text-sm">🌈</span>
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
            Kişiselleştirilmiş Avatar Dünyası
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-3">
          👤 <span className="rainbow-text">Avatar & Profil Galerisi</span>
        </h1>
        <p className="text-sm text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
          Tam <span className="font-black text-amber-400">2.000 yaratıcı canavar, sevimli hayvan ve emoji</span>,{" "}
          <span className="font-black text-cyan-400">10.000 meslek & karakter</span> veya kendi fotoğraf ve hareketli GIF&apos;in!
        </p>
      </header>

      {/* Seçili Aktif Avatar Gösterim Kartı */}
      {(selected10k !== null || selectedCustom) && (
        <div className="card-vibrant p-5 mb-8 flex items-center gap-4 max-w-xl mx-auto border-2 border-cyan-400/40 shadow-xl shadow-cyan-500/10 rounded-3xl">
          {selectedCustom ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={selectedCustom.dataUrl}
              alt={selectedCustom.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-400 object-cover shadow-md"
            />
          ) : (
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-cyan-400 shadow-md"
              dangerouslySetInnerHTML={{ __html: avatarSvg(selected10k as number, "preview") }}
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Aktif Profil Resmi
              </span>
            </div>
            <p className="font-black text-base sm:text-lg text-white truncate mt-1">
              {selectedCustom ? selectedCustom.name : `Avatar #${(selected10k as number) + 1}`}
            </p>
            <p className="text-xs text-slate-300 truncate">
              {selectedCustom
                ? "2.000 Yaratıcı Havuz veya Kendi Resmin/GIF"
                : `${avatarMeta(selected10k as number).name} · ${avatarMeta(selected10k as number).profession}`}
            </p>
          </div>
          <span className="text-3xl shrink-0">✨</span>
        </div>
      )}

      {/* Üst Sekme Seçici (Tab Bar) */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-2xl flex-wrap justify-center gap-1">
          <button
            onClick={() => setActiveTab("2k")}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "2k"
                ? "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-pink-500/30 scale-105"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>🌈</span>
            <span>2.000 Yaratıcı Avatar</span>
            <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-white/20">Yeni</span>
          </button>
          <button
            onClick={() => setActiveTab("10k")}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "10k"
                ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>🏛️</span>
            <span>10.000 Meslek & Karakter</span>
          </button>
          <button
            onClick={() => setActiveTab("upload")}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "upload"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>📤</span>
            <span>Resim / GIF Yükle</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SEKME 1: 2.000 YARATICI AVATAR                             */}
      {/* ======================================================== */}
      {activeTab === "2k" && (
        <section className="space-y-6">
          {/* Kategori Filtre Butonları */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {AVATAR_2000_CATEGORY_META.map((meta) => {
              const isSelected = cat2k === meta.id;
              return (
                <button
                  key={meta.id}
                  onClick={() => {
                    setCat2k(meta.id);
                    setPage2k(0);
                  }}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-gradient-to-r from-pink-500 via-amber-500 to-cyan-500 text-white border-transparent shadow-lg shadow-pink-500/25 scale-105"
                      : "border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-white/30"
                  }`}
                >
                  <span>{meta.emoji}</span>
                  <span>{meta.label}</span>
                  <span className="text-[10px] opacity-75 font-normal">({meta.count})</span>
                </button>
              );
            })}
          </div>

          {/* Arama Alanı */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                value={query2k}
                onChange={(e) => {
                  setQuery2k(e.target.value);
                  setPage2k(0);
                }}
                placeholder="🔍 Canavar, emoji, renk veya motif ara..."
                className="w-full px-5 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 shadow-inner"
              />
              {query2k && (
                <button
                  onClick={() => {
                    setQuery2k("");
                    setPage2k(0);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕ Temizle
                </button>
              )}
            </div>
          </div>

          {/* Sayfa & Toplam Bilgisi */}
          <p className="text-center text-xs text-slate-400">
            Toplam <span className="font-bold text-white">{result2k.total}</span> avatar · Sayfa{" "}
            <span className="font-bold text-white">{page2k + 1}</span> / {pageCount2k}
          </p>

          {/* Avatar Kartları Grid */}
          {result2k.items.length === 0 ? (
            <div className="card-vibrant p-8 text-center max-w-md mx-auto my-8">
              <p className="text-4xl mb-2">🔍</p>
              <p className="font-bold text-white mb-1">Eşleşen avatar bulunamadı</p>
              <p className="text-xs text-slate-400 mb-4">
                Arama kriterini değiştirerek veya filtreleri temizleyerek tekrar dene.
              </p>
              <button
                onClick={() => {
                  setCat2k("all");
                  setQuery2k("");
                  setPage2k(0);
                }}
                className="px-4 py-2 rounded-xl bg-pink-500 text-white text-xs font-bold"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3">
              {result2k.items.map((item) => {
                const isActive = customSelected === `2k-${item.id}`;
                return (
                  <button
                    key={item.id}
                    onClick={() => select2kAvatar(item.id, item.svg)}
                    className={`group relative rounded-2xl p-1.5 transition-all hover:scale-105 border-2 ${
                      isActive
                        ? "border-pink-400 shadow-lg shadow-pink-500/40 bg-pink-500/10 ring-2 ring-pink-400/30"
                        : "border-white/10 hover:border-white/40 bg-slate-900/50"
                    }`}
                    title={item.label}
                  >
                    <div
                      className="w-full aspect-square rounded-xl overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/85 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity py-1 px-1 rounded-b-xl truncate text-center font-bold">
                      {item.label}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Sayfalama Kontrolleri */}
          {pageCount2k > 1 && (
            <div className="flex justify-center items-center gap-3 pt-4">
              <button
                onClick={() => setPage2k((p) => Math.max(0, p - 1))}
                disabled={page2k === 0}
                className="px-5 py-2.5 rounded-xl border border-white/20 font-bold text-xs disabled:opacity-30 hover:bg-white/10 text-white transition-all"
              >
                ← Önceki
              </button>
              <span className="text-xs font-bold text-slate-300">
                {page2k + 1} / {pageCount2k}
              </span>
              <button
                onClick={() => setPage2k((p) => Math.min(pageCount2k - 1, p + 1))}
                disabled={page2k >= pageCount2k - 1}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 font-bold text-xs hover:scale-105 transition-transform disabled:opacity-30 text-white"
              >
                Sonraki →
              </button>
            </div>
          )}
        </section>
      )}

      {/* ======================================================== */}
      {/* SEKME 2: 10.000 MESLEK & KARAKTER KOLEKSİYONU              */}
      {/* ======================================================== */}
      {activeTab === "10k" && (
        <section className="space-y-6">
          {/* Kategori Seçicileri */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {AVATAR_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  if (c !== "Meslekler" && c !== "Tümü") {
                    setProf("Tüm Meslekler");
                  }
                  setPage(0);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                  cat === c
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-md shadow-cyan-500/25 scale-105"
                    : "border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-white/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Meslek, İfade ve Arama Seçicileri */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <select
              value={prof}
              onChange={(e) => {
                setProf(e.target.value);
                setPage(0);
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-cyan-400 max-w-[240px]"
            >
              <option value="Tüm Meslekler">🧑‍💼 Tüm Meslekler</option>
              {PROFESSIONS.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.emoji} {p.name}
                </option>
              ))}
            </select>

            <select
              value={expr}
              onChange={(e) => {
                setExpr(e.target.value);
                setPage(0);
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-cyan-400 max-w-[200px]"
            >
              {AVATAR_EXPRESSIONS.map((ex) => (
                <option key={ex} value={ex}>
                  {ex === "Tüm İfadeler" ? "🎭 Tüm İfadeler" : `✨ ${ex}`}
                </option>
              ))}
            </select>

            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(0);
              }}
              placeholder="🔍 Avatar veya meslek ara..."
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 w-48 sm:w-56"
            />
          </div>

          <p className="text-center text-xs text-slate-400">
            {filtered10k.length} avatar bulundu · Sayfa {safePage10k + 1} / {pageCount10k}
          </p>

          {/* 10.000 Grid */}
          {filtered10k.length === 0 ? (
            <div className="card-vibrant p-8 text-center max-w-md mx-auto my-8">
              <p className="text-4xl mb-2">🔍</p>
              <p className="font-bold text-white mb-1">Eşleşen avatar bulunamadı</p>
              <button
                onClick={() => {
                  setCat("Tümü");
                  setProf("Tüm Meslekler");
                  setExpr("Tüm İfadeler");
                  setQuery("");
                  setPage(0);
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-bold mt-3"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3">
              {slice10k.map((a) => {
                const isSelected = selected10k === a.id && !selectedCustom;
                return (
                  <button
                    key={a.id}
                    onClick={() => {
                      const numId =
                        typeof a.id === "number" ? a.id : parseInt(String(a.id), 10) || 0;
                      setSelected10k(numId);
                      setCustomSelected(null);
                      syncActiveAvatar(numId, null);
                      update((u) => ({ ...u, avatar: numId, customAvatar: null }));
                    }}
                    className={`group relative rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
                      isSelected
                        ? "border-cyan-400 shadow-lg shadow-cyan-500/40"
                        : "border-transparent bg-slate-900/50"
                    }`}
                    title={`#${typeof a.id === "number" ? a.id + 1 : a.id} ${a.name} · ${
                      a.profession
                    }`}
                  >
                    <div
                      className="w-full aspect-square"
                      dangerouslySetInnerHTML={{ __html: avatarSvg(a.id, "grid") }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/85 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity py-0.5 truncate px-1 font-medium">
                      {a.professionEmoji} {a.profession}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Sayfalama */}
          {pageCount10k > 1 && (
            <div className="flex justify-center items-center gap-3 pt-4">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={safePage10k === 0}
                className="px-5 py-2.5 rounded-xl border border-white/20 font-bold text-xs disabled:opacity-30 hover:bg-white/10 text-white"
              >
                ← Önceki
              </button>
              <span className="text-xs font-bold text-slate-300">
                {safePage10k + 1} / {pageCount10k}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(pageCount10k - 1, p + 1))}
                disabled={safePage10k >= pageCount10k - 1}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xs hover:scale-105 disabled:opacity-30 text-white"
              >
                Sonraki →
              </button>
            </div>
          )}
        </section>
      )}

      {/* ======================================================== */}
      {/* SEKME 3: KENDİ RESMİNİ / GIF'İNİ YÜKLE                      */}
      {/* ======================================================== */}
      {activeTab === "upload" && (
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="card-vibrant p-6 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20">
                📤
              </div>
              <div className="flex-1 min-w-[200px]">
                <h3 className="font-black text-lg text-white">Kendi Resmini veya GIF&apos;ini Yükle</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Kendi fotoğrafın, anime karakterin veya favori hareketli GIF animasyonun profil
                  resmin olsun (max 1.5 MB).
                </p>
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 font-black text-xs sm:text-sm text-white shadow-lg shadow-emerald-500/25 hover:scale-105 transition-transform"
              >
                📁 Dosya Seç
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                className="hidden"
                onChange={(e) => onUpload(e.target.files)}
              />
            </div>

            {uploadMsg && (
              <p className="mt-4 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-4 py-2.5">
                {uploadMsg}
              </p>
            )}

            {/* Yüklenenler Geçmişi */}
            {custom.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Önceden Yüklediklerin
                </p>
                <div className="flex flex-wrap gap-3">
                  {custom.map((c) => (
                    <div key={c.id} className="relative group">
                      <button
                        onClick={() => {
                          setCustomSelected(c.id);
                          setSelected10k(null);
                          syncActiveAvatar(c.id, c.dataUrl);
                          update((u) => ({ ...u, customAvatar: c.dataUrl }));
                        }}
                        className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                          customSelected === c.id
                            ? "border-emerald-400 shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400/30"
                            : "border-white/20 hover:border-white/50"
                        }`}
                        title={c.name}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.dataUrl}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                      <button
                        onClick={() => removeCustom(c.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-black shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                        title="Sil"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
