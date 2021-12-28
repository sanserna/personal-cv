module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/templates/**/*.{js,jsx}',
  ],
  theme: {
    // IMPORTANT: explicitly configuring font-size scale to use the scale from
    // v1 since v2 font-size utility includes a sensible size-specific
    // line-height by default, this affects components that are using
    // theme.fontSize js utility
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
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
