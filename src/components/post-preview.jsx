/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useTheme } from 'emotion-theming';

import Badge from 'app-base-components/badge';
import Link from 'app-base-components/link';

const PostPreview = ({
  style,
  className,
  title,
  text,
  link,
  img,
  creationDate,
  categories = [],
}) => {
  const theme = useTheme();

  return (
    <div
      className={className}
      style={style}
      css={{
        backgroundColor: theme.colors.white,
        border: `${theme.borderWidth.default} solid ${theme.colors.light}`,
        borderBottomLeftRadius: theme.borderRadius.default,
        borderBottomRightRadius: theme.borderRadius.default,
        paddingBottom: theme.spacing[4],
      }}
    >
      <Link to={link}>
        <Img
          fluid={img}
          imgStyle={{ margin: 0 }}
          css={{
            borderTopLeftRadius: theme.borderRadius.default,
            borderTopRightRadius: theme.borderRadius.default,
          }}
        />
      </Link>
      <div
        css={{
          padding: theme.spacing[2],
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
                textDecoration: 'underline',
              },
            }}
          >
            {title}
          </h3>
        </Link>
        <div
          css={{
            color: theme.colors.secondary,
            padding: `${theme.spacing[1]} 0`,
          }}
        >
          {creationDate}
        </div>
        {categories.map((category, index) => (
          <Badge
            key={index}
            text={category}
            color={theme.colors.primary}
            textColor={theme.colors.white}
          />
        ))}
        {text && (
          <p
            css={{
              paddingTop: theme.spacing[1],
            }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  // FIXME: we should format the date internaly
  creationDate: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
  }).isRequired,
};

PostPreview.defaultProps = {
  style: {},
  className: '',
  categories: [],
  text: '',
};

export default PostPreview;
