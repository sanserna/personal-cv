/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTheme } from '@emotion/react';

import Badge from 'app-base-components/badge';
import Link from 'app-base-components/link';
import Typography from 'app-base-components/typography';

const PostPreview = ({
  style,
  className,
  title,
  text,
  link,
  coverImageData,
  creationDate,
  categories = [],
}) => {
  const theme = useTheme();
  const coverImage = getImage(coverImageData);

  return (
    <div
      className={clsx('pb-4 bg-white border border-light rounded-b', className)}
      style={style}
    >
      <Link to={link}>
        <GatsbyImage className="rounded-t" alt={title} image={coverImage} />
      </Link>
      <div className="p-2">
        <Link to={link}>
          <Typography
            className="block"
            variant="h5"
            component="span"
            colorVariant="inherit"
          >
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" className="text-secondary py-1">
          {creationDate}
        </Typography>
        {categories.map((category, index) => (
          <Badge
            key={index}
            text={category}
            color={theme.colors.primary}
            textColor={theme.colors.white}
          />
        ))}
        {text && <Typography className="pt-1">{text}</Typography>}
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
  creationDate: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  coverImageData: PropTypes.object.isRequired,
};

PostPreview.defaultProps = {
  style: {},
  className: '',
  categories: [],
  text: '',
};

export default PostPreview;
