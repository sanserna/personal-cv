import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';
import { PersonDataConsumer } from '../../contexts/person-data-context';
import { AssetsConsumer } from '../../contexts/assets-context';

const HeroHeader = ({ layoutPadding }) => (
  <PersonDataConsumer>
    {person => (
      <AssetsConsumer>
        {({ headerAvatar, haderPattern }) => (
          <section
            className={heroHeaderStyles.container}
            style={{
              height: window.innerHeight - layoutPadding,
              backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`
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
                fixed={headerAvatar.childImageSharp.fixed}
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
      </AssetsConsumer>
    )}
  </PersonDataConsumer>
);

HeroHeader.propTypes = {
  layoutPadding: PropTypes.number
};

HeroHeader.defaultProps = {
  layoutPadding: 0
};

export default HeroHeader;
