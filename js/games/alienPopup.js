/**
 * Phonics Galaxy & Jungle Adventure - Stage 4: Sight Word Alien Popup Challenge
 * Friendly aliens pop out of craters holding non-decodable sight words.
 * Audio prompt "Find: THE", star explosion & celebratory chime on correct match, gentle bounce on retry.
 */

import { PHONICS_DATA } from '../data/phonicsData.js';

export class AlienPopupStage {
  constructor() {
    this.engine = null;
    this.particles = null;
    this.sound = null;

    this.challenges = PHONICS_DATA.sightWords;
    this.challengeIndex = 0;
    this.currentChallenge = null;

    this.craters = [
      { x: 320, y: 440, width: 200, height: 80, alienType: 0 },
      { x: 640, y: 440, width: 200, height: 80, alienType: 1 },
      { x: 960, y: 440, width: 200, height: 80, alienType: 2 }
    ];

    this.aliens = [];
    this.isSolved = false;
    this.solveTimer = 0;
    this.time = 0;
    this.spaceDust = [];
  }

  onEnter(initData) {
    if (initData && typeof initData.challengeIndex === 'number') {
      this.challengeIndex = initData.challengeIndex % this.challenges.length;
    }
    this.loadChallenge(this.challengeIndex);
    this.initSpaceDust();
  }

  onExit() {
    this.isSolved = false;
  }

  initSpaceDust() {
    this.spaceDust = [];
    for (let i = 0; i < 35; i++) {
      this.spaceDust.push({
        x: Math.random() * 1280,
        y: Math.random() * 720,
        vx: (Math.random() - 0.5) * 15,
        vy: -15 - Math.random() * 20,
        size: 2 + Math.random() * 3,
        color: Math.random() > 0.5 ? '#E040FB' : '#00E5FF'
      });
    }
  }

  loadChallenge(index) {
    this.challengeIndex = index;
    this.currentChallenge = this.challenges[this.challengeIndex];
    this.isSolved = false;
    this.solveTimer = 0;

    // Shuffle options onto craters
    const shuffledOptions = [...this.currentChallenge.options].sort(() => Math.random() - 0.5);

    this.aliens = this.craters.map((crater, i) => {
      const word = shuffledOptions[i];
      const isCorrect = word === this.currentChallenge.targetWord;

      return {
        id: i,
        crater: crater,
        word: word,
        isCorrect: isCorrect,
        alienType: crater.alienType,
        x: crater.x,
        y: crater.y - 30,
        targetY: crater.y - 30, // Popped up
        hiddenY: crater.y + 70, // Inside crater
        popupProgress: 0,
        wobble: 0,
        jumpOffset: 0,
        isDancing: false,
        signScale: 1,
        color: i === 0 ? '#00E5FF' : (i === 1 ? '#00E676' : '#E040FB')
      };
    });

    // Pop up aliens with slight staggered delay
    this.aliens.forEach((alien, i) => {
      alien.popupProgress = 0;
      setTimeout(() => {
        alien.popupProgress = 1;
        if (this.sound) this.sound.playAlienGiggle();
      }, i * 180 + 100);
    });

    // Play Voice prompt
    setTimeout(() => {
      if (this.sound) {
        this.sound.speakSightWordPrompt(this.currentChallenge.targetWord);
      }
    }, 600);
  }

  update(dt) {
    this.time += dt;

    // Update space dust
    for (const d of this.spaceDust) {
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      if (d.y < 0) d.y = 720;
      if (d.x < 0) d.x = 1280;
      if (d.x > 1280) d.x = 0;
    }

    // Update Aliens animation
    for (const a of this.aliens) {
      const destY = a.popupProgress === 1 ? a.targetY : a.hiddenY;
      a.y += (destY - a.y) * 10 * dt;

      if (a.isDancing) {
        a.jumpOffset = -Math.abs(Math.sin(this.time * 8)) * 45;
        this.particles.emitSparkleTrail(a.x, a.y + a.jumpOffset, '#FFE082');
      } else {
        a.jumpOffset = Math.sin(this.time * 3 + a.id) * 6;
      }

      if (a.wobble > 0) {
        a.wobble -= dt * 4;
      }
    }

    // Stage Solved transition countdown
    if (this.isSolved) {
      this.solveTimer += dt;
      if (this.solveTimer >= 2.4) {
        this.challengeIndex = (this.challengeIndex + 1) % this.challenges.length;
        this.loadChallenge(this.challengeIndex);
      }
    }
  }

