import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { Row, Col } from 'react-grid-system';

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
        <Row>
          <Col xs={12} md={6}>
            <Input required name="email" placeholder="Email" />
          </Col>
          <Col xs={12} md={6}>
            <Button
              className="w-full"
              type="submit"
              color="success"
              disabled={Object.entries(errors).length > 0}
            >
              Suscribirme
            </Button>
          </Col>
        </Row>
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
