/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1dbfaf',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },},
  },
  plugins: [],
}
