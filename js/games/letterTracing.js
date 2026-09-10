/**
 * Phonics Galaxy & Jungle Adventure - Stage 2: Letter Tracing (Writing Mechanics)
 * Large dashed lowercase outlines on a glowing cosmic slate.
 * Guided star animations, stroke order validation, glowing green fill, and sparkle particle feedback.
 */

import { PHONICS_DATA } from '../data/phonicsData.js';

export class LetterTracingStage {
  constructor() {
    this.engine = null;
    this.particles = null;
    this.sound = null;

    this.lettersList = Object.keys(PHONICS_DATA.letters);
    this.letterIndex = 0;
    this.currentLetterKey = 's';
    this.currentLetterData = null;

    this.board = { x: 640, y: 390, width: 560, height: 500 };
    this.scaleFactor = 1.4;

    this.currentStrokeIdx = 0;
    this.completedStrokes = [];
    this.currentCheckpointIdx = 0;
    this.currentDrawnPoints = [];
    this.isTracing = false;
    this.isLetterComplete = false;
    this.celebrateTimer = 0;

    this.starGuidePhase = 0;
    this.ambientStars = [];
    this.time = 0;
  }

  onEnter(initData) {
    if (initData && initData.letterKey && PHONICS_DATA.letters[initData.letterKey]) {
      this.currentLetterKey = initData.letterKey;
      this.letterIndex = this.lettersList.indexOf(this.currentLetterKey);
    }
    this.loadLetter(this.currentLetterKey);
    this.initCosmicStars();
  }

  onExit() {
    this.isTracing = false;
  }

  initCosmicStars() {
    this.ambientStars = [];
    for (let i = 0; i < 40; i++) {
      this.ambientStars.push({
        x: Math.random() * 1280,
        y: Math.random() * 720,
        size: 1 + Math.random() * 3,
        twinkle: Math.random() * Math.PI * 2,
        speed: 1 + Math.random() * 2
      });
    }
  }

  loadLetter(letterKey) {
    this.currentLetterKey = letterKey;
    this.currentLetterData = PHONICS_DATA.letters[letterKey];
    this.currentStrokeIdx = 0;
    this.completedStrokes = [];
    this.currentCheckpointIdx = 0;
    this.currentDrawnPoints = [];
    this.isTracing = false;
    this.isLetterComplete = false;
    this.celebrateTimer = 0;

    // Announce voice instruction with pure phonetic sound
    setTimeout(() => {
      if (this.sound) {
        this.sound.playLetterPhoneme(this.currentLetterKey);
        setTimeout(() => {
          this.sound.speak(`Trace the letter ${this.currentLetterKey}! Follow the glowing star!`, 0.92, 1.15);
        }, 400);
      }
    }, 300);
  }

  nextLetter() {
    this.letterIndex = (this.letterIndex + 1) % this.lettersList.length;
    this.loadLetter(this.lettersList[this.letterIndex]);
  }

  prevLetter() {
    this.letterIndex = (this.letterIndex - 1 + this.lettersList.length) % this.lettersList.length;
    this.loadLetter(this.lettersList[this.letterIndex]);
  }

  toBoardCoords(pt) {
    // Letter points are defined in 300x300 viewBox, center on board
    const originX = this.board.x - (150 * this.scaleFactor);
    const originY = this.board.y - (150 * this.scaleFactor) + 15;
    return {
      x: originX + pt.x * this.scaleFactor,
      y: originY + pt.y * this.scaleFactor
    };
  }

  update(dt) {
    this.time += dt;
    this.starGuidePhase += dt * 4;

    // Ambient stars twinkle
    for (const s of this.ambientStars) {
      s.twinkle += dt * s.speed;
    }

    if (this.isLetterComplete) {
      this.celebrateTimer += dt;
      if (this.celebrateTimer >= 2.6) {
        this.nextLetter();
      }
    }
  }

