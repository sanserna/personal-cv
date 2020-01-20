/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useTheme } from 'emotion-theming';

import Badge from 'app-lib/badge';
import Link from 'app-lib/link';

const PostPreview = ({
  style,
  className,
  title,
  text,
  link,
  img,
  creationDate,
  categories
}) => {
  const theme = useTheme();

  return (
    <div
      className={className}
      style={style}
      css={{
        backgroundColor: theme.colors.white,
        paddingBottom: theme.spacing[4]
      }}
    >
      <Link to={link}>
        <Img
          fluid={img}
          imgStyle={{ margin: 0 }}
          css={{
            borderRadius: theme.borderRadius.lg
          }}
        />
      </Link>
      <div
        css={{
          padding: theme.spacing[2]
        }}
      >
        <Link to={link}>
          <h3
            css={{
              margin: 0,
              fontSize: theme.fontSize['2xl'],
              lineHeight: theme.lineHeight.tight,
              color: theme.colors.dark,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {title}
          </h3>
        </Link>
        <div
          css={{
            color: theme.colors.secondary,
            padding: `${theme.spacing[1]} 0`
          }}
        >
          {creationDate}
        </div>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Badge
              key={index}
              text={category}
              color={theme.colors.primary}
              textColor={theme.colors.white}
            />
          ))}
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
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
  categories: []
};

export default PostPreview;
