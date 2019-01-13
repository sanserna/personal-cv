import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import socialLinksStyles from './social-links.module.scss';

const SocialLinks = props => (
  <ul className={socialLinksStyles.socialLinks} style={props.style}>
    {props.socialData.map((data, index) => (
      <li key={index} className={socialLinksStyles.socialLinks__item}>
        <a
          href={data.link}
          target="_blanc"
          className={socialLinksStyles.socialLinks__link}
        >
          <Img
            fixed={data.iconImg}
            className={socialLinksStyles.socialLinks__iconWrapper}
            imgStyle={{ filter: 'invert(95%)' }}
          />
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  orientation: PropTypes.string,
  style: PropTypes.object,
  socialData: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      iconImg: PropTypes.shape({
        height: PropTypes.number,
        originalName: PropTypes.string,
        src: PropTypes.string,
        srcSet: PropTypes.string,
        width: PropTypes.number
      }).isRequired
    })
  ).isRequired
};

SocialLinks.defaultProps = {
  orientation: 'h',
  style: {}
};

export default SocialLinks;
