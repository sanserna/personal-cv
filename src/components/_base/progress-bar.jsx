import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const ProgressBar = ({ value, backgroundColor, color, showPercentage }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        height: '15px',
        fontSize: theme.fontSizeRaw.xs,
        backgroundColor: backgroundColor || theme.colors.light,
        borderRadius: '25px 0 50px 25px',
        position: 'relative',
      }}
    >
      {showPercentage && (
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
      )}
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
  showPercentage: PropTypes.bool,
};

ProgressBar.defaultProps = {
  value: 0,
  backgroundColor: '',
  color: '',
  showPercentage: false,
};

export default ProgressBar;
