"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  INVENTORY_ITEMS,
  INVENTORY_METRICS,
  VocabularyInventoryItem,
  CefrLevel,
  loadInventoryUserData,
  saveInventoryUserData,
  InventoryUserData,
  downloadInventoryCsv,
  exportInventoryToJson,
} from "@/lib/data-inventory";
import { awardPointsIdempotent } from "@/lib/gamification/points-config";
import { useUsage } from "@/lib/store";
import { clientAudio, UserVoicePreferences } from "@/lib/tts/audio-client";
import { getVoiceProfile, ACCENT_METADATA_LIST } from "@/lib/tts/voice-registry";
import AccentVoicePicker from "@/components/tts/AccentVoicePicker";
import WordPronunciationBar from "@/components/vocabulary/WordPronunciationBar";
import AccentBar from "@/components/AccentBar";
import {
  ACCENTS,
  getStoredAccent,
  getStoredGender,
  setStoredAccent,
  setStoredGender,
  speakWithAccent,
  type AccentId,
  type Gender,
} from "@/lib/accents";

const CEFR_TABS: { label: string; value: CefrLevel | "ALL" }[] = [
  { label: "Tümü", value: "ALL" },
  { label: "A1 (Başlangıç)", value: "A1" },
  { label: "A2 (Temel)", value: "A2" },
  { label: "B1 (Orta)", value: "B1" },
  { label: "B2 (İyi)", value: "B2" },
  { label: "C1 (İleri)", value: "C1" },
  { label: "C2 (Usta)", value: "C2" },
  { label: "Diğer", value: "UNCLASSIFIED" },
];

