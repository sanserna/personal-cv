import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import { graphql } from 'gatsby';

import { ThemeContext } from '../layouts';
import Seo from '../lib/seo';
import BgImgSection from '../lib/bg-img-section';
import HeroHeader from '../components/hero-header';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Education from '../components/education';
import Experience from '../components/experience';
import RecentPosts from '../components/recent-posts';

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext);
  const {
    color: {
      neutral: {
        gray: { b: pageContentBgColor }
      }
    },
    space: { s: sectionPaddingY }
  } = theme;
  const {
    background1: {
      childImageSharp: { fluid: background1 }
    },
    background2: {
      childImageSharp: { fluid: background2 }
    },
    posts: { edges: posts = [] }
  } = data;

  return (
    <>
      <Seo />
      <HeroHeader theme={theme} />
      <div className="page-content">
        <Container>
          <Row className="section-container">
            <Col>
              <Resume theme={theme} />
            </Col>
          </Row>
          <Row className="section-container">
            <Col>
              <Skills theme={theme} />
            </Col>
          </Row>
        </Container>

        <BgImgSection background={background1.src}>
          &quot;Las oportunidades grandes nacen de haber sabido aprovechar las
          pequeñas&quot;
          <br />
          <br />- BG
        </BgImgSection>

        <Container>
          <Row className="section-container">
            <Col>
              <Education theme={theme} />
            </Col>
          </Row>
          <Row className="section-container">
            <Col>
              <Experience theme={theme} />
            </Col>
          </Row>
        </Container>

        <BgImgSection background={background2.src}>
          &quot;Contrata a los mejores y déjalos hacer lo que saben. Si no,
          contrata a los mas baratos y que hagan lo que tu dices.&quot;
          <br />
          <br />- WB
        </BgImgSection>

        <Container>
          <Row className="section-container">
            <Col>
              <RecentPosts theme={theme} posts={posts.map(post => post.node)} />
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        --container-padding-y: ${sectionPaddingY};

        .page-content {
          background-color: ${pageContentBgColor};

          :global(.section-container) {
            padding-top: var(--container-padding-y);
            padding-bottom: var(--container-padding-y);

            &:first-of-type {
              padding-top: calc(var(--container-padding-y) * 2);
            }

            &:last-of-type {
              padding-bottom: calc(var(--container-padding-y) * 2);
            }

            @above tablet {
              padding-top: calc(var(--container-padding-y) * 5);
              padding-bottom: calc(var(--container-padding-y) * 5);

              &:first-of-type {
                padding-top: calc(var(--container-padding-y) * 10);
              }

              &:last-of-type {
                padding-bottom: calc(var(--container-padding-y) * 10);
              }
            }
          }
        }
      `}</style>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query {
    background1: file(relativePath: { eq: "bg-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          presentationHeight
        }
      }
    }
    background2: file(relativePath: { eq: "bg-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          presentationHeight
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
