module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './templates/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: '#2980b9',
        secondary: colors.neutral[700],
        warning: colors.amber[600],
        danger: colors.red[600],
        success: colors.emerald[600],
        light: colors.neutral[200],
        dark: colors.neutral[900],
        link: theme => theme.colors.primary,
        gray: colors.neutral,
      }),
    },
  },
  corePlugins: {
    preflight: false,
  },
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
