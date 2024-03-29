import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Field } from 'formik';
import clsx from 'clsx';

const Label = styled.label(({ theme }) => ({
  fontSize: theme.fontSizeRaw.lg,
  color: theme.colors.gray[600],
  display: 'block',
  marginBottom: theme.spacing[2],
}));

const TextArea = ({ style, className, name, label, placeholder, required }) => (
  <Field name={name}>
    {({ field, form: { touched, errors } }) => (
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
            height: 130,
          }}
          className={clsx(
            'form-control',
            className,
            required && touched[field.name] && errors[field.name]
              ? 'invalid'
              : 'valid'
          )}
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
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  style: {},
  className: '',
  name: '',
  label: '',
  placeholder: '',
  required: false,
};

export default TextArea;
