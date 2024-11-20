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
      keyframes: {
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slowSpin: 'slowSpin 15s linear infinite',
      },
    },
  },
  plugins: [],
}