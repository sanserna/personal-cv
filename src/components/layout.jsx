import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Global, css, useTheme } from '@emotion/react';
import { setConfiguration } from 'react-grid-system';
import 'moment/locale/es';

import MainFooter from 'app-components/main-footer';
import MainNav from 'app-components/main-nav';
import { siteLanguage } from 'app-content/meta/config';

// Setup moment locale
moment.locale(siteLanguage);

// Setup react grid system configuration
setConfiguration({
  containerWidths: [540, 750, 960, 960],
});

const Layout = ({ children, location }) => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          code[class*='language-'] {
            font-size: 1rem;
          }

          .gatsby-resp-image-wrapper {
            max-width: none !important;
          }

          .gatsby-highlight-code-line {
            background-color: #7a7a7a;
            display: block;
            margin-right: -1em;
            margin-left: -1em;
            padding-right: 1em;
            padding-left: 0.75em;
            border-left: 0.25em solid #f99;
          }

          .gatsby-highlight {
            background-color: #2d2d2d;
            border-radius: 0.3em;
            margin: 0.5em 0;
            padding: 0.2em;
            overflow: auto;

            pre[class*='language-'] {
              background-color: transparent;
              margin: 0;
              padding: 0;
              overflow: initial;
              float: left;
              min-width: 100%;
            }

            pre[class*='language-'].line-numbers {
              padding: 0;
              padding-left: 3.2em;
              overflow: initial;

              .line-numbers-rows {
                padding-left: 0.5em;
              }
            }
          }
        `}
      />
      <MainNav pathName={location.pathname} />
      <main
        css={{
          background: theme.colors.gray[100],
        }}
      >
        {children}
      </main>
      <MainFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
