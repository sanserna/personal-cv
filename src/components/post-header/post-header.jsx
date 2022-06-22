import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-grid-system';

import Badge from 'app-base-components/badge';
import Heading from 'app-base-components/heading';
import haderPattern from 'app-images/assets/footer_lodyas.png';

import { PostHeaderRoot, BodyWrapper } from './styled';

const PostHeader = ({ title, author, date, categories, coverData }) => {
  const theme = useTheme();
  const coverImage = getImage(coverData);

  return (
    <PostHeaderRoot haderPattern={haderPattern}>
      <Container>
        <Row align="center" nogutter>
          <Col xs={12} md={5}>
            <GatsbyImage
              alt={title}
              image={coverImage}
              css={{
                borderRadius: theme.borderRadius.lg,
              }}
            />
          </Col>
          <Col xs={12} md={7}>
            <BodyWrapper>
              <Heading
                tag="h1"
                color={theme.colors.light}
                css={{
                  marginBottom: theme.spacing[3],
                }}
              >
                {title}
              </Heading>
              <span
                css={{
                  fontSize: theme.fontSizeRaw.lg,
                  color: theme.colors.light,
                }}
              >
                {author}
                {' | '}
              </span>
              <span
                css={{
                  fontSize: theme.fontSizeRaw.lg,
                  color: theme.colors.slate[400],
                }}
              >
                {date}
              </span>
              <div
                css={{
                  marginTop: theme.spacing[2],
                }}
              >
                {categories.map(category => (
                  <Badge
                    key={category}
                    text={category}
                    color={theme.colors.primary}
                    textColor={theme.colors.white}
                  />
                ))}
              </div>
            </BodyWrapper>
          </Col>
        </Row>
      </Container>
    </PostHeaderRoot>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  coverData: PropTypes.object,
};

PostHeader.defaultProps = {
  categories: [],
  coverData: null,
};

export default PostHeader;
