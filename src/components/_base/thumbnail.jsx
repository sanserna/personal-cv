import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const sizeVariantMapping = {
  sm: 'w-14 h-14',
  md: 'w-36 h-36',
  lg: 'w-64 h-64',
};

const Thumbnail = ({ style, className, imageData, alt, bgColor, size }) => {
  const image = getImage(imageData);

  return (
    <GatsbyImage
      className={clsx(
        'block m-auto overflow-hidden rounded-full',
        sizeVariantMapping[size],
        className
      )}
      style={style}
      alt={alt}
      image={image}
      backgroundColor={bgColor}
      placeholder="none"
      imgClassName="rounded-full"
    />
  );
};

Thumbnail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  imageData: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Thumbnail.defaultProps = {
  style: {},
  className: '',
  bgColor: 'transparent',
  size: 'md',
};

export default Thumbnail;
