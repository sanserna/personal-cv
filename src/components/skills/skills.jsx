import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';
import SoftSkillsList from './soft-skills-list';
import TechSkillsList from './tech-skills-list';
import Card from '../card';

const Skills = ({ theme }) => (
  <div className="skills-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Conocimientos</Card.Title>
        <SoftSkillsList theme={theme} />
      </Card.Section>

      <Card.Section className="content-right">
        <TechSkillsList theme={theme} />
      </Card.Section>
    </Card>

    <style jsx>{`
      .skills-container :global(.content-left),
      .skills-container :global(.content-right) {
        width: 100%;
        padding: 40px 20px;
      }

      .skills-container :global(.content-right) {
        flex: 1;
      }

      @above tablet {
        .skills-container :global(.content-left),
        .skills-container :global(.content-right) {
          padding: 70px 50px;
        }

        .skills-container :global(.content-left) {
          width: 35%;
        }

        .skills-container :global(.content-right) {
          width: auto;
        }
      }
    `}</style>
  </div>
);

Skills.propTypes = {
  theme: PropTypes.object.isRequired
};

Skills.defaultProps = {};

export default Skills;
