import styled from '@emotion/styled';

import { bpAboveMedium } from 'app-utils/breakpoints';

export const PostHeaderRoot = styled.header(
  {
    backgroundRepeat: 'repeat',
    backgroundSize: '600px 600px',
  },
  ({ theme, haderPattern }) => ({
    backgroundImage: `url(${haderPattern})`,
    padding: `${theme.spacing[5]} 0`,
  })
);

export const BodyWrapper = styled.div(({ theme }) => ({
  paddingTop: theme.spacing[4],
  [bpAboveMedium]: {
    paddingTop: 0,
    paddingLeft: theme.spacing[4],
  },
}));
