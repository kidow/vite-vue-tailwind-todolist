const colors = require('tailwindcss/colors')

/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultConfig & { theme: { extend: DefaultTheme } } } */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [/data-theme$/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        vue: '#42b983',
        vite: '#646cff',
        tailwind: '#06B6D4'
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      linearBorderGradients: (theme) => ({
        colors: theme('colors')
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui'), require('tailwindcss-border-gradients')()]
}