export default function VocabularyInventoryPage() {
  const { addXp } = useUsage();

  // State
  const [activeTab, setActiveTab] = useState<CefrLevel | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [posFilter, setPosFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "LEARNED" | "UNLEARNED">("ALL");
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Selected word for detail modal
  const [selectedWord, setSelectedWord] = useState<VocabularyInventoryItem | null>(null);

  // User notes and customizations store
  const [userData, setUserData] = useState<InventoryUserData>({
    notes: {},
    learnedIds: [],
    customWords: [],
    lastUpdated: 0,
  });

  // Note editing state for selected word
  const [currentNote, setCurrentNote] = useState("");

  // Voice preferences & natural playback state
  const [voicePrefs, setVoicePrefs] = useState<UserVoicePreferences>(() => clientAudio.getPreferences());
  const [globalAccent, setGlobalAccent] = useState<AccentId>(() => getStoredAccent());
  const [globalGender, setGlobalGender] = useState<Gender>(() => getStoredGender());
  const [showVoicePicker, setShowVoicePicker] = useState(false);
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  useEffect(() => {
    const data = loadInventoryUserData();
    setUserData(data);

    const handleVoiceChange = () => {
      setVoicePrefs(clientAudio.getPreferences());
      setGlobalAccent(getStoredAccent());
      setGlobalGender(getStoredGender());
    };
    window.addEventListener("yds:voice-prefs-changed", handleVoiceChange);
    return () => window.removeEventListener("yds:voice-prefs-changed", handleVoiceChange);
  }, []);

  const selectGlobalAccent = (acc: AccentId) => {
    setGlobalAccent(acc);
    setStoredAccent(acc);
  };

  const selectGlobalGender = (g: Gender) => {
    setGlobalGender(g);
    setStoredGender(g);
  };

  const activeAccentObj = useMemo(
    () => ACCENTS.find((a) => a.id === globalAccent) || ACCENTS[0],
    [globalAccent]
  );

  // Update note when selected word changes
  useEffect(() => {
    if (selectedWord) {
      setCurrentNote(userData.notes[selectedWord.id] || "");
    }
  }, [selectedWord, userData.notes]);

  // Handle note saving
  const handleSaveNote = () => {
    if (!selectedWord) return;
    const updatedNotes = { ...userData.notes, [selectedWord.id]: currentNote.trim() };
    const updated: InventoryUserData = {
      ...userData,
      notes: updatedNotes,
      lastUpdated: Date.now(),
    };
    setUserData(updated);
    saveInventoryUserData(updated);
  };

  // Handle learned toggle
  const toggleLearned = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isCurrentlyLearned = userData.learnedIds.includes(id);
    let updatedIds: string[];

    if (isCurrentlyLearned) {
      updatedIds = userData.learnedIds.filter((item) => item !== id);
    } else {
      updatedIds = [...userData.learnedIds, id];
      // Award XP via gamification
      try {
        if (addXp) {
          addXp(3, `vocab_learned_${id}`, "flashcard_first");
        }
      } catch {
        /* safety */
      }
    }

    const updated: InventoryUserData = {
      ...userData,
      learnedIds: updatedIds,
      lastUpdated: Date.now(),
    };
    setUserData(updated);
    saveInventoryUserData(updated);
  };

  // Filtered items
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return (INVENTORY_ITEMS || []).filter((item) => {
      // 1. Tab filter
      if (activeTab !== "ALL" && item.level !== activeTab) return false;

      // 2. POS filter
      if (posFilter !== "ALL" && item.partOfSpeech !== posFilter) return false;

      // 3. Status filter
      const isLearned = userData.learnedIds.includes(item.id);
      if (statusFilter === "LEARNED" && !isLearned) return false;
      if (statusFilter === "UNLEARNED" && isLearned) return false;

      // 4. Search query
      if (q) {
        const termMatch = item.word.toLowerCase().includes(q);
        const trMatch = item.turkishMeanings?.some((m) => m.toLowerCase().includes(q));
        const enMatch = item.englishDefinition?.toLowerCase().includes(q);
        const noteMatch = userData.notes[item.id]?.toLowerCase().includes(q);
        const exampleMatch =
          item.example?.toLowerCase().includes(q) || item.exampleTr?.toLowerCase().includes(q);
        if (!termMatch && !trMatch && !enMatch && !noteMatch && !exampleMatch) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, posFilter, statusFilter, searchQuery, userData]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [filteredItems, currentPage, pageSize]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, posFilter, statusFilter, searchQuery, pageSize]);

  // Audio pronunciation with natural 12-voice multi-accent TTS
  const speakTerm = (word: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (playingWord === word) {
      clientAudio.stopAll();
      setPlayingWord(null);
      return;
    }
    setPlayingWord(word);
    speakWithAccent(word, globalAccent, globalGender);
    setTimeout(() => {
      setPlayingWord((curr) => (curr === word ? null : curr));
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Stats Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-cyan-950/60 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                CEFR A1–C2 Kapsamlı Kelime Havuzu
              </span>
              <span className="text-xs text-white/50">&bull; Salt-Okunur Güvenli Veri</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Kelime <span className="gradient-text">Envanteri</span> 📦
            </h1>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-2xl">
              YDS, YÖKDİL ve YDT için filtrelenebilir, seviyeli, Türkçe açıklamalı ve telaffuzlu 485 akademik kelime envanteri. Kişisel notlarını ekle ve öğrendiklerini işaretle!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setShowVoicePicker(!showVoicePicker)}
              className="px-4 py-2.5 rounded-xl border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-bold text-cyan-300 transition-all flex items-center gap-2 shadow-sm"
              title="Doğal Çoklu Aksan Ses Motoru (6 Aksan, 12 Doğal Konuşmacı)"
            >
              <span className="text-base">{activeAccentObj.flag}</span>
              <span>{activeAccentObj.label} Aksanı</span>
              <span className="text-[10px] text-cyan-300/80 bg-cyan-400/20 border border-cyan-400/30 px-1.5 py-0.5 rounded-full font-bold">
                {globalGender === "female" ? "Kadın" : "Erkek"}
              </span>
              <span className="text-xs text-white/50">{showVoicePicker ? "▲" : "▼"}</span>
            </button>
            <button
              onClick={() => downloadInventoryCsv(filteredItems)}
              className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors flex items-center gap-2"
              title="Excel ve Sheets ile uyumlu güvenli CSV dışa aktarımı"
            >
              <span>📊</span> CSV İndir
            </button>
            <button
              onClick={() => exportInventoryToJson(filteredItems, userData)}
              className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors flex items-center gap-2"
              title="Tüm veriyi JSON formatında indir"
            >
              <span>💾</span> JSON İndir
            </button>
          </div>
        </div>

        {/* Expandable Natural Voice Engine Picker */}
        {showVoicePicker && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-900/90 border border-cyan-400/30 backdrop-blur-xl shadow-2xl anim-pop">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🎙️</span>
                <div>
                  <h3 className="text-sm font-black text-white">
                    Doğal Çoklu Aksan Ses Sistemi (12 Konuşmacı)
                  </h3>
                  <p className="text-xs text-white/50">
                    Amerikan, İngiliz, Kanada, Avustralya, Yeni Zelanda ve Hint aksanlarında kadın & erkek sesleri seç
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowVoicePicker(false)}
                className="text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                ✕ Kapat
              </button>
            </div>
            <AccentVoicePicker compact={false} />
          </div>
        )}

        {/* Level metrics pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mt-8 pt-6 border-t border-white/10">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="block text-[11px] font-bold text-white/50 uppercase">Toplam</span>
            <span className="text-xl font-black text-white">{INVENTORY_METRICS.total}</span>
          </div>
          {(["A1", "A2", "B1", "B2", "C1", "C2", "UNCLASSIFIED"] as CefrLevel[]).map((lvl) => (
            <div
              key={lvl}
              onClick={() => setActiveTab(lvl)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all text-center ${
                activeTab === lvl
                  ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
              }`}
            >
              <span className="block text-[11px] font-bold text-white/50 uppercase">{lvl}</span>
              <span className="text-xl font-black">{INVENTORY_METRICS[lvl]}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Controls & Filters Bar */}
      <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-4">
        {/* CEFR Level Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {CEFR_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Aksan × Kadın/Erkek Doğal Ses Seçim Barı */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-cyan-400/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🎙️</span>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Doğal Ses & Aksan Seçimi:</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-bold">
                  {activeAccentObj.flag} {activeAccentObj.label} &bull; {globalGender === "female" ? "Kadın Sesi" : "Erkek Sesi"}
                </span>
              </div>
              <p className="text-[10px] text-white/50">
                Tüm kelime envanterini ve detaylarını seçtiğin doğal aksan ve cinsiyetle dinle
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* 6 Aksan Butonları */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              {ACCENTS.map((a) => {
                const isActive = globalAccent === a.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => selectGlobalAccent(a.id)}
                    title={`${a.label} Aksanı`}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 border ${
                      isActive
                        ? "bg-cyan-500/30 border-cyan-400 text-white shadow-sm"
                        : "border-transparent text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{a.flag}</span>
                    <span className="hidden sm:inline text-[11px]">{a.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Kadın / Erkek Cinsiyet Butonları */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              {(["female", "male"] as Gender[]).map((g) => {
                const isActive = globalGender === g;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => selectGlobalGender(g)}
                    title={g === "female" ? "Kadın Sesi" : "Erkek Sesi"}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-sm"
                        : "border-transparent text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {g === "female" ? "👩 Kadın" : "👨 Erkek"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search & Select Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          <div className="sm:col-span-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kelime, Türkçe anlam, açıklama veya notlarda ara..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-white/30"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm">
              🔍
            </span>
          </div>

          <div className="sm:col-span-3">
            <select
              value={posFilter}
              onChange={(e) => setPosFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-xs"
            >
              <option value="ALL">Tüm Kelime Türleri</option>
              <option value="noun">İsim (Noun)</option>
              <option value="verb">Fiil (Verb)</option>
              <option value="adjective">Sıfat (Adjective)</option>
              <option value="adverb">Zarf (Adverb)</option>
              <option value="phrasal_verb">Deyimsel Fiil (Phrasal Verb)</option>
              <option value="preposition">Edat (Preposition)</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-xs"
            >
              <option value="ALL">Öğrenme Durumu: Tümü</option>
              <option value="LEARNED">✅ Yalnızca Öğrenilenler ({userData.learnedIds.length})</option>
              <option value="UNLEARNED">⏳ Çalışılacaklar</option>
            </select>
          </div>
        </div>

        {/* Status Count & Page Size */}
        <div className="flex items-center justify-between text-xs text-white/50 pt-2">
          <div>
            Toplam <strong>{filteredItems.length}</strong> kelime listeleniyor. (Öğrenilen: <strong>{userData.learnedIds.length}</strong>)
          </div>
          <div className="flex items-center gap-2">
            <span>Sayfa Başına:</span>
            {[25, 50, 100].map((size) => (
              <button
                key={size}
                onClick={() => setPageSize(size)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                  pageSize === size
                    ? "bg-white/20 text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vocabulary Table / Card Grid */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-[11px] font-bold uppercase tracking-wider text-white/50">
                <th className="py-3.5 px-4 w-12 text-center">Durum</th>
                <th className="py-3.5 px-4">Kelime (Word)</th>
                <th className="py-3.5 px-4">Seviye & Tür</th>
                <th className="py-3.5 px-4">Türkçe Anlamı</th>
                <th className="py-3.5 px-4 hidden md:table-cell">Açıklama / Hafıza Kodu</th>
                <th className="py-3.5 px-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {paginatedItems.map((item) => {
                const isLearned = userData.learnedIds.includes(item.id);
                const hasNote = !!userData.notes[item.id];

                return (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedWord(item)}
                    className="hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={(e) => toggleLearned(item.id, e)}
                        title={isLearned ? "Öğrenildi olarak işaretlendi" : "Öğrenildi olarak işaretle (+10 XP)"}
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center text-xs transition-all ${
                          isLearned
                            ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                            : "border-white/20 text-transparent hover:border-white/40"
                        }`}
                      >
                        ✓
                      </button>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {item.word}
                        </span>
                        <button
                          onClick={(e) => speakTerm(item.word, e)}
                          title={`${activeAccentObj.flag} ${activeAccentObj.label} (${globalGender === "female" ? "Kadın" : "Erkek"}) - Telaffuzu Dinle`}
                          className={`text-xs px-2 py-0.5 rounded-lg border font-medium transition-all flex items-center gap-1 shrink-0 ${
                            playingWord === item.word
                              ? "bg-cyan-500/30 border-cyan-400 text-cyan-300 animate-pulse shadow-sm"
                              : "border-white/10 bg-white/5 text-white/60 hover:text-cyan-300 hover:border-cyan-400/40"
                          }`}
                        >
                          <span>{playingWord === item.word ? "🔊" : "🔈"}</span>
                          <span className="text-[11px]">{activeAccentObj.flag}</span>
                          <span className="text-[10px] text-white/50 hidden sm:inline">
                            {globalGender === "female" ? "Kadın" : "Erkek"}
                          </span>
                        </button>
                        {hasNote && (
                          <span
                            title="Kişisel notun var"
                            className="text-amber-400 text-xs"
                          >
                            📝
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                          {item.level}
                        </span>
                        {item.partOfSpeech && (
                          <span className="text-xs text-white/50 capitalize">
                            {item.partOfSpeech.replace("_", " ")}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4 font-medium text-white/90">
                      {item.turkishMeanings?.join(", ")}
                    </td>

                    <td className="py-3 px-4 text-xs text-white/60 hidden md:table-cell max-w-xs truncate">
                      {item.englishDefinition || item.example || "—"}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setSelectedWord(item)}
                        className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-400/40 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                      >
                        Detay 🔍
                      </button>
                    </td>
                  </tr>
                );
              })}

              {paginatedItems.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-white/40 text-sm">
                    Aramanıza uygun kelime bulunamadı kanka. Filtreleri temizlemeyi deneyin!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <div>
              Sayfa <strong>{currentPage}</strong> / {totalPages}
            </div>
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                ← Önceki
              </button>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                Sonraki →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Word Detail Modal */}
      {selectedWord && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-sm">
                  {selectedWord.level}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    {selectedWord.word}
                    <button
                      onClick={() => speakTerm(selectedWord.word)}
                      className={`text-base p-1.5 rounded-lg border transition-all ${
                        playingWord === selectedWord.word
                          ? "bg-cyan-500/30 border-cyan-400 text-cyan-300 animate-pulse"
                          : "border-transparent text-cyan-400 hover:text-cyan-300 hover:bg-white/5"
                      }`}
                      title={`${activeAccentObj.flag} ${activeAccentObj.label} (${globalGender === "female" ? "Kadın" : "Erkek"}) - Telaffuzu Dinle`}
                    >
                      {playingWord === selectedWord.word ? "🔊" : "🔈"}
                    </button>
                  </h3>
                  {selectedWord.partOfSpeech && (
                    <span className="text-xs text-white/50 capitalize">
                      {selectedWord.partOfSpeech.replace("_", " ")}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedWord(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Natural Pronunciation & Multi-Accent Practice Bar */}
              <div className="rounded-2xl bg-white/[0.04] border border-cyan-400/20 p-4 shadow-inner space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <span>🎙️</span> Çoklu Aksan Telaffuz & Konuşma Pratiği
                  </span>
                  <span className="text-[10px] text-white/50">
                    6 Aksan &bull; 12 Doğal Konuşmacı &bull; Mikrofon
                  </span>
                </div>
                <WordPronunciationBar
                  word={selectedWord.word}
                  sentence={selectedWord.example}
                />

                {/* 12 Sesli Tüm Aksanları ve Cinsiyetleri Dinle */}
                <div className="pt-3 border-t border-white/10">
                  <AccentBar text={selectedWord.word} />
                </div>
              </div>

              {/* Meaning and Definition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    Türkçe Anlamı
                  </span>
                  <p className="text-lg font-bold text-white">
                    {selectedWord.turkishMeanings?.join(", ")}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                    Açıklama / Tanım
                  </span>
                  <p className="text-sm text-white/80">
                    {selectedWord.englishDefinition || "Akademik YDS hedef kelimesi."}
                  </p>
                </div>
              </div>

              {/* Example Sentences */}
              {selectedWord.example && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">
                    Örnek Cümle
                  </h4>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="text-sm font-semibold text-white/90">&ldquo;{selectedWord.example}&rdquo;</p>
                    {selectedWord.exampleTr && (
                      <p className="text-xs text-white/50">{selectedWord.exampleTr}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Collocations */}
              {selectedWord.collocations && selectedWord.collocations.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                    Birlikte Kullanımlar (Collocations)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWord.collocations.map((col, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 font-medium"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Personal Note Editor */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <span>📝</span> Kişisel Çalışma Notun
                  </label>
                  <span className="text-[10px] text-white/40">Tarayıcında saklanır</span>
                </div>
                <textarea
                  rows={3}
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder="Bu kelimeyle ilgili aklında tutma ipucunu veya kendi örnek cümleni yaz..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs resize-none"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveNote}
                    className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Notu Kaydet 💾
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between">
              <button
                onClick={() => toggleLearned(selectedWord.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  userData.learnedIds.includes(selectedWord.id)
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <span>{userData.learnedIds.includes(selectedWord.id) ? "✓ Öğrenildi" : "○ Öğrendim Olarak İşaretle"}</span>
              </button>

              <button
                onClick={() => setSelectedWord(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
