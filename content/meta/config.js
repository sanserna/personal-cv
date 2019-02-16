module.exports = {
  siteTitle: 'HeroBlog - a GatsbyJS starter', // <title>
  shortSiteTitle: 'HeroBlog - GatsbyJS starter', // <title> ending for posts and pages
  siteDescription: 'HeroBlog is a GatsbyJS starter.',
  siteUrl: 'https://gatsby-starter-hero-blog.greglobinski.com',
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* author */
  author: {
    name: 'Santiago Serna',
    profesion: 'Full-Stack Developer',
    email: 'sanserve@gmail.com',
    phone: '+57 301 510 6106',
    birthdate: 'Agosto 5 de 1991',
    social: {
      facebook: 'https://www.facebook.com/sanserna91',
      github: 'https://github.com/sanserna',
      linkedin: 'https://linkedin.com/in/sanserna/',
      instagram: 'https://www.instagram.com/sanserna9'
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
    ],
    education: [
      {
        lapse: '2000 - 2005',
        title: 'Colegio San Bartolome la Merced',
        desc: 'Estudios primarios'
      },
      {
        lapse: '2005 - 2010',
        title: 'Colegio San Carlos',
        desc: 'Estudios secundarios'
      },
      {
        lapse: '2010 - 2015',
        title: 'Universidad Militar Nueva Granada',
        desc:
          'Ingeniero Multimedia, Software informático y aplicaciones multimedia.'
      }
    ]
  },

  /* info */
  headerTitle: 'greg lobinski',
  headerSubTitle: 'presents another one GatsbyJS starter',

  /* manifest.json */
  manifestName: 'HeroBlog - a GatsbyJS starter',
  manifestShortName: 'HeroBlog', // max 12 characters
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone',

  // gravatar
  // Use your Gravatar image. If empty then will use src/images/jpg/avatar.jpg
  // Replace your email adress with md5-code.
  // Example https://www.gravatar.com/avatar/g.strainovic@gmail.com ->
  // gravatarImgMd5: "https://www.gravatar.com/avatar/1db853e4df386e8f699e4b35505dd8c6",
  gravatarImgMd5: ''
};
