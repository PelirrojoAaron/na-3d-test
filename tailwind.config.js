module.exports = {
  purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  variants: {
      extend: {},
  },
  plugins: [],
  theme: {
      screens: {
          'small': '30em', // 48em * 0.625
          'medium': '48em', // 76.8em * 0.625
          'large': '64em', // 102.4em * 0.625
          'xlarge': '80em', // 128em * 0.625
          'xxLarge': '90em', // 144em * 0.625
          'xxxLarge': '120em', // 192em * 0.625
      },
      fontFamily: {
          GTAmericaMono: ["GT-America-Mono-Regular"],
          GTAmericaRegular: ["GT-America-Standard-Regular"],
          GTAmericaMedium: ["GT-America-Standard-Medium"],
      },
      extend: {
          colors: {
              brandGreen: 'var(--brand-green)',
              brandPink: 'var(--brand-pink)',
              brandGrey: '#E5E5E5',
              brandDarkGrey: '#1D1D1D',
              lightGrey: '#F5F5F5'
          },
          spacing: {
              '2.5': '0.625rem',
              '4.5': '1.125rem',
              '18': '4.5rem',
              '1/12': '8.333333%',
              '2/12': '16.666666%',
              '1/3': '33.333333%',
              '1/7': '14.2857142%',
              '2/7': '28.5714286%',
              '3/7': '42.8571428%',
              '4/7': '57.1428571%',
              '5/7': '71.4285714%',
              '16:9': '56.25%',
              '16:8': '50%',
              '3:4': '75%',
              'pip-mobile': '112.995%',
              'cs-media-split': '133.335%',
              'screen-60': '60vh',
              'screen-70': '70vh'
          },
          zIndex: {
              '-1': '-1',
              '1': '1',
              '60': '60'
          },
          fontSize: {
              '3xxl': '2rem',
              '5xl': '2.5rem',
              '5xxl': '2.75rem',
              '6xxl': '4.375rem',
              '7xxl': '5rem',
              '8xxl': '6.25rem',
          },
          minHeight: {
              '102': '28rem',
              '104': '40rem',
          },
          maxWidth: {
              '70%': '70%',
              'fit': 'fit-content'
          },
          height: {
              '5px': '0.313rem',
              '3r': '0.3rem'
          },
          minHeight: {
              'screen-70': '70vh',
              'pip-cs-mobile': '34.375rem'
          },
          lineHeight: {
              '100': '100%',
              '120': '120%',
              '130': '130%',
              '150': '150%',
          },
      },
  }
}
