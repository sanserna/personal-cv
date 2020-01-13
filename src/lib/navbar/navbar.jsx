/* eslint react/no-array-index-key: "off" */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

import Button from 'app-lib/button';
import { bpAboveMedium } from 'app-utils/breakpoints';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const Brand = styled.span({}, ({ theme }) => ({
  letterSpacing: theme.letterSpacing.tight,
  fontWeight: theme.fontWeight.semibold,
  fontSize: theme.fontSize.xl,
  paddingRight: theme.spacing[3]
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
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-top: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.gray[600]};

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  ${bpAboveMedium} {
    padding-top: 0;
    padding-left: ${({ theme }) => theme.spacing[5]};
  }
`;

const Navbar = ({ style, className, brandName, navItems }) => {
  const theme = useTheme();
  const [iconConfig] = useState({
    color: theme.colors.gray[100],
    size: theme.fontSize.sm
  });

  return (
    <IconContext.Provider value={iconConfig}>
      <Nav style={style} className={className}>
        {brandName && <Brand>{brandName}</Brand>}
        <div className="block md:hidden">
          <Button
            color="dark"
            style={{
              paddingTop: theme.spacing[2],
              paddingBottom: theme.spacing[2]
            }}
          >
            <FaBars />
          </Button>
        </div>
        <NavigationItems>
          {navItems.map((navItem, index) => (
            <NavigationItem key={index} to={navItem.to}>
              {navItem.label}
            </NavigationItem>
          ))}
        </NavigationItems>
      </Nav>
    </IconContext.Provider>
  );
};

Navbar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  brandName: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string
    })
  )
};

Navbar.defaultProps = {
  style: {},
  className: '',
  brandName: '',
  navItems: []
};

export default Navbar;
