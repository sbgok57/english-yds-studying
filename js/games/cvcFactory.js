/**
 * Phonics Galaxy & Jungle Adventure - Stage 3: CVC Word Blending Factory
 * Steampunk/Space-Jungle conveyor belt mechanism bringing letter blocks together.
 * Sequential pure phonetic sound playback (/k/ -> /æ/ -> /t/), compression & word reveal.
 */

import { PHONICS_DATA } from '../data/phonicsData.js';

export class CVCFactoryStage {
  constructor() {
    this.engine = null;
    this.particles = null;
    this.sound = null;

    this.cvcWords = PHONICS_DATA.cvcWords;
    this.wordIndex = 0;
    this.currentWord = null;

    // Conveyor & Machine state
    this.beltSpeed = 80;
    this.beltOffset = 0;
    this.gearAngle = 0;

    this.blocks = [];
    this.machine = {
      x: 640,
      y: 350,
      width: 280,
      height: 260,
      doorProgress: 0, // 0 = open, 1 = shut
      glowIntensity: 0,
      isBlending: false,
      revealScale: 0
    };

    this.lever = { x: 1080, y: 390, angle: -0.3, isPulled: false, pullAnim: 0 };
    this.state = 'idle'; // 'idle', 'sequential_sounding', 'blending_crush', 'revealed', 'next_wait'
    this.seqStep = 0;
    this.seqTimer = 0;
    this.stateTimer = 0;
    this.time = 0;
  }

  onEnter(initData) {
    if (initData && typeof initData.wordIndex === 'number') {
      this.wordIndex = initData.wordIndex % this.cvcWords.length;
    }
    this.loadWord(this.wordIndex);
  }

  onExit() {
    this.state = 'idle';
  }

  loadWord(index) {
    this.wordIndex = index;
    this.currentWord = this.cvcWords[this.wordIndex];
    this.state = 'idle';
    this.seqStep = 0;
    this.seqTimer = 0;
    this.stateTimer = 0;
    this.machine.doorProgress = 0;
    this.machine.glowIntensity = 0;
    this.machine.isBlending = false;
    this.machine.revealScale = 0;
    this.lever.angle = -0.3;
    this.lever.isPulled = false;

    // Setup 3 letter blocks on conveyor
    this.blocks = [];
    const startX = 230;
    const spacing = 120;

    this.currentWord.letters.forEach((char, i) => {
      const letterData = PHONICS_DATA.letters[char] || { color: '#00E5FF', glow: '#80DEEA' };
      this.blocks.push({
        id: i,
        letter: char,
        phoneme: this.currentWord.phonemes[i],
        x: startX + i * spacing,
        y: 360,
        targetX: startX + i * spacing,
        targetY: 360,
        width: 80,
        height: 80,
        color: letterData.color,
        glow: letterData.glow,
        scale: 1,
        alpha: 1,
        inChamber: false
      });
    });

    // Announce voice instruction
    setTimeout(() => {
      if (this.sound) {
        this.sound.speak(`Sound out the word blocks: ${this.currentWord.letters.join(' ... ')}!`, 0.9, 1.15);
      }
    }, 400);
  }

  update(dt) {
    this.time += dt;
    this.beltOffset = (this.beltOffset + this.beltSpeed * dt) % 40;
    this.gearAngle += dt * 1.5;

    // Lever animation spring back
    if (this.lever.pullAnim > 0) {
      this.lever.pullAnim -= dt * 3;
      this.lever.angle = -0.3 + Math.sin(this.lever.pullAnim * Math.PI) * 0.7;
    }

    // State Machine
    if (this.state === 'sequential_sounding') {
      this.seqTimer += dt;
      if (this.seqTimer >= 0.85) {
        this.seqTimer = 0;
        this.advanceSequentialSound();
      }
    } else if (this.state === 'blending_crush') {
      this.stateTimer += dt;
      this.machine.glowIntensity = Math.min(1, this.machine.glowIntensity + dt * 2);
      this.gearAngle += dt * 8; // Fast spinning gears during blend!

      // Emit steam & sparks from blender machine
      if (Math.random() < 0.3) {
        this.particles.emitSteam(this.machine.x - 100, this.machine.y - 120);
        this.particles.emitSteam(this.machine.x + 100, this.machine.y - 120);
        this.particles.emitSparkleTrail(this.machine.x + (Math.random() - 0.5) * 160, this.machine.y, '#00E5FF');
      }

      if (this.stateTimer >= 1.6) {
        this.triggerWordReveal();
      }
    } else if (this.state === 'revealed') {
      this.stateTimer += dt;
      this.machine.revealScale += (1.0 - this.machine.revealScale) * 8 * dt;

      if (this.stateTimer >= 3.0) {
        this.wordIndex = (this.wordIndex + 1) % this.cvcWords.length;
        this.loadWord(this.wordIndex);
      }
    }

    // Smooth block movements
    for (const b of this.blocks) {
      b.x += (b.targetX - b.x) * 8 * dt;
      b.y += (b.targetY - b.y) * 8 * dt;
    }
  }

