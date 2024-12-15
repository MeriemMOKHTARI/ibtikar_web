/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
"./src/**/*.{js,jsx,ts,tsx}"  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0077B6',
        'primary-hover': '#006299',
        'primary-light': '#026AA21A',
        'primary-text': '#026AA2',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