  onPointerDown(x, y) {
    if (this.isLetterComplete) return;

    // Check Previous/Next button hits
    if (Math.hypot(x - 220, y - 390) < 45) {
      this.sound.playClick();
      this.prevLetter();
      return;
    }
    if (Math.hypot(x - 1060, y - 390) < 45) {
      this.sound.playClick();
      this.nextLetter();
      return;
    }

    // Check Audio Prompt replay button
    if (Math.hypot(x - 880, y - 66) < 30) {
      this.sound.playLetterPhoneme(this.currentLetterKey);
      this.sound.speak(`Trace letter ${this.currentLetterKey}: ${this.currentLetterData.description}`);
      return;
    }

    const stroke = this.currentLetterData.tracing.strokes[this.currentStrokeIdx];
    if (!stroke) return;

    // Start point of active stroke
    const startTarget = this.toBoardCoords(stroke.points[0]);
    const distToStart = Math.hypot(x - startTarget.x, y - startTarget.y);

    // If touching near the current active checkpoint or start
    const activeTarget = this.toBoardCoords(stroke.points[this.currentCheckpointIdx]);
    const distToActive = Math.hypot(x - activeTarget.x, y - activeTarget.y);

    if (distToStart < 65 || distToActive < 65) {
      this.isTracing = true;
      this.currentDrawnPoints = [{ x, y }];
      this.sound.playSparkle();
      this.particles.emitSparkleTrail(x, y, '#69F0AE');
    }
  }

  onPointerMove(x, y) {
    if (!this.isTracing || this.isLetterComplete) return;

    this.currentDrawnPoints.push({ x, y });
    this.particles.emitSparkleTrail(x, y, '#00E676');

    const stroke = this.currentLetterData.tracing.strokes[this.currentStrokeIdx];
    if (!stroke) return;

    // Check if reaching the next checkpoint in current stroke
    const nextPt = stroke.points[this.currentCheckpointIdx + 1];
    if (nextPt) {
      const targetWorld = this.toBoardCoords(nextPt);
      const dist = Math.hypot(x - targetWorld.x, y - targetWorld.y);

      // Generous touch tolerance (60px) for 6-year-old motor skills
      if (dist < 60) {
        this.currentCheckpointIdx++;
        this.sound.playSparkle();
        this.particles.burstStars(targetWorld.x, targetWorld.y, 8, '#69F0AE');

        // Check if finished current stroke
        if (this.currentCheckpointIdx >= stroke.points.length - 1) {
          this.completeStroke();
        }
      }
    }
  }

  onPointerUp(x, y) {
    if (!this.isTracing) return;
    this.isTracing = false;

    const stroke = this.currentLetterData.tracing.strokes[this.currentStrokeIdx];
    if (!stroke) return;

    // If not completed this stroke, reset drawn progress for current stroke
    if (this.currentCheckpointIdx < stroke.points.length - 1) {
      this.currentCheckpointIdx = 0;
      this.currentDrawnPoints = [];
      this.sound.playGentleBounce();
    }
  }

  completeStroke() {
    this.completedStrokes.push(this.currentStrokeIdx);
    this.currentStrokeIdx++;
    this.currentCheckpointIdx = 0;
    this.currentDrawnPoints = [];

    const totalStrokes = this.currentLetterData.tracing.strokes.length;

    if (this.currentStrokeIdx >= totalStrokes) {
      // Completed all strokes for this letter!
      this.isLetterComplete = true;
      this.sound.playStarCollect();
      this.sound.playCelebration();

      this.particles.burstStars(this.board.x, this.board.y, 45, '#FFD54F');
      this.particles.burstConfetti(this.board.x, this.board.y, 55);

      // Play phonetic sound and praise
      this.sound.speakPhonicsReinforcement(this.currentLetterKey, this.currentLetterData.sampleWord);

      if (window.gameApp) {
        window.gameApp.addStar(1, 'Stage 2: Letter Tracing');
        window.gameApp.unlockSticker('star_rocket');
      }
    } else {
      // Completed partial stroke
      this.sound.playSparkle();
      this.sound.speak('Great stroke! Keep going!');
    }
  }

