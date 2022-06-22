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
    fontSizeRaw: ({ theme }) =>
      Object.entries(theme('fontSize')).reduce(
        (acc, [entryKey, [size]]) => ({
          ...acc,
          [entryKey]: size,
        }),
        {}
      ),
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: ({ colors }) => ({
        primary: '#2980b9',
        secondary: colors.neutral[700],
        warning: colors.amber[600],
        danger: colors.red[600],
        success: colors.emerald[600],
        light: colors.slate[200],
        dark: colors.neutral[900],
        link: theme => theme.colors.primary,
      }),
    },
  },
};
