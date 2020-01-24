import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { Row, Col } from 'react-grid-system';

import Input from 'app-base-components/input';
import TextArea from 'app-base-components/text-area';
import Button from 'app-base-components/button';
import { bpBelowMedium } from 'app-utils/breakpoints';

const ContactFormSchema = object().shape({
  name: string().required(),
  message: string().required(),
  subject: string().required(),
  email: string()
    .email()
    .required()
});

const ContactForm = () => (
  <Formik
    initialValues={{ email: '', name: '', subject: '', message: '' }}
    validationSchema={ContactFormSchema}
    onSubmit={(values, actions) => {}}
  >
    {({ errors }) => (
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Input required name="name" label="Nombre" />
            <Input required name="email" label="Email" />
            <Input required name="subject" label="Asunto" />
          </Col>
          <Col xs={12} md={6}>
            <TextArea
              required
              name="message"
              label="Mensaje"
              css={{
                height: 208
              }}
            />
          </Col>
        </Row>
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            type="submit"
            color="dark"
            disabled={Object.entries(errors).length > 0}
            css={{
              width: 100,
              [bpBelowMedium]: {
                width: '100%'
              }
            }}
          >
            Enviar
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
