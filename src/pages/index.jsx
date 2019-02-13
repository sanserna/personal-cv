import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { withPersonData } from '../contexts/person-data-context';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';

const IndexPage = ({ personProvider, data }) => {
  const { personJson } = data;

  useEffect(() => {
    personProvider.setPersonData(personJson);
  }, []);

  return (
    <MainLayout>
      <HeroHeader />
      {/* <Resume />
      <Skills />
      <Education /> */}
    </MainLayout>
  );
};

export default withPersonData(IndexPage);

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
  }
`;
