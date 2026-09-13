"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles, OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import type { Mesh } from "three";

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
      <Sparkles count={50} scale={6} size={3} speed={0.5} color="#f43f5e" />
      <Sparkles count={30} scale={4} size={4} speed={0.8} color="#38bdf8" />
    </Float>
  );
}

export default function Word3DScene({ english, turkish }: { english: string; turkish: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-72 rounded-3xl bg-slate-900 flex items-center justify-center text-white/50 animate-pulse">
        3D WebGL Sahnesi Yükleniyor...
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 border border-white/20 shadow-2xl">
      <div className="absolute top-3 left-4 z-10 glass-pill text-[11px] text-cyan-300">
        ✨ 3D Dokunsal Hafıza: Küpü elinle çevir!
      </div>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color="#f59e0b" />
        <pointLight position={[-6, -6, -6]} intensity={0.9} color="#06b6d4" />
        <WordCube english={english} turkish={turkish} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
