import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { Visible } from 'react-grid-system';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

import Button from 'app-lib/button';
import Link from 'app-lib/link';
import SocialLinks from 'app-components/social-links';
import { author } from 'app-content/meta/config';
import { bpAboveMedium } from 'app-utils/breakpoints';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ theme }) => `
    background-color: ${theme.colors.white};
    padding: ${`${theme.spacing[6]} ${theme.spacing[4]}`};
  `};
`;

const NavigationItems = styled.div`
  display: block;
  width: 100%;

  ${bpAboveMedium} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    width: auto;
  }
`;

const NavigationItem = styled(Link)`
  display: block;

  ${({ theme }) => `
    font-size: ${theme.fontSize.lg};
    padding-top: ${theme.spacing[5]};
    color: ${theme.colors.gray[600]};

    &:hover {
      color: ${theme.colors.dark};
    }
  `};

  ${bpAboveMedium} {
    padding-top: 0;
    padding-left: ${({ theme }) => theme.spacing[5]};
  }
`;

const NavigationCollapse = styled.div`
  width: 100%;

  &.is-hidden {
    display: none;
  }

  ${bpAboveMedium} {
    width: auto;

    &,
    &.is-hidden {
      display: flex;
    }
  }
`;

const MainNav = ({ style, className }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: theme.fontSize.sm
  });
  const [navCollapseIsHidden, setNavCollapseIsHidden] = useState(true);

  return (
    <IconContext.Provider value={iconConfig}>
      <Navbar style={style} className={className}>
        <Link
          to="/"
          css={{
            color: theme.colors.dark,
            letterSpacing: theme.letterSpacing.tight,
            fontSize: theme.fontSize['2xl'],
            fontWeight: theme.fontWeight.semibold,
            '&:hover': {
              textDecoration: 'none'
            }
          }}
        >
          {author.name}
        </Link>
        <Visible xs sm>
          <Button
            color="dark"
            css={{
              paddingTop: theme.spacing[2],
              paddingBottom: theme.spacing[2]
            }}
            onClick={() => setNavCollapseIsHidden(!navCollapseIsHidden)}
          >
            <FaBars />
          </Button>
        </Visible>
        <NavigationCollapse className={navCollapseIsHidden ? 'is-hidden' : ''}>
          <NavigationItems>
            {[
              {
                to: '/about',
                label: 'About'
              },
              {
                to: '/blog',
                label: 'Blog'
              }
            ].map(navItem => (
              <NavigationItem key={navItem.to} to={navItem.to}>
                {navItem.label}
              </NavigationItem>
            ))}
          </NavigationItems>
          <SocialLinks
            iconColor={theme.colors.gray[800]}
            iconSize="lg"
            show={['github', 'linkedin']}
            css={{
              paddingTop: theme.spacing[5],
              [bpAboveMedium]: {
                paddingLeft: theme.spacing[5],
                paddingTop: 0
              }
            }}
          />
        </NavigationCollapse>
      </Navbar>
    </IconContext.Provider>
  );
};

MainNav.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

MainNav.defaultProps = {
  style: {},
  className: ''
};

export default MainNav;
