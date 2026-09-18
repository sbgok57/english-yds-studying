"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { BadgeDefinition } from "@/lib/gamification/badges-data";
import BadgeModal from "./BadgeModal";

interface BadgeQueueContextValue {
  enqueueBadge: (badge: BadgeDefinition) => void;
  queueLength: number;
}

const BadgeQueueContext = createContext<BadgeQueueContextValue | undefined>(undefined);

export function BadgeQueueProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<BadgeDefinition[]>([]);

  const enqueueBadge = useCallback((badge: BadgeDefinition) => {
    setQueue((prev) => [...prev, badge]);
  }, []);

  const handleDismiss = useCallback(() => {
    setQueue((prev) => prev.slice(1));
  }, []);

  const currentBadge = queue.length > 0 ? queue[0] : null;

  return (
    <BadgeQueueContext.Provider value={{ enqueueBadge, queueLength: queue.length }}>
      {children}
      <BadgeModal badge={currentBadge} onClose={handleDismiss} />
    </BadgeQueueContext.Provider>
  );
}

export function useBadgeQueue(): BadgeQueueContextValue {
  const context = useContext(BadgeQueueContext);
  if (!context) {
    return {
      enqueueBadge: () => {},
      queueLength: 0,
    };
  }
  return context;
}
