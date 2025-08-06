/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        neonRed: "#FF073A",
        neonBlue: "#00F9FF",
        darkBg: "#0A0A0A",
        neonPurple: "#8B5CF6",
        neonGreen: "#39FF14"
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.8s ease-out'
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        'glow': {
          'from': { textShadow: '0 0 10px #FF073A, 0 0 20px #FF073A, 0 0 30px #FF073A' },
          'to': { textShadow: '0 0 20px #FF073A, 0 0 30px #FF073A, 0 0 40px #FF073A' }
        },
        'slide-in': {
          'from': { transform: 'translateX(-100%)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 }
        },
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}
