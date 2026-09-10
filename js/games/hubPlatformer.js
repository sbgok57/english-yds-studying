/**
 * Phonics Galaxy & Jungle Adventure - 2D Platformer Hub & Explorer Mode
 * Playable hero "Astro the Space Tiger" journeys through magical space-jungle islands,
 * bounces on mushroom springs, collects phoneme gems, and enters Stage Portals.
 */

export class HubPlatformerStage {
  constructor() {
    this.engine = null;
    this.particles = null;
    this.sound = null;

    // World bounds
    this.worldWidth = 3200;
    this.worldHeight = 1000;

    // Camera
    this.camera = { x: 0, y: 0 };

    // Player Hero (Astro the Tiger)
    this.player = {
      x: 200,
      y: 650,
      vx: 0,
      vy: 0,
      width: 54,
      height: 64,
      isGrounded: false,
      facing: 1, // 1 = right, -1 = left
      runFrame: 0,
      jumpAnim: 0,
      idleAnim: 0
    };

    // Platforms
    this.platforms = [
      // Ground Islands
      { x: 0, y: 720, width: 750, height: 280, type: 'ground' },
      { x: 850, y: 720, width: 700, height: 280, type: 'ground' },
      { x: 1650, y: 720, width: 750, height: 280, type: 'ground' },
      { x: 2500, y: 720, width: 700, height: 280, type: 'ground' },

      // Floating Mid-air Jungle Islands
      { x: 420, y: 560, width: 220, height: 40, type: 'floating' },
      { x: 720, y: 440, width: 200, height: 40, type: 'floating' },
      { x: 1050, y: 540, width: 240, height: 40, type: 'floating' },
      { x: 1350, y: 420, width: 220, height: 40, type: 'floating' },
      { x: 1820, y: 550, width: 240, height: 40, type: 'floating' },
      { x: 2150, y: 430, width: 220, height: 40, type: 'floating' },
      { x: 2680, y: 540, width: 250, height: 40, type: 'floating' }
    ];

    // Bouncy Mushroom Springs
    this.mushrooms = [
      { x: 620, y: 720, radius: 36, bounceStrength: -720, color: '#E040FB' },
      { x: 1480, y: 720, radius: 36, bounceStrength: -720, color: '#00E676' },
      { x: 2320, y: 720, radius: 36, bounceStrength: -750, color: '#FFD600' }
    ];

    // Collectible Phonics Crystals & Stars
    this.collectibles = [
      { x: 480, y: 500, letter: 'a', sound: 'ah', collected: false, color: '#FF5722' },
      { x: 780, y: 380, letter: 's', sound: 'sss', collected: false, color: '#FFD600' },
      { x: 1120, y: 470, letter: 't', sound: 'tuh', collected: false, color: '#26A69A' },
      { x: 1420, y: 350, letter: 'p', sound: 'puh', collected: false, color: '#F06292' },
      { x: 1880, y: 480, letter: 'c', sound: 'kuh', collected: false, color: '#FF9800' },
      { x: 2220, y: 360, letter: 'm', sound: 'mmm', collected: false, color: '#3F51B5' },
      { x: 2750, y: 470, letter: 'r', sound: 'rrr', collected: false, color: '#E53935' }
    ];

    // Stage Portals
    this.portals = [
      {
        id: 'stage1',
        sceneName: 'bubblePhonics',
        title: 'Stage 1: Sound Bubbles',
        subtitle: 'Sound Recognition',
        x: 320,
        y: 720,
        color: '#00E5FF',
        glow: '#80DEEA',
        icon: '🍎'
      },
      {
        id: 'stage2',
        sceneName: 'letterTracing',
        title: 'Stage 2: Letter Tracing',
        subtitle: 'Writing Mechanics',
        x: 1180,
        y: 720,
        color: '#FFD600',
        glow: '#FFE082',
        icon: '✏️'
      },
      {
        id: 'stage3',
        sceneName: 'cvcFactory',
        title: 'Stage 3: CVC Factory',
        subtitle: 'Sound Blending',
        x: 1980,
        y: 720,
        color: '#FF9800',
        glow: '#FFD54F',
        icon: '⚙️'
      },
      {
        id: 'stage4',
        sceneName: 'alienPopup',
        title: 'Stage 4: Alien Sight Words',
        subtitle: 'Sight Word Challenge',
        x: 2800,
        y: 720,
        color: '#E040FB',
        glow: '#EA80FC',
        icon: '👽'
      }
    ];

    this.activePortal = null;
    this.time = 0;

    // Virtual Touch controls state
    this.touchLeft = false;
    this.touchRight = false;
    this.touchJump = false;
  }

