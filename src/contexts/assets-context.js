import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const { Provider, Consumer } = React.createContext();

class AssetsProvider extends React.Component {
  render() {
    return (
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
            resumeAvatar: file(relativePath: { eq: "profile-pic.jpg" }) {
              childImageSharp {
                fixed(width: 330, quality: 100) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
            haderPattern: file(relativePath: { eq: "footer_lodyas.png" }) {
              childImageSharp {
                fixed(width: 800, height: 800, quality: 100) {
                  src
                }
              }
            }
            socialIcons: allFile(
              filter: {
                relativeDirectory: { eq: "icons" }
                name: { in: ["facebook", "github", "linkedin", "instagram"] }
              }
            ) {
              edges {
                node {
                  childImageSharp {
                    fixed(width: 24, height: 24, quality: 100) {
                      ...GatsbyImageSharpFixed_noBase64
                      originalName
                    }
                  }
                }
              }
            }
          }
        `}
        render={assets => (
          <Provider value={{ ...assets }}>{this.props.children}</Provider>
        )}
      />
    );
  }
}

export { AssetsProvider, Consumer as AssetsConsumer };
