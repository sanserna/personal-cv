import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

import Card from '../../lib/card';
import PostPreview from '../../lib/post-preview';

const RecentPosts = ({ theme, posts = [] }) => (
  <div className="recent-posts-container">
    <Card className="card">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card.Title>Últimas publicaciones</Card.Title>
          </Col>

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
              <Col key={id} xs={12} className="post-container">
                <PostPreview
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
      </Container>
    </Card>

    <style jsx>{`
      .recent-posts-container {
        :global(.post-container:not(:last-child)) {
          margin-bottom: 20px;
        }

        :global(.card) {
          padding: 40px 0;

          @above mobile {
            padding: 40px 20px;
          }
        }
      }
    `}</style>
  </div>
);

RecentPosts.propTypes = {
  theme: PropTypes.object.isRequired,
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
