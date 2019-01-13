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
      },
      softSkills: [
        'Animación por Computadora',
        'Gestion de Proyectos',
        'UI/UX',
        'Arquitectura de Sofware',
        'Arquitectura Web',
        'Liderazgo de Equipos'
      ],
      techSkills: [
        { label: 'HTML/CSS', level: 100 },
        { label: 'JavaScript', level: 90 },
        { label: 'NodeJs', level: 65 },
        { label: 'Java', level: 80 },
        { label: 'PHP7', level: 60 },
        { label: 'Python', level: 20 },
        { label: 'MySQL', level: 60 },
        { label: 'Git', level: 80 },
        { label: 'C++', level: 40 },
        { label: 'Angular', level: 85 },
        { label: 'React', level: 40 },
        { label: 'VueJs', level: 80 },
        { label: 'Firebase', level: 75 },
        { label: 'ExpressJs', level: 70 },
        { label: 'Laravel', level: 65 }
      ]
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/data`,
        name: 'data'
      }
    }
  ]
};
