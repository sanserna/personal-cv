import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';

let headerRef;

const renderHeader = person => (
  <header className={heroHeaderStyles.header} ref={ele => (headerRef = ele)}>
    <a className={heroHeaderStyles.header__item} href={`tel:${person.phone}`}>
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
);

console.log(headerRef);

const renderHero = (heroAvatar, person) => (
  <div className={heroHeaderStyles.hero}>
    <Img fixed={heroAvatar} className={heroHeaderStyles.hero__imageContainer} />
    <div className={heroHeaderStyles.hero__descriptionContent}>
      <h2 className={heroHeaderStyles.hero__title}>{person.name}</h2>
      <small className={heroHeaderStyles.hero__subtitle}>
        {person.profesion}
      </small>
    </div>
    <SocialLinks style={{ paddingTop: '30px' }} />
  </div>
);

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
        {renderHeader(person)}
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {renderHero(assets.headerAvatar.childImageSharp.fixed, person)}
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
