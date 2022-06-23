import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ClassNames } from '@emotion/react';

const sizeModifierValues = {
  sm: {
    height: 60,
    width: 60,
  },
  md: {
    height: 150,
    width: 150,
  },
  lg: {
    height: 250,
    width: 250,
  },
};

const Thumbnail = ({ style, className, imageData, alt, bgColor, size }) => {
  const image = getImage(imageData);

  return (
    <ClassNames>
      {({ css }) => (
        <GatsbyImage
          className={className}
          style={style}
          alt={alt}
          image={image}
          backgroundColor={bgColor}
          imgClassName={css({
            borderRadius: '50%',
          })}
          css={{
            ...sizeModifierValues[size],
            display: 'block',
            margin: 'auto',
            overflow: 'hidden',
            borderRadius: '50%',
          }}
        />
      )}
    </ClassNames>
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
