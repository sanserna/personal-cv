import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';
import { graphql } from 'gatsby';

import Seo from 'app-lib/seo';
import HeroHeader from 'app-components/hero-header';
import SocialLinks from 'app-components/social-links';
// import Resume from 'app-components/resume';
// import Skills from 'app-components/skills';
// import Education from 'app-components/education';
// import Experience from 'app-components/experience';
import RecentPosts from 'app-components/recent-posts';
import Contact from 'app-components/contact';

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
        <RecentPosts posts={posts.map(post => post.node)} />
        <Contact />
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
