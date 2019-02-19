import React, { useEffect, useContext } from 'react';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';
import Seo from '../components/seo';
import SectionContainer from '../components/section-container';
import HeroHeader from '../components/hero-header';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Seo />

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

      <SectionContainer>
        <Experience theme={theme} />
      </SectionContainer>

      <SectionContainer>
        <Contact theme={theme} />
      </SectionContainer>

      <Footer theme={theme} />
    </>
  );
};

export default IndexPage;
