import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useTheme } from 'emotion-theming';
import { Row, Col } from 'react-grid-system';

import Input from 'app-base-components/input';
import TextArea from 'app-base-components/text-area';
import Button from 'app-base-components/button';
import Spinner from 'app-base-components/spinner';
import { bpBelowMedium } from 'app-utils/breakpoints';

const ContactFormSchema = object().shape({
  name: string().required(),
  message: string().required(),
  subject: string().required(),
  email: string()
    .email()
    .required()
});

const ContactForm = ({ className, style }) => {
  const theme = useTheme();
  const [messageConfig, setMessageConfig] = useState(undefined);
  const [requestInProgress, setRequestInProgress] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', name: '', subject: '', message: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { resetForm }) => {
        setRequestInProgress(true);

        axios
          .post('api/contact', values)
          .then(() => {
            resetForm();
            setMessageConfig({
              text: 'Mensaje enviado!',
              className: 'text-success'
            });
          })
          .catch(() => {
            setMessageConfig({
              text: 'Ha ocurrido un error inesperado',
              className: 'text-danger'
            });
          })
          .then(() => {
            setRequestInProgress(false);

            setTimeout(() => {
              setMessageConfig(undefined);
            }, 5000);
          });
      }}
    >
      {({ errors }) => (
        <Form style={style} className={className}>
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
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              width: '100%'
            }}
          >
            {messageConfig && (
              <span
                className={[
                  messageConfig.className,
                  'w-full pr-3 pb-3 md:pb-0 md:w-auto'
                ].join(' ')}
              >
                {messageConfig.text}
              </span>
            )}
            <Button
              type="submit"
              color="dark"
              disabled={Object.entries(errors).length > 0 || requestInProgress}
              css={{
                minWidth: 100,
                [bpBelowMedium]: {
                  width: '100%'
                }
              }}
            >
              {requestInProgress && (
                <Spinner
                  css={{
                    marginRight: theme.spacing[1]
                  }}
                  size="sm"
                />
              )}{' '}
              Enviar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ContactForm.defaultProps = {
  className: '',
  style: {}
};

export default ContactForm;
