import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4a90e2',
        'secondary': '#011a38',
        'primary-glow': 'rgba(74, 144, 226, 0.8)',
        'secondary-glow': 'rgba(74, 144, 226, 0.6)',
        'gradient-start': '#4a90e2',
        'gradient-middle': '#1d3d7d',
        'gradient-end': '#011a38'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 10px rgba(74, 144, 226, 0.5)'
      },
      gradientColorStops: {
        'gradient-start': 'rgba(1, 26, 56, 0.7)',
        'gradient-middle': 'rgba(74, 144, 226, 0.2)',
        'gradient-end': 'rgba(1, 26, 56, 0.7)'
      }
    },
  },
  plugins: [animations],
} 