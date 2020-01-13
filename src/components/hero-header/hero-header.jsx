import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Hero from './hero';

const SectionContainer = styled.section(
  {
    backgroundRepeat: 'repeat',
    backgroundSize: '800px 800px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },
  ({ haderPattern, theme }) => ({
    backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`,
    height: `calc(100vh - ${theme.spacing[8]})`
  })
);

const HeroHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        headerAvatar: file(relativePath: { eq: "profile-pic.jpg" }) {
          childImageSharp {
            fixed(width: 250, height: 250, quality: 100, grayscale: true) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        haderPattern: file(relativePath: { eq: "assets/footer_lodyas.png" }) {
          childImageSharp {
            fixed(width: 800, height: 800, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={({ headerAvatar, haderPattern }) => (
      <SectionContainer haderPattern={haderPattern}>
        <Header />
        <Hero avatar={headerAvatar.childImageSharp.fixed} />
      </SectionContainer>
    )}
  />
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
