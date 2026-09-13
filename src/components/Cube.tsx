"use client";

import { useEffect, useRef, useState } from "react";

/** WebGL yerine saf CSS 3D dönen kelime küpü (çevrimdışı ve hızlı). */
export default function Cube({
  front,
  back,
  color = "linear-gradient(135deg,#7c3aed,#06b6d4)",
}: {
  front: string;
  back: string;
  color?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const [rot, setRot] = useState({ x: -18, y: 0 });

  useEffect(() => {
    if (!drag) return;
    const onMove = (e: PointerEvent) => {
      setRot((r) => ({
        x: Math.max(-60, Math.min(60, r.x - e.movementY * 0.3)),
        y: r.y + e.movementX * 0.5,
      }));
    };
    const onUp = () => setDrag(null);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [drag]);

  return (
    <div
      className="cube-scene w-52 h-52 select-none cursor-grab active:cursor-grabbing mx-auto"
      ref={wrapRef}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDrag({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="cube relative w-full h-full"
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          animation: drag ? "none" : "cubeSpin 18s linear infinite",
        }}
      >
        {[
          { t: "rotateY(0deg) translateZ(104px)", f: front },
          { t: "rotateY(90deg) translateZ(104px)", f: back },
          { t: "rotateY(180deg) translateZ(104px)", f: front },
          { t: "rotateY(-90deg) translateZ(104px)", f: back },
          { t: "rotateX(90deg) translateZ(104px)", f: front },
          { t: "rotateX(-90deg) translateZ(104px)", f: back },
        ].map((face, i) => (
          <div
            key={i}
            className="cube-face"
            style={{
              transform: face.t,
              background: color,
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.25)",
            }}
          >
            <span className="text-3xl font-black text-white drop-shadow">{face.f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
