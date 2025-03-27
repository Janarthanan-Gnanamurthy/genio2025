/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          DEFAULT: '#10b981', // Emerald
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        accent: {
          DEFAULT: '#f97316', // Orange
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        dark: {
          DEFAULT: '#020617', // Slate 950
          100: '#1e293b', // Slate 800
          200: '#0f172a', // Slate 900
          300: '#020617', // Slate 950
        },
        light: {
          DEFAULT: '#f8fafc', // Slate 50
          100: '#f1f5f9', // Slate 100
          200: '#e2e8f0', // Slate 200
          300: '#cbd5e1', // Slate 300
        },
        darkBg: '#020617', // Add the missing darkBg color (using Slate 950)
      },
      boxShadow: {
        'glow-primary': '0 0 15px 2px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 15px 2px rgba(16, 185, 129, 0.3)',
        'glow-accent': '0 0 15px 2px rgba(249, 115, 22, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20v-1.41l2.83-2.83 1.41 1.41L1.41 20H0zm20 0v-1.41l2.83-2.83 1.41 1.41L21.41 20H20zM0 0v1.41l2.83 2.83-1.41 1.41L0 2.83V0h1.41l2.83 2.83-1.41 1.41L0 2.83V0zm22.24 0h-2.83l2.83 2.83-1.41 1.41L20 2.83V0h2.83zm1.41 1.41L20 4.24V0h1.41l2.83 2.83-1.41 1.41z\'/%3E%3C/g%3E%3C/svg%3E")',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
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
          "primary": "#6366f1",
          "secondary": "#10b981",
          "accent": "#f97316",
          "neutral": "#1e293b",
          "base-100": "#f8fafc",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0ea5e9",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        genioDark: {
          "primary": "#6366f1",
          "secondary": "#10b981",
          "accent": "#f97316",
          "neutral": "#334155",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#f1f5f9",
          "info": "#0ea5e9",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} 