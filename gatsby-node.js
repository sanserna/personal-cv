exports.onCreateWebpackConfig = ({
  actions,
  stage,
  rules,
  plugins,
  loaders
}) => {
  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['src/styles/base/_variables.scss']
        }
      }
    ]
  };

  actions.setWebpackConfig({
    module: {
      rules: [sassRuleModules]
    }
  });
};
