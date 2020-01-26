/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Container, Row, Col } from 'react-grid-system';

import Seo from 'app-base-components/seo';
import Heading from 'app-base-components/heading';
import Paragraph from 'app-base-components/paragraph';
import ProgressBar from 'app-base-components/progress-bar';
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
          <Paragraph>{author.texts.resume}</Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          <Heading>Conocimientos</Heading>
          <Row>
            <Col xs={12} md={4}>
              <ul
                css={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0
                }}
              >
                {author.softSkills.map((skill, index) => (
                  <li
                    key={index}
                    css={{
                      '&::before': {
                        color: theme.colors.dark,
                        content: '"+"',
                        paddingRight: '5px'
                      }
                    }}
                  >
                    <Paragraph
                      css={{
                        display: 'inline-block'
                      }}
                    >
                      {skill}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={12} md={8}>
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
                        fontWeight: theme.fontWeight.semibold,
                        paddingRight: theme.spacing[3],
                        textAlign: 'right'
                      }}
                    >
                      {skill.label}
                    </span>
                    <div
                      className="pb-wrapper"
                      css={{
                        display: 'table-cell',
                        width: '80%',
                        height: '60px'
                      }}
                    >
                      <ProgressBar value={skill.level} />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </SectionWrapper>
      </Container>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
