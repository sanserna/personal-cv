import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import PostsGrid from 'app-components/posts-grid';
// import SubscriptionForm from 'app-components/subscription-form';
// import Paragraph from 'app-base-components/body';
// import { texts } from 'app-content/meta/config';

const BlogPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: posts = [] },
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
          <PostsGrid posts={posts} />
        </div>
      </Container>
    </>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
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
