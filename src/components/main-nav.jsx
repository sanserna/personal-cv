import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Container, Visible } from 'react-grid-system';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

import Button from 'app-base-components/button';
import Link from 'app-base-components/link';
import SocialLinks from 'app-components/social-links';
import HeroThumbnail from 'app-components/hero-thumbnail';
import { author } from 'app-content/meta/config';
import { bpAboveMedium } from 'app-utils/breakpoints';

const Navbar = styled.nav`
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  ${({ theme }) => `
    background-color: ${theme.colors.white};
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
    font-size: ${theme.fontSizeRaw.lg};
    padding-top: ${theme.spacing[5]};
    color: ${theme.colors.secondary};

    &:hover {
      color: ${theme.colors.dark};
    }

    &.active {
      color: ${theme.colors.primary};
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

const MainNav = ({ style, className, pathName }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: theme.fontSizeRaw.sm,
  });
  const [navCollapseIsHidden, setNavCollapseIsHidden] = useState(true);

  useEffect(() => {
    setNavCollapseIsHidden(true);
  }, [pathName]);

  return (
    <IconContext.Provider value={iconConfig}>
      <Navbar style={style} className={className}>
        <Container className="h-full w-full">
          <div className="h-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <div
                className={pathName !== '/' ? '' : 'hidden'}
                css={{
                  marginRight: theme.spacing[3],
                }}
              >
                <HeroThumbnail size="sm" />
              </div>
              <Link
                to="/"
                css={{
                  color: theme.colors.dark,
                  letterSpacing: theme.letterSpacing.tight,
                  fontSize: theme.fontSizeRaw['2xl'],
                  fontWeight: theme.fontWeight.medium,
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                {author.name}
              </Link>
            </div>
            <Visible xs sm>
              <Button
                color="dark"
                onClick={() => setNavCollapseIsHidden(!navCollapseIsHidden)}
              >
                <FaBars />
              </Button>
            </Visible>
            <NavigationCollapse
              className={navCollapseIsHidden ? 'is-hidden' : ''}
            >
              <NavigationItems>
                {[
                  {
                    to: '/about',
                    label: 'About',
                  },
                  {
                    to: '/blog',
                    label: 'Blog',
                  },
                ].map(navItem => (
                  <NavigationItem
                    key={navItem.to}
                    to={navItem.to}
                    activeClassName="active"
                    partiallyActive
                  >
                    {navItem.label}
                  </NavigationItem>
                ))}
              </NavigationItems>
              <SocialLinks
                iconColor={theme.colors.gray[800]}
                iconSize="md"
                show={['github', 'linkedin']}
                css={{
                  paddingTop: theme.spacing[5],
                  [bpAboveMedium]: {
                    paddingLeft: theme.spacing[5],
                    paddingTop: 0,
                  },
                }}
              />
            </NavigationCollapse>
          </div>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
};

MainNav.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  pathName: PropTypes.string.isRequired,
};

MainNav.defaultProps = {
  style: {},
  className: '',
};

export default MainNav;
