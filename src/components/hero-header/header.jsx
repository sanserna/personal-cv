import React from 'react';
import styled from '@emotion/styled';

import { author } from 'app-content/meta/config';
import { bpAboveMedium } from 'app-utils/breakpoints';

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  width: 100%;

  ${bpAboveMedium} {
    justify-content: flex-end;
    padding: 20px 40px;
  }
`;

const HeaderItem = styled.a`
  color: ${({ theme }) => theme.colors.gray[400]};
  opacity: 0.7;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }

  ${bpAboveMedium} {
    &:not(:first-of-type) {
      padding-left: 20px;
    }
  }
`;

const Header = () => (
  <HeaderEl>
    <HeaderItem href={`tel:${author.phone}`}>{author.phone}</HeaderItem>
    <HeaderItem href={`mailto:${author.email}`} style={{ fontStyle: 'italic' }}>
      {author.email}
    </HeaderItem>
  </HeaderEl>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
