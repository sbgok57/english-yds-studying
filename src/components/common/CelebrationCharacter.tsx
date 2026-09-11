import React, { useEffect, useState } from 'react';

interface CelebrationCharacterProps {
  show: boolean;
  message?: string;
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

export const CelebrationCharacter: React.FC<CelebrationCharacterProps> = ({
  show,
  message,
  onComplete,
  durationMs = 1800,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(message || 'Harika!');

  useEffect(() => {
    if (show) {
      setVisible(true);
      setSelectedMessage(
        message || CELEBRATION_MESSAGES[Math.floor(Math.random() * CELEBRATION_MESSAGES.length)]
      );
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, durationMs);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, message, durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none animate-fadeIn">
      <div className="flex items-end gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-2 border-emerald-400 dark:border-emerald-600">
        {/* Animated Celebration Character SVG */}
        <div className="relative w-20 h-20 shrink-0 transform transition-transform animate-bounce">
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

            {/* Character Body in joyful jump */}
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

            {/* Joyful curved laughing eyes */}
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

            {/* Blushing cheeks */}
            <circle cx="40" cy="35" r="2.5" fill="#f87171" opacity="0.75" />
            <circle cx="60" cy="35" r="2.5" fill="#f87171" opacity="0.75" />

            {/* Big beaming smile */}
            <path
              d="M44 36C44 43 56 43 56 36Z"
              fill="#991b1b"
              stroke="#1e293b"
              strokeWidth="1.8"
            />
          </svg>
        </div>

        {/* Message bubble */}
        <div className="space-y-0.5 pb-1">
          <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span>✓ DOĞRU!</span>
          </div>
          <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
            {selectedMessage}
          </p>
        </div>
      </div>
    </div>
  );
};
