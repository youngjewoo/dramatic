import React from 'react';
import HeaderComp from '../header/HeaderComp';
import LinkListComp from './list/LinkListComp';
import useAppState from '../../hooks/useAppState';

import './Link.css';

const LinkComp: React.FC = () => {
  const state = useAppState();

  return (
    <div className="link">
      <HeaderComp src="Earth.svg" label="Links" fontColor="snow" />
      <LinkListComp title="Section" resModels={state.getSectionModel()} />
      <LinkListComp title="All" resModels={state.getResources()} />
    </div>
  );
};

export default LinkComp;
