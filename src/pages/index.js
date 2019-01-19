import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Provider, Subscribe, Container } from 'unstated';

import { PersonDataContainer } from '../containers/person-data.container';
import { AssetsContainer } from '../containers/assets.container';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';

const IndexPage = ({ data }) => {
  const personDataContainer = new PersonDataContainer(data.personJson);
  const assetsContainer = new AssetsContainer({
    headerAvatar: data.headerAvatar,
    resumeAvatar: data.resumeAvatar,
    haderPattern: data.haderPattern,
    socialIcons: data.socialIcons
  });

  return (
    <Provider inject={[personDataContainer, assetsContainer]}>
      <MainLayout>
        <HeroHeader />
        <Resume />
        <Skills />
        <Education />
      </MainLayout>
    </Provider>
  );
};

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
