import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { author } from 'app-content/meta/config';
import SocialLinks from './social-links';

const text = theme => ({
  color: theme.colors.gray[400],
  textAlign: 'center',
  width: '100%'
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DescriptionContent = styled.div`
  padding-top: 30px;
  width: 100%;
`;

const Title = styled.h2(
  {
    margin: 0,
    textTransform: 'uppercase'
  },
  ({ theme }) => text(theme)
);

const Subtitle = styled.small(
  {
    display: 'block',
    fontStyle: 'italic'
  },
  ({ theme }) => text(theme)
);

const Hero = ({ avatar }) => (
  <Container>
    <Img
      fixed={avatar}
      css={theme => ({
        borderRadius: '50%',
        boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.3)',
        border: `10px solid ${theme.colors.primary}`
      })}
    />
    <DescriptionContent>
      <Title>{author.name}</Title>
      <Subtitle>{author.profesion}</Subtitle>
    </DescriptionContent>
    <SocialLinks style={{ paddingTop: '30px' }} />
  </Container>
);

Hero.propTypes = {
  avatar: PropTypes.object.isRequired
};

Hero.defaultProps = {};

export default Hero;
