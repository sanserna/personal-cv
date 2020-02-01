/* eslint-disable import/prefer-default-export, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import moment from 'moment';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ThemeProvider } from 'emotion-theming';
import { setConfiguration } from 'react-grid-system';

import tailwindConfig from 'app-root/tailwind.config';

import 'moment/locale/es';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './src/styles/global.scss';
import { siteLanguage } from 'app-content/meta/config';

// Setup moment
moment.locale(siteLanguage);

// Setup react grid system
setConfiguration({
  containerWidths: [540, 750, 960, 960]
});

const { theme: themeConfig } = resolveConfig(tailwindConfig);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={themeConfig}>{element}</ThemeProvider>
);
