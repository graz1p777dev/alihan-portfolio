/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:     '#07090F',
        s1:     '#0D1220',
        s2:     '#131B2E',
        border: '#1C2A42',
        accent: '#00E87A',
        blue:   '#3B82F6',
        purple: '#8B5CF6',
        orange: '#F97316',
        text:   '#EEF2FF',
        muted:  '#64748B',
        dim:    '#2D3E5A',
      },
      fontFamily: {
        sans:    ['Space Grotesk', 'sans-serif'],
        heading: ['Archivo', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
