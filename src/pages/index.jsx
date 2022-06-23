import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Container } from 'react-grid-system';
import { graphql } from 'gatsby';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import HeroHeader from 'app-components/hero-header';
import ContactFrom from 'app-components/contact-form';
import SocialLinks from 'app-components/social-links';
import PostsGrid from 'app-components/posts-grid';
import Link from 'app-base-components/link';
import Typography from 'app-base-components/typography';
import Paragraph from 'app-base-components/body';
import { bpAboveSmall } from 'app-utils/breakpoints';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16],
}));

const SectionHeading = styled(Heading)`
  ${({ theme }) => `
    font-size: ${theme.fontSizeRaw['5xl']};
  `}
`;

const IndexPage = ({ data }) => {
  const theme = useTheme();
  const {
    allMarkdownRemark: { nodes: posts = [] },
  } = data;

  return (
    <>
      <Seo />
      <HeroHeader />
      <Container>
        <SectionWrapper>
          <Typography variant="h3" gutterBottom>
            Últimas publicaciones
          </Typography>
          <PostsGrid posts={posts} />
        </SectionWrapper>
        <section
          css={{
            paddingTop: theme.spacing[12],
          }}
        >
          <Typography variant="h3" gutterBottom>
            Sobre mi
          </Typography>
          <Typography variant="lead" paragraph>
            Soy un apasionado de la tecnología y me encanta ayudar a las
            personas en su proceso de crecimiento como desarrolladores de
            software.
          </Typography>
          <Typography paragraph>
            Soy un desarrollador de software con experiencia en tecnologías web,
            en mi trayectoria como programador he tenido la oportunidad de hacer
            parte del proceso de pensar, planear e implementar el desarrollo de
            proyectos web en roles como front-end y back-end, también tengo
            experiencia en creación de aplicaciones móviles con base en
            tecnologías web.
          </Typography>
          <Link
            to="/about"
            css={{
              fontSize: theme.fontSizeRaw.lg,
              [bpAboveSmall]: {
                fontSize: theme.fontSizeRaw.xl,
              },
            }}
          >
            Ver mas...
          </Link>
        </section>
        <SectionWrapper>
          <SectionHeading>Contacto</SectionHeading>
          <Paragraph lead>
            ¿Preguntas ó información? no dudes en contactarme, intentare
            responder en el menor tiempo posible!{' '}
            <span role="img" aria-label="smile-emoji">
              😬
            </span>
          </Paragraph>
          <ContactFrom />
        </SectionWrapper>
        <SocialLinks
          iconColor={theme.colors.dark}
          iconSize="xl"
          show={['github', 'linkedin']}
          css={{
            padding: `${theme.spacing[16]} 0 ${theme.spacing[10]} 0`,
          }}
        />
      </Container>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 4
      filter: { fields: { source: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        ...PostContent
      }
    }
  }
`;
