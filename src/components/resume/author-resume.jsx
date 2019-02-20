/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';

const authorDataItems = [
  {
    label: 'Nombre completo',
    value: author.name
  },
  {
    label: 'Profesión',
    value: author.profesion
  },
  {
    label: 'Celular',
    value: author.phone
  },
  {
    label: 'Fecha de nacimiento',
    value: author.birthdate
  }
];

const AuthorResume = ({ theme }) => (
  <div>
    {authorDataItems.map((item, index) => (
      <p key={index} className="list-text-item">
        <span>{item.label}: </span>
        {item.value}
      </p>
    ))}

    <style jsx>{`
      .list-text-item {
        margin: 0;
        padding-bottom: 10px;

        &:not(:first-child) {
          padding-top: 10px;
        }

        &:not(:last-child) {
          border-bottom: 1px solid ${theme.color.neutral.gray.c};
        }
      }

      span {
        font-weight: bold;
      }
    `}</style>
  </div>
);

AuthorResume.propTypes = {
  theme: PropTypes.object.isRequired
};

AuthorResume.defaultProps = {};

export default AuthorResume;
