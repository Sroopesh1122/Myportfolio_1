/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px', // Extra small breakpoint
        'sm': '600px',  // Small breakpoint
        'md': '950px',  // Medium breakpoint
        'lg': '1024px', // Large breakpoint
        'xl': '1280px', // Extra large breakpoint
        '2xl': '1536px' // 2X large breakpoint
      },
    },
  },
  plugins: [],
}