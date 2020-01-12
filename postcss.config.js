module.exports = ctx => ({
  plugins: {
    tailwindcss: './tailwind.config.js',
    'postcss-text-remove-gap': {
      defaultFontFamily: 'Open Sans',
      defaultLineHeight: '0'
    },
    'postcss-nested': {},
    'postcss-preset-env': {}
  }
});
