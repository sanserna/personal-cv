import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';

const HeroHeader = ({ layoutPadding, bgImgSrc, socialData, avatar, data }) => (
  <section
    className={heroHeaderStyles.container}
    style={{
      height: window.innerHeight - layoutPadding,
      backgroundImage: `url(${bgImgSrc})`
    }}
  >
    <header className={heroHeaderStyles.header}>
      <a className={heroHeaderStyles.header__item} href={`tel:${data.phone}`}>
        {data.phone}
      </a>
      <a
        className={heroHeaderStyles.header__item}
        href={`mailto:${data.email}`}
        style={{ fontStyle: 'italic' }}
      >
        {data.email}
      </a>
    </header>

    <div className={heroHeaderStyles.hero}>
      <Img fixed={avatar} className={heroHeaderStyles.hero__imageContainer} />
      <div className={heroHeaderStyles.hero__descriptionContent}>
        <h2 className={heroHeaderStyles.hero__title}>{data.name}</h2>
        <small className={heroHeaderStyles.hero__subtitle}>
          {data.profesion}
        </small>
      </div>
      <SocialLinks style={{ paddingTop: '30px' }} socialData={socialData} />
    </div>
  </section>
);

HeroHeader.propTypes = {
  layoutPadding: PropTypes.number,
  bgImgSrc: PropTypes.string,
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
  ).isRequired,
  avatar: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profesion: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};

HeroHeader.defaultProps = {
  layoutPadding: 0,
  bgImgSrc: ''
};

export default HeroHeader;