  render(ctx) {
    // 1. Magical Space/Jungle Background
    this.drawBackground(ctx);

    // 2. Cosmic Slate Drawing Board
    this.drawSlateBoard(ctx);

    // 3. Render Completed & Target Letter Strokes
    this.drawLetterPath(ctx);

    // 4. Guided Star & Active Checkpoint Helper
    this.drawStarGuide(ctx);

    // 5. Navigation & Letter Carousel HUD
    this.drawHUD(ctx);
  }

  drawBackground(ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, 720);
    grad.addColorStop(0, '#100c28');
    grad.addColorStop(0.5, '#1e144a');
    grad.addColorStop(1, '#0e2b3d');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);

    // Ambient stars
    ctx.save();
    for (const s of this.ambientStars) {
      const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.twinkle));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#FFF59D';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawSlateBoard(ctx) {
    const b = this.board;
    ctx.save();

    // Board Drop Shadow & Neon Glow
    ctx.shadowColor = this.currentLetterData.glow;
    ctx.shadowBlur = 32;

    // Glowing Cosmic Slate Frame
    const slateGrad = ctx.createLinearGradient(b.x - b.width / 2, b.y - b.height / 2, b.x + b.width / 2, b.y + b.height / 2);
    slateGrad.addColorStop(0, '#161c38');
    slateGrad.addColorStop(1, '#0b0e24');

    ctx.fillStyle = slateGrad;
    ctx.strokeStyle = this.currentLetterData.color;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(b.x - b.width / 2, b.y - b.height / 2, b.width, b.height, 28);
    ctx.fill();
    ctx.stroke();

    // Inner Grid / Writing Guidelines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);

    // Top guideline, Middle dashed headline, Bottom baseline
    const yTop = b.y - 140;
    const yMid = b.y;
    const yBot = b.y + 140;

    ctx.beginPath();
    ctx.moveTo(b.x - b.width / 2 + 40, yTop);
    ctx.lineTo(b.x + b.width / 2 - 40, yTop);
    ctx.moveTo(b.x - b.width / 2 + 40, yMid);
    ctx.lineTo(b.x + b.width / 2 - 40, yMid);
    ctx.moveTo(b.x - b.width / 2 + 40, yBot);
    ctx.lineTo(b.x + b.width / 2 - 40, yBot);
    ctx.stroke();
    ctx.setLineDash([]);

    // Sample Word & Icon Badge in Board Corner
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(this.currentLetterData.icon + ' ' + this.currentLetterData.sampleWord, b.x + b.width / 2 - 30, b.y - b.height / 2 + 25);

    ctx.restore();
  }

  drawLetterPath(ctx) {
    const strokes = this.currentLetterData.tracing.strokes;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Draw dashed background outline for all strokes
    strokes.forEach((stroke, sIdx) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 38;
      ctx.setLineDash([14, 12]);

      ctx.beginPath();
      stroke.points.forEach((pt, pIdx) => {
        const wPt = this.toBoardCoords(pt);
        if (pIdx === 0) ctx.moveTo(wPt.x, wPt.y);
        else ctx.lineTo(wPt.x, wPt.y);
      });
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // 2. Draw completely filled solid glowing green strokes for completed strokes
    this.completedStrokes.forEach(sIdx => {
      const stroke = strokes[sIdx];
      ctx.strokeStyle = '#00E676';
      ctx.lineWidth = 36;
      ctx.shadowColor = '#69F0AE';
      ctx.shadowBlur = 20;

      ctx.beginPath();
      stroke.points.forEach((pt, pIdx) => {
        const wPt = this.toBoardCoords(pt);
        if (pIdx === 0) ctx.moveTo(wPt.x, wPt.y);
        else ctx.lineTo(wPt.x, wPt.y);
      });
      ctx.stroke();

      // Shiny core line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 10;
      ctx.stroke();
    });

    // 3. Draw active stroke: partially filled up to current checkpoint
    if (this.currentStrokeIdx < strokes.length && !this.isLetterComplete) {
      const activeStroke = strokes[this.currentStrokeIdx];

      if (this.currentCheckpointIdx > 0) {
        ctx.strokeStyle = '#00E676';
        ctx.lineWidth = 36;
        ctx.shadowColor = '#69F0AE';
        ctx.shadowBlur = 18;

        ctx.beginPath();
        for (let i = 0; i <= this.currentCheckpointIdx; i++) {
          const wPt = this.toBoardCoords(activeStroke.points[i]);
          if (i === 0) ctx.moveTo(wPt.x, wPt.y);
          else ctx.lineTo(wPt.x, wPt.y);
        }
        ctx.stroke();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 10;
        ctx.stroke();
      }

      // Draw current user finger drag trail
      if (this.currentDrawnPoints.length > 1) {
        ctx.strokeStyle = '#69F0AE';
        ctx.lineWidth = 32;
        ctx.beginPath();
        this.currentDrawnPoints.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
      }

      // Draw Checkpoints for the active stroke
      activeStroke.points.forEach((pt, pIdx) => {
        const wPt = this.toBoardCoords(pt);
        const isReached = pIdx <= this.currentCheckpointIdx;

        ctx.fillStyle = isReached ? '#00E676' : 'rgba(255, 255, 255, 0.4)';
        ctx.shadowColor = isReached ? '#00E676' : 'transparent';
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.arc(wPt.x, wPt.y, pIdx === 0 ? 16 : 10, 0, Math.PI * 2);
        ctx.fill();

        // Stroke number on starting point
        if (pIdx === 0) {
          ctx.fillStyle = '#000000';
          ctx.font = 'bold 16px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText((this.currentStrokeIdx + 1).toString(), wPt.x, wPt.y);
        }
      });
    }

    ctx.restore();
  }

  drawStarGuide(ctx) {
    if (this.isLetterComplete) return;

    const stroke = this.currentLetterData.tracing.strokes[this.currentStrokeIdx];
    if (!stroke) return;

    // The target checkpoint to follow
    const targetPt = stroke.points[this.currentCheckpointIdx];
    if (!targetPt) return;

    const wPt = this.toBoardCoords(targetPt);
    const floatY = Math.sin(this.starGuidePhase) * 6;

    ctx.save();
    ctx.translate(wPt.x, wPt.y + floatY);

    // Pulsing Guide Ring
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 24 + Math.sin(this.starGuidePhase * 1.5) * 6, 0, Math.PI * 2);
    ctx.stroke();

    // Glowing Star
    this.particles.drawStarShape(ctx, 0, 0, 5, 22, 10, '#FFD600');

    // Guide Hand/Pointer Icon below star
    ctx.font = '28px sans-serif';
    ctx.fillText('👆', 15, 30);

    ctx.restore();
  }

  drawHUD(ctx) {
    ctx.save();

    // Header Instruction Pill
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
    ctx.fillText(`Trace lowercase:  ${this.currentLetterKey}  ${this.currentLetterData.phoneme}`, 610, 66);

    // Audio Speaker Icon
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.arc(880, 66, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1A237E';
    ctx.font = '22px sans-serif';
    ctx.fillText('🔊', 880, 66);

    // Left Navigation Arrow Button
    ctx.fillStyle = '#3F51B5';
    ctx.shadowColor = '#7986CB';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(220, 390, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('◀', 216, 392);

    // Right Navigation Arrow Button
    ctx.fillStyle = '#3F51B5';
    ctx.beginPath();
    ctx.arc(1060, 390, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('▶', 1064, 392);

    // Letter Selector Dots along bottom
    const total = this.lettersList.length;
    const startX = 640 - (total * 28) / 2;
    for (let i = 0; i < total; i++) {
      const l = this.lettersList[i];
      const isCur = i === this.letterIndex;

      ctx.fillStyle = isCur ? '#00E5FF' : 'rgba(255,255,255,0.25)';
      ctx.shadowColor = isCur ? '#00E5FF' : 'transparent';
      ctx.shadowBlur = isCur ? 10 : 0;
      ctx.beginPath();
      ctx.arc(startX + i * 28, 680, isCur ? 14 : 9, 0, Math.PI * 2);
      ctx.fill();

      if (isCur) {
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(l, startX + i * 28, 680);
      }
    }

    ctx.restore();
  }
}
