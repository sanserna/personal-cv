/* eslint no-console: "off" */
// const { kebabCase } = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        'app-content': path.resolve(__dirname, 'content'),
        'app-components': path.resolve(__dirname, './src/components'),
        'app-layouts': path.resolve(__dirname, './src/layouts'),
        'app-lib': path.resolve(__dirname, './src/lib'),
        'app-pages': path.resolve(__dirname, './src/pages'),
        'app-templates': path.resolve(__dirname, './src/templates'),
        'app-theme': path.resolve(__dirname, './src/theme'),
        'app-utils': path.resolve(__dirname, './src/utils')
      }
    }
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = slug.includes('--') ? slug.indexOf('--') : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== 'parts') {
      createNodeField({
        node,
        name: 'slug',
        value: `blog${separtorIndex ? '/' : ''}${slug.substring(
          shortSlugStart
        )}`
      });
    }

    createNodeField({
      node,
      name: 'prefix',
      value: separtorIndex ? slug.substring(1, separtorIndex) : ''
    });

    createNodeField({
      node,
      name: 'source',
      value: source
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/post-template.jsx');

  let activeEnv =
    process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

  console.log(`Using environment config: '${activeEnv}'`);

  let filters = 'filter: { fields: { slug: { ne: null } } }';

  if (activeEnv == 'production') {
    filters =
      'filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }';
  }

  if (activeEnv == 'production') {
    filters =
      'filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }';
  }

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(
        ${filters}
        sort: { fields: [fields___prefix], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
              prefix
              source
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.log(errors);
    return Promise.reject(errors);
  }

  const items = data.allMarkdownRemark.edges;

  // Create category list
  // const categorySet = new Set();
  // items.forEach(edge => {
  //   const {
  //     node: {
  //       frontmatter: { category }
  //     }
  //   } = edge;

  //   if (category && category !== null) {
  //     categorySet.add(category);
  //   }
  // });

  // Create category pages
  // const categoryList = Array.from(categorySet);
  // categoryList.forEach(category => {
  //   createPage({
  //     path: `/category/${kebabCase(category)}/`,
  //     component: categoryTemplate,
  //     context: {
  //       category
  //     }
  //   });
  // });

  // Create posts
  const posts = items.filter(item => item.node.fields.source === 'posts');
  posts.forEach(({ node }, index) => {
    const slug = node.fields.slug;
    const next = index === 0 ? undefined : posts[index - 1].node;
    const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;
    const source = node.fields.source;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
        prev,
        next,
        source
      }
    });
  });

  // and pages.
  // const pages = items.filter(item => item.node.fields.source === 'pages');
  // pages.forEach(({ node }) => {
  //   const slug = node.fields.slug;
  //   const source = node.fields.source;

  //   createPage({
  //     path: slug,
  //     component: pageTemplate,
  //     context: {
  //       slug,
  //       source
  //     }
  //   });
  // });
};
