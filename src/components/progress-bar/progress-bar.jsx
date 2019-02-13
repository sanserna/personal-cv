import React from 'react';
import PropTypes from 'prop-types';

import progressBarStyles from './progress-bar.module.scss';

const ProgressBar = ({ value }) => (
  <div className={progressBarStyles.progress}>
    <span
      className={progressBarStyles.progress__value}
      style={{ left: `${value}%` }}
    >
      {value}%
    </span>
    <div
      className={progressBarStyles.progress__bar}
      style={{ width: `${value}%` }}
    />
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.number
};

ProgressBar.defaultProps = {
  value: 0
};

export default ProgressBar;
