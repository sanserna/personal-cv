import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { author } from '../../../content/meta/config';
import Card from '../../lib/card';
import AuthorResume from './author-resume';

const Resume = ({ theme }) => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
          childImageSharp {
            fixed(width: 330, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={({ avatar }) => (
      <div className="resume-container">
        <Card>
          <Card.Section className="content-left">
            <Card.Title>Sobre mi</Card.Title>
            <AuthorResume theme={theme} />
          </Card.Section>
          <Card.Section className="content-right">
            <p>{author.texts.resume}</p>
          </Card.Section>
        </Card>

        <style jsx>{`
          .resume-container :global(.content-left),
          .resume-container :global(.content-right) {
            padding: 40px 20px;
            width: 100%;
          }

          .resume-container :global(.content-right) {
            p {
              margin: 0;
            }
          }

          @above tablet {
            .resume-container :global(.content-left) {
              padding: 70px 35px;
              width: 40%;
            }

            .resume-container :global(.content-right) {
              padding: 70px 50px;
              width: 60%;
            }
          }
        `}</style>
      </div>
    )}
  />
);

Resume.propTypes = {
  theme: PropTypes.object.isRequired
};

Resume.defaultProps = {};

export default Resume;
