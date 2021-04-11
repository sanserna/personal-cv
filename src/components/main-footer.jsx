import React from 'react';
import { useTheme } from 'emotion-theming';

const MainFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={{
        background: theme.colors.dark,
        padding: theme.spacing[10],
      }}
    >
      <p
        css={{
          color: theme.colors.white,
          textAlign: 'center',
          width: '100%',
        }}
      >
        © 2018 Santiago Serna. Todos los derechos reservados.
      </p>
    </footer>
  );
};

MainFooter.propTypes = {};

MainFooter.defaultProps = {};

export default MainFooter;
