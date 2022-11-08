import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const tagVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'h6',
  lead: 'p',
  body: 'p',
  caption: 'span',
};

const fontSizeVariantMapping = {
  h1: 'leading-tight text-4xl md:text-5xl',
  h2: 'leading-tight text-3xl md:text-4xl',
  h3: 'leading-tight text-2xl md:text-3xl',
  h4: 'leading-tight font-medium text-xl md:text-2xl',
  h5: 'leading-tight font-medium text-lg md:text-xl',
  h6: 'leading-tight font-medium text-base md:text-lg',
  subtitle: 'text-base md:text-lg',
  lead: 'font-medium text-xl md:text-2xl',
  body: 'text-lg md:text-xl',
  caption: 'text-sm md:text-base',
};

const fontColorVariantMapping = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  dark: 'text-dark',
  light: 'text-light',
};

const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    children,
    className,
    style,
    colorVariant,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
  } = props;
  const RootComponent = component || tagVariantMapping[variant];

  return (
    <RootComponent
      ref={ref}
      style={style}
      className={clsx(
        'm-0',
        fontSizeVariantMapping[variant],
        colorVariant !== 'inherit' && fontColorVariantMapping[colorVariant],
        {
          truncate: noWrap,
          ['mb-[.35em]']: gutterBottom && !paragraph,
          ['mb-4']: paragraph,
        },
        className
      )}
    >
      {children}
    </RootComponent>
  );
});

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  colorVariant: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'dark',
    'light',
  ]),
  component: PropTypes.elementType,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'lead',
      'body',
      'subtitle',
      'caption',
    ]),
    PropTypes.string,
  ]),
};

Typography.defaultProps = {
  className: '',
  style: {},
  colorVariant: 'dark',
  component: null,
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body',
};

export default Typography;
