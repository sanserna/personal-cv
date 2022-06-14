/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  siteMetadata: {
    title: 'Mi Resumen',
    siteUrl: 'http://www.sanserna.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sharp',
      breakpoints: [576, 768, 992, 1200],
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 2em',
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                position: 'relative',
                top: '-2px',
                width: '25px',
              },
            },
          },
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: ['heading', 'paragraph'],
            },
          },
        ],
      },
    },
  ],
};
