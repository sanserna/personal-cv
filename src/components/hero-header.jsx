import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import heroBgPattern from 'app-images/assets/tree_bark.png';
import HeroThumbnail from 'app-components/hero-thumbnail';
import Typography from 'app-base-components/typography';
import Container from 'app-base-components/container';

const HeroHeader = () => (
  <div
    className="bg-repeat bg-[length:350px_350px]"
    css={{ backgroundImage: `url(${heroBgPattern})` }}
  >
    <Container
      className="
        flex
        flex-wrap
        items-center
        py-8
        md:flex-nowrap
        md:pb-0
      "
    >
      <div className="w-full md:hidden">
        <HeroThumbnail size="lg" />
      </div>
      <div className="hidden md:shrink-0 md:block md:w-4/12 lg:w-5/12">
        <StaticImage
          alt="hero"
          src="../images/santiago-2.png"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </div>
      <Typography
        className="pt-3 text-center md:text-left md:p-0 md:pl-5"
        variant="h2"
      >
        Mi nombre es Santiago y soy desarrollador de sofware con experiencia en
        tecnologías web, actualmente creando desde Bogotá D.C, Colombia.
      </Typography>
    </Container>
  </div>
);

HeroHeader.propTypes = {};

HeroHeader.defaultProps = {};

export default HeroHeader;
