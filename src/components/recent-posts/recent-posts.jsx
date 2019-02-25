import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

import Card from '../../lib/card';
import PlainCard from '../../lib/plain-card';

const RecentPosts = ({ theme, posts = [] }) => (
  <div className="recent-posts-container">
    <Card className="card">
      <Container>
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
                cover: {
                  childImageSharp: { fluid }
                }
              }
            }) => (
              <PlainCard
                key={id}
                link={slug}
                title={title}
                text={excerpt}
                background={fluid}
              />
            )
          )}
        </Row>
      </Container>
    </Card>

    <style jsx>{`
      .recent-posts-container {
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
        category: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        cover: PropTypes.object.isRequired
      }).isRequired
    })
  ).isRequired
};

RecentPosts.defaultProps = {};

export default RecentPosts;
