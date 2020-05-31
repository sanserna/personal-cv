import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Field } from 'formik';

const Label = styled.label(({ theme }) => ({
  fontSize: theme.fontSize.lg,
  color: theme.colors.gray[600],
  display: 'block',
  marginBottom: theme.spacing[2]
}));

const TextArea = ({ style, className, name, label, placeholder, required }) => (
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
        <textarea
          id={name}
          style={style}
          placeholder={placeholder}
          css={{
            height: 130
          }}
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

TextArea.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

TextArea.defaultProps = {
  style: {},
  className: '',
  name: '',
  label: '',
  placeholder: '',
  required: false
};

export default TextArea;
