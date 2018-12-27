import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import socialLinksStyles from './social-links.module.scss';

const SocialLinks = props => (
  <StaticQuery
    query={query}
    render={({ site, socialIcons }) => {
      const socialLinks = site.siteMetadata.person.social;
      const socialLinksNames = Object.keys(socialLinks);

      socialIcons = socialIcons.edges
        .map(edge => edge.node.childImageSharp.fixed)
        .reduce((prev, value) => {
          const key = value.originalName.replace('.png', '');
          prev[key] = value;
          return prev;
        }, {});

      return (
        <ul className={socialLinksStyles.socialLinks} style={props.style}>
          {socialLinksNames.map(socialLink => (
            <li
              key={socialLink}
              className={socialLinksStyles.socialLinks__item}
            >
              <a
                href={socialLinks[socialLink]}
                target="_blanc"
                className={socialLinksStyles.socialLinks__link}
              >
                <Img
                  fixed={socialIcons[socialLink]}
                  className={socialLinksStyles.socialLinks__iconWrapper}
                  imgStyle={{ filter: 'invert(95%)' }}
                />
              </a>
            </li>
          ))}
        </ul>
      );
    }}
  />
);

SocialLinks.propTypes = {
  orientation: PropTypes.string,
  style: PropTypes.object
};

SocialLinks.defaultProps = {
  orientation: 'h',
  style: {}
};

export default SocialLinks;

const query = graphql`
  query {
    site {
      siteMetadata {
        person {
          social {
            facebook
            instagram
            linkedin
            github
          }
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
`;
