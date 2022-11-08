import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import { transparentize } from 'polished';

import ProgressBar from 'app-base-components/progress-bar';
import Typography from 'app-base-components/typography';

const ProgressList = ({ items, showPercentage }) => (
  <div className="table w-full">
    {items.map(item => (
      <div key={uniqueId('progress_')} className="table-row">
        <Typography className="table-cell pr-3 align-middle">
          {item.text}
        </Typography>
        <div className="table-cell w-[85%] h-16 align-middle">
          <ProgressBar
            value={item.value}
            showPercentage={showPercentage}
            color={item.color}
            backgroundColor={transparentize(0.7, item.color)}
          />
        </div>
      </div>
    ))}
  </div>
);

ProgressList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  showPercentage: PropTypes.bool,
};

ProgressList.defaultProps = {
  showPercentage: false,
};

export default ProgressList;
