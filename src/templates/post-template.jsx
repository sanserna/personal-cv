import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import moment from 'moment';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';
import { Container, Row, Col } from 'react-grid-system';

import Layout from 'app-components/layout';
import Seo from 'app-base-components/seo';
import Badge from 'app-base-components/badge';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import { bpAboveMedium } from 'app-utils/breakpoints';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Paragraph,
    h2: Heading
  }
}).Compiler;

const PostHeader = styled.header(
  {
    backgroundRepeat: 'repeat',
    backgroundCover: 'cover'
  },
  ({ theme, haderPattern }) => ({
    padding: `${theme.spacing[5]} 0`,
    backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`
  })
);

const PostContent = styled.main`
  ${({ theme }) => `
    padding: ${theme.spacing[4]} 0;
  `}
`;

const PostTemplate = props => {
  const theme = useTheme();
  const {
    location,
    data: {
      haderPattern,
      post: {
        htmlAst,
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
    <Layout location={location}>
      <Seo title={title} description={description} />
      <PostHeader haderPattern={haderPattern}>
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
                    color: theme.colors.light,
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
                    color: theme.colors.light
                  }}
                >
                  {author}
                  {' | '}
                </span>
                <span
                  css={{
                    fontSize: theme.fontSize.lg,
                    color: theme.colors.gray[500]
                  }}
                >
                  {moment(prefix, 'YYYY-MM-DD').format('DD MMMM YYYY')}
                </span>
                <div
                  css={{
                    marginTop: theme.spacing[2]
                  }}
                >
                  {categories.map(category => (
                    <Badge
                      key={category}
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
        <Container>{renderAst(htmlAst)}</Container>
      </PostContent>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    haderPattern: file(relativePath: { eq: "assets/footer_lodyas.png" }) {
      childImageSharp {
        fixed(width: 600, height: 600, quality: 100) {
          src
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
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
