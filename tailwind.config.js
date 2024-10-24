/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mouse-memoirs': ['"Mouse Memoirs"', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
      },
      fontStyle: {
        normal: 'normal',
      },
    },
  },
  plugins: [],
}