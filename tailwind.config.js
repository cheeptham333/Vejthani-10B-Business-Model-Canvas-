/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vejthani: {
          navy: '#002D62',
          navyDark: '#07182F',
          navyLight: '#0B3B7B',
          teal: '#00A3AD',
          tealDark: '#00828A',
          tealLight: '#33BDC5',
          gold: '#C5A880',
          goldDark: '#A6885B',
          goldLight: '#E8D5B5',
          goldAccent: '#F39C12',
          slate: '#F8FAFC',
          cream: '#FDFBF7'
        }
      },
      fontFamily: {
        sans: ['"Prompt"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 45, 98, 0.08), 0 2px 6px -1px rgba(0, 45, 98, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 45, 98, 0.12), 0 8px 10px -6px rgba(0, 45, 98, 0.06)',
      }
    },
  },
  plugins: [],
}
