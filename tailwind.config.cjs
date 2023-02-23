/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#666CA3',
        'dark-blue': '#13183F',
        gray: '#83869A',
        'dark-pink': '#F74780',
        'light-pink': '#FFA7C3',
        'pink-hover': '#FFA7C3'
      },
      boxShadow: {
        card: '0px 25px 50px rgba(6, 22, 141, 0.0442381)'
      }
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    fontSize: {
      'heading-xl': '3.5rem',
      'heading-l': '2.5rem',
      'heading-m': '2rem',
      'heading-s': '1.5rem',
      'body-m': '1.125rem',
      'body-s': '1rem'
    },
    lineHeight: {
      'heading-xl': '4.375rem',
      'heading-l': '3.1875rem',
      'heading-m': '2.5rem',
      'heading-s': '1.75rem',
      'body-m': '1.75rem',
      'body-s': '1.625rem'
    },
    backgroundImage: {
      'gradient-1': 'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)',
      'gradient-2': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)',
      'main-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F0F1FF 100%)'
    },
    container: {
      center: true
    },
    borderRadius: {
      btn: '28px',
      card: '10px'
    },
    screens: {
      md: '768px',
      xl: '1190px'
    }
  },
  plugins: []
}
