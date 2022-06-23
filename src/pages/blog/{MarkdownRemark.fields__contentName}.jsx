import React from 'react';
import PropTypes from 'prop-types';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import { Container } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Typography from 'app-base-components/typography';
import Link from 'app-base-components/link';
import PostHeader from 'app-components/post-header';
import PostFooter from 'app-components/post-footer';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: props => <Typography {...props} paragraph colorVariant="secondary" />,
    h2: props => (
      <Typography {...props} variant="h4" component="h2" gutterBottom />
    ),
    a: Link,
  },
}).Compiler;

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      htmlAst,
      frontmatter: { author, title, description, date, cover, categories = [] },
    },
  } = data;

  return (
    <>
      <Seo title={title} description={description} />
      <PostHeader
        title={title}
        author={author}
        date={date}
        categories={categories}
        coverData={cover}
      />
      <article className="p-4">
        <Container>{renderAst(htmlAst)}</Container>
      </article>
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
