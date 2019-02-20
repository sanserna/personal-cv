import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Hero from './hero';

const HeroHeader = ({ theme }) => (
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
      <>
        <section className="container">
          <Header theme={theme} />
          <Hero theme={theme} avatar={headerAvatar.childImageSharp.fixed} />
        </section>

        <style jsx>{`
          .container {
            background-repeat: repeat;
            background-size: 800px 800px;
            background-image: url(${haderPattern.childImageSharp.fixed.src});
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            height: calc(100vh - ${theme.space.layout});
            width: 100%;
          }
        `}</style>
      </>
    )}
  />
);

HeroHeader.propTypes = {
  theme: PropTypes.object.isRequired
};

HeroHeader.defaultProps = {};

export default HeroHeader;
