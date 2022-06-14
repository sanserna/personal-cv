import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';

import Thumbnail from 'app-base-components/thumbnail';

const HeroThumbnail = ({ bgColor, size }) => {
  const theme = useTheme();
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "santiago-2.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            transformOptions: { cropFocus: NORTH }
            width: 900
            height: 900
          )
        }
      }
    }
  `);

  return (
    <Thumbnail
      imageData={heroImage}
      alt="Hero"
      bgColor={bgColor || theme.colors.primary}
      size={size}
    />
  );
};

HeroThumbnail.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

HeroThumbnail.defaultProps = {
  bgColor: '',
  size: 'md',
};

export default HeroThumbnail;
