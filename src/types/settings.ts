export type AppTheme = 'light' | 'dark' | 'system';
export type VoiceSpeed = 'normal' | 'slow';
export type LanguageSupportLevel = 'bilingual' | 'english_only';
export type SessionDurationMinutes = 5 | 15 | 30;

export interface AppSettings {
  theme: AppTheme;
  voiceEnabled: boolean;
  voiceVolume: number; // 0.0 to 1.0
  voiceSpeed: VoiceSpeed;
  languageSupportLevel: LanguageSupportLevel;
  sessionDurationMinutes: SessionDurationMinutes;
  dailyGoalWords: number;
  soundEffects: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: 'light',
  voiceEnabled: true,
  voiceVolume: 1.0,
  voiceSpeed: 'normal',
  languageSupportLevel: 'bilingual',
  sessionDurationMinutes: 15,
  dailyGoalWords: 20,
  soundEffects: true,
};
