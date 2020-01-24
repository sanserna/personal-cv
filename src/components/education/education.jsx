/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { author } from 'app-content/meta/config';
import Card from 'app-base-components/card';
import Timeline from 'app-base-components/timeline';

const Education = ({ theme }) => (
  <div className="education-container">
    <Card>
      <Card.Section className="content-left">
        <Card.Title>Educación</Card.Title>
        <span dangerouslySetInnerHTML={{ __html: author.texts.education }} />
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
        .education-container :global(.content-left) {
          padding: 70px 35px;
          width: 40%;
        }

        .education-container :global(.content-right) {
          padding: 70px 50px;
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
