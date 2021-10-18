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
      },
      fontFamily: {
        sans: "'IBM Plex Sans', sans-serif",
        mono: "'IBM Plex Mono', monospace",
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
