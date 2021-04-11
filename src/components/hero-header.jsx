import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import { bpAboveMedium, bpAboveLarge } from 'app-utils/breakpoints';

const HeaderWrapper = styled.header(
  {
    backgroundRepeat: 'repeat',
    backgroundCover: 'cover',
  },
  ({ haderPattern, theme }) => ({
    backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`,
    paddingTop: theme.spacing[8],
  })
);

const ThumbnailImg = styled(Img)`
  ${({ theme }) => ({
    background: theme.colors.primary,
    borderRadius: '50%',
    boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.3)',
  })}
`;

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.dark,
  fontSize: theme.fontSize['2xl'],
  paddingBottom: theme.spacing[8],
  paddingTop: theme.spacing[3],
  textAlign: 'center',
  [bpAboveMedium]: {
    fontSize: theme.fontSize['3xl'],
    padding: `0 0 ${theme.spacing[8]} ${theme.spacing[5]}`,
    textAlign: 'left',
  },
  [bpAboveLarge]: {
    fontSize: theme.fontSize['4xl'],
  },
}));

const HeroHeader = () => (
  <StaticQuery
    query={graphql`
      {
        heroImage: file(relativePath: { eq: "santiago-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        haderPattern: file(relativePath: { eq: "assets/tree_bark.png" }) {
          childImageSharp {
            fixed(width: 350, height: 350, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={({ heroImage, haderPattern }) => (
      <HeaderWrapper haderPattern={haderPattern}>
        <Container>
          <Row align="center" nogutter>
            <Hidden md lg xl>
              <Col xs={12}>
                <ThumbnailImg
                  fluid={heroImage.childImageSharp.fluid}
                  css={{
                    margin: 'auto',
                    height: 250,
                    width: 250,
                  }}
                  imgStyle={{
                    top: '5px',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </Col>
            </Hidden>
            <Visible md lg xl>
              <Col md={4} lg={5}>
                <Img fluid={heroImage.childImageSharp.fluid} />
              </Col>
            </Visible>
            <Col>
              <Title>
                Mi nombre es Santiago y soy desarrollador de sofware con
                experiencia en tecnologías web, actualmente creando desde Bogotá
                D.C, Colombia.
              </Title>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    )}
  />
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
