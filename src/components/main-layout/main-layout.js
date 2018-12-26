import React from 'react';

import mainLayoutStyles from './main-layout.module.scss';

const MainLayout = ({ children }) => {
  const layoutPadding = 35;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { layoutPadding })
  );

  return (
    <div
      className={mainLayoutStyles.container}
      style={{ padding: layoutPadding }}
    >
      {childrenWithProps}
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
