"use client";

import { useRef, useState, type ReactNode } from "react";

/** Üzerinde ~0.9 sn bekleyince açıklama baloncuğu gösteren sarmalayıcı. */
export default function Tip({
  tip,
  children,
  className = "",
}: {
  tip: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  const timer = useRef<number | null>(null);

  const enter = () => {
    timer.current = window.setTimeout(() => setShow(true), 900);
  };
  const leave = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setShow(false);
  };

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      {children}
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-max max-w-[280px] rounded-xl border border-white/15 bg-slate-800/95 px-3 py-2 text-xs leading-relaxed text-white/90 shadow-2xl anim-pop pointer-events-none">
          {tip}
        </span>
      )}
    </span>
  );
}
