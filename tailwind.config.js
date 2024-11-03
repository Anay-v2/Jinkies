/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'base-300': '#111111',
        'base-200': '#1A1A1A',
        'primary': '#F26227',
      }
    },
  },
  plugins: [],
}

