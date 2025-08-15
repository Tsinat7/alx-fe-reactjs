/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',              // Vite entry point
    './src//*.{js,jsx,ts,tsx}' // All React components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};