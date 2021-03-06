const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#2980b9',
        secondary: colors.gray[700],
        warning: colors.yellow[600],
        danger: colors.red[600],
        success: colors.green[600],
        light: colors.gray[200],
        dark: colors.gray[900],
        link: theme => theme.colors.primary,
      },
    },
  },
  variants: {},
  plugins: [
    ({ addBase, config }) => {
      addBase({
        h1: { fontSize: config('theme.fontSize.4xl') },
        h2: { fontSize: config('theme.fontSize.3xl') },
        h3: { fontSize: config('theme.fontSize.2xl') },
        h4: { fontSize: config('theme.fontSize.xl') },
        h5: { fontSize: config('theme.fontSize.lg') },
        h6: { fontSize: config('theme.fontSize.base') },
      });
    },
  ],
};
