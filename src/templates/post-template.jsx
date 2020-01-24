/* eslint-disable react/no-danger, react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import moment from 'moment';
import { graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';
import { Container, Row, Col } from 'react-grid-system';

import Seo from 'app-lib/seo';
import Badge from 'app-lib/badge';
import { bpAboveMedium } from 'app-utils/breakpoints';

const PostHeader = styled.header(({ theme }) => ({
  padding: `${theme.spacing[4]} 0`,
  background: theme.colors.light
}));

const PostContent = styled.main`
  ${({ theme }) => `
    padding: ${theme.spacing[4]} 0;

    h2 {
      color: ${theme.colors.dark};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize['2xl']};
      margin-top: ${theme.spacing[8]};
      margin-bottom: ${theme.spacing[3]};
    }

    p {
      font-size: ${theme.fontSize.lg};
      margin-bottom: ${theme.spacing[6]};
    }
  `}
`;

const PostTemplate = props => {
  const theme = useTheme();
  const {
    data: {
      post: {
        html,
        fields: { prefix },
        frontmatter: {
          author,
          title,
          description,
          categories = [],
          cover: {
            childImageSharp: { fluid }
          }
        }
      }
    }
  } = props;

  return (
    <>
      <Seo title={title} description={description} />
      <PostHeader>
        <Container>
          <Row align="center" nogutter>
            <Col xs={12} md={5}>
              <Img
                fluid={fluid}
                css={{
                  borderRadius: theme.borderRadius.lg
                }}
              />
            </Col>
            <Col xs={12} md={7}>
              <div
                css={{
                  paddingTop: theme.spacing[4],
                  [bpAboveMedium]: {
                    paddingTop: 0,
                    paddingLeft: theme.spacing[4]
                  }
                }}
              >
                <h1
                  css={{
                    color: theme.colors.dark,
                    fontWeight: theme.fontWeight.semibold,
                    fontSize: theme.fontSize['3xl'],
                    lineHeight: theme.lineHeight.tight,
                    marginBottom: theme.spacing[3]
                  }}
                >
                  {title}
                </h1>
                <span
                  css={{
                    fontSize: theme.fontSize.lg,
                    color: theme.colors.dark
                  }}
                >
                  {author}
                  {' | '}
                </span>
                <span
                  css={{
                    fontSize: theme.fontSize.lg,
                    color: theme.colors.secondary
                  }}
                >
                  {moment(prefix, 'YYYY-MM-DD').format('DD MMMM YYYY')}
                </span>
                <div
                  css={{
                    marginTop: theme.spacing[2]
                  }}
                >
                  {categories.map((category, index) => (
                    <Badge
                      key={index}
                      text={category}
                      color={theme.colors.primary}
                      textColor={theme.colors.white}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </PostHeader>
      <PostContent>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </PostContent>
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
        author
        title
        description
        categories
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
