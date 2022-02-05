import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

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

const Wrapper = styled.div(
  {
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  ({ size, bgColor, showShadow }) => ({
    ...size,
    background: bgColor,
    boxShadow: showShadow ? '5px 10px 15px rgba(0, 0, 0, 0.3)' : 'none',
  })
);

const HeroThumbnail = ({ bgColor, size, showShadow }) => {
  const theme = useTheme();

  return (
    <Wrapper
      size={sizeModifierValues[size]}
      bgColor={bgColor || theme.colors.primary}
      showShadow={showShadow}
    >
      <StaticImage
        alt="hero"
        src="../images/santiago-2.png"
        placeholder="tracedSVG"
        layout="fullWidth"
        imgStyle={{
          top: '5px',
        }}
      />
    </Wrapper>
  );
};

HeroThumbnail.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showShadow: PropTypes.bool,
};

HeroThumbnail.defaultProps = {
  bgColor: '',
  size: 'md',
  showShadow: false,
};

export default HeroThumbnail;
