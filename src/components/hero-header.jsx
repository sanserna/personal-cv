import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import HeroThumbnail from 'app-components/hero-thumbnail';
import { bpAboveMedium, bpAboveLarge } from 'app-utils/breakpoints';
import heroBgPattern from 'app-images/assets/tree_bark.png';

const HeaderWrapper = styled.header(
  {
    backgroundRepeat: 'repeat',
    backgroundCover: 'cover',
    backgroundImage: `url(${heroBgPattern})`,
  },
  ({ theme }) => ({
    paddingTop: theme.spacing[8],
  })
);

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
  <HeaderWrapper>
    <Container>
      <Row align="center" nogutter>
        <Hidden md lg xl>
          <Col xs={12}>
            <HeroThumbnail size="lg" showShadow />
          </Col>
        </Hidden>
        <Visible md lg xl>
          <Col md={4} lg={5}>
            <StaticImage
              alt="hero"
              src="../images/santiago-2.png"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
          </Col>
        </Visible>
        <Col>
          <Title>
            Mi nombre es Santiago y soy desarrollador de sofware con experiencia
            en tecnologías web, actualmente creando desde Bogotá D.C, Colombia.
          </Title>
        </Col>
      </Row>
    </Container>
  </HeaderWrapper>
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
