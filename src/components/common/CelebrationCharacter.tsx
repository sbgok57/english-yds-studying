import React, { useEffect, useState } from 'react';

interface CelebrationCharacterProps {
  show: boolean;
  message?: string;
  type?: 'celebration' | 'encouragement';
  onComplete?: () => void;
  durationMs?: number;
}

const CELEBRATION_MESSAGES = [
  'Harika!',
  'Mükemmel!',
  'Doğru Cevap! 🎯',
  'Bunu da Biliyorsun! ✨',
  'Süpersin! 🚀',
  'Hafızana Kazındı! 💡',
];

const ENCOURAGEMENT_MESSAGES = [
  'Hiç sorun değil, birlikte öğreniyoruz! 🌱',
  'Bir sonrakinde kesinlikle başaracaksın! ✨',
  'Hatalar en kalıcı öğrenme fırsatıdır 💡',
  'Adım adım ustalaşıyorsun, pes etmek yok! 💪',
  'Şimdi çözüm mantığını inceleyelim 🧐',
];

export const CelebrationCharacter: React.FC<CelebrationCharacterProps> = ({
  show,
  message,
  type = 'celebration',
  onComplete,
  durationMs = 2000,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(message || '');

  useEffect(() => {
    if (show) {
      setVisible(true);
      const list = type === 'celebration' ? CELEBRATION_MESSAGES : ENCOURAGEMENT_MESSAGES;
      setSelectedMessage(
        message || list[Math.floor(Math.random() * list.length)]
      );
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, durationMs);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, message, type, durationMs, onComplete]);

  if (!visible) return null;

  const isCelebration = type === 'celebration';

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none animate-fadeIn">
      <div
        className={`flex items-end gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-2 ${
          isCelebration
            ? 'border-emerald-400 dark:border-emerald-600'
            : 'border-amber-400 dark:border-amber-600'
        }`}
      >
        {/* Animated Character SVG */}
        <div className="relative w-20 h-20 shrink-0 transform transition-transform animate-bounce">
          {isCelebration ? (
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-md"
            >
              {/* Sparkle particles */}
              <circle cx="15" cy="20" r="2.5" fill="#f59e0b" className="animate-ping" />
              <circle cx="85" cy="15" r="2" fill="#38bdf8" className="animate-pulse" />
              <polygon
                points="82,32 84,36 88,38 84,40 82,44 80,40 76,38 80,36"
                fill="#fbbf24"
              />
              <polygon
                points="18,48 20,51 23,52 20,54 18,57 17,54 14,52 17,51"
                fill="#ec4899"
              />

              {/* Legs */}
              <path
                d="M42 74L38 88M58 74L62 88"
                stroke="#1e293b"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <ellipse cx="36" cy="90" rx="5" ry="3" fill="#0f172a" />
              <ellipse cx="64" cy="90" rx="5" ry="3" fill="#0f172a" />

              {/* Torso */}
              <rect
                x="38"
                y="48"
                width="24"
                height="28"
                rx="8"
                fill="#10b981"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Arms raised in celebration */}
              <path
                d="M38 56C30 50 24 40 22 28"
                stroke="#1e293b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="22" cy="27" r="3.5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />
              <path
                d="M62 56C70 50 76 40 78 28"
                stroke="#1e293b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="78" cy="27" r="3.5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />

              {/* Head */}
              <circle
                cx="50"
                cy="32"
                r="16"
                fill="#fed7aa"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Fluffy hair */}
              <path
                d="M36 28C36 18 46 16 58 18C66 19 68 25 66 31Z"
                fill="#78350f"
                stroke="#1e293b"
                strokeWidth="1.5"
              />

              {/* Laughing eyes */}
              <path
                d="M42 30C44 27 48 27 50 30"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M52 30C54 27 58 27 60 30"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Cheeks */}
              <circle cx="40" cy="35" r="2.5" fill="#f87171" opacity="0.75" />
              <circle cx="60" cy="35" r="2.5" fill="#f87171" opacity="0.75" />

              {/* Smile */}
              <path
                d="M44 36C44 43 56 43 56 36Z"
                fill="#991b1b"
                stroke="#1e293b"
                strokeWidth="1.8"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-md"
            >
              {/* Thinking bubbles */}
              <circle cx="20" cy="22" r="3" fill="#60a5fa" opacity="0.8" />
              <circle cx="14" cy="30" r="2" fill="#93c5fd" opacity="0.6" />

              {/* Legs */}
              <path
                d="M44 74L44 88M56 74L56 88"
                stroke="#1e293b"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <ellipse cx="44" cy="90" rx="5" ry="3" fill="#0f172a" />
              <ellipse cx="56" cy="90" rx="5" ry="3" fill="#0f172a" />

              {/* Torso */}
              <rect
                x="38"
                y="48"
                width="24"
                height="28"
                rx="8"
                fill="#3b82f6"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Hand touching chin (thinking gesture) */}
              <path
                d="M62 58C66 50 62 42 54 40"
                stroke="#1e293b"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="53" cy="40" r="3" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />

              <path
                d="M38 58C34 62 30 68 30 72"
                stroke="#1e293b"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Head */}
              <circle
                cx="50"
                cy="30"
                r="16"
                fill="#fed7aa"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Wavy hair */}
              <path
                d="M34 26C34 16 48 14 62 16C68 20 66 26 64 30Z"
                fill="#92400e"
                stroke="#1e293b"
                strokeWidth="1.5"
              />

              {/* Thoughtful curious eyes */}
              <circle cx="44" cy="28" r="2" fill="#1e293b" />
              <circle cx="56" cy="28" r="2" fill="#1e293b" />
              {/* Soft curved friendly eyebrows */}
              <path d="M41 24C44 23 47 24 47 24" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M53 23C56 22 59 23 59 23" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

              {/* Soft cute thinking mouth */}
              <ellipse cx="50" cy="36" rx="2.5" ry="1.5" fill="#1e293b" />
            </svg>
          )}
        </div>

        {/* Message bubble */}
        <div className="space-y-0.5 pb-1">
          <div
            className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-wider ${
              isCelebration
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            <span>{isCelebration ? '✓ DOĞRU!' : '🌱 ÖĞRENME ANI'}</span>
          </div>
          <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
            {selectedMessage}
          </p>
        </div>
      </div>
    </div>
  );
};
