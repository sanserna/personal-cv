import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';

const SoftSkillsList = ({ theme }) => (
  <ul className="list-group">
    {author.softSkills.map((skill, i) => (
      <li key={i} className="list-group__item">
        {skill}
      </li>
    ))}

    <style jsx>{`
      .list-group {
        list-style: none;
        margin: 0;
        padding: 0;

        .list-group__item {
          border-bottom: 1px solid ${theme.color.neutral.gray.b};
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }

          &::before {
            color: ${theme.color.neutral.black};
            content: '+';
            padding-right: 5px;
          }
        }
      }
    `}</style>
  </ul>
);

SoftSkillsList.propTypes = {
  theme: PropTypes.object.isRequired
};

SoftSkillsList.defaultProps = {};

export default SoftSkillsList;
