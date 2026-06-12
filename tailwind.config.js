/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          DEFAULT: '#0B0E1F',
          deep: '#060810',
          mid: '#1A1F3A',
          surface: '#252B4A',
          hover: '#2E3560',
        },
        champagne: {
          DEFAULT: '#E8D5A3',
          light: '#F5EDCC',
          dark: '#C4A86A',
          muted: '#A08B5A',
        },
        starlight: {
          DEFAULT: '#7B9EFF',
          glow: '#A8BEFF',
          dim: '#3D5ACC',
          pale: '#C4D2FF',
        },
        moonbeam: '#EEF0FF',
        nebula: '#C49BD8',
        ivory: {
          DEFAULT: '#F0EDE8',
          warm: '#EDE7DC',
          dim: '#B8B2A8',
        },
        void: '#04050F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        arabic: ['"Cairo"', '"Amiri"', 'serif'],
      },
      backgroundImage: {
        'champagne-gradient': 'linear-gradient(135deg, #C4A86A 0%, #F5EDCC 45%, #C4A86A 80%, #E8D5A3 100%)',
        'cosmos-gradient': 'linear-gradient(180deg, #060810 0%, #0B0E1F 50%, #111630 100%)',
        'aurora': 'linear-gradient(135deg, #0B0E1F 0%, #1A1F3A 40%, #0E1628 70%, #0B0E1F 100%)',
        'starlight-gradient': 'linear-gradient(135deg, #3D5ACC 0%, #A8BEFF 50%, #7B9EFF 100%)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shimmer-champ': 'shimmer 4s linear infinite',
        'pulse-blue': 'pulseBlue 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'aurora-shift': 'auroraShift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123,158,255,0.2), 0 0 60px rgba(123,158,255,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(123,158,255,0.5), 0 0 100px rgba(123,158,255,0.15)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(15px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.97)' },
        },
        auroraShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
