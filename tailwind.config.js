/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f8faf8',
          100: '#f1f5f1',
          200: '#e3ebe3',
          300: '#cdd8cd',
          400: '#a8b8a8',
          500: '#7a9b7a',
          600: '#5a7c5a',
          700: '#4a6649',
          800: '#3e543e',
          900: '#354635',
        },
        'gold': {
          50: '#fefdf7',
          100: '#fdf9e8',
          200: '#faf1c5',
          300: '#f5e598',
          400: '#eed464',
          500: '#e6c441',
          600: '#d4b434',
          700: '#b19a2d',
          800: '#8f7c2a',
          900: '#766628',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
