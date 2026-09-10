/**
 * Phonics Galaxy & Jungle Adventure - Particle FX Engine
 * Confetti bursts, star sparkles, bubble pop rings, magic dust, and steam effects.
 */

export class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += (p.gravity || 0) * dt;
      p.rotation += (p.vRot || 0) * dt;
      p.scale = Math.max(0, p.scale + (p.scaleSpeed || 0) * dt);
      p.alpha = Math.max(0, p.life / p.maxLife);
    }
  }

  draw(ctx) {
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(p.scale, p.scale);

      if (p.type === 'confetti') {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else if (p.type === 'star') {
        this.drawStarShape(ctx, 0, 0, 5, p.size, p.size * 0.45, p.color);
      } else if (p.type === 'sparkle') {
        this.drawSparkleCross(ctx, 0, 0, p.size, p.color);
      } else if (p.type === 'ring') {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * (1 + (1 - p.alpha) * 1.5), 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.type === 'bubble_pop') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'smoke') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  drawStarShape(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.fill();
  }

  drawSparkleCross(ctx, cx, cy, size, color) {
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.quadraticCurveTo(cx, cy, cx + size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + size);
    ctx.quadraticCurveTo(cx, cy, cx - size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - size);
    ctx.closePath();
    ctx.fill();
  }

  // Preset Emitters

  burstConfetti(x, y, count = 45) {
    const colors = ['#FF1744', '#FFD600', '#00E676', '#00E5FF', '#D500F9', '#FF9100', '#FFFFFF'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const speed = 180 + Math.random() * 320;
      this.particles.push({
        type: 'confetti',
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 120,
        gravity: 340,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 12,
        size: 8 + Math.random() * 8,
        scale: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.5 + Math.random() * 1.0,
        maxLife: 2.5
      });
    }
  }

  burstStars(x, y, count = 20, starColor = '#FFE082') {
    const colors = [starColor, '#FFD54F', '#FFF9C4', '#FFCA28', '#FFFFFF'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 220;
      this.particles.push({
        type: 'star',
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 40,
        rotation: Math.random() * Math.PI,
        vRot: (Math.random() - 0.5) * 6,
        size: 10 + Math.random() * 10,
        scale: 1,
        scaleSpeed: -0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0.8 + Math.random() * 0.6,
        maxLife: 1.4
      });
    }
  }

  emitSparkleTrail(x, y, color = '#69F0AE') {
    for (let i = 0; i < 3; i++) {
      this.particles.push({
        type: 'sparkle',
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.5) * 40,
        vy: (Math.random() - 0.5) * 40 - 15,
        gravity: -10,
        rotation: 0,
        vRot: 2,
        size: 6 + Math.random() * 6,
        scale: 1,
        color: color,
        life: 0.45 + Math.random() * 0.3,
        maxLife: 0.75
      });
    }
  }

  burstBubble(x, y, color = '#80DEEA') {
    // Ring pop
    this.particles.push({
      type: 'ring',
      x,
      y,
      vx: 0,
      vy: 0,
      rotation: 0,
      size: 25,
      scale: 1,
      color: color,
      life: 0.3,
      maxLife: 0.3
    });

    // Bubble droplets
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const speed = 60 + Math.random() * 110;
      this.particles.push({
        type: 'bubble_pop',
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 80,
        rotation: 0,
        size: 4 + Math.random() * 4,
        scale: 1,
        color: '#E0F7FA',
        life: 0.4 + Math.random() * 0.25,
        maxLife: 0.65
      });
    }
  }

  emitSteam(x, y) {
    for (let i = 0; i < 4; i++) {
      this.particles.push({
        type: 'smoke',
        x: x + (Math.random() - 0.5) * 20,
        y: y,
        vx: (Math.random() - 0.5) * 30,
        vy: -70 - Math.random() * 60,
        gravity: -20,
        rotation: Math.random() * Math.PI,
        size: 8 + Math.random() * 10,
        scale: 1,
        scaleSpeed: 0.6,
        color: 'rgba(230, 245, 255, 0.6)',
        life: 0.6 + Math.random() * 0.4,
        maxLife: 1.0
      });
    }
  }
}
