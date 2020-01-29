import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import MainFooter from 'app-components/main-footer';
import MainNav from 'app-components/main-nav';

const Layout = ({ children, location }) => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

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
      <div
        css={{
          minHeight: '100vh',
          background: theme.colors.gray[100]
        }}
      >
        <MainNav showHeroImg={location.pathname !== '/'} />
        <main>{children}</main>
        <MainFooter />
      </div>
    </>
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