  onPointerDown(x, y) {
    // Check Replay Speaker Prompt
    if (Math.hypot(x - 880, y - 66) < 30) {
      this.sound.speakSightWordPrompt(this.currentChallenge.targetWord);
      return;
    }

    if (this.isSolved) return;

    // Check hit on Alien or Alien sign
    for (const a of this.aliens) {
      if (a.popupProgress !== 1) continue;

      const hitX = Math.abs(x - a.x) < 95;
      const hitY = y > a.y + a.jumpOffset - 140 && y < a.crater.y + 20;

      if (hitX && hitY) {
        if (a.isCorrect) {
          // Success!
          this.isSolved = true;
          a.isDancing = true;
          a.signScale = 1.3;

          this.sound.playStarCollect();
          this.sound.playCelebration();

          this.particles.burstStars(a.x, a.y - 50, 40, '#FFD600');
          this.particles.burstConfetti(a.x, a.y - 50, 50);

          this.sound.speak(`You found ${a.word.toUpperCase()}! Awesome!`, 0.95, 1.2);

          if (window.gameApp) {
            window.gameApp.addStar(1, 'Stage 4: Alien Sight Words');
            window.gameApp.unlockSticker('jungle_alien');
          }
        } else {
          // Friendly gentle bounce back down
          a.wobble = 1;
          a.popupProgress = 0;
          this.sound.playAlienBoing();
          this.sound.playGentleBounce();

          this.sound.speak(`That's ${a.word.toUpperCase()}. Find: ${this.currentChallenge.targetWord.toUpperCase()}!`, 0.95, 1.1);

          // Pop back up after a friendly pause
          setTimeout(() => {
            if (!this.isSolved) {
              a.popupProgress = 1;
              this.sound.playAlienGiggle();
            }
          }, 1200);
        }
        break;
      }
    }
  }

  render(ctx) {
    // 1. Neon Jungle Moon Sky & Landscape
    this.drawBackground(ctx);

    // 2. Cosmic Dust & Sparkles
    this.drawSpaceDust(ctx);

    // 3. Aliens popping out of craters holding signs
    this.drawAliensAndCraters(ctx);

    // 4. Header Instruction Prompt
    this.drawHeaderPrompt(ctx);
  }

  drawBackground(ctx) {
    // Cosmic Nebula Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 720);
    grad.addColorStop(0, '#0c0721');
    grad.addColorStop(0.5, '#210d3f');
    grad.addColorStop(1, '#0b3040');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);

    // Distant Neon Planets
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 140, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#E040FB33';
    ctx.shadowColor = '#E040FB';
    ctx.shadowBlur = 24;
    ctx.fill();

    // Planet Ring
    ctx.strokeStyle = '#E040FB';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(200, 140, 80, 22, -Math.PI / 6, 0, Math.PI * 2);
    ctx.stroke();

    // Giant Glowing Moon
    ctx.beginPath();
    ctx.arc(1080, 120, 75, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 214, 0, 0.2)';
    ctx.shadowColor = '#FFD600';
    ctx.shadowBlur = 30;
    ctx.fill();

    ctx.restore();

