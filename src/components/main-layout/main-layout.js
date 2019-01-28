import React from 'react';

import mainLayoutStyles from './main-layout.module.scss';

const MainLayout = ({ children }) => (
  <div className={mainLayoutStyles.container}>{children}</div>
);

MainLayout.propTypes = {};

export default MainLayout;
