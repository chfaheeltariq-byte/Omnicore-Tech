/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#e7f0ff',
          200: '#cfe1ff',
          300: '#a9c9ff',
          400: '#7aa8ff',
          500: '#4f84ff',
          600: '#365fed',
          700: '#2849d0',
          800: '#263eaa',
          900: '#273985'
        },
        ink: '#0f172a',
        mist: '#f8fbff'
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['Instrument Sans', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
        glass: '0 18px 60px rgba(15, 23, 42, 0.06)'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(79,132,255,0.14), transparent 30%), linear-gradient(180deg, #fbfcfe 0%, #f4f7fb 100%)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
