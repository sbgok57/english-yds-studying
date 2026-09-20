"use client";

import React, { Component, ReactNode, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles, OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import { shouldThrottleGraphics, checkWebGLSupport } from "@/lib/hardware-optimizer";

// High-performance CSS 3D Card Fallback for low-end devices, mobile battery saver, or WebGL context losses
function Css3DCubeFallback({ english, turkish }: { english: string; turkish: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((prev) => !prev)}
      className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 border border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 cursor-pointer select-none group perspective-1000"
    >
      <div className="absolute top-3 left-4 z-10 glass-pill text-[11px] text-cyan-300">
        ✨ Dokunsal Hafıza: Tıkla ve çevir!
      </div>
      <div
        className="w-64 h-48 rounded-2xl transition-transform duration-700 preserve-3d shadow-xl relative"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Ön Yüz: İngilizce */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-900 to-indigo-800 border border-purple-400/40 flex flex-col items-center justify-center p-4 backface-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-2">English</span>
          <span className="text-2xl sm:text-3xl font-black text-white text-center">{english}</span>
          <span className="text-[11px] text-white/50 mt-3">Çevirmek için tıkla 🔄</span>
        </div>

        {/* Arka Yüz: Türkçe */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-900 to-purple-900 border border-fuchsia-400/40 flex flex-col items-center justify-center p-4 shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-xs font-mono text-fuchsia-300 uppercase tracking-widest mb-2">Türkçe Anlamı</span>
          <span className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">{turkish}</span>
          <span className="text-[11px] text-white/50 mt-3">Geri dönmek için tıkla 🔄</span>
        </div>
      </div>
    </div>
  );
}

function WordCube({ english, turkish }: { english: string; turkish: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.007;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.12;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3.2, 3.2, 3.2]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.4}
          metalness={0.4}
          roughness={0.2}
        />
        {/* Ön Yüz: İngilizce */}
        <Text
          position={[0, 0, 1.62]}
          fontSize={0.34}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.8}
        >
          {english}
        </Text>

        {/* Arka Yüz: Türkçe */}
        <Text
          position={[0, 0, -1.62]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.32}
          color="#fef08a"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.8}
        >
          {turkish}
        </Text>
      </mesh>
      <Sparkles count={35} scale={5} size={3} speed={0.5} color="#f43f5e" />
      <Sparkles count={20} scale={4} size={3} speed={0.8} color="#38bdf8" />
    </Float>
  );
}

interface CanvasBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, CanvasBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err: any) {
    console.warn("[Word3DScene] WebGL Canvas error caught. Falling back to CSS 3D:", err?.message || err);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Word3DScene({ english, turkish }: { english: string; turkish: string }) {
  const [mounted, setMounted] = useState(false);
  const [useCssFallback, setUseCssFallback] = useState(false);

  useEffect(() => {
    setMounted(true);

    // If device is low-power/throttled or WebGL unsupported, immediately use CSS 3D
    if (!checkWebGLSupport() || shouldThrottleGraphics()) {
      setUseCssFallback(true);
    }

    // Listen to global WebGL fallback signal from Crash Guardian
    const onFallback = () => setUseCssFallback(true);
    window.addEventListener("yds:webgl-fallback", onFallback);
    return () => window.removeEventListener("yds:webgl-fallback", onFallback);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-80 rounded-3xl bg-slate-900 flex items-center justify-center text-white/50 animate-pulse">
        3D Sahne Hazırlanıyor...
      </div>
    );
  }

  if (useCssFallback) {
    return <Css3DCubeFallback english={english} turkish={turkish} />;
  }

  const dpr = Math.min(1.5, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

  return (
    <CanvasErrorBoundary fallback={<Css3DCubeFallback english={english} turkish={turkish} />}>
      <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 border border-white/20 shadow-2xl">
        <div className="absolute top-3 left-4 z-10 glass-pill text-[11px] text-cyan-300">
          ✨ 3D Dokunsal Hafıza: Küpü elinle çevir!
        </div>
        <Canvas
          dpr={[1, dpr]}
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          gl={{ powerPreference: "default", antialias: false }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[6, 6, 6]} intensity={1.5} color="#f59e0b" />
          <pointLight position={[-6, -6, -6]} intensity={0.9} color="#06b6d4" />
          <WordCube english={english} turkish={turkish} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
