import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Field } from 'formik';

import { bpAboveSmall } from 'app-utils/breakpoints';

const Label = styled.label(({ theme }) => ({
  fontSize: theme.fontSize.base,
  color: theme.colors.gray[600],
  display: 'block',
  marginBottom: theme.spacing[2],
  [bpAboveSmall]: {
    fontSize: theme.fontSize.lg
  }
}));

const Input = ({
  style,
  className,
  name,
  label,
  placeholder,
  required,
  type
}) => (
  <Field name={name}>
    {({ field, form: { touched, errors }, meta }) => (
      <>
        {label && (
          <Label htmlFor={name}>
            {label}{' '}
            {required && (
              <span css={theme => ({ color: theme.colors.danger })}>*</span>
            )}
          </Label>
        )}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={[
            'form-control',
            className,
            required && touched[field.name] && errors[field.name]
              ? 'invalid'
              : 'valid'
          ].join(' ')}
          {...field}
        />
      </>
    )}
  </Field>
);

Input.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url'
  ])
};

Input.defaultProps = {
  style: {},
  className: '',
  name: '',
  label: '',
  placeholder: '',
  required: false,
  type: 'text'
};

export default Input;
