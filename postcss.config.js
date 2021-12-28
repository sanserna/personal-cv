module.exports = ctx => ({
  plugins: {
    tailwindcss: './tailwind.config.js',
    'postcss-text-remove-gap': {
      defaultFontFamily: 'Open Sans',
      defaultLineHeight: '0',
    },
    'postcss-preset-env': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
});
