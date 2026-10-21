"use client";

import React, { Component, ReactNode, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles, OrbitControls } from "@react-three/drei";
import type { Group } from "three";
import { shouldThrottleGraphics, checkWebGLSupport } from "@/lib/hardware-optimizer";
import type { MotionDiagramType } from "@/lib/media/visual-asset-registry";

// High-performance CSS 3D Card Fallback for low-end devices, mobile battery saver, or WebGL context losses
function Css3DCubeFallback({ english, turkish }: { english: string; turkish: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((prev) => !prev)}
      className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 border border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 cursor-pointer select-none group perspective-1000"
    >
      <div className="absolute top-3 left-4 z-10 glass-pill text-[11px] text-cyan-300">
        CSS 3D anlam kartı · Fotoğraf veya gerçek model dosyası değildir
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

function ConceptGeometry({ type, color }: { type: MotionDiagramType; color: string }) {
  if (type === "network" || type === "distribution") {
    return (
      <group>
        <mesh><sphereGeometry args={[0.56, 24, 24]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} /></mesh>
        {[[ -1.5, 0.7, 0 ], [1.5, 0.7, 0], [-1.5, -0.7, 0], [1.5, -0.7, 0], [0, 1.55, 0], [0, -1.55, 0]].map(([x, y, z], index) => (
          <group key={index} position={[x, y, z]}>
            <mesh><sphereGeometry args={[0.25, 16, 16]} /><meshStandardMaterial color={index % 2 ? "#38bdf8" : "#fbbf24"} emissive={index % 2 ? "#0e7490" : "#92400e"} /></mesh>
            <mesh position={[-x / 2, -y / 2, -z / 2]} rotation={[0, 0, Math.atan2(y, x)]}>
              <cylinderGeometry args={[0.035, 0.035, Math.sqrt(x * x + y * y + z * z) * 0.65, 8]} />
              <meshStandardMaterial color="#67e8f9" transparent opacity={0.7} />
            </mesh>
          </group>
        ))}
      </group>
    );
  }

  if (type === "cycle") {
    return <group rotation={[Math.PI / 2, 0, 0]}><mesh><torusGeometry args={[1.05, 0.2, 16, 64]} /><meshStandardMaterial color={color} metalness={0.35} roughness={0.3} /></mesh><mesh><sphereGeometry args={[0.48, 24, 24]} /><meshStandardMaterial color="#38bdf8" emissive="#075985" /></mesh></group>;
  }

  if (type === "containment") {
    return <group><mesh><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial color={color} wireframe transparent opacity={0.65} /></mesh><mesh><icosahedronGeometry args={[0.46, 1]} /><meshStandardMaterial color="#fbbf24" metalness={0.45} roughness={0.22} /></mesh></group>;
  }

  if (type === "compare" || type === "balance") {
    return <group><mesh position={[-0.78, -0.15, 0]}><dodecahedronGeometry args={[0.58, 0]} /><meshStandardMaterial color="#38bdf8" metalness={0.3} /></mesh><mesh position={[0.78, -0.15, 0]}><octahedronGeometry args={[0.58, 0]} /><meshStandardMaterial color="#fb923c" metalness={0.3} /></mesh><mesh position={[0, -0.92, 0]}><coneGeometry args={[0.38, 0.8, 4]} /><meshStandardMaterial color="#a78bfa" /></mesh><mesh position={[0, 0.55, 0]} rotation={[0, 0, type === "balance" ? 0 : 0.18]}><boxGeometry args={[2.8, 0.11, 0.16]} /><meshStandardMaterial color="#e2e8f0" /></mesh></group>;
  }

  if (type === "growth" || type === "decay" || type === "scale" || type === "mitigate") {
    const heights = type === "growth" ? [0.45, 0.8, 1.15, 1.55] : type === "decay" || type === "mitigate" ? [1.55, 1.15, 0.8, 0.45] : [0.55, 0.78, 1.28, 1.75];
    return <group>{heights.map((height, index) => <mesh key={index} position={[(index - 1.5) * 0.62, height / 2 - 0.7, 0]}><boxGeometry args={[0.38, height, 0.45]} /><meshStandardMaterial color={["#38bdf8", "#818cf8", "#c084fc", color][index]} metalness={0.3} /></mesh>)}</group>;
  }

  if (type === "barrier") {
    return <group><mesh position={[0.62, 0, 0]}><boxGeometry args={[0.32, 2, 1.3]} /><meshStandardMaterial color="#fb7185" emissive="#881337" /></mesh><mesh position={[-0.88, 0, 0]} rotation={[0, 0, 0.6]}><coneGeometry args={[0.45, 1.05, 5]} /><meshStandardMaterial color="#fbbf24" /></mesh></group>;
  }

  if (type === "causal" || type === "examine") {
    return <group><mesh position={[-1.05, 0, 0]}><sphereGeometry args={[0.38, 20, 20]} /><meshStandardMaterial color="#fb923c" /></mesh><mesh position={[0, 0, 0]}><octahedronGeometry args={[0.52, 0]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} /></mesh><mesh position={[1.05, 0, 0]}><dodecahedronGeometry args={[0.38, 0]} /><meshStandardMaterial color="#34d399" /></mesh><mesh position={[-0.53, 0, 0]}><boxGeometry args={[0.55, 0.08, 0.08]} /><meshStandardMaterial color="#cbd5e1" /></mesh><mesh position={[0.53, 0, 0]}><boxGeometry args={[0.55, 0.08, 0.08]} /><meshStandardMaterial color="#cbd5e1" /></mesh></group>;
  }

  return <mesh><icosahedronGeometry args={[1.15, 1]} /><meshStandardMaterial color={color} metalness={0.4} roughness={0.22} emissive="#312e81" emissiveIntensity={0.2} /></mesh>;
}

function WordCube({ english, turkish, motionType, visualKey }: { english: string; turkish: string; motionType: MotionDiagramType; visualKey: string }) {
  const groupRef = useRef<Group>(null);
  const palette = ["#8b5cf6", "#0891b2", "#e11d48", "#059669", "#d97706", "#4f46e5"];
  const color = palette[visualKey.split("").reduce((sum, character) => sum + character.charCodeAt(0), 0) % palette.length];

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.004;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={motionType === "cycle" ? 0.75 : 0.25} floatIntensity={0.35}>
      <group ref={groupRef}>
        <ConceptGeometry type={motionType} color={color} />
      </group>
      <Sparkles count={8} scale={5} size={2} speed={0.35} color="#f43f5e" />
      <Sparkles count={6} scale={4} size={2} speed={0.45} color="#38bdf8" />
      <Text position={[0, -2.15, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle" maxWidth={4.8}>{english}</Text>
      <Text position={[0, -2.45, 0]} fontSize={0.14} color="#a5f3fc" anchorX="center" anchorY="middle" maxWidth={5}>{turkish}</Text>
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

export default function Word3DScene({ english, turkish, motionType = "flow", visualKey = english }: { english: string; turkish: string; motionType?: MotionDiagramType; visualKey?: string }) {
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

  // Keep the canvas framebuffer bounded: pixel cost grows quadratically with DPR.
  const dpr = Math.min(1.25, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

  return (
    <CanvasErrorBoundary fallback={<Css3DCubeFallback english={english} turkish={turkish} />}>
      <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 border border-white/20 shadow-2xl" data-testid="word-3d-scene" data-visual-key={visualKey} data-motion-type={motionType}>
        <div className="absolute top-3 left-4 z-10 glass-pill text-[11px] text-cyan-300">
          3D kavramsal geometri · Fotoğraf/GLB varlığı değildir
        </div>
        <Canvas
          dpr={[1, dpr]}
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          gl={{ powerPreference: "default", antialias: false }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[6, 6, 6]} intensity={1.5} color="#f59e0b" />
          <pointLight position={[-6, -6, -6]} intensity={0.9} color="#06b6d4" />
          <WordCube english={english} turkish={turkish} motionType={motionType} visualKey={visualKey} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
