import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Seo from 'app-base-components/seo';
import PostsGrid from 'app-components/posts-grid';
import Container from 'app-base-components/container';
import Typography from 'app-base-components/typography';
import SubscriptionForm from 'app-components/subscription-form';

const BlogPage = ({
  data: {
    allMarkdownRemark: { nodes: posts = [] },
  },
  showSubscriptionForm,
}) => (
  <>
    <Seo />
    <Container className="py-4">
      {showSubscriptionForm && (
        <div
          className="
            rounded
            border
            border-gray-400
            flex
            flex-wrap
            md:flex-nowrap
            items-center
            justify-center
            bg-white
            mb-4
            p-4
          "
        >
          <Typography className="pb-2 md:pb-0 md:pr-2">
            Lorem ipsum dolor sit amet.
          </Typography>
          <SubscriptionForm className="w-full md:w-2/3" />
        </div>
      )}
      <PostsGrid posts={posts} />
    </Container>
  </>
);

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  showSubscriptionForm: PropTypes.bool,
};

BlogPage.defaultProps = {
  showSubscriptionForm: false,
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        ...PostContent
      }
    }
  }
`;

export default BlogPage;
