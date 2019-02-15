import React from 'react';
import Img from 'gatsby-image';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import resumeStyles from './resume.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import Button from '../button/button';

const Resume = () => (
  <SectionContainer>
    <Card>
      <div className={resumeStyles.contentLeft}>
        <Img
          fixed={assets.resumeAvatar.childImageSharp.fixed}
          className={resumeStyles.imageContainer}
        />
        <p className={resumeStyles.resumeText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sunt provident tempore, magni omnis facilis accusamus laborum illum,
          molestiae ratione labore debitis architecto commodi delectus corrupti
          saepe quae vel porro!
        </p>
      </div>
      <div className={resumeStyles.contentRight}>
        <h3 className="section-title">Sobre mi</h3>
        <p className={resumeStyles.listTextItem}>
          <span>Nombre completo: </span>
          {person.name}
        </p>
        <p className={resumeStyles.listTextItem}>
          <span>Profesión: </span>
          {person.profesion}
        </p>
        <p className={resumeStyles.listTextItem}>
          <span>Celular: </span>
          {person.phone}
        </p>
        <p className={resumeStyles.listTextItem}>
          <span>Email: </span>
          {person.email}
        </p>
        <p className={resumeStyles.listTextItem}>
          <span>Fecha de nacimiento: </span>
          {person.birthdate}
        </p>
      </div>
    </Card>
  </SectionContainer>
);

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
