import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import { ThemeContext } from '../layouts';
import PlainCard from '../lib/plain-card';

const BlogPage = ({ data }) => {
  const theme = useContext(ThemeContext);
  const {
    color: {
      neutral: {
        gray: { b: pageContentBgColor }
      }
    },
    space: { m: pagePaddingY }
  } = theme;
  const {
    posts: { edges: postsList = [] }
  } = data;

  return (
    <div className="page-content">
      <Container>
        <Row nogutter>
          {postsList.map(
            ({
              node: {
                id,
                excerpt,
                fields: { slug },
                frontmatter: {
                  title,
                  cover: {
                    childImageSharp: { fluid }
                  }
                }
              }
            }) => (
              <Col key={id}>
                <PlainCard
                  link={slug}
                  title={title}
                  text={excerpt}
                  background={fluid}
                />
              </Col>
            )
          )}
        </Row>
      </Container>

      <style jsx>{`
        .page-content {
          background-color: ${pageContentBgColor};
          padding-top: ${pagePaddingY};
          padding-bottom: ${pagePaddingY};
        }
      `}</style>
    </div>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
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
            category
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
