/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Row, Col } from 'react-grid-system';

import Badge from 'app-lib/badge';
import Link from 'app-lib/link';
import { bpAboveMedium } from 'app-utils/breakpoints';

const PostPreviewWrapper = styled.div(
  {
    backgroundClip: 'border-box'
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    border: `1px solid rgba(0, 0, 0, 0.125)`,
    borderRadius: theme.borderRadius.default
  })
);

const PreviewImg = styled(Img)(({ theme }) => ({
  borderTopLeftRadius: `calc(${theme.borderRadius.default} - 1px)`,
  borderTopRightRadius: `calc(${theme.borderRadius.default} - 1px)`,
  [bpAboveMedium]: {
    borderTopLeftRadius: `calc(${theme.borderRadius.default} - 1px)`,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: `calc(${theme.borderRadius.default} - 1px)`
  }
}));

const Body = styled.div(({ theme }) => ({
  padding: theme.spacing[4]
}));

const Title = styled.h2(
  {
    marginTop: 0
  },
  ({ theme }) => ({
    fontSize: theme.fontSize['3xl'],
    marginBottom: theme.spacing[3]
  })
);

const PreviewText = styled.p`
  margin-bottom: 0;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  background-color: transparent;

  ${({ theme }) => `
    color: ${theme.colors.primary};
  `}
`;

const CategoriesWrapper = styled.div(({ theme }) => ({
  marginBottom: theme.spacing[1]
}));

const PostPreview = ({
  style,
  className,
  title,
  text,
  link,
  img,
  categories
}) => (
  <PostPreviewWrapper className={className} style={style}>
    <Row align="center" nogutter>
      <Col xs={12} md={5} lg={6} xl={5}>
        <PreviewImg fluid={img} imgStyle={{ margin: 0 }} />
      </Col>

      <Col xs={12} md={7} lg={6} xl={7}>
        <Body>
          <Title>{title}</Title>
          {categories.length > 0 && (
            <CategoriesWrapper>
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  text={category}
                  color="red"
                  textColor="white"
                />
              ))}
            </CategoriesWrapper>
          )}
          <PreviewText>{text}</PreviewText>
          {link && (
            <div style={{ paddingTop: 5 }}>
              <PostLink to={link}>Continuar leyendo</PostLink>
            </div>
          )}
        </Body>
      </Col>
    </Row>
  </PostPreviewWrapper>
);

PostPreview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  }).isRequired
};

PostPreview.defaultProps = {
  style: {},
  className: '',
  link: '',
  categories: []
};

export default PostPreview;
