module.exports = {
  siteMetadata: {
    title: 'Mi Resumen',
    person: {
      name: 'Santiago Serna',
      profesion: 'Full-Stack Developer',
      email: 'sanserve@gmail.com',
      phone: '+57 301 510 6106',
      birthdate: 'Agosto 5 de 1991',
      social: {
        facebook: 'https://www.facebook.com/sanserna91',
        github: 'https://github.com/sanserna',
        linkedin: 'https://linkedin.com/in/sanserna/',
        instagram: 'https://www.instagram.com/sanserna91'
      }
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    }
  ]
};
