import React from 'react';
import Button from '@material-ui/core/Button';

import MainLayout from '../components/main-layout/main-layout';

export default () => (
  <MainLayout>
    <div>hola</div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </MainLayout>
);
