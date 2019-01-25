import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import socialLinksStyles from './social-links.module.scss';

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
  <Subscribe to={[PersonDataContainer, AssetsContainer]}>
    {({ state: person }, { assets }) => (
      <ul className={socialLinksStyles.socialLinks} style={props.style}>
        {getSocialData(person.social, assets.socialIcons.edges).map(
          (data, index) => (
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
          )
        )}
      </ul>
    )}
  </Subscribe>
);

SocialLinks.propTypes = {
  orientation: PropTypes.string,
  style: PropTypes.object
};

SocialLinks.defaultProps = {
  orientation: 'h'
};

export default SocialLinks;
