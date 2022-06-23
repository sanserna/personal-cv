import React from 'react';
import { useTheme } from '@emotion/react';

export default function useMediaQuery(queryInput, options = {}) {
  const theme = useTheme();
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
  } = options;
  const [match, setMatch] = React.useState(defaultMatches);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof queryInput === 'function' && theme === null) {
      // eslint-disable-next-line no-console
      console.error(
        [
          'The `query` argument provided is invalid.',
          'You are providing a function without a theme in the context.',
          'One of the parent elements needs to use a ThemeProvider.',
        ].join('\n')
      );
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;

  query = query.replace(/^@media( ?)/m, '');

  React.useEffect(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();

    if (queryList.addListener) {
      queryList.addListener(updateMatch);
    } else {
      queryList.addEventListener('change', updateMatch);
    }

    return () => {
      active = false;

      if (queryList.removeListener) {
        queryList.removeListener(updateMatch);
      } else {
        queryList.removeEventListener('change', updateMatch);
      }
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue({ query, match });
  }

  return match;
}
