import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import socialLinksStyles from './social-links.module.scss';
import { PersonDataConsumer } from '../../contexts/person-data-context';
import { AssetsConsumer } from '../../contexts/assets-context';

const getSocialData = (socialLinks = {}, socialIcons = []) =>
  Object.keys(socialLinks).map(socialLink => {
    const iconImg = socialIcons.find(
      icon =>
        icon.node.childImageSharp.fixed.originalName.replace('.png', '') ===
        socialLink
    );

    return {
      iconImg: iconImg.node.childImageSharp.fixed,
      link: socialLinks[socialLink]
    };
  });

const SocialLinks = props => (
  <PersonDataConsumer>
    {({ social }) => (
      <AssetsConsumer>
        {({ socialIcons }) => (
          <ul className={socialLinksStyles.socialLinks} style={props.style}>
            {getSocialData(social, socialIcons.edges).map((data, index) => (
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
        )}
      </AssetsConsumer>
    )}
  </PersonDataConsumer>
);

SocialLinks.propTypes = {
  orientation: PropTypes.string,
  style: PropTypes.object
};

SocialLinks.defaultProps = {
  orientation: 'h'
};

export default SocialLinks;
