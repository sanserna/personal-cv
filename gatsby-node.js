const path = require('path');

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        'app-root': path.resolve(__dirname, './'),
        'app-content': path.resolve(__dirname, 'content'),
        'app-images': path.resolve(__dirname, './src/images'),
        'app-components': path.resolve(__dirname, './src/components'),
        'app-base-components': path.resolve(
          __dirname,
          './src/components/_base'
        ),
        'app-layouts': path.resolve(__dirname, './src/layouts'),
        'app-pages': path.resolve(__dirname, './src/pages'),
        'app-templates': path.resolve(__dirname, './src/templates'),
        'app-theme': path.resolve(__dirname, './src/theme'),
        'app-utils': path.resolve(__dirname, './src/utils'),
      },
    },
  });
};

const onCreateNode = (...args) => {
  if (args[0].node.internal.type === 'MarkdownRemark') {
    onCreateMarkdownRemarkNode(...args);
  }
};

function onCreateMarkdownRemarkNode({ node, getNode, actions }) {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;
  const contentName = fileNode.relativeDirectory;

  if (source === 'posts') {
    createNodeField({
      node,
      name: 'slug',
      value: `/blog/${contentName}`,
    });
  }

  createNodeField({
    node,
    name: 'source',
    value: source,
  });

  createNodeField({
    node,
    name: 'contentName',
    value: contentName,
  });
}

module.exports = {
  onCreateWebpackConfig,
  onCreateNode,
};