    // Crater Hills Surface
    ctx.fillStyle = '#17223b';
    ctx.beginPath();
    ctx.moveTo(0, 720);
    ctx.lineTo(0, 480);
    ctx.quadraticCurveTo(320, 420, 640, 480);
    ctx.quadraticCurveTo(960, 540, 1280, 460);
    ctx.lineTo(1280, 720);
    ctx.closePath();
    ctx.fill();
  }

  drawSpaceDust(ctx) {
    ctx.save();
    for (const d of this.spaceDust) {
      ctx.fillStyle = d.color;
      ctx.shadowColor = d.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawAliensAndCraters(ctx) {
    for (const a of this.aliens) {
      const c = a.crater;

      // Crater Back Rim
      ctx.save();
      ctx.fillStyle = '#0a101d';
      ctx.strokeStyle = '#2d3e61';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.width / 2, c.height / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw Alien Character popping out
      ctx.save();
      // Clip to above crater floor so aliens slide up smoothly
      ctx.beginPath();
      ctx.rect(c.x - c.width / 2 - 40, 0, c.width + 80, c.y + c.height * 0.2);
      ctx.clip();

      const alienY = a.y + a.jumpOffset;
      this.drawAlienCharacter(ctx, a, c.x, alienY);

      ctx.restore();

      // Crater Front Rim Lip (covers bottom of alien)
      ctx.save();
      ctx.fillStyle = '#1f2e4d';
      ctx.strokeStyle = '#3d527a';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y + 12, c.width / 2, c.height * 0.35, 0, 0, Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Word Sign held by Alien
      if (a.popupProgress > 0.3) {
        this.drawSightWordSign(ctx, a, c.x, alienY - 110);
      }
    }
  }

  drawAlienCharacter(ctx, alien, cx, cy) {
    ctx.save();
    ctx.translate(cx, cy);

    if (alien.wobble > 0) {
      ctx.rotate(Math.sin(this.time * 25) * 0.15);
    }

    if (alien.alienType === 0) {
      // One-eyed Blue Alien
      ctx.fillStyle = '#00E5FF';
      ctx.shadowColor = '#80DEEA';
      ctx.shadowBlur = 16;

      ctx.beginPath();
      ctx.ellipse(0, 0, 48, 55, 0, 0, Math.PI * 2);
      ctx.fill();

      // Giant Single Eye
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, -12, 22, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#7C4DFF';
      ctx.beginPath();
      ctx.arc(0, -12, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-3, -15, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Antenna with glowing star
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -55);
      ctx.lineTo(0, -80);
      ctx.stroke();
      ctx.fillStyle = '#FFD600';
      this.particles.drawStarShape(ctx, 0, -82, 5, 12, 5, '#FFD600');

      // Happy smile
      ctx.strokeStyle = '#006064';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 20, 14, 0.2, Math.PI - 0.2);
      ctx.stroke();
    } else if (alien.alienType === 1) {
      // Two-Horned Green Alien
      ctx.fillStyle = '#00E676';
      ctx.shadowColor = '#69F0AE';
      ctx.shadowBlur = 16;

      ctx.beginPath();
      ctx.roundRect(-46, -45, 92, 90, 30);
      ctx.fill();

      // Two Cute Eyes
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-16, -10, 14, 0, Math.PI * 2);
      ctx.arc(16, -10, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1B5E20';
      ctx.beginPath();
      ctx.arc(-16, -10, 6, 0, Math.PI * 2);
      ctx.arc(16, -10, 6, 0, Math.PI * 2);
      ctx.fill();

      // Cheerful Horns
      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.moveTo(-35, -45);
      ctx.lineTo(-45, -75);
      ctx.lineTo(-20, -45);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(35, -45);
      ctx.lineTo(45, -75);
      ctx.lineTo(20, -45);
      ctx.fill();

      // Open Joy Smile
      ctx.fillStyle = '#D81B60';
      ctx.beginPath();
      ctx.arc(0, 18, 12, 0, Math.PI);
      ctx.fill();
    } else {
      // Purple Gobbly Alien
      ctx.fillStyle = '#E040FB';
      ctx.shadowColor = '#EA80FC';
      ctx.shadowBlur = 16;

      ctx.beginPath();
      ctx.arc(0, 5, 50, 0, Math.PI * 2);
      ctx.fill();

      // 3 Mini Eyes
      for (let i = -1; i <= 1; i++) {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(i * 22, -12, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#4A148C';
        ctx.beginPath();
        ctx.arc(i * 22, -12, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Wobbly curly antennas
      ctx.strokeStyle = '#E040FB';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(-25, -60, 15, 0, Math.PI * 1.5);
      ctx.arc(25, -60, 15, -Math.PI * 0.5, Math.PI);
      ctx.stroke();

      // Rosy cheeks
      ctx.fillStyle = 'rgba(255, 64, 129, 0.5)';
      ctx.beginPath();
      ctx.arc(-26, 16, 8, 0, Math.PI * 2);
      ctx.arc(26, 16, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  drawSightWordSign(ctx, alien, sx, sy) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.scale(alien.signScale, alien.signScale);

    // Glowing Neon Sight Word Sign
    ctx.fillStyle = '#111936';
    ctx.strokeStyle = alien.color;
    ctx.lineWidth = 5;
    ctx.shadowColor = alien.color;
    ctx.shadowBlur = 22;

    ctx.beginPath();
    ctx.roundRect(-80, -35, 160, 70, 20);
    ctx.fill();
    ctx.stroke();

    // Wooden / Crystal Sign Handle down to alien hands
    ctx.fillStyle = '#78909C';
    ctx.fillRect(-6, 35, 12, 35);

    // Word Text on Sign
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 38px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = 6;
    ctx.fillText(alien.word, 0, 0);

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
    ctx.fillText(`Find Sight Word:  `, 540, 66);

    // Target word highlighted in bright yellow
    ctx.fillStyle = '#FFD600';
    ctx.font = 'bold 36px "Fredoka", "Nunito", sans-serif';
    ctx.shadowColor = '#FFD600';
    ctx.shadowBlur = 10;
    ctx.fillText(this.currentChallenge.targetWord.toUpperCase(), 710, 66);

    // Audio Speaker Icon inside pill
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.arc(880, 66, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1A237E';
    ctx.font = '22px sans-serif';
    ctx.fillText('🔊', 880, 66);

    // Level Progress Dots
    const total = this.challenges.length;
    const startX = 640 - (total * 22) / 2;
    for (let i = 0; i < total; i++) {
      ctx.fillStyle = i === this.challengeIndex ? '#00E5FF' : (i < this.challengeIndex ? '#69F0AE' : 'rgba(255,255,255,0.3)');
      ctx.beginPath();
      ctx.arc(startX + i * 22, 120, i === this.challengeIndex ? 7 : 5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
