/**
 * Phonics Galaxy & Jungle Adventure - Curriculum & Educational Dataset
 * Designed for 6-year-olds: pure phonetic sounds, stroke paths, CVC blending, sight words.
 */

export const PHONICS_DATA = {
  // Letters with pure phonetic representations (NO letter names like "ay", "bee", "cee")
  letters: {
    'a': {
      letter: 'a',
      phoneme: '/æ/',
      soundPrompt: 'Short vowel a as in apple',
      sampleWord: 'apple',
      description: 'ah as in apple',
      color: '#FF5722',
      glow: '#FFA726',
      icon: '🍎',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Magic c curve around
            points: [
              { x: 200, y: 140 },
              { x: 150, y: 110 },
              { x: 100, y: 150 },
              { x: 100, y: 200 },
              { x: 150, y: 240 },
              { x: 200, y: 210 },
              { x: 200, y: 140 }
            ],
            guideText: 'Round like a round apple'
          },
          {
            // Stroke 2: Down line with a tiny tail
            points: [
              { x: 200, y: 130 },
              { x: 200, y: 190 },
              { x: 200, y: 240 },
              { x: 215, y: 245 }
            ],
            guideText: 'Straight down to the leaf'
          }
        ]
      }
    },
    'b': {
      letter: 'b',
      phoneme: '/b/',
      soundPrompt: 'b as in bat',
      sampleWord: 'bus',
      description: 'buh as in bus',
      color: '#4CAF50',
      glow: '#81C784',
      icon: '🚌',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Tall down stroke
            points: [
              { x: 110, y: 60 },
              { x: 110, y: 150 },
              { x: 110, y: 240 }
            ],
            guideText: 'Down the tall tree'
          },
          {
            // Stroke 2: Round belly to the right
            points: [
              { x: 110, y: 150 },
              { x: 155, y: 135 },
              { x: 200, y: 180 },
              { x: 155, y: 235 },
              { x: 110, y: 235 }
            ],
            guideText: 'Around the big belly'
          }
        ]
      }
    },
    'c': {
      letter: 'c',
      phoneme: '/k/',
      soundPrompt: 'Hard c sound as in cat',
      sampleWord: 'cat',
      description: 'kuh as in cat',
      color: '#FF9800',
      glow: '#FFD54F',
      icon: '🐱',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 210, y: 135 },
              { x: 160, y: 110 },
              { x: 100, y: 160 },
              { x: 100, y: 200 },
              { x: 155, y: 245 },
              { x: 210, y: 220 }
            ],
            guideText: 'Curl around like a caterpillar'
          }
        ]
      }
    },
    'd': {
      letter: 'd',
      phoneme: '/d/',
      soundPrompt: 'd as in dog',
      sampleWord: 'dog',
      description: 'duh as in dog',
      color: '#00BCD4',
      glow: '#80DEEA',
      icon: '🐶',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Round tummy first
            points: [
              { x: 190, y: 140 },
              { x: 145, y: 115 },
              { x: 100, y: 160 },
              { x: 100, y: 200 },
              { x: 145, y: 240 },
              { x: 190, y: 210 },
              { x: 190, y: 140 }
            ],
            guideText: 'Around the dinosaur tummy'
          },
          {
            // Stroke 2: Tall neck straight down
            points: [
              { x: 190, y: 60 },
              { x: 190, y: 150 },
              { x: 190, y: 245 }
            ],
            guideText: 'Down the tall neck'
          }
        ]
      }
    },
    'e': {
      letter: 'e',
      phoneme: '/e/',
      soundPrompt: 'Short e sound as in egg',
      sampleWord: 'egg',
      description: 'eh as in egg',
      color: '#E91E63',
      glow: '#F48FB1',
      icon: '🥚',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 100, y: 180 },
              { x: 200, y: 180 },
              { x: 180, y: 125 },
              { x: 130, y: 125 },
              { x: 95, y: 175 },
              { x: 130, y: 240 },
              { x: 195, y: 230 }
            ],
            guideText: 'Across and over the egg shell'
          }
        ]
      }
    },
    'f': {
      letter: 'f',
      phoneme: '/f/',
      soundPrompt: 'f as in fish',
      sampleWord: 'fish',
      description: 'fff as in fish',
      color: '#00E676',
      glow: '#69F0AE',
      icon: '🐠',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Hook and down
            points: [
              { x: 190, y: 80 },
              { x: 150, y: 60 },
              { x: 130, y: 95 },
              { x: 130, y: 245 }
            ],
            guideText: 'Curve over the flower and down'
          },
          {
            // Stroke 2: Cross bar
            points: [
              { x: 100, y: 145 },
              { x: 170, y: 145 }
            ],
            guideText: 'Across the stem'
          }
        ]
      }
    },
    'g': {
      letter: 'g',
      phoneme: '/g/',
      soundPrompt: 'Hard g as in goat',
      sampleWord: 'gift',
      description: 'guh as in gift',
      color: '#9C27B0',
      glow: '#CE93D8',
      icon: '🎁',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Round face
            points: [
              { x: 190, y: 130 },
              { x: 145, y: 105 },
              { x: 100, y: 150 },
              { x: 100, y: 185 },
              { x: 145, y: 215 },
              { x: 190, y: 190 },
              { x: 190, y: 130 }
            ],
            guideText: 'Around the girl face'
          },
          {
            // Stroke 2: Down and hook left
            points: [
              { x: 190, y: 130 },
              { x: 190, y: 235 },
              { x: 170, y: 270 },
              { x: 120, y: 270 }
            ],
            guideText: 'Down under and hook'
          }
        ]
      }
    },
    'h': {
      letter: 'h',
      phoneme: '/h/',
      soundPrompt: 'h as in hat',
      sampleWord: 'hat',
      description: 'huh as in hat',
      color: '#FFC107',
      glow: '#FFE082',
      icon: '🎩',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 110, y: 60 },
              { x: 110, y: 150 },
              { x: 110, y: 245 }
            ],
            guideText: 'Down from the high roof'
          },
          {
            points: [
              { x: 110, y: 160 },
              { x: 150, y: 135 },
              { x: 190, y: 165 },
              { x: 190, y: 245 }
            ],
            guideText: 'Over the hill and down'
          }
        ]
      }
    },
    'i': {
      letter: 'i',
      phoneme: '/ɪ/',
      soundPrompt: 'Short i sound as in igloo',
      sampleWord: 'igloo',
      description: 'ih as in igloo',
      color: '#03A9F4',
      glow: '#81D4FA',
      icon: '🧊',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 150, y: 130 },
              { x: 150, y: 190 },
              { x: 150, y: 245 }
            ],
            guideText: 'Down the insect body'
          },
          {
            points: [
              { x: 150, y: 80 },
              { x: 150, y: 85 }
            ],
            guideText: 'Dot for the insect head'
          }
        ]
      }
    },
    'm': {
      letter: 'm',
      phoneme: '/m/',
      soundPrompt: 'm as in moon',
      sampleWord: 'moon',
      description: 'mmm as in moon',
      color: '#3F51B5',
      glow: '#9FA8DA',
      icon: '🌙',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 80, y: 130 },
              { x: 80, y: 245 }
            ],
            guideText: 'Down Maisie'
          },
          {
            points: [
              { x: 80, y: 150 },
              { x: 120, y: 130 },
              { x: 145, y: 155 },
              { x: 145, y: 245 }
            ],
            guideText: 'Over mountain one'
          },
          {
            points: [
              { x: 145, y: 150 },
              { x: 185, y: 130 },
              { x: 215, y: 155 },
              { x: 215, y: 245 }
            ],
            guideText: 'Over mountain two'
          }
        ]
      }
    },
    'n': {
      letter: 'n',
      phoneme: '/n/',
      soundPrompt: 'n as in net',
      sampleWord: 'nut',
      description: 'nnn as in nut',
      color: '#795548',
      glow: '#BCAAA4',
      icon: '🥜',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 105, y: 130 },
              { x: 105, y: 245 }
            ],
            guideText: 'Down Nobby'
          },
          {
            points: [
              { x: 105, y: 150 },
              { x: 150, y: 130 },
              { x: 190, y: 160 },
              { x: 190, y: 245 }
            ],
            guideText: 'Over his net'
          }
        ]
      }
    },
    'o': {
      letter: 'o',
      phoneme: '/ɒ/',
      soundPrompt: 'Short o as in octopus',
      sampleWord: 'orange',
      description: 'off as in orange',
      color: '#FF6F00',
      glow: '#FFB74D',
      icon: '🍊',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 150, y: 110 },
              { x: 100, y: 150 },
              { x: 100, y: 200 },
              { x: 150, y: 245 },
              { x: 200, y: 200 },
              { x: 200, y: 150 },
              { x: 150, y: 110 }
            ],
            guideText: 'All the way around the orange'
          }
        ]
      }
    },
    'p': {
      letter: 'p',
      phoneme: '/p/',
      soundPrompt: 'p as in pig',
      sampleWord: 'pig',
      description: 'puh as in pig',
      color: '#F06292',
      glow: '#F8BBD0',
      icon: '🐷',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Down under the line
            points: [
              { x: 115, y: 125 },
              { x: 115, y: 210 },
              { x: 115, y: 275 }
            ],
            guideText: 'Down the pirate plait'
          },
          {
            // Stroke 2: Round head
            points: [
              { x: 115, y: 135 },
              { x: 155, y: 120 },
              { x: 195, y: 160 },
              { x: 155, y: 205 },
              { x: 115, y: 205 }
            ],
            guideText: 'Around his face'
          }
        ]
      }
    },
    'r': {
      letter: 'r',
      phoneme: '/r/',
      soundPrompt: 'r as in rocket',
      sampleWord: 'rocket',
      description: 'rrr as in rocket',
      color: '#E53935',
      glow: '#EF9A9A',
      icon: '🚀',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 120, y: 130 },
              { x: 120, y: 245 }
            ],
            guideText: 'Down the robot body'
          },
          {
            points: [
              { x: 120, y: 160 },
              { x: 155, y: 130 },
              { x: 190, y: 140 }
            ],
            guideText: 'Over his arm'
          }
        ]
      }
    },
    's': {
      letter: 's',
      phoneme: '/s/',
      soundPrompt: 's as in snake',
      sampleWord: 'sun',
      description: 'sss as in sun',
      color: '#FFD600',
      glow: '#FFF59D',
      icon: '☀️',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 195, y: 135 },
              { x: 150, y: 110 },
              { x: 115, y: 140 },
              { x: 150, y: 175 },
              { x: 185, y: 210 },
              { x: 150, y: 245 },
              { x: 105, y: 220 }
            ],
            guideText: 'Slither down the snake'
          }
        ]
      }
    },
    't': {
      letter: 't',
      phoneme: '/t/',
      soundPrompt: 't as in turtle',
      sampleWord: 'turtle',
      description: 'tuh as in turtle',
      color: '#26A69A',
      glow: '#80CBC4',
      icon: '🐢',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            // Stroke 1: Down the tower and curl
            points: [
              { x: 150, y: 70 },
              { x: 150, y: 200 },
              { x: 155, y: 235 },
              { x: 190, y: 235 }
            ],
            guideText: 'Down the tower and curl'
          },
          {
            // Stroke 2: Across
            points: [
              { x: 110, y: 130 },
              { x: 190, y: 130 }
            ],
            guideText: 'Across the tower'
          }
        ]
      }
    },
    'u': {
      letter: 'u',
      phoneme: '/ʌ/',
      soundPrompt: 'Short u sound as in umbrella',
      sampleWord: 'umbrella',
      description: 'uh as in umbrella',
      color: '#AB47BC',
      glow: '#CE93D8',
      icon: '☂️',
      tracing: {
        viewBox: '0 0 300 300',
        strokes: [
          {
            points: [
              { x: 105, y: 130 },
              { x: 105, y: 200 },
              { x: 150, y: 240 },
              { x: 195, y: 200 },
              { x: 195, y: 130 }
            ],
            guideText: 'Down and under the umbrella'
          },
          {
            points: [
              { x: 195, y: 130 },
              { x: 195, y: 245 }
            ],
            guideText: 'Straight down to the puddle'
          }
        ]
      }
    }
  },

  // Stage 1: Sound Recognition (Bubble Drag and Drop letter to object)
  bubblePuzzles: [
    {
      targetLetter: 'a',
      objectName: 'Apple',
      objectEmoji: '🍎',
      svgType: 'apple',
      hint: 'Find the /æ/ sound for Apple!',
      correctSound: 'ah',
      bubbleLetters: ['a', 's', 't', 'm']
    },
    {
      targetLetter: 's',
      objectName: 'Sun',
      objectEmoji: '☀️',
      svgType: 'sun',
      hint: 'Find the /s/ sound for Sun!',
      correctSound: 'sss',
      bubbleLetters: ['s', 'a', 'p', 't']
    },
    {
      targetLetter: 't',
      objectName: 'Turtle',
      objectEmoji: '🐢',
      svgType: 'turtle',
      hint: 'Find the /t/ sound for Turtle!',
      correctSound: 'tuh',
      bubbleLetters: ['t', 'd', 'b', 's']
    },
    {
      targetLetter: 'c',
      objectName: 'Cat',
      objectEmoji: '🐱',
      svgType: 'cat',
      hint: 'Find the /k/ sound for Cat!',
      correctSound: 'kuh',
      bubbleLetters: ['c', 'o', 'e', 'a']
    },
    {
      targetLetter: 'b',
      objectName: 'Bus',
      objectEmoji: '🚌',
      svgType: 'bus',
      hint: 'Find the /b/ sound for Bus!',
      correctSound: 'buh',
      bubbleLetters: ['b', 'd', 'p', 'n']
    },
    {
      targetLetter: 'f',
      objectName: 'Fish',
      objectEmoji: '🐠',
      svgType: 'fish',
      hint: 'Find the /f/ sound for Fish!',
      correctSound: 'fff',
      bubbleLetters: ['f', 't', 's', 'r']
    },
    {
      targetLetter: 'p',
      objectName: 'Pig',
      objectEmoji: '🐷',
      svgType: 'pig',
      hint: 'Find the /p/ sound for Pig!',
      correctSound: 'puh',
      bubbleLetters: ['p', 'b', 'd', 'g']
    },
    {
      targetLetter: 'm',
      objectName: 'Moon',
      objectEmoji: '🌙',
      svgType: 'moon',
      hint: 'Find the /m/ sound for Moon!',
      correctSound: 'mmm',
      bubbleLetters: ['m', 'n', 'u', 'w']
    }
  ],

  // Stage 3: CVC Word Factory Blending Sets
  cvcWords: [
    {
      word: 'cat',
      letters: ['c', 'a', 't'],
      phonemes: ['/k/', '/æ/', '/t/'],
      audioSounds: ['kuh', 'ah', 'tuh'],
      meaning: 'A cute furry feline pet',
      emoji: '🐱',
      color: '#FF9800',
      svg: 'cat'
    },
    {
      word: 'pig',
      letters: ['p', 'i', 'g'],
      phonemes: ['/p/', '/ɪ/', '/g/'],
      audioSounds: ['puh', 'ih', 'guh'],
      meaning: 'A happy pink piggy',
      emoji: '🐷',
      color: '#F06292',
      svg: 'pig'
    },
    {
      word: 'sun',
      letters: ['s', 'u', 'n'],
      phonemes: ['/s/', '/ʌ/', '/n/'],
      audioSounds: ['sss', 'uh', 'nnn'],
      meaning: 'The bright glowing star in space',
      emoji: '☀️',
      color: '#FFD600',
      svg: 'sun'
    },
    {
      word: 'bus',
      letters: ['b', 'u', 's'],
      phonemes: ['/b/', '/ʌ/', '/s/'],
      audioSounds: ['buh', 'uh', 'sss'],
      meaning: 'The big yellow adventure bus',
      emoji: '🚌',
      color: '#4CAF50',
      svg: 'bus'
    },
    {
      word: 'dog',
      letters: ['d', 'o', 'g'],
      phonemes: ['/d/', '/ɒ/', '/g/'],
      audioSounds: ['duh', 'off', 'guh'],
      meaning: 'A playful puppy dog',
      emoji: '🐶',
      color: '#00BCD4',
      svg: 'dog'
    },
    {
      word: 'hat',
      letters: ['h', 'a', 't'],
      phonemes: ['/h/', '/æ/', '/t/'],
      audioSounds: ['huh', 'ah', 'tuh'],
      meaning: 'A magical explorer hat',
      emoji: '🎩',
      color: '#FFC107',
      svg: 'hat'
    },
    {
      word: 'nut',
      letters: ['n', 'u', 't'],
      phonemes: ['/n/', '/ʌ/', '/t/'],
      audioSounds: ['nnn', 'uh', 'tuh'],
      meaning: 'A tasty jungle hazelnut',
      emoji: '🥜',
      color: '#8D6E63',
      svg: 'nut'
    },
    {
      word: 'fox',
      letters: ['f', 'o', 'x'],
      phonemes: ['/f/', '/ɒ/', '/ks/'],
      audioSounds: ['fff', 'off', 'ksss'],
      meaning: 'A clever orange forest fox',
      emoji: '🦊',
      color: '#FF5722',
      svg: 'fox'
    }
  ],

  // Stage 4: Sight Word Alien Popup Challenges
  sightWords: [
    {
      targetWord: 'the',
      audioPrompt: 'Find the sight word: THE!',
      options: ['the', 'is', 'my'],
      themeColor: '#00E676'
    },
    {
      targetWord: 'is',
      audioPrompt: 'Find the sight word: IS!',
      options: ['is', 'in', 'it'],
      themeColor: '#00BCD4'
    },
    {
      targetWord: 'my',
      audioPrompt: 'Find the sight word: MY!',
      options: ['my', 'me', 'we'],
      themeColor: '#E040FB'
    },
    {
      targetWord: 'and',
      audioPrompt: 'Find the sight word: AND!',
      options: ['and', 'are', 'all'],
      themeColor: '#FFD600'
    },
    {
      targetWord: 'you',
      audioPrompt: 'Find the sight word: YOU!',
      options: ['you', 'yes', 'your'],
      themeColor: '#FF5252'
    },
    {
      targetWord: 'see',
      audioPrompt: 'Find the sight word: SEE!',
      options: ['see', 'she', 'so'],
      themeColor: '#40C4FF'
    },
    {
      targetWord: 'we',
      audioPrompt: 'Find the sight word: WE!',
      options: ['we', 'he', 'me'],
      themeColor: '#7C4DFF'
    },
    {
      targetWord: 'like',
      audioPrompt: 'Find the sight word: LIKE!',
      options: ['like', 'look', 'little'],
      themeColor: '#FF9100'
    },
    {
      targetWord: 'can',
      audioPrompt: 'Find the sight word: CAN!',
      options: ['can', 'cat', 'come'],
      themeColor: '#64DD17'
    },
    {
      targetWord: 'go',
      audioPrompt: 'Find the sight word: GO!',
      options: ['go', 'get', 'good'],
      themeColor: '#FF4081'
    }
  ],

  // Collectible Space-Jungle Stickers for the Sticker Album
  stickers: [
    { id: 'astro_tiger', name: 'Astro Tiger', icon: '🐯', rarity: 'Legendary', unlocked: true, desc: 'Your fearless explorer friend!' },
    { id: 'golden_apple', name: 'Golden Apple', icon: '🍎', rarity: 'Rare', unlocked: false, desc: 'For mastering the /æ/ phoneme!' },
    { id: 'cosmic_cat', name: 'Cosmic Kitty', icon: '🐱', rarity: 'Epic', unlocked: false, desc: 'Blended the word CAT in the factory!' },
    { id: 'star_rocket', name: 'Star Rocket', icon: '🚀', rarity: 'Rare', unlocked: false, desc: 'Zoomed through letter tracing!' },
    { id: 'jungle_alien', name: 'Zippy Alien', icon: '👽', rarity: 'Epic', unlocked: false, desc: 'Discovered high-frequency sight words!' },
    { id: 'rainbow_sun', name: 'Super Sun', icon: '☀️', rarity: 'Legendary', unlocked: false, desc: 'Master of all phonics sounds!' },
    { id: 'space_gem', name: 'Phonics Crystal', icon: '💎', rarity: 'Rare', unlocked: false, desc: 'Found hidden gems in the platformer!' },
    { id: 'speedy_bus', name: 'Galactic Bus', icon: '🚌', rarity: 'Common', unlocked: false, desc: 'Rode through the Phonics Galaxy!' }
  ]
};
