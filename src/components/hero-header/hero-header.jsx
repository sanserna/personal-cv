import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import Header from './header';

const SectionContainer = styled.section(
  {
    backgroundRepeat: 'repeat',
    backgroundSize: '800px 800px'
  },
  ({ haderPattern, theme }) => ({
    backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`
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
        <Container>
          <Header />
          <Row align="center" nogutter>
            <Col>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas
                aspernatur perferendis est ipsam corrupti.
              </h1>
            </Col>
            <Col md={5}>
              <img
                src="https://kentcdodds.com/static/kent-985f8a0db8a37e47da2c07080cffa865.png"
                alt=""
                style={{ maxWidth: '100%', marginBottom: 0 }}
              />
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    )}
  />
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
