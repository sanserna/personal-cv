/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';
import Card from '../../lib/card';
import Timeline from '../../lib/timeline';

const Experience = ({ theme }) => (
  <div className="experience-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Experiencia</Card.Title>
        <p dangerouslySetInnerHTML={{ __html: author.texts.experience }} />
      </Card.Section>
      <Card.Section className="content-right">
        <Timeline items={author.experience} />
      </Card.Section>
    </Card>

    <style jsx>{`
      .experience-container :global(.content-left),
      .experience-container :global(.content-right) {
        width: 100%;
        padding: 40px 20px;
      }

      .experience-container :global(.content-right) {
        flex: 1;
      }

      @above tablet {
        .experience-container :global(.content-left) {
          padding: 70px 35px;
          width: 40%;
        }

        .experience-container :global(.content-right) {
          width: auto;
          padding: 70px 50px;
        }
      }
    `}</style>
  </div>
);

Experience.propTypes = {
  theme: PropTypes.object.isRequired
};

Experience.defaultProps = {};

export default Experience;
