import React from 'react';
import PropTypes from 'prop-types';

import PostPreview from 'app-components/post-preview';

const PostsGrid = ({ posts = [] }) => (
  <div className="grid grid-cols-1 gap-x-8 md:grid-cols-3">
    {posts.map(
      ({
        id,
        fields: { slug },
        frontmatter: { title, categories, date, cover },
      }) => (
        <div key={id}>
          <PostPreview
            creationDate={date}
            categories={categories}
            link={slug}
            title={title}
            coverImageData={cover}
          />
        </div>
      )
    )}
  </div>
);

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        cover: PropTypes.object.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

PostsGrid.defaultProps = {};

export default PostsGrid;
