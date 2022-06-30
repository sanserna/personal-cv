/* eslint-disable import/no-extraneous-dependencies, import/prefer-default-export, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ThemeProvider } from '@emotion/react';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './src/styles/global.scss';
import Layout from 'app-components/layout';
import tailwindConfig from 'app-root/tailwind.config';

const { theme } = resolveConfig(tailwindConfig);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
