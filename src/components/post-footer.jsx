import React from 'react';
import { useTheme } from '@emotion/react';

import Typography from 'app-base-components/typography';
import HeroThumbnail from 'app-components/hero-thumbnail';
import Container from 'app-base-components/container';

const PostFooter = () => {
  const theme = useTheme();

  return (
    <Container>
      <hr />
      <div className="grid items-center py-10 md:grid-flow-col">
        <div className="">
          <HeroThumbnail size="md" bgColor={theme.colors.white} />
        </div>
        <Typography className="pt-4 md:pt-0 pb-0 md:pl-4 w-full md:w-auto text-center md:text-left">
          Soy <strong>Santiago Serna</strong> y me apasiona la tecnología, me
          encanta ayudar a las personas en su proceso de crecimiento como
          desarrolladores de software.
        </Typography>
      </div>
    </Container>
  );
};

PostFooter.propTypes = {};

PostFooter.defaultProps = {};

export default PostFooter;
