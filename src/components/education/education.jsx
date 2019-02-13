import React from 'react';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';

import educationStyles from './education.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';

const Education = () => (
  <Subscribe to={[PersonDataContainer]}>
    {({ state: person }) => (
      <SectionContainer>
        <Card>
          <div className={educationStyles.contentLeft}>
            <h3 className="section-title">Educación</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              quo. Officiis, deleniti nihil aspernatur quod ea incidunt quam
              architecto vel.
            </span>
          </div>
          <div className={educationStyles.contentRight}>
            <ul className="timeline">
              <li>hola</li>
            </ul>
          </div>
        </Card>
      </SectionContainer>
    )}
  </Subscribe>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