  startBlendingSequence() {
    if (this.state !== 'idle') return;

    this.state = 'sequential_sounding';
    this.seqStep = 0;
    this.seqTimer = 0;
    this.lever.pullAnim = 1.0;
    this.sound.playClick();
    this.sound.playConveyorTick();

    this.advanceSequentialSound();
  }

  advanceSequentialSound() {
    if (this.seqStep < this.blocks.length) {
      const b = this.blocks[this.seqStep];
      b.scale = 1.35;
      b.targetX = this.machine.x - 70 + this.seqStep * 70;
      b.targetY = this.machine.y;

      // Pure phonetic sound for this block!
      this.sound.playLetterPhoneme(b.letter);
      this.sound.playConveyorTick();
      this.particles.burstStars(b.x, b.y, 14, b.glow);

      setTimeout(() => {
        b.scale = 1.0;
      }, 350);

      this.seqStep++;
    } else {
      // All letters sounded, enter crush blend phase!
      this.state = 'blending_crush';
      this.stateTimer = 0;
      this.sound.playBlenderZap();
      this.machine.doorProgress = 1;

      // Blocks compress together into center
      this.blocks.forEach(b => {
        b.targetX = this.machine.x;
        b.alpha = 0;
      });
    }
  }

  triggerWordReveal() {
    this.state = 'revealed';
    this.stateTimer = 0;
    this.machine.doorProgress = 0;
    this.machine.isBlending = false;
    this.machine.revealScale = 0.2;

    this.sound.playStarCollect();
    this.sound.playCelebration();

    this.particles.burstConfetti(this.machine.x, this.machine.y, 60);
    this.particles.burstStars(this.machine.x, this.machine.y, 40, '#FFD600');

    // Announce the blended word loudly & encouragingly!
    this.sound.speakBlendedWord(this.currentWord.word);

    if (window.gameApp) {
      window.gameApp.addStar(1, 'Stage 3: CVC Factory');
      window.gameApp.unlockSticker('cosmic_cat');
    }
  }

  onPointerDown(x, y) {
    // Check Lever / Blend Button Hit
    if (Math.hypot(x - this.lever.x, y - this.lever.y) < 80 || (x > 960 && x < 1200 && y > 530 && y < 620)) {
      this.startBlendingSequence();
      return;
    }

    // Check individual letter block tap during idle
    if (this.state === 'idle') {
      for (const b of this.blocks) {
        if (Math.abs(x - b.x) < 45 && Math.abs(y - b.y) < 45) {
          b.scale = 1.25;
          this.sound.playLetterPhoneme(b.letter);
          this.particles.emitSparkleTrail(b.x, b.y, b.glow);
          setTimeout(() => { b.scale = 1.0; }, 250);
          break;
        }
      }
    }
  }

  render(ctx) {
    // 1. Steampunk / Cosmic Factory Background
    this.drawBackground(ctx);

    // 2. Conveyor Belt & Rotating Gears
    this.drawConveyorAndGears(ctx);

    // 3. Blending Machine Chamber
    this.drawBlendingMachine(ctx);

    // 4. Letter Blocks on Conveyor
    this.drawLetterBlocks(ctx);

    // 5. Revealed Word & Animated Picture Badge
    if (this.state === 'revealed') {
      this.drawWordReward(ctx);
    }

    // 6. Interactive Lever & Blend Button
    this.drawLeverAndControls(ctx);

    // 7. Header Instructions
    this.drawHeaderPrompt(ctx);
  }

