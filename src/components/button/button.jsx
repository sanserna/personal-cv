import React from 'react';
import PropTypes from 'prop-types';

import buttonStyles from './button.module.scss';

const Button = ({ children, style, disabled }) => (
  <button className={buttonStyles.button} style={style} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  style: {},
  disabled: false
};

export default Button;
