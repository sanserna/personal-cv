import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes, useTheme } from '@emotion/react';

const borderLoop = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const sizeModifierStyles = {
  sm: () => css`
    width: 1rem;
    height: 1rem;
  `,
  lg: () => css`
    width: 2rem;
    height: 2rem;
  `,
};

const Spinner = ({ className, style, size, color }) => {
  const theme = useTheme();

  return (
    <div
      className={className}
      style={style}
      css={css`
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: text-bottom;
        border-width: 4px;
        border-color: ${color};
        border-right-color: transparent;
        border-radius: 50%;
        animation: ${borderLoop} 0.75s linear infinite;

        ${sizeModifierStyles[size] && sizeModifierStyles[size](theme)}
      `}
    />
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
  style: {},
  size: 'md',
  color: 'currentColor',
};

export default Spinner;
