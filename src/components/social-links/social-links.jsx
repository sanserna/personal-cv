/* eslint react/no-array-index-key: "off" */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { IconContext } from 'react-icons';

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  ${({ theme }) => `
    &:not(:first-of-type) {
      padding-left: ${theme.spacing[3]};
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

const SocialLinks = ({ className, style, links, color }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: color || theme.colors.gray[100],
    size: '1.5em'
  });

  return (
    <List className={className} style={style}>
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
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      icon: PropTypes.func
    })
  )
};

SocialLinks.defaultProps = {
  className: '',
  style: {},
  color: '',
  links: []
};

export default SocialLinks;
