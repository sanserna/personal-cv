import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';
import Seo from '../lib/seo';
import SectionContainer from '../lib/section-container';
import HeroHeader from '../components/hero-header';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

// FIXME: hacer componente generico en lib
const BgImgSection = ({
  text,
  backgrounds: { bgCondingDesktop, bgCondingTablet, bgCondingMobile }
}) => (
  <>
    <div>
      <h1>{text}</h1>
    </div>

    <style jsx>{`
      div {
        background-size: cover;
        background-attachment: fixed;
        background-position: 50% 50%;
        background-image: url(${bgCondingMobile});
        padding: 30px;

        @from-width tablet {
          background-image: url(${bgCondingTablet});
          padding: 200px 100px;
        }

        @from-width desktop {
          background-image: url(${bgCondingDesktop});
        }
      }

      h1 {
        color: white;
        margin: 0 auto;
        text-align: center;
        text-shadow: 1px 1px 10px black;
        max-width: 1200px;
      }
    `}</style>
  </>
);

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);
  const {
    bgCondingDesktop: {
      childImageSharp: {
        fluid: { src: bgCondingDesktop }
      }
    },
    bgCondingTablet: {
      childImageSharp: {
        fluid: { src: bgCondingTablet }
      }
    },
    bgCondingMobile: {
      childImageSharp: {
        fluid: { src: bgCondingMobile }
      }
    }
  } = data;
  const backgrounds = { bgCondingDesktop, bgCondingTablet, bgCondingMobile };

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
          backgrounds={backgrounds}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur voluptates et incidunt dolore veniam suscipit voluptatibus blanditiis fugiat corporis."
        />
      </SectionContainer>

      <SectionContainer>
        <Contact theme={theme} />
      </SectionContainer>

      <Footer theme={theme} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query {
    bgCondingDesktop: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          src
        }
      }
    }
    bgCondingTablet: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1100, quality: 90) {
          src
        }
      }
    }
    bgCondingMobile: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 850, quality: 90) {
          src
        }
      }
    }
  }
`;
