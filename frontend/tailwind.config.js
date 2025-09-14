/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Playfair Display', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        lg: '1rem', // smoother rounded corners
        md: '0.75rem',
        sm: '0.5rem',
        xl: '1.5rem',
      },
      colors: {
        background: '#f9fafb', // light gray
        foreground: '#111827', // near-black
        primary: {
          light: '#93c5fd', // light blue
          DEFAULT: '#3b82f6', // blue
          dark: '#1e40af', // navy
          foreground: '#ffffff',
        },
        secondary: {
          light: '#fbcfe8', // light pink
          DEFAULT: '#ec4899', // pink
          dark: '#9d174d',
          foreground: '#ffffff',
        },
        accent: {
          light: '#bbf7d0', // mint
          DEFAULT: '#22c55e', // green
          dark: '#14532d',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#e5e7eb',
          foreground: '#6b7280',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        border: '#d1d5db',
        input: '#f3f4f6',
        ring: '#3b82f6',
        chart: {
          1: '#3b82f6',
          2: '#22c55e',
          3: '#f59e0b',
          4: '#ef4444',
          5: '#8b5cf6',
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.08)',
        card: '0 4px 12px rgba(0,0,0,0.1)',
        glow: '0 0 15px rgba(59,130,246,0.6)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
