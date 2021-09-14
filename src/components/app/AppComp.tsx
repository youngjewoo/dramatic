import React from 'react';
import LinkComp from '../link/LinkComp';
import PageComp from '../page/PageComp';
import SplitComp from '../split/SplitComp';

import './App.css';

const AppComp: React.FC = () => (
  <div className="app">
    <LinkComp />
    <div className="app-split">
      <PageComp />
      <SplitComp />
    </div>
  </div>
);

export default AppComp;
