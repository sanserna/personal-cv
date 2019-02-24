import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { author } from '../../../content/meta/config';
import SocialLinks from './social-links';

const Hero = ({ theme, avatar }) => (
  <>
    <div className="hero">
      <Img fixed={avatar} className="hero__image-container" />
      <div className="hero__description-content">
        <h2 className="hero__title">{author.name}</h2>
        <small className="hero__subtitle">{author.profesion}</small>
      </div>
      <SocialLinks style={{ paddingTop: '30px' }} theme={theme} />
    </div>

    <style jsx>{`
      .hero {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;

        :global(.hero__image-container) {
          border-radius: 50%;
          box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
        }

        .hero__description-content {
          padding-top: 30px;
          width: 100%;
        }

        .hero__title,
        .hero__subtitle {
          text-align: center;
          width: 100%;
        }

        .hero__title {
          margin: 0;
          text-transform: uppercase;
        }

        .hero__subtitle {
          display: block;
          font-style: italic;
        }
      }

      .hero__image-container {
        border-radius: 50%;
        border: 10px solid red;
        box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
      }
    `}</style>

    <style jsx>{`
      .hero {
        :global(.hero__image-container) {
          border: 10px solid ${theme.color.scheme.primary};
        }

        .hero__title,
        .hero__subtitle {
          color: ${theme.color.neutral.gray.d};
        }
      }
    `}</style>
  </>
);

Hero.propTypes = {
  theme: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired
};

Hero.defaultProps = {};

export default Hero;
