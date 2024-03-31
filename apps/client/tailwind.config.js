import defaultTheme from 'tailwindcss/defaultTheme'

const COLORS = {
  AMBER: '#FFB000',
  GREEN: '#66FF66',
  GREEN2: '#00FF33',
  PINK: '#FFBBBB',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        dos: ['VT323', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        retro: {
          amber: COLORS.AMBER,
          green: COLORS.GREEN,
          green2: COLORS.GREEN2,
          pink: COLORS.PINK,
        },
      },
    },
  },
  plugins: [],
}
