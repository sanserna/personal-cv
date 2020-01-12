import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { bpAboveMedium } from 'app-utils/breakpoints';
import Seo from 'app-lib/seo';
// import BgImgSection from 'app-lib/bg-img-section';
import HeroHeader from 'app-components/hero-header';
// import Resume from 'app-components/resume';
// import Skills from 'app-components/skills';
// import Education from 'app-components/education';
// import Experience from 'app-components/experience';
// import RecentPosts from 'app-components/recent-posts';

const PageContent = styled.div`
  --container-padding-y: ${({ theme }) => theme.spacing[3]};

  label: page-content;
  background-color: red;

  & .section-container {
    padding-top: var(--container-padding-y);
    padding-bottom: var(--container-padding-y);

    &:first-of-type {
      padding-top: calc(var(--container-padding-y) * 2);
    }

    &:last-of-type {
      padding-bottom: calc(var(--container-padding-y) * 2);
    }

    ${bpAboveMedium} {
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
`;

const IndexPage = ({ data }) => {
  // const {
  //   background1: {
  //     childImageSharp: { fluid: background1 }
  //   },
  //   background2: {
  //     childImageSharp: { fluid: background2 }
  //   },
  //   posts: { edges: posts = [] }
  // } = data;

  return (
    <>
      <Seo />
      <HeroHeader />
      <PageContent>
        {/* <Container>
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
        </Container> */}
      </PageContent>
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
          src
        }
      }
    }
    background2: file(relativePath: { eq: "bg-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100, grayscale: true) {
          src
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
