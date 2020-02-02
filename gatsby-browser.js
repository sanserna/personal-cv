/* eslint-disable import/prefer-default-export, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ThemeProvider } from 'emotion-theming';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import Layout from 'app-components/layout';
import tailwindConfig from 'app-root/tailwind.config';
import './src/styles/global.scss';

const { theme } = resolveConfig(tailwindConfig);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
