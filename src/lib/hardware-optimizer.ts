// Hardware & OS Adaptive Performance Optimizer
// Balances CPU, GPU, RAM, Disk and rendering budgets across macOS, iOS, Windows, Android, and Linux.

export type PerformanceTier = "low" | "balanced" | "high" | "ultra";

export interface HardwareProfile {
  tier: PerformanceTier;
  os: "ios" | "android" | "macos" | "windows" | "linux" | "unknown";
  isTouch: boolean;
  isMobile: boolean;
  cores: number;
  deviceMemoryGb: number;
  dpr: number;
  prefersReducedMotion: boolean;
  saveData: boolean;
  maxParticles: number;
  canUseWebGL: boolean;
  maxFps: 30 | 60;
  cacheTtlMs: number;
}

let cachedProfile: HardwareProfile | null = null;

/**
 * Detects client OS reliably without deprecated navigator properties where possible
 */
function detectOperatingSystem(): HardwareProfile["os"] {
  if (typeof window === "undefined") return "unknown";

  const userAgent = (navigator.userAgent || "").toLowerCase();
  const platform = ((navigator as any).userAgentData?.platform || navigator.platform || "").toLowerCase();

  // iOS detection (including iPadOS on Safari desktop mode)
  const isIOS =
    /iphone|ipad|ipod/.test(userAgent) ||
    (platform === "macintel" && navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";

  if (/android/.test(userAgent)) return "android";
  if (/mac/.test(platform) || /macintosh/.test(userAgent)) return "macos";
  if (/win/.test(platform) || /windows/.test(userAgent)) return "windows";
  if (/linux/.test(platform) || /linux/.test(userAgent)) return "linux";

  return "unknown";
}

/**
 * Checks if WebGL is available and functional without throwing or leaking context
 */
export function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    const supported = !!(gl && typeof (gl as any).getParameter === "function");
    // Free context immediately to prevent memory leak
    const ext = gl ? (gl as any).getExtension("WEBGL_lose_context") : null;
    if (ext) ext.loseContext();
    return supported;
  } catch {
    return false;
  }
}

/**
 * Analyzes device capabilities and computes an adaptive profile
 */
export function getHardwareProfile(): HardwareProfile {
  if (cachedProfile) return cachedProfile;

  if (typeof window === "undefined") {
    // SSR safe baseline
    return {
      tier: "balanced",
      os: "unknown",
      isTouch: false,
      isMobile: false,
      cores: 4,
      deviceMemoryGb: 4,
      dpr: 1,
      prefersReducedMotion: false,
      saveData: false,
      maxParticles: 40,
      canUseWebGL: true,
      maxFps: 60,
      cacheTtlMs: 3600000,
    };
  }

  const os = detectOperatingSystem();
  const isTouch = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
  const isMobile = os === "ios" || os === "android" || /mobi|android/i.test(navigator.userAgent);

  // Hardware concurrency: bound between 1 and 32 to prevent bogus values
  const rawCores = navigator.hardwareConcurrency || 4;
  const cores = Math.max(1, Math.min(32, rawCores));

  // Device memory: Chromium-supported, undefined on Safari/Firefox (default to 4)
  const rawMem = (navigator as any).deviceMemory || (isMobile ? 3 : 8);
  const deviceMemoryGb = Math.max(1, Math.min(64, rawMem));

  // Connection data-saver
  const connection = (navigator as any).connection || {};
  const saveData = !!connection.saveData;

  // Reduced motion preference
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // WebGL support
  const canUseWebGL = !saveData && checkWebGLSupport();

  // Tier determination based on composite factors
  let tier: PerformanceTier = "balanced";

  if (deviceMemoryGb <= 2 || cores <= 2 || saveData || prefersReducedMotion) {
    tier = "low";
  } else if (deviceMemoryGb >= 8 && cores >= 8 && !isMobile) {
    tier = "ultra";
  } else if (deviceMemoryGb >= 4 && cores >= 4) {
    tier = "high";
  } else {
    tier = "balanced";
  }

  // Device Pixel Ratio clamp (Retina screens on iPhone/Mac can be 3x, causing 9x GPU overhead)
  const rawDpr = window.devicePixelRatio || 1;
  const dpr = tier === "low" ? 1.0 : Math.min(tier === "ultra" ? 2.0 : 1.5, rawDpr);

  // Max particles for celebrations and canvas
  const maxParticles =
    prefersReducedMotion || tier === "low"
      ? 0
      : tier === "balanced"
      ? 35
      : tier === "high"
      ? 75
      : 120;

  const maxFps: 30 | 60 = tier === "low" ? 30 : 60;
  const cacheTtlMs = tier === "low" ? 1800000 : 86400000; // 30 mins vs 24 hours

  cachedProfile = {
    tier,
    os,
    isTouch,
    isMobile,
    cores,
    deviceMemoryGb,
    dpr,
    prefersReducedMotion,
    saveData,
    maxParticles,
    canUseWebGL,
    maxFps,
    cacheTtlMs,
  };

  return cachedProfile;
}

/**
 * Non-blocking task executor: runs low-priority work in idle frames
 */
export function runWhenIdle(callback: () => void, timeoutMs = 2000): void {
  if (typeof window === "undefined") {
    callback();
    return;
  }

  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(callback, { timeout: timeoutMs });
  } else {
    setTimeout(callback, 50);
  }
}

/**
 * Returns true if heavy graphical effects (3D, large particle bursts) should be avoided
 */
export function shouldThrottleGraphics(): boolean {
  const profile = getHardwareProfile();
  return profile.tier === "low" || profile.prefersReducedMotion || profile.saveData;
}
