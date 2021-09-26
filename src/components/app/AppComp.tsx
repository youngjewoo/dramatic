import React from 'react';
import LinkComp from '../link/LinkComp';
import PageComp from '../page/PageComp';
import SplitComp from '../split/SplitComp';
import useAppState from '../../hooks/useAppState';
import fetchResource from '../../handler/pasteHandler';

import './App.css';

const AppComp: React.FC = () => {
  const appState = useAppState();

  return (
    <div className="app" onPaste={(e) => fetchResource(e.clipboardData.getData('text'), appState)}>
      <LinkComp />
      <div className="app-content">
        <PageComp />
        {appState.isSplitOn() && <SplitComp />}
      </div>
    </div>
  );
};

export default AppComp;
