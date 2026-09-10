/**
 * Phonics Galaxy & Jungle Adventure - Stage 1: Phonics Bubble Sound Recognition
 * Floating physics bubbles with lowercase letters around central cartoon object.
 * Pure phonetic sound playback on tap; drag-and-drop to target with star rewards.
 */

import { PHONICS_DATA } from '../data/phonicsData.js';

export class BubblePhonicsStage {
  constructor() {
    this.engine = null;
    this.particles = null;
    this.sound = null;

    this.puzzles = PHONICS_DATA.bubblePuzzles;
    this.puzzleIndex = 0;
    this.currentPuzzle = null;

    this.bubbles = [];
    this.draggingBubble = null;
    this.dragOffset = { x: 0, y: 0 };
    this.targetObject = { x: 640, y: 360, radius: 100, scale: 1, targetScale: 1, bounceTimer: 0 };

    this.isSolved = false;
    this.solveTimer = 0;
    this.time = 0;
    this.ambientFireflies = [];
  }

  onEnter(initData) {
    if (initData && typeof initData.puzzleIndex === 'number') {
      this.puzzleIndex = initData.puzzleIndex % this.puzzles.length;
    }
    this.loadPuzzle(this.puzzleIndex);
    this.initFireflies();
  }

  onExit() {
    this.draggingBubble = null;
  }

  initFireflies() {
    this.ambientFireflies = [];
    for (let i = 0; i < 25; i++) {
      this.ambientFireflies.push({
        x: Math.random() * 1280,
        y: Math.random() * 720,
        vx: (Math.random() - 0.5) * 25,
        vy: (Math.random() - 0.5) * 25,
        size: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#69F0AE' : '#FFE082'
      });
    }
  }

  loadPuzzle(index) {
    this.puzzleIndex = index;
    this.currentPuzzle = this.puzzles[this.puzzleIndex];
    this.isSolved = false;
    this.solveTimer = 0;
    this.draggingBubble = null;

    // Arrange 4 bubbles around the center in a gentle orbit
    const count = this.currentPuzzle.bubbleLetters.length;
    this.bubbles = [];
    const orbitRadius = 260;
    const center = { x: 640, y: 360 };

    // Angles for bubbles: top-left, top-right, bottom-left, bottom-right
    const angles = [-2.4, -0.7, 2.4, 0.7];

    this.currentPuzzle.bubbleLetters.forEach((letter, i) => {
      const angle = angles[i % angles.length];
      const basePos = {
        x: center.x + Math.cos(angle) * orbitRadius,
        y: center.y + Math.sin(angle) * orbitRadius
      };

      const letterData = PHONICS_DATA.letters[letter] || { color: '#00E5FF', glow: '#80DEEA' };

      this.bubbles.push({
        id: i,
        letter: letter,
        x: basePos.x,
        y: basePos.y,
        baseX: basePos.x,
        baseY: basePos.y,
        vx: 0,
        vy: 0,
        radius: 54,
        scale: 1,
        color: letterData.color,
        glow: letterData.glow,
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 1.2 + Math.random() * 0.8,
        wobble: 0,
        popped: false,
        isCorrect: letter === this.currentPuzzle.targetLetter
      });
    });

    // Announce voice instruction
    setTimeout(() => {
      if (this.sound) {
        this.sound.speak(`Find the letter sound for ${this.currentPuzzle.objectName}!`, 0.92, 1.15);
      }
    }, 400);
  }

