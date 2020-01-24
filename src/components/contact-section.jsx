import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useTheme } from 'emotion-theming';
import { Row, Col } from 'react-grid-system';

import Heading from 'app-base-components/heading';
import Input from 'app-base-components/input';
import TextArea from 'app-base-components/text-area';
import Button from 'app-base-components/button';
import { bpBelowMedium, bpAboveMedium } from 'app-utils/breakpoints';

const ContactFormSchema = object().shape({
  name: string().required(),
  message: string().required(),
  subject: string().required(),
  email: string()
    .email()
    .required()
});

const ContactSection = () => {
  const theme = useTheme();

  return (
    <section>
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
    </section>
  );
};

ContactSection.propTypes = {};

ContactSection.defaultProps = {};

export default ContactSection;
