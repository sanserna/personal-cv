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
      fontSize: {
        xl: ['1.375rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5625rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.5rem' }],
        '5xl': ['3.125rem', { lineHeight: '1' }],
      },
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
