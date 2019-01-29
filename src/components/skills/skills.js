import React from 'react';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';

import skillsStyles from './skills.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import ProgressBar from '../progress-bar/progress-bar';

const Skills = () => (
  <Subscribe to={[PersonDataContainer]}>
    {({ state: person }) => (
      <SectionContainer>
        <Card>
          <div className={skillsStyles.contentLeft}>
            <h3 className="section-title">Conocimientos</h3>
            <ul className={skillsStyles.listGroup}>
              {person.softSkills.map((skill, i) => (
                <li key={i} className={skillsStyles.listGroup__item}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={skillsStyles.contentRight}>
            <div className={skillsStyles.skillsContainer}>
              {person.techSkills.map((skill, i) => (
                <div key={i} className={skillsStyles.skillItem}>
                  <h3 className={skillsStyles.skillItem__label}>
                    {skill.label}
                  </h3>
                  <div className={skillsStyles.skillItem__barContainer}>
                    <ProgressBar value={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </SectionContainer>
    )}
  </Subscribe>
);

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
