import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import Input from 'app-base-components/input';
import Button from 'app-base-components/button';

const ContactFormSchema = object().shape({
  email: string()
    .email()
    .required(),
});

const SubscriptionForm = ({ className, style }) => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={ContactFormSchema}
    onSubmit={() => {}}
  >
    {({ errors }) => (
      <Form style={style} className={className}>
        <div className="grid grid-cols-1 gap-y-2 md:gap-x-2 md:grid-cols-2">
          <Input className="m-0" required name="email" placeholder="Email" />
          <Button
            className="w-full"
            type="submit"
            color="success"
            disabled={Object.entries(errors).length > 0}
          >
            Suscribirme
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);

SubscriptionForm.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

SubscriptionForm.defaultProps = {
  className: '',
  style: {},
};

export default SubscriptionForm;
