import React from 'react';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';
import Card from '../../lib/card';
import Timeline from '../../lib/timeline';

const Education = ({ theme }) => (
  <div className="education-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Educación</Card.Title>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo.
          Officiis, deleniti nihil aspernatur quod ea incidunt quam architecto
          vel.
        </span>
      </Card.Section>
      <Card.Section className="content-right">
        <Timeline items={author.education} />
      </Card.Section>
    </Card>

    <style jsx>{`
      .education-container :global(.content-left),
      .education-container :global(.content-right) {
        width: 100%;
        padding: 40px 20px;
      }

      .education-container :global(.content-right) {
        flex: 1;
      }

      @above tablet {
        .education-container :global(.content-left),
        .education-container :global(.content-right) {
          padding: 70px 50px;
        }

        .education-container :global(.content-left) {
          width: 35%;
        }

        .education-container :global(.content-right) {
          width: auto;
        }
      }
    `}</style>
  </div>
);

Education.propTypes = {
  theme: PropTypes.object.isRequired
};

Education.defaultProps = {};

export default Education;
