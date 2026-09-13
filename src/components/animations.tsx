"use client";

import { useEffect, useState, type ReactNode } from "react";

export function CountUp({
  to,
  suffix = "",
  duration = 1200,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let current = 0;
    const stepTime = 16;
    const totalSteps = Math.max(1, duration / stepTime);
    const increment = to / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setVal(to);
        clearInterval(timer);
      } else {
        setVal(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`anim-pop ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

export function StepTimeline({
  steps,
  current,
  onSelect,
}: {
  steps: { label: string; detail: string; highlight?: string }[];
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {steps.map((s, i) => {
          const isCur = i === current;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isCur
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 scale-105"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-black ${
                  isCur ? "bg-white text-purple-700" : "bg-white/20 text-white"
                }`}
              >
                {i + 1}
              </span>
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>
      {steps[current] && (
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-xs text-white/80 anim-pop">
          <p className="font-bold text-sm text-cyan-300 mb-1.5">{steps[current].label}</p>
          <p className="leading-relaxed text-white/75">{steps[current].detail}</p>
        </div>
      )}
    </div>
  );
}
