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
        <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            unde quos dolor ea sunt consequuntur, voluptatem repellendus
            repellat sequi culpa?
          </h1>
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
            margin: 0;
            text-align: center;
            text-shadow: 1px 1px 10px black;
          }
        `}</style>
      </SectionContainer>

      <SectionContainer>
        <Contact theme={theme} />
      </SectionContainer>

      <Footer theme={theme} />
    </>
  );
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
        fluid(maxWidth: 800, maxHeight: 1100, quality: 90, cropFocus: CENTER) {
          src
        }
      }
    }
    bgCondingMobile: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 850, quality: 90, cropFocus: CENTER) {
          src
        }
      }
    }
  }
`;
