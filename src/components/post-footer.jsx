import React from 'react';
import Img from 'gatsby-image';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';
import { StaticQuery, graphql } from 'gatsby';

import Paragraph from 'app-base-components/paragraph';

const PostFooter = () => {
  const theme = useTheme();

  return (
    <StaticQuery
      query={graphql`
        {
          heroImage: file(relativePath: { eq: "santiago-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={({ heroImage }) => (
        <Container>
          <hr />
          <div className="flex items-center py-10">
            <Img
              fluid={heroImage.childImageSharp.fluid}
              className="flex-none"
              css={{
                marginRight: theme.spacing[3],
                height: 100,
                width: 100,
                background: theme.colors.white,
                borderRadius: '50%'
              }}
              imgStyle={{
                top: '5px',
                width: 'auto',
                height: 'auto'
              }}
            />
            <Paragraph className="pl-3 pb-0">
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