  onEnter() {
    this.player.vx = 0;
    this.player.vy = 0;
    this.activePortal = null;

    setTimeout(() => {
      if (this.sound) {
        this.sound.speak("Explore the Phonics Jungle! Jump into glowing portals to play minigames!", 0.92, 1.15);
      }
    }, 400);
  }

  onExit() {
    this.touchLeft = false;
    this.touchRight = false;
    this.touchJump = false;
  }

  update(dt) {
    this.time += dt;

    // Handle Input
    const keys = this.engine.keys;
    const moveLeft = keys['ArrowLeft'] || keys['KeyA'] || this.touchLeft;
    const moveRight = keys['ArrowRight'] || keys['KeyD'] || this.touchRight;
    const jump = keys['ArrowUp'] || keys['KeyW'] || keys['Space'] || this.touchJump;

    // Horizontal Physics
    const accel = 1800;
    const maxSpeed = 320;
    const friction = 1200;

    if (moveLeft) {
      this.player.vx = Math.max(-maxSpeed, this.player.vx - accel * dt);
      this.player.facing = -1;
      this.player.runFrame += dt * 14;
    } else if (moveRight) {
      this.player.vx = Math.min(maxSpeed, this.player.vx + accel * dt);
      this.player.facing = 1;
      this.player.runFrame += dt * 14;
    } else {
      // Decelerate
      if (this.player.vx > 0) {
        this.player.vx = Math.max(0, this.player.vx - friction * dt);
      } else if (this.player.vx < 0) {
        this.player.vx = Math.min(0, this.player.vx + friction * dt);
      }
      this.player.runFrame = 0;
      this.player.idleAnim += dt * 3;
    }

    // Jump Impulse
    if (jump && this.player.isGrounded) {
      this.player.vy = -620;
      this.player.isGrounded = false;
      this.sound.playJump();
      this.particles.emitSparkleTrail(this.player.x, this.player.y + 30, '#00E5FF');
    }

    // Gravity
    this.player.vy += 1500 * dt;
    this.player.y += this.player.vy * dt;
    this.player.x += this.player.vx * dt;

    // World Boundary Constraints
    this.player.x = Math.max(30, Math.min(this.worldWidth - 30, this.player.x));

    // Respawn if fell into cosmic void
    if (this.player.y > this.worldHeight + 100) {
      this.player.x = 200;
      this.player.y = 650;
      this.player.vx = 0;
      this.player.vy = 0;
      this.sound.playGentleBounce();
    }

    // Platform Collisions (One-way top collisions)
    this.player.isGrounded = false;
    for (const plat of this.platforms) {
      const pLeft = plat.x;
      const pRight = plat.x + plat.width;
      const pTop = plat.y;

      const playerBottom = this.player.y + this.player.height / 2;
      const playerPrevBottom = playerBottom - this.player.vy * dt;

      if (this.player.x > pLeft - 10 && this.player.x < pRight + 10) {
        if (this.player.vy >= 0 && playerBottom >= pTop && playerPrevBottom <= pTop + 14) {
          this.player.y = pTop - this.player.height / 2;
          this.player.vy = 0;
          this.player.isGrounded = true;
        }
      }
    }

    // Mushroom Spring Collisions
    for (const mush of this.mushrooms) {
      const dist = Math.hypot(this.player.x - mush.x, (this.player.y + this.player.height / 2) - mush.y);
      if (dist < mush.radius && this.player.vy > 0) {
        this.player.vy = mush.bounceStrength;
        this.sound.playAlienBoing();
        this.particles.burstStars(mush.x, mush.y, 16, mush.color);
      }
    }

    // Collectibles Check
    for (const col of this.collectibles) {
      if (col.collected) continue;
      const dist = Math.hypot(this.player.x - col.x, this.player.y - col.y);
      if (dist < 45) {
        col.collected = true;
        this.sound.playLetterPhoneme(col.letter);
        this.sound.playStarCollect();
        this.particles.burstStars(col.x, col.y, 25, col.color);
        if (window.gameApp) {
          window.gameApp.addStar(1, `Found phoneme gem: /${col.letter}/`);
        }
      }
    }

    // Check Nearest Stage Portal
    this.activePortal = null;
    for (const port of this.portals) {
      const dist = Math.hypot(this.player.x - port.x, this.player.y - (port.y - 70));
      if (dist < 110) {
        this.activePortal = port;
        break;
      }
    }

    // Smooth Camera Follow
    const targetCamX = this.player.x - 1280 / 2;
    const targetCamY = Math.max(0, Math.min(this.worldHeight - 720, this.player.y - 720 / 2 - 40));
    this.camera.x += (targetCamX - this.camera.x) * 6 * dt;
    this.camera.y += (targetCamY - this.camera.y) * 6 * dt;
    this.camera.x = Math.max(0, Math.min(this.worldWidth - 1280, this.camera.x));
  }

