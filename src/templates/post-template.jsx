import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';

const PostTemplate = props => {
  const theme = useContext(ThemeContext);
  const {
    data: {
      post: {
        html,
        frontmatter: {
          cover: {
            childImageSharp: { fluid }
          }
        }
      }
    }
  } = props;

  // FIXME: aca quede
  return (
    <>
      <header className="post-header">
        <Img fluid={fluid} />
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <style jsx>{`
        .post-header {
          height: 350px;
          color: #fff;
          background-color: #1c3643;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
