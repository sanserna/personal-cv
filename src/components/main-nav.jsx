import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import clsx from 'clsx';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

import { author } from 'app-content/meta/config';
import { bpAboveMedium } from 'app-utils/breakpoints';
import Container from 'app-base-components/container';
import Button from 'app-base-components/button';
import Link from 'app-base-components/link';
import SocialLinks from 'app-components/social-links';
import Typography from 'app-base-components/typography';
import Mobile from 'app-base-components/responsive/mobile';

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
      <nav
        style={style}
        className={clsx('py-5 flex items-center bg-white', className)}
      >
        <Container className="container mx-auto max-w-5xl h-full">
          <div className="h-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Link className="hover:no-underline" to="/">
                <Typography variant="h5" component="span">
                  {author.name}
                </Typography>
              </Link>
            </div>
            <Mobile>
              <Button
                color="dark"
                onClick={() => setNavCollapseIsHidden(!navCollapseIsHidden)}
              >
                <FaBars />
              </Button>
            </Mobile>
            <div
              className={clsx('w-full md:w-auto md:flex', {
                hidden: navCollapseIsHidden,
              })}
            >
              <div className="block w-full md:flex md:items-center md:justify-end md:grow md:w-auto">
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
                  <Link
                    key={navItem.to}
                    to={navItem.to}
                    className="block pt-5 md:pt-0 md:pl-5 md:first:pl-0"
                    activeClassName="text-primary"
                    partiallyActive
                  >
                    <Typography component="span" colorVariant="inherit">
                      {navItem.label}
                    </Typography>
                  </Link>
                ))}
              </div>
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
            </div>
          </div>
        </Container>
      </nav>
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
