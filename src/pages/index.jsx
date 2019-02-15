import React, { useEffect, useContext } from 'react';
import { graphql } from 'gatsby';

import { withPersonData } from '../contexts/person-data-context';

import Card from '../components/card';

import { ThemeContext } from '../layouts';
// import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header';
// import Resume from '../components/resume/resume';
// import Skills from '../components/skills/skills';
// import Education from '../components/education/education';

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);
  // const { personJson } = data;

  // useEffect(() => {
  //   personProvider.setPersonData(personJson);
  // }, []);

  return (
    <>
      <HeroHeader theme={theme} />
      <Card theme={theme}>
        <Card.Section>hola</Card.Section>
        <Card.Section>hola</Card.Section>
      </Card>
    </>
  );
  // return (
  //   <MainLayout>
  //     <HeroHeader />
  //     <Resume />
  //     <Skills />
  //     <Education />
  //   </MainLayout>
  // );
};

export default IndexPage;
// export default withPersonData(IndexPage);

// export const query = graphql`
//   query {
//   }
// `;
