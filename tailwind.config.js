const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#4F7CAC',
        secondary: colors.gray[500],
        warning: colors.yellow[600],
        danger: colors.red[600],
        success: colors.green[600],
        light: colors.gray[300],
        dark: colors.gray[900],
        link: theme => theme.colors.primary
      }
    }
  },
  variants: {},
  plugins: [
    ({ addBase, config }) => {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') }
      });
    }
  ]
};
