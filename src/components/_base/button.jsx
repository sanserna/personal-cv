/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { darken } from 'polished';

const sizeModifierStyles = {
  sm: theme => css`
    --sm-spacing: ${theme.spacing[2]};
    padding: calc(var(--sm-spacing) / 2) var(--sm-spacing);
    font-size: ${theme.fontSize.sm};
  `,
  lg: theme => css`
    --lg-spacing: ${theme.spacing[4]};
    padding: calc(var(--lg-spacing) / 2) var(--lg-spacing);
    font-size: ${theme.fontSize.lg};
  `,
};

const Button = ({
  children,
  style,
  className,
  disabled,
  oulined,
  type,
  size,
  onClick,
  color,
}) => {
  const theme = useTheme();
  const mainColor = theme.colors[color];
  const activeColor = darken(0.2, mainColor);
  const disabledColor = theme.colors.gray[500];
  const mdSpacing = theme.spacing[3];

  return (
    <button
      style={style}
      className={className}
      type={type}
      disabled={disabled}
      color={color}
      onClick={onClick}
      css={css`
        border-width: ${theme.borderWidth.default};
        border-color: ${mainColor};
        border-radius: ${theme.borderRadius.default};
        padding: calc(${mdSpacing} / 2) ${mdSpacing};
        font-size: ${theme.fontSize.base};
        font-weight: ${theme.fontWeight.semibold};
        outline: 0;
        vertical-align: middle;
        transition: 100ms ease-in-out;

        &:disabled {
          cursor: not-allowed;
          background: ${disabledColor};
          border-color: ${disabledColor};
        }

        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }

        &:not(:disabled):not(.disabled):active,
        &:not(:disabled):not(.disabled):hover {
          border-color: ${activeColor};
          background-color: ${activeColor};
        }

        ${sizeModifierStyles[size] && sizeModifierStyles[size](theme)}

        ${oulined
          ? css`
              background: transparent;
              color: ${mainColor};

              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled):hover {
                color: ${theme.colors.white};
              }
            `
          : css`
              background: ${mainColor};
              color: ${theme.colors.white};
            `}
      `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  oulined: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'danger',
    'success',
    'light',
    'dark',
  ]),
};

Button.defaultProps = {
  style: {},
  className: '',
  disabled: false,
  oulined: false,
  type: 'button',
  size: 'md',
  onClick: () => {},
  color: 'primary',
};

export default Button;
