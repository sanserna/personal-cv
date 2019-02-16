module.exports = ctx => ({
  plugins: {
    'postcss-easy-media-query': {
      breakpoints: {
        mobile: 576,
        tablet: 768,
        desktop: 1200
      }
    },
    'postcss-text-remove-gap': {
      defaultFontFamily: 'Open Sans',
      defaultLineHeight: '0'
    },
    'postcss-nested': {},
    'postcss-preset-env': {}
  }
});