  update(dt) {
    this.time += dt;

    // Update ambient fireflies
    for (const f of this.ambientFireflies) {
      f.x += f.vx * dt;
      f.y += f.vy * dt;
      f.phase += dt * 3;
      if (f.x < 0) f.x = 1280;
      if (f.x > 1280) f.x = 0;
      if (f.y < 0) f.y = 720;
      if (f.y > 720) f.y = 0;
    }

    // Target object scale animation
    this.targetObject.scale += (this.targetObject.targetScale - this.targetObject.scale) * 10 * dt;
    if (this.targetObject.bounceTimer > 0) {
      this.targetObject.bounceTimer -= dt;
    }

    // Update bubbles floating motion
    for (const b of this.bubbles) {
      if (b.popped) continue;

      if (b === this.draggingBubble) {
        // Dragged bubble follows pointer smoothly
        b.x += (this.engine.pointer.x - this.dragOffset.x - b.x) * 22 * dt;
        b.y += (this.engine.pointer.y - this.dragOffset.y - b.y) * 22 * dt;
        this.particles.emitSparkleTrail(b.x, b.y, b.glow);

        // Check distance to target
        const distToCenter = Math.hypot(b.x - this.targetObject.x, b.y - this.targetObject.y);
        if (distToCenter < 140) {
          this.targetObject.targetScale = 1.18;
        } else {
          this.targetObject.targetScale = 1.0;
        }
      } else {
        // Natural float physics
        b.phase += dt * b.floatSpeed;
        const floatOffsetX = Math.sin(b.phase) * 12;
        const floatOffsetY = Math.cos(b.phase * 0.8) * 15;
        b.x += (b.baseX + floatOffsetX - b.x) * 6 * dt;
        b.y += (b.baseY + floatOffsetY - b.y) * 6 * dt;

        if (b.wobble > 0) {
          b.wobble -= dt * 4;
        }
      }
    }

    // Stage solved countdown to next level
    if (this.isSolved) {
      this.solveTimer += dt;
      if (this.solveTimer >= 2.2) {
        this.puzzleIndex = (this.puzzleIndex + 1) % this.puzzles.length;
        this.loadPuzzle(this.puzzleIndex);
      }
    }
  }

