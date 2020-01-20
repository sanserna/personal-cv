import React from 'react';
import PropTypes from 'prop-types';

import PostPreview from 'app-lib/post-preview';

const RecentPosts = ({ posts = [] }) => (
  <>
    <h1>Últimas publicaciones</h1>
    {posts.map(
      ({
        id,
        excerpt,
        fields: { slug },
        frontmatter: {
          title,
          categories,
          cover: {
            childImageSharp: { fluid }
          }
        }
      }) => (
        <PostPreview
          key={id}
          categories={categories}
          link={slug}
          title={title}
          text={excerpt}
          img={fluid}
        />
      )
    )}
  </>
);

RecentPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        prefix: PropTypes.string.isRequired
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        author: PropTypes.string.isRequired,
        cover: PropTypes.object.isRequired
      }).isRequired
    })
  ).isRequired
};

RecentPosts.defaultProps = {};

export default RecentPosts;
