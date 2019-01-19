import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';

import { PersonDataContainer } from '../../containers/person-data.container';

import skillsStyles from './skills.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import ProgressBar from '../progress-bar/progress-bar';

const Skills = () => (
  <Subscribe to={[PersonDataContainer]}>
    {({ state: person }) => (
      <SectionContainer>
        <Card>
          <div className={skillsStyles.softSkills}>
            <h3 className={typographyStyles.sectionTitle}>Conocimientos</h3>
            <ul className={skillsStyles.softSkills__list}>
              {person.softSkills.map((skill, i) => (
                <li key={i} className={skillsStyles.softSkills__item}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={skillsStyles.techSkills}>
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

Skills.propTypes = {
  layoutPadding: PropTypes.number
};

Skills.defaultProps = {
  layoutPadding: 0
};

export default Skills;
