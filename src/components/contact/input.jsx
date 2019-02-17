import React from 'react';
import PropTypes from 'prop-types';

import { getFormControlStyles } from './contact';

const Input = ({ field, theme, form: { touched, errors }, ...props }) => {
  const { className, styles } = getFormControlStyles(theme);
  const validationClass =
    touched[field.name] && errors[field.name] ? 'invalid' : 'valid';

  return (
    <>
      <input
        {...field}
        {...props}
        className={`form-control ${className} ${validationClass}`}
      />
      {styles}
    </>
  );
};

Input.propTypes = {
  theme: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  style: PropTypes.object
};

Input.defaultProps = {
  style: {}
};

export default Input;