  onMultiTouch(touches) {
    let left = false;
    let right = false;
    let jump = false;

    for (const t of touches) {
      if (Math.hypot(t.x - 90, t.y - 630) < 65) {
        left = true;
      }
      if (Math.hypot(t.x - 220, t.y - 630) < 65) {
        right = true;
      }
      if (Math.hypot(t.x - 1190, t.y - 630) < 70) {
        jump = true;
      }
    }

    this.touchLeft = left;
    this.touchRight = right;
    this.touchJump = jump;
  }

  onPointerDown(x, y) {
    // Left Arrow
    if (Math.hypot(x - 90, y - 630) < 65) {
      this.touchLeft = true;
      return;
    }
    // Right Arrow
    if (Math.hypot(x - 220, y - 630) < 65) {
      this.touchRight = true;
      return;
    }
    // Jump Button
    if (Math.hypot(x - 1190, y - 630) < 70) {
      this.touchJump = true;
      return;
    }

    // Check "Enter Stage" button if near active portal
    if (this.activePortal) {
      const btnX = 640;
      const btnY = 560;
      if (Math.abs(x - btnX) < 140 && Math.abs(y - btnY) < 40) {
        this.enterActivePortal();
        return;
      }
    }
  }

  onPointerUp(x, y) {
    // If single pointer released
    if (this.engine.activeTouches.size === 0) {
      this.touchLeft = false;
      this.touchRight = false;
      this.touchJump = false;
    }
  }

  enterActivePortal() {
    if (!this.activePortal) return;
    this.sound.playCelebration();
    this.particles.burstConfetti(this.activePortal.x - this.camera.x, this.activePortal.y - this.camera.y - 80, 50);

    setTimeout(() => {
      this.engine.switchScene(this.activePortal.sceneName);
    }, 250);
  }

  render(ctx) {
    ctx.save();

    // 1. Parallax Space-Jungle Sky
    this.drawParallaxSky(ctx);

    // Apply Camera Transform for World Objects
    ctx.translate(-this.camera.x, -this.camera.y);

    // 2. Stage Portals
    this.drawPortals(ctx);

    // 3. Platforms & Islands
    this.drawPlatforms(ctx);

    // 4. Bouncy Mushrooms
    this.drawMushrooms(ctx);

    // 5. Collectible Phonics Gems
    this.drawCollectibles(ctx);

    // 6. Player Hero (Astro the Tiger)
    this.drawPlayer(ctx);

    ctx.restore();

    // 7. Render Screen-Space HUD & On-screen Controls
    this.drawTouchControls(ctx);

    // 8. Portal Enter Prompt
    if (this.activePortal) {
      this.drawPortalPrompt(ctx);
    }
  }

