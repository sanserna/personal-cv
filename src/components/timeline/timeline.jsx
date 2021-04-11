/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { formatLapseDate } from 'app-utils/date';
import Item from './item';

const Timeline = ({ style, className, stepColor, lineColor, items }) => {
  const theme = useTheme();

  return (
    <ul
      style={style}
      className={className}
      css={{
        paddingTop: theme.spacing[3],
        position: 'relative',
        '&::before': {
          content: '" "',
          position: 'absolute',
          width: '2px',
          height: '100%',
          top: 0,
          left: -1,
          background: lineColor || theme.colors.dark,
        },
      }}
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
};

Timeline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  stepColor: PropTypes.string,
  lineColor: PropTypes.string,
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
  lineColor: '',
};

export default Timeline;
