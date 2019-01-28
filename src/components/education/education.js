import React from 'react';

import educationStyles from './education.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';

const Education = () => (
  <SectionContainer>
    <Card>
      <div className={educationStyles.contentLeft}>
        <h3 className={typographyStyles.sectionTitle}>Educación</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
          Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
          vel.
        </span>
      </div>
      <div className={educationStyles.contentRight}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
          Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
          vel.
        </span>
      </div>
    </Card>
  </SectionContainer>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
