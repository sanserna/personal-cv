import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useTheme } from 'emotion-theming';
import { Container, Row, Col } from 'react-grid-system';

import Heading from 'app-lib/heading';
import Input from 'app-lib/input';
import TextArea from 'app-lib/text-area';
import { bpAboveMedium } from 'app-utils/breakpoints';

const ContactFormSchema = object().shape({
  name: string().required(),
  message: string().required(),
  subject: string().required(),
  email: string()
    .email()
    .required()
});

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Heading
        css={{
          padding: `${theme.spacing[16]} 0 ${theme.spacing[5]} 0`
        }}
      >
        Contacto
      </Heading>
      <p
        css={{
          color: theme.colors.dark,
          fontSize: theme.fontSize['2xl'],
          paddingBottom: theme.spacing[5],
          [bpAboveMedium]: {
            fontSize: theme.fontSize['3xl']
          }
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
        Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
        vel.
      </p>
      <Formik
        initialValues={{ email: '', name: '', subject: '', message: '' }}
        validationSchema={ContactFormSchema}
      >
        {() => (
          <Form className="form-inline">
            <Row>
              <Col xs={12} md={6}>
                <Input name="name" label="Nombre" required />
              </Col>
              <Col xs={12} md={6}>
                <Input name="email" label="Email" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input name="subject" label="Asunto" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextArea name="message" label="Mensaje" required />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
