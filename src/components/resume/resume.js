import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import resumeStyles from './resume.module.scss';
import Card from '../card/card';

const Resume = props => {
  const renderShortBio = avatar => (
    <div className={resumeStyles.shortBio}>
      <Img
        fixed={avatar.childImageSharp.fixed}
        className={resumeStyles.shortBio__imageContainer}
      />
      <p className={resumeStyles.shortBio__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        sunt provident tempore, magni omnis facilis accusamus laborum illum,
        molestiae ratione labore debitis architecto commodi delectus corrupti
        saepe quae vel porro!
      </p>
    </div>
  );
  const renderAbout = person => (
    <div className={resumeStyles.about}>
      <h3 className={resumeStyles.about__title}>Sobre mi</h3>
      <p className={resumeStyles.about__textItem}>
        <span>Nombre completo: </span>
        {person.name}
      </p>
      <p className={resumeStyles.about__textItem}>
        <span>Profesión: </span>
        {person.profesion}
      </p>
      <p className={resumeStyles.about__textItem}>
        <span>Celular: </span>
        {person.phone}
      </p>
      <p className={resumeStyles.about__textItem}>
        <span>Email: </span>
        {person.email}
      </p>
      <p className={resumeStyles.about__textItem}>
        <span>Fecha de nacimiento: </span>
        {person.birthdate}
      </p>
    </div>
  );
  const renderResume = ({ avatar, site }) => (
    <div className={resumeStyles.container}>
      <Card style={{ display: 'flex' }}>
        {renderShortBio(avatar)}
        {renderAbout(site.siteMetadata.person)}
      </Card>
    </div>
  );

  return <StaticQuery query={query} render={renderResume} />;
};

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

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
