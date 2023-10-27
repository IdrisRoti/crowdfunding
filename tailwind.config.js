/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px"
    },
    extend: {
      colors: {
        moderateCyan : 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        darkGray: 'hsl(0, 0%, 48%)'
      }
    },
    fontFamily: {
      commisoner: ['Commissioner', 'sans-serif']
    }
  },
  plugins: [],
}