"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  PRESET_STUDY_PLANS,
  LEVEL_STUDY_GUIDES,
  generateCustomStudyPlan,
  loadSavedStudyPlans,
  saveStudyPlans,
  togglePlanTask,
  StudyPlan,
  CefrLevel,
  LevelStudyGuide,
} from "@/lib/data-study-plans";
import { awardPointsIdempotent } from "@/lib/gamification/points-config";
import { useUsage } from "@/lib/store";

export default function StudyPlansPage() {
  const { addXp } = useUsage();

  const [activeTab, setActiveTab] = useState<"MY_PLAN" | "PRESETS" | "GENERATOR" | "GUIDES">("MY_PLAN");
  const [plans, setPlans] = useState<StudyPlan[]>(() => PRESET_STUDY_PLANS || []);
  const [selectedPreset, setSelectedPreset] = useState<StudyPlan | null>(null);

  // Guide tab level
  const [selectedGuideLevel, setSelectedGuideLevel] = useState<CefrLevel>("B1");

  // Generator form state
  const [genCurrentLevel, setGenCurrentLevel] = useState<CefrLevel>("A2");
  const [genTargetLevel, setGenTargetLevel] = useState<CefrLevel | "YDS">("B2");
  const [genTargetScore, setGenTargetScore] = useState<number>(75);
  const [genDays, setGenDays] = useState<number>(60);
  const [genMinutes, setGenMinutes] = useState<number>(60);

  useEffect(() => {
    const saved = loadSavedStudyPlans();
    if (saved.length > 0) {
      setPlans(saved);
    }
  }, []);

  const activePlan = useMemo(() => {
    return plans.find((p) => p.status === "active") || plans[0] || null;
  }, [plans]);

  // Handle task toggle
  const handleToggleTask = (dayNum: number, taskId: string) => {
    if (!activePlan) return;
    const { updatedPlans, isCompleted } = togglePlanTask(activePlan.id, dayNum, taskId);
    setPlans(updatedPlans);

    if (isCompleted) {
      try {
        if (addXp) {
          addXp(20, `plan_task_${activePlan.id}_${dayNum}_${taskId}`, "study_plan_daily");
        }
      } catch {
        /* safety */
      }
    }
  };

  // Start a preset plan
  const handleStartPreset = (preset: StudyPlan) => {
    const existingIndex = plans.findIndex((p) => p.id === preset.id);
    let updated: StudyPlan[];

    if (existingIndex >= 0) {
      updated = plans.map((p, idx) => ({
        ...p,
        status: idx === existingIndex ? "active" : "paused",
      }));
    } else {
      updated = [
        { ...preset, status: "active", createdAt: Date.now() },
        ...plans.map((p) => ({ ...p, status: "paused" as const })),
      ];
    }

    setPlans(updated);
    saveStudyPlans(updated);
    setActiveTab("MY_PLAN");
  };

  // Generate and activate custom plan
  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlan = generateCustomStudyPlan({
      currentLevel: genCurrentLevel,
      targetLevel: genTargetLevel,
      targetScore: genTargetScore,
      totalDays: genDays,
      dailyMinutes: genMinutes,
    });

    const updated: StudyPlan[] = [
      newPlan,
      ...plans.map((p) => ({ ...p, status: "paused" as const })),
    ];
    setPlans(updated);
    saveStudyPlans(updated);
    setActiveTab("MY_PLAN");
  };

  // Calculate plan progress
  const planProgress = useMemo(() => {
    if (!activePlan || !activePlan.weeks) return { total: 0, completed: 0, percent: 0 };
    let total = 0;
    let completed = 0;

    activePlan.weeks.forEach((w) => {
      w?.days?.forEach((d) => {
        d?.tasks?.forEach((t) => {
          total++;
          if (t?.completed) completed++;
        });
      });
    });

    return {
      total,
      completed,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [activePlan]);

  const currentGuide: LevelStudyGuide = LEVEL_STUDY_GUIDES[selectedGuideLevel];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-purple-950/60 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-400/10 text-purple-300 border border-purple-400/20">
                A1–C2 Kişiselleştirilmiş Planlayıcı
              </span>
              <span className="text-xs text-white/50">&bull; Spaced Repetition Destekli</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              YDS Çalışma <span className="gradient-text">Programları</span> 📅
            </h1>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-2xl">
              Hedef puanına ve ayırabileceğin günlük zamana göre hazırlanmış 7–180 günlük çalışma programları, haftalık hedefler ve CEFR seviye kılavuzları.
            </p>
          </div>

          {activePlan && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-center sm:text-right">
              <span className="text-xs text-white/50 block">Aktif Program İlerlemesi</span>
              <span className="text-2xl font-black text-cyan-400">%{planProgress.percent}</span>
              <span className="text-[11px] text-white/40 block mt-0.5">
                {planProgress.completed} / {planProgress.total} Görev Tamamlandı
              </span>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/10">
          <button
            onClick={() => setActiveTab("MY_PLAN")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "MY_PLAN"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            🎯 Çalışma Programım
          </button>
          <button
            onClick={() => setActiveTab("PRESETS")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "PRESETS"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            ⚡ Hazır Programlar ({PRESET_STUDY_PLANS.length})
          </button>
          <button
            onClick={() => setActiveTab("GENERATOR")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "GENERATOR"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            🤖 Özel Plan Oluşturucu
          </button>
          <button
            onClick={() => setActiveTab("GUIDES")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "GUIDES"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            📚 A1–C2 Seviye Rehberleri
          </button>
        </div>
      </header>

      {/* TAB 1: MY ACTIVE PLAN */}
      {activeTab === "MY_PLAN" && (
        <div className="space-y-6">
          {activePlan ? (
            <div className="space-y-6">
              {/* Active Plan Meta Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                      Aktif Program
                    </span>
                    <span className="text-xs text-white/40">&bull; {activePlan.totalDays} Günlük Plan</span>
                  </div>
                  <h2 className="text-2xl font-black text-white mt-1">{activePlan.title}</h2>
                  <p className="text-xs text-white/60 mt-1 max-w-xl">{activePlan.description}</p>
                </div>

                <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">Günlük Süre</span>
                    <span className="text-sm font-bold text-white">{activePlan.dailyMinutes} Dakika</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">Hedef Skor</span>
                    <span className="text-sm font-bold text-cyan-400">{activePlan.targetScore || 80}+ YDS</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/10">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full transition-all duration-500"
                  style={{ width: `${planProgress.percent}%` }}
                />
              </div>

              {/* Weeks and Days */}
              <div className="space-y-6">
                {activePlan.weeks.map((week) => (
                  <div
                    key={week.week}
                    className="p-6 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-lg space-y-4"
                  >
                    <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-black text-white">{week.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {week.goals.map((g, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] text-cyan-300/80 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded-md"
                            >
                              🎯 {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Day cards in grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {week.days.map((day) => {
                        const dayDone = day.tasks.every((t) => t.completed);

                        return (
                          <div
                            key={day.day}
                            className={`p-4 rounded-2xl border transition-all ${
                              dayDone
                                ? "bg-emerald-950/10 border-emerald-500/30 shadow-md shadow-emerald-950/20"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-black uppercase tracking-wider text-white">
                                {day.title}
                              </span>
                              <span className="text-[11px] text-white/40">
                                {day.totalMinutes} dk
                              </span>
                            </div>

                            <div className="space-y-2">
                              {day.tasks.map((task) => (
                                <div
                                  key={task.id}
                                  onClick={() => handleToggleTask(day.day, task.id)}
                                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                                    task.completed
                                      ? "bg-emerald-500/10 border-emerald-500/30 text-white/60 line-through"
                                      : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 text-[10px] ${
                                      task.completed
                                        ? "bg-emerald-400 border-emerald-400 text-slate-950 font-bold"
                                        : "border-white/30 text-transparent"
                                    }`}
                                  >
                                    ✓
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold truncate">{task.title}</span>
                                      <span className="text-[10px] text-white/40 ml-1 shrink-0">
                                        {task.minutes} dk
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-white/50 mt-0.5 leading-snug">
                                      {task.description}
                                    </p>
                                    {task.href && !task.completed && (
                                      <Link
                                        href={task.href}
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-block mt-1 text-[10px] font-bold text-cyan-400 hover:underline"
                                      >
                                        Modüle Git →
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl border border-white/10 bg-slate-900/60">
              <p className="text-white/60 text-sm mb-4">Henüz aktif bir çalışma programı seçmedin kanka.</p>
              <button
                onClick={() => setActiveTab("PRESETS")}
                className="px-6 py-3 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:brightness-110"
              >
                Hazır Programları İncele ⚡
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PRESET PLANS */}
      {activeTab === "PRESETS" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESET_STUDY_PLANS.map((preset) => {
            const isCurrent = activePlan?.id === preset.id;

            return (
              <div
                key={preset.id}
                className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-cyan-400/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      {preset.totalDays} Gün &bull; {preset.estimatedCompletion}
                    </span>
                    <span className="text-xs font-black text-white/50">
                      Günde {preset.dailyMinutes} dk
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{preset.description}</p>

                  <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-white/70">
                    <div className="flex justify-between">
                      <span className="text-white/40">Gereken Seviye:</span>
                      <span className="font-bold">{preset.currentLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Hedef Skor:</span>
                      <span className="font-bold text-cyan-400">{preset.targetScore}+ YDS</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  {isCurrent ? (
                    <div className="w-full py-2.5 rounded-xl text-center text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ✓ Şu Anda Aktif Programın
                    </div>
                  ) : (
                    <button
                      onClick={() => handleStartPreset(preset)}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all"
                    >
                      Bu Planı Başlat 🚀
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: CUSTOM PLAN GENERATOR */}
      {activeTab === "GENERATOR" && (
        <div className="max-w-2xl mx-auto p-8 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white">🤖 Özel YDS Planlayıcı</h2>
            <p className="text-xs text-white/50 mt-1">
              Kendi seviyene, zamanına ve hedef puanına uygun kusursuz çalışma takvimini 1 saniyede oluştur.
            </p>
          </div>

          <form onSubmit={handleGeneratePlan} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold uppercase text-white/60 mb-1.5">
                Mevcut Seviyen (CEFR)
              </label>
              <select
                value={genCurrentLevel}
                onChange={(e) => setGenCurrentLevel(e.target.value as CefrLevel)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
              >
                <option value="A1">A1 (Başlangıç — Sıfırdan)</option>
                <option value="A2">A2 (Temel — Basit Cümleler)</option>
                <option value="B1">B1 (Orta — 40–55 YDS civarı)</option>
                <option value="B2">B2 (İyi — 55–70 YDS civarı)</option>
                <option value="C1">C1 (İleri — 70–85 YDS civarı)</option>
                <option value="C2">C2 (Usta — 85+ YDS)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  Hedef YDS Puanı
                </label>
                <input
                  type="number"
                  min={50}
                  max={100}
                  value={genTargetScore}
                  onChange={(e) => setGenTargetScore(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  Toplam Süre (Gün)
                </label>
                <select
                  value={genDays}
                  onChange={(e) => setGenDays(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                >
                  <option value={7}>7 Gün (Acil Kamp)</option>
                  <option value={14}>14 Gün (Sprint)</option>
                  <option value={30}>30 Gün (1 Ay)</option>
                  <option value={60}>60 Gün (2 Ay — Önerilen)</option>
                  <option value={90}>90 Gün (3 Ay)</option>
                  <option value={120}>120 Gün (4 Ay)</option>
                  <option value={180}>180 Gün (6 Ay)</option>
                  <option value={365}>365 Gün (1 Yıl)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold uppercase text-white/60 mb-1.5">
                Günde Ayırabileceğin Zaman (Dakika)
              </label>
              <input
                type="number"
                min={20}
                max={300}
                step={10}
                value={genMinutes}
                onChange={(e) => setGenMinutes(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
              />
              <span className="text-[11px] text-white/40 block mt-1">
                Günde {genMinutes} dk &bull; Haftada yaklaşık {Math.round((genMinutes * 7) / 60)} saat çalışma.
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:brightness-110 shadow-lg shadow-purple-500/20 active:scale-[0.99] transition-all"
            >
              Kişiselleştirilmiş Programımı Oluştur 🚀
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: A1-C2 CEFR STUDY GUIDES */}
      {activeTab === "GUIDES" && (
        <div className="space-y-6">
          {/* Level Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {(["A1", "A2", "B1", "B2", "C1", "C2"] as CefrLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedGuideLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGuideLevel === lvl
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {lvl} Rehberi
              </button>
            ))}
          </div>

          {/* Selected Guide Details */}
          <div className="p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  {currentGuide.level} Düzeyi
                </span>
                <span className="text-xs text-white/50">&bull; {currentGuide.normalDuration} (Hızlandırılmış: {currentGuide.fastDuration})</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {currentGuide.title}
              </h3>
              <p className="text-sm text-white/60 mt-1">{currentGuide.subtitle}</p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Hedef Kelime</span>
                <span className="text-base font-bold text-white">{currentGuide.targetWordCount}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Günlük Yeni Kelime</span>
                <span className="text-base font-bold text-cyan-400">+{currentGuide.dailyNewWords} Kelime</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Haftalık Okuma</span>
                <span className="text-base font-bold text-purple-400">{currentGuide.weeklyReadingCount} Parça</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Haftalık Soru</span>
                <span className="text-base font-bold text-emerald-400">{currentGuide.weeklyGrammarQuestions} Soru</span>
              </div>
            </div>

            {/* Grammar & Vocabulary Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Kilit Gramer Konuları
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {currentGuide.keyGrammarTopics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Önemli Kelime Grupları
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {currentGuide.keyVocabularyAreas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Retention & Tactics */}
            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2 text-xs text-purple-200">
              <strong className="text-white block font-bold text-sm">
                🧠 Hafıza ve Kalıcılık Stratejisi:
              </strong>
              <ul className="list-disc pl-5 space-y-1">
                {currentGuide.memoryRetentionMethods.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
