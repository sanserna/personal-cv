import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';
import Seo from '../lib/seo';
import SectionContainer from '../lib/section-container';
import BgImgSection from '../lib/bg-img-section';
import HeroHeader from '../components/hero-header';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);
  const {
    bgConding: {
      childImageSharp: { fluid: bgConding }
    }
  } = data;

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

      <SectionContainer style={{ paddingLeft: 0, paddingRight: 0 }}>
        <BgImgSection
          background={bgConding}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur voluptates et incidunt dolore veniam suscipit voluptatibus blanditiis fugiat corporis."
        />
      </SectionContainer>

      <SectionContainer>
        <Contact theme={theme} />
      </SectionContainer>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query {
    bgConding: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationHeight
        }
      }
    }
  }
`;
