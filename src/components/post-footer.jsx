import React from 'react';
import { useTheme } from '@emotion/react';
import { Container } from 'react-grid-system';

import Paragraph from 'app-base-components/body';
import HeroThumbnail from 'app-components/hero-thumbnail';

const PostFooter = () => {
  const theme = useTheme();

  return (
    <Container>
      <hr />
      <div className="flex items-center py-10 flex-wrap md:flex-nowrap">
        <div className="flex-none m-auto">
          <HeroThumbnail size="md" bgColor={theme.colors.white} />
        </div>
        <Paragraph className="pt-4 md:pt-0 pb-0 md:pl-4 w-full md:w-auto text-center md:text-left">
          Soy <strong>Santiago Serna</strong> y me apasiona la tecnología, me
          encanta ayudar a las personas en su proceso de crecimiento como
          desarrolladores de software.
        </Paragraph>
      </div>
    </Container>
  );
};

PostFooter.propTypes = {};

PostFooter.defaultProps = {};

export default PostFooter;
