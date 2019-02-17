import React from 'react';
import PropTypes from 'prop-types';

import { getFormControlStyles } from './contact';

const Textarea = ({ field, theme, form: { touched, errors }, ...props }) => {
  const { className, styles } = getFormControlStyles(theme);
  const validationClass =
    touched[field.name] && errors[field.name] ? 'invalid' : 'valid';

  return (
    <>
      <textarea
        {...field}
        {...props}
        className={`form-control ${className} ${validationClass}`}
        style={{
          height: 130
        }}
      />
      {styles}
    </>
  );
};

Textarea.propTypes = {
  theme: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  style: PropTypes.object
};

Textarea.defaultProps = {
  style: {}
};

export default Textarea;
