/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        drawSpiral: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 }
        }
      },
      animation: {
        drawSpiral: 'drawSpiral 2s ease-out forwards'
      }
    },
  },
  plugins: [],
};