module.exports = {
  siteTitle: "Santiago's Blog",
  shortSiteTitle: 'HeroBlog - GatsbyJS starter', // <title> ending for posts and pages
  siteDescription: 'HeroBlog is a GatsbyJS starter.',
  siteUrl: 'https://gatsby-starter-hero-blog.greglobinski.com',
  siteImage: 'preview.jpg',
  siteLanguage: 'es',

  /* author */
  author: {
    name: 'Santiago Serna',
    profesion: 'Full-Stack Developer',
    email: 'sanserve91@gmail.com',
    phone: '+57 301 510 6106',
    birthdate: 'Agosto 5 de 1991',
    texts: {
      headerResume:
        'Mi nombre es Santiago y soy desarrollador full-stack con experiencia en tecnologías web, actualmente creando desde Bogotá D.C, Colombia.',
      resume:
        'Soy un desarrollador full-stack con experiencia en tecnologías web, también las uso para crear aplicaciones móviles. Tengo experiencia en desarrollo backend y casi siempre hago parte del proceso de pensar, planear e implementar el desarrollo de proyectos web en los dos roles (frontend y backend). Soy un apasionado de la tecnología y me encanta ayudar a las personas en su proceso de crecimiento como desarrolladores de software. Soy una persona autodidacta y me gusta usar mi tiempo libre aprendiendo cosas nuevas.',
      education:
        'Mi proceso de aprendizaje a estado orientado siempre en dos grandes áreas, por un lado esta el diseño, y del otro lado la programación. Desde muy pequeño siempre estuve mas orientado por temas relacionados con el diseño y las artes digitales, gracias a mi carrera puede aprender mucho sobre animación 2D/3D, dibujo artístico, render, UI/UX, ilustración y algunas otras cosas relacionadas con la multimedia, el interés por la programación ha sido un tema que viene conmigo desde el colegio, ya que tuve la oportunidad de aprender sobre programación desde muy temprana edad.',
      experience:
        'He tenido la suerte de encontrar una profesión que combina mis dos grandes pasiones (diseño y programación) y me permite hacer uso de ellas en todo momento, ser desarrollador de software full-stack me ha dado la oportunidad de estar involucrado en el procesos de desarrollo de todo tipo de aplicaciones de principio a fin.<br>Dentro de mi experiencia he tenido la oportunidad de trabajar en proyectos con el banco Davivienda, creando módulos y aplicaciones web (SPA) así como también el backend y la infraestructura que las soporta, he trabajado con startups y empresas medianas en la creación de plataformas web de todo tipo usando diferentes tipos de tecnologías, así como también aplicaciones móviles de pequeña y gran envergadura.<br>En algunos de los proyectos en los que he participado, he trabajado como Líder Técnico con equipos compuestos por perfiles en backend, frontend, QA, IOS y Android.'
    },
    social: {
      facebook: 'https://www.facebook.com/sanserna91',
      github: 'https://github.com/sanserna',
      linkedin: 'https://linkedin.com/in/sanserna',
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
    ],
    education: [
      {
        lapse: '2000 - 2005',
        title: 'Colegio San Bartolome la Merced',
        subtitle: 'Estudios primarios'
      },
      {
        lapse: '2005 - 2010',
        title: 'Colegio San Carlos',
        subtitle: 'Estudios secundarios'
      },
      {
        lapse: '2010 - 2015',
        title: 'Universidad Militar Nueva Granada',
        subtitle:
          'Ingeniero Multimedia, Software informático y aplicaciones multimedia.'
      }
    ],
    experience: [
      {
        lapse: {
          from: '09/24/2018'
        },
        title: 'Grability',
        url: 'https://www.grability.com/',
        subtitle: 'Tech Lead',
        desc:
          'Aplicaciones móviles para retailers centradas en la experiencia de compra de un supermercado, desarrollos nativos en Android, IOS y React Native; A cargo de coordinar los equipos de desarrollo (dispositivos, backend) como Líder Técnico en el proyecto para el Supermercado El Corte Ingles de España.'
      },
      {
        lapse: {
          from: '02/01/2018',
          to: '09/21/2018'
        },
        title: 'PappCorn',
        url: 'https://www.pappcorn.com/',
        subtitle: 'Tech Lead & Product Manager',
        desc:
          'Soluciones digitales de todo tipo, planeación estratégica y desarrollo tecnológico para startups y empresas medianas; A cargo de coordinar los diferentes proyectos en el proceso de ideación, planeación y ejecución; Orientación en los equipos de backend y frontend como Líder Técnico y Product Manager.'
      },
      {
        lapse: {
          from: '02/01/2016',
          to: '07/15/2018'
        },
        title: 'Nectia Colombia',
        url: 'http://www.nectia.com/',
        subtitle: 'Full-stack Developer',
        desc:
          'Desarrollador frontend y backend en proyecto con el banco Davivienda, a cargo de desarrollar módulos web (SPA) de uso transversal, diseño y desarrollo de APIs REST orientadas a servicios, manejo de bases de datos MySQL y creación de herramientas para automatización en procesos de desarrollo.'
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
