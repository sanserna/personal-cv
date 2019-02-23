/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { FaCalendarAlt } from 'react-icons/fa';

import { ThemeContext } from '../layouts';

const PostTemplate = props => {
  const {
    color: {
      neutral: {
        white,
        gray: { e: headerBorderColor, b: headerBgColor }
      }
    }
  } = useContext(ThemeContext);
  const {
    data: {
      post: {
        html,
        fields: { prefix },
        frontmatter: {
          author,
          cover: {
            childImageSharp: { fluid }
          }
        }
      }
    }
  } = props;

  return (
    <>
      <header className="post-header">
        <Container fluid style={{ maxWidth: 1300 }}>
          <Row align="center" nogutter>
            <Col xs={5}>
              <Img fluid={fluid} className="post-header__img" />
            </Col>

            <Col xs={7}>
              <div className="header-text-wrapper">
                <h1 className="post-header__title">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quia!
                </h1>

                <p className="post-header__txt-item">
                  <span>Autor - </span>
                  {author}
                </p>

                <p className="post-header__txt-item">
                  <span>
                    <FaCalendarAlt />
                  </span>
                  {` ${prefix}`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <main className="post-content">
        <Container>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
          </Row>
        </Container>
      </main>

      <style jsx>{`
        .post-header {
          padding: 2rem 0;
          border-bottom: 1px solid ${headerBorderColor};
          background-color: ${headerBgColor};

          :global(.post-header__img) {
            border-radius: 0.3rem;
          }

          .post-header__title,
          .post-header__txt-item {
            margin: 0;
          }

          .post-header__txt-item {
            text-transform: capitalize;

            span {
              font-weight: bold;
            }

            &:first-of-type {
              padding-top: 10px;
            }

            &:not(:last-of-type) {
              padding-bottom: 5px;
            }
          }
        }

        .header-text-wrapper {
          padding-left: 20px;
        }

        .post-content {
          padding-top: 2rem;
          background-color: ${white};
        }
      `}</style>
    </>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        author
        category
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
