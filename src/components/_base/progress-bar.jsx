import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const ProgressBar = ({ value, backgroundColor, color }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        height: '15px',
        fontSize: theme.fontSize.xs,
        backgroundColor: backgroundColor || theme.colors.light,
        borderRadius: '25px 0 50px 25px',
        position: 'relative',
      }}
    >
      <span
        css={{
          position: 'absolute',
          top: '-1.5rem',
          left: `calc(${value}% - 30px)`,
          fontStyle: 'italic',
          fontWeight: theme.fontWeight.bold,
        }}
      >
        {value}%
      </span>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: theme.colors.white,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          backgroundColor: color || theme.colors.primary,
          borderRadius: '25px 0px 50px 25px',
          transition: 'width 0.6s escape',
          width: `${value}%`,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  value: 0,
  backgroundColor: '',
  color: '',
};

export default ProgressBar;
