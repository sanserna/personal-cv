import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'react-grid-system';

import PostsGrid from 'app-components/posts-grid';
import SubscriptionForm from 'app-components/subscription-form';
import Paragraph from 'app-base-components/paragraph';

const BlogPage = ({ data }) => {
  const {
    posts: { edges: posts = [] }
  } = data;

  return (
    <Container>
      <div className="rounded border border-gray-400 flex flex-wrap justify-center bg-white p-4 my-4">
        <Paragraph className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
          dignissimos.
        </Paragraph>
        <SubscriptionForm className="xs:w-full md:w-2/3" />
      </div>
      <PostsGrid posts={posts.map(post => post.node)} />
    </Container>
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
