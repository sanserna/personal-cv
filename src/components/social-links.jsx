/* eslint react/no-array-index-key: "off" */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { author } from 'app-content/meta/config';

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  ${({ itemSpacing }) => `
    &:not(:first-of-type) {
      padding-left: ${itemSpacing};
    }
  `}
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

const linksConfig = {
  facebook: {
    url: author.social.facebook,
    icon: FaFacebook
  },
  github: {
    url: author.social.github,
    icon: FaGithub
  },
  linkedin: {
    url: author.social.linkedin,
    icon: FaLinkedin
  },
  instagram: {
    url: author.social.instagram,
    icon: FaInstagram
  }
};

const SocialLinks = ({ className, style, iconColor, iconSize, show }) => {
  const itemsToShow = show.length ? show : Object.keys(linksConfig);
  const theme = useTheme();
  const [iconConfig] = useState({
    color: iconColor || theme.colors.gray[100],
    size: {
      sm: theme.fontSize.lg,
      md: theme.fontSize['2xl'],
      lg: theme.fontSize['3xl'],
      xl: theme.fontSize['5xl']
    }[iconSize]
  });
  const itemSpacing = {
    sm: theme.spacing[2],
    md: theme.spacing[3],
    lg: theme.spacing[5],
    xl: theme.spacing[6]
  }[iconSize];

  return (
    <List className={className} style={style}>
      <IconContext.Provider value={iconConfig}>
        {itemsToShow.reduce((itemsArr, itemToShow) => {
          const itemConfig = linksConfig[itemToShow];

          if (itemConfig) {
            const Icon = itemConfig.icon;

            itemsArr.push(
              <ListItem key={itemConfig.url} itemSpacing={itemSpacing}>
                <Link href={itemConfig.url} target="_blanc">
                  <Icon />
                </Link>
              </ListItem>
            );
          }

          return itemsArr;
        }, [])}
      </IconContext.Provider>
    </List>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  iconColor: PropTypes.string,
  iconSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  show: PropTypes.arrayOf(PropTypes.string)
};

SocialLinks.defaultProps = {
  className: '',
  style: {},
  iconColor: '',
  iconSize: 'md',
  show: []
};

export default SocialLinks;
