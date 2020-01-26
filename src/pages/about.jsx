/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import ProgressBar from 'app-base-components/progress-bar';
import Timeline from 'app-components/timeline';
import { author } from 'app-content/meta/config';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const AboutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Seo />
      <Container>
        <SectionWrapper>
          <Paragraph lead>Soy Santiago!</Paragraph>
          <Paragraph css={{ paddingBottom: 0 }}>
            {author.texts.resume}
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Conocimientos</Heading>
          <div className="table w-full">
            {author.techSkills.map((skill, index) => (
              <div
                key={index}
                css={css`
                  padding: ${theme.spacing[2]};
                  display: table-row;
                  &:last-child {
                    .pb-wrapper {
                      height: auto;
                    }
                  }
                `}
              >
                <span
                  css={{
                    display: 'table-cell',
                    fontSize: theme.fontSize.xl,
                    paddingRight: theme.spacing[3]
                  }}
                >
                  {skill.label}
                </span>
                <div
                  className="pb-wrapper"
                  css={{
                    display: 'table-cell',
                    width: '85%',
                    height: '60px'
                  }}
                >
                  <ProgressBar value={skill.level} />
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Educación</Heading>
          <Paragraph>{author.texts.education}</Paragraph>
          <Timeline items={author.education} />
        </SectionWrapper>
      </Container>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
