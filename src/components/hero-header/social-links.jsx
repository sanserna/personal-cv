/* eslint react/no-array-index-key: "off" */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { author } from 'app-content/meta/config';

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

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 0 10px;
  margin: 0;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const SocialLinks = ({ style }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: '1.5em'
  });

  return (
    <List style={style}>
      <IconContext.Provider value={iconConfig}>
        {links.map(({ icon: Icon, url }, index) => (
          <ListItem key={index}>
            <Link href={url} target="_blanc">
              <Icon />
            </Link>
          </ListItem>
        ))}
      </IconContext.Provider>
    </List>
  );
};

SocialLinks.propTypes = {
  style: PropTypes.object
};

SocialLinks.defaultProps = {
  style: {}
};

export default SocialLinks;
