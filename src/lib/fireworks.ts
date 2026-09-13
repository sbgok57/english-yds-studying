// Canvas tabanlı havai fişek — harici kütüphane gerektirmez.
type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
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
];

export function launchFireworks(durationMs = 2800) {
  if (typeof window === "undefined") return;

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
  const started = performance.now();

  function explode(x: number, y: number) {
    const n = 48;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.35;
      const speed = 2 + Math.random() * 4.6;
      sparks.push({
        x,
        y,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        life: 0,
        maxLife: 55 + Math.random() * 30,
        color,
        size: 1.6 + Math.random() * 1.7,
      });
    }
  }

  function tick() {
    const elapsed = performance.now() - started;
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    sparks = sparks.filter((s) => s.life < s.maxLife);
    for (const s of sparks) {
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.055; // yer çekimi
      s.vx *= 0.985;
      s.vy *= 0.985;
      s.life++;
      const alpha = 1 - s.life / s.maxLife;
      ctx!.globalAlpha = Math.max(0, alpha);
      ctx!.fillStyle = s.color;
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx!.fill();
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
  const times = [0, 420, 820, 1250, 1700, 2150];
  times.forEach((t) => {
    setTimeout(() => {
      explode(w * (0.2 + Math.random() * 0.6), h * (0.15 + Math.random() * 0.35));
    }, t);
  });

  raf = requestAnimationFrame(tick);
}
