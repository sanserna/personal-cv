import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-grid-system';

import Badge from 'app-base-components/badge';
import Typography from 'app-base-components/typography';
import haderPattern from 'app-images/assets/footer_lodyas.png';

const PostHeader = ({ title, author, date, categories, coverData }) => {
  const theme = useTheme();
  const coverImage = getImage(coverData);

  return (
    <div
      className="py-5 bg-repeat bg-[length:600px_600px]"
      css={{ backgroundImage: `url(${haderPattern})` }}
    >
      <Container>
        <Row align="center" nogutter>
          <Col xs={12} md={5}>
            <GatsbyImage
              className="rounded-lg"
              alt={title}
              image={coverImage}
            />
          </Col>
          <Col xs={12} md={7}>
            <div className="pt-4 md:p-0 md:pl-4">
              <Typography
                className="mb-3"
                variant="h4"
                component="h1"
                colorVariant="light"
              >
                {title}
              </Typography>
              <Typography colorVariant="light">
                {author} | {date}
              </Typography>
              <div className="mt-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    text={category}
                    color={theme.colors.primary}
                    textColor={theme.colors.white}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
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
