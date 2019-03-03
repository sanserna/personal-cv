import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';

const Header = ({ theme }) => (
  <>
    <header className="header">
      <a className="header__item" href={`tel:${author.phone}`}>
        {author.phone}
      </a>
      <a
        className="header__item"
        href={`mailto:${author.email}`}
        style={{ fontStyle: 'italic' }}
      >
        {author.email}
      </a>
    </header>

    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-around;
        padding: 20px 20px;
        width: 100%;

        .header__item {
          color: ${theme.color.neutral.gray.d};
          opacity: 0.7;
          text-decoration: none;
          transition: all ${theme.time.duration.short} ease;

          &:hover {
            opacity: 1;
          }
        }

        @above tablet {
          justify-content: flex-end;
          padding: 20px 40px;

          .header__item:not(:first-child) {
            padding-left: 20px;
          }
        }
      }
    `}</style>
  </>
);

Header.propTypes = {
  theme: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default Header;
