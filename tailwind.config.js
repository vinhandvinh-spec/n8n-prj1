/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo 2"', '"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(37, 99, 235, 0.12)',
        card: '0 2px 12px rgba(30, 58, 138, 0.08)',
        pop: '0 8px 30px -6px rgba(37, 99, 235, 0.25)',
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        confetti: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(60px) rotate(180deg)', opacity: '0' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.25s ease-out both',
        'slide-up': 'slide-up 0.35s ease-out both',
        shake: 'shake 0.4s ease-in-out',
        float: 'float 3.5s ease-in-out infinite',
        confetti: 'confetti 0.9s ease-in forwards',
      },
    },
  },
  plugins: [],
};
