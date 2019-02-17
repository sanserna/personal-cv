import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { resolve } from 'styled-jsx/css';
import { object, string } from 'yup';

import { author } from '../../../content/meta/config';
import Card from '../card';
import Input from './input';
import Textarea from './textarea';

export const getFormControlStyles = ({
  color: {
    special,
    neutral: { gray }
  }
}) => resolve`
  --bgColor: ${gray.c};

  .form-control {
    color: ${gray.k};
    background: var(--bgColor);
    border: 2px solid var(--bgColor);
    border-radius: 2px;
    margin: 0 0 20px;
    outline: 0 none;
    overflow: hidden;
    padding: 10px 15px;
    resize: none;
    width: 100%;

    &.invalid {
      border: 0.7px solid ${special.invalid};
    }

    @above mobile {
      vertical-align: middle;

      &:not(textarea) {
        width: auto;
        flex: 1;
        display: inline-block;
      }

      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }
    }
  }
`;

const ContactFormSchema = object().shape({
  name: string().required(),
  message: string().required(),
  email: string()
    .email()
    .required()
});

const Contact = ({ theme }) => (
  <div className="contact-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Contacto</Card.Title>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
          Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
          vel.
        </span>
      </Card.Section>
      <Card.Section className="content-right">
        <Formik
          initialValues={{ email: '', name: '', message: '' }}
          validationSchema={ContactFormSchema}
        >
          {() => (
            <Form className="form-inline">
              <Field
                type="text"
                name="name"
                placeholder="Tu nombre *"
                theme={theme}
                component={Input}
              />
              <Field
                type="email"
                name="email"
                placeholder="Tu email *"
                theme={theme}
                component={Input}
              />
              <Field
                name="message"
                placeholder="Tu mensaje *"
                theme={theme}
                component={Textarea}
              />
            </Form>
          )}
        </Formik>
      </Card.Section>
    </Card>

    <style jsx>{`
      .contact-container :global(.content-left),
      .contact-container :global(.content-right) {
        width: 100%;
        padding: 40px 20px;
      }

      .contact-container :global(.content-right) {
        flex: 1;
      }

      .contact-container :global(.form-inline) {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }

      @above tablet {
        .contact-container :global(.content-left),
        .contact-container :global(.content-right) {
          padding: 70px 50px;
        }

        .contact-container :global(.content-left) {
          width: 35%;
        }

        .contact-container :global(.content-right) {
          width: auto;
        }
      }
    `}</style>
  </div>
);

Contact.propTypes = {
  theme: PropTypes.object.isRequired
};

Contact.defaultProps = {};

export default Contact;
