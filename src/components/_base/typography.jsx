import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import clsx from 'clsx';

const round = value => Math.round(value * 1e5) / 1e5;

const fontVariantMapping = {
  h1: {
    tag: 'h1',
    fontWeight: 'font-light',
    fontSize: 'text-8xl',
    letterSpacingVal: -1.5,
  },
  h2: {
    tag: 'h2',
    fontWeight: 'font-light',
    fontSize: 'text-6xl',
    letterSpacingVal: -0.5,
  },
  h3: {
    tag: 'h3',
    fontWeight: 'font-normal',
    fontSize: 'text-5xl',
    letterSpacingVal: 0,
  },
  h4: {
    tag: 'h4',
    fontWeight: 'font-normal',
    fontSize: 'text-4xl',
    letterSpacingVal: 0.25,
  },
  h5: {
    tag: 'h5',
    fontWeight: 'font-normal',
    fontSize: 'text-2xl',
    letterSpacingVal: 0,
  },
  h6: {
    tag: 'h6',
    fontWeight: 'font-medium',
    fontSize: 'text-xl',
    letterSpacingVal: 0.15,
  },
  subtitle1: {
    tag: 'h6',
    fontWeight: 'font-normal',
    fontSize: 'text-base',
    letterSpacingVal: 0.15,
  },
  subtitle2: {
    tag: 'h6',
    fontWeight: 'font-medium',
    fontSize: 'text-sm',
    letterSpacingVal: 0.1,
  },
  lead: {
    tag: 'p',
    fontWeight: 'font-normal',
    fontSize: 'text-3xl',
    letterSpacingVal: 0.125,
  },
  body1: {
    tag: 'p',
    fontWeight: 'font-normal',
    fontSize: 'text-lg',
    letterSpacingVal: 0.15,
  },
  body2: {
    tag: 'p',
    fontWeight: 'font-normal',
    fontSize: 'text-sm',
    letterSpacingVal: 0.15,
  },
  caption: {
    tag: 'span',
    fontWeight: 'font-normal',
    fontSize: 'text-xs',
    letterSpacingVal: 0.4,
  },
};

const fontColorVariantMapping = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  dark: 'text-dark',
  light: 'text-light',
};

const calcLetterSpacing = (letterSpacing, size) =>
  `${round(letterSpacing / size)}em}`;

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
  const theme = useTheme();
  const { tag, fontWeight, fontSize, letterSpacingVal } = fontVariantMapping[
    variant
  ];
  const [themeFontSize] = theme.fontSize[fontSize.replace('text-', '')];
  const themePxFontSize = Number(themeFontSize.replace('rem', '')) * 16;
  const RootComponent = component || tag;

  return (
    <RootComponent
      ref={ref}
      style={style}
      className={clsx(
        'm-0',
        fontWeight,
        fontSize,
        colorVariant !== 'inherit' && fontColorVariantMapping[colorVariant],
        {
          truncate: noWrap,
          ['mb-[.35em]']: gutterBottom && !paragraph,
          ['mb-4']: paragraph,
        },
        className
      )}
      css={{
        letterSpacing: calcLetterSpacing(letterSpacingVal, themePxFontSize),
      }}
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
      'body1',
      'body2',
      'subtitle1',
      'subtitle2',
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
  variant: 'body1',
};

export default Typography;
