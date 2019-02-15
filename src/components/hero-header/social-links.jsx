import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { author } from '../../../content/meta/config';

const links = [
  {
    url: author.social.facebook,
    icon: FaFacebookF
  },
  {
    url: author.social.instagram,
    icon: FaInstagram
  },
  {
    url: author.social.github,
    icon: FaGithub
  },
  {
    url: author.social.linkedin,
    icon: FaLinkedin
  }
];

const SocialLinks = ({ style, theme }) => {
  const [iconConfig] = useState({
    color: theme.color.neutral.gray.d,
    size: '1.5em'
  });

  return (
    <>
      <ul className="social-links" style={style}>
        <IconContext.Provider value={iconConfig}>
          {links.map(({ icon: Icon, url }, index) => (
            <li key={index} className="social-links__item">
              <a href={url} target="_blanc" className="social-links__link">
                <Icon />
              </a>
            </li>
          ))}
        </IconContext.Provider>
      </ul>

      <style jsx>{`
        .social-links {
          list-style: none;
          display: flex;
          align-items: center;

          &,
          .social-links__item {
            margin: 0;
          }

          .social-links__item {
            display: inline-block;
            padding: 0 10px;
          }

          .social-links__link {
            display: block;
            text-decoration: none;
            background-image: none;
            text-shadow: none;
            opacity: 0.7;
            transition: all ${theme.time.duration.short} ease;

            &:hover {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
};

SocialLinks.propTypes = {
  theme: PropTypes.object.isRequired,
  orientation: PropTypes.string,
  style: PropTypes.object
};

SocialLinks.defaultProps = {
  orientation: 'h',
  style: {}
};

export default SocialLinks;
