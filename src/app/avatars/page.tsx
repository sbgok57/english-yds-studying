"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AVATARS,
  AVATAR_COUNT,
  MONSTER_COUNT,
  AVATAR_CATEGORIES,
  PROFESSIONS,
  avatarMeta,
  avatarSvg,
  syncActiveAvatar,
  AVATAR_STORAGE_KEY,
  CUSTOM_AVATAR_KEY,
} from "@/lib/avatars";
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
    /* boş */
  }
}

export default function AvatarsPage() {
  const { usage, update } = useUsage();
  const [cat, setCat] = useState("Tümü");
  const [prof, setProf] = useState("Tüm Meslekler");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [customSelected, setCustomSelected] = useState<string | null>(null);
  const [custom, setCustom] = useState<CustomAvatar[]>([]);
  const [uploadMsg, setUploadMsg] = useState("");
  const [page, setPage] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const PER_PAGE = 60;

  useEffect(() => {
    setCustom(loadCustom());
    try {
      const storedCustom = window.localStorage.getItem(CUSTOM_SELECTED);
      setCustomSelected(storedCustom);
    } catch {
      /* boş */
    }
  }, []);

  // PERF & SAFETY: Sync active selection from usage or localStorage
  useEffect(() => {
    if (usage.customAvatar) {
      setCustomSelected("custom-active");
    } else if (usage.avatar !== null && usage.avatar !== undefined) {
      setSelected(usage.avatar);
      setCustomSelected(null);
    } else {
      try {
        const stored = window.localStorage.getItem(AVATAR_STORAGE_KEY);
        if (stored) {
          const num = parseInt(stored, 10);
          if (!isNaN(num)) setSelected(num);
        }
      } catch {
        /* empty */
      }
    }
  }, [usage.avatar, usage.customAvatar]);

  const filtered = useMemo(() => {
    let list = AVATARS;
    if (cat !== "Tümü") {
      list = list.filter((a) => a.category === cat);
    }
    if (prof !== "Tüm Meslekler") list = list.filter((a) => a.profession === prof);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.profession.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.label.toLowerCase().includes(q)
      );
    }
    return list;
  }, [cat, prof, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, pageCount - 1);
  const slice = filtered.slice(safePage * PER_PAGE, safePage * PER_PAGE + PER_PAGE);

  const onUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    setUploadMsg("");
    
    // SAFETY: MIME doğrulaması
    const validMimes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];
    if (!validMimes.includes(file.type) && !file.type.startsWith("image/")) {
      setUploadMsg("Lütfen geçerli bir fotoğraf, resim veya hareketli GIF seç kanka (JPEG, PNG, WebP, GIF, AVIF).");
      return;
    }
    
    // SAFETY: Boyut sınırı 1.5 MB
    if (file.size > 1_500_000) {
      setUploadMsg("Dosya boyutu en fazla 1,5 MB olmalıdır kanka. Lütfen daha küçük bir dosya seç.");
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
        const next = [item, ...loadCustom()].slice(0, 12);
        saveCustom(next);
        setCustom(next);
        setCustomSelected(item.id);
        syncActiveAvatar(item.id, dataUrl);
        update((u) => ({ ...u, customAvatar: dataUrl }));
        setUploadMsg("Harika! Profil resmin başarıyla güncellendi. ✅");
      } catch (err) {
        setUploadMsg("Depolama kotası aşıldı veya bir hata oluştu kanka.");
      }
    };
    reader.onerror = () => setUploadMsg("Dosya okunamadı kanka, lütfen tekrar dene.");
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

  const selectedCustom = custom.find((c) => c.id === customSelected) || (usage.customAvatar ? { id: "custom-active", name: "Özel Profil Resmi", dataUrl: usage.customAvatar } : null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          👤 <span className="gradient-text">Avatar Galerisi</span>
        </h1>
        <p className="text-white/60">
          <span className="font-black text-cyan-300">{AVATAR_COUNT.toLocaleString("tr-TR")}</span> benzersiz avatar ·{" "}
          <span className="font-black text-pink-300">{MONSTER_COUNT.toLocaleString("tr-TR")} canavar</span> ·{" "}
          <span className="font-black text-amber-300">{PROFESSIONS.length} meslek</span> · gerçekçi portreler, komik & motive edici karakterler
        </p>
      </header>

      {/* Kendi fotoğraf/GIF yükleme */}
      <div className="card-vibrant p-5 mb-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-3xl">📤</div>
          <div className="flex-1 min-w-[200px]">
            <p className="font-black">Kendi Fotoğraf / Resim / GIF'ini Yükle</p>
            <p className="text-xs text-white/50">
              Profil resmin olur. Tarayıcına güvenle kaydedilir (max 1,5 MB). Animasyonlu GIF desteklenir.
            </p>
          </div>
          <button
            onClick={() => fileRef.current?.click()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm hover:scale-105 transition-transform"
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
          <p className="mt-3 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-3 py-2">
            {uploadMsg}
          </p>
        )}
        {custom.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {custom.map((c) => (
              <div key={c.id} className="relative group">
                <button
                  onClick={() => {
                    setCustomSelected(c.id);
                    setSelected(null);
                    syncActiveAvatar(c.id, c.dataUrl);
                    update((u) => ({ ...u, customAvatar: c.dataUrl }));
                  }}
                  className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${
                    customSelected === c.id
                      ? "border-cyan-400 shadow-lg shadow-cyan-500/30"
                      : "border-white/20"
                  }`}
                  title={c.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.dataUrl} alt={c.name} className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => removeCustom(c.id)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black hidden group-hover:flex items-center justify-center"
                  title="Sil"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Seçili avatar */}
      {(selected !== null || selectedCustom) && (
        <div className="card-vibrant p-4 mb-6 flex items-center gap-4 max-w-md mx-auto anim-pop">
          {selectedCustom ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={selectedCustom.dataUrl}
              alt={selectedCustom.name}
              className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/20 object-cover"
            />
          ) : (
            <div
              className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/20"
              dangerouslySetInnerHTML={{ __html: avatarSvg(selected as number, "preview") }}
            />
          )}
          <div>
            <p className="font-black">
              {selectedCustom ? selectedCustom.name : `Avatar #${(selected as number) + 1}`}
            </p>
            <p className="text-sm text-white/60">
              {selectedCustom
                ? "Kendi yüklediğin resim"
                : `${avatarMeta(selected as number).name} · ${avatarMeta(selected as number).profession}`}
            </p>
          </div>
          <span className="ml-auto text-2xl">✅</span>
        </div>
      )}

      {/* Filtreler */}
      <div className="flex flex-wrap items-center gap-2 justify-center mb-4">
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
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
              cat === c
                ? "bg-gradient-to-r from-pink-500 to-purple-600 border-transparent text-white shadow-md shadow-pink-500/20"
                : "border-white/15 text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 justify-center mb-8">
        <select
          value={prof}
          onChange={(e) => {
            setProf(e.target.value);
            setPage(0);
          }}
          className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm font-bold text-white/80 focus:outline-none focus:border-cyan-400 max-w-[260px]"
        >
          <option value="Tüm Meslekler" className="bg-slate-900 text-white">🧑‍💼 Tüm Meslekler</option>
          {PROFESSIONS.map((p) => (
            <option key={p.name} value={p.name} className="bg-slate-900 text-white">
              {p.emoji} {p.name}
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
          className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-cyan-400 w-52"
        />
      </div>

      <p className="text-center text-xs text-white/40 mb-4">
        {filtered.length} avatar bulundu · sayfa {safePage + 1}/{pageCount}
      </p>

      {/* Grid or Empty State */}
      {filtered.length === 0 ? (
        <div className="card-vibrant p-8 text-center max-w-md mx-auto my-8">
          <p className="text-4xl mb-2">🔍</p>
          <p className="font-bold text-white mb-1">Eşleşen avatar bulunamadı</p>
          <p className="text-xs text-white/50 mb-4">Arama kriterini değiştirerek veya filtreleri sıfırlayarak arayabilirsin.</p>
          <button
            onClick={() => {
              setCat("Tümü");
              setProf("Tüm Meslekler");
              setQuery("");
              setPage(0);
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold hover:scale-105 transition-transform"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3">
          {slice.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                const numId = typeof a.id === "number" ? a.id : parseInt(String(a.id), 10) || 0;
                setSelected(numId);
                setCustomSelected(null);
                syncActiveAvatar(numId, null);
                update((u) => ({ ...u, avatar: numId, customAvatar: null }));
              }}
              className={`group relative rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
                selected === a.id && !selectedCustom ? "border-cyan-400 shadow-lg shadow-cyan-500/30" : "border-transparent"
              }`}
              title={`#${typeof a.id === "number" ? a.id + 1 : a.id} ${a.name} · ${a.profession}`}
            >
              <div
                className="w-full aspect-square"
                dangerouslySetInnerHTML={{ __html: avatarSvg(a.id, "grid") }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 text-[9px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity py-0.5 truncate px-1">
                {a.professionEmoji} {a.profession}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Sayfalama */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={safePage === 0}
            className="px-5 py-2.5 rounded-xl border border-white/20 font-bold disabled:opacity-30 hover:bg-white/10 transition-all text-white"
          >
            ← Önceki
          </button>
          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={safePage >= pageCount - 1}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform disabled:opacity-30 text-white"
          >
            Sonraki →
          </button>
        </div>
      )}
    </div>
  );
}
