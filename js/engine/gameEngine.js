/**
 * Phonics Galaxy & Jungle Adventure - Game Engine & Scene Manager
 * High-DPI canvas scaler, 60fps loop, scene transition router, and unified input dispatcher.
 */

import { ParticleSystem } from './particles.js';
import { soundEngine } from '../audio/phonicsAudio.js';

export class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = new ParticleSystem();
    this.scenes = new Map();
    this.currentScene = null;
    this.nextSceneName = null;
    this.transitionAlpha = 0;
    this.transitioning = false;
    this.transitionState = 'none'; // 'fade_out', 'fade_in', 'none'
    this.lastTime = 0;

    // Virtual internal resolution for crisp cartoon physics & layout
    this.virtualWidth = 1280;
    this.virtualHeight = 720;
    this.scale = 1;
    this.offsetX = 0;
    this.offsetY = 0;

    this.pointer = {
      x: 0,
      y: 0,
      isDown: false,
      justPressed: false,
      justReleased: false
    };

    this.keys = {};

    this.initEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  registerScene(name, sceneInstance) {
    sceneInstance.engine = this;
    sceneInstance.particles = this.particles;
    sceneInstance.sound = soundEngine;
    this.scenes.set(name, sceneInstance);
  }

  switchScene(name, transition = true, initData = null) {
    if (!this.scenes.has(name)) {
      console.error(`Scene ${name} not found!`);
      return;
    }

    if (!transition || !this.currentScene) {
      if (this.currentScene && this.currentScene.onExit) {
        this.currentScene.onExit();
      }
      this.currentScene = this.scenes.get(name);
      if (this.currentScene.onEnter) {
        this.currentScene.onEnter(initData);
      }
      this.transitionState = 'none';
      this.transitioning = false;
      this.transitionAlpha = 0;
      return;
    }

    this.nextSceneName = name;
    this.nextSceneInitData = initData;
    this.transitionState = 'fade_out';
    this.transitioning = true;
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;

    this.canvas.width = clientWidth * dpr;
    this.canvas.height = clientHeight * dpr;

    this.ctx.resetTransform();
    this.ctx.scale(dpr, dpr);

    // Calculate aspect ratio fit (16:9)
    const aspect = this.virtualWidth / this.virtualHeight;
    const windowAspect = clientWidth / clientHeight;

    if (windowAspect > aspect) {
      this.scale = clientHeight / this.virtualHeight;
      this.offsetX = (clientWidth - this.virtualWidth * this.scale) / 2;
      this.offsetY = 0;
    } else {
      this.scale = clientWidth / this.virtualWidth;
      this.offsetX = 0;
      this.offsetY = (clientHeight - this.virtualHeight * this.scale) / 2;
    }
  }

  screenToWorld(clientX, clientY) {
    return {
      x: (clientX - this.offsetX) / this.scale,
      y: (clientY - this.offsetY) / this.scale
    };
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.warn(err));
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.warn(err));
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  initEvents() {
    this.activeTouches = new Map();

    const dispatchMultiTouch = () => {
      if (this.currentScene && this.currentScene.onMultiTouch) {
        const touches = Array.from(this.activeTouches.values()).map(t => this.screenToWorld(t.clientX, t.clientY));
        this.currentScene.onMultiTouch(touches);
      }
    };

    // Global audio unlocker
    const unlockAudio = () => {
      soundEngine.initContext();
    };

    window.addEventListener('pointerdown', unlockAudio, { once: false, passive: true });
    window.addEventListener('touchstart', unlockAudio, { once: false, passive: true });
    window.addEventListener('keydown', unlockAudio, { once: false, passive: true });

    // Touch Event Listeners for Tablets and Smartboards
    const handleTouchStart = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        this.activeTouches.set(t.identifier, { clientX: t.clientX, clientY: t.clientY });
        const worldPos = this.screenToWorld(t.clientX, t.clientY);
        if (this.currentScene && this.currentScene.onPointerDown) {
          this.currentScene.onPointerDown(worldPos.x, worldPos.y, e, t.identifier);
        }
      }
      // Single pointer compatibility
      if (e.touches.length > 0) {
        const primary = e.touches[0];
        const worldPos = this.screenToWorld(primary.clientX, primary.clientY);
        this.pointer.x = worldPos.x;
        this.pointer.y = worldPos.y;
        this.pointer.isDown = true;
        this.pointer.justPressed = true;
      }
      dispatchMultiTouch();
    };

    const handleTouchMove = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        this.activeTouches.set(t.identifier, { clientX: t.clientX, clientY: t.clientY });
        const worldPos = this.screenToWorld(t.clientX, t.clientY);
        if (this.currentScene && this.currentScene.onPointerMove) {
          this.currentScene.onPointerMove(worldPos.x, worldPos.y, e, t.identifier);
        }
      }
      if (e.touches.length > 0) {
        const primary = e.touches[0];
        const worldPos = this.screenToWorld(primary.clientX, primary.clientY);
        this.pointer.x = worldPos.x;
        this.pointer.y = worldPos.y;
      }
      dispatchMultiTouch();
    };

    const handleTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        this.activeTouches.delete(t.identifier);
        const worldPos = this.screenToWorld(t.clientX, t.clientY);
        if (this.currentScene && this.currentScene.onPointerUp) {
          this.currentScene.onPointerUp(worldPos.x, worldPos.y, e, t.identifier);
        }
      }
      if (e.touches.length === 0) {
        this.pointer.isDown = false;
        this.pointer.justReleased = true;
      }
      dispatchMultiTouch();
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: false });

    // Mouse Fallbacks
    window.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      const worldPos = this.screenToWorld(e.clientX, e.clientY);
      this.pointer.x = worldPos.x;
      this.pointer.y = worldPos.y;
      this.pointer.isDown = true;
      this.pointer.justPressed = true;
      if (this.currentScene && this.currentScene.onPointerDown) {
        this.currentScene.onPointerDown(worldPos.x, worldPos.y, e, 'mouse');
      }
    });

    window.addEventListener('mousemove', (e) => {
      const worldPos = this.screenToWorld(e.clientX, e.clientY);
      this.pointer.x = worldPos.x;
      this.pointer.y = worldPos.y;
      if (this.currentScene && this.currentScene.onPointerMove) {
        this.currentScene.onPointerMove(worldPos.x, worldPos.y, e, 'mouse');
      }
    });

    window.addEventListener('mouseup', (e) => {
      const worldPos = this.screenToWorld(e.clientX, e.clientY);
      this.pointer.x = worldPos.x;
      this.pointer.y = worldPos.y;
      this.pointer.isDown = false;
      this.pointer.justReleased = true;
      if (this.currentScene && this.currentScene.onPointerUp) {
        this.currentScene.onPointerUp(worldPos.x, worldPos.y, e, 'mouse');
      }
    });

    // Keyboard inputs & Fullscreen shortcut 'F'
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.key === 'f' || e.key === 'F') {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          this.toggleFullscreen();
        }
      }
      if (this.currentScene && this.currentScene.onKeyDown) {
        this.currentScene.onKeyDown(e.code, e);
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (this.currentScene && this.currentScene.onKeyUp) {
        this.currentScene.onKeyUp(e.code, e);
      }
    });
  }

  start() {
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  loop(currentTime) {
    const dt = Math.min((currentTime - this.lastTime) / 1000, 0.1);
    this.lastTime = currentTime;

    this.update(dt);
    this.render();

    // Reset single-frame flags
    this.pointer.justPressed = false;
    this.pointer.justReleased = false;

    requestAnimationFrame((t) => this.loop(t));
  }

  update(dt) {
    // Handle scene transition fades
    if (this.transitionState === 'fade_out') {
      this.transitionAlpha += dt * 3.5;
      if (this.transitionAlpha >= 1) {
        this.transitionAlpha = 1;
        if (this.currentScene && this.currentScene.onExit) {
          this.currentScene.onExit();
        }
        this.currentScene = this.scenes.get(this.nextSceneName);
        if (this.currentScene.onEnter) {
          this.currentScene.onEnter(this.nextSceneInitData);
        }
        this.transitionState = 'fade_in';
      }
    } else if (this.transitionState === 'fade_in') {
      this.transitionAlpha -= dt * 3.0;
      if (this.transitionAlpha <= 0) {
        this.transitionAlpha = 0;
        this.transitionState = 'none';
        this.transitioning = false;
      }
    }

    if (this.currentScene && this.currentScene.update) {
      this.currentScene.update(dt);
    }

    this.particles.update(dt);
  }

  render() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;

    // Clear outer frame
    this.ctx.fillStyle = '#0a091e';
    this.ctx.fillRect(0, 0, clientWidth, clientHeight);

    // Set viewport clip and transform for letterboxing
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(this.offsetX, this.offsetY, this.virtualWidth * this.scale, this.virtualHeight * this.scale);
    this.ctx.clip();

    this.ctx.translate(this.offsetX, this.offsetY);
    this.ctx.scale(this.scale, this.scale);

    // Draw scene
    if (this.currentScene && this.currentScene.render) {
      this.currentScene.render(this.ctx);
    }

    // Draw global particles
    this.particles.draw(this.ctx);

    // Draw scene transition overlay
    if (this.transitionAlpha > 0) {
      this.ctx.fillStyle = `rgba(10, 9, 30, ${this.transitionAlpha})`;
      this.ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);
    }

    this.ctx.restore();
  }
}
