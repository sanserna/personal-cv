import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';

import themeObjectFromYaml from '../theme/theme.yaml';
import Footer from '../components/footer';

// Setup moment
moment.locale('es');

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
          min-height: 100vh;
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

        a {
          background-image: none;
          text-shadow: none;
        }

        .gatsby-highlight {
          background-color: #2d2d2d;
          border-radius: 0.3em;
          margin: 0.5em 0;
          padding: 0.2em;
          overflow: auto;
        }

        .gatsby-highlight pre[class*='language-'].line-numbers {
          padding: 0;
          padding-left: 3.2em;
          overflow: initial;

          .line-numbers-rows {
            padding-left: 0.5em;
          }
        }
      `}</style>
    </ThemeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
