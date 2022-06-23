import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import HeroThumbnail from 'app-components/hero-thumbnail';
import Typography from 'app-base-components/typography';
import useMediaQuery from 'app-hooks/use-media-query';
import heroBgPattern from 'app-images/assets/tree_bark.png';

const HeroHeader = () => {
  const isMobile = useMediaQuery(theme => `(max-width:${theme.screens.md})`);

  return (
    <div
      className="pt-8 bg-repeat bg-[length:350px_350px]"
      css={{ backgroundImage: `url(${heroBgPattern})` }}
    >
      <Container>
        <Row align="center" nogutter>
          <Hidden md lg xl>
            <Col xs={12}>
              <HeroThumbnail size="lg" />
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
            <Typography
              className="pb-8 pt-3 md:p-0 md:pl-5"
              variant="h4"
              component="h1"
              align={isMobile ? 'center' : null}
            >
              Mi nombre es Santiago y soy desarrollador de sofware con
              experiencia en tecnologías web, actualmente creando desde Bogotá
              D.C, Colombia.
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
