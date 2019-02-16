import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

const Timeline = ({ style, stepColor, lineColor, items }) => (
  <ul className="timeline" style={style}>
    {items.map((item, index) => (
      <Item
        key={index}
        stepColor={stepColor}
        lapse={item.lapse}
        title={item.title}
        desc={item.desc}
      />
    ))}

    <style jsx>{`
      .timeline {
        padding: 0;
        margin: 0;
        padding-top: 10px;
        list-style: none;
        position: relative;

        &::before {
          content: ' ';
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          left: 0;
          background: ${lineColor};
        }
      }
    `}</style>
  </ul>
);

Timeline.propTypes = {
  style: PropTypes.object,
  stepColor: PropTypes.string,
  lineColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      lapse: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  ).isRequired
};

Timeline.defaultProps = {
  style: {},
  stepColor: '#b0adab',
  lineColor: '#969492'
};

export default Timeline;
