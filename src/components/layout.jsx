import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import MainFooter from 'app-components/main-footer';
import MainNav from 'app-components/main-nav';

const Layout = ({ children, location }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: theme.colors.gray[100]
      }}
    >
      <MainNav showHeroImg={location.pathname !== '/'} />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
