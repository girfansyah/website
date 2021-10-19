const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#111',
        green: {
          50: 'var(--green-50)',
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
          700: 'var(--green-700)',
          800: 'var(--green-800)',
          900: 'var(--green-900)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
      },
      fontFamily: {
        sans: "'IBM Plex Sans', sans-serif",
        mono: "'IBM Plex Mono', monospace",
      },
      fontSize: {
        light: ['13px', '20px'],
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        'header-glass': 'rgb(0,0,0, 0.3)',
      },
      borderColor: {
        DEFAULT: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      animation: {
        spin: 'spin 2s linear infinite',
        'spin-slow': 'spin 42s linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              'text-decoration': 'none',
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover', 'hover', 'active', 'checked'],
      rotate: ['group-hover'],
      scale: ['group-hover', 'active'],
      borderColor: ['hover', 'checked'],
      transitionDelay: ['hover', 'group-hover', 'focus'],
      blur: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
