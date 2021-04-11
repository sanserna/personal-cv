import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col } from 'react-grid-system';
import { useTheme } from 'emotion-theming';

import PostPreview from 'app-components/post-preview';

const PostsGrid = ({ posts = [] }) => {
  const theme = useTheme();

  return (
    <Row>
      {posts.map(
        ({
          id,
          fields: { slug, prefix },
          frontmatter: {
            title,
            categories,
            cover: {
              childImageSharp: { fluid }
            }
          }
        }) => (
          <Col
            key={id}
            md={6}
            lg={4}
            css={{
              paddingBottom: theme.spacing[4]
            }}
          >
            <PostPreview
              creationDate={moment(prefix, 'YYYY-MM-DD').format('DD MMMM YYYY')}
              categories={categories}
              link={slug}
              title={title}
              img={fluid}
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

PostsGrid.defaultProps = {};

export default PostsGrid;
