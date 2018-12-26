import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import heroHeaderStyles from './hero-header.module.scss';
import SocialLinks from '../social-links/social-links';

const HeroHeader = props => {
  const sectionHeight = window.innerHeight - props.layoutPadding;
  const renderHeroHeader = ({ site, avatar, pattern }) => {
    const person = site.siteMetadata.person;
    const patternSrc = pattern.childImageSharp.fixed.src;

    return (
      <section
        className={heroHeaderStyles.container}
        style={{
          height: sectionHeight,
          backgroundImage: `url(${patternSrc})`
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
            fixed={avatar.childImageSharp.fixed}
            className={heroHeaderStyles.hero__imageContainer}
          />
          <div className={heroHeaderStyles.hero__descriptionContent}>
            <h2 className={heroHeaderStyles.hero__title}>{person.name}</h2>
            <small className={heroHeaderStyles.hero__subtitle}>
              {person.profesion}
            </small>
          </div>
          <SocialLinks />
        </div>
      </section>
    );
  };

  return <StaticQuery query={query} render={renderHeroHeader} />;
};

const query = graphql`
  query {
    site {
      siteMetadata {
        person {
          name
          profesion
          email
          phone
        }
      }
    }
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    pattern: file(relativePath: { eq: "footer_lodyas.png" }) {
      childImageSharp {
        fixed(width: 800, height: 800, quality: 100) {
          src
        }
      }
    }
  }
`;

HeroHeader.propTypes = {
  layoutPadding: PropTypes.number
};

HeroHeader.defaultProps = {
  layoutPadding: 0
};

export default HeroHeader;
