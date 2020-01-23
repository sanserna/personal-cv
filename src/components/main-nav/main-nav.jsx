/* eslint react/no-array-index-key: "off" */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
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
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[4]}`};
`;

const Brand = styled.h1({}, ({ theme }) => ({
  letterSpacing: theme.letterSpacing.tight,
  fontWeight: theme.fontWeight.semibold
}));

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
    font-size: ${theme.fontSize.base};
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

const NavigationSocialLinks = styled(SocialLinks)(({ theme }) => ({
  paddingTop: theme.spacing[5],
  [bpAboveMedium]: {
    paddingLeft: theme.spacing[5],
    paddingTop: 0
  }
}));

const MianNav = ({ style, className }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: theme.fontSize.sm
  });
  const [navCollapseIsHidden, setNavCollapseIsHidden] = useState(true);

  return (
    <IconContext.Provider value={iconConfig}>
      <Navbar style={style} className={className}>
        <Brand>{author.name}</Brand>
        <div className="block md:hidden">
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
        </div>
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
            ].map((navItem, index) => (
              <NavigationItem key={index} to={navItem.to}>
                {navItem.label}
              </NavigationItem>
            ))}
          </NavigationItems>
          <NavigationSocialLinks
            iconColor={theme.colors.gray[800]}
            iconSize="md"
            show={['github', 'linkedin']}
          />
        </NavigationCollapse>
      </Navbar>
    </IconContext.Provider>
  );
};

MianNav.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

MianNav.defaultProps = {
  style: {},
  className: ''
};

export default MianNav;
