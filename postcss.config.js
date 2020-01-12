module.exports = ctx => ({
  plugins: {
    'postcss-text-remove-gap': {
      defaultFontFamily: 'Open Sans',
      defaultLineHeight: '0'
    },
    'postcss-nested': {},
    'postcss-preset-env': {}
  }
});
