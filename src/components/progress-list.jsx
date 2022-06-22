/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from 'app-base-components/progress-bar';
import Typography from 'app-base-components/typography';

const ProgressList = ({ list, showPercentage }) => (
  <div className="table w-full">
    {list.map((listItem, index) => (
      <div key={index} className="table-row">
        <Typography className="table-cell pr-3 align-middle">
          {listItem.label}
        </Typography>
        <div className="table-cell w-[85%] h-16 align-middle">
          <ProgressBar value={listItem.value} showPercentage={showPercentage} />
        </div>
      </div>
    ))}
  </div>
);

ProgressList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  showPercentage: PropTypes.bool,
};

ProgressList.defaultProps = {
  showPercentage: false,
};

export default ProgressList;
