import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import resumeStyles from './resume.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import Button from '../button/button';

const Resume = ({ avatar, data }) => (
  <SectionContainer>
    <Card>
      <div className={resumeStyles.shortBio}>
        <Img fixed={avatar} className={resumeStyles.shortBio__imageContainer} />
        <p className={resumeStyles.shortBio__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sunt provident tempore, magni omnis facilis accusamus laborum illum,
          molestiae ratione labore debitis architecto commodi delectus corrupti
          saepe quae vel porro!
        </p>
      </div>
      <div className={resumeStyles.about}>
        <h3 className={typographyStyles.sectionTitle}>Sobre mi</h3>
        <p className={resumeStyles.about__textItem}>
          <span>Nombre completo: </span>
          {data.name}
        </p>
        <p className={resumeStyles.about__textItem}>
          <span>Profesión: </span>
          {data.profesion}
        </p>
        <p className={resumeStyles.about__textItem}>
          <span>Celular: </span>
          {data.phone}
        </p>
        <p className={resumeStyles.about__textItem}>
          <span>Email: </span>
          {data.email}
        </p>
        <p className={resumeStyles.about__textItem}>
          <span>Fecha de nacimiento: </span>
          {data.birthdate}
        </p>
      </div>
    </Card>
  </SectionContainer>
);

Resume.propTypes = {
  layoutPadding: PropTypes.number,
  avatar: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profesion: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired
  }).isRequired
};

Resume.defaultProps = {
  layoutPadding: 0
};

export default Resume;
