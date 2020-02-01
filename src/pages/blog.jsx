import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import PostsGrid from 'app-components/posts-grid';
// import SubscriptionForm from 'app-components/subscription-form';
// import Paragraph from 'app-base-components/paragraph';
// import { texts } from 'app-content/meta/config';

const BlogPage = ({ data }) => {
  const {
    posts: { edges: posts = [] }
  } = data;

  return (
    <>
      <Seo />
      <Container>
        {/* <div className="rounded border border-gray-400 flex flex-wrap justify-center bg-white py-4 px-8 my-4">
          <Paragraph className="text-center">{texts.subscription}</Paragraph>
          <SubscriptionForm className="xs:w-full md:w-2/3" />
        </div> */}
        <div className="pt-4">
          <PostsGrid posts={posts.map(post => post.node)} />
        </div>
      </Container>
    </>
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
