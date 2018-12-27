import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import resumeStyles from './resume.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';
import SectionContainer from '../section-container/section-container';
import Card from '../card/card';
import Button from '../button/button';

const Resume = props => (
  <StaticQuery
    query={query}
    render={({ avatar, site, downloadIcon }) => (
      <SectionContainer>
        <Card style={{ display: 'flex' }}>
          <div className={resumeStyles.shortBio}>
            <Img
              fixed={avatar.childImageSharp.fixed}
              className={resumeStyles.shortBio__imageContainer}
            />
            <p className={resumeStyles.shortBio__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sunt provident tempore, magni omnis facilis accusamus
              laborum illum, molestiae ratione labore debitis architecto commodi
              delectus corrupti saepe quae vel porro!
            </p>
          </div>
          <div className={resumeStyles.about}>
            <h3 className={typographyStyles.sectionTitle}>Sobre mi</h3>
            <p className={resumeStyles.about__textItem}>
              <span>Nombre completo: </span>
              {site.siteMetadata.person.name}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Profesión: </span>
              {site.siteMetadata.person.profesion}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Celular: </span>
              {site.siteMetadata.person.phone}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Email: </span>
              {site.siteMetadata.person.email}
            </p>
            <p className={resumeStyles.about__textItem}>
              <span>Fecha de nacimiento: </span>
              {site.siteMetadata.person.birthdate}
            </p>
          </div>
        </Card>
      </SectionContainer>
    )}
  />
);

Resume.propTypes = {
  layoutPadding: PropTypes.number
};

Resume.defaultProps = {
  layoutPadding: 0
};

export default Resume;

const query = graphql`
  query {
    site {
      siteMetadata {
        person {
          name
          profesion
          email
          phone
          birthdate
        }
      }
    }
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 330, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;
