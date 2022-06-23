import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import { useTheme } from '@emotion/react';

import PostPreview from 'app-components/post-preview';

const PostsGrid = ({ posts = [] }) => {
  const theme = useTheme();

  return (
    <Row>
      {posts.map(
        ({
          id,
          fields: { slug },
          frontmatter: { title, categories, date, cover },
        }) => (
          <Col
            key={id}
            md={6}
            lg={4}
            css={{
              paddingBottom: theme.spacing[4],
            }}
          >
            <PostPreview
              creationDate={date}
              categories={categories}
              link={slug}
              title={title}
              coverImageData={cover}
            />
          </Col>
        )
      )}
    </Row>
  );
};

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
