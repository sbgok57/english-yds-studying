// Canvas tabanlı havai fişek — harici kütüphane gerektirmez.
// Çift patlama (altın + renkli), kuyruk izi ve ekran parlaması ile coşkulu.
type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  tail: boolean;
};

const COLORS = [
  "#f43f5e",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#fde047",
  "#34d399",
];

import { shouldThrottleGraphics } from "@/lib/hardware-optimizer";

export function launchFireworks(durationMs = 3400, small = false) {
  if (typeof window === "undefined" || shouldThrottleGraphics()) return;

  let canvas = document.getElementById("yds-fireworks") as HTMLCanvasElement | null;
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "yds-fireworks";
    canvas.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:9999;";
    document.body.appendChild(canvas);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let sparks: Spark[] = [];
  let raf = 0;
  let flash = 0;
  const started = performance.now();

  function explode(x: number, y: number) {
    const n = small ? 40 : 70; // küçük patlama = daha az parçacık (CPU)
    const main = COLORS[Math.floor(Math.random() * COLORS.length)];
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.35;
      const speed = 2.2 + Math.random() * 5.2;
      const golden = Math.random() < 0.28;
      sparks.push({
        x,
        y,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        life: 0,
        maxLife: 62 + Math.random() * 34,
        color: golden ? "#fde047" : main,
        size: 1.7 + Math.random() * 2.1,
        tail: Math.random() < 0.5,
      });
    }
    flash = 0.22;
  }

  function tick() {
    const elapsed = performance.now() - started;
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

    // ekran parlaması
    if (flash > 0) {
      ctx!.globalAlpha = flash;
      ctx!.fillStyle = "#ffffff";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      flash *= 0.86;
      ctx!.globalAlpha = 1;
    }

    sparks = sparks.filter((s) => s.life < s.maxLife);
    for (const s of sparks) {
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.05;
      s.vx *= 0.985;
      s.vy *= 0.985;
      s.life++;
      const alpha = 1 - s.life / s.maxLife;
      ctx!.globalAlpha = Math.max(0, alpha);
      ctx!.fillStyle = s.color;
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx!.fill();
      // kuyruk izi
      if (s.tail) {
        ctx!.globalAlpha = Math.max(0, alpha * 0.4);
        ctx!.beginPath();
        ctx!.arc(s.x - s.vx * 2.4, s.y - s.vy * 2.4, s.size * 0.7, 0, Math.PI * 2);
        ctx!.fill();
      }
    }
    ctx!.globalAlpha = 1;

    if (elapsed < durationMs && sparks.length > 0) {
      raf = requestAnimationFrame(tick);
    } else {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      canvas!.remove();
    }
  }

  const w = canvas.width;
  const h = canvas.height;
  // büyük gösteri 9 dalga, küçük (oyunlar) 3 dalga → CPU dostu
  const times = small ? [0, 260, 520] : [0, 300, 600, 900, 1250, 1600, 2000, 2450, 2900];
  times.forEach((t) => {
    setTimeout(() => {
      explode(w * (0.15 + Math.random() * 0.7), h * (0.12 + Math.random() * 0.4));
    }, t);
  });

  raf = requestAnimationFrame(tick);
}
