module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-100': '#E4E4E7',
        'primary-dark-200': '#C9C9CF',
        'primary-dark-300': '#ADADB8',
        'primary-dark-400': '#9292A0',
        'primary-dark-500': '#1C1C20',
        'primary-dark-600': '#0E0E11',
        'primary-dark-700': '#0A0A0E',
        'primary-dark-800': '#06060A',
        'primary-dark-900': '#000000',
        'primary-500': '#0044FA',
        'primary-600': '#0036CC',
        'primary-700': '#002899',
        'primary-800': '#001C66',
        'primary-900': '#001133',
      },
      keyframes: {
        'zoom-in': {
          '0%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'zoom-out': {
          '0%': {
            transform: 'scale(1.1)',
            transform: 'translateX(5%)',
          },
          '100%': {
            transform: 'scale(1)',
            transform: 'translateX(0)',
          },
        },
        'pop-up': {
          '0%': {
            transform: 'translateY(15%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-5%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-in-offset': {
          '0%': {
            transform: 'translateX(-15%)',
          },
          '100%': {
            transform: 'translateX(-13rem)',
          },
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-15%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-up-mobile-offset': {
          '0%': {
            transform: 'translateY(-15%)',
          },
          '100%': {
            transform: 'translateY(-6rem)',
          },
        },
        'slide-in-offset-lg': {
          '0%': {
            transform: 'translateY(-15%)',
          },
          '100%': {
            transform: 'translateY(-8rem)',
          },
        },
        'to-italic': {
          '0%': {
            transform: 'skewX(0deg)',
          },
          '100%': {
            transform: 'skewX(-20deg)',
          },
        },
        'slide-up-offset': {
          '0%': {
            transform: 'translateY(15%)',
          },
          '100%': {
            transform: 'translateY(-7rem)',
          },
        },
        'slide-up-mobile-offset-details': {
          '0%': {
            transform: 'translateY(15%)',
          },
          '100%': {
            transform: 'translateY(-4rem)',
          },
        },
        'bounce-horizontal': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 200ms ease-in-out',
        'zoom-out': 'zoom-out 500ms ease',
        'pop-up': 'pop-up 500ms ease',
        'slide-in': 'slide-in 500ms ease',
        'slide-in-offset': 'slide-in-offset 500ms ease',
        'slide-up-mobile-offset': 'slide-up-mobile-offset 750ms ease',
        'slide-in-offset-lg': 'slide-in-offset-lg 500ms ease',
        'to-italic': 'to-italic 500ms ease',
        'slide-down': 'slide-down 500ms ease',
        'slide-up-offset': 'slide-up-offset 500ms ease',
        'slide-up-mobile-offset-details':
          'slide-up-mobile-offset-details 500ms ease',
        'bounce-horizontal': 'bounce-horizontal 1s ease infinite',
      },
    },
    plugins: [],
  },
};
