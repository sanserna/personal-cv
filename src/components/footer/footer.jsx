import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

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
          <p className="footer-text">
            © 2018 Santiago Serna. Todos los derechos reservados.
          </p>
        </section>

        <style jsx>{`
          .container {
            background-repeat: repeat;
            background-size: 800px 800px;
            padding: 60px;
            width: 100%;
          }

          p {
            color: white;
            text-align: center;
            width: 100%;
            margin: 0;
          }
        `}</style>

        <style jsx>{`
          .container {
            background-image: url(${haderPattern.childImageSharp.fixed.src});
          }

          .footer-text {
            color: ${theme.color.neutral.gray.d};
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
