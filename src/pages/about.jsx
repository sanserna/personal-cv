/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import ProgressBar from 'app-base-components/progress-bar';
import Timeline from 'app-components/timeline';
import SocialLinks from 'app-components/social-links';
import { author } from 'app-content/meta/config';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const AboutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Seo />
      <Container>
        <SectionWrapper>
          <Paragraph lead>
            Mi nombre es Santiago y soy un apasionado de la tecnología, me
            encanta ayudar a las personas en su proceso de crecimiento como
            desarrolladores de software.
          </Paragraph>
          <Paragraph css={{ paddingBottom: 0 }}>
            Soy un desarrollador de software con experiencia en tecnologías web,
            en mi trayectoria como programador he tenido la oportunidad de hacer
            parte del proceso de pensar, planear e implementar el desarrollo de
            proyectos web en roles como front-end y back-end, también tengo
            experiencia en creación de aplicaciones móviles con base en
            tecnologías web.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Experiencia</Heading>
          <Paragraph>
            Dentro de mi experiencia he tenido la oportunidad de trabajar en
            proyectos con el banco Davivienda, creando módulos y aplicaciones
            web (SPA) así como también el backend y la infraestructura que las
            soporta, he trabajado con startups y empresas medianas en la
            creación de plataformas web de todo tipo usando diferentes tipos de
            tecnologías, así como también aplicaciones móviles de pequeña y gran
            envergadura. En algunos de los proyectos en los que he participado,
            he trabajado como Líder Técnico con equipos compuestos por perfiles
            en backend, frontend, QA, IOS y Android.
          </Paragraph>
          <Timeline items={author.experience} />
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Conocimientos</Heading>
          <div className="table w-full">
            {author.techSkills.map((skill, index) => (
              <div
                key={index}
                css={css`
                  padding: ${theme.spacing[2]};
                  display: table-row;
                  &:last-child {
                    .pb-wrapper {
                      height: auto;
                    }
                  }
                `}
              >
                <span
                  css={{
                    display: 'table-cell',
                    fontSize: theme.fontSize.lg,
                    paddingRight: theme.spacing[3]
                  }}
                >
                  {skill.label}
                </span>
                <div
                  className="pb-wrapper"
                  css={{
                    display: 'table-cell',
                    width: '85%',
                    height: '60px'
                  }}
                >
                  <ProgressBar value={skill.level} />
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Educación</Heading>
          <Paragraph>
            Mi proceso de aprendizaje a estado orientado siempre en dos grandes
            áreas, por un lado esta el diseño, y del otro lado la programación.
            Desde muy pequeño siempre estuve mas orientado por temas
            relacionados con el diseño y las artes digitales, gracias a mi
            carrera puede aprender mucho sobre animación 2D/3D, dibujo
            artístico, render, UI/UX, ilustración y algunas otras cosas
            relacionadas con la multimedia, el interés por la programación ha
            sido un tema que viene conmigo desde el colegio, ya que tuve la
            oportunidad de aprender sobre programación desde muy temprana edad.
          </Paragraph>
          <Timeline items={author.education} />
        </SectionWrapper>
        <SocialLinks
          iconColor={theme.colors.dark}
          iconSize="xl"
          css={{
            padding: `${theme.spacing[16]} 0 ${theme.spacing[10]} 0`
          }}
        />
      </Container>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
