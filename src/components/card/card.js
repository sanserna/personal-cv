import React from 'react';
import PropTypes from 'prop-types';

import cardStyles from './card.module.scss';

const Card = ({ children, style }) => (
  <div className={cardStyles.card} style={style}>
    {children}
  </div>
);

Card.propTypes = {
  style: PropTypes.object
};

Card.defaultProps = {
  style: {}
};

export default Card;
