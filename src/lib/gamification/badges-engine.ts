// Pure Badge Evaluation and Progression Engine

import { BADGES, BadgeDefinition, BadgeState, EarnedBadge } from "./badges-data";
import type { UsageData } from "../store";

export interface UserStatsContext {
  wordsSolved?: number;
  wordsCorrectRatio?: number;
  wordsStreakDays?: number;
  grammarQuestionsSolved?: number;
  grammarAccuracy?: number;
  tensesCompleted?: number;
  readingPassagesCompleted?: number;
  readingAccuracy?: number;
  academicReadingCount?: number;
  inferenceQuestionsCorrect?: number;
  examsTaken?: number;
  bestNet?: number;
  recentExamsNet?: number[];
  errorsCorrected?: number;
  currentLevel?: string;
  levelConfidence?: string;
  levelVerified?: boolean;
  activeDays?: number;
  totalStudyMinutes?: number;
  streakDays?: number;
  studyPlanDaysCompleted?: number;
  visitedModules?: string[];
  commaQuestionsCorrect?: number;
  agoV2Streak?: number;
  despiteQuestionsCorrect?: number;
  noSoonerQuestionsCorrect?: number;
  nightSessionsCount?: number;
  morningSessionsCount?: number;
}

export function evaluateBadgeProgress(
  badge: BadgeDefinition,
  stats: UserStatsContext
): number {
  switch (badge.id) {
    case "first-step": {
      let count = 0;
      if (stats.currentLevel) count++;
      if (stats.studyPlanDaysCompleted && stats.studyPlanDaysCompleted > 0) count++;
      if (stats.visitedModules && stats.visitedModules.length >= 2) count++;
      return Math.min(badge.targetCount, count);
    }
    case "warmup-tour":
      return Math.min(badge.targetCount, stats.totalStudyMinutes || 0);
    case "map-unlocked":
      return Math.min(badge.targetCount, stats.visitedModules?.length || 0);
    case "vocab-collector":
      return Math.min(badge.targetCount, stats.wordsSolved || 0);
    case "vocab-hunter":
      return Math.min(badge.targetCount, stats.wordsSolved || 0);
    case "vocab-master":
      return Math.min(badge.targetCount, stats.wordsSolved || 0);
    case "academic-lexicon":
      return Math.min(badge.targetCount, Math.floor((stats.wordsSolved || 0) * 0.6));
    case "unforgetting-elephant":
      return Math.min(badge.targetCount, Math.floor((stats.wordsSolved || 0) * 0.4));
    case "phrasal-verb-monster":
      return Math.min(badge.targetCount, Math.floor((stats.wordsSolved || 0) * 0.25));
    case "time-traveler":
      return Math.min(badge.targetCount, stats.tensesCompleted || 0);
    case "perfect-detective":
      return Math.min(badge.targetCount, Math.min(6, Math.floor((stats.grammarQuestionsSolved || 0) / 20)));
    case "modal-master":
      return Math.min(badge.targetCount, Math.floor((stats.grammarQuestionsSolved || 0) * 0.3));
    case "clause-architect":
      return Math.min(badge.targetCount, Math.floor((stats.grammarQuestionsSolved || 0) * 0.4));
    case "inversion-king":
      return Math.min(badge.targetCount, stats.noSoonerQuestionsCorrect || 0);
    case "grammar-marathoner":
      return Math.min(badge.targetCount, stats.grammarQuestionsSolved || 0);
    case "paragraph-explorer":
      return Math.min(badge.targetCount, stats.readingPassagesCompleted || 0);
    case "reading-runner":
      return Math.min(badge.targetCount, stats.readingPassagesCompleted || 0);
    case "academic-reader":
      return Math.min(badge.targetCount, stats.academicReadingCount || Math.floor((stats.readingPassagesCompleted || 0) * 0.6));
    case "inference-detective":
      return Math.min(badge.targetCount, stats.inferenceQuestionsCorrect || 0);
    case "reading-500-library":
      return Math.min(badge.targetCount, stats.readingPassagesCompleted || 0);
    case "first-mock":
      return Math.min(badge.targetCount, stats.bestNet || 0);
    case "time-hunter":
      return Math.min(badge.targetCount, stats.bestNet || 0);
    case "club-70":
      return Math.min(badge.targetCount, (stats.recentExamsNet || []).filter((n) => n >= 70).length);
    case "club-80":
      return Math.min(badge.targetCount, (stats.recentExamsNet || []).filter((n) => n >= 80).length);
    case "consistency-machine": {
      const rec = stats.recentExamsNet || [];
      if (rec.length < 5) return rec.length;
      const last5 = rec.slice(0, 5);
      const avg = last5.reduce((a, b) => a + b, 0) / 5;
      const noneBelow65 = last5.every((n) => n >= 65);
      return avg >= 75 && noneBelow65 ? 5 : last5.length;
    }
    case "error-bender":
      return Math.min(badge.targetCount, stats.errorsCorrected || 0);
    case "gate-a2":
      return stats.currentLevel && ["A2", "B1", "B2", "C1", "C2"].includes(stats.currentLevel) ? 1 : 0;
    case "traveler-b1":
      return stats.currentLevel && ["B1", "B2", "C1", "C2"].includes(stats.currentLevel) ? 1 : 0;
    case "climber-b2":
      return stats.currentLevel && ["B2", "C1", "C2"].includes(stats.currentLevel) ? 1 : 0;
    case "summit-c1":
      return stats.currentLevel && ["C1", "C2"].includes(stats.currentLevel) ? 1 : 0;
    case "legend-c2":
      return stats.currentLevel === "C2" && stats.levelConfidence === "high" ? 1 : 0;
    case "here-for-a-week":
      return Math.min(badge.targetCount, stats.activeDays || stats.streakDays || 0);
    case "became-habit":
      return Math.min(badge.targetCount, stats.streakDays || 0);
    case "iron-discipline":
      return Math.min(badge.targetCount, Math.floor((stats.totalStudyMinutes || 0) / 60));
    case "marathoner":
      return Math.min(badge.targetCount, Math.floor((stats.totalStudyMinutes || 0) / 60));
    case "planned-programmed":
      return Math.min(badge.targetCount, stats.studyPlanDaysCompleted || 0);
    case "comma-police":
      return Math.min(badge.targetCount, stats.commaQuestionsCorrect || 0);
    case "ago-v2":
      return Math.min(badge.targetCount, stats.agoV2Streak || 0);
    case "despite-master":
      return Math.min(badge.targetCount, stats.despiteQuestionsCorrect || 0);
    case "no-sooner-than":
      return Math.min(badge.targetCount, stats.noSoonerQuestionsCorrect || 0);
    case "night-owl":
      return Math.min(badge.targetCount, stats.nightSessionsCount || 0);
    case "early-bird":
      return Math.min(badge.targetCount, stats.morningSessionsCount || 0);
    default:
      return 0;
  }
}

