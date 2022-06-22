/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { formatLapseDate } from 'app-utils/date';
import Item from './item';

const Timeline = ({ style, className, stepColor, items }) => (
  <ul
    style={style}
    className={clsx(
      'relative py-3',
      'before:content-[""] before:absolute before:w-0.5 before:h-full before:top-0 before:-left-px before:bg-dark',
      className
    )}
  >
    {items.map((item, index) => (
      <Item
        key={index}
        lapse={formatLapseDate(item.lapse)}
        title={item.title}
        subtitle={item.subtitle}
        desc={item.desc}
        stepColor={stepColor}
      />
    ))}
  </ul>
);

Timeline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  stepColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      lapse: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
          from: PropTypes.string.isRequired,
          to: PropTypes.string,
        }).isRequired,
      ]).isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ).isRequired,
};

Timeline.defaultProps = {
  style: {},
  className: '',
  stepColor: '',
};

export default Timeline;
