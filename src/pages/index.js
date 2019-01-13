import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';

class IndexPage extends React.Component {
  _getSocialData(socialLinks = {}, socialIcons = []) {
    return Object.keys(socialLinks).map(socialLink => {
      const iconImg = socialIcons.find(
        icon =>
          icon.node.childImageSharp.fixed.originalName.replace('.png', '') ===
          socialLink
      );

      return {
        iconImg: iconImg.node.childImageSharp.fixed,
        link: socialLinks[socialLink]
      };
    });
  }

  render() {
    const { data } = this.props;
    const { personJson } = data;
    const socialData = this._getSocialData(
      personJson.social,
      data.socialIcons.edges
    );

    return (
      <MainLayout>
        <HeroHeader
          bgImgSrc={data.haderPattern.childImageSharp.fixed.src}
          avatar={data.headerAvatar.childImageSharp.fixed}
          socialData={socialData}
          data={{
            name: personJson.name,
            profesion: personJson.profesion,
            email: personJson.email,
            phone: personJson.phone
          }}
        />
        <Resume
          avatar={data.resumeAvatar.childImageSharp.fixed}
          data={{
            name: personJson.name,
            profesion: personJson.profesion,
            email: personJson.email,
            phone: personJson.phone,
            birthdate: personJson.birthdate
          }}
        />
        <Skills
          softSkills={personJson.softSkills}
          techSkills={personJson.techSkills}
        />
        <Education />
      </MainLayout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object
};

IndexPage.defaultProps = {
  data: {}
};

export default IndexPage;

export const query = graphql`
  query {
    personJson(id: { eq: "sanserna" }) {
      name
      profesion
      email
      phone
      birthdate
      softSkills
      techSkills {
        label
        level
      }
      social {
        facebook
        instagram
        linkedin
        github
      }
    }
    headerAvatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    resumeAvatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 330, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    haderPattern: file(relativePath: { eq: "footer_lodyas.png" }) {
      childImageSharp {
        fixed(width: 800, height: 800, quality: 100) {
          src
        }
      }
    }
    socialIcons: allFile(
      filter: {
        relativeDirectory: { eq: "icons" }
        name: { in: ["facebook", "github", "linkedin", "instagram"] }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 24, height: 24, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
              originalName
            }
          }
        }
      }
    }
  }
`;
