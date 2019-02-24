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
    size: {
      radius: { small: imgBorderRadius }
    },
    color: {
      scheme: { medium: headerBorderColor, dark: darkColor },
      neutral: {
        white,
        gray: { b: headerBgColor }
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
            <Col xs={12} sm={5}>
              <Img fluid={fluid} className="post-header__img" />
            </Col>

            <Col xs={12} sm={7}>
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
          padding-top: 1rem;
          padding-bottom: 1rem;

          .post-header__title,
          .post-header__txt-item {
            margin: 0;
            text-align: center;
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

          @above mobile {
            .post-header__title,
            .post-header__txt-item {
              text-align: left;
            }
          }
        }

        .header-text-wrapper {
          padding-top: 20px;

          @above mobile {
            padding-top: 0;
            padding-left: 20px;
          }
        }

        .post-content {
          padding-top: 2rem;
        }
      `}</style>

      <style jsx>{`
        .post-header {
          border-bottom: 1px solid ${headerBorderColor};
          background-color: ${headerBgColor};

          :global(.post-header__img) {
            border-radius: ${imgBorderRadius};
          }

          .post-header__title,
          .post-header__txt-item {
            color: ${darkColor};
          }
        }

        .post-content {
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
