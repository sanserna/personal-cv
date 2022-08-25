import React from 'react';

import Typography from 'app-base-components/typography';

const MainFooter = () => (
  <footer className="bg-dark p-10">
    <Typography className="text-center" colorVariant="light">
      © 2018 Santiago Serna. Todos los derechos reservados.
    </Typography>
  </footer>
);

MainFooter.propTypes = {};

MainFooter.defaultProps = {};

export default MainFooter;