  drawParallaxSky(ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, 720);
    grad.addColorStop(0, '#09071c');
    grad.addColorStop(0.5, '#121e42');
    grad.addColorStop(1, '#0e2b34');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);

    // Parallax Distant Stars & Planets
    ctx.save();
    const starParallax = this.camera.x * 0.15;
    ctx.fillStyle = '#FFE082';
    for (let i = 0; i < 60; i++) {
      const sx = ((i * 137 + 50) - starParallax) % 1380;
      const sy = (i * 83 + 20) % 650;
      const size = 1.5 + (i % 3);
      ctx.beginPath();
      ctx.arc(sx < 0 ? sx + 1380 : sx, sy, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Distant Neon Nebula
    ctx.fillStyle = 'rgba(224, 64, 251, 0.12)';
    ctx.beginPath();
    ctx.arc(600 - this.camera.x * 0.1, 200, 240, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawPlatforms(ctx) {
    for (const p of this.platforms) {
      ctx.save();

      // Platform Glowing Top Rim
      ctx.fillStyle = '#00E676';
      ctx.shadowColor = '#69F0AE';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.width, 18, 9);
      ctx.fill();

      // Platform Rock Body
      const rockGrad = ctx.createLinearGradient(p.x, p.y + 18, p.x, p.y + p.height);
      rockGrad.addColorStop(0, '#263238');
      rockGrad.addColorStop(1, '#10141a');

      ctx.fillStyle = rockGrad;
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y + 16, p.width, p.height - 16, [0, 0, 18, 18]);
      ctx.fill();

      // Hanging Jungle Vines
      ctx.strokeStyle = '#00C853';
      ctx.lineWidth = 3;
      for (let vx = p.x + 30; vx < p.x + p.width - 20; vx += 55) {
        ctx.beginPath();
        ctx.moveTo(vx, p.y + 18);
        ctx.quadraticCurveTo(vx + Math.sin(this.time * 2 + vx) * 6, p.y + 45, vx, p.y + 60);
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  drawMushrooms(ctx) {
    for (const m of this.mushrooms) {
      ctx.save();
      // Stem
      ctx.fillStyle = '#CFD8DC';
      ctx.fillRect(m.x - 8, m.y - 30, 16, 30);

      // Springy Cap
      ctx.fillStyle = m.color;
      ctx.shadowColor = m.color;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(m.x, m.y - 30, m.radius, Math.PI, 0);
      ctx.fill();

      // Spots
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(m.x - 14, m.y - 42, 6, 0, Math.PI * 2);
      ctx.arc(m.x + 14, m.y - 42, 6, 0, Math.PI * 2);
      ctx.arc(m.x, m.y - 52, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  drawCollectibles(ctx) {
    for (const col of this.collectibles) {
      if (col.collected) continue;

      const floatY = Math.sin(this.time * 3 + col.x) * 8;
      const cy = col.y + floatY;

      ctx.save();
      ctx.translate(col.x, cy);

      // Rotating Crystal Diamond
      ctx.fillStyle = col.color;
      ctx.shadowColor = col.color;
      ctx.shadowBlur = 20;

      ctx.beginPath();
      ctx.moveTo(0, -26);
      ctx.lineTo(22, 0);
      ctx.lineTo(0, 26);
      ctx.lineTo(-22, 0);
      ctx.closePath();
      ctx.fill();

      // Letter inside gem
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px "Fredoka", "Nunito", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(col.letter, 0, 1);

      ctx.restore();
    }
  }

  drawPortals(ctx) {
    for (const port of this.portals) {
      ctx.save();
      ctx.translate(port.x, port.y - 90);

      // Giant Glowing Stargate Ring
      ctx.strokeStyle = port.color;
      ctx.lineWidth = 8;
      ctx.shadowColor = port.glow;
      ctx.shadowBlur = 28;

      ctx.beginPath();
      ctx.arc(0, 0, 70, 0, Math.PI * 2);
      ctx.stroke();

      // Swirling Vortex Core
      const vortexGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 68);
      vortexGrad.addColorStop(0, '#FFFFFF');
      vortexGrad.addColorStop(0.4, port.glow + '88');
      vortexGrad.addColorStop(1, port.color + '22');

      ctx.fillStyle = vortexGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 66, 0, Math.PI * 2);
      ctx.fill();

      // Floating Stage Icon in Portal
      ctx.font = '48px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(port.icon, 0, 0);

      // Stage Title Banner above Portal
      ctx.fillStyle = 'rgba(10, 20, 45, 0.9)';
      ctx.strokeStyle = port.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(-110, -120, 220, 42, 21);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px "Fredoka", "Nunito", sans-serif';
      ctx.fillText(port.title, 0, -99);

      ctx.restore();
    }
  }

  drawPlayer(ctx) {
    const p = this.player;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(p.facing, 1);

    // Tail swinging
    const tailAngle = Math.sin(this.time * 6) * 0.3;
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-18, 12);
    ctx.quadraticCurveTo(-38 + Math.cos(tailAngle) * 8, 8 + Math.sin(tailAngle) * 12, -42, -5);
    ctx.stroke();

    // Body (Tiger Suit)
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.roundRect(-18, -10, 36, 42, 14);
    ctx.fill();

    // White Chest Fur
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(0, 10, 10, 14, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cute Tiger Head
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.arc(0, -22, 24, 0, Math.PI * 2);
    ctx.fill();

    // Tiger Ears
    ctx.beginPath();
    ctx.arc(-16, -40, 9, 0, Math.PI * 2);
    ctx.arc(16, -40, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FF5252';
    ctx.beginPath();
    ctx.arc(-16, -40, 5, 0, Math.PI * 2);
    ctx.arc(16, -40, 5, 0, Math.PI * 2);
    ctx.fill();

    // Glowing Cosmic Space Helmet Bubble
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.85)';
    ctx.fillStyle = 'rgba(0, 229, 255, 0.2)';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00E5FF';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(0, -22, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Astro Helmet Highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -22, 26, -Math.PI * 0.75, -Math.PI * 0.35);
    ctx.stroke();

    // Face & Big Happy Eyes
    ctx.fillStyle = '#1A237E';
    ctx.beginPath();
    ctx.arc(-8, -22, 4.5, 0, Math.PI * 2);
    ctx.arc(8, -22, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Little black tiger stripes on cheeks
    ctx.strokeStyle = '#3E2723';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-16, -18); ctx.lineTo(-10, -18);
    ctx.moveTo(-17, -13); ctx.lineTo(-11, -14);
    ctx.moveTo(16, -18); ctx.lineTo(10, -18);
    ctx.moveTo(17, -13); ctx.lineTo(11, -14);
    ctx.stroke();

    // Rosy cheeks & nose
    ctx.fillStyle = '#FF4081';
    ctx.beginPath();
    ctx.arc(0, -16, 3, 0, Math.PI * 2);
    ctx.fill();

    // Feet / Boots
    const runOffset = Math.sin(p.runFrame) * 6;
    ctx.fillStyle = '#00E5FF';
    ctx.beginPath();
    ctx.arc(-10, 30 + runOffset, 7, 0, Math.PI * 2);
    ctx.arc(10, 30 - runOffset, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawTouchControls(ctx) {
    ctx.save();

    // Left Arrow Button
    ctx.fillStyle = 'rgba(15, 25, 55, 0.85)';
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(90, 630, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#00E5FF';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('◀', 86, 632);

    // Right Arrow Button
    ctx.fillStyle = 'rgba(15, 25, 55, 0.85)';
    ctx.strokeStyle = '#00E5FF';
    ctx.beginPath();
    ctx.arc(220, 630, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#00E5FF';
    ctx.fillText('▶', 224, 632);

    // Jump Button
    ctx.fillStyle = 'rgba(0, 230, 118, 0.85)';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#69F0AE';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(1190, 630, 52, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 26px "Fredoka", "Nunito", sans-serif';
    ctx.fillText('JUMP', 1190, 630);

    ctx.restore();
  }

  drawPortalPrompt(ctx) {
    const port = this.activePortal;
    ctx.save();

    const btnX = 640;
    const btnY = 560;

    // Glowing Enter Portal Button
    ctx.fillStyle = port.color;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.shadowColor = port.glow;
    ctx.shadowBlur = 24;

    ctx.beginPath();
    ctx.roundRect(btnX - 140, btnY - 36, 280, 72, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#1A237E';
    ctx.font = 'bold 28px "Fredoka", "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`PLAY ${port.title.toUpperCase()}`, btnX, btnY);

    ctx.restore();
  }
}
