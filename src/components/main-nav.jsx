import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';
import { Container, Visible } from 'react-grid-system';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

import Button from 'app-base-components/button';
import Link from 'app-base-components/link';
import SocialLinks from 'app-components/social-links';
import { author } from 'app-content/meta/config';
import { bpAboveMedium } from 'app-utils/breakpoints';

const Navbar = styled.nav`
  ${({ theme }) => `
    background-color: ${theme.colors.white};
    padding: ${`${theme.spacing[6]} 0}`};
  `};

  ${bpAboveMedium} {
    height: 85px;
    padding-top: 0;
    padding-bottom: 0;
  }
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
    color: ${theme.colors.secondary};

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

const MainNav = ({ style, className, showHeroImg }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: theme.fontSize.sm
  });
  const [navCollapseIsHidden, setNavCollapseIsHidden] = useState(true);

  return (
    <StaticQuery
      query={graphql`
        {
          heroImage: file(relativePath: { eq: "santiago-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 60, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={({ heroImage }) => (
        <IconContext.Provider value={iconConfig}>
          <Navbar style={style} className={className}>
            <Container className="h-full">
              <div className="h-full flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                  <Img
                    fluid={heroImage.childImageSharp.fluid}
                    className={showHeroImg ? '' : 'hidden'}
                    css={{
                      marginRight: theme.spacing[3],
                      height: 60,
                      width: 60,
                      background: theme.colors.primary,
                      borderRadius: '50%'
                    }}
                    imgStyle={{
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
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
                </div>
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
                <NavigationCollapse
                  className={navCollapseIsHidden ? 'is-hidden' : ''}
                >
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
              </div>
            </Container>
          </Navbar>
        </IconContext.Provider>
      )}
    />
  );
};

MainNav.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  showHeroImg: PropTypes.bool
};

MainNav.defaultProps = {
  style: {},
  className: '',
  showHeroImg: false
};

export default MainNav;
