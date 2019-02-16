import React, { useEffect, useContext } from 'react';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';
import SectionContainer from '../components/section-container';
import HeroHeader from '../components/hero-header';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Education from '../components/education';

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <HeroHeader theme={theme} />

      <SectionContainer>
        <Resume theme={theme} />
      </SectionContainer>

      <SectionContainer>
        <Skills theme={theme} />
      </SectionContainer>

      <SectionContainer>
        <Education theme={theme} />
      </SectionContainer>
    </>
  );
};

export default IndexPage;
