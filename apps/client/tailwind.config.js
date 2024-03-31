import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dos: ['VT323', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        retro: {
          amber: '#FFB000',
          green: '#66FF66',
          green2: '#00FF33',
          pink: '#FFBBBB',
        },
      },
    },
  },
  plugins: [],
}
