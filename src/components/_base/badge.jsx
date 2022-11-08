import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from 'app-base-components/typography';

const sizeVariantMapping = {
  sm: 'py-0.5 px-1.5',
  md: 'py-1.5 px-2.5',
  lg: 'py-2.5 px-3.5',
};

const typographyVariantMapping = {
  sm: 'caption',
  md: 'body',
  lg: 'lead',
};

const baseClassName = [
  'inline-block',
  'leading-none',
  'text-center',
  'whitespace-nowrap',
  'align-baseline',
  'rounded',
  'capitalize',
  'mr-1.5',
  'last-of-type:mr-0',
];

const Badge = ({
  style,
  className,
  color,
  text,
  size,
  textColorColorVariant,
}) => (
  <div
    className={clsx(baseClassName, sizeVariantMapping[size], className)}
    style={style}
    css={{
      backgroundColor: color,
    }}
  >
    <Typography
      variant={typographyVariantMapping[size]}
      colorVariant={textColorColorVariant}
    >
      {text}
    </Typography>
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  textColorColorVariant: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'dark',
    'light',
  ]),
};

Badge.defaultProps = {
  className: '',
  style: {},
  size: 'md',
  textColorColorVariant: 'dark',
};

export default Badge;