  onPointerDown(x, y) {
    if (this.isSolved) return;

    // Check click on Sound Prompt speaker / Help button
    const distToSpeaker = Math.hypot(x - 640, y - 180);
    if (distToSpeaker < 40) {
      this.playTargetSound();
      return;
    }

    // Check hit on bubbles
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      if (b.popped) continue;

      const dist = Math.hypot(x - b.x, y - b.y);
      if (dist <= b.radius * 1.1) {
        this.draggingBubble = b;
        this.dragOffset.x = x - b.x;
        this.dragOffset.y = y - b.y;
        b.wobble = 1;
        b.scale = 1.15;

        // PURE PHONETIC SOUND PLAYBACK! Never letter names!
        this.sound.playLetterPhoneme(b.letter);
        this.sound.playBubblePop();
        this.particles.emitSparkleTrail(b.x, b.y, b.glow);
        break;
      }
    }
  }

  onPointerMove(x, y) {
    // Handled in update
  }

  onPointerUp(x, y) {
    if (!this.draggingBubble) return;

    const b = this.draggingBubble;
    this.draggingBubble = null;
    b.scale = 1.0;
    this.targetObject.targetScale = 1.0;

    const distToTarget = Math.hypot(b.x - this.targetObject.x, b.y - this.targetObject.y);

    if (distToTarget < 130) {
      // Released inside target drop zone!
      if (b.isCorrect) {
        // Success!
        this.isSolved = true;
        b.popped = true;
        this.targetObject.bounceTimer = 1.2;
        this.targetObject.targetScale = 1.3;

        this.particles.burstBubble(b.x, b.y, b.glow);
        this.particles.burstStars(this.targetObject.x, this.targetObject.y, 35, '#FFD54F');
        this.particles.burstConfetti(this.targetObject.x, this.targetObject.y, 45);

        this.sound.playStarCollect();
        this.sound.playCelebration();

        // Audio reinforcement: pure phoneme + word
        this.sound.speakPhonicsReinforcement(b.letter, this.currentPuzzle.objectName);

        // Notify App progression
        if (window.gameApp) {
          window.gameApp.addStar(1, 'Stage 1: Bubble Phonics');
          window.gameApp.unlockSticker('golden_apple');
        }
      } else {
        // Wrong letter dragged to target - friendly feedback
        this.sound.playGentleBounce();
        this.particles.emitSparkleTrail(b.x, b.y, '#FF5252');
        this.sound.speak(`That's /${b.letter}/. Listen for /${this.currentPuzzle.targetLetter}/!`, 0.95, 1.1);
        b.x = b.baseX;
        b.y = b.baseY;
      }
    }
  }

  playTargetSound() {
    this.sound.playLetterPhoneme(this.currentPuzzle.targetLetter);
    setTimeout(() => {
      this.sound.speak(`Find the sound /${this.currentPuzzle.targetLetter}/ for ${this.currentPuzzle.objectName}!`, 0.92, 1.15);
    }, 350);
  }

  render(ctx) {
    // 1. Magical Jungle/Space Background
    this.drawBackground(ctx);

    // 2. Ambient Fireflies
    this.drawFireflies(ctx);

    // 3. Central Target Object & Drop Nest
    this.drawTargetObject(ctx);

    // 4. Floating Bubbles with Lowercase Letters
    this.drawBubbles(ctx);

    // 5. Header / Instruction Prompt
    this.drawHeaderPrompt(ctx);
  }

  drawBackground(ctx) {
    // Cosmic Jungle Deep Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 720);
    grad.addColorStop(0, '#0d1335');
    grad.addColorStop(0.5, '#13284c');
    grad.addColorStop(1, '#0e3d36');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);

    // Background Nebula & Giant Magical Moon
    ctx.save();
    ctx.beginPath();
    ctx.arc(1100, 140, 90, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 238, 170, 0.15)';
    ctx.shadowColor = '#FFE082';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();

    // Jungle Silhouette & Hanging Cosmic Vines
    ctx.fillStyle = 'rgba(10, 45, 35, 0.7)';
    ctx.beginPath();
    ctx.moveTo(0, 720);
    ctx.lineTo(0, 620);
    ctx.quadraticCurveTo(320, 560, 640, 640);
    ctx.quadraticCurveTo(960, 720, 1280, 590);
    ctx.lineTo(1280, 720);
    ctx.closePath();
    ctx.fill();

    // Glowing Jungle Mushrooms on Floor
    this.drawGlowingMushroom(ctx, 160, 660, 36, '#00E676');
    this.drawGlowingMushroom(ctx, 220, 680, 24, '#E040FB');
    this.drawGlowingMushroom(ctx, 1080, 650, 42, '#00E5FF');
    this.drawGlowingMushroom(ctx, 1150, 675, 28, '#FFD600');
  }

  drawGlowingMushroom(ctx, x, y, size, capColor) {
    ctx.save();
    // Stem
    ctx.fillStyle = '#C8E6C9';
    ctx.beginPath();
    ctx.moveTo(x - size * 0.2, y);
    ctx.lineTo(x + size * 0.2, y);
    ctx.lineTo(x + size * 0.15, y - size * 0.8);
    ctx.lineTo(x - size * 0.15, y - size * 0.8);
    ctx.fill();

    // Cap
    ctx.fillStyle = capColor;
    ctx.shadowColor = capColor;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(x, y - size * 0.8, size * 0.6, Math.PI, 0);
    ctx.fill();

    // White Spots
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x - size * 0.2, y - size * 1.05, size * 0.1, 0, Math.PI * 2);
    ctx.arc(x + size * 0.2, y - size * 1.05, size * 0.1, 0, Math.PI * 2);
    ctx.arc(x, y - size * 1.2, size * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawFireflies(ctx) {
    ctx.save();
    for (const f of this.ambientFireflies) {
      const alpha = 0.3 + 0.7 * Math.abs(Math.sin(f.phase));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = f.color;
      ctx.shadowColor = f.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawTargetObject(ctx) {
    const obj = this.targetObject;
    const bounceOffset = Math.sin(this.time * 3) * 6;
    const cy = obj.y + bounceOffset;

    ctx.save();
    ctx.translate(obj.x, cy);
    ctx.scale(obj.scale, obj.scale);

    // Glowing Target Nest Ring
    ctx.beginPath();
    ctx.arc(0, 0, 110, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = '#69F0AE';
    ctx.lineWidth = 4;
    ctx.setLineDash([12, 8]);
    ctx.lineDashOffset = -this.time * 25;
    ctx.shadowColor = '#69F0AE';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.fill();
    ctx.setLineDash([]); // Reset line dash

    // Draw Central Character/Item depending on puzzle
    this.drawObjectIllustration(ctx, this.currentPuzzle.svgType, 0, 0);

    // Object Name Badge below
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = 8;
    ctx.fillText(this.currentPuzzle.objectName, 0, 95);

    ctx.restore();
  }

  drawObjectIllustration(ctx, type, cx, cy) {
    ctx.save();
    ctx.translate(cx, cy - 10);

    if (type === 'apple') {
      // Big Shiny Cartoon Apple
      ctx.fillStyle = '#FF1744';
      ctx.shadowColor = '#FF5252';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(-22, 5, 45, 0, Math.PI * 2);
      ctx.arc(22, 5, 45, 0, Math.PI * 2);
      ctx.fill();

      // Leaf & Stem
      ctx.fillStyle = '#795548';
      ctx.fillRect(-4, -48, 8, 22);
      ctx.fillStyle = '#00E676';
      ctx.beginPath();
      ctx.ellipse(20, -42, 22, 10, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // Cute Cartoon Eyes & Smile
      this.drawCuteFace(ctx, 0, 8);
    } else if (type === 'sun') {
      // Cheerful Golden Sun
      ctx.fillStyle = '#FFD600';
      ctx.shadowColor = '#FFE082';
      ctx.shadowBlur = 24;

      // Sun Rays
      for (let i = 0; i < 8; i++) {
        const rayAngle = (i / 8) * Math.PI * 2 + this.time * 0.5;
        const rx = Math.cos(rayAngle) * 55;
        const ry = Math.sin(rayAngle) * 55;
        ctx.beginPath();
        ctx.arc(rx, ry, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.fill();

      this.drawCuteFace(ctx, 0, 0);
    } else if (type === 'turtle') {
      // Cute Green Turtle
      ctx.fillStyle = '#00E676';
      ctx.shadowColor = '#69F0AE';
      ctx.shadowBlur = 15;

      // Shell
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fill();

      // Shell Pattern
      ctx.strokeStyle = '#00B0FF';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Head & Flippers
      ctx.fillStyle = '#81C784';
      ctx.beginPath();
      ctx.arc(45, -15, 18, 0, Math.PI * 2);
      ctx.fill();

      this.drawCuteFace(ctx, 42, -15, 0.7);
    } else if (type === 'cat') {
      // Orange Kitty
      ctx.fillStyle = '#FF9800';
      ctx.shadowColor = '#FFB74D';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(0, 5, 42, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.beginPath();
      ctx.moveTo(-32, -20);
      ctx.lineTo(-20, -50);
      ctx.lineTo(-5, -28);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(32, -20);
      ctx.lineTo(20, -50);
      ctx.lineTo(5, -28);
      ctx.fill();

      this.drawCuteFace(ctx, 0, 5);
    } else if (type === 'bus') {
      // Yellow Adventure Bus
      ctx.fillStyle = '#FFD600';
      ctx.shadowColor = '#FFE082';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.roundRect(-48, -30, 96, 60, 14);
      ctx.fill();

      // Windows
      ctx.fillStyle = '#00E5FF';
      ctx.fillRect(-38, -22, 22, 20);
      ctx.fillRect(-10, -22, 22, 20);
      ctx.fillRect(18, -22, 22, 20);

      // Wheels
      ctx.fillStyle = '#37474F';
      ctx.beginPath();
      ctx.arc(-26, 32, 14, 0, Math.PI * 2);
      ctx.arc(26, 32, 14, 0, Math.PI * 2);
      ctx.fill();
    } else if (type === 'fish') {
      // Rainbow Fish
      ctx.fillStyle = '#00E5FF';
      ctx.shadowColor = '#80DEEA';
      ctx.shadowBlur = 16;

      ctx.beginPath();
      ctx.ellipse(0, 0, 48, 32, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tail
      ctx.beginPath();
      ctx.moveTo(-40, 0);
      ctx.lineTo(-65, -25);
      ctx.lineTo(-55, 0);
      ctx.lineTo(-65, 25);
      ctx.closePath();
      ctx.fill();

      this.drawCuteFace(ctx, 20, -5, 0.8);
    } else if (type === 'pig') {
      // Cute Pink Piggy
      ctx.fillStyle = '#F06292';
      ctx.shadowColor = '#F8BBD0';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(0, 0, 44, 0, Math.PI * 2);
      ctx.fill();

      // Snout
      ctx.fillStyle = '#F48FB1';
      ctx.beginPath();
      ctx.ellipse(0, 8, 18, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#AD1457';
      ctx.beginPath();
      ctx.arc(-6, 8, 3, 0, Math.PI * 2);
      ctx.arc(6, 8, 3, 0, Math.PI * 2);
      ctx.fill();

      this.drawCuteFace(ctx, 0, -8);
    } else if (type === 'moon') {
      // Golden Crescent Moon
      ctx.fillStyle = '#FFF59D';
      ctx.shadowColor = '#FFF59D';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fill();
      this.drawCuteFace(ctx, -5, 0);
    } else {
      // Default star item
      ctx.fillStyle = '#FFD600';
      this.particles.drawStarShape(ctx, 0, 0, 5, 45, 20, '#FFD600');
    }

    ctx.restore();
  }

  drawCuteFace(ctx, cx, cy, scale = 1.0) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    // Big happy eyes
    ctx.fillStyle = '#1A237E';
    ctx.beginPath();
    ctx.arc(-14, -2, 7, 0, Math.PI * 2);
    ctx.arc(14, -2, 7, 0, Math.PI * 2);
    ctx.fill();

    // Eye catchlights
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(-16, -4, 2.5, 0, Math.PI * 2);
    ctx.arc(12, -4, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Cheerful rosy cheeks
    ctx.fillStyle = 'rgba(255, 64, 129, 0.45)';
    ctx.beginPath();
    ctx.arc(-22, 6, 6, 0, Math.PI * 2);
    ctx.arc(22, 6, 6, 0, Math.PI * 2);
    ctx.fill();

    // Cute curved smile
    ctx.strokeStyle = '#1A237E';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 6, 9, 0.2, Math.PI - 0.2);
    ctx.stroke();

    ctx.restore();
  }

  drawBubbles(ctx) {
    for (const b of this.bubbles) {
      if (b.popped) continue;

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.scale(b.scale, b.scale);

      // Outer Glow
      ctx.shadowColor = b.glow;
      ctx.shadowBlur = 22;

      // Translucent Bubble Spherical Gradient
      const grad = ctx.createRadialGradient(-b.radius * 0.3, -b.radius * 0.3, 5, 0, 0, b.radius);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      grad.addColorStop(0.4, b.glow + '55');
      grad.addColorStop(0.85, b.color + '88');
      grad.addColorStop(1, b.color + 'dd');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
      ctx.fill();

      // Glassy Highlight reflection arc
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, b.radius * 0.8, -Math.PI * 0.75, -Math.PI * 0.25);
      ctx.stroke();

      // Bubble rim
      ctx.strokeStyle = b.glow;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Lowercase Letter Inside Bubble
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 54px "Fredoka", "Nunito", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 10;
      ctx.fillText(b.letter, 0, 4);

      // Tiny sound indicator wave icon
      ctx.font = '16px sans-serif';
      ctx.fillText('🔊', b.radius * 0.55, -b.radius * 0.45);

      ctx.restore();
    }
  }

  drawHeaderPrompt(ctx) {
    ctx.save();

    // Top instruction pill
    ctx.fillStyle = 'rgba(10, 25, 47, 0.85)';
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00E5FF';
    ctx.shadowBlur = 14;

    ctx.beginPath();
    ctx.roundRect(340, 30, 600, 72, 36);
    ctx.fill();
    ctx.stroke();

    // Instruction Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 6;
    ctx.fillText(`Find sound for ${this.currentPuzzle.objectName}!`, 610, 66);

    // Audio Replay button inside pill
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.arc(880, 66, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1A237E';
    ctx.font = '22px sans-serif';
    ctx.fillText('🔊', 880, 66);

    // Level indicator dots
    const total = this.puzzles.length;
    const startX = 640 - (total * 22) / 2;
    for (let i = 0; i < total; i++) {
      ctx.fillStyle = i === this.puzzleIndex ? '#00E5FF' : (i < this.puzzleIndex ? '#69F0AE' : 'rgba(255,255,255,0.3)');
      ctx.beginPath();
      ctx.arc(startX + i * 22, 120, i === this.puzzleIndex ? 7 : 5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
