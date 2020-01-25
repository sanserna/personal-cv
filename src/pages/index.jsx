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
import { author } from 'app-content/meta/config';
import { bpAboveMedium, bpAboveSmall } from 'app-utils/breakpoints';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const Paragraph = styled.p(({ theme }) => ({
  color: theme.colors.dark,
  fontSize: theme.fontSize.lg,
  paddingBottom: theme.spacing[5],
  [bpAboveSmall]: {
    fontSize: theme.fontSize['2xl']
  },
  [bpAboveMedium]: {
    fontSize: theme.fontSize['3xl']
  }
}));

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
          <Heading>Últimas publicaciones</Heading>
          <PostsGrid posts={posts.map(post => post.node)} />
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Sobre mi</Heading>
          <Paragraph>{author.texts.resume}</Paragraph>
          <Link
            to="/about"
            css={{
              [bpAboveSmall]: {
                fontSize: theme.fontSize['2xl']
              }
            }}
          >
            Ver mas...
          </Link>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Contacto</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
            Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
            vel.
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
