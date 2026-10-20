"use client";

import {
  useRef,
  type ReactNode,
} from "react";
import "./scrollable-toolbar.css";

type ScrollableToolbarProps = {
  children: ReactNode;
  label?: string;
};

export function ScrollableToolbar({
  children,
  label = "Main navigation",
}: ScrollableToolbarProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: direction * Math.max(180, viewport.clientWidth * 0.7),
      behavior:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
    });
  }

  return (
    <div className="toolbar-shell">
      <button
        type="button"
        className="toolbar-arrow"
        aria-label="Scroll navigation left"
        onClick={() => scrollByPage(-1)}
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        ref={viewportRef}
        className="toolbar-viewport"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <nav className="toolbar-content" aria-label={label}>
          {children}
        </nav>
      </div>

      <button
        type="button"
        className="toolbar-arrow"
        aria-label="Scroll navigation right"
        onClick={() => scrollByPage(1)}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
