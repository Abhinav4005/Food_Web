/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '0.75fr 1.75fr 1fr 1fr 0.5fr',
      },
      spacing: {
        'custom-ml': 'max(5vw, 25px)',
      },
    },
  },
  plugins: [],
}