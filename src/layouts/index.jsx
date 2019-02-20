import React, { useState } from 'react';
import PropTypes from 'prop-types';

import themeObjectFromYaml from '../theme/theme.yaml';
import Footer from '../components/footer';

// Global contexts
export const ThemeContext = React.createContext(null);

const Layout = ({ children }) => {
  const [theme] = useState(themeObjectFromYaml);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="wrapper">
        <main>{children}</main>
        <Footer theme={theme} />
      </div>

      <style jsx>{`
        .wrapper {
          background: linear-gradient(
            to bottom,
            ${theme.color.neutral.gray.d} 0%,
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
