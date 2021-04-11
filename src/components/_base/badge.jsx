import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Badge = ({ style, className, color, text, textColor }) => (
  <span
    className={className}
    style={style}
    css={css`
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      text-transform: capitalize;
      color: ${textColor};
      background-color: ${color};

      &:not(:last-of-type) {
        margin-right: 5px;
      }
    `}
  >
    {text}
  </span>
);

Badge.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  className: '',
  style: {},
};

export default Badge;
