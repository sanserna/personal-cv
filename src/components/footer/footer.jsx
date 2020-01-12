import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

const Section = styled.section`
  background-repeat: repeat;
  background-size: 800px 800px;
  padding: 60px;
  width: 100%;
  background-image: ${({ haderPattern }) =>
    `url(${haderPattern.childImageSharp.fixed.src})`};
`;

const FooterText = styled.p`
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-weight: bold;
`;

const Footer = () => (
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
      <Section haderPattern={haderPattern}>
        <FooterText>
          © 2018 Santiago Serna. Todos los derechos reservados.
        </FooterText>
        <FooterText>
          Hecho con{' '}
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactjs
          </Link>{' '}
          y{' '}
          <Link
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gatsbyjs
          </Link>
        </FooterText>
      </Section>
    )}
  />
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
