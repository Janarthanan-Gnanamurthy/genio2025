/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#8a2be2', // Vibrant purple
          dark: '#4b0082',    // Darker purple
          light: '#d7a6ff',   // Light purple
        },
        secondary: {
          DEFAULT: '#00ff99', // Neon green
          dark: '#00cc7a',    // Darker green
        },
        darkBg: '#0d0f1e',    // Dark background
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        genio: {
          "primary": "#8a2be2",
          "secondary": "#00ff99",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#0d0f1e",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} 