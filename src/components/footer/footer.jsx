import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { author } from '../../../content/meta/config';

const Footer = ({ theme }) => (
  <StaticQuery
    query={graphql`
      query {
        haderPattern: file(relativePath: { eq: "assets/footer_lodyas.png" }) {
          childImageSharp {
            fixed(width: 800, height: 800, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={({ haderPattern }) => (
      <>
        <section className="container">
          <h2>SANSERNA</h2>
          <p>© 2018 Santiago Serna. Todos los derechos reservados.</p>
        </section>

        <style jsx>{`
          .container {
            background-repeat: repeat;
            background-size: 800px 800px;
            background-image: url(${haderPattern.childImageSharp.fixed.src});
            padding: 60px;
            width: 100%;
          }
        `}</style>

        <style jsx>{`
          h2,
          p {
            color: white;
            text-align: center;
            width: 100%;
            margin: 0;
          }

          p {
            padding-top: 10px;
          }
        `}</style>
      </>
    )}
  />
);

Footer.propTypes = {
  theme: PropTypes.object.isRequired
};

Footer.defaultProps = {};

export default Footer;
