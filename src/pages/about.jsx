/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Container } from 'react-grid-system';

import Layout from 'app-components/layout';
import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import ProgressBar from 'app-base-components/progress-bar';
import Timeline from 'app-components/timeline';
import SocialLinks from 'app-components/social-links';
import { author, texts } from 'app-content/meta/config';

const SectionWrapper = styled.section(({ theme }) => ({
  paddingTop: theme.spacing[16]
}));

const AboutPage = ({ location }) => {
  const theme = useTheme();

  return (
    <Layout location={location}>
      <Seo />
      <Container>
        <SectionWrapper>
          <Paragraph lead>
            Mi nombre es Santiago!... {texts.resume.main}
          </Paragraph>
          <Paragraph css={{ paddingBottom: 0 }}>
            {texts.resume.secondary}
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Experiencia</Heading>
          <Paragraph>{texts.experience}</Paragraph>
          <Timeline items={author.experience} />
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
                    fontSize: theme.fontSize.lg,
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
          <Paragraph>{texts.education}</Paragraph>
          <Timeline items={author.education} />
        </SectionWrapper>
        <SocialLinks
          iconColor={theme.colors.dark}
          iconSize="xl"
          css={{
            padding: `${theme.spacing[16]} 0 ${theme.spacing[10]} 0`
          }}
        />
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default AboutPage;
