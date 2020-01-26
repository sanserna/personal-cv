/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import ProgressBar from 'app-base-components/progress-bar';
import { author } from 'app-content/meta/config';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const SectionHeading = styled(Heading)`
  ${({ theme }) => `
    font-size: ${theme.fontSize['5xl']};
  `}
`;

const AboutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Seo />
      <Container>
        <SectionWrapper>
          <Paragraph lead>Soy Santiago!</Paragraph>
          <Paragraph>{author.texts.resume}</Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          {/* <Paragraph lead>Algunos de mis conocimientos...</Paragraph> */}
          <Row>
            {/* <Col xs={6}>s</Col> */}
            <Col xs={12}>
              {author.techSkills.map((skill, index) => (
                <div
                  key={index}
                  css={{
                    padding: theme.spacing[2]
                  }}
                >
                  <h3>{skill.label}</h3>
                  <ProgressBar value={skill.level} />
                </div>
              ))}
            </Col>
          </Row>
        </SectionWrapper>
      </Container>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