export function evaluateAllBadges(
  currentState: BadgeState,
  stats: UserStatsContext
): { updatedState: BadgeState; newBadges: BadgeDefinition[] } {
  const earnedSet = new Set(currentState.earned.map((e) => e.badgeId));
  const newEarned: EarnedBadge[] = [...currentState.earned];
  const updatedProgress: Record<string, number> = { ...currentState.progress };
  const freshlyAwarded: BadgeDefinition[] = [];

  for (const badge of BADGES) {
    const progress = evaluateBadgeProgress(badge, stats);
    updatedProgress[badge.id] = progress;

    if (!earnedSet.has(badge.id) && progress >= badge.targetCount) {
      earnedSet.add(badge.id);
      const earnedItem: EarnedBadge = {
        badgeId: badge.id,
        earnedAt: Date.now(),
        awardEventId: `badge:${badge.id}:${Date.now()}`,
        seen: false,
      };
      newEarned.push(earnedItem);
      freshlyAwarded.push(badge);
    }
  }

  return {
    updatedState: {
      version: currentState.version,
      earned: newEarned,
      progress: updatedProgress,
    },
    newBadges: freshlyAwarded,
  };
}

export function getNextBadges(
  state: BadgeState,
  limit: number = 3
): { badge: BadgeDefinition; current: number; target: number; percent: number }[] {
  const earnedIds = new Set(state.earned.map((e) => e.badgeId));
  const unearned = BADGES.filter((b) => !earnedIds.has(b.id) && !b.hidden);

  const scored = unearned.map((badge) => {
    const current = state.progress[badge.id] || 0;
    const target = badge.targetCount;
    const percent = Math.min(99, Math.round((current / target) * 100));
    return { badge, current, target, percent };
  });

  scored.sort((a, b) => b.percent - a.percent);
  return scored.slice(0, limit);
}
