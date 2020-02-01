import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Item = ({ stepColor, lapse, title, desc, subtitle }) => {
  const theme = useTheme();

  return (
    <li
      css={{
        color: theme.colors.dark,
        position: 'relative',
        paddingBottom: theme.spacing[16],
        '&:last-child': {
          paddingBottom: 0
        },
        '&::before': {
          content: '" "',
          position: 'absolute',
          height: '16px',
          width: '16px',
          background: theme.colors.white,
          borderRadius: '8px',
          border: `${theme.borderWidth.default} solid ${stepColor ||
            theme.colors.primary}`,
          left: '-8px',
          top: '5px'
        }
      }}
    >
      <span
        css={{
          display: 'block',
          color: theme.colors.secondary,
          fontSize: theme.fontSize.lg,
          paddingLeft: theme.spacing[10],
          paddingBottom: theme.spacing[3]
        }}
      >
        {lapse}
      </span>
      <div
        css={{
          paddingLeft: theme.spacing[10]
        }}
      >
        <span
          css={{
            color: theme.colors.dark,
            display: 'block',
            fontSize: theme.fontSize.xl
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            css={{
              color: theme.colors.primary,
              display: 'block',
              fontSize: theme.fontSize.lg,
              paddingTop: theme.spacing[1]
            }}
          >
            {subtitle}
          </span>
        )}
        {desc && (
          <p
            css={{
              color: theme.colors.secondary,
              display: 'block',
              fontSize: theme.fontSize.lg,
              paddingTop: theme.spacing[1]
            }}
          >
            {desc}
          </p>
        )}
      </div>
    </li>
  );
};

Item.propTypes = {
  stepColor: PropTypes.string,
  lapse: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  subtitle: PropTypes.string
};

Item.defaultProps = {
  stepColor: '',
  desc: '',
  subtitle: ''
};

export default Item;
