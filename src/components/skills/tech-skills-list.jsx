/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';

import { author } from 'app-content/meta/config';
import ProgressBar from 'app-base-components/progress-bar';

const TechSkillsList = ({ theme }) => (
  <div className="container">
    {author.techSkills.map((skill, index) => (
      <div key={index} className="skill-item">
        <h3 className="skill-item__label">{skill.label}</h3>
        <div className="skill-item__bar-container">
          <ProgressBar value={skill.level} />
        </div>
      </div>
    ))}

    <style jsx>{`
      .container {
        display: table;
        width: 100%;
      }

      .skill-item {
        display: table-row;

        &:last-child {
          .skill-item__bar-container {
            height: auto;
          }
        }

        .skill-item__label,
        .skill-item__bar-container {
          display: table-cell;
        }

        .skill-item__label {
          margin: 0;
          padding-right: 15px;
        }

        .skill-item__bar-container {
          width: 80%;
          height: 60px;
        }
      }
    `}</style>
  </div>
);

TechSkillsList.propTypes = {
  theme: PropTypes.object.isRequired
};

TechSkillsList.defaultProps = {};

export default TechSkillsList;
