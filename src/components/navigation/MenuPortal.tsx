"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface MenuPortalProps {
  children: ReactNode;
}

/**
 * SSR-safe client portal that mounts children directly to document.body
 * so overlays/drawers are never clipped by parent transform, backdrop-filter,
 * or overflow stacking contexts.
 */
export default function MenuPortal({ children }: MenuPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}
