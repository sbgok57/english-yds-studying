/**
 * Phonics Galaxy & Jungle Adventure - Main App Bootstrap
 * Sets up engine, registers minigame stages, initializes audio and UI progression.
 */

import { GameEngine } from './engine/gameEngine.js';
import { soundEngine } from './audio/phonicsAudio.js';
import { HubPlatformerStage } from './games/hubPlatformer.js';
import { BubblePhonicsStage } from './games/bubblePhonics.js';
import { LetterTracingStage } from './games/letterTracing.js';
import { CVCFactoryStage } from './games/cvcFactory.js';
import { AlienPopupStage } from './games/alienPopup.js';
import { ProgressUIManager } from './ui/progressUI.js';

export class PhonicsGameApp {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.engine = new GameEngine(this.canvas);

    // Instantiate Stages
    this.hubScene = new HubPlatformerStage();
    this.stage1Scene = new BubblePhonicsStage();
    this.stage2Scene = new LetterTracingStage();
    this.stage3Scene = new CVCFactoryStage();
    this.stage4Scene = new AlienPopupStage();

    // Register Scenes with GameEngine
    this.engine.registerScene('hubPlatformer', this.hubScene);
    this.engine.registerScene('bubblePhonics', this.stage1Scene);
    this.engine.registerScene('letterTracing', this.stage2Scene);
    this.engine.registerScene('cvcFactory', this.stage3Scene);
    this.engine.registerScene('alienPopup', this.stage4Scene);

    // Progress & UI Overlay Manager
    this.progressUI = new ProgressUIManager(this);

    // Bind Welcome Overlay & Audio Unlock
    this.bindWelcomeModal();
  }

  addStar(count = 1, reason = '') {
    this.progressUI.addStars(count, reason);
  }

  unlockSticker(stickerId) {
    this.progressUI.unlockSticker(stickerId);
  }

  bindWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    const startBtn = document.getElementById('btn-start-adventure');

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        // Unlock Web Audio Context
        soundEngine.initContext();
        soundEngine.playCelebration();

        if (welcomeModal) {
          welcomeModal.classList.add('hidden');
        }

        // Start in 2D Platformer Adventure Hub!
        this.engine.switchScene('hubPlatformer', false);
        this.progressUI.highlightActiveStageNav('hubPlatformer');

        setTimeout(() => {
          soundEngine.speak("Welcome to Phonics Galaxy! Let's explore and learn!", 0.95, 1.15);
        }, 500);
      });
    }
  }

  start() {
    this.engine.start();
    // Default initial scene behind welcome screen
    this.engine.switchScene('hubPlatformer', false);
  }
}

// Bootstrap when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new PhonicsGameApp();
  window.gameApp.start();
});
