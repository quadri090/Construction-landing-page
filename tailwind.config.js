/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-backgound': "url('./src/img/footerbg.svg')"
      }
      colors: {
        'primary-green':'#68A678',
        'bg-green':'#E7FFED',
        'my-dark': '#3B4A3F'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

