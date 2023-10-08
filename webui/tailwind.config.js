/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E1EEFE',
          200: '#BFDBFD',
          300: '#A1CAFC',
          400: '#7EB6FB',
          500: '#60A5FA',
          600: '#1C7FF8',
          700: '#065FCB',
          800: '#043E86',
          900: '#022045',
          950: '#011023',
        },
      },
    },
  },
  plugins: [],
};
