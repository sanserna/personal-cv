import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { author } from 'app-content/meta/config';
import Seo from 'app-base-components/seo';
import Typography from 'app-base-components/typography';
import Timeline from 'app-components/timeline';
import SocialLinks from 'app-components/social-links';
import ProgressList from 'app-components/progress-list';
import Container from 'app-base-components/container';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[14],
}));

const AboutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Seo />
      <Container>
        <SectionWrapper>
          <Typography variant="lead" gutterBottom>
            Mi nombre es Santiago y soy un apasionado de la tecnología, me
            encanta ayudar a las personas en su proceso de crecimiento como
            desarrolladores de software.
          </Typography>
          <Typography>
            Soy un desarrollador de software con experiencia en tecnologías web,
            en mi trayectoria como programador he tenido la oportunidad de hacer
            parte del proceso de pensar, planear e implementar el desarrollo de
            proyectos web en roles como front-end y back-end, también tengo
            experiencia en creación de aplicaciones móviles con base en
            tecnologías web.
          </Typography>
        </SectionWrapper>
        <SectionWrapper>
          <Typography variant="h2" gutterBottom>
            Experiencia
          </Typography>
          <Typography>
            Dentro de mi experiencia he tenido la oportunidad de trabajar en
            proyectos con el banco Davivienda, creando módulos y aplicaciones
            web (SPA) así como también el backend y la infraestructura que las
            soporta, he trabajado con startups y empresas grandes en la creación
            de plataformas y aplicaciones móviles usando diferentes tipos de
            tecnologías web. En algunos de los proyectos en los que he
            participado, he trabajado como Líder Técnico con equipos compuestos
            por perfiles en backend, frontend, QA, IOS y Android.
          </Typography>
          <div className="py-5">
            <Timeline items={author.experience} />
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <Typography variant="h2" gutterBottom>
            Conocimientos
          </Typography>
          <ProgressList
            list={author.techSkills.map(({ label, level }) => ({
              label,
              value: level,
            }))}
          />
        </SectionWrapper>
        <SectionWrapper>
          <Typography variant="h2" gutterBottom>
            Educación
          </Typography>
          <Typography>
            Mi proceso de aprendizaje a estado orientado siempre en dos grandes
            áreas, por un lado esta el diseño, y del otro lado la programación.
            Desde muy pequeño siempre estuve mas orientado por temas
            relacionados con el diseño y las artes digitales, gracias a mi
            carrera puede aprender mucho sobre animación 2D/3D, dibujo
            artístico, render, UI/UX, ilustración y algunas otras cosas
            relacionadas con la multimedia, el interés por la programación ha
            sido un tema que viene conmigo desde el colegio, ya que tuve la
            oportunidad de aprender sobre programación desde muy temprana edad.
          </Typography>
          <div className="pt-5">
            <Timeline items={author.education} />
          </div>
        </SectionWrapper>
        <SocialLinks
          className="pt-16 pb-10"
          iconColor={theme.colors.dark}
          iconSize="xl"
          show={['github', 'linkedin']}
        />
      </Container>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
