import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { useTheme } from 'emotion-theming';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import { author } from 'app-content/meta/config';
import { bpAboveMedium, bpAboveLarge } from 'app-utils/breakpoints';

const SectionContainer = styled.section(
  {
    backgroundRepeat: 'repeat',
    backgroundSize: '800px 800px'
  },
  ({ haderPattern, theme }) => ({
    backgroundImage: `url(${haderPattern.childImageSharp.fixed.src})`,
    paddingTop: theme.spacing[8]
  })
);

const ThumbnailImg = styled(Img)`
  ${({ theme }) => ({
    background: theme.colors.black,
    borderRadius: '50%',
    boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.3)'
  })}
`;

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fontSize['2xl'],
  paddingBottom: theme.spacing[8],
  paddingTop: theme.spacing[3],
  textAlign: 'center',
  [bpAboveMedium]: {
    fontSize: theme.fontSize['3xl'],
    padding: `0 0 ${theme.spacing[8]} ${theme.spacing[5]}`,
    textAlign: 'left'
  },
  [bpAboveLarge]: {
    fontSize: theme.fontSize['4xl']
  }
}));

const HeroHeader = () => {
  const theme = useTheme();

  return (
    <StaticQuery
      query={graphql`
        query {
          heroImage: file(relativePath: { eq: "santiago.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
              fixed(width: 200, height: 200, quality: 100) {
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
      render={({ heroImage, haderPattern }) => (
        <SectionContainer haderPattern={haderPattern}>
          <Container>
            <Row align="center" nogutter>
              <Hidden md lg xl>
                <Col xs={12} style={{ textAlign: 'center' }}>
                  <ThumbnailImg
                    fixed={heroImage.childImageSharp.fixed}
                    imgStyle={{
                      left: 'auto',
                      right: theme.spacing[4],
                      top: theme.spacing[6]
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
                <Title>{author.texts.headerResume}</Title>
              </Col>
            </Row>
          </Container>
        </SectionContainer>
      )}
    />
  );
};

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
