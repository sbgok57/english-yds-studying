"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

/** Üzerinde ~0.8 sn bekleyince açıklama baloncuğu gösteren sarmalayıcı.
 *  marker ile küçük bir ℹ️ rozeti eklenebilir (keşfedilebilirlik). */
export default function Tip({
  tip,
  children,
  className = "",
  marker = false,
}: {

  tip: ReactNode;
  children: ReactNode;
  className?: string;
  marker?: boolean;
}) {
  const [show, setShow] = useState(false);
  const timer = useRef<number | null>(null);

  // SAFETY: Clear timer on unmount to prevent leaks and setState on unmounted component
  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const enter = () => {
    timer.current = window.setTimeout(() => setShow(true), 800);
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
      {marker && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-black flex items-center justify-center shadow">
          i
        </span>
      )}
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-max max-w-[280px] rounded-xl border border-white/15 bg-slate-800/95 px-3 py-2 text-xs leading-relaxed text-white/90 shadow-2xl anim-pop pointer-events-none">
          {tip}
        </span>
      )}
    </span>
  );
}
