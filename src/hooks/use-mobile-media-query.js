import { useTheme } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';

import { subtractToMeasure } from 'app-utils/misc';

const useMobileMediaQuery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery({
    maxWidth: subtractToMeasure(theme.screens.md, 1),
  });

  return isMobile;
};

export default useMobileMediaQuery;
