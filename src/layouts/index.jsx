import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import themeObjectFromYaml from '../theme/theme.yaml';

// Global contexts
export const ThemeContext = React.createContext(null);

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(themeObjectFromYaml);

  return (
    <ThemeContext.Provider value={theme}>
      <main>{children}</main>

      <style jsx>{`
        main {
          background: linear-gradient(
            to bottom,
            ${theme.color.neutral.gray.b} 0%,
            ${theme.color.neutral.gray.c} 35%,
            ${theme.color.neutral.gray.c} 60%,
            ${theme.color.neutral.gray.d} 100%
          );

          @above tablet {
            padding: ${theme.space.layout};
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
