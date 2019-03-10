import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import { ThemeContext } from '../layouts';
import PostPreview from '../lib/post-preview';

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
                  categories,
                  cover: {
                    childImageSharp: { fluid }
                  }
                }
              }
            }) => (
              <Col key={id} xs={12} className="post-container">
                <PostPreview
                  categories={categories}
                  link={slug}
                  title={title}
                  text={excerpt}
                  img={fluid}
                />
              </Col>
            )
          )}
        </Row>
      </Container>

      <style jsx>{`
        .page-content {
          :global(.post-container:not(:last-child)) {
            margin-bottom: 20px;
          }

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
            categories
            author
            cover {
              childImageSharp {
                fluid(maxHeight: 300) {
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
