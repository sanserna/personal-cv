import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';

const AuthorResume = ({ avatar }) => (
  <>
    <h3 className={'typographyStyles.sectionTitle'}>Sobre mi</h3>
    <p className="list-text-item">
      <span>Nombre completo: </span>
      {author.name}
    </p>
    <p className="list-text-item">
      <span>Profesión: </span>
      {author.profesion}
    </p>
    <p className="list-text-item">
      <span>Celular: </span>
      {author.phone}
    </p>
    <p className="list-text-item">
      <span>Email: </span>
      {author.email}
    </p>
    <p className="list-text-item">
      <span>Fecha de nacimiento: </span>
      {author.birthdate}
    </p>

    <style jsx>{`
      .list-text-item {
        margin: 0;
        padding: 10px 0;

        &:not(:last-child) {
          border-bottom: 1px solid red;
        }
      }

      span {
        font-weight: bold;
      }
    `}</style>
  </>
);

AuthorResume.propTypes = {};

AuthorResume.defaultProps = {};

export default AuthorResume;
