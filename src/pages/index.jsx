import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';
import { graphql } from 'gatsby';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import HeroHeader from 'app-components/hero-header';
import ContactFrom from 'app-components/contact-form';
import SocialLinks from 'app-components/social-links';
import PostsGrid from 'app-components/posts-grid';
import Link from 'app-base-components/link';
import Paragraph from 'app-base-components/paragraph';
import { bpAboveSmall } from 'app-utils/breakpoints';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const SectionHeading = styled(Heading)`
  ${({ theme }) => `
    font-size: ${theme.fontSize['5xl']};
  `}
`;

const IndexPage = ({ data }) => {
  const theme = useTheme();
  const {
    posts: { edges: posts = [] }
  } = data;

  return (
    <>
      <Seo />
      <HeroHeader />
      <Container>
        <SectionWrapper>
          <SectionHeading>Últimas publicaciones</SectionHeading>
          <PostsGrid posts={posts.map(post => post.node)} />
        </SectionWrapper>
        <section
          css={{
            paddingTop: theme.spacing[12]
          }}
        >
          <SectionHeading>Sobre mi</SectionHeading>
          <Paragraph lead>
            Soy un apasionado de la tecnología y me encanta ayudar a las
            personas en su proceso de crecimiento como desarrolladores de
            software.
          </Paragraph>
          <Paragraph>
            Soy un desarrollador de software con experiencia en tecnologías web,
            en mi trayectoria como programador he tenido la oportunidad de hacer
            parte del proceso de pensar, planear e implementar el desarrollo de
            proyectos web en roles como front-end y back-end, también tengo
            experiencia en creación de aplicaciones móviles con base en
            tecnologías web.
          </Paragraph>
          <Link
            to="/about"
            css={{
              fontSize: theme.fontSize.lg,
              [bpAboveSmall]: {
                fontSize: theme.fontSize.xl
              }
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
          css={{
            padding: `${theme.spacing[16]} 0 ${theme.spacing[10]} 0`
          }}
        />
      </Container>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 4
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
