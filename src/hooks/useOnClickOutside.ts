"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Calls `handler` when a pointer-down happens outside every element in `refs`.
 *
 * - The handler is stored in a ref so the listeners are NOT re-bound on every
 *   render when callers pass an inline function.
 * - Listeners are only attached while `enabled` is true, and are always
 *   removed on cleanup.
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T> | ReadonlyArray<RefObject<HTMLElement>>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  const handlerRef = useRef(handler);

  // PERF: keep latest handler without re-subscribing document listeners
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled || typeof document === "undefined") return;

    const refList: ReadonlyArray<RefObject<HTMLElement>> = Array.isArray(refs)
      ? (refs as ReadonlyArray<RefObject<HTMLElement>>)
      : [refs as RefObject<HTMLElement>];

    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      // SAFETY: ignore non-Node targets and clicks inside any guarded element
      if (!(target instanceof Node)) return;
      const isInside = refList.some((r) => r.current?.contains(target));
      if (isInside) return;
      try {
        handlerRef.current(event);
      } catch (err) {
        console.error("[useOnClickOutside] handler failed", err);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      // SAFETY: always detach to prevent leaks
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, enabled]);
}

export default useOnClickOutside;
