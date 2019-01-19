import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';
import { AssetsContainer } from '../../containers/assets.container';

import resumeStyles from './resume.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import Button from '../button/button';

const Resume = () => (
  <Subscribe to={[PersonDataContainer, AssetsContainer]}>
    {({ state: person }, { assets }) => (
      <SectionContainer>
        <Card>
          <div className={resumeStyles.shortBio}>
            <Img
              fixed={assets.resumeAvatar.childImageSharp.fixed}
              className={resumeStyles.shortBio__imageContainer}
            />
            <p className={resumeStyles.shortBio__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sunt provident tempore, magni omnis facilis accusamus
              laborum illum, molestiae ratione labore debitis architecto commodi
              delectus corrupti saepe quae vel porro!
            </p>
          </div>
          <div className={resumeStyles.about}>
            <h3 className={typographyStyles.sectionTitle}>Sobre mi</h3>
            <p className={resumeStyles.about__textItem}>
              <span>Nombre completo: </span>
              {person.name}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Profesión: </span>
              {person.profesion}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Celular: </span>
              {person.phone}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Email: </span>
              {person.email}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Fecha de nacimiento: </span>
              {person.birthdate}
            </p>
          </div>
        </Card>
      </SectionContainer>
    )}
  </Subscribe>
);

Resume.propTypes = {
  layoutPadding: PropTypes.number
};

Resume.defaultProps = {
  layoutPadding: 0
};

export default Resume;
