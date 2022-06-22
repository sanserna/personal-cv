import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import { useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Badge from 'app-base-components/badge';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/body';
import Link from 'app-base-components/link';
import PostFooter from 'app-components/post-footer';
import { bpAboveMedium } from 'app-utils/breakpoints';
import haderPattern from 'app-images/assets/footer_lodyas.png';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Paragraph,
    h1: props => <Heading {...props} tag="h1" />,
    h2: props => <Heading {...props} tag="h2" />,
    h3: props => <Heading {...props} tag="h3" />,
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

const BlogPost = ({ data }) => {
  const theme = useTheme();
  const {
    markdownRemark: {
      htmlAst,
      frontmatter: { author, title, description, date, cover, categories = [] },
    },
  } = data;
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
                    fontWeight: theme.fontWeight.medium,
                    fontSize: theme.fontSizeRaw['3xl'],
                    lineHeight: theme.lineHeight.tight,
                    marginBottom: theme.spacing[3],
                  }}
                >
                  {title}
                </h1>
                <span
                  css={{
                    fontSize: theme.fontSizeRaw.lg,
                    color: theme.colors.light,
                  }}
                >
                  {author}
                  {' | '}
                </span>
                <span
                  css={{
                    fontSize: theme.fontSizeRaw.lg,
                    color: theme.colors.slate[400],
                  }}
                >
                  {date}
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

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export const fragments = graphql`
  fragment PostContent on MarkdownRemark {
    id
    htmlAst
    fields {
      contentName
      slug
    }
    frontmatter {
      author
      title
      description
      categories
      date(formatString: "DD MMMM YYYY", locale: "es")
      cover {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...PostContent
    }
  }
`;

export default BlogPost;
