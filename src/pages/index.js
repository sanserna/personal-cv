import React from 'react';
import PropTypes from 'prop-types';

import { PersonDataProvider } from '../contexts/person-data-context';
import { AssetsProvider } from '../contexts/assets-context';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';

const IndexPage = () => (
  <MainLayout>
    <PersonDataProvider>
      <AssetsProvider>
        <HeroHeader />
        <Resume />
        <Skills />
        <Education />
      </AssetsProvider>
    </PersonDataProvider>
  </MainLayout>
);

IndexPage.propTypes = {
  data: PropTypes.object
};

IndexPage.defaultProps = {
  data: {}
};

export default IndexPage;
