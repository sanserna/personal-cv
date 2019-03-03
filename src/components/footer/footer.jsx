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
          <p className="footer-text">
            Hecho con{' '}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              reactjs
            </a>{' '}
            y{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gatsbyjs
            </a>
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

          a {
            color: ${theme.color.neutral.gray.b};
            font-weight: bold;
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