  drawBackground(ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, 720);
    grad.addColorStop(0, '#1a102f');
    grad.addColorStop(0.5, '#281a40');
    grad.addColorStop(1, '#112233');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);

    // Factory background pipes and steam vents
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(120, 0);
    ctx.lineTo(120, 280);
    ctx.lineTo(340, 280);
    ctx.moveTo(1160, 0);
    ctx.lineTo(1160, 260);
    ctx.lineTo(940, 260);
    ctx.stroke();

    // Factory Floor Grid
    ctx.fillStyle = '#181b2e';
    ctx.fillRect(0, 520, 1280, 200);

    ctx.strokeStyle = '#2d3354';
    ctx.lineWidth = 3;
    for (let x = 0; x < 1280; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 520);
      ctx.lineTo(x, 720);
      ctx.stroke();
    }
  }

  drawConveyorAndGears(ctx) {
    // Rotating Cogwheels
    this.drawGear(ctx, 160, 240, 48, this.gearAngle, '#FF9800');
    this.drawGear(ctx, 230, 290, 32, -this.gearAngle * 1.5, '#FFC107');
    this.drawGear(ctx, 1120, 220, 54, -this.gearAngle, '#00E5FF');
    this.drawGear(ctx, 1040, 270, 34, this.gearAngle * 1.6, '#00E676');

    // Conveyor Belt Platform
    ctx.save();
    ctx.fillStyle = '#263238';
    ctx.strokeStyle = '#455A64';
    ctx.lineWidth = 6;

    ctx.beginPath();
    ctx.roundRect(140, 410, 1000, 48, 24);
    ctx.fill();
    ctx.stroke();

    // Moving belt treads
    ctx.strokeStyle = '#90A4AE';
    ctx.lineWidth = 4;
    for (let x = 160 + this.beltOffset; x < 1120; x += 36) {
      ctx.beginPath();
      ctx.moveTo(x, 414);
      ctx.lineTo(x + 12, 454);
      ctx.stroke();
    }

    // Support pillars
    ctx.fillStyle = '#37474F';
    ctx.fillRect(260, 458, 28, 70);
    ctx.fillRect(626, 458, 28, 70);
    ctx.fillRect(980, 458, 28, 70);

    ctx.restore();
  }

  drawGear(ctx, cx, cy, radius, angle, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    const teeth = 8;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;

    ctx.beginPath();
    for (let i = 0; i < teeth; i++) {
      const a1 = (i / teeth) * Math.PI * 2;
      const a2 = a1 + (Math.PI / teeth) * 0.5;
      const a3 = a1 + (Math.PI / teeth);

      ctx.lineTo(Math.cos(a1) * radius, Math.sin(a1) * radius);
      ctx.lineTo(Math.cos(a2) * (radius + 12), Math.sin(a2) * (radius + 12));
      ctx.lineTo(Math.cos(a3) * radius, Math.sin(a3) * radius);
    }
    ctx.closePath();
    ctx.fill();

    // Center gear hole
    ctx.fillStyle = '#1A102F';
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawBlendingMachine(ctx) {
    const m = this.machine;
    ctx.save();
    ctx.translate(m.x, m.y);

    // Glowing Chamber Aura
    if (this.state === 'blending_crush') {
      ctx.shadowColor = '#00E5FF';
      ctx.shadowBlur = 40;
    }

    // Glass Chamber Dome
    const glassGrad = ctx.createLinearGradient(0, -m.height / 2, 0, m.height / 2);
    glassGrad.addColorStop(0, 'rgba(0, 229, 255, 0.45)');
    glassGrad.addColorStop(1, 'rgba(0, 230, 118, 0.2)');

    ctx.fillStyle = glassGrad;
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect(-m.width / 2, -m.height / 2, m.width, m.height, 36);
    ctx.fill();
    ctx.stroke();

    // Machine Top Dome / Funnel
    ctx.fillStyle = '#37474F';
    ctx.strokeStyle = '#78909C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, -m.height / 2, 50, Math.PI, 0);
    ctx.fill();
    ctx.stroke();

    // Glowing Neon Vacuum Tube on Top
    ctx.fillStyle = this.state === 'blending_crush' ? '#FFD600' : '#00E676';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(0, -m.height / 2 - 20, 14, 0, Math.PI * 2);
    ctx.fill();

    // Metallic Base & Clamps
    ctx.fillStyle = '#263238';
    ctx.fillRect(-m.width / 2 - 15, m.height / 2 - 20, m.width + 30, 30);

    // Sliding Shutters / Doors
    if (m.doorProgress > 0) {
      ctx.fillStyle = '#455A64';
      ctx.strokeStyle = '#90A4AE';
      ctx.lineWidth = 3;
      const doorW = (m.width / 2) * m.doorProgress;

      // Left door
      ctx.fillRect(-m.width / 2, -m.height / 2 + 10, doorW, m.height - 20);
      ctx.strokeRect(-m.width / 2, -m.height / 2 + 10, doorW, m.height - 20);

      // Right door
      ctx.fillRect(m.width / 2 - doorW, -m.height / 2 + 10, doorW, m.height - 20);
      ctx.strokeRect(m.width / 2 - doorW, -m.height / 2 + 10, doorW, m.height - 20);
    }

    ctx.restore();
  }

  drawLetterBlocks(ctx) {
    if (this.state === 'revealed') return;

    for (const b of this.blocks) {
      if (b.alpha <= 0) continue;

      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.translate(b.x, b.y);
      ctx.scale(b.scale, b.scale);

      // Block Drop Shadow & Neon Glow
      ctx.shadowColor = b.glow;
      ctx.shadowBlur = 18;

      // Letter Block Cube Gradient
      const blockGrad = ctx.createLinearGradient(-b.width / 2, -b.height / 2, b.width / 2, b.height / 2);
      blockGrad.addColorStop(0, b.color);
      blockGrad.addColorStop(1, '#1A237E');

      ctx.fillStyle = blockGrad;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(-b.width / 2, -b.height / 2, b.width, b.height, 18);
      ctx.fill();
      ctx.stroke();

      // Block Face Highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fillRect(-b.width / 2 + 8, -b.height / 2 + 8, b.width - 16, 12);

      // Pure Lowercase Letter
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 52px "Fredoka", "Nunito", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 6;
      ctx.fillText(b.letter, 0, 4);

      ctx.restore();
    }
  }

  drawWordReward(ctx) {
    const w = this.currentWord;
    const m = this.machine;

    ctx.save();
    ctx.translate(m.x, m.y);
    ctx.scale(m.revealScale, m.revealScale);

    // Big Victory Badge Background
    ctx.fillStyle = 'rgba(10, 25, 55, 0.95)';
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#FFD600';
    ctx.shadowBlur = 35;

    ctx.beginPath();
    ctx.roundRect(-180, -160, 360, 320, 36);
    ctx.fill();
    ctx.stroke();

    // Word Picture Emoji / Illustration
    ctx.font = '76px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(w.emoji, 0, -55);

    // Blended Word in Big Bold Letters
    ctx.fillStyle = '#00E676';
    ctx.font = 'bold 58px "Fredoka", "Nunito", sans-serif';
    ctx.shadowColor = '#69F0AE';
    ctx.shadowBlur = 15;
    ctx.fillText(w.word.toUpperCase(), 0, 45);

    // Phonetic Breakdown pill
    ctx.fillStyle = '#FFF59D';
    ctx.font = 'bold 24px "Fredoka", "Nunito", sans-serif';
    ctx.fillText(w.phonemes.join(' + '), 0, 105);

    ctx.restore();
  }

  drawLeverAndControls(ctx) {
    const lev = this.lever;
    ctx.save();

    // Lever Base
    ctx.fillStyle = '#37474F';
    ctx.strokeStyle = '#78909C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(lev.x, lev.y + 40, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Lever Stick
    ctx.translate(lev.x, lev.y + 40);
    ctx.rotate(lev.angle);

    ctx.fillStyle = '#B0BEC5';
    ctx.fillRect(-8, -90, 16, 90);

    // Golden Knob Ball
    ctx.fillStyle = '#FFD600';
    ctx.shadowColor = '#FFE082';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(0, -90, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Big Glowing "BLEND!" Button below lever
    ctx.save();
    const btnX = 1080;
    const btnY = 575;
    const isReady = this.state === 'idle';

    ctx.fillStyle = isReady ? '#00E676' : '#546E7A';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.shadowColor = isReady ? '#69F0AE' : 'transparent';
    ctx.shadowBlur = 20;

    ctx.beginPath();
    ctx.roundRect(btnX - 110, btnY - 40, 220, 80, 40);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 32px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡ BLEND! ⚡', btnX, btnY);

    ctx.restore();
  }

  drawHeaderPrompt(ctx) {
    ctx.save();

    ctx.fillStyle = 'rgba(10, 25, 47, 0.85)';
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00E5FF';
    ctx.shadowBlur = 14;

    ctx.beginPath();
    ctx.roundRect(340, 30, 600, 72, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Blend sounds: ${this.currentWord.letters.join(' - ')}`, 640, 66);

    // Progress dots
    const total = this.cvcWords.length;
    const startX = 640 - (total * 22) / 2;
    for (let i = 0; i < total; i++) {
      ctx.fillStyle = i === this.wordIndex ? '#00E5FF' : (i < this.wordIndex ? '#69F0AE' : 'rgba(255,255,255,0.3)');
      ctx.beginPath();
      ctx.arc(startX + i * 22, 120, i === this.wordIndex ? 7 : 5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
