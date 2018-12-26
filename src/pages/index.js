import React from 'react';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';

export default () => {
  return (
    <MainLayout>
      <HeroHeader />
      <Resume />
    </MainLayout>
  );
};
