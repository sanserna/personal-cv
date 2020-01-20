import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Badge = ({ style, color, text, textColor }) => (
  <span
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
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

Badge.defaultProps = {
  style: {}
};

export default Badge;
