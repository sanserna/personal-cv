/* eslint react/no-array-index-key: "off" */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../layouts';
import { formatLapseDate } from '../../utils/date';
import Item from './item';

export const TimelineContext = React.createContext({});

const Timeline = ({ style, stepColor, lineColor, items }) => {
  const {
    color: {
      scheme: { primary: primaryColor, medium: mediumColor, dark: darkColor }
    }
  } = useContext(ThemeContext);
  const [timelineTheme] = useState({
    stepColor,
    primaryColor,
    mediumColor,
    darkColor
  });

  return (
    <TimelineContext.Provider value={timelineTheme}>
      <ul className="timeline" style={style}>
        {items.map((item, index) => (
          <Item
            key={index}
            lapse={formatLapseDate(item.lapse)}
            title={item.title}
            subtitle={item.subtitle}
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
              background: ${lineColor || timelineTheme.darkColor};
            }
          }
        `}</style>
      </ul>
    </TimelineContext.Provider>
  );
};

Timeline.propTypes = {
  style: PropTypes.object,
  stepColor: PropTypes.string,
  lineColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      lapse: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
          from: PropTypes.string.isRequired,
          to: PropTypes.string
        }).isRequired
      ]).isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      subtitle: PropTypes.string
    })
  ).isRequired
};

Timeline.defaultProps = {
  style: {},
  stepColor: '',
  lineColor: ''
};

export default Timeline;
