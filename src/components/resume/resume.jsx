import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Card from '../../lib/card';
import ShortBio from './short-bio';
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
            <ShortBio avatar={avatar.childImageSharp.fixed} />
          </Card.Section>
          <Card.Section className="content-right">
            <Card.Title>Sobre mi</Card.Title>
            <AuthorResume theme={theme} />
          </Card.Section>
        </Card>

        <style jsx>{`
          .resume-container :global(.content-left),
          .resume-container :global(.content-right) {
            width: 100%;
          }

          .resume-container :global(.content-left) {
            padding: 0;
          }

          .resume-container :global(.content-right) {
            padding: 40px 20px;
            flex-grow: 1;
          }

          @above tablet {
            .resume-container :global(.content-left) {
              width: 35%;
            }

            .resume-container :global(.content-right) {
              width: auto;
              padding: 70px 50px;
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
