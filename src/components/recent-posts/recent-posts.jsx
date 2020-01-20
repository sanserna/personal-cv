import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col } from 'react-grid-system';

import PostPreview from 'app-lib/post-preview';

const RecentPosts = ({ posts = [] }) => (
  <>
    <h1>Últimas publicaciones</h1>
    <Row>
      {posts.map(
        ({
          id,
          excerpt,
          fields: { slug, prefix },
          frontmatter: {
            title,
            categories,
            cover: {
              childImageSharp: { fluid }
            }
          }
        }) => (
          <Col key={id} md={6} lg={4}>
            <PostPreview
              creationDate={moment(prefix, 'YYYY-MM-DD').format('DD MMMM YYYY')}
              categories={categories}
              link={slug}
              title={title}
              text={excerpt}
              img={fluid}
            />
          </Col>
        )
      )}
    </Row>
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
