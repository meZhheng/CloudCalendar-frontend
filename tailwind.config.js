/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        custom: {
          '83': 'rgb(83, 100, 113)',
          'bg-gray': 'rgb(15, 20, 25, 0.1)'
        },
      },
    },
  },
  plugins: [],
}

