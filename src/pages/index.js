import React from 'react';

import MainLayout from '../components/main-layout/main-layout';
import HeroHeader from '../components/hero-header/hero-header';
import Resume from '../components/resume/resume';
import Skills from '../components/skills/skills';

export default () => {
  return (
    <MainLayout>
      <HeroHeader />
      <Resume />
      <Skills />
    </MainLayout>
  );
};
