import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';

const HeroHeader = ({ layoutPadding }) => (
  <Subscribe to={[PersonDataContainer, AssetsContainer]}>
    {({ state: person }, { assets }) => (
      <section
        className={heroHeaderStyles.container}
        style={{
          height: window.innerHeight - layoutPadding,
          backgroundImage: `url(${
            assets.haderPattern.childImageSharp.fixed.src
          })`
        }}
      >
        <header className={heroHeaderStyles.header}>
          <a
            className={heroHeaderStyles.header__item}
            href={`tel:${person.phone}`}
          >
            {person.phone}
          </a>
          <a
            className={heroHeaderStyles.header__item}
            href={`mailto:${person.email}`}
            style={{ fontStyle: 'italic' }}
          >
            {person.email}
          </a>
        </header>

        <div className={heroHeaderStyles.hero}>
          <Img
            fixed={assets.headerAvatar.childImageSharp.fixed}
            className={heroHeaderStyles.hero__imageContainer}
          />
          <div className={heroHeaderStyles.hero__descriptionContent}>
            <h2 className={heroHeaderStyles.hero__title}>{person.name}</h2>
            <small className={heroHeaderStyles.hero__subtitle}>
              {person.profesion}
            </small>
          </div>
          <SocialLinks style={{ paddingTop: '30px' }} />
        </div>
      </section>
    )}
  </Subscribe>
);

HeroHeader.propTypes = {
  layoutPadding: PropTypes.number
};

HeroHeader.defaultProps = {
  layoutPadding: 0
};

export default HeroHeader;
