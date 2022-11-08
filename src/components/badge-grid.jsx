import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import Badge from 'app-base-components/badge';

const BadgeGrid = ({ size, items }) => {
  return (
    <div>
      {items.map(item => (
        <Badge
          key={uniqueId()}
          size={size}
          text={item.text}
          color={item.color}
        />
      ))}
    </div>
  );
};

BadgeGrid.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

BadgeGrid.defaultProps = {
  size: 'md',
  items: [],
};

export default BadgeGrid;
