import React from 'react';
import Img from 'gatsby-image';
import { useTheme } from '@emotion/react';
import { Container } from 'react-grid-system';
import { StaticQuery, graphql } from 'gatsby';

import Paragraph from 'app-base-components/paragraph';
import { bpAboveSmall } from 'app-utils/breakpoints';

const PostFooter = () => {
  const theme = useTheme();

  return (
    <StaticQuery
      query={graphql`
        {
          heroImage: file(relativePath: { eq: "santiago-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 150, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={({ heroImage }) => (
        <Container>
          <hr />
          <div className="flex items-center py-10 flex-wrap md:flex-no-wrap">
            <Img
              fluid={heroImage.childImageSharp.fluid}
              className="flex-none"
              css={{
                margin: 'auto',
                height: 150,
                width: 150,
                background: theme.colors.white,
                borderRadius: '50%',
                [bpAboveSmall]: {
                  height: 100,
                  width: 100,
                },
              }}
              imgStyle={{
                top: '5px',
                width: 'auto',
                height: 'auto',
              }}
            />
            <Paragraph className="pt-4 md:pt-0 pb-0 md:pl-4 w-full md:w-auto text-center md:text-left">
              Soy <strong>Santiago Serna</strong> y me apasiona la tecnología,
              me encanta ayudar a las personas en su proceso de crecimiento como
              desarrolladores de software.
            </Paragraph>
          </div>
        </Container>
      )}
    />
  );
};

PostFooter.propTypes = {};

PostFooter.defaultProps = {};

export default PostFooter;
