import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
      borderColor: { DEFAULT: 'var(--border)' },
      boxShadow: {
        focus: '0 0 0 3px color-mix(in oklab, var(--primary) 35%, transparent)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-sora)'],
      },
    },
  },
  plugins: [],
};
export default config;
