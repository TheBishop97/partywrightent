// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#FFFFFF', // White
        accent: '#FFD700', // Gold
        background: '#FFFFFF', // Background color (white)
        darkBackground: '#000000', // Dark mode background color (black)
        textPrimary: '#000000', // Primary text color (black)
        textSecondary: '#FFD700', // Secondary text color (gold)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
      },
    },
  },
  plugins: [],
};

export default config;
