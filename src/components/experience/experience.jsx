import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';
import Card from '../card';
import Timeline from '../timeline';

const Experience = ({ theme }) => (
  <div className="experience-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Experience</Card.Title>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
          Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
          vel.
        </span>
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
        .experience-container :global(.content-left),
        .experience-container :global(.content-right) {
          padding: 70px 50px;
        }

        .experience-container :global(.content-left) {
          width: 35%;
        }

        .experience-container :global(.content-right) {
          width: auto;
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
