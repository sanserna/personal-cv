import React from 'react';
import Img from 'gatsby-image';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';

const renderHeader = person => (
  <header className={heroHeaderStyles.header}>
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
          backgroundImage: `url(${
            assets.haderPattern.childImageSharp.fixed.src
          })`
        }}
      >
        {renderHeader(person)}
        {renderHero(assets.headerAvatar.childImageSharp.fixed, person)}
      </section>
    )}
  </Subscribe>
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
