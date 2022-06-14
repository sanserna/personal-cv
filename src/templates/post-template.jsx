import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import moment from 'moment';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import { useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Badge from 'app-base-components/badge';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import Link from 'app-base-components/link';
import PostFooter from 'app-components/post-footer';
import { bpAboveMedium } from 'app-utils/breakpoints';
import haderPattern from 'app-images/assets/footer_lodyas.png';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Paragraph,
    h2: Heading,
    a: Link,
  },
}).Compiler;

const PostHeader = styled.header(
  {
    backgroundRepeat: 'repeat',
    backgroundSize: '600px 600px',
    backgroundImage: `url(${haderPattern})`,
  },
  ({ theme }) => ({
    padding: `${theme.spacing[5]} 0`,
  })
);

const PostContent = styled.article`
  ${({ theme }) => `
    padding: ${theme.spacing[4]} 0;
  `}
`;

const PostTemplate = props => {
  const theme = useTheme();
  const {
    data: {
      post: {
        htmlAst,
        fields: { prefix },
        frontmatter: { author, title, description, categories = [], cover },
      },
    },
  } = props;
  const coverImage = getImage(cover);

  return (
    <>
      <Seo title={title} description={description} />
      <PostHeader haderPattern={haderPattern}>
        <Container>
          <Row align="center" nogutter>
            <Col xs={12} md={5}>
              <GatsbyImage
                alt={title}
                image={coverImage}
                css={{
                  borderRadius: theme.borderRadius.lg,
                }}
              />
            </Col>
            <Col xs={12} md={7}>
              <div
                css={{
                  paddingTop: theme.spacing[4],
                  [bpAboveMedium]: {
                    paddingTop: 0,
                    paddingLeft: theme.spacing[4],
                  },
                }}
              >
                <h1
                  css={{
                    color: theme.colors.light,
                    fontWeight: theme.fontWeight.semibold,
                    fontSize: theme.fontSize['3xl'],
                    lineHeight: theme.lineHeight.tight,
                    marginBottom: theme.spacing[3],
                  }}
                >
                  {title}
                </h1>
                <span
                  css={{
                    fontSize: theme.fontSize.lg,
                    color: theme.colors.light,
                  }}
                >
                  {author}
                  {' | '}
                </span>
                <span
                  css={{
                    fontSize: theme.fontSize.lg,
                    color: theme.colors.slate[400],
                  }}
                >
                  {moment(prefix, 'YYYY-MM-DD').format('DD MMMM YYYY')}
                </span>
                <div
                  css={{
                    marginTop: theme.spacing[2],
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
      <PostFooter />
    </>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      fields {
        slug
      }
      frontmatter {
        author
        title
        description
        categories
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
