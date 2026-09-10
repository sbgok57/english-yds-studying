/**
 * Phonics Galaxy & Jungle Adventure - Progress & Rewards UI Manager
 * Handles Star Meter, Sticker Album modal, Celebration fanfare, and Astro Voice Companion.
 */

import { PHONICS_DATA } from '../data/phonicsData.js';
import { soundEngine } from '../audio/phonicsAudio.js';

export class ProgressUIManager {
  constructor(app) {
    this.app = app;
    this.stars = 0;
    this.stickers = JSON.parse(JSON.stringify(PHONICS_DATA.stickers));
    this.stageHistory = [];

    this.loadSaveData();
    this.bindDOM();
  }

  loadSaveData() {
    try {
      const saved = localStorage.getItem('phonics_adventure_save');
      if (saved) {
        const data = JSON.parse(saved);
        this.stars = data.stars || 0;
        if (data.unlockedStickers && Array.isArray(data.unlockedStickers)) {
          this.stickers.forEach(s => {
            if (data.unlockedStickers.includes(s.id)) {
              s.unlocked = true;
            }
          });
        }
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }

  saveData() {
    try {
      const unlockedIds = this.stickers.filter(s => s.unlocked).map(s => s.id);
      localStorage.setItem('phonics_adventure_save', JSON.stringify({
        stars: this.stars,
        unlockedStickers: unlockedIds
      }));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  bindDOM() {
    // Star count element
    this.starCountEl = document.getElementById('star-count');
    this.starBarFillEl = document.getElementById('star-bar-fill');
    this.updateStarDisplay();

    // Sticker Book Modal
    this.stickerModalEl = document.getElementById('sticker-modal');
    this.stickerGridEl = document.getElementById('sticker-grid');
    this.stickerBtnEl = document.getElementById('btn-sticker-book');
    this.closeStickerBtnEl = document.getElementById('btn-close-stickers');

    if (this.stickerBtnEl) {
      this.stickerBtnEl.addEventListener('click', () => {
        soundEngine.playClick();
        this.openStickerBook();
      });
    }

    if (this.closeStickerBtnEl) {
      this.closeStickerBtnEl.addEventListener('click', () => {
        soundEngine.playClick();
        this.closeStickerBook();
      });
    }

    // Fullscreen Toggle button
    this.fullscreenBtnEl = document.getElementById('btn-fullscreen');
    if (this.fullscreenBtnEl) {
      this.fullscreenBtnEl.addEventListener('click', () => {
        soundEngine.playClick();
        this.app.engine.toggleFullscreen();
      });
    }

    // Audio & Mute button
    this.muteBtnEl = document.getElementById('btn-mute');
    if (this.muteBtnEl) {
      this.muteBtnEl.addEventListener('click', () => {
        const isMuted = soundEngine.toggleMute();
        this.muteBtnEl.textContent = isMuted ? '🔇' : '🔊';
        this.muteBtnEl.classList.toggle('muted', isMuted);
      });
    }

    // Home / World Map button
    this.homeBtnEl = document.getElementById('btn-home');
    if (this.homeBtnEl) {
      this.homeBtnEl.addEventListener('click', () => {
        soundEngine.playClick();
        this.app.engine.switchScene('hubPlatformer');
      });
    }

    // Stage Selector Quick Nav
    const stageBtns = document.querySelectorAll('[data-stage]');
    stageBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stageName = btn.getAttribute('data-stage');
        soundEngine.playClick();
        this.app.engine.switchScene(stageName);
        this.highlightActiveStageNav(stageName);
      });
    });

    // Companion Speech bubble
    this.companionSpeechEl = document.getElementById('companion-speech');
    this.companionAvatarEl = document.getElementById('companion-avatar');
    if (this.companionAvatarEl) {
      this.companionAvatarEl.addEventListener('click', () => {
        soundEngine.playAlienGiggle();
        this.showCompanionTip("Hi friend! I'm Astro! Let's explore sounds and words together!");
        soundEngine.speak("Hi friend! I'm Astro! Let's explore sounds and words together!");
      });
    }
  }

  addStars(amount = 1, reason = '') {
    this.stars += amount;
    this.updateStarDisplay();
    this.saveData();

    // Pulse star UI animation
    if (this.starCountEl) {
      this.starCountEl.parentElement.classList.add('star-bump');
      setTimeout(() => {
        this.starCountEl.parentElement.classList.remove('star-bump');
      }, 500);
    }
  }

  updateStarDisplay() {
    if (this.starCountEl) {
      this.starCountEl.textContent = this.stars.toString();
    }
    if (this.starBarFillEl) {
      // 0-20 stars progress bar cycle
      const pct = Math.min(100, (this.stars % 20) * 5);
      this.starBarFillEl.style.width = `${pct}%`;
    }
  }

  unlockSticker(stickerId) {
    const sticker = this.stickers.find(s => s.id === stickerId);
    if (sticker && !sticker.unlocked) {
      sticker.unlocked = true;
      this.saveData();
      this.showCompanionTip(`New Sticker Unlocked: ${sticker.name}! 🎉`);
      soundEngine.speak(`Awesome! You unlocked the ${sticker.name} sticker!`);
    }
  }

  openStickerBook() {
    if (!this.stickerModalEl || !this.stickerGridEl) return;
    this.renderStickers();
    this.stickerModalEl.classList.remove('hidden');
  }

  closeStickerBook() {
    if (!this.stickerModalEl) return;
    this.stickerModalEl.classList.add('hidden');
  }

  renderStickers() {
    this.stickerGridEl.innerHTML = '';
    this.stickers.forEach(s => {
      const card = document.createElement('div');
      card.className = `sticker-card ${s.unlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="sticker-icon">${s.unlocked ? s.icon : '❓'}</div>
        <div class="sticker-name">${s.unlocked ? s.name : 'Secret Star'}</div>
        <div class="sticker-rarity">${s.rarity}</div>
        <div class="sticker-desc">${s.unlocked ? s.desc : 'Keep playing to unlock!'}</div>
      `;
      if (s.unlocked) {
        card.addEventListener('click', () => {
          soundEngine.playSparkle();
          soundEngine.speak(s.name);
        });
      }
      this.stickerGridEl.appendChild(card);
    });
  }

  showCompanionTip(text, duration = 4000) {
    if (!this.companionSpeechEl) return;
    this.companionSpeechEl.textContent = text;
    this.companionSpeechEl.classList.remove('hidden');
    clearTimeout(this.speechTimeout);
    this.speechTimeout = setTimeout(() => {
      this.companionSpeechEl.classList.add('hidden');
    }, duration);
  }

  highlightActiveStageNav(stageName) {
    const stageBtns = document.querySelectorAll('[data-stage]');
    stageBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-stage') === stageName);
    });
  }
}
